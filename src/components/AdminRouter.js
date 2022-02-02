import React from 'react';
import {Route,Routes} from "react-router-dom";

const AdminRouter = () => {
    return (
        <div>
            <Routes>
                <Route element={<p>1</p>} path={'news'}/>
                <Route element={<p>2</p>} path={'clients'}/>
                <Route element={<p>3</p>} path={'partners'}/>
                <Route element={<p>4</p>} path={'testimonials'}/>
            </Routes>
        </div>
    );
};

export default AdminRouter;