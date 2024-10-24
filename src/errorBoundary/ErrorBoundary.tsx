import { Component, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (<p className="error404">Кажется, произошла ошибка!</p>);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;