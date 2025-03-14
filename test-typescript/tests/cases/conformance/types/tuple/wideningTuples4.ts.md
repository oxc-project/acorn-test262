wideningTuples4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 12,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 7,
                "end": 12,
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 8,
                    "end": 11
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 23,
            "end": 44,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 27,
              "end": 44,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 37,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                },
                {
                  "type": "Literal",
                  "start": 39,
                  "end": 43,
                  "raw": "null",
                  "value": null
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 59,
      "expression": {
        "type": "AssignmentExpression",
        "start": 46,
        "end": 58,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 50,
          "end": 58,
          "elements": [
            {
              "type": "Literal",
              "start": 51,
              "end": 53,
              "raw": "\"\"",
              "value": ""
            },
            {
              "type": "Literal",
              "start": 55,
              "end": 57,
              "raw": "\"\"",
              "value": ""
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
