__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Computed",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
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
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "read",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 32
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
                  "start": 36,
                  "end": 37
                },
                "typeArguments": null,
                "start": 36,
                "end": 37
              },
              "start": 34,
              "end": 37
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 28,
            "end": 38
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "write",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 48
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                      "start": 56,
                      "end": 57
                    },
                    "typeArguments": null,
                    "start": 56,
                    "end": 57
                  },
                  "start": 54,
                  "end": 57
                },
                "start": 49,
                "end": 57
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 43,
            "end": 59
          }
        ],
        "start": 22,
        "end": 61
      },
      "declare": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 75
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
              "start": 76,
              "end": 77
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 77
          }
        ],
        "start": 75,
        "end": 78
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
                "name": "Computed",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 90
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
                      "start": 91,
                      "end": 92
                    },
                    "typeArguments": null,
                    "start": 91,
                    "end": 92
                  }
                ],
                "start": 90,
                "end": 93
              },
              "start": 82,
              "end": 93
            },
            "start": 80,
            "end": 93
          },
          "start": 79,
          "end": 93
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 95,
        "end": 98
      },
      "expression": false,
      "start": 63,
      "end": 98
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              },
              "start": 105,
              "end": 113
            },
            "start": 104,
            "end": 113
          },
          "init": null,
          "definite": false,
          "start": 104,
          "end": 113
        }
      ],
      "declare": false,
      "start": 100,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 209
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
                  "name": "read",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 220
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "id": null,
                  "generator": false,
                  "start": 222,
                  "end": 229
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 216,
                "end": 229
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "write",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 240
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 242,
                      "end": 247
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 251,
                      "end": 252
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 260
                    },
                    "start": 251,
                    "end": 260
                  },
                  "id": null,
                  "generator": false,
                  "start": 242,
                  "end": 260
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 235,
                "end": 260
              }
            ],
            "start": 210,
            "end": 262
          }
        ],
        "optional": false,
        "start": 206,
        "end": 263
      },
      "directive": null,
      "start": 206,
      "end": 264
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 265,
          "end": 268
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
                  "name": "write",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 280
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 287
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 292
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 300
                    },
                    "start": 291,
                    "end": 300
                  },
                  "id": null,
                  "generator": false,
                  "start": 282,
                  "end": 300
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 275,
                "end": 300
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "read",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 310
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 319
                  },
                  "id": null,
                  "generator": false,
                  "start": 312,
                  "end": 319
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 306,
                "end": 319
              }
            ],
            "start": 269,
            "end": 321
          }
        ],
        "optional": false,
        "start": 265,
        "end": 322
      },
      "directive": null,
      "start": 265,
      "end": 323
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 330,
        "end": 332
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
            },
            "initializer": null,
            "computed": false,
            "start": 335,
            "end": 336
          }
        ],
        "start": 333,
        "end": 338
      },
      "const": false,
      "declare": false,
      "start": 325,
      "end": 338
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 346
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
            },
            "initializer": null,
            "computed": false,
            "start": 349,
            "end": 350
          }
        ],
        "start": 347,
        "end": 352
      },
      "const": false,
      "declare": false,
      "start": 339,
      "end": 352
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 438,
        "end": 440
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
              "start": 441,
              "end": 442
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 441,
            "end": 442
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 445
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 444,
            "end": 445
          }
        ],
        "start": 440,
        "end": 446
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                    "name": "w",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 452,
                    "end": 453
                  },
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 459,
                                "end": 460
                              },
                              "typeArguments": null,
                              "start": 459,
                              "end": 460
                            },
                            "start": 457,
                            "end": 460
                          },
                          "start": 456,
                          "end": 460
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 465,
                            "end": 466
                          },
                          "typeArguments": null,
                          "start": 465,
                          "end": 466
                        },
                        "start": 462,
                        "end": 466
                      },
                      "start": 455,
                      "end": 466
                    },
                    "start": 453,
                    "end": 466
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 452,
                  "end": 467
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 468,
                    "end": 469
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 477,
                            "end": 478
                          },
                          "typeArguments": null,
                          "start": 477,
                          "end": 478
                        },
                        "start": 474,
                        "end": 478
                      },
                      "start": 471,
                      "end": 478
                    },
                    "start": 469,
                    "end": 478
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 468,
                  "end": 479
                }
              ],
              "start": 450,
              "end": 481
            },
            "start": 448,
            "end": 481
          },
          "start": 447,
          "end": 481
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                "start": 486,
                "end": 487
              },
              "typeArguments": null,
              "start": 486,
              "end": 487
            },
            "start": 484,
            "end": 487
          },
          "start": 483,
          "end": 487
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 490,
            "end": 491
          },
          "typeArguments": null,
          "start": 490,
          "end": 491
        },
        "start": 488,
        "end": 491
      },
      "body": null,
      "expression": false,
      "start": 421,
      "end": 492
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 502,
                "end": 508
              },
              "start": 500,
              "end": 508
            },
            "start": 498,
            "end": 508
          },
          "init": null,
          "definite": false,
          "start": 498,
          "end": 508
        }
      ],
      "declare": false,
      "start": 494,
      "end": 509
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 514,
            "end": 516
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 521
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
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 525
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
                          "start": 527,
                          "end": 528
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 532,
                        "end": 533
                      },
                      "id": null,
                      "generator": false,
                      "start": 527,
                      "end": 533
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 524,
                    "end": 533
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 535,
                      "end": 536
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 544,
                        "end": 545
                      },
                      "id": null,
                      "generator": false,
                      "start": 538,
                      "end": 545
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 535,
                    "end": 545
                  }
                ],
                "start": 522,
                "end": 547
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 549,
                "end": 550
              }
            ],
            "optional": false,
            "start": 519,
            "end": 551
          },
          "definite": false,
          "start": 514,
          "end": 551
        }
      ],
      "declare": false,
      "start": 510,
      "end": 552
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 559
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 564
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
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 567,
                      "end": 568
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
                          "start": 570,
                          "end": 571
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 576
                      },
                      "id": null,
                      "generator": false,
                      "start": 570,
                      "end": 576
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 567,
                    "end": 576
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 578,
                      "end": 579
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 587,
                        "end": 588
                      },
                      "id": null,
                      "generator": false,
                      "start": 581,
                      "end": 588
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 578,
                    "end": 588
                  }
                ],
                "start": 565,
                "end": 590
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 594
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 596
                },
                "optional": false,
                "computed": false,
                "start": 592,
                "end": 596
              }
            ],
            "optional": false,
            "start": 562,
            "end": 597
          },
          "definite": false,
          "start": 557,
          "end": 597
        }
      ],
      "declare": false,
      "start": 553,
      "end": 598
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 605
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 608,
              "end": 610
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
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 613,
                      "end": 614
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
                          "start": 616,
                          "end": 617
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 621,
                        "end": 622
                      },
                      "id": null,
                      "generator": false,
                      "start": 616,
                      "end": 622
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 613,
                    "end": 622
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 624,
                      "end": 625
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 633,
                          "end": 635
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 637
                        },
                        "optional": false,
                        "computed": false,
                        "start": 633,
                        "end": 637
                      },
                      "id": null,
                      "generator": false,
                      "start": 627,
                      "end": 637
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 624,
                    "end": 637
                  }
                ],
                "start": 611,
                "end": 639
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 641,
                "end": 642
              }
            ],
            "optional": false,
            "start": 608,
            "end": 643
          },
          "definite": false,
          "start": 603,
          "end": 643
        }
      ],
      "declare": false,
      "start": 599,
      "end": 644
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 654,
                  "end": 656
                },
                "typeArguments": null,
                "start": 654,
                "end": 656
              },
              "start": 652,
              "end": 656
            },
            "start": 650,
            "end": 656
          },
          "init": null,
          "definite": false,
          "start": 650,
          "end": 656
        }
      ],
      "declare": false,
      "start": 646,
      "end": 657
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 662,
            "end": 664
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 669
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
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 673
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
                          "start": 675,
                          "end": 676
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 681
                      },
                      "id": null,
                      "generator": false,
                      "start": 675,
                      "end": 681
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 672,
                    "end": 681
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 683,
                      "end": 684
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 692,
                          "end": 694
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 695,
                          "end": 696
                        },
                        "optional": false,
                        "computed": false,
                        "start": 692,
                        "end": 696
                      },
                      "id": null,
                      "generator": false,
                      "start": 686,
                      "end": 696
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 683,
                    "end": 696
                  }
                ],
                "start": 670,
                "end": 698
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 700,
                  "end": 702
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 704
                },
                "optional": false,
                "computed": false,
                "start": 700,
                "end": 704
              }
            ],
            "optional": false,
            "start": 667,
            "end": 705
          },
          "definite": false,
          "start": 662,
          "end": 705
        }
      ],
      "declare": false,
      "start": 658,
      "end": 706
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": null,
            "start": 712,
            "end": 714
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 719
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
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 722,
                      "end": 723
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
                          "start": 725,
                          "end": 726
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 730,
                        "end": 731
                      },
                      "id": null,
                      "generator": false,
                      "start": 725,
                      "end": 731
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 722,
                    "end": 731
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 733,
                      "end": 734
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 742,
                          "end": 744
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 745,
                          "end": 746
                        },
                        "optional": false,
                        "computed": false,
                        "start": 742,
                        "end": 746
                      },
                      "id": null,
                      "generator": false,
                      "start": 736,
                      "end": 746
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 733,
                    "end": 746
                  }
                ],
                "start": 720,
                "end": 748
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 750,
                  "end": 752
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 754
                },
                "optional": false,
                "computed": false,
                "start": 750,
                "end": 754
              }
            ],
            "optional": false,
            "start": 717,
            "end": 755
          },
          "definite": false,
          "start": 712,
          "end": 755
        }
      ],
      "declare": false,
      "start": 708,
      "end": 756
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 766
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Computed",
    "start": 10,
    "end": 18,
    "range": [
      10,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 28,
    "end": 32,
    "range": [
      28,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "write",
    "start": 43,
    "end": 48,
    "range": [
      43,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 49,
    "end": 54,
    "range": [
      49,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 63,
    "end": 71,
    "range": [
      63,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 72,
    "end": 75,
    "range": [
      72,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "Computed",
    "start": 82,
    "end": 90,
    "range": [
      82,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 100,
    "end": 103,
    "range": [
      100,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113,
    "range": [
      107,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 206,
    "end": 209,
    "range": [
      206,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 216,
    "end": 220,
    "range": [
      216,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 225,
    "end": 227,
    "range": [
      225,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "write",
    "start": 235,
    "end": 240,
    "range": [
      235,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 242,
    "end": 247,
    "range": [
      242,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 248,
    "end": 250,
    "range": [
      248,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 255,
    "end": 260,
    "range": [
      255,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 265,
    "end": 268,
    "range": [
      265,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "write",
    "start": 275,
    "end": 280,
    "range": [
      275,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 282,
    "end": 287,
    "range": [
      282,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 288,
    "end": 290,
    "range": [
      288,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 295,
    "end": 300,
    "range": [
      295,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 306,
    "end": 310,
    "range": [
      306,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 315,
    "end": 317,
    "range": [
      315,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 325,
    "end": 329,
    "range": [
      325,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 330,
    "end": 332,
    "range": [
      330,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 339,
    "end": 343,
    "range": [
      339,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 344,
    "end": 346,
    "range": [
      344,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 421,
    "end": 428,
    "range": [
      421,
      428
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 429,
    "end": 437,
    "range": [
      429,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 438,
    "end": 440,
    "range": [
      438,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 462,
    "end": 464,
    "range": [
      462,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 474,
    "end": 476,
    "range": [
      474,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 494,
    "end": 497,
    "range": [
      494,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 498,
    "end": 500,
    "range": [
      498,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 502,
    "end": 508,
    "range": [
      502,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 510,
    "end": 513,
    "range": [
      510,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 514,
    "end": 516,
    "range": [
      514,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 519,
    "end": 521,
    "range": [
      519,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 529,
    "end": 531,
    "range": [
      529,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 541,
    "end": 543,
    "range": [
      541,
      543
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 553,
    "end": 556,
    "range": [
      553,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 557,
    "end": 559,
    "range": [
      557,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 562,
    "end": 564,
    "range": [
      562,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 572,
    "end": 574,
    "range": [
      572,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 584,
    "end": 586,
    "range": [
      584,
      586
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 592,
    "end": 594,
    "range": [
      592,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 599,
    "end": 602,
    "range": [
      599,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 603,
    "end": 605,
    "range": [
      603,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 608,
    "end": 610,
    "range": [
      608,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 618,
    "end": 620,
    "range": [
      618,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 630,
    "end": 632,
    "range": [
      630,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 633,
    "end": 635,
    "range": [
      633,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 646,
    "end": 649,
    "range": [
      646,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 650,
    "end": 652,
    "range": [
      650,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 654,
    "end": 656,
    "range": [
      654,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 658,
    "end": 661,
    "range": [
      658,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 662,
    "end": 664,
    "range": [
      662,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 667,
    "end": 669,
    "range": [
      667,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 677,
    "end": 679,
    "range": [
      677,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 689,
    "end": 691,
    "range": [
      689,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 692,
    "end": 694,
    "range": [
      692,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 700,
    "end": 702,
    "range": [
      700,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 708,
    "end": 711,
    "range": [
      708,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 712,
    "end": 714,
    "range": [
      712,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 717,
    "end": 719,
    "range": [
      717,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 727,
    "end": 729,
    "range": [
      727,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 739,
    "end": 741,
    "range": [
      739,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 742,
    "end": 744,
    "range": [
      742,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 750,
    "end": 752,
    "range": [
      750,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  }
]
```
