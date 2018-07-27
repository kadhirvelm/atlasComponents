import * as React from "react";
import Loadable from "react-loadable";

interface IComponentDocsProps {
  componentName: string;
}

interface IComponentDocState {
  componentDemo:
    | (React.ComponentClass<{}> & Loadable.LoadableComponent)
    | (React.StatelessComponent<{}> & Loadable.LoadableComponent)
    | undefined;
}

export class ComponentHolder extends React.Component<
  IComponentDocsProps,
  IComponentDocState
> {
  public state: IComponentDocState = {
    componentDemo: undefined
  };

  public componentWillReceiveProps(newProps: IComponentDocsProps) {
    if (newProps.componentName !== this.props.componentName) {
      this.setState({
        componentDemo: this.importComponent(newProps.componentName)
      });
    }
  }

  public render() {
    return (
      <div className="component-holder">
        <div className="main-title" key={this.props.componentName}>
          {this.props.componentName}
        </div>
        <div className="demo-holder">{this.maybeRenderComponentDemo()}</div>
      </div>
    );
  }

  private maybeRenderComponentDemo() {
    if (this.state.componentDemo === undefined) {
      return null;
    }
    const Demo = this.state.componentDemo;
    return <Demo />;
  }

  private importComponent(componentDemoName: string) {
    return Loadable({
      loader: () => import(`../../componentDemos/${componentDemoName}`),
      loading: () => <div />
    });
  }
}
