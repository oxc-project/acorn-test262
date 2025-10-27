__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "self",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./recursiveExportAssignmentAndFindAliasedType5_moduleD",
          "raw": "\"./recursiveExportAssignmentAndFindAliasedType5_moduleD\"",
          "start": 22,
          "end": 78
        },
        "start": 14,
        "end": 79
      },
      "importKind": "value",
      "start": 0,
      "end": 80
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "self",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 94
      },
      "start": 81,
      "end": 95
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 96
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "self",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./recursiveExportAssignmentAndFindAliasedType5_moduleC",
          "raw": "\"./recursiveExportAssignmentAndFindAliasedType5_moduleC\"",
          "start": 22,
          "end": 78
        },
        "start": 14,
        "end": 79
      },
      "importKind": "value",
      "start": 0,
      "end": 80
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "self",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 94
      },
      "start": 81,
      "end": 95
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 96
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 13,
        "end": 16
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 32
      },
      "start": 17,
      "end": 33
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 34
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleC",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 14
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./recursiveExportAssignmentAndFindAliasedType5_moduleC",
          "raw": "\"./recursiveExportAssignmentAndFindAliasedType5_moduleC\"",
          "start": 25,
          "end": 81
        },
        "start": 17,
        "end": 82
      },
      "importKind": "value",
      "start": 0,
      "end": 83
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 97
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./recursiveExportAssignmentAndFindAliasedType5_moduleB",
          "raw": "\"./recursiveExportAssignmentAndFindAliasedType5_moduleB\"",
          "start": 108,
          "end": 164
        },
        "start": 100,
        "end": 165
      },
      "importKind": "value",
      "start": 84,
      "end": 166
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 187
                  },
                  "typeArguments": null,
                  "start": 181,
                  "end": 187
                },
                "start": 179,
                "end": 187
              },
              "start": 178,
              "end": 187
            },
            "init": null,
            "definite": false,
            "start": 178,
            "end": 187
          }
        ],
        "declare": false,
        "start": 174,
        "end": 188
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 167,
      "end": 188
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 225
}
```
