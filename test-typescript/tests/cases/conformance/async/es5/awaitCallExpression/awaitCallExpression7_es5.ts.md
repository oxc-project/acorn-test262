__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 538,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 22,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 15,
                "end": 22
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 55,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 55,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 46,
                  "end": 55,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 47,
                      "end": 54
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 46,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 128,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 76,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 77,
          "end": 90,
          "decorators": [],
          "name": "arg0",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 81,
            "end": 90,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 83,
              "end": 90
            }
          }
        },
        {
          "type": "Identifier",
          "start": 92,
          "end": 105,
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 105,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 98,
              "end": 105
            }
          }
        },
        {
          "type": "Identifier",
          "start": 107,
          "end": 120,
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 120,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 113,
              "end": 120
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 121,
        "end": 127,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 123,
          "end": 127
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 202,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 144,
                "end": 202,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 146,
                    "end": 200,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 148,
                      "decorators": [],
                      "name": "fn",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 149,
                        "end": 162,
                        "decorators": [],
                        "name": "arg0",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 153,
                          "end": 162,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 155,
                            "end": 162
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 164,
                        "end": 177,
                        "decorators": [],
                        "name": "arg1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 168,
                          "end": 177,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 170,
                            "end": 177
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 179,
                        "end": 192,
                        "decorators": [],
                        "name": "arg2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 183,
                          "end": 192,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 185,
                            "end": 192
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 193,
                      "end": 199,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 195,
                        "end": 199
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 286,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 286,
            "decorators": [],
            "name": "pfn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 286,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 221,
                "end": 286,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 228,
                  "end": 286,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 229,
                      "end": 285,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 231,
                          "end": 283,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 232,
                              "end": 245,
                              "decorators": [],
                              "name": "arg0",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 236,
                                "end": 245,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 238,
                                  "end": 245
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 247,
                              "end": 260,
                              "decorators": [],
                              "name": "arg1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 251,
                                "end": 260,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 253,
                                  "end": 260
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 262,
                              "end": 275,
                              "decorators": [],
                              "name": "arg2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 266,
                                "end": 275,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 268,
                                  "end": 275
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 276,
                            "end": 282,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 278,
                              "end": 282
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 228,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 288,
      "end": 372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 371,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 371,
            "decorators": [],
            "name": "po",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 371,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 304,
                "end": 371,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 311,
                  "end": 371,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 312,
                      "end": 370,
                      "members": [
                        {
                          "type": "TSMethodSignature",
                          "start": 314,
                          "end": 368,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 314,
                            "end": 316,
                            "decorators": [],
                            "name": "fn",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 317,
                              "end": 330,
                              "decorators": [],
                              "name": "arg0",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 321,
                                "end": 330,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 323,
                                  "end": 330
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 332,
                              "end": 345,
                              "decorators": [],
                              "name": "arg1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 336,
                                "end": 345,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 338,
                                  "end": 345
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 347,
                              "end": 360,
                              "decorators": [],
                              "name": "arg2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 351,
                                "end": 360,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 353,
                                  "end": 360
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 361,
                            "end": 367,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 363,
                              "end": 367
                            }
                          },
                          "static": false
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 311,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 373,
      "end": 405,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 390,
        "end": 396,
        "decorators": [],
        "name": "before",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 398,
        "end": 404,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 400,
          "end": 404
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 406,
      "end": 437,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 423,
        "end": 428,
        "decorators": [],
        "name": "after",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 430,
        "end": 436,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 432,
          "end": 436
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 438,
      "end": 538,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 475,
        "end": 538,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 481,
            "end": 490,
            "expression": {
              "type": "CallExpression",
              "start": 481,
              "end": 489,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 481,
                "end": 487,
                "decorators": [],
                "name": "before",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 495,
            "end": 523,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 499,
                "end": 522,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 500,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 503,
                  "end": 522,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 508,
                      "end": 509,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    {
                      "type": "AwaitExpression",
                      "start": 511,
                      "end": 518,
                      "argument": {
                        "type": "Identifier",
                        "start": 517,
                        "end": 518,
                        "decorators": [],
                        "name": "p",
                        "optional": false
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 520,
                      "end": 521,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 503,
                    "end": 507,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 503,
                      "end": 504,
                      "decorators": [],
                      "name": "o",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 505,
                      "end": 507,
                      "decorators": [],
                      "name": "fn",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 528,
            "end": 536,
            "expression": {
              "type": "CallExpression",
              "start": 528,
              "end": 535,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 528,
                "end": 533,
                "decorators": [],
                "name": "after",
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
        "start": 453,
        "end": 457,
        "decorators": [],
        "name": "func",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 459,
        "end": 474,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 461,
          "end": 474,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 468,
            "end": 474,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 469,
                "end": 473
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 461,
            "end": 468,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
