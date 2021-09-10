import Image from "next/image";
import Head from "next/head";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { VMenuBar, VPhotoGrid, VFooter } from "../../utils";
import styles from "./about.module.scss";

export default function VAbout() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About me</title>
        <meta name="description" content="Karolina Hudziec Portfolio Page" />
        <meta name="author" content="Karolina Hudziec" />
        <meta
          name="keywords"
          content="Karolina, Hudziec, Portfolio, Frontend"
        />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
      </Head>
      <VMenuBar activeTab="About" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>Long story short about me</h1>
            <h2>
              I have two leading passions in my life: one is to create, and the
              other one is to explore the world. I love to create software,
              especially web applications. Graphic design, drawing and making
              animations give me a lot of fun as well. I try to lead an active
              lifestyle. Whenever I have some spare time, I try to dedicate it
              to learning new languages, spending my time with friends and
              family, and traveling. I'm a huge sports fan, as well, especially
              football. Besides that I love hiking and rock climbing. I feel
              extremely good in the mountains. In winter I ski. To relax I
              usually play video games or watch movies/tv series. I also pay
              high attention to my self-development in the IT field, in order to
              be up to date with current trends on the market. Beneath you can
              find all of the newsletters I subscribe currently.
            </h2>
          </Fade>
        </div>
      </div>
      <VFooter />
    </div>
  );
}
