__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "self",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 77,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 76,
          "value": "recursiveExportAssignmentAndFindAliasedType5_moduleD",
          "raw": "\"recursiveExportAssignmentAndFindAliasedType5_moduleD\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 79,
      "end": 93,
      "expression": {
        "type": "Identifier",
        "start": 88,
        "end": 92,
        "name": "self",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "self",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 77,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 76,
          "value": "recursiveExportAssignmentAndFindAliasedType5_moduleC",
          "raw": "\"recursiveExportAssignmentAndFindAliasedType5_moduleC\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 79,
      "end": 93,
      "expression": {
        "type": "Identifier",
        "start": 88,
        "end": 92,
        "name": "self",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "ClassB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSExportAssignment",
      "start": 17,
      "end": 33,
      "expression": {
        "type": "Identifier",
        "start": 26,
        "end": 32,
        "name": "ClassB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 221,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "name": "moduleC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 17,
        "end": 80,
        "expression": {
          "type": "Literal",
          "start": 25,
          "end": 79,
          "value": "recursiveExportAssignmentAndFindAliasedType5_moduleC",
          "raw": "\"recursiveExportAssignmentAndFindAliasedType5_moduleC\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 82,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 95,
        "name": "ClassB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 98,
        "end": 161,
        "expression": {
          "type": "Literal",
          "start": 106,
          "end": 160,
          "value": "recursiveExportAssignmentAndFindAliasedType5_moduleB",
          "raw": "\"recursiveExportAssignmentAndFindAliasedType5_moduleB\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 163,
      "end": 184,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 170,
        "end": 184,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 174,
            "end": 183,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 183,
              "name": "b",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 175,
                "end": 183,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 177,
                  "end": 183,
                  "typeName": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 183,
                    "name": "ClassB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
