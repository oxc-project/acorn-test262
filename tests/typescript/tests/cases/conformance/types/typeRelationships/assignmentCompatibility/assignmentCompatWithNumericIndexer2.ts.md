__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 76
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              },
              "start": 82,
              "end": 90
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 91
          }
        ],
        "start": 77,
        "end": 93
      },
      "declare": false,
      "start": 62,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 111
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 124
          },
          "typeArguments": null,
          "start": 120,
          "end": 124
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              },
              "start": 130,
              "end": 138
            },
            "accessibility": null,
            "static": false,
            "start": 127,
            "end": 139
          }
        ],
        "start": 125,
        "end": 141
      },
      "declare": false,
      "start": 94,
      "end": 141
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 160
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "typeArguments": null,
          "start": 169,
          "end": 176
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 182
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              },
              "start": 182,
              "end": 190
            },
            "accessibility": null,
            "static": false,
            "start": 179,
            "end": 191
          }
        ],
        "start": 177,
        "end": 193
      },
      "declare": false,
      "start": 142,
      "end": 193
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 206
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 217,
                    "end": 223
                  },
                  "start": 215,
                  "end": 223
                },
                "start": 214,
                "end": 223
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 230
                },
                "typeArguments": null,
                "start": 226,
                "end": 230
              },
              "start": 224,
              "end": 230
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 213,
            "end": 231
          }
        ],
        "start": 207,
        "end": 233
      },
      "declare": false,
      "start": 195,
      "end": 233
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
                  "start": 242,
                  "end": 243
                },
                "typeArguments": null,
                "start": 242,
                "end": 243
              },
              "start": 240,
              "end": 243
            },
            "start": 239,
            "end": 243
          },
          "init": null,
          "definite": false,
          "start": 239,
          "end": 243
        }
      ],
      "declare": false,
      "start": 235,
      "end": 244
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
            "name": "b",
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
                            "type": "TSNumberKeyword",
                            "start": 258,
                            "end": 264
                          },
                          "start": 256,
                          "end": 264
                        },
                        "start": 255,
                        "end": 264
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 267,
                          "end": 274
                        },
                        "typeArguments": null,
                        "start": 267,
                        "end": 274
                      },
                      "start": 265,
                      "end": 274
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 254,
                    "end": 275
                  }
                ],
                "start": 252,
                "end": 277
              },
              "start": 250,
              "end": 277
            },
            "start": 249,
            "end": 277
          },
          "init": null,
          "definite": false,
          "start": 249,
          "end": 277
        }
      ],
      "declare": false,
      "start": 245,
      "end": 277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 279
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 283
        },
        "start": 278,
        "end": 283
      },
      "directive": null,
      "start": 278,
      "end": 284
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 286
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 290
        },
        "start": 285,
        "end": 290
      },
      "directive": null,
      "start": 285,
      "end": 291
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
            "name": "b2",
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
                            "type": "TSNumberKeyword",
                            "start": 316,
                            "end": 322
                          },
                          "start": 314,
                          "end": 322
                        },
                        "start": 313,
                        "end": 322
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 333
                        },
                        "typeArguments": null,
                        "start": 325,
                        "end": 333
                      },
                      "start": 323,
                      "end": 333
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 312,
                    "end": 334
                  }
                ],
                "start": 310,
                "end": 336
              },
              "start": 308,
              "end": 336
            },
            "start": 306,
            "end": 336
          },
          "init": null,
          "definite": false,
          "start": 306,
          "end": 336
        }
      ],
      "declare": false,
      "start": 302,
      "end": 336
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 338
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 343
        },
        "start": 337,
        "end": 343
      },
      "directive": null,
      "start": 337,
      "end": 344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 345,
          "end": 347
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 351
        },
        "start": 345,
        "end": 351
      },
      "directive": null,
      "start": 345,
      "end": 352
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 381
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 399
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
                    "start": 400,
                    "end": 401
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 414
                    },
                    "typeArguments": null,
                    "start": 410,
                    "end": 414
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 400,
                  "end": 414
                }
              ],
              "start": 399,
              "end": 415
            },
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 430,
                          "end": 436
                        },
                        "start": 428,
                        "end": 436
                      },
                      "start": 427,
                      "end": 436
                    }
                  ],
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
                        "start": 439,
                        "end": 440
                      },
                      "typeArguments": null,
                      "start": 439,
                      "end": 440
                    },
                    "start": 437,
                    "end": 440
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 426,
                  "end": 441
                }
              ],
              "start": 416,
              "end": 447
            },
            "declare": false,
            "start": 388,
            "end": 447
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 473,
                  "end": 474
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 475,
                        "end": 479
                      },
                      "typeArguments": null,
                      "start": 475,
                      "end": 479
                    }
                  ],
                  "start": 474,
                  "end": 480
                },
                "start": 473,
                "end": 480
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
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
                          "type": "TSNumberKeyword",
                          "start": 495,
                          "end": 501
                        },
                        "start": 493,
                        "end": 501
                      },
                      "start": 492,
                      "end": 501
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 504,
                        "end": 511
                      },
                      "typeArguments": null,
                      "start": 504,
                      "end": 511
                    },
                    "start": 502,
                    "end": 511
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 491,
                  "end": 512
                }
              ],
              "start": 481,
              "end": 524
            },
            "declare": false,
            "start": 453,
            "end": 524
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 539,
              "end": 542
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
                    "start": 543,
                    "end": 544
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 553,
                      "end": 557
                    },
                    "typeArguments": null,
                    "start": 553,
                    "end": 557
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 543,
                  "end": 557
                }
              ],
              "start": 542,
              "end": 558
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
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
                              "start": 578,
                              "end": 579
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 580,
                                    "end": 581
                                  },
                                  "typeArguments": null,
                                  "start": 580,
                                  "end": 581
                                }
                              ],
                              "start": 579,
                              "end": 582
                            },
                            "start": 578,
                            "end": 582
                          },
                          "start": 576,
                          "end": 582
                        },
                        "start": 575,
                        "end": 582
                      },
                      "init": null,
                      "definite": false,
                      "start": 575,
                      "end": 582
                    }
                  ],
                  "declare": false,
                  "start": 571,
                  "end": 583
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
                        "name": "b",
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
                                        "type": "TSNumberKeyword",
                                        "start": 605,
                                        "end": 611
                                      },
                                      "start": 603,
                                      "end": 611
                                    },
                                    "start": 602,
                                    "end": 611
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 614,
                                      "end": 621
                                    },
                                    "typeArguments": null,
                                    "start": 614,
                                    "end": 621
                                  },
                                  "start": 612,
                                  "end": 621
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 601,
                                "end": 622
                              }
                            ],
                            "start": 599,
                            "end": 624
                          },
                          "start": 597,
                          "end": 624
                        },
                        "start": 596,
                        "end": 624
                      },
                      "init": null,
                      "definite": false,
                      "start": 596,
                      "end": 624
                    }
                  ],
                  "declare": false,
                  "start": 592,
                  "end": 624
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 633,
                      "end": 634
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 637,
                      "end": 638
                    },
                    "start": 633,
                    "end": 638
                  },
                  "directive": null,
                  "start": 633,
                  "end": 639
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 658
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 661,
                      "end": 662
                    },
                    "start": 657,
                    "end": 662
                  },
                  "directive": null,
                  "start": 657,
                  "end": 663
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
                        "name": "b2",
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
                                        "type": "TSNumberKeyword",
                                        "start": 696,
                                        "end": 702
                                      },
                                      "start": 694,
                                      "end": 702
                                    },
                                    "start": 693,
                                    "end": 702
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 705,
                                      "end": 713
                                    },
                                    "typeArguments": null,
                                    "start": 705,
                                    "end": 713
                                  },
                                  "start": 703,
                                  "end": 713
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 692,
                                "end": 714
                              }
                            ],
                            "start": 690,
                            "end": 716
                          },
                          "start": 688,
                          "end": 716
                        },
                        "start": 686,
                        "end": 716
                      },
                      "init": null,
                      "definite": false,
                      "start": 686,
                      "end": 716
                    }
                  ],
                  "declare": false,
                  "start": 682,
                  "end": 716
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 726
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 729,
                      "end": 731
                    },
                    "start": 725,
                    "end": 731
                  },
                  "directive": null,
                  "start": 725,
                  "end": 732
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 750,
                      "end": 752
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 755,
                      "end": 756
                    },
                    "start": 750,
                    "end": 756
                  },
                  "directive": null,
                  "start": 750,
                  "end": 757
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
                        "name": "b3",
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
                                        "type": "TSNumberKeyword",
                                        "start": 790,
                                        "end": 796
                                      },
                                      "start": 788,
                                      "end": 796
                                    },
                                    "start": 787,
                                    "end": 796
                                  }
                                ],
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
                                      "start": 799,
                                      "end": 800
                                    },
                                    "typeArguments": null,
                                    "start": 799,
                                    "end": 800
                                  },
                                  "start": 797,
                                  "end": 800
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 786,
                                "end": 801
                              }
                            ],
                            "start": 784,
                            "end": 803
                          },
                          "start": 782,
                          "end": 803
                        },
                        "start": 780,
                        "end": 803
                      },
                      "init": null,
                      "definite": false,
                      "start": 780,
                      "end": 803
                    }
                  ],
                  "declare": false,
                  "start": 776,
                  "end": 803
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 812,
                      "end": 813
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 818
                    },
                    "start": 812,
                    "end": 818
                  },
                  "directive": null,
                  "start": 812,
                  "end": 819
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 836
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 839,
                      "end": 840
                    },
                    "start": 834,
                    "end": 840
                  },
                  "directive": null,
                  "start": 834,
                  "end": 841
                }
              ],
              "start": 561,
              "end": 853
            },
            "expression": false,
            "start": 530,
            "end": 853
          }
        ],
        "start": 382,
        "end": 855
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 363,
      "end": 855
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 62,
  "end": 855
}
```
