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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 122,
        "body": [
          {
            "type": "IfStatement",
            "start": 41,
            "end": 120,
            "test": {
              "type": "UnaryExpression",
              "start": 45,
              "end": 50,
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "start": 46,
                "end": 50,
                "decorators": [],
                "name": "skip",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
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
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 62,
                    "end": 69,
                    "argument": {
                      "type": "Literal",
                      "start": 68,
                      "end": 69,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
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
                    "callee": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 106,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 107,
                        "end": 113,
                        "value": "test",
                        "raw": "'test'"
                      }
                    ],
                    "optional": false
                  }
                }
              ]
            }
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
