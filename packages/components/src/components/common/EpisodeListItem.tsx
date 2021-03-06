import { IEpisodeItem, ITheme } from "@cast-bucket/core/";
import styled from "@emotion/native";
import { useTheme } from "emotion-theming";
import React, { FunctionComponent } from "react";
import { Dimensions, View } from "react-native";
import { MaterialIcons as Icon } from "../../libs/vector-icons";
import { Text } from "./Typography";

const { width } = Dimensions.get("window");

const EpisodeTitle = styled(Text)`
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  padding-right: 20px;
`;

const EpisodeDate = styled(Text)`
  margin-vertical: 5px;
`;

const PlayButtonIcon = styled(Icon)`
  height: 50px;
  justify-content: center;
  margin-right: 10px;
  width: 50px;
`;

const Row = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
`;

interface EpisodeListItemProps {
  item: any;
  index?: number;
  togglePlaying: (arg0: IEpisodeItem) => void;
  isPlaying: boolean;
}

const EpisodeListItem: FunctionComponent<EpisodeListItemProps> = React.memo(
  (props: EpisodeListItemProps) => {
    const theme: ITheme = useTheme();
    const { item, togglePlaying, isPlaying } = props;
    if (!item.url) return;
    const { title, isoDate } = item;

    return (
      <View
        style={{
          paddingLeft: 20,
          paddingVertical: 30,
          borderTopColor: theme.colors.stroke,
          borderTopWidth: 1,
          alignSelf: "stretch"
        }}
      >
        <Row>
          <View style={{ flexDirection: "column", maxWidth: 0.8 * width }}>
            <EpisodeTitle numberOfLines={1} style={{ maxWidth: 0.6 * width }}>
              {title}
            </EpisodeTitle>
            <EpisodeDate>{new Date(isoDate).toDateString()}</EpisodeDate>
          </View>
          <PlayButtonIcon
            style={{
              userSelect: "none"
            }}
            name={isPlaying ? "pause-circle-filled" : "play-circle-filled"}
            size={40}
            color={theme.colors.accent}
            onPress={() => {
              togglePlaying(item);
            }}
          />
        </Row>
      </View>
    );
  }
);

export default EpisodeListItem;
