__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 45
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 54
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 48,
            "end": 56
          },
          "definite": false,
          "start": 42,
          "end": 56
        }
      ],
      "declare": false,
      "start": 36,
      "end": 57
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gg3",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 83,
                          "end": 89
                        },
                        "start": 81,
                        "end": 89
                      },
                      "start": 78,
                      "end": 89
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 92,
                      "end": 98
                    },
                    "start": 90,
                    "end": 98
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 77,
                  "end": 98
                }
              ],
              "start": 75,
              "end": 100
            },
            "start": 73,
            "end": 100
          },
          "start": 72,
          "end": 100
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 113,
                          "end": 119
                        },
                        "start": 111,
                        "end": 119
                      },
                      "start": 108,
                      "end": 119
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 122,
                      "end": 128
                    },
                    "start": 120,
                    "end": 128
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 107,
                  "end": 128
                }
              ],
              "start": 105,
              "end": 130
            },
            "start": 103,
            "end": 130
          },
          "start": 102,
          "end": 130
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sym",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 138,
                    "end": 141
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    },
                    "start": 142,
                    "end": 150
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 137,
                  "end": 150
                }
              ],
              "start": 135,
              "end": 152
            },
            "start": 133,
            "end": 152
          },
          "start": 132,
          "end": 152
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
                "start": 160,
                "end": 161
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 165
              },
              "start": 160,
              "end": 165
            },
            "directive": null,
            "start": 160,
            "end": 166
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 176
              },
              "start": 171,
              "end": 176
            },
            "directive": null,
            "start": 171,
            "end": 177
          }
        ],
        "start": 154,
        "end": 189
      },
      "expression": false,
      "start": 59,
      "end": 189
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gg1",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 236
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "a",
                                "cooked": "a"
                              },
                              "tail": false,
                              "start": 248,
                              "end": 252
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 258,
                              "end": 260
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 252,
                              "end": 258
                            }
                          ],
                          "start": 248,
                          "end": 260
                        },
                        "start": 246,
                        "end": 260
                      },
                      "start": 243,
                      "end": 260
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 263,
                      "end": 269
                    },
                    "start": 261,
                    "end": 269
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 242,
                  "end": 270
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": false,
                              "start": 277,
                              "end": 280
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "a",
                                "cooked": "a"
                              },
                              "tail": true,
                              "start": 286,
                              "end": 289
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 280,
                              "end": 286
                            }
                          ],
                          "start": 277,
                          "end": 289
                        },
                        "start": 275,
                        "end": 289
                      },
                      "start": 272,
                      "end": 289
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 292,
                      "end": 298
                    },
                    "start": 290,
                    "end": 298
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 271,
                  "end": 298
                }
              ],
              "start": 240,
              "end": 300
            },
            "start": 238,
            "end": 300
          },
          "start": 237,
          "end": 300
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "a",
                                "cooked": "a"
                              },
                              "tail": false,
                              "start": 313,
                              "end": 317
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "a",
                                "cooked": "a"
                              },
                              "tail": true,
                              "start": 323,
                              "end": 326
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 317,
                              "end": 323
                            }
                          ],
                          "start": 313,
                          "end": 326
                        },
                        "start": 311,
                        "end": 326
                      },
                      "start": 308,
                      "end": 326
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 329,
                      "end": 335
                    },
                    "start": 327,
                    "end": 335
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 307,
                  "end": 335
                }
              ],
              "start": 305,
              "end": 337
            },
            "start": 303,
            "end": 337
          },
          "start": 302,
          "end": 337
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
                "start": 345,
                "end": 346
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 350
              },
              "start": 345,
              "end": 350
            },
            "directive": null,
            "start": 345,
            "end": 351
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 357
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 360,
                "end": 361
              },
              "start": 356,
              "end": 361
            },
            "directive": null,
            "start": 356,
            "end": 362
          }
        ],
        "start": 339,
        "end": 364
      },
      "expression": false,
      "start": 224,
      "end": 364
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IX",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 378
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false,
                        "start": 387,
                        "end": 391
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 397,
                        "end": 399
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 391,
                        "end": 397
                      }
                    ],
                    "start": 387,
                    "end": 399
                  },
                  "start": 385,
                  "end": 399
                },
                "start": 382,
                "end": 399
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 402,
                "end": 408
              },
              "start": 400,
              "end": 408
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 381,
            "end": 409
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 416,
                        "end": 419
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": true,
                        "start": 425,
                        "end": 428
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 419,
                        "end": 425
                      }
                    ],
                    "start": 416,
                    "end": 428
                  },
                  "start": 414,
                  "end": 428
                },
                "start": 411,
                "end": 428
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 431,
                "end": 437
              },
              "start": 429,
              "end": 437
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 410,
            "end": 437
          }
        ],
        "start": 379,
        "end": 439
      },
      "declare": false,
      "start": 366,
      "end": 439
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IY",
        "optional": false,
        "typeAnnotation": null,
        "start": 450,
        "end": 452
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false,
                        "start": 461,
                        "end": 465
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": true,
                        "start": 471,
                        "end": 474
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 465,
                        "end": 471
                      }
                    ],
                    "start": 461,
                    "end": 474
                  },
                  "start": 459,
                  "end": 474
                },
                "start": 456,
                "end": 474
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 477,
                "end": 483
              },
              "start": 475,
              "end": 483
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 455,
            "end": 483
          }
        ],
        "start": 453,
        "end": 485
      },
      "declare": false,
      "start": 440,
      "end": 485
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gg2",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 499
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IX",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 505
              },
              "typeArguments": null,
              "start": 503,
              "end": 505
            },
            "start": 501,
            "end": 505
          },
          "start": 500,
          "end": 505
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IY",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 512
              },
              "typeArguments": null,
              "start": 510,
              "end": 512
            },
            "start": 508,
            "end": 512
          },
          "start": 507,
          "end": 512
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
                "start": 520,
                "end": 521
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 524,
                "end": 525
              },
              "start": 520,
              "end": 525
            },
            "directive": null,
            "start": 520,
            "end": 526
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 546
              },
              "start": 541,
              "end": 546
            },
            "directive": null,
            "start": 541,
            "end": 547
          }
        ],
        "start": 514,
        "end": 549
      },
      "expression": false,
      "start": 487,
      "end": 549
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
            "name": "combo",
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
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTemplateLiteralType",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "foo-",
                                      "cooked": "foo-"
                                    },
                                    "tail": false,
                                    "start": 633,
                                    "end": 640
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": true,
                                    "start": 646,
                                    "end": 648
                                  }
                                ],
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 640,
                                    "end": 646
                                  }
                                ],
                                "start": 633,
                                "end": 648
                              },
                              "start": 631,
                              "end": 648
                            },
                            "start": 630,
                            "end": 648
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "'a'",
                                  "start": 651,
                                  "end": 654
                                },
                                "start": 651,
                                "end": 654
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "'b'",
                                  "start": 657,
                                  "end": 660
                                },
                                "start": 657,
                                "end": 660
                              }
                            ],
                            "start": 651,
                            "end": 660
                          },
                          "start": 649,
                          "end": 660
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 629,
                        "end": 660
                      }
                    ],
                    "start": 627,
                    "end": 662
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTemplateLiteralType",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": false,
                                    "start": 671,
                                    "end": 674
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "-bar",
                                      "cooked": "-bar"
                                    },
                                    "tail": true,
                                    "start": 680,
                                    "end": 686
                                  }
                                ],
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 674,
                                    "end": 680
                                  }
                                ],
                                "start": 671,
                                "end": 686
                              },
                              "start": 669,
                              "end": 686
                            },
                            "start": 668,
                            "end": 686
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "'b'",
                                  "start": 689,
                                  "end": 692
                                },
                                "start": 689,
                                "end": 692
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "c",
                                  "raw": "'c'",
                                  "start": 695,
                                  "end": 698
                                },
                                "start": 695,
                                "end": 698
                              }
                            ],
                            "start": 689,
                            "end": 698
                          },
                          "start": 687,
                          "end": 698
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 667,
                        "end": 698
                      }
                    ],
                    "start": 665,
                    "end": 700
                  }
                ],
                "start": 627,
                "end": 700
              },
              "start": 625,
              "end": 700
            },
            "start": 620,
            "end": 700
          },
          "init": null,
          "definite": false,
          "start": 620,
          "end": 700
        }
      ],
      "declare": true,
      "start": 608,
      "end": 701
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 708,
            "end": 710
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null,
              "start": 713,
              "end": 718
            },
            "property": {
              "type": "Literal",
              "value": "foo-test",
              "raw": "'foo-test'",
              "start": 719,
              "end": 729
            },
            "optional": false,
            "computed": true,
            "start": 713,
            "end": 730
          },
          "definite": false,
          "start": 708,
          "end": 730
        }
      ],
      "declare": false,
      "start": 702,
      "end": 731
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 754
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null,
              "start": 757,
              "end": 762
            },
            "property": {
              "type": "Literal",
              "value": "test-bar",
              "raw": "'test-bar'",
              "start": 763,
              "end": 773
            },
            "optional": false,
            "computed": true,
            "start": 757,
            "end": 774
          },
          "definite": false,
          "start": 752,
          "end": 774
        }
      ],
      "declare": false,
      "start": 746,
      "end": 775
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 796,
            "end": 798
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 806
            },
            "property": {
              "type": "Literal",
              "value": "foo-test-bar",
              "raw": "'foo-test-bar'",
              "start": 807,
              "end": 821
            },
            "optional": false,
            "computed": true,
            "start": 801,
            "end": 822
          },
          "definite": false,
          "start": 796,
          "end": 822
        }
      ],
      "declare": false,
      "start": 790,
      "end": 823
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 878,
                "end": 884
              },
              "start": 876,
              "end": 884
            },
            "start": 873,
            "end": 884
          },
          "init": null,
          "definite": false,
          "start": 873,
          "end": 884
        }
      ],
      "declare": true,
      "start": 861,
      "end": 885
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 893,
            "end": 895
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 903
            },
            "property": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false,
                  "start": 904,
                  "end": 911
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 914,
                  "end": 916
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 911,
                  "end": 914
                }
              ],
              "start": 904,
              "end": 916
            },
            "optional": false,
            "computed": true,
            "start": 898,
            "end": 917
          },
          "definite": false,
          "start": 893,
          "end": 917
        }
      ],
      "declare": false,
      "start": 887,
      "end": 918
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": null,
            "start": 925,
            "end": 927
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 935
            },
            "property": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 936,
                  "end": 939
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-bar",
                    "cooked": "-bar"
                  },
                  "tail": true,
                  "start": 942,
                  "end": 948
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 939,
                  "end": 942
                }
              ],
              "start": 936,
              "end": 948
            },
            "optional": false,
            "computed": true,
            "start": 930,
            "end": 949
          },
          "definite": false,
          "start": 925,
          "end": 949
        }
      ],
      "declare": false,
      "start": 919,
      "end": 950
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x6",
            "optional": false,
            "typeAnnotation": null,
            "start": 957,
            "end": 959
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null,
              "start": 962,
              "end": 967
            },
            "property": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false,
                  "start": 968,
                  "end": 975
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-bar",
                    "cooked": "-bar"
                  },
                  "tail": true,
                  "start": 978,
                  "end": 984
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 975,
                  "end": 978
                }
              ],
              "start": 968,
              "end": 984
            },
            "optional": false,
            "computed": true,
            "start": 962,
            "end": 985
          },
          "definite": false,
          "start": 957,
          "end": 985
        }
      ],
      "declare": false,
      "start": 951,
      "end": 986
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
            "name": "combo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTemplateLiteralType",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": false,
                                    "start": 1014,
                                    "end": 1017
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "xxx",
                                      "cooked": "xxx"
                                    },
                                    "tail": false,
                                    "start": 1023,
                                    "end": 1029
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": true,
                                    "start": 1035,
                                    "end": 1037
                                  }
                                ],
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1017,
                                    "end": 1023
                                  },
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1029,
                                    "end": 1035
                                  }
                                ],
                                "start": 1014,
                                "end": 1037
                              },
                              {
                                "type": "TSTemplateLiteralType",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": false,
                                    "start": 1040,
                                    "end": 1043
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "yyy",
                                      "cooked": "yyy"
                                    },
                                    "tail": false,
                                    "start": 1049,
                                    "end": 1055
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": true,
                                    "start": 1061,
                                    "end": 1063
                                  }
                                ],
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1043,
                                    "end": 1049
                                  },
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1055,
                                    "end": 1061
                                  }
                                ],
                                "start": 1040,
                                "end": 1063
                              }
                            ],
                            "start": 1014,
                            "end": 1063
                          },
                          "start": 1012,
                          "end": 1063
                        },
                        "start": 1011,
                        "end": 1063
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1066,
                        "end": 1072
                      },
                      "start": 1064,
                      "end": 1072
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1010,
                    "end": 1072
                  }
                ],
                "start": 1008,
                "end": 1074
              },
              "start": 1006,
              "end": 1074
            },
            "start": 1000,
            "end": 1074
          },
          "init": null,
          "definite": false,
          "start": 1000,
          "end": 1074
        }
      ],
      "declare": true,
      "start": 988,
      "end": 1075
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1083,
            "end": 1085
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1088,
              "end": 1094
            },
            "property": {
              "type": "Literal",
              "value": "axxxbyyyc",
              "raw": "'axxxbyyyc'",
              "start": 1095,
              "end": 1106
            },
            "optional": false,
            "computed": true,
            "start": 1088,
            "end": 1107
          },
          "definite": false,
          "start": 1083,
          "end": 1107
        }
      ],
      "declare": false,
      "start": 1077,
      "end": 1108
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1115,
            "end": 1117
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1120,
              "end": 1126
            },
            "property": {
              "type": "Literal",
              "value": "ayyyxxxbc",
              "raw": "'ayyyxxxbc'",
              "start": 1127,
              "end": 1138
            },
            "optional": false,
            "computed": true,
            "start": 1120,
            "end": 1139
          },
          "definite": false,
          "start": 1115,
          "end": 1139
        }
      ],
      "declare": false,
      "start": 1109,
      "end": 1140
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1147,
            "end": 1149
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1152,
              "end": 1158
            },
            "property": {
              "type": "Literal",
              "value": "axxxbbbyc",
              "raw": "'axxxbbbyc'",
              "start": 1159,
              "end": 1170
            },
            "optional": false,
            "computed": true,
            "start": 1152,
            "end": 1171
          },
          "definite": false,
          "start": 1147,
          "end": 1171
        }
      ],
      "declare": false,
      "start": 1141,
      "end": 1172
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
            "name": "dom",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTemplateLiteralType",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "data",
                                  "cooked": "data"
                                },
                                "tail": false,
                                "start": 1263,
                                "end": 1270
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": true,
                                "start": 1276,
                                "end": 1278
                              }
                            ],
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1270,
                                "end": 1276
                              }
                            ],
                            "start": 1263,
                            "end": 1278
                          },
                          "start": 1261,
                          "end": 1278
                        },
                        "start": 1260,
                        "end": 1278
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1281,
                        "end": 1287
                      },
                      "start": 1279,
                      "end": 1287
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1259,
                    "end": 1287
                  }
                ],
                "start": 1257,
                "end": 1289
              },
              "start": 1255,
              "end": 1289
            },
            "start": 1252,
            "end": 1289
          },
          "init": null,
          "definite": false,
          "start": 1252,
          "end": 1289
        }
      ],
      "declare": true,
      "start": 1240,
      "end": 1290
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1297,
            "end": 1299
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dom",
              "optional": false,
              "typeAnnotation": null,
              "start": 1302,
              "end": 1305
            },
            "property": {
              "type": "Literal",
              "value": "data123",
              "raw": "'data123'",
              "start": 1306,
              "end": 1315
            },
            "optional": false,
            "computed": true,
            "start": 1302,
            "end": 1316
          },
          "definite": false,
          "start": 1297,
          "end": 1316
        }
      ],
      "declare": false,
      "start": 1291,
      "end": 1317
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1324,
            "end": 1326
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dom",
              "optional": false,
              "typeAnnotation": null,
              "start": 1329,
              "end": 1332
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "data123",
              "optional": false,
              "typeAnnotation": null,
              "start": 1333,
              "end": 1340
            },
            "optional": false,
            "computed": false,
            "start": 1329,
            "end": 1340
          },
          "definite": false,
          "start": 1324,
          "end": 1340
        }
      ],
      "declare": false,
      "start": 1318,
      "end": 1341
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null,
          "start": 1409,
          "end": 1412
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "data123",
                "optional": false,
                "typeAnnotation": null,
                "start": 1417,
                "end": 1424
              },
              "value": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1426,
                "end": 1433
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1417,
              "end": 1433
            }
          ],
          "start": 1415,
          "end": 1435
        },
        "start": 1409,
        "end": 1435
      },
      "directive": null,
      "start": 1409,
      "end": 1436
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null,
          "start": 1437,
          "end": 1440
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "date123",
                "optional": false,
                "typeAnnotation": null,
                "start": 1445,
                "end": 1452
              },
              "value": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1454,
                "end": 1461
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1445,
              "end": 1461
            }
          ],
          "start": 1443,
          "end": 1463
        },
        "start": 1437,
        "end": 1463
      },
      "directive": null,
      "start": 1437,
      "end": 1464
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Funcs",
        "optional": false,
        "typeAnnotation": null,
        "start": 1552,
        "end": 1557
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "s",
                          "cooked": "s"
                        },
                        "tail": false,
                        "start": 1572,
                        "end": 1576
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1582,
                        "end": 1584
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1576,
                        "end": 1582
                      }
                    ],
                    "start": 1572,
                    "end": 1584
                  },
                  "start": 1570,
                  "end": 1584
                },
                "start": 1567,
                "end": 1584
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1591,
                        "end": 1597
                      },
                      "start": 1589,
                      "end": 1597
                    },
                    "start": 1588,
                    "end": 1597
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1602,
                    "end": 1606
                  },
                  "start": 1599,
                  "end": 1606
                },
                "start": 1587,
                "end": 1606
              },
              "start": 1585,
              "end": 1606
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1566,
            "end": 1607
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "n",
                          "cooked": "n"
                        },
                        "tail": false,
                        "start": 1618,
                        "end": 1622
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1628,
                        "end": 1630
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1622,
                        "end": 1628
                      }
                    ],
                    "start": 1618,
                    "end": 1630
                  },
                  "start": 1616,
                  "end": 1630
                },
                "start": 1613,
                "end": 1630
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1637,
                        "end": 1643
                      },
                      "start": 1635,
                      "end": 1643
                    },
                    "start": 1634,
                    "end": 1643
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1648,
                    "end": 1652
                  },
                  "start": 1645,
                  "end": 1652
                },
                "start": 1633,
                "end": 1652
              },
              "start": 1631,
              "end": 1652
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1612,
            "end": 1653
          }
        ],
        "start": 1560,
        "end": 1655
      },
      "declare": false,
      "start": 1547,
      "end": 1655
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "funcs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Funcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1670,
                  "end": 1675
                },
                "typeArguments": null,
                "start": 1670,
                "end": 1675
              },
              "start": 1668,
              "end": 1675
            },
            "start": 1663,
            "end": 1675
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
                  "name": "sfoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1684,
                  "end": 1688
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1690,
                      "end": 1691
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1695,
                      "end": 1696
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1697,
                      "end": 1703
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1695,
                    "end": 1703
                  },
                  "id": null,
                  "generator": false,
                  "start": 1690,
                  "end": 1703
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1684,
                "end": 1703
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nfoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1723,
                  "end": 1727
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1729,
                      "end": 1730
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1734,
                      "end": 1735
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1738,
                      "end": 1739
                    },
                    "start": 1734,
                    "end": 1739
                  },
                  "id": null,
                  "generator": false,
                  "start": 1729,
                  "end": 1739
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1723,
                "end": 1739
              }
            ],
            "start": 1678,
            "end": 1759
          },
          "definite": false,
          "start": 1663,
          "end": 1759
        }
      ],
      "declare": false,
      "start": 1657,
      "end": 1759
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Duplicates",
        "optional": false,
        "typeAnnotation": null,
        "start": 1805,
        "end": 1815
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1830,
                        "end": 1836
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 1839,
                        "end": 1845
                      }
                    ],
                    "start": 1830,
                    "end": 1845
                  },
                  "start": 1828,
                  "end": 1845
                },
                "start": 1825,
                "end": 1845
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1848,
                "end": 1851
              },
              "start": 1846,
              "end": 1851
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1824,
            "end": 1852
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1873,
                        "end": 1879
                      },
                      {
                        "type": "TSSymbolKeyword",
                        "start": 1882,
                        "end": 1888
                      }
                    ],
                    "start": 1873,
                    "end": 1888
                  },
                  "start": 1871,
                  "end": 1888
                },
                "start": 1868,
                "end": 1888
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1891,
                "end": 1894
              },
              "start": 1889,
              "end": 1894
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1867,
            "end": 1895
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSSymbolKeyword",
                        "start": 1916,
                        "end": 1922
                      },
                      {
                        "type": "TSTemplateLiteralType",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "foo",
                              "cooked": "foo"
                            },
                            "tail": false,
                            "start": 1925,
                            "end": 1931
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 1937,
                            "end": 1939
                          }
                        ],
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1931,
                            "end": 1937
                          }
                        ],
                        "start": 1925,
                        "end": 1939
                      }
                    ],
                    "start": 1916,
                    "end": 1939
                  },
                  "start": 1914,
                  "end": 1939
                },
                "start": 1911,
                "end": 1939
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1942,
                "end": 1945
              },
              "start": 1940,
              "end": 1945
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1910,
            "end": 1946
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 1967,
                        "end": 1973
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1979,
                        "end": 1981
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1973,
                        "end": 1979
                      }
                    ],
                    "start": 1967,
                    "end": 1981
                  },
                  "start": 1965,
                  "end": 1981
                },
                "start": 1962,
                "end": 1981
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1984,
                "end": 1987
              },
              "start": 1982,
              "end": 1987
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1961,
            "end": 1988
          }
        ],
        "start": 1818,
        "end": 2000
      },
      "declare": false,
      "start": 1800,
      "end": 2000
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Conflicting",
        "optional": false,
        "typeAnnotation": null,
        "start": 2048,
        "end": 2059
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false,
                        "start": 2074,
                        "end": 2078
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2084,
                        "end": 2086
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2078,
                        "end": 2084
                      }
                    ],
                    "start": 2074,
                    "end": 2086
                  },
                  "start": 2072,
                  "end": 2086
                },
                "start": 2069,
                "end": 2086
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 2089,
                  "end": 2092
                },
                "start": 2089,
                "end": 2092
              },
              "start": 2087,
              "end": 2092
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2068,
            "end": 2093
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 2104,
                        "end": 2107
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": true,
                        "start": 2113,
                        "end": 2116
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2107,
                        "end": 2113
                      }
                    ],
                    "start": 2104,
                    "end": 2116
                  },
                  "start": 2102,
                  "end": 2116
                },
                "start": 2099,
                "end": 2116
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 2119,
                  "end": 2122
                },
                "start": 2119,
                "end": 2122
              },
              "start": 2117,
              "end": 2122
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2098,
            "end": 2123
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false,
                        "start": 2134,
                        "end": 2138
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": true,
                        "start": 2144,
                        "end": 2147
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2138,
                        "end": 2144
                      }
                    ],
                    "start": 2134,
                    "end": 2147
                  },
                  "start": 2132,
                  "end": 2147
                },
                "start": 2129,
                "end": 2147
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "'c'",
                  "start": 2150,
                  "end": 2153
                },
                "start": 2150,
                "end": 2153
              },
              "start": 2148,
              "end": 2153
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2128,
            "end": 2154
          }
        ],
        "start": 2062,
        "end": 2166
      },
      "declare": false,
      "start": 2043,
      "end": 2166
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Invalid",
        "optional": false,
        "typeAnnotation": null,
        "start": 2202,
        "end": 2209
      },
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
              "start": 2210,
              "end": 2211
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2220,
              "end": 2226
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2210,
            "end": 2226
          }
        ],
        "start": 2209,
        "end": 2227
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "'a'",
                          "start": 2242,
                          "end": 2245
                        },
                        "start": 2242,
                        "end": 2245
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "'b'",
                          "start": 2248,
                          "end": 2251
                        },
                        "start": 2248,
                        "end": 2251
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "c",
                          "raw": "'c'",
                          "start": 2254,
                          "end": 2257
                        },
                        "start": 2254,
                        "end": 2257
                      }
                    ],
                    "start": 2242,
                    "end": 2257
                  },
                  "start": 2240,
                  "end": 2257
                },
                "start": 2237,
                "end": 2257
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2260,
                "end": 2266
              },
              "start": 2258,
              "end": 2266
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2236,
            "end": 2267
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2288,
                          "end": 2289
                        },
                        "typeArguments": null,
                        "start": 2288,
                        "end": 2289
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 2292,
                        "end": 2298
                      }
                    ],
                    "start": 2288,
                    "end": 2298
                  },
                  "start": 2286,
                  "end": 2298
                },
                "start": 2283,
                "end": 2298
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2301,
                "end": 2307
              },
              "start": 2299,
              "end": 2307
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2282,
            "end": 2308
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2329,
                      "end": 2334
                    },
                    "typeArguments": null,
                    "start": 2329,
                    "end": 2334
                  },
                  "start": 2327,
                  "end": 2334
                },
                "start": 2324,
                "end": 2334
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2337,
                "end": 2343
              },
              "start": 2335,
              "end": 2343
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2323,
            "end": 2344
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
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
                          "start": 2365,
                          "end": 2366
                        },
                        "typeArguments": null,
                        "start": 2365,
                        "end": 2366
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 2369,
                        "end": 2375
                      }
                    ],
                    "start": 2365,
                    "end": 2375
                  },
                  "start": 2363,
                  "end": 2375
                },
                "start": 2360,
                "end": 2375
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2378,
                "end": 2384
              },
              "start": 2376,
              "end": 2384
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2359,
            "end": 2385
          }
        ],
        "start": 2230,
        "end": 2397
      },
      "declare": false,
      "start": 2197,
      "end": 2397
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2442,
        "end": 2446
      },
      "typeParameters": null,
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
              "name": "__tag1__",
              "optional": false,
              "typeAnnotation": null,
              "start": 2451,
              "end": 2459
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2461,
                "end": 2465
              },
              "start": 2459,
              "end": 2465
            },
            "accessibility": null,
            "static": false,
            "start": 2451,
            "end": 2465
          }
        ],
        "start": 2449,
        "end": 2467
      },
      "declare": false,
      "start": 2437,
      "end": 2468
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2474,
        "end": 2478
      },
      "typeParameters": null,
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
              "name": "__tag2__",
              "optional": false,
              "typeAnnotation": null,
              "start": 2483,
              "end": 2491
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2493,
                "end": 2497
              },
              "start": 2491,
              "end": 2497
            },
            "accessibility": null,
            "static": false,
            "start": 2483,
            "end": 2497
          }
        ],
        "start": 2481,
        "end": 2499
      },
      "declare": false,
      "start": 2469,
      "end": 2500
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TaggedString1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2507,
        "end": 2520
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2523,
            "end": 2529
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tag1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2532,
              "end": 2536
            },
            "typeArguments": null,
            "start": 2532,
            "end": 2536
          }
        ],
        "start": 2523,
        "end": 2536
      },
      "declare": false,
      "start": 2502,
      "end": 2537
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TaggedString2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2543,
        "end": 2556
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2559,
            "end": 2565
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tag2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2568,
              "end": 2572
            },
            "typeArguments": null,
            "start": 2568,
            "end": 2572
          }
        ],
        "start": 2559,
        "end": 2572
      },
      "declare": false,
      "start": 2538,
      "end": 2573
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
            "name": "s0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2591,
                "end": 2597
              },
              "start": 2589,
              "end": 2597
            },
            "start": 2587,
            "end": 2597
          },
          "init": null,
          "definite": false,
          "start": 2587,
          "end": 2597
        }
      ],
      "declare": true,
      "start": 2575,
      "end": 2598
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TaggedString1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2615,
                  "end": 2628
                },
                "typeArguments": null,
                "start": 2615,
                "end": 2628
              },
              "start": 2613,
              "end": 2628
            },
            "start": 2611,
            "end": 2628
          },
          "init": null,
          "definite": false,
          "start": 2611,
          "end": 2628
        }
      ],
      "declare": true,
      "start": 2599,
      "end": 2629
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TaggedString2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2646,
                  "end": 2659
                },
                "typeArguments": null,
                "start": 2646,
                "end": 2659
              },
              "start": 2644,
              "end": 2659
            },
            "start": 2642,
            "end": 2659
          },
          "init": null,
          "definite": false,
          "start": 2642,
          "end": 2659
        }
      ],
      "declare": true,
      "start": 2630,
      "end": 2660
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
            "name": "s3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TaggedString1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2677,
                      "end": 2690
                    },
                    "typeArguments": null,
                    "start": 2677,
                    "end": 2690
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TaggedString2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2693,
                      "end": 2706
                    },
                    "typeArguments": null,
                    "start": 2693,
                    "end": 2706
                  }
                ],
                "start": 2677,
                "end": 2706
              },
              "start": 2675,
              "end": 2706
            },
            "start": 2673,
            "end": 2706
          },
          "init": null,
          "definite": false,
          "start": 2673,
          "end": 2706
        }
      ],
      "declare": true,
      "start": 2661,
      "end": 2707
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
            "name": "s4",
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
                      "name": "TaggedString1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2724,
                      "end": 2737
                    },
                    "typeArguments": null,
                    "start": 2724,
                    "end": 2737
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TaggedString2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2740,
                      "end": 2753
                    },
                    "typeArguments": null,
                    "start": 2740,
                    "end": 2753
                  }
                ],
                "start": 2724,
                "end": 2753
              },
              "start": 2722,
              "end": 2753
            },
            "start": 2720,
            "end": 2753
          },
          "init": null,
          "definite": false,
          "start": 2720,
          "end": 2753
        }
      ],
      "declare": true,
      "start": 2708,
      "end": 2754
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2766,
        "end": 2768
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TaggedString1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2777,
                      "end": 2790
                    },
                    "typeArguments": null,
                    "start": 2777,
                    "end": 2790
                  },
                  "start": 2775,
                  "end": 2790
                },
                "start": 2772,
                "end": 2790
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2793,
                "end": 2799
              },
              "start": 2791,
              "end": 2799
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2771,
            "end": 2799
          }
        ],
        "start": 2769,
        "end": 2801
      },
      "declare": false,
      "start": 2756,
      "end": 2801
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2812,
        "end": 2814
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TaggedString2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2823,
                      "end": 2836
                    },
                    "typeArguments": null,
                    "start": 2823,
                    "end": 2836
                  },
                  "start": 2821,
                  "end": 2836
                },
                "start": 2818,
                "end": 2836
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2839,
                "end": 2845
              },
              "start": 2837,
              "end": 2845
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2817,
            "end": 2845
          }
        ],
        "start": 2815,
        "end": 2847
      },
      "declare": false,
      "start": 2802,
      "end": 2847
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2858,
        "end": 2860
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TaggedString1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2869,
                          "end": 2882
                        },
                        "typeArguments": null,
                        "start": 2869,
                        "end": 2882
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TaggedString2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2885,
                          "end": 2898
                        },
                        "typeArguments": null,
                        "start": 2885,
                        "end": 2898
                      }
                    ],
                    "start": 2869,
                    "end": 2898
                  },
                  "start": 2867,
                  "end": 2898
                },
                "start": 2864,
                "end": 2898
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2901,
                "end": 2907
              },
              "start": 2899,
              "end": 2907
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2863,
            "end": 2907
          }
        ],
        "start": 2861,
        "end": 2909
      },
      "declare": false,
      "start": 2848,
      "end": 2909
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2920,
        "end": 2922
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
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
                          "name": "TaggedString1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2931,
                          "end": 2944
                        },
                        "typeArguments": null,
                        "start": 2931,
                        "end": 2944
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TaggedString2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2947,
                          "end": 2960
                        },
                        "typeArguments": null,
                        "start": 2947,
                        "end": 2960
                      }
                    ],
                    "start": 2931,
                    "end": 2960
                  },
                  "start": 2929,
                  "end": 2960
                },
                "start": 2926,
                "end": 2960
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2963,
                "end": 2969
              },
              "start": 2961,
              "end": 2969
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2925,
            "end": 2969
          }
        ],
        "start": 2923,
        "end": 2971
      },
      "declare": false,
      "start": 2910,
      "end": 2971
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2989,
                  "end": 2991
                },
                "typeArguments": null,
                "start": 2989,
                "end": 2991
              },
              "start": 2987,
              "end": 2991
            },
            "start": 2985,
            "end": 2991
          },
          "init": null,
          "definite": false,
          "start": 2985,
          "end": 2991
        }
      ],
      "declare": true,
      "start": 2973,
      "end": 2992
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3009,
                  "end": 3011
                },
                "typeArguments": null,
                "start": 3009,
                "end": 3011
              },
              "start": 3007,
              "end": 3011
            },
            "start": 3005,
            "end": 3011
          },
          "init": null,
          "definite": false,
          "start": 3005,
          "end": 3011
        }
      ],
      "declare": true,
      "start": 2993,
      "end": 3012
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
            "name": "i3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3029,
                  "end": 3031
                },
                "typeArguments": null,
                "start": 3029,
                "end": 3031
              },
              "start": 3027,
              "end": 3031
            },
            "start": 3025,
            "end": 3031
          },
          "init": null,
          "definite": false,
          "start": 3025,
          "end": 3031
        }
      ],
      "declare": true,
      "start": 3013,
      "end": 3032
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
            "name": "i4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3049,
                  "end": 3051
                },
                "typeArguments": null,
                "start": 3049,
                "end": 3051
              },
              "start": 3047,
              "end": 3051
            },
            "start": 3045,
            "end": 3051
          },
          "init": null,
          "definite": false,
          "start": 3045,
          "end": 3051
        }
      ],
      "declare": true,
      "start": 3033,
      "end": 3052
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3054,
          "end": 3056
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3057,
          "end": 3059
        },
        "optional": false,
        "computed": true,
        "start": 3054,
        "end": 3060
      },
      "directive": null,
      "start": 3054,
      "end": 3061
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3072,
          "end": 3074
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3075,
          "end": 3077
        },
        "optional": false,
        "computed": true,
        "start": 3072,
        "end": 3078
      },
      "directive": null,
      "start": 3072,
      "end": 3079
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3080,
          "end": 3082
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3083,
          "end": 3085
        },
        "optional": false,
        "computed": true,
        "start": 3080,
        "end": 3086
      },
      "directive": null,
      "start": 3080,
      "end": 3087
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3098,
          "end": 3100
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3101,
          "end": 3103
        },
        "optional": false,
        "computed": true,
        "start": 3098,
        "end": 3104
      },
      "directive": null,
      "start": 3098,
      "end": 3105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3116,
          "end": 3118
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3119,
          "end": 3121
        },
        "optional": false,
        "computed": true,
        "start": 3116,
        "end": 3122
      },
      "directive": null,
      "start": 3116,
      "end": 3123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3125,
          "end": 3127
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3128,
          "end": 3130
        },
        "optional": false,
        "computed": true,
        "start": 3125,
        "end": 3131
      },
      "directive": null,
      "start": 3125,
      "end": 3132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3143,
          "end": 3145
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3146,
          "end": 3148
        },
        "optional": false,
        "computed": true,
        "start": 3143,
        "end": 3149
      },
      "directive": null,
      "start": 3143,
      "end": 3150
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3161,
          "end": 3163
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3164,
          "end": 3166
        },
        "optional": false,
        "computed": true,
        "start": 3161,
        "end": 3167
      },
      "directive": null,
      "start": 3161,
      "end": 3168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3169,
          "end": 3171
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3172,
          "end": 3174
        },
        "optional": false,
        "computed": true,
        "start": 3169,
        "end": 3175
      },
      "directive": null,
      "start": 3169,
      "end": 3176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3187,
          "end": 3189
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3190,
          "end": 3192
        },
        "optional": false,
        "computed": true,
        "start": 3187,
        "end": 3193
      },
      "directive": null,
      "start": 3187,
      "end": 3194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3196,
          "end": 3198
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3199,
          "end": 3201
        },
        "optional": false,
        "computed": true,
        "start": 3196,
        "end": 3202
      },
      "directive": null,
      "start": 3196,
      "end": 3203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3214,
          "end": 3216
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3217,
          "end": 3219
        },
        "optional": false,
        "computed": true,
        "start": 3214,
        "end": 3220
      },
      "directive": null,
      "start": 3214,
      "end": 3221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3222,
          "end": 3224
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3225,
          "end": 3227
        },
        "optional": false,
        "computed": true,
        "start": 3222,
        "end": 3228
      },
      "directive": null,
      "start": 3222,
      "end": 3229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3230,
          "end": 3232
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3233,
          "end": 3235
        },
        "optional": false,
        "computed": true,
        "start": 3230,
        "end": 3236
      },
      "directive": null,
      "start": 3230,
      "end": 3237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3238,
          "end": 3240
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3241,
          "end": 3243
        },
        "optional": false,
        "computed": true,
        "start": 3238,
        "end": 3244
      },
      "directive": null,
      "start": 3238,
      "end": 3245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3247,
          "end": 3249
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3250,
          "end": 3252
        },
        "optional": false,
        "computed": true,
        "start": 3247,
        "end": 3253
      },
      "directive": null,
      "start": 3247,
      "end": 3254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3265,
          "end": 3267
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3268,
          "end": 3270
        },
        "optional": false,
        "computed": true,
        "start": 3265,
        "end": 3271
      },
      "directive": null,
      "start": 3265,
      "end": 3272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3283,
          "end": 3285
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3286,
          "end": 3288
        },
        "optional": false,
        "computed": true,
        "start": 3283,
        "end": 3289
      },
      "directive": null,
      "start": 3283,
      "end": 3290
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3301,
          "end": 3303
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3304,
          "end": 3306
        },
        "optional": false,
        "computed": true,
        "start": 3301,
        "end": 3307
      },
      "directive": null,
      "start": 3301,
      "end": 3308
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3319,
          "end": 3321
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3322,
          "end": 3324
        },
        "optional": false,
        "computed": true,
        "start": 3319,
        "end": 3325
      },
      "directive": null,
      "start": 3319,
      "end": 3326
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3328,
          "end": 3330
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3333,
          "end": 3335
        },
        "start": 3328,
        "end": 3335
      },
      "directive": null,
      "start": 3328,
      "end": 3336
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3347,
          "end": 3349
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3352,
          "end": 3354
        },
        "start": 3347,
        "end": 3354
      },
      "directive": null,
      "start": 3347,
      "end": 3355
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3356,
          "end": 3358
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3361,
          "end": 3363
        },
        "start": 3356,
        "end": 3363
      },
      "directive": null,
      "start": 3356,
      "end": 3364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3376,
          "end": 3378
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3381,
          "end": 3383
        },
        "start": 3376,
        "end": 3383
      },
      "directive": null,
      "start": 3376,
      "end": 3384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3395,
          "end": 3397
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3400,
          "end": 3402
        },
        "start": 3395,
        "end": 3402
      },
      "directive": null,
      "start": 3395,
      "end": 3403
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3404,
          "end": 3406
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3409,
          "end": 3411
        },
        "start": 3404,
        "end": 3411
      },
      "directive": null,
      "start": 3404,
      "end": 3412
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3424,
          "end": 3426
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3429,
          "end": 3431
        },
        "start": 3424,
        "end": 3431
      },
      "directive": null,
      "start": 3424,
      "end": 3432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3443,
          "end": 3445
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3448,
          "end": 3450
        },
        "start": 3443,
        "end": 3450
      },
      "directive": null,
      "start": 3443,
      "end": 3451
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3462,
          "end": 3464
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3467,
          "end": 3469
        },
        "start": 3462,
        "end": 3469
      },
      "directive": null,
      "start": 3462,
      "end": 3470
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3482,
          "end": 3484
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3487,
          "end": 3489
        },
        "start": 3482,
        "end": 3489
      },
      "directive": null,
      "start": 3482,
      "end": 3490
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3491,
          "end": 3493
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3496,
          "end": 3498
        },
        "start": 3491,
        "end": 3498
      },
      "directive": null,
      "start": 3491,
      "end": 3499
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3500,
          "end": 3502
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3505,
          "end": 3507
        },
        "start": 3500,
        "end": 3507
      },
      "directive": null,
      "start": 3500,
      "end": 3508
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TaggedString1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3534,
                              "end": 3547
                            },
                            "typeArguments": null,
                            "start": 3534,
                            "end": 3547
                          },
                          "start": 3532,
                          "end": 3547
                        },
                        "start": 3529,
                        "end": 3547
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3550,
                        "end": 3556
                      },
                      "start": 3548,
                      "end": 3556
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 3528,
                    "end": 3556
                  }
                ],
                "start": 3526,
                "end": 3558
              },
              "start": 3524,
              "end": 3558
            },
            "start": 3522,
            "end": 3558
          },
          "init": null,
          "definite": false,
          "start": 3522,
          "end": 3558
        }
      ],
      "declare": true,
      "start": 3510,
      "end": 3559
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TaggedString2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3584,
                              "end": 3597
                            },
                            "typeArguments": null,
                            "start": 3584,
                            "end": 3597
                          },
                          "start": 3582,
                          "end": 3597
                        },
                        "start": 3579,
                        "end": 3597
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3600,
                        "end": 3606
                      },
                      "start": 3598,
                      "end": 3606
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 3578,
                    "end": 3606
                  }
                ],
                "start": 3576,
                "end": 3608
              },
              "start": 3574,
              "end": 3608
            },
            "start": 3572,
            "end": 3608
          },
          "init": null,
          "definite": false,
          "start": 3572,
          "end": 3608
        }
      ],
      "declare": true,
      "start": 3560,
      "end": 3609
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TaggedString1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3634,
                                  "end": 3647
                                },
                                "typeArguments": null,
                                "start": 3634,
                                "end": 3647
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TaggedString2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3650,
                                  "end": 3663
                                },
                                "typeArguments": null,
                                "start": 3650,
                                "end": 3663
                              }
                            ],
                            "start": 3634,
                            "end": 3663
                          },
                          "start": 3632,
                          "end": 3663
                        },
                        "start": 3629,
                        "end": 3663
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3666,
                        "end": 3672
                      },
                      "start": 3664,
                      "end": 3672
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 3628,
                    "end": 3672
                  }
                ],
                "start": 3626,
                "end": 3674
              },
              "start": 3624,
              "end": 3674
            },
            "start": 3622,
            "end": 3674
          },
          "init": null,
          "definite": false,
          "start": 3622,
          "end": 3674
        }
      ],
      "declare": true,
      "start": 3610,
      "end": 3675
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
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
                                  "name": "TaggedString1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3700,
                                  "end": 3713
                                },
                                "typeArguments": null,
                                "start": 3700,
                                "end": 3713
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TaggedString2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3716,
                                  "end": 3729
                                },
                                "typeArguments": null,
                                "start": 3716,
                                "end": 3729
                              }
                            ],
                            "start": 3700,
                            "end": 3729
                          },
                          "start": 3698,
                          "end": 3729
                        },
                        "start": 3695,
                        "end": 3729
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3732,
                        "end": 3738
                      },
                      "start": 3730,
                      "end": 3738
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 3694,
                    "end": 3738
                  }
                ],
                "start": 3692,
                "end": 3740
              },
              "start": 3690,
              "end": 3740
            },
            "start": 3688,
            "end": 3740
          },
          "init": null,
          "definite": false,
          "start": 3688,
          "end": 3740
        }
      ],
      "declare": true,
      "start": 3676,
      "end": 3741
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3743,
          "end": 3745
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3746,
          "end": 3748
        },
        "optional": false,
        "computed": true,
        "start": 3743,
        "end": 3749
      },
      "directive": null,
      "start": 3743,
      "end": 3750
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3761,
          "end": 3763
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3764,
          "end": 3766
        },
        "optional": false,
        "computed": true,
        "start": 3761,
        "end": 3767
      },
      "directive": null,
      "start": 3761,
      "end": 3768
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3769,
          "end": 3771
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3772,
          "end": 3774
        },
        "optional": false,
        "computed": true,
        "start": 3769,
        "end": 3775
      },
      "directive": null,
      "start": 3769,
      "end": 3776
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3787,
          "end": 3789
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3790,
          "end": 3792
        },
        "optional": false,
        "computed": true,
        "start": 3787,
        "end": 3793
      },
      "directive": null,
      "start": 3787,
      "end": 3794
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3805,
          "end": 3807
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3808,
          "end": 3810
        },
        "optional": false,
        "computed": true,
        "start": 3805,
        "end": 3811
      },
      "directive": null,
      "start": 3805,
      "end": 3812
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3814,
          "end": 3816
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3817,
          "end": 3819
        },
        "optional": false,
        "computed": true,
        "start": 3814,
        "end": 3820
      },
      "directive": null,
      "start": 3814,
      "end": 3821
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3832,
          "end": 3834
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3835,
          "end": 3837
        },
        "optional": false,
        "computed": true,
        "start": 3832,
        "end": 3838
      },
      "directive": null,
      "start": 3832,
      "end": 3839
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3850,
          "end": 3852
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3853,
          "end": 3855
        },
        "optional": false,
        "computed": true,
        "start": 3850,
        "end": 3856
      },
      "directive": null,
      "start": 3850,
      "end": 3857
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3858,
          "end": 3860
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3861,
          "end": 3863
        },
        "optional": false,
        "computed": true,
        "start": 3858,
        "end": 3864
      },
      "directive": null,
      "start": 3858,
      "end": 3865
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3876,
          "end": 3878
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3879,
          "end": 3881
        },
        "optional": false,
        "computed": true,
        "start": 3876,
        "end": 3882
      },
      "directive": null,
      "start": 3876,
      "end": 3883
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3885,
          "end": 3887
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3888,
          "end": 3890
        },
        "optional": false,
        "computed": true,
        "start": 3885,
        "end": 3891
      },
      "directive": null,
      "start": 3885,
      "end": 3892
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3903,
          "end": 3905
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3906,
          "end": 3908
        },
        "optional": false,
        "computed": true,
        "start": 3903,
        "end": 3909
      },
      "directive": null,
      "start": 3903,
      "end": 3910
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3911,
          "end": 3913
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3914,
          "end": 3916
        },
        "optional": false,
        "computed": true,
        "start": 3911,
        "end": 3917
      },
      "directive": null,
      "start": 3911,
      "end": 3918
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3919,
          "end": 3921
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3922,
          "end": 3924
        },
        "optional": false,
        "computed": true,
        "start": 3919,
        "end": 3925
      },
      "directive": null,
      "start": 3919,
      "end": 3926
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3927,
          "end": 3929
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3930,
          "end": 3932
        },
        "optional": false,
        "computed": true,
        "start": 3927,
        "end": 3933
      },
      "directive": null,
      "start": 3927,
      "end": 3934
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3936,
          "end": 3938
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3939,
          "end": 3941
        },
        "optional": false,
        "computed": true,
        "start": 3936,
        "end": 3942
      },
      "directive": null,
      "start": 3936,
      "end": 3943
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3954,
          "end": 3956
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3957,
          "end": 3959
        },
        "optional": false,
        "computed": true,
        "start": 3954,
        "end": 3960
      },
      "directive": null,
      "start": 3954,
      "end": 3961
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3972,
          "end": 3974
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3975,
          "end": 3977
        },
        "optional": false,
        "computed": true,
        "start": 3972,
        "end": 3978
      },
      "directive": null,
      "start": 3972,
      "end": 3979
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3990,
          "end": 3992
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3993,
          "end": 3995
        },
        "optional": false,
        "computed": true,
        "start": 3990,
        "end": 3996
      },
      "directive": null,
      "start": 3990,
      "end": 3997
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4008,
          "end": 4010
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4011,
          "end": 4013
        },
        "optional": false,
        "computed": true,
        "start": 4008,
        "end": 4014
      },
      "directive": null,
      "start": 4008,
      "end": 4015
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4017,
          "end": 4019
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4022,
          "end": 4024
        },
        "start": 4017,
        "end": 4024
      },
      "directive": null,
      "start": 4017,
      "end": 4025
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4026,
          "end": 4028
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4031,
          "end": 4033
        },
        "start": 4026,
        "end": 4033
      },
      "directive": null,
      "start": 4026,
      "end": 4034
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4035,
          "end": 4037
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4040,
          "end": 4042
        },
        "start": 4035,
        "end": 4042
      },
      "directive": null,
      "start": 4035,
      "end": 4043
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4045,
          "end": 4047
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4050,
          "end": 4052
        },
        "start": 4045,
        "end": 4052
      },
      "directive": null,
      "start": 4045,
      "end": 4053
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4054,
          "end": 4056
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4059,
          "end": 4061
        },
        "start": 4054,
        "end": 4061
      },
      "directive": null,
      "start": 4054,
      "end": 4062
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4063,
          "end": 4065
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4068,
          "end": 4070
        },
        "start": 4063,
        "end": 4070
      },
      "directive": null,
      "start": 4063,
      "end": 4071
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4073,
          "end": 4075
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4078,
          "end": 4080
        },
        "start": 4073,
        "end": 4080
      },
      "directive": null,
      "start": 4073,
      "end": 4081
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4082,
          "end": 4084
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4087,
          "end": 4089
        },
        "start": 4082,
        "end": 4089
      },
      "directive": null,
      "start": 4082,
      "end": 4090
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4091,
          "end": 4093
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4096,
          "end": 4098
        },
        "start": 4091,
        "end": 4098
      },
      "directive": null,
      "start": 4091,
      "end": 4099
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4101,
          "end": 4103
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4106,
          "end": 4108
        },
        "start": 4101,
        "end": 4108
      },
      "directive": null,
      "start": 4101,
      "end": 4109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4110,
          "end": 4112
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4115,
          "end": 4117
        },
        "start": 4110,
        "end": 4117
      },
      "directive": null,
      "start": 4110,
      "end": 4118
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4119,
          "end": 4121
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4124,
          "end": 4126
        },
        "start": 4119,
        "end": 4126
      },
      "directive": null,
      "start": 4119,
      "end": 4127
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj10",
            "optional": false,
            "typeAnnotation": null,
            "start": 4194,
            "end": 4199
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 4209,
                  "end": 4212
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 4215,
                    "end": 4216
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4220,
                      "end": 4225
                    },
                    "typeArguments": null,
                    "start": 4220,
                    "end": 4225
                  },
                  "start": 4215,
                  "end": 4225
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4208,
                "end": 4225
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 4232,
                    "end": 4235
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 4238,
                    "end": 4241
                  },
                  "start": 4232,
                  "end": 4241
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4244,
                    "end": 4245
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4249,
                      "end": 4254
                    },
                    "typeArguments": null,
                    "start": 4249,
                    "end": 4254
                  },
                  "start": 4244,
                  "end": 4254
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4231,
                "end": 4254
              }
            ],
            "start": 4202,
            "end": 4257
          },
          "definite": false,
          "start": 4194,
          "end": 4257
        }
      ],
      "declare": false,
      "start": 4188,
      "end": 4258
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj11",
            "optional": false,
            "typeAnnotation": null,
            "start": 4266,
            "end": 4271
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4281,
                  "end": 4282
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 4285,
                    "end": 4286
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4290,
                      "end": 4295
                    },
                    "typeArguments": null,
                    "start": 4290,
                    "end": 4295
                  },
                  "start": 4285,
                  "end": 4295
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4280,
                "end": 4295
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4302,
                    "end": 4303
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 4306,
                    "end": 4307
                  },
                  "start": 4302,
                  "end": 4307
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 4310,
                    "end": 4311
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4315,
                      "end": 4320
                    },
                    "typeArguments": null,
                    "start": 4315,
                    "end": 4320
                  },
                  "start": 4310,
                  "end": 4320
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4301,
                "end": 4320
              }
            ],
            "start": 4274,
            "end": 4323
          },
          "definite": false,
          "start": 4266,
          "end": 4323
        }
      ],
      "declare": false,
      "start": 4260,
      "end": 4324
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj12",
            "optional": false,
            "typeAnnotation": null,
            "start": 4332,
            "end": 4337
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
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4347,
                  "end": 4350
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 4353,
                    "end": 4354
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4358,
                      "end": 4363
                    },
                    "typeArguments": null,
                    "start": 4358,
                    "end": 4363
                  },
                  "start": 4353,
                  "end": 4363
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4346,
                "end": 4363
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4370,
                    "end": 4376
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4370,
                  "end": 4378
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 4381,
                    "end": 4382
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4386,
                      "end": 4391
                    },
                    "typeArguments": null,
                    "start": 4386,
                    "end": 4391
                  },
                  "start": 4381,
                  "end": 4391
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4369,
                "end": 4391
              }
            ],
            "start": 4340,
            "end": 4394
          },
          "definite": false,
          "start": 4332,
          "end": 4394
        }
      ],
      "declare": false,
      "start": 4326,
      "end": 4395
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj13",
            "optional": false,
            "typeAnnotation": null,
            "start": 4403,
            "end": 4408
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 4418,
                  "end": 4421
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 4424,
                    "end": 4425
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4429,
                      "end": 4434
                    },
                    "typeArguments": null,
                    "start": 4429,
                    "end": 4434
                  },
                  "start": 4424,
                  "end": 4434
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4417,
                "end": 4434
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 4441,
                    "end": 4444
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 4447,
                    "end": 4450
                  },
                  "start": 4441,
                  "end": 4450
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4453,
                    "end": 4454
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4458,
                      "end": 4463
                    },
                    "typeArguments": null,
                    "start": 4458,
                    "end": 4463
                  },
                  "start": 4453,
                  "end": 4463
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4440,
                "end": 4463
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4470,
                  "end": 4471
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 4474,
                    "end": 4475
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4479,
                      "end": 4484
                    },
                    "typeArguments": null,
                    "start": 4479,
                    "end": 4484
                  },
                  "start": 4474,
                  "end": 4484
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4469,
                "end": 4484
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4491,
                    "end": 4492
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 4495,
                    "end": 4496
                  },
                  "start": 4491,
                  "end": 4496
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 4499,
                    "end": 4500
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4504,
                      "end": 4509
                    },
                    "typeArguments": null,
                    "start": 4504,
                    "end": 4509
                  },
                  "start": 4499,
                  "end": 4509
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4490,
                "end": 4509
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4516,
                  "end": 4519
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 4522,
                    "end": 4523
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4527,
                      "end": 4532
                    },
                    "typeArguments": null,
                    "start": 4527,
                    "end": 4532
                  },
                  "start": 4522,
                  "end": 4532
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4515,
                "end": 4532
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4539,
                    "end": 4545
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4539,
                  "end": 4547
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 4550,
                    "end": 4551
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4555,
                      "end": 4560
                    },
                    "typeArguments": null,
                    "start": 4555,
                    "end": 4560
                  },
                  "start": 4550,
                  "end": 4560
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4538,
                "end": 4560
              }
            ],
            "start": 4411,
            "end": 4563
          },
          "definite": false,
          "start": 4403,
          "end": 4563
        }
      ],
      "declare": false,
      "start": 4397,
      "end": 4564
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "system",
            "optional": false,
            "typeAnnotation": null,
            "start": 4594,
            "end": 4600
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 4603,
              "end": 4609
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "system",
                "raw": "'system'",
                "start": 4610,
                "end": 4618
              }
            ],
            "optional": false,
            "start": 4603,
            "end": 4619
          },
          "definite": false,
          "start": 4594,
          "end": 4619
        }
      ],
      "declare": false,
      "start": 4588,
      "end": 4620
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeSytePlugin",
            "optional": false,
            "typeAnnotation": null,
            "start": 4627,
            "end": 4641
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 4644,
              "end": 4650
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "SomeSytePlugin",
                "raw": "'SomeSytePlugin'",
                "start": 4651,
                "end": 4667
              }
            ],
            "optional": false,
            "start": 4644,
            "end": 4668
          },
          "definite": false,
          "start": 4627,
          "end": 4668
        }
      ],
      "declare": false,
      "start": 4621,
      "end": 4669
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Plugs",
        "optional": false,
        "typeAnnotation": null,
        "start": 4681,
        "end": 4686
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 4699,
                    "end": 4705
                  },
                  "start": 4697,
                  "end": 4705
                },
                "start": 4694,
                "end": 4705
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4712,
                      "end": 4716
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4718,
                        "end": 4721
                      },
                      "start": 4716,
                      "end": 4721
                    },
                    "value": null,
                    "start": 4709,
                    "end": 4721
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 4726,
                    "end": 4733
                  },
                  "start": 4723,
                  "end": 4733
                },
                "start": 4708,
                "end": 4733
              },
              "start": 4706,
              "end": 4733
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 4693,
            "end": 4734
          }
        ],
        "start": 4687,
        "end": 4736
      },
      "declare": false,
      "start": 4671,
      "end": 4736
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "plugins",
            "optional": false,
            "typeAnnotation": null,
            "start": 4744,
            "end": 4751
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "user",
                  "raw": "\"user\"",
                  "start": 4760,
                  "end": 4766
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 4768,
                    "end": 4770
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Plugs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4774,
                      "end": 4779
                    },
                    "typeArguments": null,
                    "start": 4774,
                    "end": 4779
                  },
                  "start": 4768,
                  "end": 4779
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4760,
                "end": 4779
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "system",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4786,
                  "end": 4792
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 4795,
                    "end": 4797
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Plugs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4801,
                      "end": 4806
                    },
                    "typeArguments": null,
                    "start": 4801,
                    "end": 4806
                  },
                  "start": 4795,
                  "end": 4806
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4785,
                "end": 4806
              }
            ],
            "start": 4754,
            "end": 4808
          },
          "definite": false,
          "start": 4744,
          "end": 4808
        }
      ],
      "declare": false,
      "start": 4738,
      "end": 4809
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "plugins",
              "optional": false,
              "typeAnnotation": null,
              "start": 4811,
              "end": 4818
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "system",
              "optional": false,
              "typeAnnotation": null,
              "start": 4819,
              "end": 4825
            },
            "optional": false,
            "computed": true,
            "start": 4811,
            "end": 4826
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeSytePlugin",
            "optional": false,
            "typeAnnotation": null,
            "start": 4827,
            "end": 4841
          },
          "optional": false,
          "computed": true,
          "start": 4811,
          "end": 4842
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "console",
                "optional": false,
                "typeAnnotation": null,
                "start": 4851,
                "end": 4858
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log",
                "optional": false,
                "typeAnnotation": null,
                "start": 4859,
                "end": 4862
              },
              "optional": false,
              "computed": false,
              "start": 4851,
              "end": 4862
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "awsome",
                "raw": "'awsome'",
                "start": 4863,
                "end": 4871
              }
            ],
            "optional": false,
            "start": 4851,
            "end": 4872
          },
          "id": null,
          "generator": false,
          "start": 4845,
          "end": 4872
        },
        "start": 4811,
        "end": 4872
      },
      "directive": null,
      "start": 4811,
      "end": 4873
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "plugins",
              "optional": false,
              "typeAnnotation": null,
              "start": 4874,
              "end": 4881
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "system",
              "optional": false,
              "typeAnnotation": null,
              "start": 4882,
              "end": 4888
            },
            "optional": false,
            "computed": true,
            "start": 4874,
            "end": 4889
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeSytePlugin",
            "optional": false,
            "typeAnnotation": null,
            "start": 4890,
            "end": 4904
          },
          "optional": false,
          "computed": true,
          "start": 4874,
          "end": 4905
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 4874,
        "end": 4907
      },
      "directive": null,
      "start": 4874,
      "end": 4908
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "theAnswer",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 4925,
                "end": 4931
              },
              "start": 4923,
              "end": 4931
            },
            "start": 4914,
            "end": 4931
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 4934,
              "end": 4940
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "secret",
                "raw": "'secret'",
                "start": 4941,
                "end": 4949
              }
            ],
            "optional": false,
            "start": 4934,
            "end": 4950
          },
          "definite": false,
          "start": 4914,
          "end": 4950
        }
      ],
      "declare": false,
      "start": 4910,
      "end": 4951
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 4956,
            "end": 4959
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 4962,
              "end": 4964
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 4968,
                "end": 4974
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 4975,
                    "end": 4981
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 4983,
                    "end": 4989
                  }
                ],
                "start": 4974,
                "end": 4990
              },
              "start": 4968,
              "end": 4990
            },
            "start": 4962,
            "end": 4990
          },
          "definite": false,
          "start": 4956,
          "end": 4990
        }
      ],
      "declare": false,
      "start": 4952,
      "end": 4991
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 4992,
            "end": 4995
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "theAnswer",
            "optional": false,
            "typeAnnotation": null,
            "start": 4996,
            "end": 5005
          },
          "optional": false,
          "computed": true,
          "start": 4992,
          "end": 5006
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 5009,
          "end": 5011
        },
        "start": 4992,
        "end": 5011
      },
      "directive": null,
      "start": 4992,
      "end": 5012
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "directive",
            "optional": false,
            "typeAnnotation": null,
            "start": 5042,
            "end": 5051
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 5054,
              "end": 5060
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "directive",
                "raw": "'directive'",
                "start": 5061,
                "end": 5072
              }
            ],
            "optional": false,
            "start": 5054,
            "end": 5073
          },
          "definite": false,
          "start": 5042,
          "end": 5073
        }
      ],
      "declare": false,
      "start": 5036,
      "end": 5074
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5092,
        "end": 5095
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TArg",
              "optional": false,
              "typeAnnotation": null,
              "start": 5096,
              "end": 5100
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5096,
            "end": 5100
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TRet",
              "optional": false,
              "typeAnnotation": null,
              "start": 5102,
              "end": 5106
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5102,
            "end": 5106
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDir",
              "optional": false,
              "typeAnnotation": null,
              "start": 5108,
              "end": 5112
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5108,
            "end": 5112
          }
        ],
        "start": 5095,
        "end": 5113
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5126,
                    "end": 5127
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 5131,
                    "end": 5137
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TArg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5146,
                              "end": 5150
                            },
                            "typeArguments": null,
                            "start": 5146,
                            "end": 5150
                          },
                          "start": 5144,
                          "end": 5150
                        },
                        "start": 5141,
                        "end": 5150
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TRet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5155,
                          "end": 5159
                        },
                        "typeArguments": null,
                        "start": 5155,
                        "end": 5159
                      },
                      "start": 5152,
                      "end": 5159
                    },
                    "start": 5140,
                    "end": 5159
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 5123,
                  "end": 5161
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "directive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5167,
                        "end": 5176
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TDir",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5180,
                            "end": 5184
                          },
                          "typeArguments": null,
                          "start": 5180,
                          "end": 5184
                        },
                        "start": 5178,
                        "end": 5184
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5166,
                      "end": 5184
                    }
                  ],
                  "start": 5164,
                  "end": 5186
                }
              ],
              "start": 5123,
              "end": 5186
            },
            "start": 5121,
            "end": 5186
          },
          "start": 5114,
          "end": 5186
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5189,
          "end": 5193
        },
        "start": 5187,
        "end": 5193
      },
      "body": null,
      "expression": false,
      "start": 5075,
      "end": 5194
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
            "name": "case1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5200,
            "end": 5205
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 5208,
              "end": 5211
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "directive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5219,
                      "end": 5228
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5235,
                              "end": 5241
                            },
                            "start": 5233,
                            "end": 5241
                          },
                          "start": 5232,
                          "end": 5241
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "str",
                        "raw": "'str'",
                        "start": 5246,
                        "end": 5251
                      },
                      "id": null,
                      "generator": false,
                      "start": 5231,
                      "end": 5251
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 5218,
                    "end": 5251
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addOne",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5257,
                      "end": 5263
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5269,
                              "end": 5275
                            },
                            "start": 5267,
                            "end": 5275
                          },
                          "start": 5266,
                          "end": 5275
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5280,
                          "end": 5281
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 5284,
                          "end": 5285
                        },
                        "start": 5280,
                        "end": 5285
                      },
                      "id": null,
                      "generator": false,
                      "start": 5265,
                      "end": 5285
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5257,
                    "end": 5285
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "double",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5291,
                      "end": 5297
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5303,
                              "end": 5309
                            },
                            "start": 5301,
                            "end": 5309
                          },
                          "start": 5300,
                          "end": 5309
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5314,
                          "end": 5315
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5318,
                          "end": 5319
                        },
                        "start": 5314,
                        "end": 5319
                      },
                      "id": null,
                      "generator": false,
                      "start": 5299,
                      "end": 5319
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5291,
                    "end": 5319
                  }
                ],
                "start": 5212,
                "end": 5322
              }
            ],
            "optional": false,
            "start": 5208,
            "end": 5323
          },
          "definite": false,
          "start": 5200,
          "end": 5323
        }
      ],
      "declare": false,
      "start": 5196,
      "end": 5324
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
            "name": "case2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5330,
            "end": 5335
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 5338,
              "end": 5341
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addOne",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5348,
                      "end": 5354
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5360,
                              "end": 5366
                            },
                            "start": 5358,
                            "end": 5366
                          },
                          "start": 5357,
                          "end": 5366
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5371,
                          "end": 5372
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 5375,
                          "end": 5376
                        },
                        "start": 5371,
                        "end": 5376
                      },
                      "id": null,
                      "generator": false,
                      "start": 5356,
                      "end": 5376
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5348,
                    "end": 5376
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "double",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5382,
                      "end": 5388
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5394,
                              "end": 5400
                            },
                            "start": 5392,
                            "end": 5400
                          },
                          "start": 5391,
                          "end": 5400
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5405,
                          "end": 5406
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5409,
                          "end": 5410
                        },
                        "start": 5405,
                        "end": 5410
                      },
                      "id": null,
                      "generator": false,
                      "start": 5390,
                      "end": 5410
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5382,
                    "end": 5410
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "directive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5417,
                      "end": 5426
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5433,
                              "end": 5439
                            },
                            "start": 5431,
                            "end": 5439
                          },
                          "start": 5430,
                          "end": 5439
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "str",
                        "raw": "'str'",
                        "start": 5444,
                        "end": 5449
                      },
                      "id": null,
                      "generator": false,
                      "start": 5429,
                      "end": 5449
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 5416,
                    "end": 5449
                  }
                ],
                "start": 5342,
                "end": 5452
              }
            ],
            "optional": false,
            "start": 5338,
            "end": 5453
          },
          "definite": false,
          "start": 5330,
          "end": 5453
        }
      ],
      "declare": false,
      "start": 5326,
      "end": 5454
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
            "name": "case3",
            "optional": false,
            "typeAnnotation": null,
            "start": 5460,
            "end": 5465
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 5468,
              "end": 5471
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "directive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5479,
                      "end": 5488
                    },
                    "value": {
                      "type": "Literal",
                      "value": "str",
                      "raw": "'str'",
                      "start": 5491,
                      "end": 5496
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 5478,
                    "end": 5496
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addOne",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5502,
                      "end": 5508
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5514,
                              "end": 5520
                            },
                            "start": 5512,
                            "end": 5520
                          },
                          "start": 5511,
                          "end": 5520
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5525,
                          "end": 5526
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 5529,
                          "end": 5530
                        },
                        "start": 5525,
                        "end": 5530
                      },
                      "id": null,
                      "generator": false,
                      "start": 5510,
                      "end": 5530
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5502,
                    "end": 5530
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "double",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5536,
                      "end": 5542
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5548,
                              "end": 5554
                            },
                            "start": 5546,
                            "end": 5554
                          },
                          "start": 5545,
                          "end": 5554
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5559,
                          "end": 5560
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5563,
                          "end": 5564
                        },
                        "start": 5559,
                        "end": 5564
                      },
                      "id": null,
                      "generator": false,
                      "start": 5544,
                      "end": 5564
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5536,
                    "end": 5564
                  }
                ],
                "start": 5472,
                "end": 5567
              }
            ],
            "optional": false,
            "start": 5468,
            "end": 5568
          },
          "definite": false,
          "start": 5460,
          "end": 5568
        }
      ],
      "declare": false,
      "start": 5456,
      "end": 5569
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pseudo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5599,
        "end": 5605
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "&:",
              "cooked": "&:"
            },
            "tail": false,
            "start": 5608,
            "end": 5613
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 5619,
            "end": 5621
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 5613,
            "end": 5619
          }
        ],
        "start": 5608,
        "end": 5621
      },
      "declare": false,
      "start": 5594,
      "end": 5622
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "AmIPseudo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pseudo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5642,
                  "end": 5648
                },
                "typeArguments": null,
                "start": 5642,
                "end": 5648
              },
              "start": 5640,
              "end": 5648
            },
            "start": 5630,
            "end": 5648
          },
          "init": {
            "type": "Literal",
            "value": "&:test",
            "raw": "'&:test'",
            "start": 5651,
            "end": 5659
          },
          "definite": false,
          "start": 5630,
          "end": 5659
        }
      ],
      "declare": false,
      "start": 5624,
      "end": 5660
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "AmIPseudo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pseudo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5678,
                  "end": 5684
                },
                "typeArguments": null,
                "start": 5678,
                "end": 5684
              },
              "start": 5676,
              "end": 5684
            },
            "start": 5667,
            "end": 5684
          },
          "init": {
            "type": "Literal",
            "value": "&",
            "raw": "'&'",
            "start": 5687,
            "end": 5690
          },
          "definite": false,
          "start": 5667,
          "end": 5690
        }
      ],
      "declare": false,
      "start": 5661,
      "end": 5691
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PseudoDeclaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 5708,
        "end": 5725
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 5731,
          "end": 5734
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pseudo",
            "optional": false,
            "typeAnnotation": null,
            "start": 5738,
            "end": 5744
          },
          "typeArguments": null,
          "start": 5738,
          "end": 5744
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 5747,
          "end": 5753
        },
        "optional": false,
        "readonly": null,
        "start": 5728,
        "end": 5755
      },
      "declare": false,
      "start": 5703,
      "end": 5756
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PseudoDeclaration",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5770,
                  "end": 5787
                },
                "typeArguments": null,
                "start": 5770,
                "end": 5787
              },
              "start": 5768,
              "end": 5787
            },
            "start": 5764,
            "end": 5787
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "someKey",
                  "raw": "'someKey'",
                  "start": 5792,
                  "end": 5801
                },
                "value": {
                  "type": "Literal",
                  "value": "someValue",
                  "raw": "'someValue'",
                  "start": 5804,
                  "end": 5815
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5792,
                "end": 5815
              }
            ],
            "start": 5790,
            "end": 5817
          },
          "definite": false,
          "start": 5764,
          "end": 5817
        }
      ],
      "declare": false,
      "start": 5758,
      "end": 5818
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldPattern",
        "optional": false,
        "typeAnnotation": null,
        "start": 5835,
        "end": 5847
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "/",
              "cooked": "/"
            },
            "tail": false,
            "start": 5850,
            "end": 5854
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 5860,
            "end": 5862
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 5854,
            "end": 5860
          }
        ],
        "start": 5850,
        "end": 5862
      },
      "declare": false,
      "start": 5830,
      "end": 5863
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "path1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldPattern",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5878,
                  "end": 5890
                },
                "typeArguments": null,
                "start": 5878,
                "end": 5890
              },
              "start": 5876,
              "end": 5890
            },
            "start": 5871,
            "end": 5890
          },
          "init": {
            "type": "Literal",
            "value": "/one",
            "raw": "'/one'",
            "start": 5893,
            "end": 5899
          },
          "definite": false,
          "start": 5871,
          "end": 5899
        }
      ],
      "declare": false,
      "start": 5865,
      "end": 5900
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "path2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldPattern",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5914,
                  "end": 5926
                },
                "typeArguments": null,
                "start": 5914,
                "end": 5926
              },
              "start": 5912,
              "end": 5926
            },
            "start": 5907,
            "end": 5926
          },
          "init": {
            "type": "Literal",
            "value": "two",
            "raw": "'two'",
            "start": 5929,
            "end": 5934
          },
          "definite": false,
          "start": 5907,
          "end": 5934
        }
      ],
      "declare": false,
      "start": 5901,
      "end": 5935
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PathsObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 5952,
        "end": 5963
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 5969,
          "end": 5970
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FieldPattern",
            "optional": false,
            "typeAnnotation": null,
            "start": 5974,
            "end": 5986
          },
          "typeArguments": null,
          "start": 5974,
          "end": 5986
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 5989,
          "end": 5995
        },
        "optional": false,
        "readonly": null,
        "start": 5966,
        "end": 5998
      },
      "declare": false,
      "start": 5947,
      "end": 5999
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pathObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PathsObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6018,
                  "end": 6029
                },
                "typeArguments": null,
                "start": 6018,
                "end": 6029
              },
              "start": 6016,
              "end": 6029
            },
            "start": 6006,
            "end": 6029
          },
          "init": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 6032,
            "end": 6035
          },
          "definite": false,
          "start": 6006,
          "end": 6035
        }
      ],
      "declare": false,
      "start": 6000,
      "end": 6036
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IdType",
        "optional": false,
        "typeAnnotation": null,
        "start": 6053,
        "end": 6059
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 6062,
            "end": 6065
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false,
            "start": 6071,
            "end": 6075
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false,
            "start": 6081,
            "end": 6085
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false,
            "start": 6091,
            "end": 6095
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 6101,
            "end": 6103
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 6065,
            "end": 6071
          },
          {
            "type": "TSNumberKeyword",
            "start": 6075,
            "end": 6081
          },
          {
            "type": "TSNumberKeyword",
            "start": 6085,
            "end": 6091
          },
          {
            "type": "TSNumberKeyword",
            "start": 6095,
            "end": 6101
          }
        ],
        "start": 6062,
        "end": 6103
      },
      "declare": false,
      "start": 6048,
      "end": 6103
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IdType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6114,
                  "end": 6120
                },
                "typeArguments": null,
                "start": 6114,
                "end": 6120
              },
              "start": 6112,
              "end": 6120
            },
            "start": 6110,
            "end": 6120
          },
          "init": {
            "type": "Literal",
            "value": "0000-0000-0000-0001",
            "raw": "'0000-0000-0000-0001'",
            "start": 6123,
            "end": 6144
          },
          "definite": false,
          "start": 6110,
          "end": 6144
        }
      ],
      "declare": false,
      "start": 6104,
      "end": 6145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6152,
        "end": 6153
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 6156,
          "end": 6162
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IdType",
                "optional": false,
                "typeAnnotation": null,
                "start": 6163,
                "end": 6169
              },
              "typeArguments": null,
              "start": 6163,
              "end": 6169
            },
            {
              "type": "TSStringKeyword",
              "start": 6171,
              "end": 6177
            }
          ],
          "start": 6162,
          "end": 6178
        },
        "start": 6156,
        "end": 6178
      },
      "declare": false,
      "start": 6147,
      "end": 6179
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6190,
                  "end": 6191
                },
                "typeArguments": null,
                "start": 6190,
                "end": 6191
              },
              "start": 6188,
              "end": 6191
            },
            "start": 6187,
            "end": 6191
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
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6197,
                  "end": 6199
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 6202,
                  "end": 6208
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 6196,
                "end": 6208
              }
            ],
            "start": 6194,
            "end": 6210
          },
          "definite": false,
          "start": 6187,
          "end": 6210
        }
      ],
      "declare": false,
      "start": 6181,
      "end": 6210
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
            "name": "aid",
            "optional": false,
            "typeAnnotation": null,
            "start": 6216,
            "end": 6219
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 6222,
              "end": 6223
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 6224,
              "end": 6226
            },
            "optional": false,
            "computed": true,
            "start": 6222,
            "end": 6227
          },
          "definite": false,
          "start": 6216,
          "end": 6227
        }
      ],
      "declare": false,
      "start": 6212,
      "end": 6228
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 6262,
        "end": 6264
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 6271,
              "end": 6272
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6275,
                "end": 6281
              },
              "start": 6273,
              "end": 6281
            },
            "accessibility": null,
            "static": false,
            "start": 6271,
            "end": 6282
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 6287,
              "end": 6288
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6291,
                "end": 6297
              },
              "start": 6289,
              "end": 6297
            },
            "accessibility": null,
            "static": false,
            "start": 6287,
            "end": 6298
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 6309,
                    "end": 6315
                  },
                  "start": 6307,
                  "end": 6315
                },
                "start": 6304,
                "end": 6315
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6318,
                "end": 6324
              },
              "start": 6316,
              "end": 6324
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 6303,
            "end": 6325
          }
        ],
        "start": 6265,
        "end": 6327
      },
      "declare": false,
      "start": 6252,
      "end": 6327
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6339,
                  "end": 6341
                },
                "typeArguments": null,
                "start": 6339,
                "end": 6341
              },
              "start": 6337,
              "end": 6341
            },
            "start": 6335,
            "end": 6341
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
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6347,
                  "end": 6350
                },
                "value": {
                  "type": "Literal",
                  "value": "123",
                  "raw": "'123'",
                  "start": 6353,
                  "end": 6358
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 6346,
                "end": 6358
              }
            ],
            "start": 6344,
            "end": 6360
          },
          "definite": false,
          "start": 6335,
          "end": 6360
        }
      ],
      "declare": false,
      "start": 6329,
      "end": 6361
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 6383,
                            "end": 6389
                          },
                          "start": 6381,
                          "end": 6389
                        },
                        "start": 6378,
                        "end": 6389
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 6392,
                        "end": 6398
                      },
                      "start": 6390,
                      "end": 6398
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 6377,
                    "end": 6398
                  }
                ],
                "start": 6375,
                "end": 6400
              },
              "start": 6373,
              "end": 6400
            },
            "start": 6369,
            "end": 6400
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
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6406,
                  "end": 6409
                },
                "value": {
                  "type": "Literal",
                  "value": "hello ",
                  "raw": "'hello '",
                  "start": 6412,
                  "end": 6420
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 6405,
                "end": 6420
              }
            ],
            "start": 6403,
            "end": 6421
          },
          "definite": false,
          "start": 6369,
          "end": 6421
        }
      ],
      "declare": false,
      "start": 6363,
      "end": 6422
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 6443,
                            "end": 6449
                          },
                          "start": 6441,
                          "end": 6449
                        },
                        "start": 6438,
                        "end": 6449
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 6452,
                        "end": 6458
                      },
                      "start": 6450,
                      "end": 6458
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 6437,
                    "end": 6458
                  }
                ],
                "start": 6435,
                "end": 6460
              },
              "start": 6433,
              "end": 6460
            },
            "start": 6429,
            "end": 6460
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
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6466,
                  "end": 6469
                },
                "value": {
                  "type": "Literal",
                  "value": "hello ",
                  "raw": "'hello '",
                  "start": 6472,
                  "end": 6480
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 6465,
                "end": 6480
              }
            ],
            "start": 6463,
            "end": 6481
          },
          "definite": false,
          "start": 6429,
          "end": 6481
        }
      ],
      "declare": false,
      "start": 6423,
      "end": 6482
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 6545,
                            "end": 6551
                          },
                          "start": 6543,
                          "end": 6551
                        },
                        "start": 6540,
                        "end": 6551
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 6554,
                        "end": 6560
                      },
                      "start": 6552,
                      "end": 6560
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 6539,
                    "end": 6560
                  }
                ],
                "start": 6537,
                "end": 6562
              },
              "start": 6535,
              "end": 6562
            },
            "start": 6531,
            "end": 6562
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
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6568,
                  "end": 6571
                },
                "value": {
                  "type": "Literal",
                  "value": "hello ",
                  "raw": "'hello '",
                  "start": 6574,
                  "end": 6582
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 6567,
                "end": 6582
              }
            ],
            "start": 6565,
            "end": 6583
          },
          "definite": false,
          "start": 6531,
          "end": 6583
        }
      ],
      "declare": false,
      "start": 6525,
      "end": 6584
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Id",
        "optional": false,
        "typeAnnotation": null,
        "start": 6623,
        "end": 6625
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 6628,
            "end": 6634
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
                  "name": "__tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6639,
                  "end": 6644
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "id ",
                      "raw": "'id '",
                      "start": 6646,
                      "end": 6651
                    },
                    "start": 6646,
                    "end": 6651
                  },
                  "start": 6644,
                  "end": 6651
                },
                "accessibility": null,
                "static": false,
                "start": 6639,
                "end": 6651
              }
            ],
            "start": 6637,
            "end": 6652
          }
        ],
        "start": 6628,
        "end": 6652
      },
      "declare": false,
      "start": 6618,
      "end": 6653
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rec1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6659,
        "end": 6663
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6674,
                      "end": 6676
                    },
                    "typeArguments": null,
                    "start": 6674,
                    "end": 6676
                  },
                  "start": 6672,
                  "end": 6676
                },
                "start": 6669,
                "end": 6676
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6679,
                "end": 6685
              },
              "start": 6677,
              "end": 6685
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 6668,
            "end": 6685
          }
        ],
        "start": 6666,
        "end": 6687
      },
      "declare": false,
      "start": 6654,
      "end": 6688
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rec2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6694,
        "end": 6698
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 6701,
          "end": 6707
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Id",
                "optional": false,
                "typeAnnotation": null,
                "start": 6708,
                "end": 6710
              },
              "typeArguments": null,
              "start": 6708,
              "end": 6710
            },
            {
              "type": "TSNumberKeyword",
              "start": 6712,
              "end": 6718
            }
          ],
          "start": 6707,
          "end": 6719
        },
        "start": 6701,
        "end": 6719
      },
      "declare": false,
      "start": 6689,
      "end": 6720
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6727,
        "end": 6729
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rec1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6738,
            "end": 6742
          },
          "typeArguments": null,
          "start": 6738,
          "end": 6742
        },
        "start": 6732,
        "end": 6742
      },
      "declare": false,
      "start": 6722,
      "end": 6743
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6756,
        "end": 6758
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rec2",
            "optional": false,
            "typeAnnotation": null,
            "start": 6767,
            "end": 6771
          },
          "typeArguments": null,
          "start": 6767,
          "end": 6771
        },
        "start": 6761,
        "end": 6771
      },
      "declare": false,
      "start": 6751,
      "end": 6772
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 36,
  "end": 6779
}
```
