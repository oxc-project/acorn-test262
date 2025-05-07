__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 86,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 86,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 31,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 30,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 30,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 36,
            "end": 84,
            "body": {
              "type": "BlockStatement",
              "start": 46,
              "end": 84,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 56,
                  "end": 78,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 56,
                    "end": 77,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 62,
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "YieldExpression",
                      "start": 65,
                      "end": 77,
                      "argument": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 77,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "delegate": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 43,
              "end": 44,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
