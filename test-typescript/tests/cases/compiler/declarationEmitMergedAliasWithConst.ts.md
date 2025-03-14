__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 86,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 86,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 86,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 18,
              "decorators": [],
              "name": "Color",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 21,
              "end": 86,
              "expression": {
                "type": "ObjectExpression",
                "start": 21,
                "end": 77,
                "properties": [
                  {
                    "type": "Property",
                    "start": 27,
                    "end": 37,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "Red",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 32,
                      "end": 37,
                      "raw": "\"Red\"",
                      "value": "Red"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 43,
                    "end": 57,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 48,
                      "decorators": [],
                      "name": "Green",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 50,
                      "end": 57,
                      "raw": "\"Green\"",
                      "value": "Green"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 63,
                    "end": 75,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "decorators": [],
                      "name": "Blue",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 69,
                      "end": 75,
                      "raw": "\"Blue\"",
                      "value": "Blue"
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 86,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 86,
                  "decorators": [],
                  "name": "const",
                  "optional": false
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 88,
      "end": 120,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 95,
        "end": 120,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 100,
          "end": 105,
          "decorators": [],
          "name": "Color",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 108,
          "end": 120,
          "exprName": {
            "type": "Identifier",
            "start": 115,
            "end": 120,
            "decorators": [],
            "name": "Color",
            "optional": false
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 121,
      "end": 160,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 128,
        "end": 160,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 133,
          "end": 139,
          "decorators": [],
          "name": "Colors",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 142,
          "end": 160,
          "indexType": {
            "type": "TSTypeOperator",
            "start": 148,
            "end": 159,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 154,
              "end": 159,
              "typeName": {
                "type": "Identifier",
                "start": 154,
                "end": 159,
                "decorators": [],
                "name": "Color",
                "optional": false
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 142,
            "end": 147,
            "typeName": {
              "type": "Identifier",
              "start": 142,
              "end": 147,
              "decorators": [],
              "name": "Color",
              "optional": false
            }
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
