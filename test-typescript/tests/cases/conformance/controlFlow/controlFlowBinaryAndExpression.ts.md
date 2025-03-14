controlFlowBinaryAndExpression.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 32,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 32,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 7,
                "end": 32,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 25,
                    "end": 32
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 51,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 51,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 74,
      "expression": {
        "type": "LogicalExpression",
        "start": 54,
        "end": 73,
        "operator": "&&",
        "left": {
          "type": "AssignmentExpression",
          "start": 55,
          "end": 61,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 59,
            "end": 61,
            "raw": "\"\"",
            "value": ""
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 67,
          "end": 72,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 71,
            "end": 72,
            "raw": "0",
            "value": 0
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 77,
      "expression": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 105,
      "expression": {
        "type": "AssignmentExpression",
        "start": 98,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 102,
          "end": 104,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 122,
      "expression": {
        "type": "LogicalExpression",
        "start": 106,
        "end": 121,
        "operator": "&&",
        "left": {
          "type": "Identifier",
          "start": 106,
          "end": 110,
          "decorators": [],
          "name": "cond",
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 115,
          "end": 120,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 119,
            "end": 120,
            "raw": "0",
            "value": 0
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 125,
      "expression": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
