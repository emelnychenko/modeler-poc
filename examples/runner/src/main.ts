import { createModel } from '@modeler/common';

(async () => {
  const cat = createModel(x => x.field('tail'));

  console.log(cat);
})();
