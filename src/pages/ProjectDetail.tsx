import { FC } from "react";
import s from "./pages.module.scss";
import { useParams } from "react-router";
import { useReposStore } from "../store/Store";
import { Link } from "react-router-dom";
import repoImages from "../store/ReposImg";
import { useTranslation } from "react-i18next";

const ProjectDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { repos } = useReposStore();
  const repo = repos.find((repo) => repo.id === Number(id));

  const imgId = repoImages[id];

  if (!repo) {
    return <div className={s.repo__error}>Repository not found</div>;
  }

  const { t } = useTranslation();

  return (
    <>
      <div className={s.projects__id}>
        <div className={s.container}>
          <div className={s.projects__id_item}>
            <p>
              <span>
                <h5>{t("Title")}:</h5> {repo.name}
              </span>
              <Link to="/projects">{t("Get Back")}</Link>
            </p>
            {imgId ? (
              <img src={imgId} alt={repo.name} />
            ) : (
              <p className={s.repo__error}>No image available</p>
            )}
            <article>
              <p>
                {t("Was created")}: <span> {repo.created_at}</span>
              </p>
              <p>
                {t("Language")}: <span> {repo.language || "Undetected"}</span>
              </p>
              <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                Visit repository
              </a>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
