import Image from 'next/image';

export default function Stats() {
  //   return (
  //     <div className="grid">
  //       <div className="col-12 md:col-6 lg:col-3">
  //         <div className="card w-96 bg-base-100 shadow-xl">
  //           <figure>
  //             <Image src="next.svg" alt="Shoes" width={400} height={200} />
  //           </figure>
  //           <div className="card-body">
  //             <h2 className="card-title">Shoes!</h2>
  //             <p>If a dog chews shoes whose shoes does he choose?</p>
  //             <div className="card-actions justify-end">
  //               <button className="btn btn-primary">Buy Now</button>
  //             </div>
  //           </div>
  //         </div>
  //         {/* <div className='surface-0 shadow-2 border-1 border-50 border-round p-3'>
  // 					<div className='justify-content-between mb-3 flex'>
  // 						<div>
  // 							<span className='text-500 mb-3 block font-medium'>Orders</span>
  // 							<div className='text-900 text-xl font-medium'>152</div>
  // 						</div>
  // 						<div
  // 							className='align-items-center justify-content-center border-round flex bg-blue-100'
  // 							style={{ width: '2.5rem', height: '2.5rem' }}>
  // 							<i className='pi pi-shopping-cart text-xl text-blue-500'></i>
  // 						</div>
  // 					</div>
  // 					<span className='font-medium text-green-500'>24 new </span>
  // 					<span className='text-500'>since last visit</span>
  // 				</div> */}
  //       </div>
  //       <div className="col-12 md:col-6 lg:col-3">
  //         <div className="surface-0 shadow-2 border-1 border-50 border-round p-3">
  //           <div className="justify-content-between mb-3 flex">
  //             <div>
  //               <span className="text-500 mb-3 block font-medium">Revenue</span>
  //               <div className="text-900 text-xl font-medium">$2.100</div>
  //             </div>
  //             <div
  //               className="align-items-center justify-content-center border-round flex bg-orange-100"
  //               style={{ width: '2.5rem', height: '2.5rem' }}
  //             >
  //               <i className="pi pi-map-marker text-xl text-orange-500"></i>
  //             </div>
  //           </div>
  //           <span className="font-medium text-green-500">%52+ </span>
  //           <span className="text-500">since last week</span>
  //         </div>
  //       </div>
  //       <div className="col-12 md:col-6 lg:col-3">
  //         <div className="surface-0 shadow-2 border-1 border-50 border-round p-3">
  //           <div className="justify-content-between mb-3 flex">
  //             <div>
  //               <span className="text-500 mb-3 block font-medium">Customers</span>
  //               <div className="text-900 text-xl font-medium">28441</div>
  //             </div>
  //             <div
  //               className="align-items-center justify-content-center border-round flex bg-cyan-100"
  //               style={{ width: '2.5rem', height: '2.5rem' }}
  //             >
  //               <i className="pi pi-inbox text-xl text-cyan-500"></i>
  //             </div>
  //           </div>
  //           <span className="font-medium text-green-500">520 </span>
  //           <span className="text-500">newly registered</span>
  //         </div>
  //       </div>
  //       <div className="col-12 md:col-6 lg:col-3">
  //         <div className="surface-0 shadow-2 border-1 border-50 border-round p-3">
  //           <div className="justify-content-between mb-3 flex">
  //             <div>
  //               <span className="text-500 mb-3 block font-medium">Comments</span>
  //               <div className="text-900 text-xl font-medium">152 Unread</div>
  //             </div>
  //             <div
  //               className="align-items-center justify-content-center border-round flex bg-purple-100"
  //               style={{ width: '2.5rem', height: '2.5rem' }}
  //             >
  //               <i className="pi pi-comment text-xl text-purple-500"></i>
  //             </div>
  //           </div>
  //           <span className="font-medium text-green-500">85 </span>
  //           <span className="text-500">responded</span>
  //         </div>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="my-5 flex flex-row flex-wrap justify-between">
      <div className="card w-96 bg-base-100 bg-slate-400/80 shadow-xl">
        <figure>
          <Image
            src="next.svg"
            alt="Shoes"
            width={400}
            height={200}
            className="p-4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 bg-sky-400/80 shadow-xl">
        <figure>
          <Image
            src="next.svg"
            alt="Shoes"
            width={400}
            height={200}
            className="p-4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 bg-yellow-400/80 shadow-xl">
        <figure>
          <Image
            src="next.svg"
            alt="Shoes"
            width={400}
            height={200}
            className="p-4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
