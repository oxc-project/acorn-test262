__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 34
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
              "start": 35,
              "end": 36
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 35,
            "end": 36
          }
        ],
        "start": 34,
        "end": 37
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "typeArguments": null,
              "start": 41,
              "end": 42
            },
            "start": 39,
            "end": 42
          },
          "start": 38,
          "end": 42
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 46
          },
          "typeArguments": null,
          "start": 45,
          "end": 46
        },
        "start": 43,
        "end": 46
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "start": 49,
            "end": 57
          }
        ],
        "start": 47,
        "end": 59
      },
      "expression": false,
      "start": 22,
      "end": 59
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 70
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
              "start": 71,
              "end": 72
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 72
          }
        ],
        "start": 70,
        "end": 73
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 87
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 98,
                          "end": 99
                        },
                        "typeArguments": null,
                        "start": 98,
                        "end": 99
                      },
                      "start": 96,
                      "end": 99
                    },
                    "start": 95,
                    "end": 99
                  },
                  "readonly": false,
                  "static": false,
                  "start": 88,
                  "end": 99
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 101,
                "end": 104
              },
              "expression": false,
              "start": 87,
              "end": 104
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 76,
            "end": 104
          }
        ],
        "start": 74,
        "end": 106
      },
      "abstract": false,
      "declare": false,
      "start": 61,
      "end": 106
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
            "name": "WhatFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 165
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 171
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocUnknownType",
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 172,
                  "end": 173
                }
              ],
              "start": 171,
              "end": 174
            },
            "start": 168,
            "end": 174
          },
          "definite": false,
          "start": 158,
          "end": 174
        }
      ],
      "declare": false,
      "start": 152,
      "end": 175
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
            "name": "HuhFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 188
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 194
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 195,
                      "end": 201
                    },
                    "start": 194,
                    "end": 201
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 195,
                  "end": 202
                }
              ],
              "start": 194,
              "end": 203
            },
            "start": 191,
            "end": 203
          },
          "definite": false,
          "start": 182,
          "end": 203
        }
      ],
      "declare": false,
      "start": 176,
      "end": 204
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
            "name": "NopeFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 218
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 224
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 226,
                      "end": 232
                    },
                    "start": 225,
                    "end": 232
                  },
                  "postfix": false,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 225,
                  "end": 232
                }
              ],
              "start": 224,
              "end": 233
            },
            "start": 221,
            "end": 233
          },
          "definite": false,
          "start": 211,
          "end": 233
        }
      ],
      "declare": false,
      "start": 205,
      "end": 234
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
            "name": "ComeOnFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 250
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 256
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSJSDocNullableType",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 258,
                          "end": 264
                        },
                        "start": 257,
                        "end": 264
                      },
                      "postfix": true,
                      "id": 0,
                      "original": null,
                      "emitNode": null,
                      "start": 258,
                      "end": 265
                    },
                    "start": 257,
                    "end": 265
                  },
                  "postfix": false,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 257,
                  "end": 265
                }
              ],
              "start": 256,
              "end": 266
            },
            "start": 253,
            "end": 266
          },
          "definite": false,
          "start": 241,
          "end": 266
        }
      ],
      "declare": false,
      "start": 235,
      "end": 267
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWhatFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 282
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 295
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocUnknownType",
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 296,
              "end": 297
            }
          ],
          "start": 295,
          "end": 298
        },
        "start": 285,
        "end": 298
      },
      "declare": false,
      "start": 269,
      "end": 299
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "THuhFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 305,
        "end": 312
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 322,
          "end": 325
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 326,
                  "end": 332
                },
                "start": 325,
                "end": 332
              },
              "postfix": true,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 326,
              "end": 333
            }
          ],
          "start": 325,
          "end": 334
        },
        "start": 315,
        "end": 334
      },
      "declare": false,
      "start": 300,
      "end": 335
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNopeFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 349
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 359,
          "end": 362
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 364,
                  "end": 370
                },
                "start": 363,
                "end": 370
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 363,
              "end": 370
            }
          ],
          "start": 362,
          "end": 371
        },
        "start": 352,
        "end": 371
      },
      "declare": false,
      "start": 336,
      "end": 372
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TComeOnFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 388
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 398,
          "end": 401
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 403,
                      "end": 409
                    },
                    "start": 402,
                    "end": 409
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 403,
                  "end": 410
                },
                "start": 402,
                "end": 410
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 402,
              "end": 410
            }
          ],
          "start": 401,
          "end": 411
        },
        "start": 391,
        "end": 411
      },
      "declare": false,
      "start": 373,
      "end": 412
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
            "name": "WhatBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 427
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 433
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocUnknownType",
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 434,
                  "end": 435
                }
              ],
              "start": 433,
              "end": 436
            },
            "start": 430,
            "end": 436
          },
          "definite": false,
          "start": 420,
          "end": 436
        }
      ],
      "declare": false,
      "start": 414,
      "end": 437
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
            "name": "HuhBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 450
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 456
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 457,
                      "end": 463
                    },
                    "start": 456,
                    "end": 463
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 457,
                  "end": 464
                }
              ],
              "start": 456,
              "end": 465
            },
            "start": 453,
            "end": 465
          },
          "definite": false,
          "start": 444,
          "end": 465
        }
      ],
      "declare": false,
      "start": 438,
      "end": 466
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
            "name": "NopeBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 480
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 486
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 488,
                      "end": 494
                    },
                    "start": 487,
                    "end": 494
                  },
                  "postfix": false,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 487,
                  "end": 494
                }
              ],
              "start": 486,
              "end": 495
            },
            "start": 483,
            "end": 495
          },
          "definite": false,
          "start": 473,
          "end": 495
        }
      ],
      "declare": false,
      "start": 467,
      "end": 496
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
            "name": "ComeOnBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 512
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 518
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSJSDocNullableType",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 520,
                          "end": 526
                        },
                        "start": 519,
                        "end": 526
                      },
                      "postfix": true,
                      "id": 0,
                      "original": null,
                      "emitNode": null,
                      "start": 520,
                      "end": 527
                    },
                    "start": 519,
                    "end": 527
                  },
                  "postfix": false,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 519,
                  "end": 527
                }
              ],
              "start": 518,
              "end": 528
            },
            "start": 515,
            "end": 528
          },
          "definite": false,
          "start": 503,
          "end": 528
        }
      ],
      "declare": false,
      "start": 497,
      "end": 529
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWhatBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 536,
        "end": 544
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 557
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocUnknownType",
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 558,
              "end": 559
            }
          ],
          "start": 557,
          "end": 560
        },
        "start": 547,
        "end": 560
      },
      "declare": false,
      "start": 531,
      "end": 561
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "THuhBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 574
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 584,
          "end": 587
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 588,
                  "end": 594
                },
                "start": 587,
                "end": 594
              },
              "postfix": true,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 588,
              "end": 595
            }
          ],
          "start": 587,
          "end": 596
        },
        "start": 577,
        "end": 596
      },
      "declare": false,
      "start": 562,
      "end": 597
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNopeBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 611
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 621,
          "end": 624
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 626,
                  "end": 632
                },
                "start": 625,
                "end": 632
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 625,
              "end": 632
            }
          ],
          "start": 624,
          "end": 633
        },
        "start": 614,
        "end": 633
      },
      "declare": false,
      "start": 598,
      "end": 634
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TComeOnBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 650
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 663
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 665,
                      "end": 671
                    },
                    "start": 664,
                    "end": 671
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 665,
                  "end": 672
                },
                "start": 664,
                "end": 672
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 664,
              "end": 672
            }
          ],
          "start": 663,
          "end": 673
        },
        "start": 653,
        "end": 673
      },
      "declare": false,
      "start": 635,
      "end": 674
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 674
}
```
