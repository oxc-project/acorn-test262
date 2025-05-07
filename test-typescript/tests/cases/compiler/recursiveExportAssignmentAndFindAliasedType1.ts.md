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
      "kind": "module",
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
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 45,
              "end": 63,
              "expression": {
                "type": "Literal",
                "start": 53,
                "end": 62,
                "raw": "\"moduleC\"",
                "value": "moduleC",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "TSExportAssignment",
            "start": 69,
            "end": 83,
            "expression": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "raw": "\"moduleC\"",
        "value": "moduleC",
        "regex": null,
        "bigint": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "moduleC",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 101,
        "end": 119,
        "expression": {
          "type": "Literal",
          "start": 109,
          "end": 118,
          "raw": "\"moduleC\"",
          "value": "moduleC",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 121,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 134,
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 137,
        "end": 200,
        "expression": {
          "type": "Literal",
          "start": 145,
          "end": 199,
          "raw": "\"recursiveExportAssignmentAndFindAliasedType1_moduleB\"",
          "value": "recursiveExportAssignmentAndFindAliasedType1_moduleB",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 202,
      "end": 223,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 209,
        "end": 223,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 213,
            "end": 222,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 213,
              "end": 222,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 214,
                "end": 222,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 216,
                  "end": 222,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 222,
                    "decorators": [],
                    "name": "ClassB",
                    "optional": false,
                    "typeAnnotation": null
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
