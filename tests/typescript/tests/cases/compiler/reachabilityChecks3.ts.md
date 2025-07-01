__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 8,
            "end": 9
          },
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 15
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 24,
          "end": 28
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 41
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 45,
                  "end": 48
                },
                "start": 40,
                "end": 48
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 60,
                    "end": 66
                  }
                ],
                "start": 50,
                "end": 72
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 93
                      },
                      "start": 92,
                      "end": 95
                    },
                    "directive": null,
                    "start": 92,
                    "end": 96
                  }
                ],
                "start": 82,
                "end": 102
              },
              "start": 36,
              "end": 102
            }
          ],
          "start": 30,
          "end": 104
        },
        "start": 17,
        "end": 104
      },
      "start": 11,
      "end": 104
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "LabeledStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "body": {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": 100,
              "raw": "100",
              "start": 114,
              "end": 117
            },
            "directive": null,
            "start": 114,
            "end": 117
          },
          "start": 111,
          "end": 117
        }
      ],
      "start": 105,
      "end": 119
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 126
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "LabeledStatement",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 138
                  },
                  "body": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 140,
                      "end": 141
                    },
                    "directive": null,
                    "start": 140,
                    "end": 141
                  },
                  "start": 137,
                  "end": 141
                }
              ],
              "start": 135,
              "end": 143
            },
            "id": null,
            "generator": false,
            "start": 129,
            "end": 143
          },
          "definite": false,
          "start": 125,
          "end": 143
        }
      ],
      "declare": false,
      "start": 121,
      "end": 143
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 143
}
```
