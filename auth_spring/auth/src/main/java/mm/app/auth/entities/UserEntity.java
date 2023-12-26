package mm.app.auth.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "app_users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserEntity {

    @Id
    @Column(name = "id")
    private Long id;
    @Column(name = "u_name")
    private String name;
    @Column(name = "login")
    private String login;
    @Column(name = "pswd")
    private String password;
}
