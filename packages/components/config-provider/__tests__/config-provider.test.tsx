import { defineComponent, nextTick, reactive, ref } from "vue";
import { mount } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { useGlobalConfig, useLocale } from "@yu/hooks";
import Chinese from "@yu/locale/lang/zh-cn";
import English from "@yu/locale/lang/en";
import { YuButton, YuMessage } from "@yu/components";
import { rAF } from "@yu/test-utils/tick";
import ConfigProvider from "../src/config-provider";

import type { PropType } from "vue";
import type { VueWrapper } from "@vue/test-utils";
import type { Language } from "@yu/locale";
import type { ConfigProviderProps } from "../src/config-provider";

const TestComp = defineComponent({
  setup() {
    const { t } = useLocale();
    return () => <div>{t("el.popconfirm.confirmButtonText")}</div>;
  },
});

describe("config-provider", () => {
  describe("locale-provider", () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
      const currentLocale = ref<Language>(English);
      const oppositeLocale = ref<Language>(Chinese);
      const toEn = () => {
        currentLocale.value = English;
        oppositeLocale.value = Chinese;
      };
      const toZh = () => {
        currentLocale.value = Chinese;
        oppositeLocale.value = English;
      };

      wrapper = mount(() => (
        <>
          <ConfigProvider locale={currentLocale.value}>
            <TestComp class="current-locale" />
            <ConfigProvider locale={oppositeLocale.value}>
              <TestComp class="opposite-locale" />
            </ConfigProvider>
          </ConfigProvider>

          <button onClick={toEn} class="to-en">
            toEn
          </button>
          <button onClick={toZh} class="to-zh">
            toZh
          </button>
        </>
      ));
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it("should provide locale properly", async () => {
      expect(wrapper.find(".current-locale").text()).toBe(
        English.el.popconfirm.confirmButtonText
      );
      expect(wrapper.find(".opposite-locale").text()).toBe(
        Chinese.el.popconfirm.confirmButtonText
      );
    });

    it("should reactively update the text on page", async () => {
      expect(wrapper.find(".current-locale").text()).toBe(
        English.el.popconfirm.confirmButtonText
      );
      expect(wrapper.find(".opposite-locale").text()).toBe(
        Chinese.el.popconfirm.confirmButtonText
      );

      await wrapper.find(".to-zh").trigger("click");

      expect(wrapper.find(".current-locale").text()).toBe(
        Chinese.el.popconfirm.confirmButtonText
      );
      expect(wrapper.find(".opposite-locale").text()).toBe(
        English.el.popconfirm.confirmButtonText
      );
    });
  });

  describe("button-config", () => {
    it("autoInsertSpace", async () => {
      const config = reactive({
        autoInsertSpace: true,
      });

      const wrapper = mount(() => (
        <>
          <ConfigProvider button={config}>
            <YuButton>中文</YuButton>
          </ConfigProvider>
          <button
            class="toggle"
            onClick={() => (config.autoInsertSpace = !config.autoInsertSpace)}
          >
            toggle
          </button>
        </>
      ));

      await nextTick();
      expect(
        wrapper.find(".yu-button .yu-button__text--expand").exists()
      ).toBeTruthy();
      await wrapper.find(".toggle").trigger("click");
      expect(
        wrapper.find(".yu-button .yu-button__text--expand").exists()
      ).toBeFalsy();
    });
  });

  describe("namespace-config", () => {
    it("reactive namespace", async () => {
      const namespace = ref();

      const wrapper = mount(() => (
        <ConfigProvider namespace={namespace.value}>
          <YuButton>test str</YuButton>
        </ConfigProvider>
      ));

      await nextTick();
      expect(wrapper.find("button").classes().join("")).toBe("yu-button");
      namespace.value = "ep";
      await nextTick();
      expect(wrapper.find("button").classes().join("")).toBe("ep-button");
    });
  });

  describe("message-config", () => {
    afterEach(() => {
      YuMessage.closeAll();
    });

    it("limit the number of messages displayed at the same time", async () => {
      const config = reactive({
        max: 3,
      });
      const open = () => {
        YuMessage("this is a message.");
      };

      const wrapper = mount(() => (
        <ConfigProvider message={config}>
          <YuButton onClick={open}>open</YuButton>
        </ConfigProvider>
      ));

      await nextTick();
      wrapper.find(".yu-button").trigger("click");
      wrapper.find(".yu-button").trigger("click");
      wrapper.find(".yu-button").trigger("click");
      wrapper.find(".yu-button").trigger("click");
      await nextTick();
      expect(document.querySelectorAll(".yu-message").length).toBe(3);

      config.max = 10;
      await nextTick();
      wrapper.find(".yu-button").trigger("click");
      wrapper.find(".yu-button").trigger("click");
      wrapper.find(".yu-button").trigger("click");
      wrapper.find(".yu-button").trigger("click");
      await nextTick();
      expect(document.querySelectorAll(".yu-message").length).toBe(7);
    });

    it("multiple config-provider config override", async () => {
      const config = reactive({
        max: 3,
      });
      const overrideConfig = reactive({
        max: 1,
      });
      const open = () => {
        YuMessage("this is a message.");
      };

      const wrapper = mount(() => (
        <ConfigProvider message={config}>
          <ConfigProvider message={overrideConfig}>
            <YuButton onClick={open}>open</YuButton>
          </ConfigProvider>
        </ConfigProvider>
      ));

      await rAF();
      await wrapper.find(".yu-button").trigger("click");
      await wrapper.find(".yu-button").trigger("click");
      await wrapper.find(".yu-button").trigger("click");
      await nextTick();
      expect(document.querySelectorAll(".yu-message").length).toBe(1);
    });
  });

  describe("feature checking", () => {
    const TestComponent = defineComponent({
      props: {
        configKey: {
          type: String as PropType<keyof ConfigProviderProps>,
          required: true,
        },
      },
      setup(props) {
        const features = useGlobalConfig(props.configKey);
        return {
          [props.configKey]: features,
        };
      },
      render: () => <div />,
    });

    it.each([
      { feature: "a11y", config: false },
      { feature: "keyboardNavigation", config: false },
      { feature: "experimentalFeatures", config: { someFeature: true } },
    ])(
      "should inject config $feature to $config correctly",
      ({ feature, config }: { feature: string; config: any }) => {
        const props: Record<string, any> = {};
        props[feature] = config;

        const wrapper = mount(() => (
          <ConfigProvider {...props}>
            <TestComponent configKey={feature as keyof ConfigProviderProps} />
          </ConfigProvider>
        ));

        expect(wrapper.findComponent(TestComponent).vm[feature]).toEqual(
          config
        );
      }
    );
  });
});
