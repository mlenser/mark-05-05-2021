import styled from 'styled-components';

const PageWrapper = styled.div`
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  min-height: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 4rem;
  width: 75rem;

  @media ${({ theme }) => theme.device.tablet} {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${({ theme }) => theme.device.desktop} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  p {
    margin-bottom: 0;
    margin-top: 0;
    & + p {
      text-indent: 1em;
    }
  }
  table {
    break-inside: avoid;
    font-size: 0.875rem;
    margin-bottom: 0.8em;
    & + p {
      /* stylelint-disable-line no-descending-specificity */
      text-indent: 1em;
    }
  }
  thead {
    font-weight: bold;
  }
  th,
  td {
    min-width: 2.5rem;
    padding-bottom: 0.25em;
    padding-left: 0.25em;
    padding-right: 0.25em;
    padding-top: 0.25em;
  }
  th {
    vertical-align: bottom;
  }
  ul {
    list-style: disc;
    margin-bottom: 0.5em;
    margin-top: 0.01em;
    padding-left: 1.5em;
    & + p {
      text-indent: 1em;
    }
  }
  dl {
    margin-block-end: 0;
    margin-block-start: 0;
  }
  dd {
    margin-inline-start: 0;
  }
`;

export default PageWrapper;
