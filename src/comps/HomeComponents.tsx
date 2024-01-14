import type {ComponentChildren, ComponentProps} from "preact";
import {getImage} from "astro:assets";
import {basename} from "path";
import dsStyles from "../styles/index.css";
import {Box, Col, cx, Row, Text} from "./Box";
import {homeComponentStyles as styles} from "./HomeComponents.css";
import {fancyBg, markdownComponentStyles} from "./MarkdownComponents.css";

import codecksImg from "../assets/project-codecks.png";
import helldefenceImg from "../assets/project-helldefence.jpg";
import jurioImg from "../assets/project-jurio.png";
import patienceImg from "../assets/project-patience.png";
import piqImg from "../assets/project-piq.jpg";
import reactStickyBoxImg from "../assets/project-react-sticky-box.png";
import wortleImg from "../assets/project-wortle.png";

const images = {
  codecks: codecksImg,
  helldefence: helldefenceImg,
  jurio: jurioImg,
  patience: patienceImg,
  piq: piqImg,
  reactStickyBox: reactStickyBoxImg,
  wortle: wortleImg,
};
type GetImageResult = {src: string; attributes: any};
type ImgVariants = {
  original: GetImageResult;
  avif: GetImageResult;
  avif2x: GetImageResult;
  webp: GetImageResult;
};
const getImageVariants = async (path: ImageMetadata) => ({
  original: await getImage({src: path, width: 150}),
  avif: await getImage({src: path, width: 150, format: "avif"}),
  avif2x: await getImage({src: path, width: 300, format: "avif"}),
  webp: await getImage({src: path, width: 150, format: "webp"}),
});
const imageByFileName = Object.fromEntries(
  await Promise.all(
    Object.entries(images).map(
      async ([k, metaData]) => [basename(k), await getImageVariants(metaData)] as const
    )
  )
);

const Img = ({
  variants,
  alt,
  // className,
  ...rest
}: {variants: ImgVariants} & ComponentProps<"img">) => (
  <picture>
    <source srcSet={`${variants.avif.src} 1x, ${variants.avif2x.src} 2x`} type="image/avif" />
    <source srcSet={variants.webp.src} type="image/webp" />
    <img
      src={variants.original.src}
      alt={alt}
      {...variants.original.attributes}
      loading="lazy"
      {...rest}
    />
  </picture>
);

export const HiddenH1 = (props: ComponentProps<"h1">) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h1 className={dsStyles.display.none} {...props} />;
};

export const HelloH2 = ({children, ...props}: ComponentProps<"h2">) => {
  return (
    <h2 {...props}>
      <span className={styles.helloH2Inner}>{children}</span>
    </h2>
  );
};

export const Project = (props: {description: string; time: string; name: string; link: string}) => {
  const {description, time, name, link} = props;
  return (
    <section>
      <Text fontStyle="italic" color="secondary" size={12}>
        {time}
      </Text>
      <Row align="baseline" sp={3}>
        {link ? (
          <a href={link} className={markdownComponentStyles.a}>
            <Box as="h3" color="primary" size={22}>
              {name}
            </Box>
          </a>
        ) : (
          <Box as="h3" color="primary" size={22}>
            {name}
          </Box>
        )}
      </Row>
      <Box as="p" size={16}>
        {description}
      </Box>
    </section>
  );
};

export const BoldLink = ({href, children}: {href: string; children: ComponentChildren}) => (
  <a href={href} className={styles.boldLink}>
    {children}
  </a>
);

export const Tile = (props: {
  date: string;
  title: string;
  description?: string;
  url?: string;
  imageKey?: string;
}) => {
  const {date, title, description, url, imageKey} = props;
  const imageInfo = imageKey && imageByFileName[imageKey];

  const content = (
    <Row
      as="article"
      relative
      bg="foreground"
      rounded="md"
      elevation={200}
      overflow="hidden"
      className={cx(styles.tile.base, url && styles.tile.interactive)}
      px={5}
      py={3}
      sp={2}
    >
      <Col>
        <Box size={12} color="secondary" fontStyle="italic">
          {date}
        </Box>
        <h3>{title}</h3>
        <Box as="p" size={16} color="secondary">
          {description}
        </Box>
      </Col>
      {imageInfo && (
        <Box width="8rem" ml="auto" flex="none">
          <Box styleChild rounded="sm" borderWidth={1} borderColor="default" height="auto">
            <Img variants={imageInfo} alt="" />
          </Box>
        </Box>
      )}
    </Row>
  );
  return (
    <Box styleChild relative className={fancyBg}>
      {url ? <a href={url}>{content}</a> : <div>{content}</div>}
    </Box>
  );
};
