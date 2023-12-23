package mm.app.auth.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/data")
public class DataController {

    @GetMapping("important-data")
    public List<String> getUserNames() {
        return Arrays.asList("User1", "User2");
    }
}
