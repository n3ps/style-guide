---
layout: default
---

<div class="content md-padding" ng-app="docsApp">

{% example html %}
  <div class="row">
    <div class="widget full-width">
      <div class="widget-header">Timeline</div>
      <div class="widget-body">{( 1/0 )}</div>
    </div>
  </div>

  <div class="floated">
    <div class="widget">
      <div class="widget-header">
        <v-icon icon="diagnosis"></v-icon> <a href="#">Diagnosis</a>
      </div>
      <div class="widget-body">
        <div class="justify"><span>Primary</span><span>Pending Approval</span></div>
        <div class="strong"><a href="#">Malignant neoplasm of upper lobe</a></div>
        <div>Stage IV (T1b, N1, M1)</div>
      </div>
    </div>
    <div class="widget">
      <div class="widget-header">
        <v-icon icon="treatment"></v-icon> <a href="#">Treatment</a>
      </div>
      <div class="widget-body">
        (icon) Lung Last Tx: 1day
      </div>
    </div>
    <div class="widget">
      <div class="widget-header">
        <v-icon icon="medication"></v-icon> Labs
      </div>
      <div class="widget-body">No lab results or requests</div>
    </div>
    <div class="widget">
      <div class="widget-header">Appointments</div>
      <div>
        <v-card>Something</v-card>
      </div>
    </div>
    <div class="widget">
      <div class="widget-header">
        <v-icon icon="allergy"></v-icon> Allergies
      </div>
      <table class="table truncate">
        <tr>
          <th><b>Sulfa</b></th>
          <td>Drug allergy</td>
          <td><i class="fa fa-warning"></i></td>
          <td>Anaphylactic shock</td>
        </tr>
        <tr>
          <th><b>Betadine</b></th>
          <td></td>
          <td><i class="fa fa-warning"></i></td>
          <td>Shortness of breath</td>
        </tr>
        <tr>
          <th><b>Peanut</b></th>
          <td>Food allergy</td>
          <td><i class="fa fa-warning"></i></td>
          <td>Anaphylactic shock</td>
        </tr>
        <tr>
          <th><b>Lactose</b></th>
          <td>Food reaction</td>
          <td><i class="fa fa-warning"></i></td>
          <td>Skin rash</td>
        </tr>
      </table>
    </div>
    <div class="widget">
      <div class="widget-header">
        <v-icon icon="medication"></v-icon> Current Medications
      </div>
      <div class="widget-body">No medications have been added</div>
    </div>
    <div class="widget">
      <div class="widget-header">
        <v-icon icon="carepulse"></v-icon> CarePulse</div>
      <div class="widget-body">No data from patient</div>
    </div>

  </div>
{% endexample %}

</div>
