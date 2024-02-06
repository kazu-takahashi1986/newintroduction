document.addEventListener("DOMContentLoaded", function() {
  attachBlurEvent("artistSearch", "アーティスト名が入力されていません.");
  attachBlurEvent("titleSearch", "タイトルが入力されていません.");

  function attachBlurEvent(fieldId, errorMessage) {
    var searchField = document.getElementById(fieldId);

    if (searchField) {
      searchField.addEventListener("blur", function() {
        var inputValue = searchField.value;
        var errorElement = document.getElementById(fieldId + "-error");

        // エラーメッセージの表示
        if (inputValue === "") {
          if (!errorElement) {
            errorElement = document.createElement("div");
            errorElement.id = fieldId + "-error";
            errorElement.textContent = errorMessage;
            errorElement.style.color = "red"; 
            errorElement.style.fontSize = "15px"; 
            searchField.parentNode.appendChild(errorElement);
          }

          // 入力欄にエラー時のスタイルを直接設定
          searchField.style.border = "2px solid red"; // 赤いハイライト
        } else {
          // エラーメッセージが存在する場合は削除
          if (errorElement) {
            errorElement.remove();
          }

          // エラー時のスタイルを削除
          searchField.style.border = "none";
        }
      });

      // focus イベントの追加
      searchField.addEventListener("focus", function() {
        var errorElement = document.getElementById(fieldId + "-error");
        // エラーメッセージが存在する場合は削除
        if (errorElement) {
          errorElement.remove();
        }
        // エラー時のスタイルを削除
        searchField.style.border = "none";
      });
    }
  }
});
