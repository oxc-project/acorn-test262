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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 86,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 18,
              "name": "Color",
              "typeAnnotation": null,
              "decorators": [],
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "name": "Red",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 32,
                      "end": 37,
                      "value": "Red",
                      "raw": "\"Red\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 43,
                    "end": 57,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 48,
                      "name": "Green",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 50,
                      "end": 57,
                      "value": "Green",
                      "raw": "\"Green\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 63,
                    "end": 75,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "name": "Blue",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 69,
                      "end": 75,
                      "value": "Blue",
                      "raw": "\"Blue\""
                    },
                    "kind": "init",
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
                  "name": "const",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "Color",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "Color",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "Colors",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "Color",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
