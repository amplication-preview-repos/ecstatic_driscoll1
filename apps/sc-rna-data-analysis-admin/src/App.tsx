import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SampleList } from "./sample/SampleList";
import { SampleCreate } from "./sample/SampleCreate";
import { SampleEdit } from "./sample/SampleEdit";
import { SampleShow } from "./sample/SampleShow";
import { GeneList } from "./gene/GeneList";
import { GeneCreate } from "./gene/GeneCreate";
import { GeneEdit } from "./gene/GeneEdit";
import { GeneShow } from "./gene/GeneShow";
import { ExpressionDataList } from "./expressionData/ExpressionDataList";
import { ExpressionDataCreate } from "./expressionData/ExpressionDataCreate";
import { ExpressionDataEdit } from "./expressionData/ExpressionDataEdit";
import { ExpressionDataShow } from "./expressionData/ExpressionDataShow";
import { AnalysisList } from "./analysis/AnalysisList";
import { AnalysisCreate } from "./analysis/AnalysisCreate";
import { AnalysisEdit } from "./analysis/AnalysisEdit";
import { AnalysisShow } from "./analysis/AnalysisShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"scRNADataAnalysis"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Sample"
          list={SampleList}
          edit={SampleEdit}
          create={SampleCreate}
          show={SampleShow}
        />
        <Resource
          name="Gene"
          list={GeneList}
          edit={GeneEdit}
          create={GeneCreate}
          show={GeneShow}
        />
        <Resource
          name="ExpressionData"
          list={ExpressionDataList}
          edit={ExpressionDataEdit}
          create={ExpressionDataCreate}
          show={ExpressionDataShow}
        />
        <Resource
          name="Analysis"
          list={AnalysisList}
          edit={AnalysisEdit}
          create={AnalysisCreate}
          show={AnalysisShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
