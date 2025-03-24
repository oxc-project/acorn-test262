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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 35,
            "name": "console",
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
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "val",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 26,
                          "end": 31,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 28,
                            "end": 31
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "x",
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
        "start": 49,
        "end": 106,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 55,
            "end": 69,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 59,
                "end": 68,
                "id": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 64,
                  "name": "_this",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "var",
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
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 92,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
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
