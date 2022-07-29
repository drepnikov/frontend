import * as React from "react";
import { NextPage } from "next";
import { MobxSampleComponent } from "data/mobx-sample/mobx-sample.component";

interface IMobxSamplePageProps {}

const MobxSamplePage: NextPage<IMobxSamplePageProps> = () => {
  return <MobxSampleComponent />;
};

export default MobxSamplePage;
