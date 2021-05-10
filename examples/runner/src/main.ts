import { createModel } from '@modeler/common';

(async () => {
  const cat = createModel('cat', x => x.add('tail'));

  console.log(cat);
})();
