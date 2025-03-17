__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 82,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "x",
              "typeAnnotation": null,
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
      "right": {
        "type": "ArrayExpression",
        "start": 14,
        "end": 16,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 82,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 33,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 32,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 28,
                  "name": "v0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "LabeledStatement",
            "start": 36,
            "end": 47,
            "body": {
              "type": "VariableDeclaration",
              "start": 41,
              "end": 47,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 45,
                  "end": 46,
                  "id": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "label": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 50,
            "end": 80,
            "expression": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 78,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 78,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 64,
                    "end": 77,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 71,
                      "end": 77,
                      "left": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 77,
                        "name": "v0",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
