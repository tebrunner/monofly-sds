import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties } from "react";
import { Footer, Header, Panel, PricingCard } from "compositions";
import { Flex, FlexItem, Section } from "layout";
import {
  Button,
  ButtonGroup,
  Tag,
  Text,
  TextHeading,
  TextSmall,
  TextStrong,
  TextSubheading,
  TextTitlePage,
} from "primitives";

const cardSurfaceStyle = {
  background: "var(--sds-color-background-default-default)",
  border: "1px solid var(--sds-color-border-default-default)",
  borderRadius: "var(--sds-size-radius-200)",
  boxShadow: "var(--sds-size-depth-100) var(--sds-size-depth-100) var(--sds-size-depth-400) rgba(0, 0, 0, 0.06)",
  padding: "var(--sds-size-space-600)",
} satisfies CSSProperties;

const gridTileStyle = {
  ...cardSurfaceStyle,
  minHeight: "120px",
} satisfies CSSProperties;

const meta: Meta<typeof Section> = {
  component: Section,
  title: "SDS Layout/Layout Patterns",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Fundamentals: Story = {
  name: "Fundamentals",
  render: () => (
    <Flex direction="column" style={{ background: "var(--sds-color-background-default-secondary)" }}>
      <Section elementType="header" variant="stroke" padding="800">
        <Flex container alignPrimary="space-between" alignSecondary="center">
          <TextStrong>Basic Header</TextStrong>
          <Tag scheme="positive">Status: Live</Tag>
        </Flex>
      </Section>

      <Section padding="1200" variant="subtle">
        <Flex container direction="column" gap="600">
          <TextTitlePage>1) Section + Flex fundamentals</TextTitlePage>
          <Text>
            Use <TextStrong>Section</TextStrong> for vertical rhythm and background control, and <TextStrong>Flex</TextStrong> for
            row/column alignment.
          </Text>

          <Flex gap="400" wrap>
            <FlexItem size="half">
              <div style={cardSurfaceStyle}>
                <TextSubheading>Flex item: half</TextSubheading>
                <TextSmall>Great for two-column layouts.</TextSmall>
              </div>
            </FlexItem>
            <FlexItem size="half">
              <div style={cardSurfaceStyle}>
                <TextSubheading>Flex item: half</TextSubheading>
                <TextSmall>Stacks automatically on smaller breakpoints.</TextSmall>
              </div>
            </FlexItem>
          </Flex>
        </Flex>
      </Section>

      <Section padding="1200" variant="stroke">
        <Flex container direction="column" gap="600">
          <TextTitlePage>2) Grid fundamentals via Panel</TextTitlePage>
          <Text>
            <TextStrong>Panel</TextStrong> provides a practical grid-like wrapper using SDS flex rules.
          </Text>
          <Panel type="quarter" gap="400">
            {Array.from({ length: 8 }, (_, index) => (
              <div key={`tile-${index}`} style={gridTileStyle}>
                <TextSubheading>Tile {index + 1}</TextSubheading>
                <TextSmall>Quarter panel slot</TextSmall>
              </div>
            ))}
          </Panel>
        </Flex>
      </Section>

      <Section elementType="footer" variant="stroke" padding="800">
        <Flex container alignPrimary="space-between" alignSecondary="center">
          <TextSmall>Basic Footer</TextSmall>
          <ButtonGroup>
            <Button variant="subtle" size="small">
              Docs
            </Button>
            <Button size="small">Contact</Button>
          </ButtonGroup>
        </Flex>
      </Section>
    </Flex>
  ),
};

export const ProfessionalMarketingPage: Story = {
  name: "Professional: Marketing Page",
  render: () => (
    <Flex direction="column" style={{ background: "var(--sds-color-background-default-secondary)" }}>
      <Header />

      <Section variant="brand" padding="1600">
        <Flex container direction="column" gap="600" alignSecondary="center" style={{ textAlign: "center" }}>
          <Tag scheme="neutral" variant="secondary">Enterprise-ready layout system</Tag>
          <TextTitlePage>Build page architecture with reusable SDS layout primitives</TextTitlePage>
          <Text>
            This hero combines a semantic section, centered flex stack, and clear primary/secondary actions.
          </Text>
          <ButtonGroup>
            <Button>Start free trial</Button>
            <Button variant="subtle">Book a demo</Button>
          </ButtonGroup>
        </Flex>
      </Section>

      <Section padding="1600" variant="subtle">
        <Flex container direction="column" gap="800">
          <Flex alignPrimary="space-between" alignSecondary="end" wrap gap="400">
            <TextHeading>Pricing grid with panel composition</TextHeading>
            <TextSmall>Consistent spacing, alignment, and card hierarchy</TextSmall>
          </Flex>

          <Panel type="third" gap="600">
            <PricingCard
              heading="Starter"
              price="12"
              priceCurrency="$"
              list={["3 editors", "Unlimited files", "Basic analytics"]}
              action="Choose Starter"
              onAction={() => undefined}
            />
            <PricingCard
              heading="Growth"
              price="29"
              priceCurrency="$"
              variant="brand"
              list={["15 editors", "Advanced permissions", "Automation workflows"]}
              action="Choose Growth"
              actionVariant="neutral"
              onAction={() => undefined}
            />
            <PricingCard
              heading="Scale"
              price="Custom"
              priceCurrency=""
              list={["SAML/SSO", "Custom SLA", "Dedicated support"]}
              action="Talk to sales"
              onAction={() => undefined}
            />
          </Panel>
        </Flex>
      </Section>

      <Footer />
    </Flex>
  ),
};