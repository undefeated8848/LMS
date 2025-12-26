import { assets, dummyTestimonial } from '../../assets/assets';

const TestiminialsSection = () => {
  return (
    <div className='testimonials pb-14 px-8 md:px-0'>
      <h1 className='text-3xl font-medium text-gray-800'>Testimonials</h1>
      <p className='md:text-base text-gray-500 mt-3'>Hear from our learners as they share their journeys of transformation, success, and how our <br /> 
      platform has made a difference in their lives</p>
      <div>
        {dummyTestimonial.map((testimonial,index)=>{
          return (
            <div key={index} className='text-sm text-left border border-gray-500/30 pb-0 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'>
               <img className='h-12 w-12 rounded-full' src={testimonial.image} alt={testimonial.name} />
               <div>
                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-800/80'>{testimonial.role}</p>
               </div>
               <div className='p-5 pb-7'>
                  <div className='flex gap-0.5'>
                    {[...Array(5)].map(($,i)=>(
                      <img className='h-5' src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} alt=''/>
                    ))}
                  </div>
                  <p className='text-gray-500'>{testimonial.feedback}</p>
               </div>
               <a href="#" className='text-blue-500 underline px-5'>Read more</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TestiminialsSection;
