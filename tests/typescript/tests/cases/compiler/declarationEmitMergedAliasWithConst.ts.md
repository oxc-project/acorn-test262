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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 86,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 86,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 18,
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "Red",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 32,
                      "end": 37,
                      "value": "Red",
                      "raw": "\"Red\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 43,
                    "end": 57,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 48,
                      "decorators": [],
                      "name": "Green",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 50,
                      "end": 57,
                      "value": "Green",
                      "raw": "\"Green\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 63,
                    "end": 75,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "decorators": [],
                      "name": "Blue",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 69,
                      "end": 75,
                      "value": "Blue",
                      "raw": "\"Blue\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 88,
      "end": 120,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 95,
        "end": 120,
        "id": {
          "type": "Identifier",
          "start": 100,
          "end": 105,
          "decorators": [],
          "name": "Color",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 121,
      "end": 160,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 128,
        "end": 160,
        "id": {
          "type": "Identifier",
          "start": 133,
          "end": 139,
          "decorators": [],
          "name": "Colors",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 142,
          "end": 160,
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
