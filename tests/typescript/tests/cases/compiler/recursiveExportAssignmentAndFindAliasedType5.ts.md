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
          "value": "recursiveExportAssignmentAndFindAliasedType5_moduleD",
          "raw": "\"recursiveExportAssignmentAndFindAliasedType5_moduleD\"",
          "start": 22,
          "end": 76
        },
        "start": 14,
        "end": 77
      },
      "importKind": "value",
      "start": 0,
      "end": 78
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "self",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 92
      },
      "start": 79,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 94
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
          "value": "recursiveExportAssignmentAndFindAliasedType5_moduleC",
          "raw": "\"recursiveExportAssignmentAndFindAliasedType5_moduleC\"",
          "start": 22,
          "end": 76
        },
        "start": 14,
        "end": 77
      },
      "importKind": "value",
      "start": 0,
      "end": 78
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "self",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 92
      },
      "start": 79,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 94
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
          "value": "recursiveExportAssignmentAndFindAliasedType5_moduleC",
          "raw": "\"recursiveExportAssignmentAndFindAliasedType5_moduleC\"",
          "start": 25,
          "end": 79
        },
        "start": 17,
        "end": 80
      },
      "importKind": "value",
      "start": 0,
      "end": 81
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 95
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "recursiveExportAssignmentAndFindAliasedType5_moduleB",
          "raw": "\"recursiveExportAssignmentAndFindAliasedType5_moduleB\"",
          "start": 106,
          "end": 160
        },
        "start": 98,
        "end": 161
      },
      "importKind": "value",
      "start": 82,
      "end": 162
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
                    "start": 177,
                    "end": 183
                  },
                  "typeArguments": null,
                  "start": 177,
                  "end": 183
                },
                "start": 175,
                "end": 183
              },
              "start": 174,
              "end": 183
            },
            "init": null,
            "definite": false,
            "start": 174,
            "end": 183
          }
        ],
        "declare": false,
        "start": 170,
        "end": 184
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 163,
      "end": 184
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 221
}
```
