import type {
  ComponentInfo,
  ComponentResolver,
} from "unplugin-vue-components/types";

function isNull(value: unknown): value is null | undefined {
  return value === undefined || value === null;
}

interface VueYuMiResolverOptions {
  /**
   * import css or sass styles with components
   *
   * @default 'css'
   */
  importStyle?: boolean | "css" | "sass";
  /**
   * import the dark theme preset styles
   *
   * @default false
   */
  importDarkTheme?: boolean;
  /**
   * prefix for name of components
   *
   * @default ''
   */
  prefix?: string;
  /**
   * auto import for directives
   *
   * @default true
   */
  directives?: boolean;
  /**
   * resolve icon components from '@vue-yu-mi/icons'
   *
   * @default true
   */
  resolveIcon?: boolean;
  /**
   * prefix for name of icon components, same to `prefix` if not be specified
   *
   * @default undefined
   */
  iconPrefix?: string;
}

function queryMetaData() {
  try {
    const root = resolveModule("vexip-ui") || process.cwd();
    const path =
      resolveModule("vexip-ui/meta-data.json") ||
      resolveModule("vexip-ui/meta-data.json", { paths: [root] });
    const metaData = JSON.parse(readFileSync(path!, "utf-8"));

    components = metaData.components;
    styleAlias = metaData.styleAlias;
    directives = metaData.directives;
  } catch (e) {
    console.error(e);
    throw new Error(
      "[vexip-ui:plugins] failed to load vexip-ui, have you installed it?"
    );
  }
}

let components: string[] | undefined;
let styleAlias: Record<string, string> | undefined;
let directives: Record<string, string[]> | undefined;

/**
 * The unplugin-vue-components Resolver for vue-yu-mi
 */

export function VueYuMiResolver(
  options: VueYuMiResolverOptions = {}
): ComponentResolver[] {
  options = {
    importStyle: "css",
    directives: true,
    resolveIcon: true,
    ...options,
  };
  if (isNull(options.iconPrefix)) {
    options.iconPrefix = options.prefix;
  }

  return [
    {
      type: "component",
      resolve: (name) => {
        if (!components) {
          queryMetaData();
        }

        return resolveComponent(name, options);
      },
    },
    {
      type: "directive",
      resolve: (name) => {
        if (!directives) {
          queryMetaData();
        }

        return resolveDirective(name, options);
      },
    },
    {
      type: "component",
      resolve: (name) => resolveIconComponent(name, options),
    },
  ];
}
