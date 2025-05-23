import { Component, ViewEncapsulation } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";
@Component({
  selector: "test-theme-preview",
  templateUrl: "./test.component.html",
  styleUrls: ["./theme-switcher.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ThemePreviewComponent extends TestDefaultComponent {
  constructor() {
    super();
  }
  protected override createCreator(): void {
    this.creator = new SurveyCreatorModel({ expandCollapseButtonVisibility: "never", themeForPreview: "modern" });
    this.creator.tabResponsivenessMode = "menu";
    this.creator["animationEnabled"] = false;
    this.creator.showOneCategoryInPropertyGrid = false;
    this.creator.allowZoom = false;
  }
}