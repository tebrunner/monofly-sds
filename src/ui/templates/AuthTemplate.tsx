import type { FormEvent } from "react";
import { Footer, FormBox, Header } from "compositions";
import { Flex, FlexItem, Section } from "layout";
import {
  Button,
  ButtonGroup,
  CheckboxField,
  FieldGroup,
  InputField,
  formEventTargetToFormData,
  Text,
  TextLink,
  TextSmall,
  TextTitlePage,
} from "primitives";
import "./templates.css";

export function AuthTemplate() {
  return (
    <div className="template-page-root">
      <Header />
      <Section variant="neutral" padding="1200">
        <Flex container type="half" gap="800" alignSecondary="stretch">
          <FlexItem>
            <div className="template-block auth-panel">
              <TextTitlePage>Welcome back</TextTitlePage>
              <Text>
                Sign in to continue to your team workspace and pick up where you
                left off.
              </Text>
              <FormBox
                onSubmit={(event: FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  const data = formEventTargetToFormData(event.currentTarget);
                  console.log("Auth template form data", data);
                }}
              >
                <FieldGroup>
                  <InputField name="email" type="email" label="Email" />
                  <InputField
                    name="password"
                    type="password"
                    label="Password"
                  />
                  <CheckboxField name="remember">Remember me</CheckboxField>
                </FieldGroup>
                <ButtonGroup align="justify">
                  <Button type="submit">Sign in</Button>
                </ButtonGroup>
              </FormBox>
              <TextSmall>
                <TextLink href="#">Forgot password?</TextLink>
              </TextSmall>
            </div>
          </FlexItem>

          <FlexItem>
            <aside className="template-block auth-benefits">
              <TextTitlePage>Why teams use MonoFly SDS</TextTitlePage>
              <ul className="template-list">
                <li>Fast design-to-code handoff with shared primitives.</li>
                <li>Responsive defaults for production-ready interfaces.</li>
                <li>Composable patterns that scale across products.</li>
              </ul>
            </aside>
          </FlexItem>
        </Flex>
      </Section>
      <Footer />
    </div>
  );
}
