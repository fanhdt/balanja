export const capitalizeText = (text) => {
  if (!text) return text;
  return text.charAt(0).toUppercase() + text.slice(1);
};

export const getOrderStatusBadge = (status) => {
  switch (status?.toLowerCase()) {
    case "delivered":
      return "badge-success";
    case "shipping":
      return "badge-info";
    case "pending":
      return "badge-warning";
    default:
      return "badge-ghost";
  }
};

export const getStockStatusBadge = (stock) => {
  if (stock === 0) return { text: "Out of Stock", class: "badge-error" };
  if (stock < 20) return { text: "Low Stock", class: "badge-warning" };
  return { text: "In Stock", class: "badge-success" };
};

export const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const formatRupiah = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};
export const formatRupiahInput = (value) => {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  return new Intl.NumberFormat("id-ID").format(Number(value));
};
