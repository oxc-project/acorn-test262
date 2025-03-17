__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "name": "WrongObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 25,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 36,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 54,
        "name": "CorrectObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 100,
        "name": "isCorrect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 101,
          "end": 109,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 109,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 106,
              "end": 109
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 110,
        "end": 132,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 112,
          "end": 132,
          "parameterName": {
            "type": "Identifier",
            "start": 112,
            "end": 115,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
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
                "name": "CorrectObject",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 134,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 164,
        "name": "callsCallback",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 165,
          "end": 189,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 189,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 169,
              "end": 189,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 170,
                  "end": 182,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 174,
                    "end": 182,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 176,
                      "end": 182
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 192,
      "end": 424,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 216,
        "name": "problemFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 217,
          "end": 250,
          "name": "this",
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
                    "name": "CorrectObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 239,
                  "end": 250,
                  "typeName": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 250,
                    "name": "WrongObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 424,
        "body": [
          {
            "type": "IfStatement",
            "start": 281,
            "end": 310,
            "test": {
              "type": "UnaryExpression",
              "start": 285,
              "end": 301,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "CallExpression",
                "start": 286,
                "end": 301,
                "callee": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 295,
                  "name": "isCorrect",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "start": 296,
                    "end": 300
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 303,
              "end": 310,
              "argument": null
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 316,
            "end": 422,
            "expression": {
              "type": "CallExpression",
              "start": 316,
              "end": 421,
              "callee": {
                "type": "Identifier",
                "start": 316,
                "end": 329,
                "name": "callsCallback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 330,
                  "end": 420,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 331,
                      "end": 335,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "object": {
                              "type": "ThisExpression",
                              "start": 348,
                              "end": 352
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 353,
                              "end": 357,
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 360,
                            "end": 364,
                            "name": "name",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "start": 393,
                        "end": 414,
                        "id": {
                          "type": "Identifier",
                          "start": 398,
                          "end": 399,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 402,
                          "end": 413,
                          "exprName": {
                            "type": "ThisExpression",
                            "start": 409,
                            "end": 413
                          },
                          "typeArguments": null
                        },
                        "declare": false
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
  "sourceType": "script",
  "hashbang": null
}
```
