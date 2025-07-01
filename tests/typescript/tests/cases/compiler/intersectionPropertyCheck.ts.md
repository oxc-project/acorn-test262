__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11,
                          "end": 12
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16,
                                  "end": 17
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 19,
                                    "end": 25
                                  },
                                  "start": 17,
                                  "end": 25
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 16,
                                "end": 25
                              }
                            ],
                            "start": 14,
                            "end": 27
                          },
                          "start": 12,
                          "end": 27
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 11,
                        "end": 27
                      }
                    ],
                    "start": 9,
                    "end": 29
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 34,
                          "end": 35
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 37,
                            "end": 43
                          },
                          "start": 35,
                          "end": 43
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 34,
                        "end": 43
                      }
                    ],
                    "start": 32,
                    "end": 45
                  }
                ],
                "start": 9,
                "end": 45
              },
              "start": 7,
              "end": 45
            },
            "start": 4,
            "end": 45
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 51
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 55,
                        "end": 56
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 58,
                        "end": 65
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 55,
                      "end": 65
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 68
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 70,
                        "end": 71
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 67,
                      "end": 71
                    }
                  ],
                  "start": 53,
                  "end": 73
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 50,
                "end": 73
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 76
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 78,
                  "end": 79
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 75,
                "end": 79
              }
            ],
            "start": 48,
            "end": 81
          },
          "definite": false,
          "start": 4,
          "end": 81
        }
      ],
      "declare": false,
      "start": 0,
      "end": 82
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
            "name": "wrong",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 132,
                      "end": 133
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 137,
                              "end": 138
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 140,
                                "end": 146
                              },
                              "start": 138,
                              "end": 146
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 137,
                            "end": 146
                          }
                        ],
                        "start": 135,
                        "end": 148
                      },
                      "start": 133,
                      "end": 148
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 132,
                    "end": 148
                  }
                ],
                "start": 130,
                "end": 150
              },
              "start": 128,
              "end": 150
            },
            "start": 123,
            "end": 150
          },
          "init": null,
          "definite": false,
          "start": 123,
          "end": 150
        }
      ],
      "declare": true,
      "start": 111,
      "end": 151
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
            "name": "weak",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 164,
                          "end": 165
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 170,
                                  "end": 171
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 174,
                                    "end": 180
                                  },
                                  "start": 172,
                                  "end": 180
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 170,
                                "end": 180
                              }
                            ],
                            "start": 168,
                            "end": 182
                          },
                          "start": 166,
                          "end": 182
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 164,
                        "end": 182
                      }
                    ],
                    "start": 162,
                    "end": 184
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 189,
                          "end": 190
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 193,
                            "end": 199
                          },
                          "start": 191,
                          "end": 199
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 189,
                        "end": 199
                      }
                    ],
                    "start": 187,
                    "end": 201
                  }
                ],
                "start": 162,
                "end": 201
              },
              "start": 160,
              "end": 201
            },
            "start": 156,
            "end": 201
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "wrong",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 209
          },
          "definite": false,
          "start": 156,
          "end": 209
        }
      ],
      "declare": false,
      "start": 152,
      "end": 210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 252
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 254
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 263,
              "end": 269
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 253,
            "end": 269
          }
        ],
        "start": 252,
        "end": 270
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 280,
                      "end": 286
                    },
                    "start": 278,
                    "end": 286
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 276,
                  "end": 286
                }
              ],
              "start": 274,
              "end": 288
            },
            "start": 272,
            "end": 288
          },
          "start": 271,
          "end": 288
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 294
                  },
                  "typeArguments": null,
                  "start": 293,
                  "end": 294
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 299,
                        "end": 300
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 302,
                          "end": 309
                        },
                        "start": 300,
                        "end": 309
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 299,
                      "end": 309
                    }
                  ],
                  "start": 297,
                  "end": 311
                }
              ],
              "start": 293,
              "end": 311
            },
            "start": 291,
            "end": 311
          },
          "start": 290,
          "end": 311
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 318
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 322
              },
              "start": 317,
              "end": 322
            },
            "directive": null,
            "start": 317,
            "end": 323
          }
        ],
        "start": 313,
        "end": 372
      },
      "expression": false,
      "start": 240,
      "end": 372
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 406,
        "end": 410
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hi",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 426
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 429,
                  "end": 435
                },
                "start": 429,
                "end": 437
              },
              "start": 427,
              "end": 437
            },
            "accessibility": null,
            "static": false,
            "start": 415,
            "end": 437
          }
        ],
        "start": 411,
        "end": 439
      },
      "declare": false,
      "start": 396,
      "end": 439
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 450,
        "end": 454
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 456
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 465,
              "end": 471
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 455,
            "end": 471
          }
        ],
        "start": 454,
        "end": 472
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              },
              "typeArguments": null,
              "start": 480,
              "end": 481
            },
            "start": 478,
            "end": 481
          },
          "start": 473,
          "end": 481
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 488
          },
          "typeArguments": null,
          "start": 484,
          "end": 488
        },
        "start": 482,
        "end": 488
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 505,
                    "end": 510
                  },
                  "start": 502,
                  "end": 510
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hi",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 512,
                    "end": 514
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 516,
                    "end": 520
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 512,
                  "end": 520
                }
              ],
              "start": 500,
              "end": 522
            },
            "start": 493,
            "end": 522
          }
        ],
        "start": 489,
        "end": 524
      },
      "expression": false,
      "start": 441,
      "end": 524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 524
}
```
