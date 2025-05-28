__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 32,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 28,
                  "decorators": [],
                  "name": "v0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "LabeledStatement",
            "start": 36,
            "end": 47,
            "label": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "VariableDeclaration",
              "start": 41,
              "end": 47,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 45,
                  "end": 46,
                  "id": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
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
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 77,
                        "decorators": [],
                        "name": "v0",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "expression": false
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
