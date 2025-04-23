import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import GoBackBtn from "../components/GoBackBtn";
import { colors } from "../../Color";
import { Image } from "expo-image";

const AdminMoreStats = () => {
    return (
        <View style={styles.container}>
            <GoBackBtn />
            <ScrollView contentContainerStyle={styles.content}>
                {/* Encabezado */}
                <Text style={styles.header}>Más Estadísticas</Text>

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
                            contentFit="cover"
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
                            contentFit="cover"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default AdminMoreStats;

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
        marginBottom: 20,
        color: "#2D336B",
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
        color: "#2D336B",
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#2D336B",
    },
    cardValue: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        color: "#2D336B",
    },
    cardChange: {
        fontSize: 16,
        color: "green",
    },
    chartPlaceholder: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eaeaea",
        borderRadius: 10,
        color: "#2D336B",
    },
    mapContainer: {
        marginBottom: 20,
    },
    mapTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#2D336B",
    },
    mapPlaceholder: {
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eaeaea",
        borderRadius: 10,
    },
});