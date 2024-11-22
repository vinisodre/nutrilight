import React from "react";
import Banner from "../components/Banner";
import ImageText from "../components/ImageText";

function page() {
  return (
    <>
      <Banner
        title="Refeições"
        description="De marmitas fit a refeições para obras, atendemos todos com cuidado e atenção"
        showPrimaryButton={false}
        showSecondaryButton={false}
        backgroundImage="/images/hero2.png"
      />
      <ImageText
        title="NutriLight"
        description="Alimentos saudáveis"
        mainImageSrc="/images/teste.jpg"
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas nec mauris sit amet fermentum. Etiam dictum sollicitudin enim, ac egestas lectus ultrices maximus. Aliquam et sem orci. Phasellus luctus blandit volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ut est bibendum, aliquam nunc et, suscipit nibh. Etiam sed commodo est. Cras ligula nunc, interdum quis arcu et, porta convallis est. Donec tortor justo, imperdiet in auctor vel, tempus eu nisl. Proin quis consectetur ipsum. Vestibulum nec leo libero. Nulla ornare efficitur ipsum a placerat. Aenean gravida lacinia diam vitae dictum. Cras neque ligula, accumsan a nibh sed, aliquam dapibus felis. Donec nec sapien vitae erat convallis porta quis a erat.",
          "Integer aliquet eu dolor quis pretium. Maecenas sem mauris, pretium vitae interdum ac, faucibus ut neque. Donec congue nisi quis quam consectetur viverra ac scelerisque metus. Curabitur pellentesque viverra malesuada. Pellentesque efficitur ac massa a feugiat. Nullam vehicula, neque eget ornare fermentum, leo est sagittis metus, vitae sodales sapien risus in arcu. Maecenas in purus ut nulla pretium porttitor id vel mi. Pellentesque nisi elit, dictum vitae sollicitudin vel, lacinia vitae ex. Fusce ornare nisl vitae mauris rutrum venenatis non eu mauris. Curabitur aliquam at quam vel laoreet.",
        ]}
      />
    </>
  );
}

export default page;
