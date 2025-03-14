typeSatisfaction_asConstArrays.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 33,
            "decorators": [],
            "name": "arr1",
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
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 40,
                    "end": 41,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 43,
                    "end": 44,
                    "raw": "3",
                    "value": 3
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
                  "decorators": [],
                  "name": "const",
                  "optional": false
                }
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 117,
            "decorators": [],
            "name": "arr2",
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
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 124,
                    "end": 125,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 127,
                    "end": 128,
                    "raw": "3",
                    "value": 3
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
                  "decorators": [],
                  "name": "const",
                  "optional": false
                }
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
