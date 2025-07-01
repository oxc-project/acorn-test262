__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiPost",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 35
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
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
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 58
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "/login",
                      "raw": "\"/login\"",
                      "start": 60,
                      "end": 68
                    },
                    "start": 60,
                    "end": 68
                  },
                  "start": 58,
                  "end": 68
                },
                "accessibility": null,
                "static": false,
                "start": 54,
                "end": 69
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "body",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 82
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 84,
                    "end": 86
                  },
                  "start": 82,
                  "end": 86
                },
                "accessibility": null,
                "static": false,
                "start": 78,
                "end": 87
              }
            ],
            "start": 44,
            "end": 93
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
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 114
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "/user",
                      "raw": "\"/user\"",
                      "start": 116,
                      "end": 123
                    },
                    "start": 116,
                    "end": 123
                  },
                  "start": 114,
                  "end": 123
                },
                "accessibility": null,
                "static": false,
                "start": 110,
                "end": 124
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "body",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 137
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
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 141,
                          "end": 145
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 147,
                            "end": 153
                          },
                          "start": 145,
                          "end": 153
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 141,
                        "end": 154
                      }
                    ],
                    "start": 139,
                    "end": 156
                  },
                  "start": 137,
                  "end": 156
                },
                "accessibility": null,
                "static": false,
                "start": 133,
                "end": 157
              }
            ],
            "start": 100,
            "end": 163
          }
        ],
        "start": 42,
        "end": 163
      },
      "declare": false,
      "start": 23,
      "end": 163
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PostPath",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 178
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ApiPost",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 188
          },
          "typeArguments": null,
          "start": 181,
          "end": 188
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "path",
            "raw": "\"path\"",
            "start": 189,
            "end": 195
          },
          "start": 189,
          "end": 195
        },
        "start": 181,
        "end": 196
      },
      "declare": false,
      "start": 165,
      "end": 197
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PostBody",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 212
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "PATH",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 217
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PostPath",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 234
              },
              "typeArguments": null,
              "start": 226,
              "end": 234
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 213,
            "end": 234
          }
        ],
        "start": 212,
        "end": 235
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 245
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ApiPost",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 253
                },
                "typeArguments": null,
                "start": 246,
                "end": 253
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
                      "name": "path",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 261
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PATH",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 263,
                          "end": 267
                        },
                        "typeArguments": null,
                        "start": 263,
                        "end": 267
                      },
                      "start": 261,
                      "end": 267
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 257,
                    "end": 267
                  }
                ],
                "start": 255,
                "end": 269
              }
            ],
            "start": 245,
            "end": 270
          },
          "start": 238,
          "end": 270
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "body",
            "raw": "\"body\"",
            "start": 271,
            "end": 277
          },
          "start": 271,
          "end": 277
        },
        "start": 238,
        "end": 278
      },
      "declare": false,
      "start": 199,
      "end": 279
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
            "name": "post",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 291
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PATH",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 299
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PostPath",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 316
                    },
                    "typeArguments": null,
                    "start": 308,
                    "end": 316
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 295,
                  "end": 316
                }
              ],
              "start": 294,
              "end": 317
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PATH",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 329,
                      "end": 333
                    },
                    "typeArguments": null,
                    "start": 329,
                    "end": 333
                  },
                  "start": 327,
                  "end": 333
                },
                "start": 323,
                "end": 333
              },
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "body",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 344
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "body",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 344
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 340,
                    "end": 344
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 356
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 346,
                    "end": 356
                  }
                ],
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
                          "name": "Omit",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 359,
                          "end": 363
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "RequestInit",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 364,
                                "end": 375
                              },
                              "typeArguments": null,
                              "start": 364,
                              "end": 375
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "body",
                                "raw": "'body'",
                                "start": 377,
                                "end": 383
                              },
                              "start": 377,
                              "end": 383
                            }
                          ],
                          "start": 363,
                          "end": 384
                        },
                        "start": 359,
                        "end": 384
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
                              "name": "body",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 388,
                              "end": 392
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "PostBody",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 394,
                                  "end": 402
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "PATH",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 403,
                                        "end": 407
                                      },
                                      "typeArguments": null,
                                      "start": 403,
                                      "end": 407
                                    }
                                  ],
                                  "start": 402,
                                  "end": 408
                                },
                                "start": 394,
                                "end": 408
                              },
                              "start": 392,
                              "end": 408
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 388,
                            "end": 408
                          }
                        ],
                        "start": 387,
                        "end": 409
                      }
                    ],
                    "start": 359,
                    "end": 409
                  },
                  "start": 357,
                  "end": 409
                },
                "start": 339,
                "end": 409
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 415,
              "end": 418
            },
            "id": null,
            "generator": false,
            "start": 294,
            "end": 418
          },
          "definite": false,
          "start": 287,
          "end": 418
        }
      ],
      "declare": false,
      "start": 281,
      "end": 418
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
            "name": "tmp",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 429
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PATH",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 437
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PostPath",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 446,
                      "end": 454
                    },
                    "typeArguments": null,
                    "start": 446,
                    "end": 454
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 433,
                  "end": 454
                }
              ],
              "start": 432,
              "end": 455
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PATH",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 469
                    },
                    "typeArguments": null,
                    "start": 465,
                    "end": 469
                  },
                  "start": 463,
                  "end": 469
                },
                "start": 459,
                "end": 469
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "body",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PostBody",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 479,
                      "end": 487
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PATH",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 488,
                            "end": 492
                          },
                          "typeArguments": null,
                          "start": 488,
                          "end": 492
                        }
                      ],
                      "start": 487,
                      "end": 493
                    },
                    "start": 479,
                    "end": 493
                  },
                  "start": 477,
                  "end": 493
                },
                "start": 473,
                "end": 493
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "post",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 503,
                      "end": 507
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PATH",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 508,
                            "end": 512
                          },
                          "typeArguments": null,
                          "start": 508,
                          "end": 512
                        }
                      ],
                      "start": 507,
                      "end": 513
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 518
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "body",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 522,
                              "end": 526
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "body",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 522,
                              "end": 526
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 522,
                            "end": 526
                          }
                        ],
                        "start": 520,
                        "end": 528
                      }
                    ],
                    "optional": false,
                    "start": 503,
                    "end": 529
                  },
                  "directive": null,
                  "start": 503,
                  "end": 529
                }
              ],
              "start": 499,
              "end": 531
            },
            "id": null,
            "generator": false,
            "start": 432,
            "end": 531
          },
          "definite": false,
          "start": 426,
          "end": 531
        }
      ],
      "declare": false,
      "start": 420,
      "end": 531
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx1",
        "optional": false,
        "typeAnnotation": null,
        "start": 542,
        "end": 545
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 547
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PostPath",
                "optional": false,
                "typeAnnotation": null,
                "start": 556,
                "end": 564
              },
              "typeArguments": null,
              "start": 556,
              "end": 564
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 546,
            "end": 564
          }
        ],
        "start": 545,
        "end": 565
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 575
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PostBody",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 577,
                        "end": 585
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 586,
                              "end": 587
                            },
                            "typeArguments": null,
                            "start": 586,
                            "end": 587
                          }
                        ],
                        "start": 585,
                        "end": 588
                      },
                      "start": 577,
                      "end": 588
                    },
                    "start": 575,
                    "end": 588
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 571,
                  "end": 588
                }
              ],
              "start": 569,
              "end": 590
            },
            "start": 567,
            "end": 590
          },
          "start": 566,
          "end": 590
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
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 597,
                    "end": 601
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PostBody",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 603,
                        "end": 611
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 612,
                              "end": 613
                            },
                            "typeArguments": null,
                            "start": 612,
                            "end": 613
                          }
                        ],
                        "start": 611,
                        "end": 614
                      },
                      "start": 603,
                      "end": 614
                    },
                    "start": 601,
                    "end": 614
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 597,
                  "end": 614
                }
              ],
              "start": 595,
              "end": 616
            },
            "start": 593,
            "end": 616
          },
          "start": 592,
          "end": 616
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
                "start": 624,
                "end": 625
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 628,
                "end": 629
              },
              "start": 624,
              "end": 629
            },
            "directive": null,
            "start": 624,
            "end": 630
          }
        ],
        "start": 618,
        "end": 632
      },
      "expression": false,
      "start": 533,
      "end": 632
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 632
}
```
