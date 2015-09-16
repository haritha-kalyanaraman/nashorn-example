package hello;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
public class MainController {

    private React react;

    private ObjectMapper mapper;

    public MainController() {
        this.react = new React();
        this.mapper = new ObjectMapper();
    }

    @RequestMapping("/")
    public String index(Map<String, Object> model) throws Exception {
        String serverSideTemplate = react.renderFromServer();
        model.put("content", serverSideTemplate);
        return "index";
    }

}
