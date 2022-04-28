import React from 'react';
import { CourseCategoryPrice, CourseContainer, CourseContent, CourseTitleDescription } from '../Components/Courses/Course/Courses';
import { TrainerContainer, TrainerProfile, TrainerRank } from '../Components/Courses/CoursesTrainers/CourseTrainers';
import trainer from '../assets/img/trainers/trainer-1.jpg';
import picture from '../assets/img/course-1.jpg';

//TODO: Para cada Curso, crear un Container.

export default function CoursesPage() {

    return <div className="container" data-aos="fade-up">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <Container></Container>
        </div>
    </div>
}

function Container() {
    return <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
        <CourseContainer>
            <img className="img-fluid" src={picture} alt={"CoursePictureAlternativeText"} />
            <CourseContent>
                <CourseCategoryPrice className={'d-flex justify-content-between align-items-center mb-3'} Title={"Web Development"} CoursePrice={"$169"} />
                <CourseTitleDescription To={"https://www.google.com"} Title={"Web Design"} Description={"Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore."} />
                <TrainerContainer className='d-flex justify-content-between align-items-center'>
                    <TrainerProfile ImgSrc={trainer} Trainer={"Ariel Calix"} />
                    <TrainerRank Users={50} Favs={65} />
                </TrainerContainer>
            </CourseContent>
        </CourseContainer>
    </div>
}