__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
              "start": 9,
              "end": 10
            },
            "init": null,
            "definite": false,
            "start": 9,
            "end": 10
          }
        ],
        "declare": false,
        "start": 5,
        "end": 10
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 14,
        "end": 16
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 28
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 32
                },
                "definite": false,
                "start": 26,
                "end": 32
              }
            ],
            "declare": false,
            "start": 22,
            "end": 33
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 39
            },
            "body": {
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
                    "start": 45,
                    "end": 46
                  },
                  "init": null,
                  "definite": false,
                  "start": 45,
                  "end": 46
                }
              ],
              "declare": false,
              "start": 41,
              "end": 47
            },
            "start": 36,
            "end": 47
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 72
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 75,
                        "end": 77
                      },
                      "start": 71,
                      "end": 77
                    },
                    "start": 64,
                    "end": 77
                  }
                ],
                "start": 62,
                "end": 78
              },
              "expression": false,
              "start": 51,
              "end": 78
            },
            "directive": null,
            "start": 50,
            "end": 80
          }
        ],
        "start": 18,
        "end": 82
      },
      "start": 0,
      "end": 82
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 82
}
```
