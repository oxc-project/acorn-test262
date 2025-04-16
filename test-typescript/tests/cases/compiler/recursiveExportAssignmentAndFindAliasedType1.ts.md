__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 85,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "value": "moduleC",
        "raw": "\"moduleC\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 85,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 31,
            "end": 64,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "name": "self",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 45,
              "end": 63,
              "expression": {
                "type": "Literal",
                "start": 53,
                "end": 62,
                "value": "moduleC",
                "raw": "\"moduleC\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSExportAssignment",
            "start": 69,
            "end": 83,
            "expression": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "name": "self",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "start": 84,
  "end": 260,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 84,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 98,
        "name": "moduleC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 101,
        "end": 119,
        "expression": {
          "type": "Literal",
          "start": 109,
          "end": 118,
          "value": "moduleC",
          "raw": "\"moduleC\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 121,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 134,
        "name": "ClassB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 137,
        "end": 200,
        "expression": {
          "type": "Literal",
          "start": 145,
          "end": 199,
          "value": "recursiveExportAssignmentAndFindAliasedType1_moduleB",
          "raw": "\"recursiveExportAssignmentAndFindAliasedType1_moduleB\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 202,
      "end": 223,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 209,
        "end": 223,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 213,
            "end": 222,
            "id": {
              "type": "Identifier",
              "start": 213,
              "end": 222,
              "name": "b",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 214,
                "end": 222,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 216,
                  "end": 222,
                  "typeName": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 222,
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
