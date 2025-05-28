__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                "expression": false,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                          "decorators": [],
                          "name": "Error",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 94,
            "end": 104,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 98,
                "end": 103,
                "id": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
