package mm.app.auth.controllers;

import lombok.RequiredArgsConstructor;
import mm.app.auth.classes.UserCredentialsDTO;
import mm.app.auth.classes.UserDTO;
import mm.app.auth.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("login")
    public ResponseEntity<UserDTO> loginToApp(@RequestBody UserCredentialsDTO credentials) {
        UserDTO user = userService.login(credentials);
        return ResponseEntity.ok(user);
    }
}
