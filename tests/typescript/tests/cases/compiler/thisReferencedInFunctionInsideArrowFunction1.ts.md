__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 24,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 21,
              "end": 24,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 11,
                "end": 16,
                "decorators": [],
                "name": "dummy",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 103,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 103,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 48,
            "end": 101,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 48,
              "end": 100,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 52,
                  "end": 94,
                  "async": false,
                  "body": {
                    "type": "FunctionExpression",
                    "start": 66,
                    "end": 94,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 78,
                      "end": 94,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 80,
                          "end": 92,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 87,
                            "end": 91
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 48,
                "end": 51,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 39,
        "decorators": [],
        "name": "test",
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
