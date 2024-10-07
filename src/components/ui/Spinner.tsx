import { useState, CSSProperties, FC } from 'react';
import { MoonLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#9ca3af',
};

const Spinner = () => {
  const [loading, setLoading] = useState(true);
  return (
    <MoonLoader
      // color={''}
      loading={loading}
      cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
