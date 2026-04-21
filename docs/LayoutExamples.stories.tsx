import type { Meta, StoryObj } from "@storybook/react";
import { Footer, Header, Panel } from "compositions";
import { Flex, FlexItem, Section } from "layout";
import { Button, Tag, Text, TextHeading, TextStrong } from "primitives";
import "./layoutExamples.css";

const meta: Meta<typeof Section> = {
  component: Section,
  title: "SDS Layout/Layout Examples",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const Fundamentals: StoryObj<typeof Section> = {
  name: "Fundamentals",
  render: () => (
    <div className="layout-examples">
      <Section variant="subtle" padding="1200">
        <Flex direction="column" gap="600">
          <TextHeading>1) Section + Header pattern</TextHeading>
          <Text>
            Use Section to define semantic regions with predictable spacing and
            visual rhythm.
          </Text>
          <Section elementType="header" variant="stroke" padding="800">
            <Flex container alignPrimary="space-between" alignSecondary="center">
              <TextStrong>Product dashboard</TextStrong>
              <Button size="small">Create report</Button>
            </Flex>
          </Section>
        </Flex>
      </Section>

      <Section variant="neutral" padding="1200">
        <Flex direction="column" gap="600">
          <TextHeading>2) Flex + FlexItem sizing</TextHeading>
          <Panel type="third" gap="400">
            <FlexItem size="major">
              <div className="layout-example-card">
                <TextStrong>Major column</TextStrong>
                <Text>
                  Great for content-heavy areas like charts, tables, and
                  narratives.
                </Text>
              </div>
            </FlexItem>
            <FlexItem size="minor">
              <div className="layout-example-card">
                <TextStrong>Minor rail</TextStrong>
                <Text>Use for filters, quick actions, and context panels.</Text>
              </div>
            </FlexItem>
          </Panel>
        </Flex>
      </Section>

      <Section variant="subtle" padding="1200">
        <Flex direction="column" gap="600">
          <TextHeading>3) Grid fundamentals (CSS Grid)</TextHeading>
          <Text>
            Pair SDS spacing tokens with CSS Grid for dense card layouts.
          </Text>
          <div className="layout-example-grid">
            {[
              "Pipeline health",
              "Release quality",
              "Incident volume",
              "Customer impact",
            ].map((label) => (
              <div key={label} className="layout-example-kpi">
                <Tag>{label}</Tag>
                <TextHeading>98%</TextHeading>
              </div>
            ))}
          </div>
        </Flex>
      </Section>
    </div>
  ),
};

export const ProfessionalImplementation: StoryObj<typeof Section> = {
  name: "Professional Implementation",
  render: () => (
    <div className="layout-examples-shell">
      <Header />

      <Section variant="brand" padding="1600">
        <div className="layout-examples-container">
          <Flex direction="column" gap="800">
            <Tag>Q2 Executive Briefing</Tag>
            <TextHeading>Operational Excellence Platform</TextHeading>
            <Text>
              A production-ready layout that composes Header, Section, Panel,
              FlexItem sizing, and a responsive CSS Grid content zone.
            </Text>
          </Flex>
        </div>
      </Section>

      <Section variant="subtle" padding="1600">
        <div className="layout-examples-container">
          <Panel type="quarter" gap="400">
            {[
              { label: "Uptime", value: "99.98%" },
              { label: "Deployments", value: "347" },
              { label: "P95 Latency", value: "188ms" },
              { label: "MTTR", value: "23m" },
            ].map((item) => (
              <FlexItem size="minor" key={item.label}>
                <div className="layout-example-kpi">
                  <Text>{item.label}</Text>
                  <TextHeading>{item.value}</TextHeading>
                </div>
              </FlexItem>
            ))}
          </Panel>
        </div>
      </Section>

      <Section variant="neutral" padding="1600">
        <div className="layout-examples-container">
          <Flex direction="column" gap="600">
            <TextHeading>Insights Grid</TextHeading>
            <div className="layout-example-grid">
              <div className="layout-example-card layout-example-featured">
                <TextStrong>Featured insight</TextStrong>
                <Text>
                  Use a wider card to prioritize narrative, trends, and
                  recommendations.
                </Text>
              </div>
              <div className="layout-example-card">
                <TextStrong>Customer retention</TextStrong>
                <Text>Weekly cohort retention is up 4.7% QoQ.</Text>
              </div>
              <div className="layout-example-card">
                <TextStrong>Performance budget</TextStrong>
                <Text>All critical pages are under 180KB transfer.</Text>
              </div>
            </div>
          </Flex>
        </div>
      </Section>

      <Footer />
    </div>
  ),
<<<<<<< ours
<<<<<<< ours
};
=======
};
>>>>>>> theirs
=======
};
>>>>>>> theirs
