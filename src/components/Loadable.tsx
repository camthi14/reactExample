import { Suspense } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

type Props = {};

const Loadable = (Component: any) => (props: Props) => {
  return (
    <Suspense fallback={<TopBarProgress />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
