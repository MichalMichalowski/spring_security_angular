package mm.app.auth.exceptions;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class UserValidationException extends RuntimeException {

    private final HttpStatus exceptionStatus;

    public UserValidationException(String message, HttpStatus exceptionStatus) {
        super(message);
        this.exceptionStatus = exceptionStatus
    }
}
