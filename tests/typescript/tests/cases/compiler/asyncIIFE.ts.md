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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 49,
                          "end": 51
                        },
                        "start": 43,
                        "end": 51
                      },
                      "directive": null,
                      "start": 43,
                      "end": 51
                    },
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 70,
                          "end": 75
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 66,
                        "end": 77
                      },
                      "start": 60,
                      "end": 78
                    }
                  ],
                  "start": 33,
                  "end": 84
                },
                "id": null,
                "generator": false,
                "start": 21,
                "end": 84
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 20,
              "end": 87
            },
            "directive": null,
            "start": 20,
            "end": 88
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 99
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 102,
                  "end": 103
                },
                "definite": false,
                "start": 98,
                "end": 103
              }
            ],
            "declare": false,
            "start": 94,
            "end": 104
          }
        ],
        "start": 14,
        "end": 106
      },
      "expression": false,
      "start": 0,
      "end": 106
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 106
}
```
