import type { Meta, StoryObj } from "@storybook/react";
import { Card, Footer, Header, Panel, StatsCard } from "compositions";
import { placeholder } from "images";
import { Flex, FlexItem, Section } from "layout";
import {
  Button,
  ButtonGroup,
  Image,
  Text,
  TextContentTitle,
  TextHeading,
  TextSubheading,
} from "primitives";

const meta: Meta<typeof Section> = {
  component: Section,
  title: "SDS Layout/Patterns",
  parameters: { layout: "fullscreen" },
};
export default meta;

export const Fundamentals: StoryObj<typeof Section> = {
  render: () => (
    <Flex direction="column" style={{ width: "100%" }}>
      <Section variant="subtle" padding="1600">
        <Flex container direction="column" gap="600">
          <TextContentTitle
            title="Fundamentals: Section + Flex + Flex Item"
            subtitle="A clean baseline pattern for stack layouts and responsive rows."
          />

          <Flex container type="third" gap="400" wrap>
            <FlexItem size="major">
              <Card variant="stroke">
                <TextHeading>Section for semantic grouping</TextHeading>
                <Text>
                  Use Section to define rhythm, content boundaries, and background
                  variations.
                </Text>
              </Card>
            </FlexItem>
            <FlexItem size="minor">
              <Card variant="stroke">
                <TextHeading>Flex for alignment</TextHeading>
                <Text>
                  Use Flex to control direction, spacing, and responsive wrapping.
                </Text>
              </Card>
            </FlexItem>
            <FlexItem size="minor">
              <Card variant="stroke">
                <TextHeading>FlexItem for sizing</TextHeading>
                <Text>
                  Use major/minor/full sizing to keep layout intent readable.
                </Text>
              </Card>
            </FlexItem>
          </Flex>
        </Flex>
      </Section>

      <Section variant="stroke" padding="1600">
        <Flex container direction="column" gap="600">
          <TextContentTitle
            title="Fundamentals: Grid + Panel"
            subtitle="Use native CSS grid for card collections and Panel for quick flex grids."
          />

          <div
            style={{
              display: "grid",
              gap: "var(--sds-size-space-400)",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            {["Analytics", "Security", "Delivery", "Automation"].map(
              (item) => (
                <Card key={item} variant="padded">
                  <TextHeading>{item}</TextHeading>
                  <Text>Grid is ideal for card collections with equal rhythm.</Text>
                </Card>
              ),
            )}
          </div>

          <Panel type="quarter" gap="400">
            <StatsCard stat="99.9%" description="Uptime" />
            <StatsCard stat="42%" description="Faster release cycles" />
            <StatsCard stat="12" description="Global regions" />
            <StatsCard stat="24/7" description="Operational coverage" />
          </Panel>
        </Flex>
      </Section>
    </Flex>
  ),
};

export const ProfessionalLandingPage: StoryObj<typeof Section> = {
  render: () => (
    <div
      style={{
        display: "grid",
        minHeight: "100vh",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />

      <Flex direction="column">
        <Section variant="image" src={placeholder} padding="4000">
          <Flex container type="half" alignSecondary="center" gap="800" wrap>
            <FlexItem size="major">
              <TextContentTitle
                title="Design and ship product surfaces with confidence"
                subtitle="A production-ready hero that pairs high-impact messaging with a clear CTA stack."
              />
              <ButtonGroup>
                <Button>Start free trial</Button>
                <Button variant="subtle">Book demo</Button>
              </ButtonGroup>
            </FlexItem>
            <FlexItem size="minor">
              <Image
                src={placeholder}
                alt="Preview of analytics dashboard"
                aspectRatio="16-9"
              />
            </FlexItem>
          </Flex>
        </Section>

        <Section variant="subtle" padding="1600">
          <Flex container direction="column" gap="800">
            <TextContentTitle
              title="Operational proof points"
              subtitle="Balanced use of Panel and Grid for high-signal metrics and feature narratives."
            />
            <Panel type="quarter" gap="400">
              <StatsCard stat="3.2x" description="Faster onboarding" />
              <StatsCard stat="71" description="NPS improvement" />
              <StatsCard stat="18%" description="Lower support volume" />
              <StatsCard stat="97%" description="Task completion" />
            </Panel>

            <div
              style={{
                display: "grid",
                gap: "var(--sds-size-space-400)",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              }}
            >
              <Card variant="stroke">
                <TextHeading>Composable architecture</TextHeading>
                <Text>
                  Separate header, section, panel, and footer responsibilities
                  so teams can evolve pages safely.
                </Text>
              </Card>
              <Card variant="stroke">
                <TextHeading>Scalable spacing system</TextHeading>
                <Text>
                  Standardized gap and padding tokens create predictable layout
                  rhythm from mobile to desktop.
                </Text>
              </Card>
              <Card variant="stroke">
                <TextHeading>Performance-aware content strategy</TextHeading>
                <Text>
                  Visual hierarchy highlights primary actions while keeping
                  supporting details discoverable.
                </Text>
              </Card>
            </div>
          </Flex>
        </Section>

        <Section variant="brand" padding="1200">
          <Flex container alignPrimary="space-between" alignSecondary="center" wrap gap="400">
            <FlexItem size="major">
              <TextHeading>Ready to modernize your product shell?</TextHeading>
              <TextSubheading>
                Use these layout patterns as the baseline for marketing pages,
                app surfaces, and authenticated experiences.
              </TextSubheading>
            </FlexItem>
            <FlexItem size="minor">
              <ButtonGroup>
                <Button variant="neutral">Contact sales</Button>
              </ButtonGroup>
            </FlexItem>
          </Flex>
        </Section>
      </Flex>

      <Footer />
    </div>
  ),
};