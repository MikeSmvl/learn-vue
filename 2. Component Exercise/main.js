Vue.component('tabs', {
    template:
    `
        <div>
          <div class="tabs">
            <ul>
              <li v-for="tab in tabz" :class="{ 'is-active': tab.isActive }">
                <a href="#" @click="selectTab(tab)">{{ tab.name }}</a>
              </li>
            </ul>
          </div>

          <div class="tabs-details">
            <slot></slot>
          </div>
        </div>
    `,

    data() {
      return { tabz: [] };
    },

    created() {
        this.tabz = this.$children;
    },

    methods: {
      selectTab(selectedTab) {
        this.tabz.forEach(tab => {
          tab.isActive = (tab.name == selectedTab.name);
        });
      }
    }
});


Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            isActive: false
        };
    },

    mounted() {
      this.isActive = this.selected;
    }
});

new Vue({
    el: '#root'
});
