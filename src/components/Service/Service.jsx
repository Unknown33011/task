import React from "react";
import serviceImg from "../assets/Rectangle 24.svg";
import "../Service/Service.css";
import servCam from "../assets/serv_camera.png";
import servPict from "../assets/serv_pict.png";

const Service = () => {
  return (
    <div className="service_block">
      <div className="service_block_item">
        <div className="service_block_left">
          <div className="bg_left_block_img">
            <img src={serviceImg} alt="" className="service_img" />
          </div>
        </div>
        <div className="service_block_right">
          <div className="service_btn_title">
            <h2 className="service_block_title">SERVICE PACKAGE</h2>
            <button className="service_block_btn">VIEW</button>
          </div>

          <p className="service_block_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas
            facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis
            et. Pellentesque amet tristique rhoncu, donec a euismod velit.
            Hendrerit molestie fermentum odi euismod.
          </p>
        </div>
      </div>
      {/* ============================================= */}
      <div className="service_block_item">
        <div className="service_block_right">
          <div className="service_btn_title">
            <h2 className="service_block_title">SERVICE PACKAGE</h2>
            <button className="service_block_btn">VIEW</button>
          </div>

          <p className="service_block_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas
            facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis
            et. Pellentesque amet tristique rhoncu, donec a euismod velit.
            Hendrerit molestie fermentum odi euismod.
          </p>
        </div>
        <div className="service_block_left">
          <div className="bg_left_block_img">
            <img src={servCam} alt="" className="service_img" />
          </div>
        </div>
      </div>
      {/* =============================================== */}
      <div className="service_block_item">
        <div className="service_block_left">
          <div className="bg_left_block_img">
            <img src={servPict} alt="" className="service_img" />
          </div>
        </div>
        <div className="service_block_right">
          <div className="service_btn_title">
            <h2 className="service_block_title">SERVICE PACKAGE</h2>
            <button className="service_block_btn">VIEW</button>
          </div>

          <p className="service_block_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas
            facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis
            et. Pellentesque amet tristique rhoncu, donec a euismod velit.
            Hendrerit molestie fermentum odi euismod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
