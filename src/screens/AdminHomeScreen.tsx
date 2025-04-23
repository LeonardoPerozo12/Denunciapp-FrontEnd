import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import GoBackBtn from "../components/GoBackBtn";
import { colors } from "../../Color";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const AdminLanding = () => {
    const navigation = useNavigation();
    const handleAdminMoreStats = () => {
        navigation.navigate("StatsScreen");
    };

    return (
        <View style={styles.container}>
            <GoBackBtn/>
            <ScrollView contentContainerStyle={styles.content}>
                {/* Encabezado */}
                <Text style={styles.header}>Bienvenido, ADMIN.</Text>

                {/* Tarjeta de Reportes Pendientes */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Reportes Pendientes:</Text>
                    <Text style={styles.cardValue}>420</Text>
                    <Text style={styles.cardChange}>-0.03% ↗</Text>
                </View>

                {/* Tarjeta de Reportes Completados */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Reportes Completados:</Text>
                    <View style={styles.chartPlaceholder}>
                        <Image
                            source={require("../../assets/ChartsImage.png")}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 10,
                            }}
                            resizeMode="cover"
                        />
                    </View>
                </View>

                {/* Mapa de Zonas */}
                <View style={styles.mapContainer}>
                    <Text style={styles.mapTitle}>Zonas con más reportes</Text>
                    <View style={styles.mapPlaceholder}>
                        <Image
                            source={require("../../assets/MapStats.png")}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 10,
                            }}
                            resizeMode="cover"
                        />
                    </View>
                </View>

                <Button
                    title="Ver más estadísticas"
                    onPress={handleAdminMoreStats}
                    backgroundColor={colors.primary}
                    textColor={colors.secondary}
                    style={styles.statsButton}
                />
            </ScrollView>
        </View>
    );
};

export default AdminLanding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
      padding: 20,
      paddingTop: 80,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.primary,
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        color: colors.primary,
        marginBottom: 10,
    },
    cardValue: {
        fontSize: 32,
        fontWeight: "bold",
        color: colors.primary,
    },
    cardChange: {
        fontSize: 14,
        color: "green",
        marginTop: 5,
    },
    chartPlaceholder: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eaeaea",
        borderRadius: 10,
    },
    mapContainer: {
        marginBottom: 20,
    },
    mapTitle: {
        fontSize: 16,
        color: colors.primary,
        marginBottom: 10,
    },
    mapPlaceholder: {
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eaeaea",
        borderRadius: 10,
    },
    statsButton: {
        backgroundColor: colors.primary,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    statsButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});