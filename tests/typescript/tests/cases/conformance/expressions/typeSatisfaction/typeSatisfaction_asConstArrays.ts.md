__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 33
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 37,
                    "end": 38
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 40,
                    "end": 41
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 43,
                    "end": 44
                  }
                ],
                "start": 36,
                "end": 45
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 54
                },
                "typeArguments": null,
                "start": 49,
                "end": 54
              },
              "start": 36,
              "end": 54
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 74,
                  "end": 81
                },
                "start": 74,
                "end": 83
              },
              "start": 65,
              "end": 83
            },
            "start": 36,
            "end": 83
          },
          "definite": false,
          "start": 29,
          "end": 83
        }
      ],
      "declare": false,
      "start": 23,
      "end": 83
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 117
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 121,
                    "end": 122
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 124,
                    "end": 125
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 127,
                    "end": 128
                  }
                ],
                "start": 120,
                "end": 129
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 138
                },
                "typeArguments": null,
                "start": 133,
                "end": 138
              },
              "start": 120,
              "end": 138
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 149,
                "end": 156
              },
              "start": 149,
              "end": 158
            },
            "start": 120,
            "end": 158
          },
          "definite": false,
          "start": 113,
          "end": 158
        }
      ],
      "declare": false,
      "start": 107,
      "end": 158
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 158
}
```
