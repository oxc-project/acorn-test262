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
          "right": {
            "type": "Literal",
            "start": 39,
            "end": 44,
            "value": false,
            "raw": "false"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 174,
        "body": [
          {
            "type": "IfStatement",
            "start": 52,
            "end": 97,
            "test": {
              "type": "BinaryExpression",
              "start": 56,
              "end": 72,
              "left": {
                "type": "Identifier",
                "start": 56,
                "end": 63,
                "decorators": [],
                "name": "isError",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 68,
                "end": 72,
                "value": true,
                "raw": "true"
              }
            },
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
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 102,
            "end": 172,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 106,
                "end": 171,
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 110,
                  "end": 171,
                  "argument": {
                    "type": "CallExpression",
                    "start": 116,
                    "end": 171,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 116,
                      "end": 131,
                      "object": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 123,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 131,
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 132,
                        "end": 170,
                        "value": "The test is passed without an error.",
                        "raw": "\"The test is passed without an error.\""
                      }
                    ],
                    "optional": false
                  }
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
