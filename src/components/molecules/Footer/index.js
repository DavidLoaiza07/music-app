import React from "react";
import {
  RiPlayCircleLine, RiPlayList2Fill, RiRepeat2Line,
  RiShuffleFill,
  RiSkipBackLine,
  RiSkipForwardLine,
  RiVolumeDownFill
} from "react-icons/ri";
import { Grid, Slider } from "@mui/material";
import Images from "../../../utils/Images/index";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <section className="footer__container__left">
        <figure className="footer__container__left__imgContainer">
          <img
            className="footer__container__left__imgContainer__image"
            src={Images.img1}
            alt="cover"
          />
        </figure>
        <section>
          <h4>Shape of my heart</h4>
          <span>Sting</span>
        </section>
      </section>
      <section className="footer__container__center">
        <RiShuffleFill className="footer__container__center__shuffle" />
        <RiSkipBackLine className="footer__container__center__icon" />
        <RiPlayCircleLine className="footer__container__center__icon" />
        <RiSkipForwardLine className="footer__container__center__icon" />
        <RiRepeat2Line className="footer__container__center__repeat" />
      </section>
      <section className="footer__container__right">
        <RiPlayList2Fill />
        <RiVolumeDownFill />
        <Grid item xs><Slider /></Grid>
      </section>
    </footer>
  );
};

export default Footer;
