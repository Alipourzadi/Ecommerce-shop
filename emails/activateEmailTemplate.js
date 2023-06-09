export const activateEmailTemplate = (to, url) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    style="
      width: 100%;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <head>
      <meta charset="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta content="telephone=no" name="format-detection" />
      <title>New Template</title>
      <!--[if (mso 16)]>
        <style type="text/css">
          a {
            text-decoration: none;
          }
        </style>
      <![endif]-->
      <!--[if gte mso 9
        ]><style>
          sup {
            font-size: 100% !important;
          }
        </style><!
      [endif]-->
      <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      <![endif]-->
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
        .es-button {
          mso-style-priority: 100 !important;
          text-decoration: none !important;
        }
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
        .es-desk-hidden {
          display: none;
          float: left;
          overflow: hidden;
          width: 0;
          max-height: 0;
          line-height: 0;
          mso-hide: all;
        }
        @media only screen and (max-width: 600px) {
          p,
          ul li,
          ol li,
          a {
            line-height: 150% !important;
          }
          h1,
          h2,
          h3,
          h1 a,
          h2 a,
          h3 a {
            line-height: 120% !important;
          }
          h1 {
            font-size: 22px !important;
            text-align: center;
          }
          h2 {
            font-size: 26px !important;
            text-align: center;
          }
          h3 {
            font-size: 20px !important;
            text-align: center;
          }
          .es-header-body h1 a,
          .es-content-body h1 a,
          .es-footer-body h1 a {
            font-size: 22px !important;
          }
          .es-header-body h2 a,
          .es-content-body h2 a,
          .es-footer-body h2 a {
            font-size: 26px !important;
          }
          .es-header-body h3 a,
          .es-content-body h3 a,
          .es-footer-body h3 a {
            font-size: 20px !important;
          }
          .es-menu td a {
            font-size: 16px !important;
          }
          .es-header-body p,
          .es-header-body ul li,
          .es-header-body ol li,
          .es-header-body a {
            font-size: 14px !important;
          }
          .es-content-body p,
          .es-content-body ul li,
          .es-content-body ol li,
          .es-content-body a {
            font-size: 16px !important;
          }
          .es-footer-body p,
          .es-footer-body ul li,
          .es-footer-body ol li,
          .es-footer-body a {
            font-size: 16px !important;
          }
          .es-infoblock p,
          .es-infoblock ul li,
          .es-infoblock ol li,
          .es-infoblock a {
            font-size: 16px !important;
          }
          *[class="gmail-fix"] {
            display: none !important;
          }
          .es-m-txt-c,
          .es-m-txt-c h1,
          .es-m-txt-c h2,
          .es-m-txt-c h3 {
            text-align: center !important;
          }
          .es-m-txt-r,
          .es-m-txt-r h1,
          .es-m-txt-r h2,
          .es-m-txt-r h3 {
            text-align: right !important;
          }
          .es-m-txt-l,
          .es-m-txt-l h1,
          .es-m-txt-l h2,
          .es-m-txt-l h3 {
            text-align: left !important;
          }
          .es-m-txt-r img,
          .es-m-txt-c img,
          .es-m-txt-l img {
            display: inline !important;
          }
          .es-button-border {
            display: inline-block !important;
          }
          a.es-button,
          button.es-button {
            font-size: 20px !important;
            display: inline-block !important;
          }
          .es-btn-fw {
            border-width: 10px 0px !important;
            text-align: center !important;
          }
          .es-adaptive table,
          .es-btn-fw,
          .es-btn-fw-brdr,
          .es-left,
          .es-right {
            width: 100% !important;
          }
          .es-content table,
          .es-header table,
          .es-footer table,
          .es-content,
          .es-footer,
          .es-header {
            width: 100% !important;
            max-width: 600px !important;
          }
          .es-adapt-td {
            display: block !important;
            width: 100% !important;
          }
          .adapt-img {
            width: 100% !important;
            height: auto !important;
          }
          .es-m-p0 {
            padding: 0px !important;
          }
          .es-m-p0r {
            padding-right: 0px !important;
          }
          .es-m-p0l {
            padding-left: 0px !important;
          }
          .es-m-p0t {
            padding-top: 0px !important;
          }
          .es-m-p0b {
            padding-bottom: 0 !important;
          }
          .es-m-p20b {
            padding-bottom: 20px !important;
          }
          .es-mobile-hidden,
          .es-hidden {
            display: none !important;
          }
          tr.es-desk-hidden,
          td.es-desk-hidden,
          table.es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
          }
          tr.es-desk-hidden {
            display: table-row !important;
          }
          table.es-desk-hidden {
            display: table !important;
          }
          td.es-desk-menu-hidden {
            display: table-cell !important;
          }
          .es-menu td {
            width: 1% !important;
          }
          table.es-table-not-adapt,
          .esd-block-html table {
            width: auto !important;
          }
          table.es-social {
            display: inline-block !important;
          }
          table.es-social td {
            display: inline-block !important;
          }
          .es-desk-hidden {
            display: table-row !important;
            width: auto !important;
            overflow: visible !important;
            max-height: inherit !important;
          }
        }
      </style>
    </head>
    <body
      style="
        width: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        font-family: tahoma, verdana, segoe, sans-serif;
        padding: 0;
        margin: 0;
      "
    >
      <div class="es-wrapper-color" style="background-color: #ffffff">
        <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#ffffff"></v:fill>
          </v:background>
        <![endif]-->
        <table
          class="es-wrapper"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse;
            border-spacing: 0px;
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            background-repeat: repeat;
            background-position: center top;
            background-color: #ffffff;
          "
        >
          <tr style="border-collapse: collapse">
            <td valign="top" style="padding: 0; margin: 0">
              <table
                class="es-header"
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
              >
                <tr style="border-collapse: collapse">
                  <td
                    class="es-adaptive"
                    align="center"
                    style="padding: 0; margin: 0"
                  >
                    <table
                      class="es-header-body"
                      align="center"
                      cellspacing="0"
                      cellpadding="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                    >
                      <tr style="border-collapse: collapse">
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-bottom: 10px;
                            padding-left: 20px;
                            padding-right: 20px;
                            padding-top: 25px;
                          "
                        >
                          <!--[if mso]><table style="width:560px" cellpadding="0"
      cellspacing="0"><tr><td style="width:205px" valign="top"><![endif]-->
                          <table
                            class="es-left"
                            align="left"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                              float: left;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                class="es-m-p0r es-m-p20b"
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 205px"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-p0l es-m-txt-c"
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        font-size: 0px;
                                      "
                                    >
                                      <a
                                        href="https://localhost:3000"
                                        target="_blank"
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #ee6c6d;
                                          font-size: 14px;
                                        "
                                        ><img
                                          src="https://mmbkrh.stripocdn.email/content/guids/CABINET_f46059e51e6c9505c2f1921aaff28483b200943e63e9187454720f4b9ddea2bd/images/logo.png"
                                          alt="Logo"
                                          style="
                                            display: block;
                                            border: 0;
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                          "
                                          title="Logo"
                                          height="46"
                                      /></a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso]></td><td style="width:10px"></td><td style="width:345px" valign="top"><![endif]-->
                          <table
                            align="right"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                align="left"
                                style="padding: 0; margin: 0; width: 345px"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr style="border-collapse: collapse">
                                    <td style="padding: 0; margin: 0">
                                      <table
                                        class="es-menu"
                                        width="70%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tr
                                          class="links"
                                          style="border-collapse: collapse"
                                        >
                                          <td
                                            style="
                                              margin: 0;
                                              padding-left: 5px;
                                              padding-right: 5px;
                                              padding-top: 20px;
                                              padding-bottom: 0px;
                                              border: 0;
                                            "
                                            id="esd-menu-id-0"
                                            align="center"
                                            width="33.33%"
                                            bgcolor="transparent"
                                          >
                                            <a
                                              target="_blank"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: none;
                                                display: block;
                                                font-family: tahoma, verdana,
                                                  segoe, sans-serif;
                                                color: #333333;
                                                font-size: 18px;
                                                direction: rtl;
                                              "
                                              href="http://localhost:3000"
                                              >سایت</a
                                            >
                                          </td>
                                          <td
                                            style="
                                              margin: 0;
                                              padding-left: 5px;
                                              padding-right: 5px;
                                              padding-top: 20px;
                                              padding-bottom: 0px;
                                              border: 0;
                                            "
                                            id="esd-menu-id-1"
                                            esdev-border-color="#000000"
                                            align="center"
                                            width="33.33%"
                                            bgcolor="transparent"
                                          >
                                            <a
                                              target="_blank"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: none;
                                                display: block;
                                                font-family: tahoma, verdana,
                                                  segoe, sans-serif;
                                                color: #333333;
                                                font-size: 18px;
                                                direction: rtl;
                                              "
                                              href="http://localhost:3000"
                                              >خرید</a
                                            >
                                          </td>
                                          <td
                                            style="
                                              margin: 0;
                                              padding-left: 5px;
                                              padding-right: 5px;
                                              padding-top: 20px;
                                              padding-bottom: 0px;
                                              border: 0;
                                            "
                                            id="esd-menu-id-2"
                                            esdev-border-color="#000000"
                                            align="center"
                                            width="33.33%"
                                            bgcolor="transparent"
                                          >
                                            <a
                                              target="_blank"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: none;
                                                display: block;
                                                font-family: tahoma, verdana,
                                                  segoe, sans-serif;
                                                color: #333333;
                                                font-size: 18px;
                                                direction: rtl;
                                              "
                                              href="http://localhost:3000"
                                              >درباره ما</a
                                            >
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                class="es-content"
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr style="border-collapse: collapse">
                  <td align="center" style="padding: 0; margin: 0">
                    <table
                      class="es-content-body"
                      align="center"
                      cellspacing="0"
                      cellpadding="0"
                      bgcolor="#ffffff"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #ffffff;
                        width: 600px;
                      "
                    >
                      <tr style="border-collapse: collapse">
                        <td
                          align="left"
                          style="padding: 0; margin: 0; padding-top: 20px"
                        >
                          <table
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 600px"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr style="border-collapse: collapse">
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-left: 20px;
                                        padding-right: 20px;
                                        font-size: 0px;
                                      "
                                    >
                                      <img
                                        class="adapt-img"
                                        src="https://mmbkrh.stripocdn.email/content/guids/CABINET_f46059e51e6c9505c2f1921aaff28483b200943e63e9187454720f4b9ddea2bd/images/emailverify61617305073621.png"
                                        alt="Image"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        "
                                        title="Image"
                                        width="260"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                class="es-content"
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr style="border-collapse: collapse">
                  <td align="center" style="padding: 0; margin: 0">
                    <table
                      class="es-content-body"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #ffffff;
                        border-top: 1px solid transparent;
                        border-right: 1px solid transparent;
                        border-left: 1px solid transparent;
                        width: 600px;
                        border-bottom: 1px solid transparent;
                      "
                      align="center"
                      cellspacing="0"
                      cellpadding="0"
                      bgcolor="#ffffff"
                    >
                      <tr style="border-collapse: collapse">
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-top: 20px;
                            padding-bottom: 40px;
                            padding-left: 40px;
                            padding-right: 40px;
                          "
                        >
                          <table
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                align="left"
                                style="padding: 0; margin: 0; width: 518px"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-txt-c"
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-bottom: 5px;
                                        font-size: 0px;
                                      "
                                    >
                                      <img
                                        src="https://mmbkrh.stripocdn.email/content/guids/CABINET_f46059e51e6c9505c2f1921aaff28483b200943e63e9187454720f4b9ddea2bd/images/logo.png"
                                        alt="icon"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        "
                                        title="icon"
                                        width="120"
                                      />
                                    </td>
                                  </tr>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-txt-c"
                                      align="center"
                                      style="padding: 0; margin: 0"
                                    >
                                      <h1
                                        style="
                                          margin: 0;
                                          line-height: 22px;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma, verdana, segoe,
                                            sans-serif;
                                          font-size: 22px;
                                          font-style: normal;
                                          font-weight: normal;
                                          color: #333333;
                                          direction: rtl;
                                        "
                                      >
                                        برای تکمیل فرایند ثبت نام لطفا ایمیل خود
                                        را تایید کنید!
                                      </h1>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-txt-c"
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 15px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma, verdana, segoe,
                                            sans-serif;
                                          line-height: 21px;
                                          color: #333333;
                                          font-size: 14px;
                                          direction: rtl;
                                        "
                                      >
                                        درخواست شما برای ثبت نام با ایمیل
                                        <b>${to}</b>&nbsp;به دست ما رسید . برای
                                        تکمیل فرایند ثبت نام ایمیل خود را تایید
                                        کنید با کلیک به روی لینک
                                        <a href="${url}">"لینک تایید"</a> در صورتی
                                        که فرایند ثبت نام مورد تایید شما نیست و یا
                                        ایمیل شما با ایمیل مورد نظر مغایرت دارد
                                        لطفا به ما در میان بگذارید.
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      align="center"
                                      style="
                                        margin: 0;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-bottom: 15px;
                                        padding-top: 20px;
                                      "
                                    >
                                      <!--[if mso
                                        ]><a href="${url}" target="_blank" hidden>
                                          <v:roundrect
                                            xmlns:v="urn:schemas-microsoft-com:vml"
                                            xmlns:w="urn:schemas-microsoft-com:office:word"
                                            esdevVmlButton
                                            href="${url}"
                                            style="
                                              height: 28px;
                                              v-text-anchor: middle;
                                              width: 110px;
                                            "
                                            arcsize="50%"
                                            stroke="f"
                                            fillcolor="#272ee4"
                                          >
                                            <w:anchorlock></w:anchorlock>
                                            <center
                                              style="
                                                color: #efefef;
                                                font-family: tahoma, verdana,
                                                  segoe, sans-serif;
                                                font-size: 10px;
                                                font-weight: 400;
                                                line-height: 10px;
                                                mso-text-raise: 1px;
                                              "
                                            >
                                              تایید ایمیل
                                            </center>
                                          </v:roundrect></a
                                        > <!
                                      [endif]--><!--[if !mso]><!-- --><span
                                        class="msohide es-button-border"
                                        style="
                                          border-style: solid;
                                          border-color: #474745;
                                          background: #272ee4;
                                          border-width: 0px;
                                          display: inline-block;
                                          border-radius: 20px;
                                          width: auto;
                                          mso-border-alt: 10px;
                                          mso-hide: all;
                                        "
                                        ><a
                                          href="${url}"
                                          class="es-button"
                                          target="_blank"
                                          dir="rtl"
                                          style="
                                            mso-style-priority: 100 !important;
                                            text-decoration: none;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            color: #efefef;
                                            font-size: 14px;
                                            display: inline-block;
                                            background: #272ee4;
                                            border-radius: 20px;
                                            font-family: tahoma, verdana, segoe,
                                              sans-serif;
                                            font-weight: normal;
                                            font-style: normal;
                                            line-height: 17px;
                                            width: auto;
                                            text-align: center;
                                            padding: 6px 25px 6px 25px;
                                            border-color: #272ee4;
                                          "
                                          >تایید ایمیل</a
                                        ></span
                                      ><!--<![endif]-->
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-footer"
                align="center"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
              >
                <tr style="border-collapse: collapse">
                  <td
                    style="padding: 0; margin: 0; background-color: #f7f7f7"
                    bgcolor="#f7f7f7"
                    align="center"
                  >
                    <table
                      class="es-footer-body"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #f7f7f7;
                        width: 600px;
                      "
                    >
                      <tr style="border-collapse: collapse">
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-top: 20px;
                            padding-bottom: 20px;
                            padding-left: 20px;
                            padding-right: 20px;
                          "
                        >
                          <table
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                valign="top"
                                align="center"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr style="border-collapse: collapse">
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-bottom: 5px;
                                      "
                                    >
                                      <h3
                                        style="
                                          margin: 0;
                                          line-height: 30px;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma, verdana, segoe,
                                            sans-serif;
                                          font-size: 20px;
                                          font-style: normal;
                                          font-weight: normal;
                                          color: #333333;
                                          direction: rtl;
                                        "
                                      >
                                        شبکه های اجتماعی
                                      </h3>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                        font-size: 0;
                                      "
                                    >
                                      <table
                                        class="es-table-not-adapt es-social"
                                        cellspacing="0"
                                        cellpadding="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tr style="border-collapse: collapse">
                                          <td
                                            valign="top"
                                            align="center"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 20px;
                                            "
                                          >
                                            <a
                                              href="https://viewstripo.email/"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #333333;
                                                font-size: 14px;
                                              "
                                              ><img
                                                title="Facebook"
                                                src="https://mmbkrh.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png"
                                                alt="Fb"
                                                width="32"
                                                height="32"
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                            /></a>
                                          </td>
                                          <td
                                            valign="top"
                                            align="center"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 20px;
                                            "
                                          >
                                            <a
                                              href="https://viewstripo.email/"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #333333;
                                                font-size: 14px;
                                              "
                                              ><img
                                                title="Youtube"
                                                src="https://mmbkrh.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png"
                                                alt="Yt"
                                                width="32"
                                                height="32"
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                            /></a>
                                          </td>
                                          <td
                                            valign="top"
                                            align="center"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 20px;
                                            "
                                          >
                                            <a
                                              href="https://viewstripo.email/"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #333333;
                                                font-size: 14px;
                                              "
                                              ><img
                                                title="Pinterest"
                                                src="https://mmbkrh.stripocdn.email/content/assets/img/social-icons/logo-black/pinterest-logo-black.png"
                                                alt="P"
                                                width="32"
                                                height="32"
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                            /></a>
                                          </td>
                                          <td
                                            valign="top"
                                            align="center"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 20px;
                                            "
                                          >
                                            <a
                                              href="https://viewstripo.email/"
                                              target="_blank"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #333333;
                                                font-size: 14px;
                                              "
                                              ><img
                                                title="Instagram"
                                                src="https://mmbkrh.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png"
                                                alt="Ig"
                                                width="32"
                                                height="32"
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                            /></a>
                                          </td>
                                          <td
                                            valign="top"
                                            align="center"
                                            style="padding: 0; margin: 0"
                                          >
                                            <a
                                              href="https://viewstripo.email/"
                                              target="_blank"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #333333;
                                                font-size: 14px;
                                              "
                                              ><img
                                                title="Twitter"
                                                src="https://mmbkrh.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png"
                                                alt="Tw"
                                                width="32"
                                                height="32"
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                            /></a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma, verdana, segoe,
                                            sans-serif;
                                          line-height: 21px;
                                          color: #333333;
                                          font-size: 14px;
                                          direction: rtl;
                                        "
                                      >
                                        شما این ایمیل را به منظور ثبت نام و یا
                                        تغییر ایمیل دریافت میکنید.
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-bottom: 10px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma, verdana, segoe,
                                            sans-serif;
                                          line-height: 21px;
                                          color: #333333;
                                          font-size: 14px;
                                          direction: rtl;
                                        "
                                      >
                                        <strong
                                          >Vector graphics designed by
                                          <a
                                            target="_blank"
                                            href="http://www.freepik.com/"
                                            style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333333;
                                              font-size: 14px;
                                            "
                                            >Freepik</a
                                          >.</strong
                                        >
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: tahoma, verdana, segoe,
                                            sans-serif;
                                          line-height: 21px;
                                          color: #333333;
                                          font-size: 14px;
                                          direction: rtl;
                                        "
                                      >
                                        © Shoppay&nbsp;| 2023
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                class="es-content"
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr style="border-collapse: collapse">
                  <td align="center" style="padding: 0; margin: 0">
                    <table
                      class="es-content-body"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                      align="center"
                      cellspacing="0"
                      cellpadding="0"
                    >
                      <tr style="border-collapse: collapse">
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-left: 20px;
                            padding-right: 20px;
                            padding-top: 30px;
                            padding-bottom: 30px;
                          "
                        >
                          <table
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-infoblock made_with"
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        line-height: 120%;
                                        font-size: 0;
                                        color: #cccccc;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=yoga&utm_content=trigger_newsletter"
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #cccccc;
                                          font-size: 12px;
                                        "
                                        ><img
                                          src="https://mmbkrh.stripocdn.email/content/guids/CABINET_9df86e5b6c53dd0319931e2447ed854b/images/64951510234941531.png"
                                          alt
                                          width="125"
                                          style="
                                            display: block;
                                            border: 0;
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                          "
                                      /></a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
      <div
        style="position: absolute; left: -9999px; top: -9999px; margin: 0px"
      ></div>
    </body>
  </html>
  `;
};
