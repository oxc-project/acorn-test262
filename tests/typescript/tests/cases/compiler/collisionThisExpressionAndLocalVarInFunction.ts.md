__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 35,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 13,
                "end": 35,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 19,
                    "end": 33,
                    "key": {
                      "type": "Identifier",
                      "start": 19,
                      "end": 22,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 23,
                        "end": 31,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 26,
                          "end": 31,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 28,
                            "end": 31
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 36,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "x",
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
        "start": 49,
        "end": 106,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 55,
            "end": 69,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 59,
                "end": 68,
                "id": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 64,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 67,
                  "end": 68,
                  "value": 5,
                  "raw": "5"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 74,
            "end": 104,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 74,
              "end": 103,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 103,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 81,
                    "end": 101,
                    "expression": {
                      "type": "CallExpression",
                      "start": 81,
                      "end": 100,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 81,
                        "end": 92,
                        "object": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 88,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 92,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 93,
                          "end": 99,
                          "object": {
                            "type": "ThisExpression",
                            "start": 93,
                            "end": 97
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "directive": null
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
