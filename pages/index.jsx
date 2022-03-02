/* eslint-disable react/no-unescaped-entities */

import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Result from '../components/Result';
import requests from '../utils/request';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>

        <link rel="icon" href="/hulu.ico" />
      </Head>
      <div>
        <Header />
        <Nav />
        <Result results={data} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const genre = context.query.genre;
  const res = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data: data.results } };
}
