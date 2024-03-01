import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import {
  GridGames,
  Separator,
  NoResult,
  Pagination,
} from "@/components/Shared";
import { Seo } from "@/components/Shared";

export default function PlatformPage(props) {
  const { games, platform, pagination } = props;
  const hasProducts = size(games) > 0;

  return (
    <>
      <Seo title={`Gaming - Juegos de ${platform.attributes.title}`} />
      <BasicLayout relative>
        <Container>
          <Separator height={50} />
          <h2>{platform.attributes.title}</h2>
          {hasProducts ? (
            <>
              <GridGames games={games} />
              <Separator height={30} />
              <Pagination
                totalPages={pagination.pageCount}
                currentPage={pagination.page}
              />
            </>
          ) : (
            <NoResult
              text={`La categoria ${platform.attributes.title} aun no tiene productos.`}
            />
          )}

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
