import React from 'react';
import { CourseDetails, CourseInfo } from '../../Components/Courses/CoursesInfo/CourseInfo';
import { CourseDetailsTab } from '../../Components/Courses/CoursesInfo/CourseDetailsTab';
import detail from '../../assets/img/course-details.jpg'
import tab1 from '../../assets/img/course-details-tab-1.png'
import tab2 from '../../assets/img/course-details-tab-2.png'
import tab3 from '../../assets/img/course-details-tab-3.png'
import tab4 from '../../assets/img/course-details-tab-4.png'
import tab5 from '../../assets/img/course-details-tab-5.png'

const CourseDescription = {
    Title: "",
    Description: `Qui et explicabo voluptatem et ab qui vero et voluptas. Sint voluptates temporibus quam autem. Atque nostrum voluptatum laudantium a doloremque enim et ut dicta. Nostrum ducimus est iure minima totam doloribus nisi ullam deserunt. Corporis aut officiis sit nihil est. Labore aut sapiente aperiam.
    Qui voluptas qui vero ipsum ea voluptatem.Omnis et est.Voluptatem officia voluptatem adipisci et iusto provident doloremque consequatur.Quia et porro est.Et qui corrupti laudantium ipsa.
    Eum quasi saepe aperiam qui delectus quaerat in.Vitae mollitia ipsa quam.Ipsa aut qui numquam eum iste est dolorum.Rem voluptas ut sit ut.`,
    Image: detail,
    CourseData: {
        Trainer: {
            TrainerName: "Walter White",
            TrainerLink: "https://www.google.com"
        },
        CourseFee: "$165",
        AvailableSeats: "30",
        Schedule: "5.00 pm - 7.00 pm"
    }
}
const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"]
const panes = [
    {
        Title: "Title 1",
        SubTitle: "SubTitle 1",
        Description: "Description 1",
        ImageInformation: {
            Tab: tab1,
            Alt: "Description 1"
        }
    },
    {
        Title: "Title 2",
        SubTitle: "SubTitle 3",
        Description: "Description 3",
        ImageInformation: {
            Tab: tab2,
            Alt: "Description 2"
        }
    },
    {
        Title: "Title 3",
        SubTitle: "SubTitle 3",
        Description: "Description 3",
        ImageInformation: {
            Tab: tab3,
            Alt: "Description 3"
        }
    },
    {
        Title: "Title 4",
        SubTitle: "SubTitle 4",
        Description: "Description 4",
        ImageInformation: {
            Tab: tab4,
            Alt: "Description 4"
        }
    },
    {
        Title: "Title 5",
        SubTitle: "SubTitle 5",
        Description: "Description 5",
        ImageInformation: {
            Tab: tab5,
            Alt: "Description 5"
        }
    }
]

const TabsInfo = {
    TabsTitles: tabs,
    PanesInfo: panes
}
export default function CourseDetailPage() {
    return <React.Fragment>
        <div className="breadcrumbs" data-aos="fade-in">
            <div className="container">
                <h2>Course Details</h2>
                <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
            </div>
        </div>
        <div className="container" data-aos="fade-up">
            <div className="row">
                <CourseDetails CourseTitle={CourseDescription.Title} CourseDescription={CourseDescription.Description} CourseImage={CourseDescription.Image}
                />
                <CourseInfo CourseData={CourseDescription.CourseData} />
                <CourseDetailsTab Tabs={TabsInfo.TabsTitles} Panes={TabsInfo.PanesInfo} />
            </div>
        </div>
    </React.Fragment>
}