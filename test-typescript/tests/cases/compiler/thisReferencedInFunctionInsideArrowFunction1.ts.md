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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 24,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 11,
                "end": 16,
                "name": "dummy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 21,
              "end": 24,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 39,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 103,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 48,
            "end": 101,
            "expression": {
              "type": "CallExpression",
              "start": 48,
              "end": 100,
              "callee": {
                "type": "Identifier",
                "start": 48,
                "end": 51,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 52,
                  "end": 94,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "FunctionExpression",
                    "start": 66,
                    "end": 94,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                    "typeParameters": null,
                    "returnType": null
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
