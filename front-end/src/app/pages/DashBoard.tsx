import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams,useRouter } from 'expo-router';

import {dashBoardStyle} from '../../../styles/dashBoardStyle'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function Dashboard(){
    const router = useRouter();
    const {name} = useLocalSearchParams();

    return (
        <ThemedView style={dashBoardStyle.container}>
      <SafeAreaView style={dashBoardStyle.safeArea}>
        <ThemedView style={dashBoardStyle.header}>
          <ThemedText style={dashBoardStyle.greeting}>Welcome back,</ThemedText>
          <ThemedText type="title" style={dashBoardStyle.ownerName}>
            {name || 'Owner'}!
          </ThemedText>
          <ThemedText style={dashBoardStyle.subtitle}>
            Manage your rooms and occupants from here.
          </ThemedText>
        </ThemedView>

        {/* Dashboard quick action placeholder */}
        <ThemedView type="backgroundElement" style={dashBoardStyle.cardContainer}>
          <ThemedText style={dashBoardStyle.cardTitle}>Property Overview</ThemedText>
          <ThemedText style={dashBoardStyle.cardText}>
            No rooms added yet. Start by setting up your first room.
          </ThemedText>
        </ThemedView>

        <Pressable 
          style={dashBoardStyle.logoutButton}
          onPress={() => router.replace('/')}
        >
          <ThemedText style={dashBoardStyle.logoutText}>Log Out</ThemedText>
        </Pressable>
      </SafeAreaView>
    </ThemedView>
  );
}

