const BeforeAfterStatic = () => {
  return (
    <div
      style={{
        marginTop: "52px",
        marginBottom: "52px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        padding: "16px",
        paddingBottom: "40px",
        borderRadius: "12px",
      }}
    >
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          fontSize: "24px",
          padding: "16px",
          fontWeight: "600",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Окна до нас и после
      </p>
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "0",
          paddingBottom: "100%", // Соотношение 1:1 для аспекта
          overflow: "hidden",
        }}
      >
        {/* Левая фотография */}
        <div
          style={{
            width: "50%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "12px",
              borderBottomLeftRadius: "12px",
            }}
            alt="Окно до"
            src="https://i.imgur.com/Xt4ErOI.jpeg"
          />
        </div>

        {/* Правая фотография */}
        <div
          style={{
            width: "50%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            alt="Окно после"
            src="https://i.imgur.com/8kHtbYg.jpeg"
          />
        </div>

        {/* Разделитель */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "0",
            bottom: "0",
            width: "2px",
            backgroundColor: "black",
          }}
        ></div>
      </div>
    </div>
  );
};

export default BeforeAfterStatic;
