<<template>
    <div>
       <p v-for ="todo in tasksList" :key="todo.id">{{ todo.title }} </p> 
    </div>
</template>

<script>
import ToDoStore from '../stores/tasks';
import {mapActions,mapState } from 'pinia' ;

export default {
name: 'TaskItem',
computed: {
...mapState(ToDoStore, ['tasksList'])
},
methods: {
    ...mapActions(ToDoStore, ['_fetchAllTasks']),
},
created() {
    console.log('Created TaskItem')
    this._fetchAllTasks()
},
mounted() {
    this._addNewTask({title: 'New task', user_id: 123});
}
}
</script>

<style lang="scss" scoped>

</style>