__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 159,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 33,
            "name": "arr1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 36,
            "end": 83,
            "expression": {
              "type": "TSAsExpression",
              "start": 36,
              "end": 54,
              "expression": {
                "type": "ArrayExpression",
                "start": 36,
                "end": 45,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 37,
                    "end": 38,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 40,
                    "end": 41,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 43,
                    "end": 44,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 54,
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 54,
                  "name": "const",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 65,
              "end": 83,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 74,
                "end": 83,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 74,
                  "end": 81
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 117,
            "name": "arr2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 120,
            "end": 158,
            "expression": {
              "type": "TSAsExpression",
              "start": 120,
              "end": 138,
              "expression": {
                "type": "ArrayExpression",
                "start": 120,
                "end": 129,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 121,
                    "end": 122,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 124,
                    "end": 125,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 127,
                    "end": 128,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 133,
                "end": 138,
                "typeName": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 138,
                  "name": "const",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 149,
              "end": 158,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 149,
                "end": 156
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
