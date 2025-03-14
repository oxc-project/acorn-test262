thisTypeInFunctions4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 424,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 35,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "decorators": [],
        "name": "WrongObject",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 19,
        "end": 34,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 33,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 25,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 36,
      "end": 72,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 54,
        "decorators": [],
        "name": "CorrectObject",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 57,
        "end": 71,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 70,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 132,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 100,
        "decorators": [],
        "name": "isCorrect",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 101,
          "end": 109,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 109,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 106,
              "end": 109
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 110,
        "end": 132,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 112,
          "end": 132,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 112,
            "end": 115,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 119,
            "end": 132,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 132,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 132,
                "decorators": [],
                "name": "CorrectObject",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 134,
      "end": 190,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 164,
        "decorators": [],
        "name": "callsCallback",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 165,
          "end": 189,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 189,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 169,
              "end": 189,
              "params": [
                {
                  "type": "Identifier",
                  "start": 170,
                  "end": 182,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 174,
                    "end": 182,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 176,
                      "end": 182
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 183,
                "end": 189,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 185,
                  "end": 189
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 192,
      "end": 424,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 424,
        "body": [
          {
            "type": "IfStatement",
            "start": 281,
            "end": 310,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 303,
              "end": 310,
              "argument": null
            },
            "test": {
              "type": "UnaryExpression",
              "start": 285,
              "end": 301,
              "argument": {
                "type": "CallExpression",
                "start": 286,
                "end": 301,
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "start": 296,
                    "end": 300
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 295,
                  "decorators": [],
                  "name": "isCorrect",
                  "optional": false
                },
                "optional": false
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 316,
            "end": 422,
            "expression": {
              "type": "CallExpression",
              "start": 316,
              "end": 421,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 330,
                  "end": 420,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 338,
                    "end": 420,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 348,
                        "end": 365,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 348,
                          "end": 364,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 348,
                            "end": 357,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 348,
                              "end": 352
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 353,
                              "end": 357,
                              "decorators": [],
                              "name": "name",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 360,
                            "end": 364,
                            "decorators": [],
                            "name": "name",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "start": 393,
                        "end": 414,
                        "declare": false,
                        "id": {
                          "type": "Identifier",
                          "start": 398,
                          "end": 399,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 402,
                          "end": 413,
                          "exprName": {
                            "type": "ThisExpression",
                            "start": 409,
                            "end": 413
                          }
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 331,
                      "end": 335,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 316,
                "end": 329,
                "decorators": [],
                "name": "callsCallback",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 216,
        "decorators": [],
        "name": "problemFunction",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 217,
          "end": 250,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 221,
            "end": 250,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 223,
              "end": 250,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 223,
                  "end": 236,
                  "typeName": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 236,
                    "decorators": [],
                    "name": "CorrectObject",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 239,
                  "end": 250,
                  "typeName": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 250,
                    "decorators": [],
                    "name": "WrongObject",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 251,
        "end": 257,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 253,
          "end": 257
        }
      }
    }
  ],
  "sourceType": "script"
}
```
