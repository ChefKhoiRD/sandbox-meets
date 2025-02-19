import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonEventCard() {
  return (
    <div className="bg-neutral-900 rounded-lg shadow-md p-3.5 hover:bg-neutral-800 transition-colors border-solid max-w-md flex flex-col justify-between">
      <div>
        <Skeleton height={20} width="80%" baseColor="#2d2d2d" highlightColor="#3d3d3d" className="mb-2" />
        <Skeleton height={16} width="60%" baseColor="#2d2d2d" highlightColor="#3d3d3d" className="mb-2" />
        <Skeleton height={16} width="90%" baseColor="#2d2d2d" highlightColor="#3d3d3d" className="mb-2" />
        <Skeleton height={16} width="70%" baseColor="#2d2d2d" highlightColor="#3d3d3d" className="mb-2" />
      </div>
      <Skeleton height={32} width="100%" baseColor="#2d2d2d" highlightColor="#3d3d3d" className="mt-2" />
    </div>
  );
} 