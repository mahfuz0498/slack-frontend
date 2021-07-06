import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from ".././firebase.js";
function Login() {
  const handleClick = e => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch(err => alert(err.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEA8PEA8QDQ0QEBAQEA0VEBAQExASFhUWFhYXGBYaHigiGRopGxUVITEjKSkrLi46GCszODMtOCgyLisBCgoKDg0OGhAQGzIiICUvMCsxListNSs3LSsrNzItLzYuLS0tLS03NS0tLTgtLystKzctLS0tLS0tKystLTUtN//AABEIAMkA+wMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUDAgj/xABEEAACAgACBgYHBAYJBQAAAAAAAQIDBBEFBhIhMUEHE1FhcZEiMlJigaHBFCNCsSQzcpLC0UNEY3OCorLw8RUWU9Lh/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAKhEBAAIBBAECBQQDAAAAAAAAAAECAwQREiExUbETIkGRoQVhgeEjJHH/2gAMAwEAAhEDEQA/ALxAAAAAAABgyYAGQYMgAYAGQAABgyAAAAGABkGABkGABkGABkGABkGDIAGABkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwZAAAAAAAB8WXRj60ox8WkeUcbS+Ftb/xx/mBsAwnnw3mQAAAAAAAABgyAAAAAAAAAAAAAAAAAAAAAAAeGMxddMHZbONda4yk8l4d77jmazax1YGGcvTukn1dKeTl3vsj3lU6W0xfi59ZdPa47MFuhBdkV9eIE00v0gpZxwtW1/bWZpfCC3v4teBF8brDjL/XxFmXsxfVx8o5Z/E46OvovV/F4lJ10y2H/AEksoR+DfH4ZnXHP473vfa97PtJEtw/R/e/Xvqh3KMrP5Gw+j2fLFxb/ALlr+MCH04idbzrnOt9sZSj+R2tH65YynJSmsRD2Zrf+8t/nme+M1HxkFnB13LsUtmXlLJfMjuMwltMti2udUuyUWs/DtAsvQuuGGxLUJP7Pc9yhNrZk/dnwfxyZIyh2SjVjXGzDONV7lbhuClxnUu72o93l2DZ1aAPPD3wsjGcJKcJJSjJPNNM9DgAAAAAAAAAAAAAAAAAAAAAAAAHL1j01XgqJXT9KXq1155Oc3wXhzb7jqFMa66ceMxUtl50Ut11Lk8vWn8WvJIDl4/HWYiyd1snOybzb5JcklyS7D00bgbcRZGqmDnZLlyS5tvku81sLRO2cK4Rc7JyUYxXNsubVfQFeBqUVlK6WTtt9p9i91cvM640dXtS6MMlO1LEYjjm16EH7sXx8X8iT5GQcdAAAPDGYOq6LhbCNkH+GST/4fee58W2RgnKUlGKWbk2kku9gVzrRqXKlSuw21ZUt8qeM4LtXtL5+JDGy0cdr1hYS2a4zvy4zjlGPwb3vyItrRoyq2paRwsXGmbavqySdc88nLJcs+PjnzJbYr1rytG0IaajHe3Gtt5fGpWszwliptl+i2Pe3/Qyf4l7vb5+NrJn5/bLR6OdNu+h4ebztw+Si3xlU90fLh5EaZMAAcAAAAAAAAAAAAAAAAAAAAABwNeNJvDYG6cXlZNdTW+alPc2u9R2n8ClYlhdLuKf6JSuH3lsl3rKMfzmV0mdFj9Fuh0+sxk1wbqp8fxy+aj5linM1awX2fCYerLJxqi5ftyW1L/M2RfXrX6GD2sNhdm3GcJS4wo8e2fu8ufY/VMdsluNXm1orG8u5rTrZhdHR+9lt3SWcMPDJzl3v2Y97+ZVmkuknSds9qqcMJWnuqhCE93vSmnn8EvAjF1lls5WWTlZbN7UrJPOUn3syqTXw6OlI77lRyaqZnpfmpum3j8HViJJRte1C2K4KyLyeXc9z+J3CA9D0v0XEQ9nEbX71cP8A1JZp3TNOCqd1sslwjBetZLlGK/3kZeXHtlmlfVbpkiccWl66W0pTha3bdLZgtyXFylyjFc2VTrDrLdjZb31dCfoUJ7vGXtS/Lkc3Tmnbsba7bXklmq6k/Rrj2Lv7Xz+RpKxJZt5JczU02kjH81vPsyNVqpy/LXx7tqMizNQaIzwEoTSlCyy2Li+Di0k1+ZTmI0tluhHP3nnl5F3agVtaNwjkkpWV9a8vfbkvk0edfb/HEfu9/p+ntXJyn0VZp7RzwuItoe9Ql6L9qD3xfk0e+qWkvs2MoszyhKXV2fsT3PPweT+BJelfBpTw+IS9aMqpP9n0o/nLyK/kZDYfogGloTFdfhsPa+NlNcn4uKz+eZunHQAAAAAAAAAAAAAAAAAAAABUvSzZ+m1R5LDRfnOz+RxdVtAW4+5QgtmqDTtta3Qj2d8nyRMtd9W7sdpHDxrWzX9nXW3ZejXGM5ecvS3I4euetdWBqeitGPZcc44jFJ+kn+JRkuNj5y5cFv8AVlxYrZLcavNpiO5dPpB1/wCqc8FgpJ3LON2JXCrthB859r/D48Ktrjnv4t723vbZ8aLwVt9kaqa5W2y9WuKzb7+5d73Fu6p9G9dSjbjcrreKw6/VQ/af438vE1d8Wmrt9fzKneL5Z2hXWF0ZfOuVsKbJ1QTcrVCThHLj6XA+Y0l+6RjGGHuWSjXGmz0UkkoqL3ZdhRFuKhWvall6q+vYetNqPjb9bbKOrwzjmIid90j1N1lr0bHEqyE7FYoSrjHLfOOayefBZNb+44WnNNX4213XS38IVr1a49kV9eZyZ3OTzf8AwdDQWirsbdGilZye+Un6tcecpd35knClbTkkjnNIxvfQeibsZaqaY5vjKb3Rrj7Un/vMmOtOpOFwujbrc52YmtVyVzk4rac4xaUE8st745vvJxq9oOnA0qmpd87HltWS7X9FyOD0q4jZwGx/5bqoeWc/4ChOqtly1rXqN1ymlrixza3c+ylI0uTUYr0pNRj4t5L5n6WwOHVVVVUd0a64Vpd0YpL8iidTcF12kMHDLNddGx+Fadn8Jfo/ULd1qk0ncTKGdKkF9jrlzjiIfOE0VQ2Wv0nxnZh8PRXCVltmITjCKcpNRhLPcvFHE0RqPVRB4rSdsKqoLadO2lFftz5/sx83wM+FxL9Qp7WjsK/ckvKcl9DvmloXE024emzDx2cPOClVHY6v0H6vo8t2/I3RMbAADgAAAAAAAAAAAAAAAAAFddJmvf2VSweFn+lyWVtq/q8WuC/tGvLj2EmPHbJbjVyZ2jdrdJmvnU7eBwc/vt8cRiIv9UnxhBr8fa+XjwgGquqWI0hJyjlRhIP73Fz3QjlxUfal3cFzaJBqv0Z4jE1SxGJbw+cJSookvTsnlnF2Z+rDPLdxfdz4GNxd9mVd057NfoRo9WFWzuyVayjHLuRrYYrWs0xT3HmVTLk492hdWpeiNH4alrBShck9i3EqUZzsnHipSXjwW5ZkiKe6MtOrDYh4eyWVOJcUm+ELVui/jw8i4TN1OO1Mk7zv+6bDki9d4cDXzE9Vo3GyzyzplWn32ZQX+o/P0WXX0u27OjLF7d1EX8J7X8JTGj8LbfZCmmDstm8owXFv6Lv5F7QREY5mfVDqI3s2tF4G3E2wopjt2zeSXJdrb5JcWy99VNXKtH0KuPp2yyd12WTnL6RXJfVmpqTqnXo6rflZirEuut5fsR7Ir58e5SYq6rU/EnjXx7pMGHh3PkK36XsRm8JT/e2Nfuxj/EWQVT0nS2sbFcoUVrzlJ/VHNFXfNCPXW44ZanRdUnpBN/gotkvHOMfyky4Gyg9HY67C2K6ifV2JNbWSe58U09zRuaQ0npDGVW23XzeFrXpvdXW5P1YbMUlOTeW7f2vJby3qdLOS/LfaFXTauKU47byn+s3SBhMJtRqyxeIWayi/u4v3p/RZ/AqHWDT2M0lZHrZubclGqiPo1xlLclGPbm8s3m+80bJOX8iUdGOhftOkK5tZ1YX7+b5bS3Vr97f/AICSuHHp6zb6x9ViMlsk7Su3RmEVFNNMfVqqhWvCMVH6GyEDF33XgAAAAAAAAAAAAAAAAA5Wm8fbFKnCwVmMsXobWfV0x4dba1wiuS4yayXNrsRvOw4Wvetc8Ns4LBxd+k71lCEUpOmL/G129ie7m9y36epHR7DCtYrGNYnHN7eTe3CqTebeb9eef4n8O1yHVrVmrBbdm1LEYy57WIxs8ustk+OXsx7IrsO6TTl414U/mfX+nnjvO8hU3Sdq91N32yuP3N7+8y/Bb2+EuPjn2lsmvjsHXfXOm2KnXZFxlHu+j7zmDLOK/J4zY/iV2fndItfULXBXxjhcRLLExWVdjf69Lln7f58e0g2tGrluAt2ZZzok31V3KS7H2SX/ANOPFc+fFPsNjJjpqKe0seua+C/vC89aNBV6Qw08NZKVak4yVkcm4yi008nx7Pia2quqWF0bFqpOd0llPETyc5LsWW6Me5fMh+rev9lSjVi1K+tblesusiveX4/Hj4lhaM0xhsSs6boWdsU8pLxi968jKy48uKOE+Pw1cWfHl7jy3gAVlgK+171fxN2JjbTVK2M64xeWXoyi3xz4LJosBvLe9y7SNac12wWFzSn9puW7qq2pZP3p8I/n3E+ntet96RvKvqaUvTa87I5o/UiNUXiNIWRqpgtqValy9+fLwXmQ/W/WBYyUKqYdRgaM1RSko5vg5yXa+XZ4tn1rLrLicfL717FUXnDDxz2I979qXe/hkcCSNbHjvM88k9+n0hn8qVjjjjr19XioNtJJyk2kopZtt7kkubL41D1d/wCn4WMJJfaLH1l74+k1uin2RW7zfMjfRvqY63HHYqOVmWeHpa3wTXryXKXYuXHjwsgo63Ucp4V8L2mxzEcpAAUFoAAAAAAAAAAAAAAAAPiFSTk0knJ5yfNvvPsAAAAAAGtpDA1YiuVV0FZXLjF/mnyfeVdrHqRdhnKylSxGH47lnZWveS4rvXki2gT4dRfFPXj0V8+mpmjvz6vz8oH1GOTTW5rg1ua8GXHpjVXCYpuUq+rtf9LD0ZPxXCXxRFMd0eXRzdN1di7Jp1y81mn8jTx63Fbz0ysmhy08d/8AEaw+sGOrWUMVcl2OW3/qzPSetuknu+1z+Eal+UTZu1P0hH+ruXfGdcvqeH/auPf9Vs/yL6km+Ce/l/CL/Yjr5vy5GO0jiL/119tq9mVknH93gaDRL8PqHpCzjCulds7I/lHM72jejStNPE3yt/s611cfjJ5t/DI5bU4aR5+z3TTZ7z4+6tsHgrb5qqmuVtj4Qis34vsXeyztUNQoYdxvxWzdiFvhUt9dT7fel8ly7SXaN0XRhobFFUao81Fb33t8W+9m4Z+fWWv1XqGng0kU7t3LCMgFJcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z"
          alt="slack -mahfuz"
        />
        <h3 style={{ color: "rgba(0,0,0,.6)" }}>Mah-Slack clone</h3>
        <Button onClick={handleClick}>SignIn with google</Button>

        <p style={{ color: "grey" }}>
          * This clone is only for Educational purpose to learn the build.
        </p>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: lightgrey;
`;
const LoginInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 1px grba(0, 0, 37.6);

  > img {
    width: 200px;
  }

  > button {
    color: rgba(0, 0, 0, 0.6);
    background: rgba(86, 179, 158);
    padding: 10px;
    margin: 30px;
    :hover {
      background: rgba(151, 191, 182);
    }
  }
`;
