__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "LabeledStatement",
      "start": 11,
      "end": 104,
      "body": {
        "type": "WhileStatement",
        "start": 17,
        "end": 104,
        "test": {
          "type": "Literal",
          "start": 24,
          "end": 28,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 30,
          "end": 104,
          "body": [
            {
              "type": "IfStatement",
              "start": 36,
              "end": 102,
              "test": {
                "type": "BinaryExpression",
                "start": 40,
                "end": 48,
                "left": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "start": 45,
                  "end": 48,
                  "value": 100,
                  "raw": "100"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 50,
                "end": 72,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 60,
                    "end": 66,
                    "label": null
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 82,
                "end": 102,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 92,
                    "end": 96,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 92,
                      "end": 95,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              }
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 11,
        "end": 15,
        "name": "loop",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "BlockStatement",
      "start": 105,
      "end": 119,
      "body": [
        {
          "type": "LabeledStatement",
          "start": 111,
          "end": 117,
          "body": {
            "type": "ExpressionStatement",
            "start": 114,
            "end": 117,
            "expression": {
              "type": "Literal",
              "start": 114,
              "end": 117,
              "value": 100,
              "raw": "100"
            },
            "directive": null
          },
          "label": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 143,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 129,
            "end": 143,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 135,
              "end": 143,
              "body": [
                {
                  "type": "LabeledStatement",
                  "start": 137,
                  "end": 141,
                  "body": {
                    "type": "ExpressionStatement",
                    "start": 140,
                    "end": 141,
                    "expression": {
                      "type": "Literal",
                      "start": 140,
                      "end": 141,
                      "value": 1,
                      "raw": "1"
                    },
                    "directive": null
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
