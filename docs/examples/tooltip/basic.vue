<template>
    <div class="tooltip-base-box">
      <div class="row center">
        <yu-tooltip
          class="box-item"
          effect="dark"
          content="Top Left prompts info"
          placement="top-start"
          trigge="focus"
        >
          <yu-button>top-start</yu-button>
        </yu-tooltip>
        <yu-tooltip
          class="box-item"
          effect="dark"
          content="Top Center prompts info"
          placement="top"
        >
          <yu-button>top</yu-button>
        </yu-tooltip>
        <yu-tooltip
          class="box-item"
          effect="dark"
          content="Top Right prompts info"
          placement="top-end"
        >
          <yu-button>top-end</yu-button>
        </yu-tooltip>
      </div>
      <div class="row">
        <yu-tooltip
          class="box-item"
          effect="dark"
          content="Left Top prompts info"
          placement="left-start"
        >
          <yu-button>left-start</yu-button>
        </yu-tooltip>
        <yu-tooltip
          class="box-item"
          effect="dark"
          content="Right Top prompts info"
          placement="right-start"
        >
          <yu-button>right-start</yu-button>
        </yu-tooltip>
      </div>
      <div class="row">
        <yu-tooltip
          class="box-item"
          effect="dark"
          content="Left Center prompts info"
          placement="left"
        >
          <yu-button class="mt-3 mb-3">left</yu-button>
        </yu-tooltip>
        <yu-tooltip
          class="box-item"
          effect="dark"
          content="Right Center prompts info"
          placement="right"
        >
          <yu-button>right</yu-button>
        </yu-tooltip>
      </div>
      <div class="row">
        <yu-tooltip
          class="box-item"
          effect="dark"
          content="Left Bottom prompts info"
          placement="left-end"
        >
          <yu-button>left-end</yu-button>
        </yu-tooltip>
        <yu-tooltip
          class="box-item"
          effect="dark"
          content="Right Bottom prompts info"
          placement="right-end"
        >
          <yu-button>right-end</yu-button>
        </yu-tooltip>
      </div>
      <div class="row center">
        <yu-tooltip
          class="box-item"
          effect="dark"
          content="Bottom Left prompts info"
          placement="bottom-start"
        >
          <yu-button>bottom-start</yu-button>
        </yu-tooltip>
        <yu-tooltip
          class="box-item"
          effect="dark"
          content="Bottom Center prompts info"
          placement="bottom"
        >
          <yu-button>bottom</yu-button>
        </yu-tooltip>
        <yu-tooltip
          class="box-item"
          effect="dark"
          content="Bottom Right prompts info"
          placement="bottom-end"
        >
          <yu-button>bottom-end</yu-button>
        </yu-tooltip>
      </div>
    </div>
  </template>
  
  <style>
  .tooltip-base-box {
    width: 600px;
  }
  .tooltip-base-box .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tooltip-base-box .center {
    justify-content: center;
  }
  .tooltip-base-box .box-item {
    width: 110px;
    margin-top: 10px;
  }
  </style>
  