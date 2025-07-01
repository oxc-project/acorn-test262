__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 30
                },
                "init": null,
                "definite": false,
                "start": 24,
                "end": 30
              }
            ],
            "declare": false,
            "start": 20,
            "end": 31
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 43,
              "end": 44
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 62
                    },
                    "right": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 77
                      },
                      "start": 65,
                      "end": 77
                    },
                    "start": 56,
                    "end": 77
                  },
                  "directive": null,
                  "start": 56,
                  "end": 78
                }
              ],
              "start": 46,
              "end": 84
            },
            "start": 36,
            "end": 84
          }
        ],
        "start": 14,
        "end": 86
      },
      "expression": false,
      "start": 0,
      "end": 86
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 86
}
```
