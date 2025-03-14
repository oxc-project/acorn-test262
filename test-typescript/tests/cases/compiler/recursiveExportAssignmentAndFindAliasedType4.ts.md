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
        "decorators": [],
        "name": "self",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 77,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 76,
          "raw": "\"recursiveExportAssignmentAndFindAliasedType4_moduleC\"",
          "value": "recursiveExportAssignmentAndFindAliasedType4_moduleC"
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 79,
      "end": 93,
      "expression": {
        "type": "Identifier",
        "start": 88,
        "end": 92,
        "decorators": [],
        "name": "self",
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "ClassB",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSExportAssignment",
      "start": 17,
      "end": 33,
      "expression": {
        "type": "Identifier",
        "start": 26,
        "end": 32,
        "decorators": [],
        "name": "ClassB",
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
        "decorators": [],
        "name": "moduleC",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 17,
        "end": 80,
        "expression": {
          "type": "Literal",
          "start": 25,
          "end": 79,
          "raw": "\"recursiveExportAssignmentAndFindAliasedType4_moduleC\"",
          "value": "recursiveExportAssignmentAndFindAliasedType4_moduleC"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 82,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 95,
        "decorators": [],
        "name": "ClassB",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 98,
        "end": 161,
        "expression": {
          "type": "Literal",
          "start": 106,
          "end": 160,
          "raw": "\"recursiveExportAssignmentAndFindAliasedType4_moduleB\"",
          "value": "recursiveExportAssignmentAndFindAliasedType4_moduleB"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 163,
      "end": 184,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 170,
        "end": 184,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 174,
            "end": 183,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 183,
              "decorators": [],
              "name": "b",
              "optional": false,
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
                    "decorators": [],
                    "name": "ClassB",
                    "optional": false
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
