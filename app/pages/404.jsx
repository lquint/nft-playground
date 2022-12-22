import Link from 'next/link';
import Image from 'next/image';
import sadge from '../public/gifs/sadge.gif';

const NotFound = function notFound() {
  return (
    <div className="flex items-center not-found">
      <div className="flex flex-col items-center justify-center w-full space-y-4 lg-flex-row">
        <div className="relative overflow-hidden rounded-full w-36 h-36 ring-2 ring-pink-300 ring-offset-4">
          <Image
            objectFit="cover"
            src={sadge}
            alt="Gif of Sadge"
            layout="fill"
            priority
          />
        </div>
        <h1>Ooops...</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to the{' '}
          <Link href="/">
            Homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
