import { ToolbarItemType } from "./CanvasTools/Toolbar/ToolbarIcon";
import { Toolbar as CTToolbar } from "./CanvasTools/Toolbar/Toolbar";
import { TimelineManager as CTTimelineManager } from "./CanvasTools/Timeline/TimelineManager";
import { RegionsManager } from "./CanvasTools/Region/RegionsManager";
import { PointRegion } from "./CanvasTools/Region/Point/PointRegion";
import { RectRegion } from "./CanvasTools/Region/Rect/RectRegion";
import { AreaSelector, SelectionMode } from "./CanvasTools/Selection/AreaSelector";
import { FilterPipeline, InvertFilter, GrayscaleFilter, BlurDiffFilter, ContrastFilter,
         BrightnessFilter, SaturationFilter } from "./CanvasTools/CanvasTools.Filter";
import { Rect } from "./CanvasTools/Core/Rect";
import { Point2D } from "./CanvasTools/Core/Point2D";
import { RegionData } from "./CanvasTools/Core/RegionData";
import { Tag } from "./CanvasTools/Core/Tag";
import { TagsDescriptor } from "./CanvasTools/Core/TagsDescriptor";
import { TimelineData } from "./CanvasTools/Core/TimelineData";
import { TimelineEventData } from "./CanvasTools/Core/TimelineEventData";
import { Editor as CTEditor } from "./CanvasTools/CanvasTools.Editor";

import "snapsvg-cjs";
/* import * as SNAPSVG_TYPE from "snapsvg";
declare var Snap: typeof SNAPSVG_TYPE; */

export class CanvasTools {
    public static Core = {
        Rect,
        Point2D,
        RegionData,
        TagsDescriptor,
        Tag,
        TimelineData,
        TimelineEventData,
    };

    public static Selection = {
        AreaSelector,
        SelectionMode,
    };

    public static Region = {
        RegionsManager,
        PointRegion,
        RectRegion,
    };

    public static Filters = {
        InvertFilter,
        GrayscaleFilter,
        BlurDiffFilter,
        ContrastFilter,
        BrightnessFilter,
        SaturationFilter,
    };

    public static Editor = CTEditor;
    public static Toolbar = CTToolbar;
    public static TimelineManager = CTTimelineManager;
}

/* CSS */
import "./../css/canvastools.css";
