import { createElement } from "react";

import ModalComponent from "../components/ModalComponent";
import H1Component from "../components/H1Component";
import H2Component from "../components/H2Component";
import ParagraphComponent from "../components/ParagraphComponent";
import ListComponent from "../components/ListComponent";
import ButtonComponent from "../components/ButtonComponent";
import LinkComponent from "../components/LinkComponent";
import BoxComponent from "../components/BoxComponent";

const COMPONENTS = {
  ModalComponent,
  H1Component,
  H2Component,
  ParagraphComponent,
  ListComponent,
  ButtonComponent,
  LinkComponent,
  BoxComponent,
};

const createComponent = ({ key, component }) => {
  if (typeof component.Content.type !== "undefined") {
    return createElement(
      COMPONENTS[component.Content.type],
      {
        key,
        props: component.Content.props,
        children: component.Children ? component.Children : null,
      },
      component.Children &&
        Object.entries(component.Children).map((child, index) =>
          createComponent({ key: index, component: child[1] })
        )
    );
  }
};

export default createComponent;
