;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-github" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-close" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M836.8 203.2 803.2 169.6 512 460.8 220.8 169.6 187.2 203.2 478.4 496 187.2 787.2 220.8 820.8 512 529.6 803.2 820.8 836.8 787.2 545.6 496Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-category" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M884.66432 206.37696 190.53568 206.37696C175.79008 206.37696 163.84 194.56 163.84 179.98848 163.84 165.41696 175.79008 153.6 190.53568 153.6l694.12864 0C899.40992 153.6 911.36 165.41696 911.36 179.98848 911.36 194.56 899.40992 206.37696 884.66432 206.37696zM190.53568 364.6976l480.55296 0c14.7456 0 26.69568 11.81696 26.69568 26.38848 0 14.57152-11.95008 26.39872-26.69568 26.39872L190.53568 417.4848c-14.7456 0-26.69568-11.81696-26.69568-26.39872C163.84 376.51456 175.79008 364.6976 190.53568 364.6976zM190.53568 575.80544l694.12864 0c14.7456 0 26.69568 11.80672 26.69568 26.38848 0 14.57152-11.95008 26.37824-26.69568 26.37824L190.53568 628.57216c-14.7456 0-26.69568-11.80672-26.69568-26.37824C163.84 587.61216 175.79008 575.80544 190.53568 575.80544zM190.53568 786.90304l400.45568 0c14.7456 0 26.69568 11.80672 26.69568 26.37824 0 14.58176-11.95008 26.38848-26.69568 26.38848L190.53568 839.66976C175.79008 839.68 163.84 827.87328 163.84 813.28128 163.84 798.72 175.79008 786.90304 190.53568 786.90304z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-star" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M955.31313 409.694963c-6.508227-20.00052-23.669072-34.652218-44.412512-37.947264l-236.334613-37.315884L561.46304 95.584985c-9.256828-19.520589-28.9084-31.987528-50.523697-31.987528-21.61632 0-41.266869 12.466939-50.525744 31.987528L347.310635 334.430792l-236.334613 37.315884c-20.74344 3.295046-37.904285 17.946744-44.409442 37.947264-1.834788 5.676279-2.750647 11.506055-2.750647 17.292851 0 14.586207 5.719258 28.865421 16.373922 39.519062l174.457334 174.500313-50.001811 250.177899c-4.278443 21.376866 4.235464 43.275619 21.834284 56.116065 9.781784 7.139607 21.354354 10.763135 32.971949 10.763135 9.30083 0 18.644639-2.335185 27.116591-7.030114l224.37114-124.673487 224.370117 124.673487c8.470929 4.694929 17.815761 7.030114 27.118638 7.030114 11.615549 0 23.187095-3.623527 32.969902-10.763135 17.597797-12.840446 26.112728-34.739199 21.833261-56.116065l-49.999764-250.177899 174.455287-174.500313c10.656711-10.654664 16.376992-24.932856 16.376992-39.519062C958.062753 421.199994 957.143824 415.370219 955.31313 409.694963z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-paint" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.354 752.304c-0.462-0.318-1.064-0.898-2.02-1.442-1.86-1.176-4.96-2.532-9.192-3.084-4.23-0.598-9.454-0.176-15.386 1.086-5.904 1.286-12.546 3.46-19.844 6.17-7.304 2.632-15.342 6.134-24.178 8.278-2.19 0.464-4.448 0.838-6.52 0.766-0.992-0.046-2.066-0.222-2.732-0.484-0.266-0.152-0.458-0.04-1.086-0.546l-0.406-0.272c0 0-0.082-0.046-0.152-0.104-0.018-0.064-0.084-0.07-0.112-0.166-0.536-0.728-0.698-3.334-0.368-5.67 0.32-2.452 0.882-5.034 1.59-7.648 2.868-10.526 7.382-21.724 12.138-33.652 4.784-11.93 10.086-24.572 15.244-38.224 2.562-6.84 5.102-13.926 7.224-21.51 1.064-3.788 2.008-7.704 2.606-11.934 0.27-2.122 0.452-4.342 0.346-6.758-0.036-1.206-0.196-2.48-0.514-3.85-0.402-1.442-0.72-2.67-2-4.504-4.34-5.366-10.166-6.064-14.908-6.254-4.828 0.012-9.238 0.846-13.51 1.83-8.544 2.054-16.662 4.9-24.896 7.382-8.138 2.456-16.598 4.822-24.344 4.924-3.762 0.026-7.348-0.808-9.37-2.348l-0.07-0.06c0.012-0.098 0.008-0.208 0.024-0.328 0.15-1.312 0.752-3.248 1.452-5.128 3.162-7.82 8.074-16.056 13.124-24.14 5.118-8.122 10.624-16.278 16.316-24.54 22.772-33.056 48.574-67.414 73.596-105.606 6.212-9.574 12.352-19.434 18.186-29.782 5.742-10.438 11.448-21.074 15.458-33.678 0.958-3.194 1.836-6.506 2.278-10.268 0.4-3.726 0.646-7.894-0.93-12.844l-0.722-1.856c-0.21-0.56-0.542-1.248-1.052-2.076-0.472-0.746-0.986-1.502-1.518-2.192-0.688-0.904-0.67-0.782-1.008-1.162l-0.784-0.818c-2.096-1.876-2.082-1.638-3.284-2.4-1.882-0.966-3.808-1.452-5.462-1.624-3.368-0.314-5.838 0.226-7.942 0.788-2.14 0.59-3.944 1.322-5.642 2.082-6.674 3.106-12.004 6.794-17.254 10.598-5.23 3.81-10.17 7.802-15.05 11.894-19.362 16.418-37.624 34.22-56.01 52.564-18.338 18.374-36.664 37.356-55.104 56.844-36.826 38.97-74.262 79.738-113.038 121.258-19.4 20.738-39.106 41.698-59.374 62.456-10.126 10.392-20.402 20.732-30.888 30.796-5.924 5.656-11.968 11.296-18.068 16.66 4.664-7.584 9.708-15.194 14.848-22.746 17.018-24.762 35.338-49.348 53.962-74.024 37.348-49.342 76.278-98.956 115.202-149.712 19.476-25.372 38.87-51.09 57.948-77.41 9.542-13.164 18.986-26.482 28.176-40.182 4.594-6.862 9.124-13.804 13.524-20.962 4.404-7.192 8.702-14.472 12.648-22.638 1.954-4.176 3.892-8.33 5.446-13.936 0.392-1.43 0.752-2.95 1.014-4.778 0.258-1.784 0.426-3.968 0.178-6.73-0.216-1.548-0.43-3.012-1.15-4.986 0.172-0.814-3.632-6.602-3.87-6.42 0.614 0.41-4.294-4.044-5.524-4.136-2.188-1.044-4.388-1.606-6.184-1.804-3.628-0.388-6.248 0.074-8.222 0.54-1.066 0.24-2.004 0.514-2.8 0.79-0.888 0.27-1.66 0.576-2.358 0.876-2.93 1.184-5.3 2.444-7.442 3.704-4.304 2.542-7.962 5.158-11.534 7.814-14.03 10.658-26.196 21.93-38.36 33.372-24.128 22.932-47.138 46.64-70.042 70.522-45.736 47.776-90.566 96.496-135.682 144.76-22.6 24.102-45.26 48.094-68.318 71.39-9.712 9.76-19.488 19.394-29.408 28.604 0.566-0.926 1.124-1.856 1.712-2.81 8.51-13.604 17.608-27.094 26.838-40.472 18.52-26.768 37.676-53.212 56.786-79.528 19.154-26.328 38.208-52.62 57.014-79.002 18.734-26.468 37.352-52.756 54.506-80.662 4.262-7.036 8.418-14.16 12.284-21.938 1.916-3.932 3.788-7.938 5.418-12.88 0.79-2.582 1.62-5.142 1.896-9.416 0.074-2.048 0.164-4.838-1.336-8.812-0.258-1.668-4.29-6.678-3.616-5.642-2.768-2.672-3.644-2.896-5.678-3.954-3.544-1.554-6.562-1.726-8.892-1.68-2.374 0.07-4.228 0.422-5.854 0.814-3.26 0.808-5.748 1.838-8.058 2.872-4.562 2.096-8.36 4.366-12.046 6.686-7.276 4.658-13.858 9.556-20.306 14.554-25.49 20.044-48.612 41.272-71.59 62.358-22.884 21.13-45.236 42.3-67.444 63.028-8.026 7.478-16.048 14.852-24.064 22.088 7.156-11.616 14.49-23.144 21.838-34.576 15.748-24.492 31.522-48.662 46.828-72.758 15.258-24.126 30.206-48.01 43.752-72.694 3.384-6.194 6.652-12.438 9.726-18.894 3.046-6.492 5.978-13.018 8.244-20.602 0.552-1.932 1.072-3.938 1.454-6.182 0.366-2.28 0.708-4.688 0.38-8.048-0.186-1.654-0.586-3.694-1.66-5.944-0.368-0.886-1.6-2.79-2.774-3.972 0.544 0.436-1.474-1.448-2.916-2.27-1.284-0.808-2.622-1.41-3.76-1.652-1.11-0.29-2.616-0.65-3.438-0.612-0.952-0.036-1.906-0.028-2.852 0.014-0.864 0.074-1.522 0.214-2.286 0.336-5.678 1.188-9.018 3.128-12.502 4.97-3.402 1.886-6.42 3.87-9.368 5.902-11.63 8.152-21.858 16.876-31.94 25.652-10.016 8.784-19.666 17.66-29.148 26.534-18.938 17.734-37.142 35.394-55.014 52.604-17.866 17.202-35.34 34.014-52.766 49.886-8.704 7.912-17.436 15.6-26.206 22.666-4.39 3.51-8.838 6.864-13.19 9.604-1.036 0.672-2.082 1.288-3.096 1.834 0.404-2.14 1.05-4.496 1.808-6.828 1.608-4.888 3.628-9.836 5.794-14.732 4.366-9.802 9.236-19.392 14.174-28.792 9.904-18.804 20.146-36.89 30.01-54.482 9.854-17.61 19.46-34.642 28.084-51.648 4.282-8.552 8.398-16.934 11.522-26.176 0.756-2.372 1.464-4.758 1.86-7.6 0.146-1.508 0.356-2.948-0.038-5.138-0.102-0.518-0.132-0.95-0.578-1.986-0.284-0.756-1.06-1.998-1.222-2.146-0.512-0.528 0.38 0.274-1.282-1.334-0.478-0.356-0.988-0.702-1.504-1.018-4.222-2.028-7.324-1.448-9.964-1.146-2.668 0.434-5.002 1.124-7.256 1.894-8.88 3.15-16.502 7.252-23.968 11.282-7.43 4.074-14.52 8.254-21.414 12.36-13.768 8.216-26.716 16.228-39.25 23.138-6.25 3.414-12.45 6.682-18.42 8.798-1.472 0.508-2.94 0.912-4.214 1.13-0.654 0.108-1.2 0.114-1.604 0.096-0.11 0.002-0.152-0.032-0.23-0.026-0.092-0.006-0.158-0.012 0.01 0.032 0.052-0.004 0.264 0.198 0.128 0.132l-0.248-0.162c-0.034-0.03-0.168-0.142-0.122-0.126l-0.198-0.192c-0.15-0.078-0.256-0.408-0.4-0.578-0.302-0.352-0.502-1.01-0.786-1.526-0.448-1.216-0.79-2.586-1.048-4.026-1.016-5.796-0.992-12.032-0.9-17.95 0.116-5.944 0.406-11.742 0.678-17.362 0.5-11.242 1.124-21.696 0.034-31.594-0.34-2.48-0.768-4.928-1.63-7.37l-0.792-1.832c-0.354-0.66-0.83-1.36-1.28-1.992-0.254-0.226-0.436-0.38-0.628-0.59l-0.286-0.3c-0.184-0.18 0.024-0.016-0.496-0.478l-1.258-1.038c-3.344-2.728-6.508-5.314-9.496-7.764-23.928-19.598-36.692-30.038-36.692-30.038l-2.004 2.372c0 0 12.448 10.83 35.778 31.136 2.912 2.542 6 5.22 9.248 8.058l1.158 1.014c0.058 0.06 0.15 0.15 0.144 0.156l0.28 0.308c0.172 0.194 0.4 0.422 0.526 0.6 0.112 0.322 0.26 0.544 0.438 0.874l0.512 1.282c0.6 1.874 0.924 4.018 1.172 6.252 0.724 9.098-0.162 19.462-1 30.624-0.444 5.596-0.912 11.434-1.21 17.524-0.256 6.126-0.534 12.448 0.424 19.394 0.276 1.732 0.662 3.532 1.314 5.388 0.412 0.96 0.686 1.886 1.35 2.89 0.34 0.478 0.522 0.956 0.994 1.45l0.658 0.698c0.368 0.358 0.098 0.226 1.002 0.942l0.516 0.34c0.22 0.138 0.846 0.462 1.28 0.614 0.546 0.22 0.888 0.282 1.2 0.354 0.342 0.05 0.702 0.148 1.02 0.154 1.244 0.116 2.392 0.078 3.394-0.06 2.064-0.272 3.888-0.77 5.666-1.33 6.988-2.3 13.362-5.504 19.91-8.86 12.988-6.766 26.162-14.478 40.068-22.304 6.944-3.908 14.058-7.864 21.39-11.65 7.316-3.738 14.946-7.524 22.588-10.002 1.886-0.602 3.788-1.094 5.472-1.314 0.73-0.126 1.408-0.118 1.962-0.094-0.018 0.176-0.042 0.348-0.072 0.526-0.25 1.588-0.85 3.55-1.526 5.486-2.888 7.896-7.102 16.098-11.416 24.288-8.752 16.432-18.684 33.21-28.87 50.576-10.218 17.388-20.866 35.3-31.32 54.202-5.22 9.45-10.396 19.132-15.212 29.368-2.4 5.144-4.69 10.414-6.696 16.07-0.986 2.872-1.9 5.816-2.562 9.142-0.326 1.692-0.612 3.438-0.666 5.504-0.068 1.956 0.078 4.466 1.24 7.436 0.378 0.788 0.782 1.572 1.262 2.312 0.58 0.79 1.268 1.538 1.976 2.232 2.956 2.122 1.344 0.894 2.246 1.5 0.174 0.148 2.242 0.98 3.418 1.134 4.706 0.532 6.126-0.356 8.276-0.902 3.776-1.308 6.528-2.892 9.266-4.514 5.4-3.258 10.21-6.784 14.962-10.41 9.442-7.266 18.472-15.01 27.47-22.916 17.968-15.832 35.774-32.438 53.946-49.38 18.154-16.934 36.6-34.256 55.638-51.512 9.53-8.618 19.196-17.218 29.088-25.626 9.89-8.338 20.042-16.672 30.454-23.694 2.24-1.49 4.506-2.896 6.698-4.116-1.704 4.916-4.08 10.186-6.644 15.382-2.896 5.888-6.076 11.798-9.384 17.708-13.326 23.612-28.412 47.15-43.832 70.9-15.466 23.746-31.488 47.67-47.588 72.082-8.056 12.212-16.126 24.556-24.086 37.196-3.982 6.336-7.922 12.722-11.754 19.364-1.924 3.316-3.822 6.7-5.672 10.27-0.934 1.788-1.838 3.626-2.744 5.594-0.886 1.974-1.768 4.01-2.618 6.708-0.4 1.412-0.858 2.836-1.102 5.41-0.024 1.478-0.258 2.804 0.566 5.86-0.946 1.958 6.732 9.364 7.09 8.658 6.966 2.668 6.902 1.21 9.336 1.324 1.538-0.272 2.658-0.634 3.59-0.974 1.852-0.69 3.022-1.308 4.236-1.95 4.472-2.472 7.65-4.846 10.93-7.282 6.416-4.832 12.304-9.776 18.148-14.768 11.66-10.008 22.952-20.246 34.262-30.548 22.404-20.634 45.036-41.45 67.838-62.444 22.866-20.712 46.058-41.642 70.256-60.38 4.096-3.134 8.228-6.168 12.356-9.014-2.22 3.952-4.582 7.928-7.03 11.892-16.472 26.386-35.172 52.474-53.924 78.552-19.036 26.044-38.158 52.206-57.358 78.472-19.218 26.346-38.514 52.854-57.372 79.994-9.422 13.59-18.74 27.312-27.702 41.566-4.478 7.152-8.872 14.4-13.038 22.104-2.08 3.842-4.104 7.816-6.026 12.152-0.96 2.188-1.882 4.43-2.728 6.94-0.85 2.554-1.702 5.24-2.172 9.148-0.226 1.872-0.388 4.336 0.228 7.612 0.306 1.612 0.908 3.668 2.046 5.756 1.564 2.422 2.092 3.756 6.11 6.608-1.526-0.606 5.472 2.976 7.502 2.7 2.478 0.318 4.06 0.132 5.708-0.072 2.75-0.46 4.846-1.196 6.382-1.852 6.282-2.728 9.838-5.434 13.728-8.168 7.422-5.47 13.854-11.058 20.23-16.752 12.648-11.404 24.556-23.098 36.344-34.904 23.522-23.648 46.356-47.732 69.084-71.858 45.474-48.248 90.19-97.004 135.464-144.644 22.668-23.744 45.448-47.324 68.816-69.652 7.74-7.336 15.596-14.598 23.508-21.358-0.458 0.8-0.934 1.574-1.412 2.368-4.088 6.702-8.42 13.356-12.826 19.994-8.852 13.256-18.11 26.37-27.478 39.368-18.74 26.006-38.028 51.598-57.19 77.066-38.392 50.894-76.978 100.822-114.148 150.734-18.572 24.998-36.846 49.886-54.15 75.496-8.614 12.916-17.048 25.72-24.58 40.124-1.866 3.688-3.68 7.384-5.318 11.826-0.788 2.212-1.582 4.586-2.154 7.736-0.26 1.53-0.482 3.454-0.39 5.76 0.212 2.518 0.626 5.862 3.342 9.774 0.564 1.362 4.974 4.618 4.546 4.186 0.788 0.784 5.99 2.646 6.788 2.41 1.914 0.26 3.12 0.152 4.548 0.052 1.184-0.152 2.264-0.354 3.238-0.612 3.646-0.998 6.02-2.218 8.19-3.384 4.258-2.376 7.654-4.82 10.934-7.302 12.806-9.93 23.552-20.362 34.32-30.872 10.676-10.516 20.978-21.132 31.098-31.77 20.226-21.276 39.746-42.57 58.946-63.61 38.336-42.12 75.226-83.324 111.422-122.598 18.088-19.652 35.912-38.878 53.744-57.378 17.846-18.43 35.612-36.338 53.832-52.342 4.566-3.962 9.168-7.808 13.8-11.32 4.612-3.49 9.404-6.782 13.714-8.862 0.906-0.434 1.754-0.772 2.484-0.996 0.166 0.968 0.216 2.484 0.03 4.126-0.194 2.174-0.776 4.668-1.494 7.154-2.992 10.12-8.124 20.474-13.416 30.392-5.38 9.952-11.196 19.668-17.108 29.17-23.746 38.058-48.748 72.974-70.976 106.834-5.568 8.486-10.968 16.898-16.06 25.402-5.048 8.566-9.95 16.942-13.672 26.676-0.844 2.548-1.708 5.104-2.028 8.454-0.068 1.742-0.204 3.652 0.802 6.264 0.282 0.632 0.482 1.234 0.932 1.864 0.45 0.632 0.984 1.25 1.524 1.802 1.372 1.23 0.78 0.624 1.284 1.036l0.706 0.5 0.726 0.504 1.16 0.656c0.782 0.408 1.616 0.884 2.354 1.172 1.414 0.51 2.858 1.046 4.278 1.31 2.852 0.67 5.584 0.77 8.214 0.748 10.45-0.422 19.232-3.426 27.66-6.14 8.376-2.794 16.332-5.814 24.01-7.866 3.808-1.018 7.574-1.758 10.952-1.856 1.604 0.046 3.224 0.084 4.392 0.506 0.634 0.188 1.146 0.416 1.632 0.708l0.33 0.22c-0.024-0.056 0.564 0.44 0.026-0.086 0.34 0.322 0.852 0.852 0.566 0.608 0.07 0.144 0.29 0.592 0.358 0.938 0.146 0.58 0.274 1.25 0.328 2.026 0.108 1.506 0.02 3.242-0.152 4.98-0.378 3.53-1.144 7.15-2.04 10.71-1.794 7.152-4.076 14.144-6.402 20.92-9.376 27.198-19.888 50.882-25.49 73.27-0.638 2.83-1.186 5.652-1.472 8.588-0.102 1.484-0.186 2.96-0.034 4.586 0.186 1.584 0.486 3.358 1.732 5.19 0.304 0.448 0.768 0.864 1.166 1.26 0.666 0.49 0.42 0.282 0.664 0.464l0.418 0.258c0.386 0.324 1.45 0.78 2.336 1.11 1.728 0.596 3.178 0.694 4.656 0.718 2.918-0.02 5.49-0.568 7.936-1.164 9.594-2.69 17.384-6.448 24.568-9.28 7.13-2.924 13.488-5.242 19.064-6.636 5.578-1.368 10.376-1.898 14.09-1.496 7.55 0.798 10.202 4.188 10.27 3.922l2.004-2.372C863.012 752.8 862.798 752.642 862.354 752.304zM252.288 432.696c-0.012 0.014-0.012 0.014-0.012 0.014C252.206 432.722 252.286 432.67 252.288 432.696zM729.2 633.732c0.014 0.012 0.014 0.012 0.028 0.024C729.026 633.61 728.314 633.092 729.2 633.732z"  ></path>' +
    '' +
    '<path d="M809.004 634.806 809.004 634.806C808.988 634.768 808.974 634.756 809.004 634.806z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M504 924.864c-67.648 0-135.232 0.64-202.816-0.192-98.944-1.152-167.104-64-169.344-157.824-1.728-75.2-0.064-150.528-0.576-225.664C131.072 514.88 133.568 482.496 90.24 515.776 81.024 522.88 70.08 523.648 62.08 513.984 54.4 504.704 57.92 494.848 64.896 486.464c5.44-6.592 11.712-12.544 17.984-18.496 118.144-111.168 236.032-222.656 354.752-333.312 50.816-47.36 91.776-47.616 142.464-1.024 120.896 110.976 241.024 222.592 360.96 334.464 12.992 12.096 36.224 27.52 19.392 45.44-18.688 19.968-33.536-3.136-47.552-14.592-9.152-7.488-16.896-20.928-30.464-16.448-17.856 5.824-10.88 22.72-11.008 35.072-0.96 85.248 0.256 170.56-1.664 255.808-2.304 99.712-57.984 150.656-162.88 151.424C639.168 925.184 571.584 924.8 504 924.864zM827.648 613.44c0.128 0 0.256 0 0.32 0 0-50.112-2.816-100.416 1.088-150.272 2.368-30.208-7.936-50.624-29.568-70.592-79.936-73.792-158.72-148.608-238.528-222.528C518.336 130.56 502.4 130.368 459.008 171.008 373.504 251.264 289.28 332.8 203.712 413.056c-20.352 19.072-29.76 39.808-29.44 66.816 0.896 91.84-0.704 183.744 0.576 275.712 1.088 87.168 52.608 131.264 144.576 130.048 31.872-0.384 44.864-10.176 44.352-40.896-1.024-65.088-1.536-130.368 1.792-195.392 3.904-76.48 67.136-129.664 148.032-128.704 80.128 0.896 141.568 56.896 143.744 132.864 1.472 53.504-1.152 107.008 1.088 160.448 0.896 23.04-14.784 55.872 18.304 66.624 31.36 10.24 66.56 9.408 97.6-9.024 36.48-21.632 52.8-53.312 53.184-92.736C828.032 723.84 827.648 668.608 827.648 613.44zM616.256 751.744c0-26.688 0.96-53.376-0.192-80.064C613.184 603.264 574.336 562.176 512.768 561.152c-58.496-0.96-101.248 38.016-106.56 103.296-4.032 49.728-2.368 99.968-2.432 150.016-0.128 69.184 0.192 69.184 73.28 69.312C617.024 883.968 617.024 883.968 616.256 751.744z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-category1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M136.694777 377.090381c73.759911 0 133.603881 59.842946 133.603881 133.602857 0 73.830519-59.842946 133.603881-133.603881 133.603881-73.760934 0-133.603881-59.773362-133.603881-133.603881C3.090896 436.933327 62.933843 377.090381 136.694777 377.090381z"  ></path>' +
    '' +
    '<path d="M510.715239 377.090381c73.79368 0 133.603881 59.842946 133.603881 133.602857 0 73.830519-59.809177 133.603881-133.603881 133.603881-73.760934 0-133.569088-59.773362-133.569088-133.603881C377.146151 436.933327 436.954305 377.090381 510.715239 377.090381z"  ></path>' +
    '' +
    '<path d="M884.76947 377.090381c73.795726 0 133.569088 59.842946 133.569088 133.602857 0 73.830519-59.773362 133.603881-133.569088 133.603881-73.79368 0-133.567042-59.773362-133.567042-133.603881C751.202429 436.933327 810.97579 377.090381 884.76947 377.090381z"  ></path>' +
    '' +
    '<path d="M136.694777 751.181451c73.759911 0 133.603881 59.773362 133.603881 133.533272 0 73.829496-59.842946 133.603881-133.603881 133.603881-73.760934 0-133.603881-59.773362-133.603881-133.603881C3.090896 810.954813 62.933843 751.181451 136.694777 751.181451z"  ></path>' +
    '' +
    '<path d="M510.715239 751.181451c73.79368 0 133.603881 59.773362 133.603881 133.533272 0 73.829496-59.809177 133.603881-133.603881 133.603881-73.760934 0-133.569088-59.773362-133.569088-133.603881C377.146151 810.954813 436.954305 751.181451 510.715239 751.181451z"  ></path>' +
    '' +
    '<path d="M884.76947 751.181451c73.795726 0 133.569088 59.773362 133.569088 133.533272 0 73.829496-59.773362 133.603881-133.569088 133.603881-73.79368 0-133.567042-59.773362-133.567042-133.603881C751.202429 810.954813 810.97579 751.181451 884.76947 751.181451z"  ></path>' +
    '' +
    '<path d="M136.694777 3.069919c73.759911 0 133.603881 59.842946 133.603881 133.603881 0 73.759911-59.842946 133.603881-133.603881 133.603881-73.760934 0-133.603881-59.842946-133.603881-133.603881C3.090896 62.912865 62.933843 3.069919 136.694777 3.069919z"  ></path>' +
    '' +
    '<path d="M510.715239 3.069919c73.79368 0 133.603881 59.842946 133.603881 133.603881 0 73.759911-59.809177 133.603881-133.603881 133.603881-73.760934 0-133.569088-59.842946-133.569088-133.603881C377.146151 62.912865 436.954305 3.069919 510.715239 3.069919z"  ></path>' +
    '' +
    '<path d="M884.76947 3.069919c73.795726 0 133.569088 59.842946 133.569088 133.603881 0 73.759911-59.773362 133.603881-133.569088 133.603881-73.79368 0-133.567042-59.842946-133.567042-133.603881C751.202429 62.912865 810.97579 3.069919 884.76947 3.069919z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-down" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M856.96 307.48288 525.12 753.60256 193.28 307.48288Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-error" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0c-281.6 0-512 230.4-512 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM761.6 716.8l-44.8 44.8-198.4-198.4-198.4 198.4-44.8-44.8 198.4-198.4-211.2-211.2 44.8-44.8 211.2 211.2 211.2-211.2 44.8 44.8-211.2 211.2L761.6 716.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-warn" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M951.996594 332.23887l-62.131059 33.93795c-7.331989 4.003174-16.856923 1.488911-21.170159-5.649674l-5.254677-8.606005c-4.356214-7.137561-1.928932-16.200984 5.430686-20.208251l62.108546-33.933857c7.358595-4.028757 16.838503-1.487887 21.171182 5.649674l5.27719 8.601912C961.762005 319.16818 959.355189 328.190671 951.996594 332.23887zM740.139465 208.915124c-4.180206 7.028067-13.464663 9.457396-20.707624 5.364171l-8.738012-4.881171c-7.268544-4.073782-9.765411-13.069667-5.559623-20.098757l35.379789-59.483766c4.179183-7.048533 13.441127-9.43693 20.708648-5.384637l8.756431 4.903683c7.250124 4.072759 9.765411 13.07069 5.564739 20.098757L740.139465 208.915124zM515.320117 160.358221l-10.003841 0c-8.317433 0-15.037485-6.721075-15.037485-14.975063L490.278791 75.435063c0-8.274454 6.720052-14.975063 15.037485-14.975063l10.003841 0c8.321526 0 15.086603 6.700609 15.086603 14.975063l0 69.948095C530.40672 153.614633 523.641643 160.358221 515.320117 160.358221zM311.715953 212.004485l-8.688893 4.993734c-7.205099 4.15667-16.398482 1.683339-20.559245-5.499248l-35.095309-60.554144c-4.180206-7.181563-1.683339-16.353456 5.495154-20.469194l8.715499-5.013177c7.204076-4.13825 16.375969-1.663896 20.555152 5.495154l35.095309 60.57768C321.393359 198.716854 318.920028 207.866235 311.715953 212.004485zM154.898371 365.93225c-4.314259 7.268544-13.749142 9.831926-21.039175 5.738701L72.186578 337.100598c-7.291057-4.070712-9.699919-13.287631-5.408173-20.559245l5.233188-8.801457c4.310166-7.245008 13.749142-9.827833 21.016663-5.734608l61.653175 34.570353c7.308453 4.093225 9.741875 13.310144 5.405103 20.556175L154.898371 365.93225zM199.31907 869.797989c-22.178115 0-40.129976-17.904789-40.129976-39.974433L159.189094 555.046399c0-190.402491 154.959258-344.728322 346.127182-344.728322l10.003841 0c191.148481 0 346.130252 154.344251 346.130252 344.728322L861.450369 829.822532c0 22.069645-17.97335 39.974433-40.129976 39.974433L199.31907 869.796966zM229.398132 619.97927c-11.097756 0-20.075221 8.931416-20.075221 19.98824s8.976442 20.031219 20.075221 20.031219c11.08036 0 20.076244-8.974395 20.076244-20.031219S240.497934 619.97927 229.398132 619.97927zM249.474376 714.88478c0-8.252964-6.720052-14.97404-15.041578-14.97404l-10.045797 0c-8.319479 0-15.041578 6.720052-15.041578 14.97404l0 89.959871c0 8.253988 6.743588 14.995529 15.041578 14.995529l10.027377 0c8.316409 0 15.038508-6.741541 15.038508-14.995529L249.452887 714.88478 249.474376 714.88478zM791.240307 570.042951c0-160.037926-130.286322-289.777803-290.958698-289.777803l0 0 0 0c-11.098779 0-20.075221 8.953929-20.075221 19.989263 0 11.035334 8.976442 19.990287 20.075221 19.990287l0 0 0 0c138.538263 0 250.825652 111.849414 250.825652 249.819742 0 11.032264 8.953929 19.986193 20.057825 19.986193C782.262842 590.006632 791.240307 581.074192 791.240307 570.042951L791.240307 570.042951 791.240307 570.042951zM109.011274 909.778562l802.616914 0c11.076266 0 20.076244 8.93244 20.076244 19.962657l0 9.986445c0 11.054777-8.977465 20.008706-20.076244 20.008706L109.011274 959.736371c-11.057847 0-20.053732-8.931416-20.053732-20.008706l0-9.986445C88.957543 918.709979 97.953428 909.778562 109.011274 909.778562z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-down2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 686.949544 205.516724 380.465245 234.459916 351.522052 512 629.062136 789.540084 351.522052 818.483276 380.465245Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-success" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C228.693333 0 0 228.693333 0 512s228.693333 512 512 512 512-228.693333 512-512S795.306667 0 512 0zM785.066667 331.093333l-331.093333 392.533333c-3.413333 6.826667-13.653333 10.24-20.48 10.24-6.826667 0-10.24-3.413333-17.066667-6.826667L242.346667 580.266667c-10.24-10.24-13.653333-23.893333-3.413333-37.546667 10.24-10.24 23.893333-13.653333 37.546667-3.413333l157.013333 129.706667 314.026667-372.053333c10.24-10.24 23.893333-13.653333 37.546667-3.413333C791.893333 303.786667 795.306667 320.853333 785.066667 331.093333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-info" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.230933 0 0 229.230933 0 512s229.230933 512 512 512 512-229.230933 512-512S794.769067 0 512 0z m64 768c0 35.2-28.8 64-64 64s-64-28.8-64-64V448c0-35.2 28.8-64 64-64s64 28.8 64 64v320z m-64-448c-35.3472 0-64-28.6528-64-64s28.6528-64 64-64 64 28.6528 64 64-28.6528 64-64 64z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-loading" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M957.046154 742.4V325.907692c0-21.661538-4.923077-43.323077-15.753846-62.030769-10.830769-18.707692-26.584615-33.476923-45.292308-44.307692L573.046154 33.476923c-18.707692-10.830769-39.384615-16.738462-61.046154-16.738461s-42.338462 5.907692-61.046154 16.738461L128 219.569231c-18.707692 10.830769-34.461538 25.6-45.292308 44.307692-10.830769 18.707692-15.753846 40.369231-15.753846 62.030769v372.184616c0 21.661538 4.923077 43.323077 15.753846 62.030769 10.830769 18.707692 26.584615 33.476923 45.292308 44.307692l321.969231 186.092308c18.707692 10.830769 39.384615 16.738462 61.046154 16.738461s42.338462-5.907692 61.046153-16.738461L728.615385 900.923077c16.738462-10.830769 31.507692-24.615385 41.353846-42.338462 9.846154-17.723077 14.769231-36.430769 15.753846-57.107692V419.446154c-0.984615-20.676923-5.907692-39.384615-15.753846-57.107692-9.846154-17.723077-24.615385-30.523077-41.353846-42.338462l-159.507693-91.569231c-18.707692-8.861538-36.430769-14.769231-57.107692-14.769231-20.676923 0-39.384615 5.907692-57.107692 14.769231L295.384615 320.984615c-16.738462 10.830769-31.507692 24.615385-41.353846 42.338462-9.846154 17.723077-14.769231 36.430769-15.753846 57.107692v184.123077c0.984615 20.676923 5.907692 39.384615 15.753846 57.107692 9.846154 17.723077 24.615385 30.523077 41.353846 42.338462l79.753847 46.276923c17.723077 9.846154 40.369231 3.938462 50.215384-13.784615 9.846154-17.723077 3.938462-40.369231-13.784615-50.215385L350.523077 649.846154c-11.815385-7.876923-21.661538-16.738462-28.553846-28.553846-6.892308-12.8-8.861538-24.615385-10.830769-39.384616V441.107692c0.984615-13.784615 3.938462-26.584615 10.830769-39.384615 6.892308-12.8 16.738462-20.676923 28.553846-28.553846L472.615385 303.261538c12.8-5.907692 24.615385-9.846154 39.384615-9.846153s26.584615 4.923077 39.384615 9.846153L672.492308 374.153846c11.815385 7.876923 21.661538 15.753846 28.553846 28.553846 6.892308 12.8 8.861538 24.615385 10.830769 39.384616v338.707692c-0.984615 13.784615-3.938462 26.584615-10.830769 39.384615-6.892308 12.8-16.738462 20.676923-28.553846 28.553847l-122.092308 70.892307c-11.815385 6.892308-24.615385 9.846154-38.4 9.846154s-27.569231-3.938462-38.4-9.846154L179.2 748.307692c-10.830769-6.892308-21.661538-16.738462-28.553846-28.553846-6.892308-11.815385-10.830769-25.6-10.830769-38.4V342.646154c0-12.8 3.938462-26.584615 10.830769-38.4 6.892308-11.815385 16.738462-21.661538 28.553846-28.553846L472.615385 105.353846c11.815385-6.892308 24.615385-9.846154 38.4-9.846154s27.569231 3.938462 38.4 9.846154l293.415384 169.353846c10.830769 6.892308 20.676923 16.738462 28.553846 28.553846 6.892308 11.815385 10.830769 25.6 10.83077 38.4v403.692308c0 12.8 6.892308 25.6 18.707692 31.507692 17.723077 9.846154 40.369231 3.938462 50.215385-13.784615 4.923077-4.923077 6.892308-13.784615 5.907692-20.676923" fill="#EEEEEE" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)