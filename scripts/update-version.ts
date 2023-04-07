import consola from "consola";
import chalk from "chalk";
import { errorAndExit, getWorkspacePackages } from "@yu/build-utils";
import type { Project } from "@pnpm/find-workspace-packages";

async function main() {
  const tagVersion = process.env.TAG_VERSION;
  const gitHead = process.env.GIT_HEAD;
  console.log("======", tagVersion, gitHead);
  if (!tagVersion || !gitHead) {
    errorAndExit(
      new Error(
        "No tag version or git head were found, make sure that you set the environment variable $TAG_VERSION \n"
      )
    );
  }

  consola.log(chalk.cyan("Start updating version"));
  consola.log(chalk.cyan(`$TAG_VERSION: ${tagVersion}`));
  consola.log(chalk.cyan(`$GIT_HEAD: ${gitHead}`));

  consola.debug(chalk.yellow(`Updating package.json for yu-element`));

  const pkgs = Object.fromEntries(
    (await getWorkspacePackages()).map((pkg) => [pkg.manifest.name!, pkg])
  );
  const elementPlus = pkgs["yu-element"] || pkgs["@yu-element/nightly"];
  const eslintConfig = pkgs["@yu/eslint-config"];
  const metadata = pkgs["@element-plus/metadata"];

  const writeVersion = async (project: Project) => {
    await project.writeProjectManifest({
      ...project.manifest,
      version: tagVersion,
      gitHead,
    } as any);
  };

  try {
    await writeVersion(elementPlus);
    await writeVersion(eslintConfig);
    await writeVersion(metadata);
  } catch (err: any) {
    errorAndExit(err);
  }

  consola.debug(chalk.green(`$GIT_HEAD: ${gitHead}`));
  consola.success(chalk.green(`Git head updated to ${gitHead}`));
}

main();
