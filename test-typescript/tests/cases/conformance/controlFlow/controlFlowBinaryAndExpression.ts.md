__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 32,
            "name": "x",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 51,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 51,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 74,
      "expression": {
        "type": "LogicalExpression",
        "start": 54,
        "end": 73,
        "left": {
          "type": "AssignmentExpression",
          "start": 55,
          "end": 61,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 59,
            "end": 61,
            "value": "",
            "raw": "\"\""
          }
        },
        "operator": "&&",
        "right": {
          "type": "AssignmentExpression",
          "start": 67,
          "end": 72,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 71,
            "end": 72,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 77,
      "expression": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 102,
          "end": 104,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 122,
      "expression": {
        "type": "LogicalExpression",
        "start": 106,
        "end": 121,
        "left": {
          "type": "Identifier",
          "start": 106,
          "end": 110,
          "name": "cond",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "&&",
        "right": {
          "type": "AssignmentExpression",
          "start": 115,
          "end": 120,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 119,
            "end": 120,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 125,
      "expression": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
