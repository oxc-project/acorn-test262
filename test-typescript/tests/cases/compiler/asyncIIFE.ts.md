__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
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
        "start": 14,
        "end": 106,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 20,
            "end": 88,
            "expression": {
              "type": "CallExpression",
              "start": 20,
              "end": 87,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 21,
                "end": 84,
                "id": null,
                "expression": false,
                "generator": false,
                "async": true,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 33,
                  "end": 84,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 43,
                      "end": 51,
                      "expression": {
                        "type": "AwaitExpression",
                        "start": 43,
                        "end": 51,
                        "argument": {
                          "type": "Literal",
                          "start": 49,
                          "end": 51,
                          "value": 10,
                          "raw": "10"
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ThrowStatement",
                      "start": 60,
                      "end": 78,
                      "argument": {
                        "type": "NewExpression",
                        "start": 66,
                        "end": 77,
                        "callee": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 75,
                          "name": "Error",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 94,
            "end": 104,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 98,
                "end": 103,
                "id": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 102,
                  "end": 103,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
