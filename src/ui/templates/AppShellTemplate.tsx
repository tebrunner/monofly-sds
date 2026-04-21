import { Footer, Header } from "compositions";
import { Flex, FlexItem, Section } from "layout";
import {
  Button,
  Navigation,
  NavigationPill,
  Text,
  TextHeading,
  TextSmall,
  TextStrong,
  TextTitlePage,
} from "primitives";
import "./templates.css";

export function AppShellTemplate() {
  return (
    <div className="template-page-root">
      <Header />
      <Section variant="subtle" padding="800">
        <Flex container gap="600" className="template-shell-grid">
          <FlexItem size="minor">
            <aside className="template-rail">
              <TextStrong>Workspace</TextStrong>
              <Navigation direction="column">
                <NavigationPill isSelected>Overview</NavigationPill>
                <NavigationPill>Projects</NavigationPill>
                <NavigationPill>Activity</NavigationPill>
                <NavigationPill>Settings</NavigationPill>
              </Navigation>
            </aside>
          </FlexItem>

          <FlexItem size="major">
            <main className="template-main" aria-label="App shell content">
              <TextTitlePage>App Shell Template</TextTitlePage>
              <Text>
                Canonical app structure with top navigation, left rail, main
                content area, and a utility rail.
              </Text>

              <div className="template-content-grid">
                <section className="template-block">
                  <TextHeading>Primary Content</TextHeading>
                  <Text>
                    Use this region for dashboard cards, data tables, workflows,
                    and product-specific views.
                  </Text>
                  <Button>Primary action</Button>
                </section>

                <aside className="template-block">
                  <TextHeading>Utility Rail</TextHeading>
                  <TextSmall>
                    Add contextual activity, alerts, assignees, and pinned links
                    in this rail.
                  </TextSmall>
                </aside>
              </div>
            </main>
          </FlexItem>
        </Flex>
      </Section>
      <Footer />
    </div>
  );
}
