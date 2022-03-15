import FAQ from "./FAQ"

const FAQs = ({ myRef }) => {
  return (
    <section ref={myRef} className="w-full h-max  bg-[#5935a4] py-10 md:px-16 md:py-28 overflow-hidden">
      <h3 className='w-full text-center  text-[#ff7f4d] font-DelaGothic text-5xl md:text-7xl px-10 md:px-0'>FAQ'S</h3>
      <div className='flex flex-col items-center py-10 md:px-0'>
        <FAQ question='This is a demo FAQ?' answer='No, one does not need to be online for the entire duration. You can develop the application on your local system based on the given themes and then submit it on HackerEarth, on the specific challenge page.'/>
        <FAQ question='This is a demo FAQ?' answer='No, one does not need to be online for the entire duration. You can develop the application on your local system based on the given themes and then submit it on HackerEarth, on the specific challenge page.'/>
        <FAQ question='This is a demo FAQ?' answer='No, one does not need to be online for the entire duration. You can develop the application on your local system based on the given themes and then submit it on HackerEarth, on the specific challenge page.'/>
        <FAQ question='This is a demo FAQ?' answer='No, one does not need to be online for the entire duration. You can develop the application on your local system based on the given themes and then submit it on HackerEarth, on the specific challenge page.'/>
        <FAQ question='This is a demo FAQ?' answer='No, one does not need to be online for the entire duration. You can develop the application on your local system based on the given themes and then submit it on HackerEarth, on the specific challenge page.'/>
        <FAQ question='This is a demo FAQ?' answer='No, one does not need to be online for the entire duration. You can develop the application on your local system based on the given themes and then submit it on HackerEarth, on the specific challenge page.'/>
        <FAQ question='This is a demo FAQ?' answer='No, one does not need to be online for the entire duration. You can develop the application on your local system based on the given themes and then submit it on HackerEarth, on the specific challenge page.'/>
        <FAQ question='This is a demo FAQ?' answer='No, one does not need to be online for the entire duration. You can develop the application on your local system based on the given themes and then submit it on HackerEarth, on the specific challenge page.'/>
      </div>
    </section>
  )
}

export default FAQs
