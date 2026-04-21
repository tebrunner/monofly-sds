import { Card, Footer, Header, Hero } from "compositions";
import { Flex, Section } from "layout";
import {
  Button,
  Text,
  TextHeading,
  TextSubheading,
  TextTitleHero,
  TextTitlePage,
} from "primitives";
import "./templates.css";

export function MarketingTemplate() {
  return (
    <div className="template-page-root">
      <Header />

      <Hero variant="brand" padding="1600" flexProps={{ gap: "400" }}>
        <TextTitleHero>Marketing Template</TextTitleHero>
        <TextSubheading>
          Hero, social proof, feature highlights, and CTA sections for launch
          pages.
        </TextSubheading>
        <Button>Start free trial</Button>
      </Hero>

      <Section variant="subtle" padding="1200">
        <Flex container type="third" gap="600" wrap>
          {[
            "Design and code in sync",
            "Composable product patterns",
            "Built-in responsive behavior",
          ].map((feature) => (
            <Card key={feature} variant="stroke" padding="600">
              <TextHeading>{feature}</TextHeading>
              <Text>
                Reusable content block for feature messaging, value props, and
                product positioning.
              </Text>
            </Card>
          ))}
        </Flex>
      </Section>

      <Section padding="1200">
        <div className="template-block template-cta">
          <TextTitlePage>Ready to ship faster?</TextTitlePage>
          <Text>
            Use this CTA band for conversion moments after introducing product
            value.
          </Text>
          <Button variant="neutral">Talk to sales</Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
