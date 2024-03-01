import { BasicLayout } from "@/layouts";
import { Separator } from "@/components/Shared";
import { Game } from "@/components/Game";
import React from "react";
import { Seo } from "@/components/Shared";

export default function GamePage(props) {
  const { game } = props;
  const wallpaper = game.attributes.wallpaper.data.attributes.url;

  return (
    <>
      <Seo title={`Gaming - ${game.attributes.title}`} />
      <BasicLayout relative>
        <Game.HeaderWallpaper image={wallpaper} />
        <Game.Panel gameId={game.id} game={game.attributes} />
        <Separator height={50} />

        <Game.Info game={game.attributes} />

        <Separator height={30} />

        <Game.Media
          video={game.attributes.video}
          screenshots={game.attributes.screenshots.data}
        />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
