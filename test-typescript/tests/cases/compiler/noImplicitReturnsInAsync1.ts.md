__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 174,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 174,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 174,
        "body": [
          {
            "type": "IfStatement",
            "start": 52,
            "end": 97,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 74,
              "end": 97,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 84,
                  "end": 91,
                  "argument": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 56,
              "end": 72,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 56,
                "end": 63,
                "decorators": [],
                "name": "isError",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 68,
                "end": 72,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 102,
            "end": 172,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 106,
                "end": 171,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 110,
                  "end": 171,
                  "argument": {
                    "type": "CallExpression",
                    "start": 116,
                    "end": 171,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 132,
                        "end": 170,
                        "raw": "\"The test is passed without an error.\"",
                        "value": "The test is passed without an error."
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 116,
                      "end": 131,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 123,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 131,
                        "decorators": [],
                        "name": "resolve",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 20,
          "end": 44,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 20,
            "end": 36,
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 36,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 29,
                "end": 36
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 39,
            "end": 44,
            "raw": "false",
            "value": false
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
