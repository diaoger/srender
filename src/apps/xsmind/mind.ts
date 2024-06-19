import { NetaGraph } from "../../core";
import { MIND_NODE } from "./node";

class Mind {
  private netaRender: NetaGraph;
  constructor(options: any) {
    const { el } = options;
    this.netaRender = new NetaGraph({
      rendererType: "canvas",
      el,
      backgroundColor: "#fff",
      layout: {
        type: "tree",
        config: {
          direction: "lr",
        },
      },
      register: MIND_NODE,
    });
  }

  render() {
    this.netaRender.read({
      nodes: [
        {
          id: "1",
          type: "headTitle",
          label: "Company1",
        },
      ],
    });
    this.netaRender.render();
  }

  destroy() {
    this.netaRender.destroy();
  }
}

export default Mind;
