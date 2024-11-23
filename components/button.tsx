import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import React from "react";
import { cn } from "@/lib/utils";

export interface IButton {
  handlePress: (event: GestureResponderEvent) => void;
  className?: string;
  textStyles?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<IButton> = ({
  handlePress,
  className,
  textStyles,
  isLoading,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={cn(
        "bg-secondary rounded-xl flex px-8 py-5 justify-center items-center",
        isLoading ? "opacity-50" : "",
        className,
      )}
      disabled={isLoading}
    >
      <Text className={cn("text-primary font-psemibold text-lg", textStyles)}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
