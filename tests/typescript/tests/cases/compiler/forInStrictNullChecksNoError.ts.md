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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 29,
                        "end": 37,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 31,
                          "end": 37
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
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
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 173,
        "body": [
          {
            "type": "ForInStatement",
            "start": 67,
            "end": 136,
            "left": {
              "type": "VariableDeclaration",
              "start": 72,
              "end": 81,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 78,
                  "end": 81,
                  "id": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 81,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 104,
                      "end": 115,
                      "object": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 111,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 115,
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
                        "start": 116,
                        "end": 122,
                        "object": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 117,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 121,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
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
              "object": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 143,
                "end": 147,
                "value": "no",
                "raw": "\"no\""
              },
              "optional": false,
              "computed": true
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
