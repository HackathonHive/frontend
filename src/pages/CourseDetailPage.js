import React from 'react'
import { useParams } from 'react-router-dom';
import { client, builder } from '../api/SanityClient';
import ProfileCard from '../components/ProfileCard'
import NavCard from '../components/NavCard';
import PortableText from 'react-portable-text';

export default function CourseDetailPage() {
    const { courseId } = useParams();
    const [course, setCourse] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const fetchCourseDetail = async () => {
        const query = `*[_type == "courses" && slug.current == "${courseId}"]`;
        const course = await client.fetch(query);
        console.log(course);
        setCourse(course[0]);
        setLoading(false);
    }

    React.useEffect(() => {
        fetchCourseDetail();
    }, [courseId]);


    return (

        !loading && <div className={`grid-cols-1 grid md:grid-cols-4 gap-8 m-0 h-full p-4  fixed w-full `} style={{ height: '100%' }}>
            <div className='hidden md:block gap-4 col-span-1'>
                {/* profile and nav */}
                <ProfileCard />
                <NavCard />
            </div>


            <div className='gap-4 w-full col-span-3  mb-5 my-4 shadow-lg mr-5'>
                <div className='mb-4  overflow-y-auto overflow-x-hidden p-4  gap-2'
                    style={{
                        scrollbarWidth: 'none',
                        height: '80vh'
                    }}
                >
                    <div>

                        <iframe width="100%" height="400px" src={
                            course && course.url


                        } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='p-4'>
                        <h1 className='text-2xl font-bold'>{course && course.title}</h1>
                        <PortableText
                            content={course && course.content}
                            projectId="ocpb00yf"
                            dataset="production"
                            className='text-gray-700 text-base font-sans'
                            serializers={{
                                h2: (props) => <h1
                                className='text-3xl font-bold text-gray-800 font-semibold space-x-2'
                                    {...props} />,
                                li: ({ children }) => <li className="special-list-item"
                                style={{
                                    listStyleType: 'disc',
                                }}
                                >{children}</li>,

                            }}
                        />

                    </div>
                </div>





            </div>

            {/* <div className='mr-2 hidden md:block'>

      search and trending 
    </div> */}
        </div>
    )
}
