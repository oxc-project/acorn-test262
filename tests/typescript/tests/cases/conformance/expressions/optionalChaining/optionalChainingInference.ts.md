__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unbox",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 78
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 79,
            "end": 80
          }
        ],
        "start": 78,
        "end": 81
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "box",
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 94
                  },
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
                            "start": 96,
                            "end": 97
                          },
                          "typeArguments": null,
                          "start": 96,
                          "end": 97
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 100,
                          "end": 109
                        }
                      ],
                      "start": 96,
                      "end": 109
                    },
                    "start": 94,
                    "end": 109
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 89,
                  "end": 109
                }
              ],
              "start": 87,
              "end": 111
            },
            "start": 85,
            "end": 111
          },
          "start": 82,
          "end": 111
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
            "start": 114,
            "end": 115
          },
          "typeArguments": null,
          "start": 114,
          "end": 115
        },
        "start": 112,
        "end": 115
      },
      "body": null,
      "expression": false,
      "start": 56,
      "end": 116
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
            "name": "su",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 144,
                    "end": 153
                  }
                ],
                "start": 135,
                "end": 153
              },
              "start": 133,
              "end": 153
            },
            "start": 131,
            "end": 153
          },
          "init": null,
          "definite": false,
          "start": 131,
          "end": 153
        }
      ],
      "declare": true,
      "start": 117,
      "end": 154
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
            "name": "fnu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 181,
                        "end": 187
                      },
                      "start": 178,
                      "end": 187
                    },
                    "start": 175,
                    "end": 187
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 191,
                    "end": 200
                  }
                ],
                "start": 174,
                "end": 200
              },
              "start": 172,
              "end": 200
            },
            "start": 169,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 169,
          "end": 200
        }
      ],
      "declare": true,
      "start": 155,
      "end": 201
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
            "name": "osu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 223,
                          "end": 227
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 229,
                            "end": 235
                          },
                          "start": 227,
                          "end": 235
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 223,
                        "end": 235
                      }
                    ],
                    "start": 221,
                    "end": 237
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 240,
                    "end": 249
                  }
                ],
                "start": 221,
                "end": 249
              },
              "start": 219,
              "end": 249
            },
            "start": 216,
            "end": 249
          },
          "init": null,
          "definite": false,
          "start": 216,
          "end": 249
        }
      ],
      "declare": true,
      "start": 202,
      "end": 250
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
            "name": "ofnu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 273,
                          "end": 277
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 285,
                                "end": 291
                              },
                              "start": 282,
                              "end": 291
                            },
                            "start": 279,
                            "end": 291
                          },
                          "start": 277,
                          "end": 291
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 273,
                        "end": 291
                      }
                    ],
                    "start": 271,
                    "end": 293
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 296,
                    "end": 305
                  }
                ],
                "start": 271,
                "end": 305
              },
              "start": 269,
              "end": 305
            },
            "start": 265,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 265,
          "end": 305
        }
      ],
      "declare": true,
      "start": 251,
      "end": 306
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 316
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 326
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "su",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 328,
                      "end": 330
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 338
                    },
                    "optional": true,
                    "computed": false,
                    "start": 328,
                    "end": 338
                  },
                  "start": 328,
                  "end": 338
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 321,
                "end": 338
              }
            ],
            "start": 319,
            "end": 340
          },
          "definite": false,
          "start": 314,
          "end": 340
        }
      ],
      "declare": false,
      "start": 308,
      "end": 341
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 352,
                "end": 358
              },
              "start": 350,
              "end": 358
            },
            "start": 348,
            "end": 358
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 366
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 369
              }
            ],
            "optional": false,
            "start": 361,
            "end": 370
          },
          "definite": false,
          "start": 348,
          "end": 370
        }
      ],
      "declare": false,
      "start": 342,
      "end": 371
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 381
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 386,
                  "end": 391
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ChainExpression",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "su",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 393,
                        "end": 395
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 403
                      },
                      "optional": true,
                      "computed": false,
                      "start": 393,
                      "end": 403
                    },
                    "start": 393,
                    "end": 403
                  },
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 407,
                        "end": 413
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 416,
                        "end": 425
                      }
                    ],
                    "start": 407,
                    "end": 425
                  },
                  "start": 393,
                  "end": 425
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 386,
                "end": 425
              }
            ],
            "start": 384,
            "end": 427
          },
          "definite": false,
          "start": 379,
          "end": 427
        }
      ],
      "declare": false,
      "start": 373,
      "end": 428
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 439,
                "end": 445
              },
              "start": 437,
              "end": 445
            },
            "start": 435,
            "end": 445
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 453
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 456
              }
            ],
            "optional": false,
            "start": 448,
            "end": 457
          },
          "definite": false,
          "start": 435,
          "end": 457
        }
      ],
      "declare": false,
      "start": 429,
      "end": 458
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
            "name": "b3",
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 472,
                      "end": 477
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 479,
                            "end": 485
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 488,
                            "end": 497
                          }
                        ],
                        "start": 479,
                        "end": 497
                      },
                      "start": 477,
                      "end": 497
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 472,
                    "end": 497
                  }
                ],
                "start": 470,
                "end": 499
              },
              "start": 468,
              "end": 499
            },
            "start": 466,
            "end": 499
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 509
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "su",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 511,
                      "end": 513
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 521
                    },
                    "optional": true,
                    "computed": false,
                    "start": 511,
                    "end": 521
                  },
                  "start": 511,
                  "end": 521
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 504,
                "end": 521
              }
            ],
            "start": 502,
            "end": 523
          },
          "definite": false,
          "start": 466,
          "end": 523
        }
      ],
      "declare": false,
      "start": 460,
      "end": 524
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 535,
                "end": 541
              },
              "start": 533,
              "end": 541
            },
            "start": 531,
            "end": 541
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 549
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b3",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 552
              }
            ],
            "optional": false,
            "start": 544,
            "end": 553
          },
          "definite": false,
          "start": 531,
          "end": 553
        }
      ],
      "declare": false,
      "start": 525,
      "end": 554
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 562,
            "end": 564
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 574
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fnu",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 576,
                      "end": 579
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": true,
                    "start": 576,
                    "end": 583
                  },
                  "start": 576,
                  "end": 583
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 569,
                "end": 583
              }
            ],
            "start": 567,
            "end": 585
          },
          "definite": false,
          "start": 562,
          "end": 585
        }
      ],
      "declare": false,
      "start": 556,
      "end": 586
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
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 597,
                "end": 603
              },
              "start": 595,
              "end": 603
            },
            "start": 593,
            "end": 603
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 611
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b4",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 614
              }
            ],
            "optional": false,
            "start": 606,
            "end": 615
          },
          "definite": false,
          "start": 593,
          "end": 615
        }
      ],
      "declare": false,
      "start": 587,
      "end": 616
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
            "name": "b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 624,
            "end": 626
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 631,
                  "end": 636
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "su",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 638,
                      "end": 640
                    },
                    "property": {
                      "type": "Literal",
                      "value": "length",
                      "raw": "\"length\"",
                      "start": 643,
                      "end": 651
                    },
                    "optional": true,
                    "computed": true,
                    "start": 638,
                    "end": 652
                  },
                  "start": 638,
                  "end": 652
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 631,
                "end": 652
              }
            ],
            "start": 629,
            "end": 654
          },
          "definite": false,
          "start": 624,
          "end": 654
        }
      ],
      "declare": false,
      "start": 618,
      "end": 655
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
            "name": "v5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 666,
                "end": 672
              },
              "start": 664,
              "end": 672
            },
            "start": 662,
            "end": 672
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 680
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b5",
                "optional": false,
                "typeAnnotation": null,
                "start": 681,
                "end": 683
              }
            ],
            "optional": false,
            "start": 675,
            "end": 684
          },
          "definite": false,
          "start": 662,
          "end": 684
        }
      ],
      "declare": false,
      "start": 656,
      "end": 685
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
            "name": "b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 693,
            "end": 695
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 700,
                  "end": 705
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "osu",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 707,
                        "end": 710
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 712,
                        "end": 716
                      },
                      "optional": true,
                      "computed": false,
                      "start": 707,
                      "end": 716
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 717,
                      "end": 723
                    },
                    "optional": false,
                    "computed": false,
                    "start": 707,
                    "end": 723
                  },
                  "start": 707,
                  "end": 723
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 700,
                "end": 723
              }
            ],
            "start": 698,
            "end": 725
          },
          "definite": false,
          "start": 693,
          "end": 725
        }
      ],
      "declare": false,
      "start": 687,
      "end": 726
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
            "name": "v6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 737,
                "end": 743
              },
              "start": 735,
              "end": 743
            },
            "start": 733,
            "end": 743
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 746,
              "end": 751
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b6",
                "optional": false,
                "typeAnnotation": null,
                "start": 752,
                "end": 754
              }
            ],
            "optional": false,
            "start": 746,
            "end": 755
          },
          "definite": false,
          "start": 733,
          "end": 755
        }
      ],
      "declare": false,
      "start": 727,
      "end": 756
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
            "name": "b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 764,
            "end": 766
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 776
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "osu",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 778,
                        "end": 781
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 783,
                        "end": 787
                      },
                      "optional": true,
                      "computed": false,
                      "start": 778,
                      "end": 787
                    },
                    "property": {
                      "type": "Literal",
                      "value": "length",
                      "raw": "\"length\"",
                      "start": 788,
                      "end": 796
                    },
                    "optional": false,
                    "computed": true,
                    "start": 778,
                    "end": 797
                  },
                  "start": 778,
                  "end": 797
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 771,
                "end": 797
              }
            ],
            "start": 769,
            "end": 799
          },
          "definite": false,
          "start": 764,
          "end": 799
        }
      ],
      "declare": false,
      "start": 758,
      "end": 800
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
            "name": "v7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 811,
                "end": 817
              },
              "start": 809,
              "end": 817
            },
            "start": 807,
            "end": 817
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 825
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b7",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 828
              }
            ],
            "optional": false,
            "start": 820,
            "end": 829
          },
          "definite": false,
          "start": 807,
          "end": 829
        }
      ],
      "declare": false,
      "start": 801,
      "end": 830
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
            "name": "b8",
            "optional": false,
            "typeAnnotation": null,
            "start": 838,
            "end": 840
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 845,
                  "end": 850
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ofnu",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 852,
                        "end": 856
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 858,
                        "end": 862
                      },
                      "optional": true,
                      "computed": false,
                      "start": 852,
                      "end": 862
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 852,
                    "end": 864
                  },
                  "start": 852,
                  "end": 864
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 845,
                "end": 864
              }
            ],
            "start": 843,
            "end": 866
          },
          "definite": false,
          "start": 838,
          "end": 866
        }
      ],
      "declare": false,
      "start": 832,
      "end": 867
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
            "name": "v8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 878,
                "end": 884
              },
              "start": 876,
              "end": 884
            },
            "start": 874,
            "end": 884
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 892
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b8",
                "optional": false,
                "typeAnnotation": null,
                "start": 893,
                "end": 895
              }
            ],
            "optional": false,
            "start": 887,
            "end": 896
          },
          "definite": false,
          "start": 874,
          "end": 896
        }
      ],
      "declare": false,
      "start": 868,
      "end": 897
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 898
}
```
