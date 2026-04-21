import { Card } from "compositions";
import {
  IconArrowRight,
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconYoutube,
} from "icons";
import { useMediaQuery } from "hooks";
import { Flex, FlexItem, Section } from "layout";
import {
  Button,
  ButtonGroup,
  Image,
  Tag,
  TagButton,
  Text,
  TextStrong,
  TextContentTitle,
  TextContentHeading,
  TextHeading,
  TextSmall,
} from "primitives";

const featuredLinks = [
  {
    title: "Book a brand shoot",
    description: "Creative direction, wardrobe notes, and next-week openings.",
    href: "#book-a-brand-shoot",
  },
  {
    title: "Shop my creator toolkit",
    description: "Cameras, lighting, presets, and the gear I use every day.",
    href: "#shop-my-creator-toolkit",
  },
  {
    title: "Watch the weekly studio vlog",
    description: "Behind the scenes, launches, and what is working right now.",
    href: "#watch-the-weekly-studio-vlog",
  },
  {
    title: "Download the free launch checklist",
    description: "A simple planning template for your next drop or campaign.",
    href: "#download-the-free-launch-checklist",
  },
];

const socialLinks = [
  { label: "Instagram", href: "#instagram", icon: <IconInstagram /> },
  { label: "YouTube", href: "#youtube", icon: <IconYoutube /> },
  { label: "LinkedIn", href: "#linkedin", icon: <IconLinkedin /> },
  { label: "GitHub", href: "#github", icon: <IconGithub /> },
];

const quickStats = [
  { label: "Subscribers", value: "42k" },
  { label: "Weekly reach", value: "180k" },
  { label: "Brand partners", value: "28" },
];

export function Demo() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";
  const pageGap = isMobile ? "800" : "1200";

  return (
    <Section padding={sectionPadding} variant="neutral">
      <Flex direction="row" gap={pageGap} alignPrimary="center"  >
      <Card variant="stroke" padding="800" >

        <Card
          align="start"
          direction="vertical"
          variant="stroke"
          padding="600"
        >
          <Flex direction="column" alignPrimary="center" alignSecondary="center" gap="800">
            <Image
                src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                alt="Profile Picture of Ava Monroe"
                size="medium"
                style={{ borderRadius: "100%" }}
                
            />
            <Flex
              direction="column"
              gap="600"
              alignPrimary="center"
              alignSecondary="center"
            >
              <Tag scheme="positive" variant="primary">New course live</Tag>
              <TextContentTitle
                align="center"
                title="Ava Monroe"
                subtitle={
                  <>
                    Creative strategist sharing launch notes, studio
                    workflows, and simple systems for independent brands.
                  </>
                }
              />
            </Flex>
          </Flex>

          <Flex
            type="third"
            gap="600"
          >
            {quickStats.map((stat) => (
              <FlexItem key={stat.label} size="fill" > 
                <Card
                  variant="stroke"
                  padding="600"
                  style={{ height: "100%" }}
                >
                  <Flex
                    direction="column"
                    alignSecondary="center"
                    gap="100"
                  >
                    <TextSmall>{stat.label}</TextSmall>
                    <TextHeading>{stat.value}</TextHeading>
                  </Flex>
                </Card>
              </FlexItem>
            ))}
          </Flex>
        </Card>        

        <Card variant="stroke" padding="600" align="start" direction="vertical">
        <Flex direction="column" 
        alignPrimary="start"
        alignSecondary="stretch"
        gap="600" 
        style={{ padding: "var(--sds-size-space-300)" }}>

          <TextContentHeading
            align="start"
            heading="Featured links"
            subheading="Your favorite stuff in one place"
         
          />
          <ButtonGroup align="stack" style={{ gap: "var(--sds-size-space-400" }}>
            {featuredLinks.map((link) => (
              <Button
                key={link.title}
                href={link.href}
                variant="neutral"
                
              >
                <Flex
                  direction="row"
                  alignPrimary="space-between"
                  alignSecondary="center"
                  type="auto"
                  
                  container
                >
                  <FlexItem size="minor">
                    <TextStrong>{link.title}</TextStrong>
                    <br />
                    <br />
                    <TextSmall>{link.description}</TextSmall>
                  </FlexItem>
      
                  <FlexItem size="minor">
                    <IconArrowRight size="32" />
                  </FlexItem>
                </Flex>
              </Button>
            ))}
          </ButtonGroup>
        </Flex>
        </Card>

        <Card variant="brand" padding="800" >
          <Flex direction="column"
          alignPrimary="center"
          alignSecondary="center"
          gap="600"
        >
            <TextHeading>Join the studio memo</TextHeading>
            <Text>
                One practical email every Friday with new templates,
                campaign notes, and upcoming drops.
            </Text>
          
            <Button
              href="#join-the-studio-memo"
              variant="neutral"
            >
              Subscribe
            </Button>
          </Flex>
        </Card>
        

        <Flex direction="column" gap="300" alignSecondary="center">
          <ButtonGroup align="center">
            {socialLinks.map((link) => (
              <TagButton key={link.label} href={link.href}>
                <Flex gap="100" alignSecondary="center">
                  {link.icon}
                  <span>{link.label}</span>
                </Flex>
              </TagButton>
            ))}
          </ButtonGroup>
          <TextSmall>hello@avamonroe.studio</TextSmall>
        </Flex>
        
      </Card>
      </Flex> 
    </Section>
  );
}
