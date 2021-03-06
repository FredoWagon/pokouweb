
import Layout from "../../components/Layout";
import WebappHeaderBloc from "../../components/blocs/service_webap/webappHeaderBloc";
import WebappMainInfo from "../../components/blocs/service_webap/webappMainInfo";
import DeveloppementHeaderBloc from "../../components/blocs/service_developpement/developpementHeaderBloc";
import DeveloppementMainInfo from "../../components/blocs/service_developpement/developpementMainInfo";
import DeveloppementContactBloc from "../../components/blocs/service_developpement/developpementContactBloc";
import Head from "next/head";
import BackToService from "../../components/backToService";
import SitewebContactBloc from "../../components/blocs/service_siteweb/sitewebContactBloc";
import ConceptionContactBloc from "../../components/blocs/service_conception/conceptionContactBloc";


export default function Developpement() {

    return (
        <Layout currentPage="developpement" navbarStyle="background--green">

            <Head>
                <title>Developpement | PokouWeb, agence web</title>
                <meta property="og:title" content="Developpement | PokouWeb, agence web" key="title" />

                <meta name="description" content="Nos développeurs s'assurent que toutes nos implémentations techniques sont de haute qualité. Notre équipe suit de près les tendances numériques et les évolutions technologiques." key="description"/>

                <link rel="canonical" href="https://www.pokouweb.fr/nos-services/developpement" key="url_canonical"/>
                <meta property="og:url" content="https://www.pokouweb.fr/nos-services/developpement" key="url"/>

                <meta property="og:type" content="article" key="type" />
            </Head>


            <DeveloppementHeaderBloc/>
            <DeveloppementMainInfo/>
            <ConceptionContactBloc/>
            <BackToService/>





        </Layout>
    )
}