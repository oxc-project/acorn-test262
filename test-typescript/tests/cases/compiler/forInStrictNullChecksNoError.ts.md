__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 173,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 173,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 173,
        "body": [
          {
            "type": "ForInStatement",
            "start": 67,
            "end": 136,
            "body": {
              "type": "BlockStatement",
              "start": 88,
              "end": 136,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 104,
                  "end": 124,
                  "expression": {
                    "type": "CallExpression",
                    "start": 104,
                    "end": 123,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 116,
                        "end": 122,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 117,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 121,
                          "decorators": [],
                          "name": "key",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 104,
                      "end": 115,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 111,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 115,
                        "decorators": [],
                        "name": "log",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 72,
              "end": 81,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 78,
                  "end": 81,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 81,
                    "decorators": [],
                    "name": "key",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 141,
            "end": 149,
            "expression": {
              "type": "MemberExpression",
              "start": 141,
              "end": 148,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 143,
                "end": 147,
                "raw": "\"no\"",
                "value": "no"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 59,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 59,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 14,
              "end": 59,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 14,
                  "end": 40,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 16,
                      "end": 38,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 17,
                          "end": 28,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 20,
                            "end": 28,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 22,
                              "end": 28
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 29,
                        "end": 37,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 31,
                          "end": 37
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSNullKeyword",
                  "start": 43,
                  "end": 47
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 50,
                  "end": 59
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
