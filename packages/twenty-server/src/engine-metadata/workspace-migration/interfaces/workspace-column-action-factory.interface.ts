import { WorkspaceColumnActionOptions } from 'src/engine-metadata/workspace-migration/interfaces/workspace-column-action-options.interface';
import { FieldMetadataInterface } from 'src/engine-metadata/field-metadata/interfaces/field-metadata.interface';

import { FieldMetadataType } from 'src/engine-metadata/field-metadata/field-metadata.entity';
import {
  WorkspaceMigrationColumnActionType,
  WorkspaceMigrationColumnAction,
} from 'src/engine-metadata/workspace-migration/workspace-migration.entity';

export interface WorkspaceColumnActionFactory<
  T extends FieldMetadataType | 'default',
> {
  create(
    action:
      | WorkspaceMigrationColumnActionType.CREATE
      | WorkspaceMigrationColumnActionType.ALTER,
    currentFieldMetadata: FieldMetadataInterface<T> | undefined,
    alteredFieldMetadata: FieldMetadataInterface<T>,
    options?: WorkspaceColumnActionOptions,
  ): WorkspaceMigrationColumnAction;
}
