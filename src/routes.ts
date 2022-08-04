import { Router } from "express";
import { CreateColaboradorController } from "./controller/colaboradorcontroller/CreateColaboradorContoller";
import { DeleteColaboradorController } from "./controller/colaboradorcontroller/DeleteColaboradorController";
import { ListColaboradorController } from "./controller/colaboradorcontroller/ListColaboradorController";
import { UpdateColaboradorController } from "./controller/colaboradorcontroller/UpdateColaboradorContoller";
import { CreateDepartamentoController } from "./controller/departamentocontroler/CreateDepartamentoContoller";
import { DeleteDepartamentoController } from "./controller/departamentocontroler/DeleteDepartamentoController";
import { ListDepartamentoController } from "./controller/departamentocontroler/ListDepartamentoController";
import { UpdateDepartamentoController } from "./controller/departamentocontroler/UpdateDepartamentoContoller";
import { CreateGrupoController } from "./controller/grupocontroller/CreateGrupoContoller";
import { DeleteGrupoController } from "./controller/grupocontroller/DeleteGrupoController";
import { ListGrupoController } from "./controller/grupocontroller/ListGrupoController";
import { UpdateGrupoController } from "./controller/grupocontroller/UpdateGrupoController";
import { UpdateDepartamentoService } from "./services/departamentoservice/UpdateDepartamentoService";




const routes = Router();
// Rotas para Colaborador:
routes
    .route("/colaborador")
    .post( new CreateColaboradorController().create)
    .get(new ListColaboradorController().list);
routes.put("/colaborador/:id",new UpdateColaboradorController().update);
routes.delete("/colaborador/:id", new DeleteColaboradorController().delete);


// Rotas para Departamento:
routes
    .route("/departamentos")
    .post( new CreateDepartamentoController().create)
    .get(new ListDepartamentoController().list);
routes.put("/departamentos/:id", new UpdateDepartamentoController().update)
routes.delete("/departamentos/:id", new DeleteDepartamentoController().delete);

//Rotas para Grupo
routes
    .route("/grupos")
    .post( new CreateGrupoController().create)
    .get(new ListGrupoController().list);
routes.put("/grupos/:id", new UpdateGrupoController().update)
routes.delete("/grupos/:id", new DeleteGrupoController().delete);

export {routes};