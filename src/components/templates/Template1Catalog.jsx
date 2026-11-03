import React from 'react';
import Template1Catalog3x4 from './Template1Catalog3x4';
import Template1Catalog16x9 from './Template1Catalog16x9';
import Template1Catalog1x1 from './Template1Catalog1x1';
import Template1Catalog2x1 from './Template1Catalog2x1';

export default function Template1Catalog(props) {
  const ratio = props.t1Data?.catalogRatio || '3:4';

  if (ratio === '16:9') {
    return <Template1Catalog16x9 {...props} />;
  }
  if (ratio === '1:1') {
    return <Template1Catalog1x1 {...props} />;
  }
  if (ratio === '2:1') {
    return <Template1Catalog2x1 {...props} />;
  }
  return <Template1Catalog3x4 {...props} />;
}
