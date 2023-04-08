import VueYuMi from "vue-yu-mi";

import Layout, { NotFound, globals } from "../vitepress";
import { define } from "../utils/types";
import "uno.css";
import "./style.css";
import type { Theme } from "vitepress";

export default define<Theme>({
  // root component to wrap each page
  Layout,

  // this is a Vue 3 functional component
  NotFound,

  enhanceApp({ app }) {
    app.use(VueYuMi);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  },
});
