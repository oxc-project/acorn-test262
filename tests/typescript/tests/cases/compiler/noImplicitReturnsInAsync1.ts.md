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
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 19
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 29,
                "end": 36
              },
              "start": 27,
              "end": 36
            },
            "start": 20,
            "end": 36
          },
          "right": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 39,
            "end": 44
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 44
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 63
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 68,
                "end": 72
              },
              "start": 56,
              "end": 72
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 84,
                  "end": 91
                }
              ],
              "start": 74,
              "end": 97
            },
            "alternate": null,
            "start": 52,
            "end": 97
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 107
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 123
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 124,
                        "end": 131
                      },
                      "optional": false,
                      "computed": false,
                      "start": 116,
                      "end": 131
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "The test is passed without an error.",
                        "raw": "\"The test is passed without an error.\"",
                        "start": 132,
                        "end": 170
                      }
                    ],
                    "optional": false,
                    "start": 116,
                    "end": 171
                  },
                  "start": 110,
                  "end": 171
                },
                "definite": false,
                "start": 106,
                "end": 171
              }
            ],
            "declare": false,
            "start": 102,
            "end": 172
          }
        ],
        "start": 46,
        "end": 174
      },
      "expression": false,
      "start": 0,
      "end": 174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 174
}
```
