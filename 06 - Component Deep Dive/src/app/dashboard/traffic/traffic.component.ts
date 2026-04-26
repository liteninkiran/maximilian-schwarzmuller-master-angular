import { Component, computed } from '@angular/core';
import { DummyData, dummyTrafficData } from '../../data';

type Data = DummyData & {
  height: string;
};

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
  standalone: true,
  imports: [],
})
export class TrafficComponent {
  public maxTraffic = computed(() => {
    const values = dummyTrafficData.map((data) => data.value);
    return values.length ? Math.max(...values) : 0;
  });

  public data = computed<Data[]>(() => {
    const max = this.maxTraffic();
    return dummyTrafficData.map((data) => ({
      id: data.id,
      value: data.value,
      height: `${(data.value / max) * 100}%`,
    }));
  });
}
