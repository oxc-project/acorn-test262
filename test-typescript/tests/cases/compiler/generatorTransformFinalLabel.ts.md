__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 122,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 122,
        "body": [
          {
            "type": "IfStatement",
            "start": 41,
            "end": 120,
            "alternate": {
              "type": "BlockStatement",
              "start": 85,
              "end": 120,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 95,
                  "end": 114,
                  "argument": {
                    "type": "CallExpression",
                    "start": 101,
                    "end": 114,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 107,
                        "end": 113,
                        "raw": "'test'",
                        "value": "test"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 106,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 52,
              "end": 75,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 62,
                  "end": 69,
                  "directive": null,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 62,
                    "end": 69,
                    "argument": {
                      "type": "Literal",
                      "start": 68,
                      "end": 69,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 45,
              "end": 50,
              "argument": {
                "type": "Identifier",
                "start": 46,
                "end": 50,
                "decorators": [],
                "name": "skip",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 33,
          "decorators": [],
          "name": "skip",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 33,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 26,
              "end": 33
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
