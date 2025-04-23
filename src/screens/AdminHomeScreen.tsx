import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import GoBackBtn from "../components/GoBackBtn";
import { colors } from "../../Color";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const fetchReportData = async () => {
  try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_BASE_URL}/api/reportes`);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Error fetching data:", error);
      return [];
  }
};

const AdminLanding = () => {
    const [chartData, setChartData] = useState<any>(null);
    const navigation = useNavigation();

    useEffect(() => {
      // Fetch data for the chart
      const loadChartData = async () => {
          const data = await fetchReportData();
          if (data) {
              // Prepare chart data structure (you can adjust based on your API response)
              const categories = data.map((item: any) => item.Categoria.Nombre); // Assuming 'Categoria' has a 'Nombre' field
              const counts = data.map((item: any) => item.count); // Assuming your data has a 'count' field for number of reports

              // Set the chart data
              setChartData({
                  labels: categories,
                  datasets: [
                      {
                          data: counts,
                          color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
                          strokeWidth: 2,
                      },
                  ],
              });
          }
      };

      loadChartData();
  }, []);

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
                    <Text style={styles.cardTitle}>Reportes Completados:</Text>
                    {/* Display the bar chart if the data is available */}
                    {chartData ? (
                        <View style={styles.chartPlaceholder}>
                            <BarChart
                                data={chartData}
                                width={Dimensions.get("window").width - 40} // Adjust width of the chart
                                height={220}
                                yAxisLabel=""
                                chartConfig={{
                                    backgroundColor: "#eaeaea",
                                    backgroundGradientFrom: "#fff",
                                    backgroundGradientTo: "#f1f1f1",
                                    decimalPlaces: 0,
                                    color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                    style: {
                                        borderRadius: 10,
                                    },
                                    propsForDots: {
                                        r: "6",
                                        strokeWidth: "2",
                                        stroke: "#fff",
                                    },
                                }}
                                verticalLabelRotation={30}
                            />
                        </View>
                    ) : (
                        <Text>Cargando gráfico...</Text>
                    )}
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