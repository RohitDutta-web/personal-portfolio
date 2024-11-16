import "./loading.css"

export default function Loading() {
  return (
    <>
      <div className="max-w-screen w-full h-screen flex items-center justify-center">
      <div className="w-1/2  h-auto">
      <svg viewBox="0 0 100 100">
	<g fill="none" stroke="rgb(74 222 128)" stroke-linecap="round" stroke-linejoin="round" stroke-width="6">
	
		<path d="M 21 40 V 59">
			<animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      values="0 21 59; 180 21 59"
      dur="2s"
      repeatCount="indefinite" />
		</path>
	
		<path d="M 79 40 V 59">
			<animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      values="0 79 59; -180 79 59"
      dur="2s"
      repeatCount="indefinite" />
		</path>
		
		<path d="M 50 21 V 40">
			<animate
      attributeName="d"
      values="M 50 21 V 40; M 50 59 V 40"
      dur="2s"
      repeatCount="indefinite" />
		</path>
		
		<path d="M 50 60 V 79">
			<animate
      attributeName="d"
      values="M 50 60 V 79; M 50 98 V 79"
      dur="2s"
      repeatCount="indefinite" />
		</path>
	
		<path d="M 50 21 L 79 40 L 50 60 L 21 40 Z">
		<animate
      attributeName="stroke"
      values="rgb(74, 222, 128, 1); rgba(74, 222, 128, 0)"
      dur="2s"
      repeatCount="indefinite" />
		</path>

		<path d="M 50 40 L 79 59 L 50 79 L 21 59 Z"/>

		<path d="M 50 59 L 79 78 L 50 98 L 21 78 Z">
		<animate
      attributeName="stroke"
      values="rgba(74, 222, 128, 0); rgba(74, 222, 128, 1)"
      dur="2s"
      repeatCount="indefinite" />
		</path>
		<animateTransform
      attributeName="transform"
      attributeType="XML"
      type="translate"
      values="0 0; 0 -19"
      dur="2s"
      repeatCount="indefinite" />
	</g>
          </svg>
          <p className="text-4xl font-bold text-green-400 bg-transparent text-center m-5">
         Cooking <span className="loader"><span className="opacity-0 p-2 ">...</span></span>
          </p>
      </div>
      </div>
    </>
  )
}

