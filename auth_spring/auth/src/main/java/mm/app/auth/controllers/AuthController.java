package mm.app.auth.controllers;

import lombok.RequiredArgsConstructor;
import mm.app.auth.classes.SignUpDTO;
import mm.app.auth.classes.UserCredentialsDTO;
import mm.app.auth.classes.UserDTO;
import mm.app.auth.configuration.UserAuthenticationProvider;
import mm.app.auth.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final UserAuthenticationProvider userAuthenticationProvider;

    @PostMapping("login")
    public ResponseEntity<UserDTO> loginToApp(@RequestBody UserCredentialsDTO credentials) {
        UserDTO user = userService.login(credentials);
        user.setToken(userAuthenticationProvider.createSecurityTokenForUser(user));
        return ResponseEntity.ok(user);
    }

    @PostMapping("signup")
    public ResponseEntity<UserDTO> signUp(@RequestBody SignUpDTO signUpData) {
        UserDTO createdUser = userService.registerNewUser(signUpData);
        return ResponseEntity.created(URI.create("user/" + createdUser.getId())).body(createdUser);
    }
}
