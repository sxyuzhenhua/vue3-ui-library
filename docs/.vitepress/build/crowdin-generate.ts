import fs from 'fs'
import path from 'path'
import { errorAndExit } from '../utils/log'
const projRoot = path.resolve(__dirname, '..', '..')

// NB: this file is only for generating files that enables developers to develop the website.
const componentLocaleRoot = path.resolve(projRoot, '.vitepress/crowdin') // /Users/yuzhenhua/project/element-plus/docs/.vitepress/crowdin

const exists = 'File already exists'

async function main() {
  const localeOutput = path.resolve(projRoot, '.vitepress/i18n')
  if (fs.existsSync(localeOutput)) {
    throw new Error(exists)
  }

  console.log('Starting for build doc for developing');
  // all language should be identical since it is mirrored from crowdin.
  const dirs = await fs.promises.readdir(componentLocaleRoot, {
    withFileTypes: true,
  })
  const languages = dirs
    .map((dir) => dir.name)
  const langWithoutEn = languages.filter((l) => l !== 'en-US')
  await fs.promises.mkdir(localeOutput)

  // build lang.json for telling `header>language-select` how many languages are there
  await fs.promises.writeFile(
    path.resolve(localeOutput, 'lang.json'),
    JSON.stringify(languages),
    'utf-8'
  )

  // loop through en-US

  const enUS = path.resolve(componentLocaleRoot, 'en-US')
  // we do not include en-US since we are currently using it as template
  const languagePaths = langWithoutEn.map((l) => {
    return {
      name: l,
      pathname: path.resolve(componentLocaleRoot, l),
    }
  })

  await traverseDir(enUS, languagePaths, localeOutput)
  // enUS: /Users/yuzhenhua/project/element-plus/docs/.vitepress/crowdin/en-US
  // languagePaths: [
  //   {
  //     name: 'zh-CN',
  //     pathname: '/Users/yuzhenhua/project/element-plus/docs/.vitepress/crowdin/zh-CN'
  //   }
  // ]
  // localeOutput: /Users/yuzhenhua/project/element-plus/docs/.vitepress/i18n
}

async function traverseDir(
  dir: string,
  paths: { name: string; pathname: string }[],
  targetPath: string
) {
  const contents = await fs.promises.readdir(dir, { withFileTypes: true })

  await Promise.all(
    contents.map(async (c) => {
      if (c.isDirectory()) {
        await fs.promises.mkdir(path.resolve(targetPath, c.name), {
          recursive: true,
        })

        return traverseDir(
          path.resolve(dir, c.name),
          paths.map((p) => {
            return {
              ...p,
              pathname: path.resolve(p.pathname, c.name),
            }
          }),
          path.resolve(targetPath, c.name)
        )
      } else if (c.isFile()) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const content = require(path.resolve(dir, c.name))

        const contentToWrite = {
          'en-US': content,
        }

        await Promise.all(
          paths.map(async (p) => {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const content = require(path.resolve(p.pathname, c.name))

            contentToWrite[p.name] = content
          })
        )

        return fs.promises.writeFile(
          path.resolve(targetPath, c.name),
          JSON.stringify(contentToWrite, null, 2),
          {
            encoding: 'utf-8',
          }
        )
      }
    })
  )
}

main()
  .then(() => {
    console.log('Locale for website development generated')
  })
  .catch((err) => {
    if (err.message === exists) {
      // do nothing
    } else {
      errorAndExit(err)
    }
  })
