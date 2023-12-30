package mm.app.auth.configuration;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import mm.app.auth.classes.UserDTO;
import mm.app.auth.services.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.Collections;
import java.util.Date;

@RequiredArgsConstructor
@Component
public class UserAuthenticationProvider {

    @Value("${security.jwt.token.secret-key:secret-key}")
    private String secretKey;
    private UserService userService;

    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createSecurityTokenForUser(UserDTO user) {
        Date now = new Date();
        Date to = new Date(now.getTime() + 3600000); // 3600000 miliseconds = 1 hour

        return JWT.create()
                .withSubject(user.getLogin())
                .withIssuedAt(now)
                .withExpiresAt(to)
                .withClaim("name", user.getName())
                .sign(Algorithm.HMAC256(secretKey));
    }

    public Authentication validateSecurityToken( String securityToken) {
        Algorithm alg = Algorithm.HMAC256(secretKey);
        JWTVerifier verifier = JWT.require(alg).build();
        DecodedJWT decodedJWT = verifier.verify(securityToken);

        UserDTO authenticatedUser = UserDTO.builder()
                .name(decodedJWT.getClaim("name").asString())
                .login(decodedJWT.getSubject())
                .build();

        return new UsernamePasswordAuthenticationToken(authenticatedUser, null, Collections.emptyList());
    }

    public Authentication validateTokenStrongly(String token) {
        Algorithm algorithm = Algorithm.HMAC256(secretKey);

        JWTVerifier verifier = JWT.require(algorithm)
                .build();

        DecodedJWT decoded = verifier.verify(token);

        UserDTO user = userService.findByLogin(decoded.getSubject());

        return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
    }

}
