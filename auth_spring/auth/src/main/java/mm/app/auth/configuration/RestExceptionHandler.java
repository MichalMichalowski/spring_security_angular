package mm.app.auth.configuration;

import mm.app.auth.classes.ErrorDTO;
import mm.app.auth.exceptions.UserValidationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(value = { UserValidationException.class})
    @ResponseBody
    public ResponseEntity<ErrorDTO> handleUserException(UserValidationException e) {
        return ResponseEntity.status(e.getExceptionStatus())
                .body(new ErrorDTO(e.getMessage()));
    }
}
