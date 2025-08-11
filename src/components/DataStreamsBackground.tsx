
interface DataStreamsBackgroundProps {
  theme: 'light' | 'dark';
}

export const DataStreamsBackground = (_: DataStreamsBackgroundProps) => {
  return (
    <div className="site-bg" aria-hidden>
      <div className="bg-gradient" />
      <div className="bg-aurora" />
      <div className="bg-streams">
        <span className="stream s1" />
        <span className="stream s2" />
        <span className="stream s3" />
      </div>
      <div className="bg-blobs">
        <span className="blob b1" />
        <span className="blob b2" />
      </div>
      <div className="bg-vignette" />
    </div>
  );
};
