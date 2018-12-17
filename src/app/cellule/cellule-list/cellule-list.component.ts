import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import { ApiService } from '../../services/api.service'
import { Store } from '@ngrx/store'
import { State } from '../../reducers'
import { InitLoading, LoadCellule, RemoveCellule } from '../../actions/cellule.actions'

@Component({
  selector: 'app-cellule-list',
  templateUrl: './cellule-list.component.html',
  styleUrls: ['./cellule-list.component.css']
})

export class CelluleListComponent implements OnInit {

  cellules
  cellules2
  subscription

  columnsToDisplay: string[]
  @ViewChild(MatTable) table: MatTable<any>

  constructor(private apiService: ApiService,
              private store: Store<State>) { }

  ngOnInit() {

      this.columnsToDisplay = ['date', 'champ', 'lieu',
                      'fpn_nvo', 'fpn_tot','cdn_nvo', 'cdn_tot',
                       'editer', 'detail', 'supprimer'];

      this.subscription = this.store.select(state => state.cellule)
      .subscribe(state => {
          this.cellules2 = state.cellules
          this.cellules = new MatTableDataSource(state.cellules);
      })
    }

    onSearch(searchTerm) {
      this.cellules.filter = searchTerm.trim().toLowerCase()
    }

    onDelete (index) {
      if(confirm("Voulez-vous vraiment supprimer cette cellule ?")) {
        let id = this.cellules[index]._id
        this.apiService.deleteItem('cellule', id)
        .subscribe(message => {
         this.cellules.splice(index, 1)
         this.table.renderRows()
         this.store.dispatch(new RemoveCellule(id))
      })
      }

    }

  ngOnDestroy() {
    this.cellules2 = []
    this.subscription.unsubscribe()
  }
}


