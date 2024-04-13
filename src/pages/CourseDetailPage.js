import React from 'react'
import { useParams } from 'react-router-dom';
import { client, builder } from '../api/SanityClient';
import ProfileCard from '../components/ProfileCard'
import NavCard from '../components/NavCard';
import PortableText from 'react-portable-text';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function CourseDetailPage() {
    const { courseId } = useParams();
    const [course, setCourse] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [activeTab, setActiveTab] = React.useState(1);
    const [question, setQuestion] = React.useState('');
    const [questions, setQuestions] = React.useState([]);
    const navigate = useNavigate();

    const handleSubmitQuestion = async () => {

        if(!localStorage.getItem('token')){
            toast.error('Please login to ask a question');
            navigate('/login');
            return;
        }

        if (!question) {
            alert('Please ask a question');
            return;
        }

        try {
            const res = await fetch('http://localhost:4000/api/addcomment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ comment:question, slug:courseId }),

            });
            const data = await res.json();
            console.log(data);
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data);
            }

        } catch (error) {
            console.log(error);

        }
        finally {
            fetchQuestions();
            setQuestion('');
        }
    }

    const fetchQuestions = async () => {
        try {
            const res = await fetch(`http://localhost:4000/api/comments?slug=${courseId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            setQuestions(data.comments);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

                
                
                

    const fetchCourseDetail = async () => {

        if(!localStorage.getItem('token')){
            toast.error('Please login to view course details');
            navigate('/login');
            return;
        }

        const query = `*[_type == "courses" && slug.current == "${courseId}"]{
            title,
            content,
            url,
            "notes": notes.asset->url
        }`;
        const course = await client.fetch(query);
        // console.log(course);
        setCourse(course[0]);
        setLoading(false);
    }

    React.useEffect(() => {
        fetchCourseDetail();
        fetchQuestions();

        // eslint-disable-next-line
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


                        } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    
                    <div className='flex flex-row justify-start items-center p-4 gap-4'>
                        <button onClick={
                            ()=>setActiveTab(1)
                        } className={`p-2 text-lg font-bold ${activeTab === 1 ? 'text-blue-500' : 'text-gray-500'}`}>Overview</button>
                        <button onClick={
                            ()=>setActiveTab(2)
                        } className={`p-2 text-lg font-bold ${activeTab === 2 ? 'text-blue-500' : 'text-gray-500'}`}>Q&A</button>
                        <button onClick={
                            ()=>setActiveTab(3)
                        } className={`p-2 text-lg font-bold ${activeTab === 3 ? 'text-blue-500' : 'text-gray-500'}`}>Download</button>
                        {/* <button onClick={
                            ()=>setActiveTab(4)
                        } className={`p-2 text-lg font-bold ${activeTab === 4 ? 'text-blue-500' : 'text-gray-500'}`}>

                        </button> */}

                    </div>

                    {
                        activeTab === 1 &&
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

                    </div>}

                    {
                        activeTab === 2 &&
                        <div className='p-4'>
                            <h1 className='text-2xl font-bold'>Q&A</h1>
                            <div className='flex flex-row justify-start items-center p-4 gap-4'>
                                <input type='text' className='p-2 w-3/4 border-2 border-gray-300 rounded-lg' placeholder='Ask a question'
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                 />
                                <button className='p-2 bg-blue-500 text-white rounded-lg'
                                    onClick={handleSubmitQuestion}
                                >Ask</button>
                            </div>
                            <div className='p-4'>
                                {
                                    questions.map((q, i) => (
                                        <div key={i} className='p-4 w-3/4 shadow rounded-lg mb-4'>
                                            <div className='flex flex-row justify-start items-center gap-4'>
                                                <img src='/images/Avatar1.jpg' alt='profile' className='w-12 h-12 rounded-full' />
                                                <div>
                                                    <h1 className='text-lg font-bold'>John Doe</h1>
                                                    <p className='text-sm text-gray-500'>{q.comment}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                                }
                            </div>
                        </div>

                    }

                    {
                        activeTab === 3 &&
                        <div className='p-4'>
                            <h1 className='text-2xl font-bold'>Download</h1>
                            <div className='flex flex-row justify-start items-center gap-4'>
                                <a target='_blank' href={`${course.notes}?dl=`}  className='p-2 bg-blue-500 text-white rounded-lg' rel="noreferrer">Download Notes</a>
                            </div>
                        </div>
                    }

                </div>





            </div>

        </div>
    )
}
