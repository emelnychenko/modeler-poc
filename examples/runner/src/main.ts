import { Attribute, AttributeProvider, defaultAttributeProvider } from '@modeler/common';

/**
 * Provide eyes {@link Attribute}.
 */
function provideEyes(provider: AttributeProvider): Attribute {
  return provider.array(provider.empty);
}

/**
 * Create a cat {@link Attribute}.
 */
function provideCat(provider: AttributeProvider): Attribute {
  return provider.group({
    eyes: provideEyes,
    tail: provider.empty,
  });
}

(async () => {
  const cat = provideCat(defaultAttributeProvider);
  console.log(cat);
})();
