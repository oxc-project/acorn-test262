__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassTypeParam",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 138
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 155
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
                    "start": 156,
                    "end": 157
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 156,
                  "end": 157
                }
              ],
              "start": 155,
              "end": 158
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
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
                            "start": 178,
                            "end": 179
                          },
                          "typeArguments": null,
                          "start": 178,
                          "end": 179
                        },
                        "start": 175,
                        "end": 179
                      },
                      "start": 172,
                      "end": 179
                    },
                    "start": 170,
                    "end": 179
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 169,
                  "end": 180
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 191
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
                          "optional": true,
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
                                "start": 198,
                                "end": 199
                              },
                              "typeArguments": null,
                              "start": 198,
                              "end": 199
                            },
                            "start": 196,
                            "end": 199
                          },
                          "start": 194,
                          "end": 199
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
                            "start": 204,
                            "end": 205
                          },
                          "typeArguments": null,
                          "start": 204,
                          "end": 205
                        },
                        "start": 201,
                        "end": 205
                      },
                      "start": 193,
                      "end": 205
                    },
                    "start": 191,
                    "end": 205
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 189,
                  "end": 206
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 217
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
                                "start": 223,
                                "end": 224
                              },
                              "typeArguments": null,
                              "start": 223,
                              "end": 224
                            },
                            "start": 221,
                            "end": 224
                          },
                          "start": 220,
                          "end": 224
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
                            "start": 229,
                            "end": 230
                          },
                          "typeArguments": null,
                          "start": 229,
                          "end": 230
                        },
                        "start": 226,
                        "end": 230
                      },
                      "start": 219,
                      "end": 230
                    },
                    "start": 217,
                    "end": 230
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 215,
                  "end": 231
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 242
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
                                "start": 248,
                                "end": 249
                              },
                              "typeArguments": null,
                              "start": 248,
                              "end": 249
                            },
                            "start": 246,
                            "end": 249
                          },
                          "start": 245,
                          "end": 249
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 255,
                                "end": 256
                              },
                              "typeArguments": null,
                              "start": 255,
                              "end": 256
                            },
                            "start": 253,
                            "end": 256
                          },
                          "start": 251,
                          "end": 256
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
                            "start": 261,
                            "end": 262
                          },
                          "typeArguments": null,
                          "start": 261,
                          "end": 262
                        },
                        "start": 258,
                        "end": 262
                      },
                      "start": 244,
                      "end": 262
                    },
                    "start": 242,
                    "end": 262
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 240,
                  "end": 263
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 274
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
                          "optional": true,
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
                                "start": 281,
                                "end": 282
                              },
                              "typeArguments": null,
                              "start": 281,
                              "end": 282
                            },
                            "start": 279,
                            "end": 282
                          },
                          "start": 277,
                          "end": 282
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 288,
                                "end": 289
                              },
                              "typeArguments": null,
                              "start": 288,
                              "end": 289
                            },
                            "start": 286,
                            "end": 289
                          },
                          "start": 284,
                          "end": 289
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
                            "start": 294,
                            "end": 295
                          },
                          "typeArguments": null,
                          "start": 294,
                          "end": 295
                        },
                        "start": 291,
                        "end": 295
                      },
                      "start": 276,
                      "end": 295
                    },
                    "start": 274,
                    "end": 295
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 272,
                  "end": 296
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "init",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 310
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 333,
                                "end": 337
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 338,
                                "end": 339
                              },
                              "optional": false,
                              "computed": false,
                              "start": 333,
                              "end": 339
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 348,
                                "end": 352
                              },
                              "id": null,
                              "generator": false,
                              "start": 342,
                              "end": 352
                            },
                            "start": 333,
                            "end": 352
                          },
                          "directive": null,
                          "start": 333,
                          "end": 353
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 399,
                                "end": 403
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 404,
                                "end": 405
                              },
                              "optional": false,
                              "computed": false,
                              "start": 399,
                              "end": 405
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 413,
                                        "end": 414
                                      },
                                      "typeArguments": null,
                                      "start": 413,
                                      "end": 414
                                    },
                                    "start": 411,
                                    "end": 414
                                  },
                                  "start": 409,
                                  "end": 414
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 419,
                                "end": 423
                              },
                              "id": null,
                              "generator": false,
                              "start": 408,
                              "end": 423
                            },
                            "start": 399,
                            "end": 423
                          },
                          "directive": null,
                          "start": 399,
                          "end": 424
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 470,
                                "end": 474
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 475,
                                "end": 476
                              },
                              "optional": false,
                              "computed": false,
                              "start": 470,
                              "end": 476
                            },
                            "right": {
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
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 483,
                                        "end": 484
                                      },
                                      "typeArguments": null,
                                      "start": 483,
                                      "end": 484
                                    },
                                    "start": 481,
                                    "end": 484
                                  },
                                  "start": 480,
                                  "end": 484
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 489,
                                "end": 493
                              },
                              "id": null,
                              "generator": false,
                              "start": 479,
                              "end": 493
                            },
                            "start": 470,
                            "end": 493
                          },
                          "directive": null,
                          "start": 470,
                          "end": 494
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 543,
                                "end": 547
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 548,
                                "end": 550
                              },
                              "optional": false,
                              "computed": false,
                              "start": 543,
                              "end": 550
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 559,
                                "end": 563
                              },
                              "id": null,
                              "generator": false,
                              "start": 553,
                              "end": 563
                            },
                            "start": 543,
                            "end": 563
                          },
                          "directive": null,
                          "start": 543,
                          "end": 564
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 610,
                                "end": 614
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 615,
                                "end": 617
                              },
                              "optional": false,
                              "computed": false,
                              "start": 610,
                              "end": 617
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 625,
                                        "end": 626
                                      },
                                      "typeArguments": null,
                                      "start": 625,
                                      "end": 626
                                    },
                                    "start": 623,
                                    "end": 626
                                  },
                                  "start": 621,
                                  "end": 626
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 631,
                                "end": 635
                              },
                              "id": null,
                              "generator": false,
                              "start": 620,
                              "end": 635
                            },
                            "start": 610,
                            "end": 635
                          },
                          "directive": null,
                          "start": 610,
                          "end": 636
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 682,
                                "end": 686
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 687,
                                "end": 689
                              },
                              "optional": false,
                              "computed": false,
                              "start": 682,
                              "end": 689
                            },
                            "right": {
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
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 696,
                                        "end": 697
                                      },
                                      "typeArguments": null,
                                      "start": 696,
                                      "end": 697
                                    },
                                    "start": 694,
                                    "end": 697
                                  },
                                  "start": 693,
                                  "end": 697
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 702,
                                "end": 706
                              },
                              "id": null,
                              "generator": false,
                              "start": 692,
                              "end": 706
                            },
                            "start": 682,
                            "end": 706
                          },
                          "directive": null,
                          "start": 682,
                          "end": 707
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 750,
                                "end": 754
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 755,
                                "end": 757
                              },
                              "optional": false,
                              "computed": false,
                              "start": 750,
                              "end": 757
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 766,
                                "end": 770
                              },
                              "id": null,
                              "generator": false,
                              "start": 760,
                              "end": 770
                            },
                            "start": 750,
                            "end": 770
                          },
                          "directive": null,
                          "start": 750,
                          "end": 771
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 813,
                                "end": 817
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 818,
                                "end": 820
                              },
                              "optional": false,
                              "computed": false,
                              "start": 813,
                              "end": 820
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 828,
                                        "end": 829
                                      },
                                      "typeArguments": null,
                                      "start": 828,
                                      "end": 829
                                    },
                                    "start": 826,
                                    "end": 829
                                  },
                                  "start": 824,
                                  "end": 829
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 834,
                                "end": 838
                              },
                              "id": null,
                              "generator": false,
                              "start": 823,
                              "end": 838
                            },
                            "start": 813,
                            "end": 838
                          },
                          "directive": null,
                          "start": 813,
                          "end": 839
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 881,
                                "end": 885
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 886,
                                "end": 888
                              },
                              "optional": false,
                              "computed": false,
                              "start": 881,
                              "end": 888
                            },
                            "right": {
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
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 895,
                                        "end": 896
                                      },
                                      "typeArguments": null,
                                      "start": 895,
                                      "end": 896
                                    },
                                    "start": 893,
                                    "end": 896
                                  },
                                  "start": 892,
                                  "end": 896
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 901,
                                "end": 905
                              },
                              "id": null,
                              "generator": false,
                              "start": 891,
                              "end": 905
                            },
                            "start": 881,
                            "end": 905
                          },
                          "directive": null,
                          "start": 881,
                          "end": 906
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 952,
                                "end": 956
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 957,
                                "end": 959
                              },
                              "optional": false,
                              "computed": false,
                              "start": 952,
                              "end": 959
                            },
                            "right": {
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
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 966,
                                        "end": 967
                                      },
                                      "typeArguments": null,
                                      "start": 966,
                                      "end": 967
                                    },
                                    "start": 964,
                                    "end": 967
                                  },
                                  "start": 963,
                                  "end": 967
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 972,
                                        "end": 973
                                      },
                                      "typeArguments": null,
                                      "start": 972,
                                      "end": 973
                                    },
                                    "start": 970,
                                    "end": 973
                                  },
                                  "start": 969,
                                  "end": 973
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 978,
                                "end": 982
                              },
                              "id": null,
                              "generator": false,
                              "start": 962,
                              "end": 982
                            },
                            "start": 952,
                            "end": 982
                          },
                          "directive": null,
                          "start": 952,
                          "end": 983
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1033,
                                "end": 1037
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1038,
                                "end": 1040
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1033,
                              "end": 1040
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1049,
                                "end": 1053
                              },
                              "id": null,
                              "generator": false,
                              "start": 1043,
                              "end": 1053
                            },
                            "start": 1033,
                            "end": 1053
                          },
                          "directive": null,
                          "start": 1033,
                          "end": 1054
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1096,
                                "end": 1100
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1101,
                                "end": 1103
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1096,
                              "end": 1103
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 1111,
                                        "end": 1112
                                      },
                                      "typeArguments": null,
                                      "start": 1111,
                                      "end": 1112
                                    },
                                    "start": 1109,
                                    "end": 1112
                                  },
                                  "start": 1107,
                                  "end": 1112
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": true,
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
                                        "start": 1118,
                                        "end": 1119
                                      },
                                      "typeArguments": null,
                                      "start": 1118,
                                      "end": 1119
                                    },
                                    "start": 1116,
                                    "end": 1119
                                  },
                                  "start": 1114,
                                  "end": 1119
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1124,
                                "end": 1128
                              },
                              "id": null,
                              "generator": false,
                              "start": 1106,
                              "end": 1128
                            },
                            "start": 1096,
                            "end": 1128
                          },
                          "directive": null,
                          "start": 1096,
                          "end": 1129
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1171,
                                "end": 1175
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1176,
                                "end": 1178
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1171,
                              "end": 1178
                            },
                            "right": {
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
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1185,
                                        "end": 1186
                                      },
                                      "typeArguments": null,
                                      "start": 1185,
                                      "end": 1186
                                    },
                                    "start": 1183,
                                    "end": 1186
                                  },
                                  "start": 1182,
                                  "end": 1186
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1191,
                                "end": 1195
                              },
                              "id": null,
                              "generator": false,
                              "start": 1181,
                              "end": 1195
                            },
                            "start": 1171,
                            "end": 1195
                          },
                          "directive": null,
                          "start": 1171,
                          "end": 1196
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1242,
                                "end": 1246
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1247,
                                "end": 1249
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1242,
                              "end": 1249
                            },
                            "right": {
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
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1256,
                                        "end": 1257
                                      },
                                      "typeArguments": null,
                                      "start": 1256,
                                      "end": 1257
                                    },
                                    "start": 1254,
                                    "end": 1257
                                  },
                                  "start": 1253,
                                  "end": 1257
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1262,
                                        "end": 1263
                                      },
                                      "typeArguments": null,
                                      "start": 1262,
                                      "end": 1263
                                    },
                                    "start": 1260,
                                    "end": 1263
                                  },
                                  "start": 1259,
                                  "end": 1263
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1268,
                                "end": 1272
                              },
                              "id": null,
                              "generator": false,
                              "start": 1252,
                              "end": 1272
                            },
                            "start": 1242,
                            "end": 1272
                          },
                          "directive": null,
                          "start": 1242,
                          "end": 1273
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1318,
                                "end": 1322
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1323,
                                "end": 1325
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1318,
                              "end": 1325
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1334,
                                "end": 1338
                              },
                              "id": null,
                              "generator": false,
                              "start": 1328,
                              "end": 1338
                            },
                            "start": 1318,
                            "end": 1338
                          },
                          "directive": null,
                          "start": 1318,
                          "end": 1339
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1381,
                                "end": 1385
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1386,
                                "end": 1388
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1381,
                              "end": 1388
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 1396,
                                        "end": 1397
                                      },
                                      "typeArguments": null,
                                      "start": 1396,
                                      "end": 1397
                                    },
                                    "start": 1394,
                                    "end": 1397
                                  },
                                  "start": 1392,
                                  "end": 1397
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": true,
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
                                        "start": 1403,
                                        "end": 1404
                                      },
                                      "typeArguments": null,
                                      "start": 1403,
                                      "end": 1404
                                    },
                                    "start": 1401,
                                    "end": 1404
                                  },
                                  "start": 1399,
                                  "end": 1404
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1409,
                                "end": 1413
                              },
                              "id": null,
                              "generator": false,
                              "start": 1391,
                              "end": 1413
                            },
                            "start": 1381,
                            "end": 1413
                          },
                          "directive": null,
                          "start": 1381,
                          "end": 1414
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1456,
                                "end": 1460
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1461,
                                "end": 1463
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1456,
                              "end": 1463
                            },
                            "right": {
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
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1470,
                                        "end": 1471
                                      },
                                      "typeArguments": null,
                                      "start": 1470,
                                      "end": 1471
                                    },
                                    "start": 1468,
                                    "end": 1471
                                  },
                                  "start": 1467,
                                  "end": 1471
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1476,
                                "end": 1480
                              },
                              "id": null,
                              "generator": false,
                              "start": 1466,
                              "end": 1480
                            },
                            "start": 1456,
                            "end": 1480
                          },
                          "directive": null,
                          "start": 1456,
                          "end": 1481
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1526,
                                "end": 1530
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1531,
                                "end": 1533
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1526,
                              "end": 1533
                            },
                            "right": {
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
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1540,
                                        "end": 1541
                                      },
                                      "typeArguments": null,
                                      "start": 1540,
                                      "end": 1541
                                    },
                                    "start": 1538,
                                    "end": 1541
                                  },
                                  "start": 1537,
                                  "end": 1541
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1546,
                                        "end": 1547
                                      },
                                      "typeArguments": null,
                                      "start": 1546,
                                      "end": 1547
                                    },
                                    "start": 1544,
                                    "end": 1547
                                  },
                                  "start": 1543,
                                  "end": 1547
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1552,
                                "end": 1556
                              },
                              "id": null,
                              "generator": false,
                              "start": 1536,
                              "end": 1556
                            },
                            "start": 1526,
                            "end": 1556
                          },
                          "directive": null,
                          "start": 1526,
                          "end": 1557
                        }
                      ],
                      "start": 319,
                      "end": 1597
                    },
                    "id": null,
                    "generator": false,
                    "start": 313,
                    "end": 1597
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 306,
                  "end": 1597
                }
              ],
              "start": 159,
              "end": 1603
            },
            "abstract": false,
            "declare": false,
            "start": 145,
            "end": 1603
          }
        ],
        "start": 139,
        "end": 1605
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 114,
      "end": 1605
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesInvalid",
        "optional": false,
        "typeAnnotation": null,
        "start": 1617,
        "end": 1641
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1655,
              "end": 1660
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1671,
                    "end": 1672
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 1675,
                              "end": 1676
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1675,
                            "end": 1676
                          }
                        ],
                        "start": 1674,
                        "end": 1677
                      },
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
                            "start": 1683,
                            "end": 1684
                          },
                          "typeArguments": null,
                          "start": 1683,
                          "end": 1684
                        },
                        "start": 1680,
                        "end": 1684
                      },
                      "start": 1674,
                      "end": 1684
                    },
                    "start": 1672,
                    "end": 1684
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1671,
                  "end": 1685
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1694,
                    "end": 1696
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 1699,
                              "end": 1700
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1699,
                            "end": 1700
                          }
                        ],
                        "start": 1698,
                        "end": 1701
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 1706,
                                "end": 1707
                              },
                              "typeArguments": null,
                              "start": 1706,
                              "end": 1707
                            },
                            "start": 1704,
                            "end": 1707
                          },
                          "start": 1702,
                          "end": 1707
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
                            "start": 1712,
                            "end": 1713
                          },
                          "typeArguments": null,
                          "start": 1712,
                          "end": 1713
                        },
                        "start": 1709,
                        "end": 1713
                      },
                      "start": 1698,
                      "end": 1713
                    },
                    "start": 1696,
                    "end": 1713
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1694,
                  "end": 1714
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1723,
                    "end": 1725
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 1728,
                              "end": 1729
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1728,
                            "end": 1729
                          }
                        ],
                        "start": 1727,
                        "end": 1730
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
                                "start": 1734,
                                "end": 1735
                              },
                              "typeArguments": null,
                              "start": 1734,
                              "end": 1735
                            },
                            "start": 1732,
                            "end": 1735
                          },
                          "start": 1731,
                          "end": 1735
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
                            "start": 1740,
                            "end": 1741
                          },
                          "typeArguments": null,
                          "start": 1740,
                          "end": 1741
                        },
                        "start": 1737,
                        "end": 1741
                      },
                      "start": 1727,
                      "end": 1741
                    },
                    "start": 1725,
                    "end": 1741
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1723,
                  "end": 1742
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1751,
                    "end": 1753
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 1756,
                              "end": 1757
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1756,
                            "end": 1757
                          }
                        ],
                        "start": 1755,
                        "end": 1758
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
                                "start": 1762,
                                "end": 1763
                              },
                              "typeArguments": null,
                              "start": 1762,
                              "end": 1763
                            },
                            "start": 1760,
                            "end": 1763
                          },
                          "start": 1759,
                          "end": 1763
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1769,
                                "end": 1770
                              },
                              "typeArguments": null,
                              "start": 1769,
                              "end": 1770
                            },
                            "start": 1767,
                            "end": 1770
                          },
                          "start": 1765,
                          "end": 1770
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
                            "start": 1775,
                            "end": 1776
                          },
                          "typeArguments": null,
                          "start": 1775,
                          "end": 1776
                        },
                        "start": 1772,
                        "end": 1776
                      },
                      "start": 1755,
                      "end": 1776
                    },
                    "start": 1753,
                    "end": 1776
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1751,
                  "end": 1777
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1786,
                    "end": 1788
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 1791,
                              "end": 1792
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1791,
                            "end": 1792
                          }
                        ],
                        "start": 1790,
                        "end": 1793
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 1798,
                                "end": 1799
                              },
                              "typeArguments": null,
                              "start": 1798,
                              "end": 1799
                            },
                            "start": 1796,
                            "end": 1799
                          },
                          "start": 1794,
                          "end": 1799
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1805,
                                "end": 1806
                              },
                              "typeArguments": null,
                              "start": 1805,
                              "end": 1806
                            },
                            "start": 1803,
                            "end": 1806
                          },
                          "start": 1801,
                          "end": 1806
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
                            "start": 1811,
                            "end": 1812
                          },
                          "typeArguments": null,
                          "start": 1811,
                          "end": 1812
                        },
                        "start": 1808,
                        "end": 1812
                      },
                      "start": 1790,
                      "end": 1812
                    },
                    "start": 1788,
                    "end": 1812
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1786,
                  "end": 1813
                }
              ],
              "start": 1661,
              "end": 1819
            },
            "abstract": false,
            "declare": false,
            "start": 1649,
            "end": 1819
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Target",
              "optional": false,
              "typeAnnotation": null,
              "start": 1831,
              "end": 1837
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
                    "start": 1838,
                    "end": 1839
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1838,
                  "end": 1839
                }
              ],
              "start": 1837,
              "end": 1840
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1851,
                    "end": 1852
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
                            "start": 1860,
                            "end": 1861
                          },
                          "typeArguments": null,
                          "start": 1860,
                          "end": 1861
                        },
                        "start": 1857,
                        "end": 1861
                      },
                      "start": 1854,
                      "end": 1861
                    },
                    "start": 1852,
                    "end": 1861
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1851,
                  "end": 1862
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1871,
                    "end": 1873
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
                          "optional": true,
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
                                "start": 1880,
                                "end": 1881
                              },
                              "typeArguments": null,
                              "start": 1880,
                              "end": 1881
                            },
                            "start": 1878,
                            "end": 1881
                          },
                          "start": 1876,
                          "end": 1881
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
                            "start": 1886,
                            "end": 1887
                          },
                          "typeArguments": null,
                          "start": 1886,
                          "end": 1887
                        },
                        "start": 1883,
                        "end": 1887
                      },
                      "start": 1875,
                      "end": 1887
                    },
                    "start": 1873,
                    "end": 1887
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1871,
                  "end": 1888
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1897,
                    "end": 1899
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
                                "start": 1905,
                                "end": 1906
                              },
                              "typeArguments": null,
                              "start": 1905,
                              "end": 1906
                            },
                            "start": 1903,
                            "end": 1906
                          },
                          "start": 1902,
                          "end": 1906
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
                            "start": 1911,
                            "end": 1912
                          },
                          "typeArguments": null,
                          "start": 1911,
                          "end": 1912
                        },
                        "start": 1908,
                        "end": 1912
                      },
                      "start": 1901,
                      "end": 1912
                    },
                    "start": 1899,
                    "end": 1912
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1897,
                  "end": 1913
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1922,
                    "end": 1924
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
                                "start": 1930,
                                "end": 1931
                              },
                              "typeArguments": null,
                              "start": 1930,
                              "end": 1931
                            },
                            "start": 1928,
                            "end": 1931
                          },
                          "start": 1927,
                          "end": 1931
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1937,
                                "end": 1938
                              },
                              "typeArguments": null,
                              "start": 1937,
                              "end": 1938
                            },
                            "start": 1935,
                            "end": 1938
                          },
                          "start": 1933,
                          "end": 1938
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
                            "start": 1943,
                            "end": 1944
                          },
                          "typeArguments": null,
                          "start": 1943,
                          "end": 1944
                        },
                        "start": 1940,
                        "end": 1944
                      },
                      "start": 1926,
                      "end": 1944
                    },
                    "start": 1924,
                    "end": 1944
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1922,
                  "end": 1945
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1954,
                    "end": 1956
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
                          "optional": true,
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
                                "start": 1963,
                                "end": 1964
                              },
                              "typeArguments": null,
                              "start": 1963,
                              "end": 1964
                            },
                            "start": 1961,
                            "end": 1964
                          },
                          "start": 1959,
                          "end": 1964
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1970,
                                "end": 1971
                              },
                              "typeArguments": null,
                              "start": 1970,
                              "end": 1971
                            },
                            "start": 1968,
                            "end": 1971
                          },
                          "start": 1966,
                          "end": 1971
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
                            "start": 1976,
                            "end": 1977
                          },
                          "typeArguments": null,
                          "start": 1976,
                          "end": 1977
                        },
                        "start": 1973,
                        "end": 1977
                      },
                      "start": 1958,
                      "end": 1977
                    },
                    "start": 1956,
                    "end": 1977
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1954,
                  "end": 1978
                }
              ],
              "start": 1841,
              "end": 1984
            },
            "abstract": false,
            "declare": false,
            "start": 1825,
            "end": 1984
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2000,
              "end": 2003
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
                    "start": 2004,
                    "end": 2005
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2004,
                  "end": 2005
                }
              ],
              "start": 2003,
              "end": 2006
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2026,
                              "end": 2031
                            },
                            "typeArguments": null,
                            "start": 2026,
                            "end": 2031
                          },
                          "start": 2024,
                          "end": 2031
                        },
                        "start": 2023,
                        "end": 2031
                      },
                      "init": null,
                      "definite": false,
                      "start": 2023,
                      "end": 2031
                    }
                  ],
                  "declare": false,
                  "start": 2019,
                  "end": 2032
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Target",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2048,
                              "end": 2054
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
                                    "start": 2055,
                                    "end": 2056
                                  },
                                  "typeArguments": null,
                                  "start": 2055,
                                  "end": 2056
                                }
                              ],
                              "start": 2054,
                              "end": 2057
                            },
                            "start": 2048,
                            "end": 2057
                          },
                          "start": 2046,
                          "end": 2057
                        },
                        "start": 2045,
                        "end": 2057
                      },
                      "init": null,
                      "definite": false,
                      "start": 2045,
                      "end": 2057
                    }
                  ],
                  "declare": false,
                  "start": 2041,
                  "end": 2058
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2090,
                        "end": 2091
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2092,
                        "end": 2093
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2090,
                      "end": 2093
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2096,
                        "end": 2097
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2098,
                        "end": 2099
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2096,
                      "end": 2099
                    },
                    "start": 2090,
                    "end": 2099
                  },
                  "directive": null,
                  "start": 2090,
                  "end": 2100
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2109,
                        "end": 2110
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2111,
                        "end": 2112
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2109,
                      "end": 2112
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2115,
                        "end": 2116
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2117,
                        "end": 2119
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2115,
                      "end": 2119
                    },
                    "start": 2109,
                    "end": 2119
                  },
                  "directive": null,
                  "start": 2109,
                  "end": 2120
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2129,
                        "end": 2130
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2131,
                        "end": 2132
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2129,
                      "end": 2132
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2135,
                        "end": 2136
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2137,
                        "end": 2139
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2135,
                      "end": 2139
                    },
                    "start": 2129,
                    "end": 2139
                  },
                  "directive": null,
                  "start": 2129,
                  "end": 2140
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2149,
                        "end": 2150
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2151,
                        "end": 2152
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2149,
                      "end": 2152
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2155,
                        "end": 2156
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2157,
                        "end": 2159
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2155,
                      "end": 2159
                    },
                    "start": 2149,
                    "end": 2159
                  },
                  "directive": null,
                  "start": 2149,
                  "end": 2160
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2169,
                        "end": 2170
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2171,
                        "end": 2172
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2169,
                      "end": 2172
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2175,
                        "end": 2176
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2177,
                        "end": 2179
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2175,
                      "end": 2179
                    },
                    "start": 2169,
                    "end": 2179
                  },
                  "directive": null,
                  "start": 2169,
                  "end": 2180
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2190,
                        "end": 2191
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2192,
                        "end": 2194
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2190,
                      "end": 2194
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2197,
                        "end": 2198
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2199,
                        "end": 2200
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2197,
                      "end": 2200
                    },
                    "start": 2190,
                    "end": 2200
                  },
                  "directive": null,
                  "start": 2190,
                  "end": 2201
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2210,
                        "end": 2211
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2212,
                        "end": 2214
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2210,
                      "end": 2214
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2217,
                        "end": 2218
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2219,
                        "end": 2221
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2217,
                      "end": 2221
                    },
                    "start": 2210,
                    "end": 2221
                  },
                  "directive": null,
                  "start": 2210,
                  "end": 2222
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2231,
                        "end": 2232
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2233,
                        "end": 2235
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2231,
                      "end": 2235
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2238,
                        "end": 2239
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2240,
                        "end": 2242
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2238,
                      "end": 2242
                    },
                    "start": 2231,
                    "end": 2242
                  },
                  "directive": null,
                  "start": 2231,
                  "end": 2243
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2252,
                        "end": 2253
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2254,
                        "end": 2256
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2252,
                      "end": 2256
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2259,
                        "end": 2260
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2261,
                        "end": 2263
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2259,
                      "end": 2263
                    },
                    "start": 2252,
                    "end": 2263
                  },
                  "directive": null,
                  "start": 2252,
                  "end": 2264
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2273,
                        "end": 2274
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2275,
                        "end": 2277
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2273,
                      "end": 2277
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2280,
                        "end": 2281
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2282,
                        "end": 2284
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2280,
                      "end": 2284
                    },
                    "start": 2273,
                    "end": 2284
                  },
                  "directive": null,
                  "start": 2273,
                  "end": 2285
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2295,
                        "end": 2296
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2297,
                        "end": 2299
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2295,
                      "end": 2299
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2302,
                        "end": 2303
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2304,
                        "end": 2305
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2302,
                      "end": 2305
                    },
                    "start": 2295,
                    "end": 2305
                  },
                  "directive": null,
                  "start": 2295,
                  "end": 2306
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2315,
                        "end": 2316
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2317,
                        "end": 2319
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2315,
                      "end": 2319
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2322,
                        "end": 2323
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2324,
                        "end": 2326
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2322,
                      "end": 2326
                    },
                    "start": 2315,
                    "end": 2326
                  },
                  "directive": null,
                  "start": 2315,
                  "end": 2327
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2336,
                        "end": 2337
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2338,
                        "end": 2340
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2336,
                      "end": 2340
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2343,
                        "end": 2344
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2345,
                        "end": 2347
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2343,
                      "end": 2347
                    },
                    "start": 2336,
                    "end": 2347
                  },
                  "directive": null,
                  "start": 2336,
                  "end": 2348
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2357,
                        "end": 2358
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2359,
                        "end": 2361
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2357,
                      "end": 2361
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2364,
                        "end": 2365
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2366,
                        "end": 2368
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2364,
                      "end": 2368
                    },
                    "start": 2357,
                    "end": 2368
                  },
                  "directive": null,
                  "start": 2357,
                  "end": 2369
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2378,
                        "end": 2379
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2380,
                        "end": 2382
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2378,
                      "end": 2382
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2385,
                        "end": 2386
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2387,
                        "end": 2389
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2385,
                      "end": 2389
                    },
                    "start": 2378,
                    "end": 2389
                  },
                  "directive": null,
                  "start": 2378,
                  "end": 2390
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2400,
                        "end": 2401
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2402,
                        "end": 2404
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2400,
                      "end": 2404
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2407,
                        "end": 2408
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2409,
                        "end": 2410
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2407,
                      "end": 2410
                    },
                    "start": 2400,
                    "end": 2410
                  },
                  "directive": null,
                  "start": 2400,
                  "end": 2411
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2420,
                        "end": 2421
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2422,
                        "end": 2424
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2420,
                      "end": 2424
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2427,
                        "end": 2428
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2429,
                        "end": 2431
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2427,
                      "end": 2431
                    },
                    "start": 2420,
                    "end": 2431
                  },
                  "directive": null,
                  "start": 2420,
                  "end": 2432
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2441,
                        "end": 2442
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2443,
                        "end": 2445
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2441,
                      "end": 2445
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2448,
                        "end": 2449
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2450,
                        "end": 2452
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2448,
                      "end": 2452
                    },
                    "start": 2441,
                    "end": 2452
                  },
                  "directive": null,
                  "start": 2441,
                  "end": 2453
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2462,
                        "end": 2463
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2464,
                        "end": 2466
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2462,
                      "end": 2466
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2469,
                        "end": 2470
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2471,
                        "end": 2473
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2469,
                      "end": 2473
                    },
                    "start": 2462,
                    "end": 2473
                  },
                  "directive": null,
                  "start": 2462,
                  "end": 2474
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2483,
                        "end": 2484
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2485,
                        "end": 2487
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2483,
                      "end": 2487
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2490,
                        "end": 2491
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2492,
                        "end": 2494
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2490,
                      "end": 2494
                    },
                    "start": 2483,
                    "end": 2494
                  },
                  "directive": null,
                  "start": 2483,
                  "end": 2495
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2505,
                        "end": 2506
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2507,
                        "end": 2509
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2505,
                      "end": 2509
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2512,
                        "end": 2513
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2514,
                        "end": 2515
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2512,
                      "end": 2515
                    },
                    "start": 2505,
                    "end": 2515
                  },
                  "directive": null,
                  "start": 2505,
                  "end": 2516
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2525,
                        "end": 2526
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2527,
                        "end": 2529
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2525,
                      "end": 2529
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2532,
                        "end": 2533
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2534,
                        "end": 2536
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2532,
                      "end": 2536
                    },
                    "start": 2525,
                    "end": 2536
                  },
                  "directive": null,
                  "start": 2525,
                  "end": 2537
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2546,
                        "end": 2547
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2548,
                        "end": 2550
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2546,
                      "end": 2550
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2553,
                        "end": 2554
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2555,
                        "end": 2557
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2553,
                      "end": 2557
                    },
                    "start": 2546,
                    "end": 2557
                  },
                  "directive": null,
                  "start": 2546,
                  "end": 2558
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2567,
                        "end": 2568
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2569,
                        "end": 2571
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2567,
                      "end": 2571
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2574,
                        "end": 2575
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2576,
                        "end": 2578
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2574,
                      "end": 2578
                    },
                    "start": 2567,
                    "end": 2578
                  },
                  "directive": null,
                  "start": 2567,
                  "end": 2579
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2588,
                        "end": 2589
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2590,
                        "end": 2592
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2588,
                      "end": 2592
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2595,
                        "end": 2596
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2597,
                        "end": 2599
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2595,
                      "end": 2599
                    },
                    "start": 2588,
                    "end": 2599
                  },
                  "directive": null,
                  "start": 2588,
                  "end": 2600
                }
              ],
              "start": 2009,
              "end": 2606
            },
            "expression": false,
            "start": 1991,
            "end": 2606
          }
        ],
        "start": 1642,
        "end": 2608
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1607,
      "end": 2608
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesValid",
        "optional": false,
        "typeAnnotation": null,
        "start": 2620,
        "end": 2642
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2656,
              "end": 2661
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2672,
                    "end": 2673
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 2676,
                              "end": 2677
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2676,
                            "end": 2677
                          }
                        ],
                        "start": 2675,
                        "end": 2678
                      },
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
                            "start": 2684,
                            "end": 2685
                          },
                          "typeArguments": null,
                          "start": 2684,
                          "end": 2685
                        },
                        "start": 2681,
                        "end": 2685
                      },
                      "start": 2675,
                      "end": 2685
                    },
                    "start": 2673,
                    "end": 2685
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 2672,
                  "end": 2686
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2695,
                    "end": 2697
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 2700,
                              "end": 2701
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2700,
                            "end": 2701
                          }
                        ],
                        "start": 2699,
                        "end": 2702
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 2707,
                                "end": 2708
                              },
                              "typeArguments": null,
                              "start": 2707,
                              "end": 2708
                            },
                            "start": 2705,
                            "end": 2708
                          },
                          "start": 2703,
                          "end": 2708
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
                            "start": 2713,
                            "end": 2714
                          },
                          "typeArguments": null,
                          "start": 2713,
                          "end": 2714
                        },
                        "start": 2710,
                        "end": 2714
                      },
                      "start": 2699,
                      "end": 2714
                    },
                    "start": 2697,
                    "end": 2714
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 2695,
                  "end": 2715
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2724,
                    "end": 2726
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 2729,
                              "end": 2730
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2729,
                            "end": 2730
                          }
                        ],
                        "start": 2728,
                        "end": 2731
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
                                "start": 2735,
                                "end": 2736
                              },
                              "typeArguments": null,
                              "start": 2735,
                              "end": 2736
                            },
                            "start": 2733,
                            "end": 2736
                          },
                          "start": 2732,
                          "end": 2736
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
                            "start": 2741,
                            "end": 2742
                          },
                          "typeArguments": null,
                          "start": 2741,
                          "end": 2742
                        },
                        "start": 2738,
                        "end": 2742
                      },
                      "start": 2728,
                      "end": 2742
                    },
                    "start": 2726,
                    "end": 2742
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 2724,
                  "end": 2743
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2752,
                    "end": 2754
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 2757,
                              "end": 2758
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2757,
                            "end": 2758
                          }
                        ],
                        "start": 2756,
                        "end": 2759
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
                                "start": 2763,
                                "end": 2764
                              },
                              "typeArguments": null,
                              "start": 2763,
                              "end": 2764
                            },
                            "start": 2761,
                            "end": 2764
                          },
                          "start": 2760,
                          "end": 2764
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 2770,
                                "end": 2771
                              },
                              "typeArguments": null,
                              "start": 2770,
                              "end": 2771
                            },
                            "start": 2768,
                            "end": 2771
                          },
                          "start": 2766,
                          "end": 2771
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
                            "start": 2776,
                            "end": 2777
                          },
                          "typeArguments": null,
                          "start": 2776,
                          "end": 2777
                        },
                        "start": 2773,
                        "end": 2777
                      },
                      "start": 2756,
                      "end": 2777
                    },
                    "start": 2754,
                    "end": 2777
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 2752,
                  "end": 2778
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2787,
                    "end": 2789
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 2792,
                              "end": 2793
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2792,
                            "end": 2793
                          }
                        ],
                        "start": 2791,
                        "end": 2794
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 2799,
                                "end": 2800
                              },
                              "typeArguments": null,
                              "start": 2799,
                              "end": 2800
                            },
                            "start": 2797,
                            "end": 2800
                          },
                          "start": 2795,
                          "end": 2800
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 2806,
                                "end": 2807
                              },
                              "typeArguments": null,
                              "start": 2806,
                              "end": 2807
                            },
                            "start": 2804,
                            "end": 2807
                          },
                          "start": 2802,
                          "end": 2807
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
                            "start": 2812,
                            "end": 2813
                          },
                          "typeArguments": null,
                          "start": 2812,
                          "end": 2813
                        },
                        "start": 2809,
                        "end": 2813
                      },
                      "start": 2791,
                      "end": 2813
                    },
                    "start": 2789,
                    "end": 2813
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 2787,
                  "end": 2814
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "init",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2824,
                    "end": 2828
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2851,
                                "end": 2855
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2856,
                                "end": 2857
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2851,
                              "end": 2857
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 2861,
                                      "end": 2862
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 2861,
                                    "end": 2862
                                  }
                                ],
                                "start": 2860,
                                "end": 2863
                              },
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 2869,
                                "end": 2873
                              },
                              "id": null,
                              "generator": false,
                              "start": 2860,
                              "end": 2873
                            },
                            "start": 2851,
                            "end": 2873
                          },
                          "directive": null,
                          "start": 2851,
                          "end": 2874
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2920,
                                "end": 2924
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2925,
                                "end": 2926
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2920,
                              "end": 2926
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 2930,
                                      "end": 2931
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 2930,
                                    "end": 2931
                                  }
                                ],
                                "start": 2929,
                                "end": 2932
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 2937,
                                        "end": 2938
                                      },
                                      "typeArguments": null,
                                      "start": 2937,
                                      "end": 2938
                                    },
                                    "start": 2935,
                                    "end": 2938
                                  },
                                  "start": 2933,
                                  "end": 2938
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 2943,
                                "end": 2947
                              },
                              "id": null,
                              "generator": false,
                              "start": 2929,
                              "end": 2947
                            },
                            "start": 2920,
                            "end": 2947
                          },
                          "directive": null,
                          "start": 2920,
                          "end": 2948
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2994,
                                "end": 2998
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2999,
                                "end": 3000
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2994,
                              "end": 3000
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3004,
                                      "end": 3005
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3004,
                                    "end": 3005
                                  }
                                ],
                                "start": 3003,
                                "end": 3006
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
                                        "start": 3010,
                                        "end": 3011
                                      },
                                      "typeArguments": null,
                                      "start": 3010,
                                      "end": 3011
                                    },
                                    "start": 3008,
                                    "end": 3011
                                  },
                                  "start": 3007,
                                  "end": 3011
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3016,
                                "end": 3020
                              },
                              "id": null,
                              "generator": false,
                              "start": 3003,
                              "end": 3020
                            },
                            "start": 2994,
                            "end": 3020
                          },
                          "directive": null,
                          "start": 2994,
                          "end": 3021
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3070,
                                "end": 3074
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3075,
                                "end": 3077
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3070,
                              "end": 3077
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3081,
                                      "end": 3082
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3081,
                                    "end": 3082
                                  }
                                ],
                                "start": 3080,
                                "end": 3083
                              },
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3089,
                                "end": 3093
                              },
                              "id": null,
                              "generator": false,
                              "start": 3080,
                              "end": 3093
                            },
                            "start": 3070,
                            "end": 3093
                          },
                          "directive": null,
                          "start": 3070,
                          "end": 3094
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3140,
                                "end": 3144
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3145,
                                "end": 3147
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3140,
                              "end": 3147
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3151,
                                      "end": 3152
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3151,
                                    "end": 3152
                                  }
                                ],
                                "start": 3150,
                                "end": 3153
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 3158,
                                        "end": 3159
                                      },
                                      "typeArguments": null,
                                      "start": 3158,
                                      "end": 3159
                                    },
                                    "start": 3156,
                                    "end": 3159
                                  },
                                  "start": 3154,
                                  "end": 3159
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3164,
                                "end": 3168
                              },
                              "id": null,
                              "generator": false,
                              "start": 3150,
                              "end": 3168
                            },
                            "start": 3140,
                            "end": 3168
                          },
                          "directive": null,
                          "start": 3140,
                          "end": 3169
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3215,
                                "end": 3219
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3220,
                                "end": 3222
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3215,
                              "end": 3222
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3226,
                                      "end": 3227
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3226,
                                    "end": 3227
                                  }
                                ],
                                "start": 3225,
                                "end": 3228
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
                                        "start": 3232,
                                        "end": 3233
                                      },
                                      "typeArguments": null,
                                      "start": 3232,
                                      "end": 3233
                                    },
                                    "start": 3230,
                                    "end": 3233
                                  },
                                  "start": 3229,
                                  "end": 3233
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3238,
                                "end": 3242
                              },
                              "id": null,
                              "generator": false,
                              "start": 3225,
                              "end": 3242
                            },
                            "start": 3215,
                            "end": 3242
                          },
                          "directive": null,
                          "start": 3215,
                          "end": 3243
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3286,
                                "end": 3290
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3291,
                                "end": 3293
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3286,
                              "end": 3293
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3297,
                                      "end": 3298
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3297,
                                    "end": 3298
                                  }
                                ],
                                "start": 3296,
                                "end": 3299
                              },
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3305,
                                "end": 3309
                              },
                              "id": null,
                              "generator": false,
                              "start": 3296,
                              "end": 3309
                            },
                            "start": 3286,
                            "end": 3309
                          },
                          "directive": null,
                          "start": 3286,
                          "end": 3310
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3352,
                                "end": 3356
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3357,
                                "end": 3359
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3352,
                              "end": 3359
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3363,
                                      "end": 3364
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3363,
                                    "end": 3364
                                  }
                                ],
                                "start": 3362,
                                "end": 3365
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 3370,
                                        "end": 3371
                                      },
                                      "typeArguments": null,
                                      "start": 3370,
                                      "end": 3371
                                    },
                                    "start": 3368,
                                    "end": 3371
                                  },
                                  "start": 3366,
                                  "end": 3371
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3376,
                                "end": 3380
                              },
                              "id": null,
                              "generator": false,
                              "start": 3362,
                              "end": 3380
                            },
                            "start": 3352,
                            "end": 3380
                          },
                          "directive": null,
                          "start": 3352,
                          "end": 3381
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3423,
                                "end": 3427
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3428,
                                "end": 3430
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3423,
                              "end": 3430
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3434,
                                      "end": 3435
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3434,
                                    "end": 3435
                                  }
                                ],
                                "start": 3433,
                                "end": 3436
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
                                        "start": 3440,
                                        "end": 3441
                                      },
                                      "typeArguments": null,
                                      "start": 3440,
                                      "end": 3441
                                    },
                                    "start": 3438,
                                    "end": 3441
                                  },
                                  "start": 3437,
                                  "end": 3441
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3446,
                                "end": 3450
                              },
                              "id": null,
                              "generator": false,
                              "start": 3433,
                              "end": 3450
                            },
                            "start": 3423,
                            "end": 3450
                          },
                          "directive": null,
                          "start": 3423,
                          "end": 3451
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3497,
                                "end": 3501
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3502,
                                "end": 3504
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3497,
                              "end": 3504
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3508,
                                      "end": 3509
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3508,
                                    "end": 3509
                                  }
                                ],
                                "start": 3507,
                                "end": 3510
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
                                        "start": 3514,
                                        "end": 3515
                                      },
                                      "typeArguments": null,
                                      "start": 3514,
                                      "end": 3515
                                    },
                                    "start": 3512,
                                    "end": 3515
                                  },
                                  "start": 3511,
                                  "end": 3515
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3520,
                                        "end": 3521
                                      },
                                      "typeArguments": null,
                                      "start": 3520,
                                      "end": 3521
                                    },
                                    "start": 3518,
                                    "end": 3521
                                  },
                                  "start": 3517,
                                  "end": 3521
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3526,
                                "end": 3530
                              },
                              "id": null,
                              "generator": false,
                              "start": 3507,
                              "end": 3530
                            },
                            "start": 3497,
                            "end": 3530
                          },
                          "directive": null,
                          "start": 3497,
                          "end": 3531
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3581,
                                "end": 3585
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3586,
                                "end": 3588
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3581,
                              "end": 3588
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3592,
                                      "end": 3593
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3592,
                                    "end": 3593
                                  }
                                ],
                                "start": 3591,
                                "end": 3594
                              },
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3600,
                                "end": 3604
                              },
                              "id": null,
                              "generator": false,
                              "start": 3591,
                              "end": 3604
                            },
                            "start": 3581,
                            "end": 3604
                          },
                          "directive": null,
                          "start": 3581,
                          "end": 3605
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3647,
                                "end": 3651
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3652,
                                "end": 3654
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3647,
                              "end": 3654
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3658,
                                      "end": 3659
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3658,
                                    "end": 3659
                                  }
                                ],
                                "start": 3657,
                                "end": 3660
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 3665,
                                        "end": 3666
                                      },
                                      "typeArguments": null,
                                      "start": 3665,
                                      "end": 3666
                                    },
                                    "start": 3663,
                                    "end": 3666
                                  },
                                  "start": 3661,
                                  "end": 3666
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": true,
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
                                        "start": 3672,
                                        "end": 3673
                                      },
                                      "typeArguments": null,
                                      "start": 3672,
                                      "end": 3673
                                    },
                                    "start": 3670,
                                    "end": 3673
                                  },
                                  "start": 3668,
                                  "end": 3673
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3678,
                                "end": 3682
                              },
                              "id": null,
                              "generator": false,
                              "start": 3657,
                              "end": 3682
                            },
                            "start": 3647,
                            "end": 3682
                          },
                          "directive": null,
                          "start": 3647,
                          "end": 3683
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3725,
                                "end": 3729
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3730,
                                "end": 3732
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3725,
                              "end": 3732
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3736,
                                      "end": 3737
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3736,
                                    "end": 3737
                                  }
                                ],
                                "start": 3735,
                                "end": 3738
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
                                        "start": 3742,
                                        "end": 3743
                                      },
                                      "typeArguments": null,
                                      "start": 3742,
                                      "end": 3743
                                    },
                                    "start": 3740,
                                    "end": 3743
                                  },
                                  "start": 3739,
                                  "end": 3743
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3748,
                                "end": 3752
                              },
                              "id": null,
                              "generator": false,
                              "start": 3735,
                              "end": 3752
                            },
                            "start": 3725,
                            "end": 3752
                          },
                          "directive": null,
                          "start": 3725,
                          "end": 3753
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3799,
                                "end": 3803
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3804,
                                "end": 3806
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3799,
                              "end": 3806
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3810,
                                      "end": 3811
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3810,
                                    "end": 3811
                                  }
                                ],
                                "start": 3809,
                                "end": 3812
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
                                        "start": 3816,
                                        "end": 3817
                                      },
                                      "typeArguments": null,
                                      "start": 3816,
                                      "end": 3817
                                    },
                                    "start": 3814,
                                    "end": 3817
                                  },
                                  "start": 3813,
                                  "end": 3817
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3822,
                                        "end": 3823
                                      },
                                      "typeArguments": null,
                                      "start": 3822,
                                      "end": 3823
                                    },
                                    "start": 3820,
                                    "end": 3823
                                  },
                                  "start": 3819,
                                  "end": 3823
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3828,
                                "end": 3832
                              },
                              "id": null,
                              "generator": false,
                              "start": 3809,
                              "end": 3832
                            },
                            "start": 3799,
                            "end": 3832
                          },
                          "directive": null,
                          "start": 3799,
                          "end": 3833
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3878,
                                "end": 3882
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3883,
                                "end": 3885
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3878,
                              "end": 3885
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3889,
                                      "end": 3890
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3889,
                                    "end": 3890
                                  }
                                ],
                                "start": 3888,
                                "end": 3891
                              },
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3897,
                                "end": 3901
                              },
                              "id": null,
                              "generator": false,
                              "start": 3888,
                              "end": 3901
                            },
                            "start": 3878,
                            "end": 3901
                          },
                          "directive": null,
                          "start": 3878,
                          "end": 3902
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3944,
                                "end": 3948
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3949,
                                "end": 3951
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3944,
                              "end": 3951
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 3955,
                                      "end": 3956
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3955,
                                    "end": 3956
                                  }
                                ],
                                "start": 3954,
                                "end": 3957
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": true,
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
                                        "start": 3962,
                                        "end": 3963
                                      },
                                      "typeArguments": null,
                                      "start": 3962,
                                      "end": 3963
                                    },
                                    "start": 3960,
                                    "end": 3963
                                  },
                                  "start": 3958,
                                  "end": 3963
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": true,
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
                                        "start": 3969,
                                        "end": 3970
                                      },
                                      "typeArguments": null,
                                      "start": 3969,
                                      "end": 3970
                                    },
                                    "start": 3967,
                                    "end": 3970
                                  },
                                  "start": 3965,
                                  "end": 3970
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3975,
                                "end": 3979
                              },
                              "id": null,
                              "generator": false,
                              "start": 3954,
                              "end": 3979
                            },
                            "start": 3944,
                            "end": 3979
                          },
                          "directive": null,
                          "start": 3944,
                          "end": 3980
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 4022,
                                "end": 4026
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4027,
                                "end": 4029
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4022,
                              "end": 4029
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 4033,
                                      "end": 4034
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 4033,
                                    "end": 4034
                                  }
                                ],
                                "start": 4032,
                                "end": 4035
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
                                        "start": 4039,
                                        "end": 4040
                                      },
                                      "typeArguments": null,
                                      "start": 4039,
                                      "end": 4040
                                    },
                                    "start": 4037,
                                    "end": 4040
                                  },
                                  "start": 4036,
                                  "end": 4040
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 4045,
                                "end": 4049
                              },
                              "id": null,
                              "generator": false,
                              "start": 4032,
                              "end": 4049
                            },
                            "start": 4022,
                            "end": 4049
                          },
                          "directive": null,
                          "start": 4022,
                          "end": 4050
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 4095,
                                "end": 4099
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4100,
                                "end": 4102
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4095,
                              "end": 4102
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
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
                                      "start": 4106,
                                      "end": 4107
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 4106,
                                    "end": 4107
                                  }
                                ],
                                "start": 4105,
                                "end": 4108
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
                                        "start": 4112,
                                        "end": 4113
                                      },
                                      "typeArguments": null,
                                      "start": 4112,
                                      "end": 4113
                                    },
                                    "start": 4110,
                                    "end": 4113
                                  },
                                  "start": 4109,
                                  "end": 4113
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4118,
                                        "end": 4119
                                      },
                                      "typeArguments": null,
                                      "start": 4118,
                                      "end": 4119
                                    },
                                    "start": 4116,
                                    "end": 4119
                                  },
                                  "start": 4115,
                                  "end": 4119
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 4124,
                                "end": 4128
                              },
                              "id": null,
                              "generator": false,
                              "start": 4105,
                              "end": 4128
                            },
                            "start": 4095,
                            "end": 4128
                          },
                          "directive": null,
                          "start": 4095,
                          "end": 4129
                        }
                      ],
                      "start": 2837,
                      "end": 4169
                    },
                    "id": null,
                    "generator": false,
                    "start": 2831,
                    "end": 4169
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 2824,
                  "end": 4169
                }
              ],
              "start": 2662,
              "end": 4175
            },
            "abstract": false,
            "declare": false,
            "start": 2650,
            "end": 4175
          }
        ],
        "start": 2643,
        "end": 4177
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2610,
      "end": 4177
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 114,
  "end": 4177
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 114,
    "end": 123,
    "range": [
      114,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassTypeParam",
    "start": 124,
    "end": 138,
    "range": [
      124,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 145,
    "end": 150,
    "range": [
      145,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 151,
    "end": 155,
    "range": [
      151,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 175,
    "end": 177,
    "range": [
      175,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 189,
    "end": 191,
    "range": [
      189,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 201,
    "end": 203,
    "range": [
      201,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 215,
    "end": 217,
    "range": [
      215,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 226,
    "end": 228,
    "range": [
      226,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 240,
    "end": 242,
    "range": [
      240,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 258,
    "end": 260,
    "range": [
      258,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 272,
    "end": 274,
    "range": [
      272,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 291,
    "end": 293,
    "range": [
      291,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 306,
    "end": 310,
    "range": [
      306,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 316,
    "end": 318,
    "range": [
      316,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 333,
    "end": 337,
    "range": [
      333,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 345,
    "end": 347,
    "range": [
      345,
      347
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 348,
    "end": 352,
    "range": [
      348,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 399,
    "end": 403,
    "range": [
      399,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 416,
    "end": 418,
    "range": [
      416,
      418
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 419,
    "end": 423,
    "range": [
      419,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 470,
    "end": 474,
    "range": [
      470,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 486,
    "end": 488,
    "range": [
      486,
      488
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 489,
    "end": 493,
    "range": [
      489,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 543,
    "end": 547,
    "range": [
      543,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 548,
    "end": 550,
    "range": [
      548,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 556,
    "end": 558,
    "range": [
      556,
      558
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 559,
    "end": 563,
    "range": [
      559,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 610,
    "end": 614,
    "range": [
      610,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 615,
    "end": 617,
    "range": [
      615,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
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
    "value": "?",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 628,
    "end": 630,
    "range": [
      628,
      630
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 631,
    "end": 635,
    "range": [
      631,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 682,
    "end": 686,
    "range": [
      682,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 687,
    "end": 689,
    "range": [
      687,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 699,
    "end": 701,
    "range": [
      699,
      701
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 702,
    "end": 706,
    "range": [
      702,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 750,
    "end": 754,
    "range": [
      750,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 755,
    "end": 757,
    "range": [
      755,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 763,
    "end": 765,
    "range": [
      763,
      765
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 766,
    "end": 770,
    "range": [
      766,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 813,
    "end": 817,
    "range": [
      813,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 818,
    "end": 820,
    "range": [
      818,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 831,
    "end": 833,
    "range": [
      831,
      833
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 834,
    "end": 838,
    "range": [
      834,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 881,
    "end": 885,
    "range": [
      881,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 886,
    "end": 888,
    "range": [
      886,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 898,
    "end": 900,
    "range": [
      898,
      900
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 901,
    "end": 905,
    "range": [
      901,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 952,
    "end": 956,
    "range": [
      952,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 957,
    "end": 959,
    "range": [
      957,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 975,
    "end": 977,
    "range": [
      975,
      977
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 978,
    "end": 982,
    "range": [
      978,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1033,
    "end": 1037,
    "range": [
      1033,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1038,
    "end": 1040,
    "range": [
      1038,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1046,
    "end": 1048,
    "range": [
      1046,
      1048
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1049,
    "end": 1053,
    "range": [
      1049,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1096,
    "end": 1100,
    "range": [
      1096,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1101,
    "end": 1103,
    "range": [
      1101,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1121,
    "end": 1123,
    "range": [
      1121,
      1123
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1124,
    "end": 1128,
    "range": [
      1124,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1171,
    "end": 1175,
    "range": [
      1171,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1176,
    "end": 1178,
    "range": [
      1176,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1188,
    "end": 1190,
    "range": [
      1188,
      1190
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1191,
    "end": 1195,
    "range": [
      1191,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1242,
    "end": 1246,
    "range": [
      1242,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1247,
    "end": 1249,
    "range": [
      1247,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1265,
    "end": 1267,
    "range": [
      1265,
      1267
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1268,
    "end": 1272,
    "range": [
      1268,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1318,
    "end": 1322,
    "range": [
      1318,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1323,
    "end": 1325,
    "range": [
      1323,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1331,
    "end": 1333,
    "range": [
      1331,
      1333
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1334,
    "end": 1338,
    "range": [
      1334,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1381,
    "end": 1385,
    "range": [
      1381,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1386,
    "end": 1388,
    "range": [
      1386,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1406,
    "end": 1408,
    "range": [
      1406,
      1408
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1409,
    "end": 1413,
    "range": [
      1409,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1456,
    "end": 1460,
    "range": [
      1456,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1461,
    "end": 1463,
    "range": [
      1461,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1473,
    "end": 1475,
    "range": [
      1473,
      1475
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1476,
    "end": 1480,
    "range": [
      1476,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1526,
    "end": 1530,
    "range": [
      1526,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1531,
    "end": 1533,
    "range": [
      1531,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1549,
    "end": 1551,
    "range": [
      1549,
      1551
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1552,
    "end": 1556,
    "range": [
      1552,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1607,
    "end": 1616,
    "range": [
      1607,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "GenericSignaturesInvalid",
    "start": 1617,
    "end": 1641,
    "range": [
      1617,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1649,
    "end": 1654,
    "range": [
      1649,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 1655,
    "end": 1660,
    "range": [
      1655,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1674,
    "end": 1675,
    "range": [
      1674,
      1675
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1680,
    "end": 1682,
    "range": [
      1680,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1694,
    "end": 1696,
    "range": [
      1694,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1709,
    "end": 1711,
    "range": [
      1709,
      1711
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1723,
    "end": 1725,
    "range": [
      1723,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1737,
    "end": 1739,
    "range": [
      1737,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1751,
    "end": 1753,
    "range": [
      1751,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1766,
    "end": 1767,
    "range": [
      1766,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1772,
    "end": 1774,
    "range": [
      1772,
      1774
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1786,
    "end": 1788,
    "range": [
      1786,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1808,
    "end": 1810,
    "range": [
      1808,
      1810
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1825,
    "end": 1830,
    "range": [
      1825,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 1831,
    "end": 1837,
    "range": [
      1831,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1857,
    "end": 1859,
    "range": [
      1857,
      1859
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1871,
    "end": 1873,
    "range": [
      1871,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1883,
    "end": 1885,
    "range": [
      1883,
      1885
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1897,
    "end": 1899,
    "range": [
      1897,
      1899
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1908,
    "end": 1910,
    "range": [
      1908,
      1910
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1922,
    "end": 1924,
    "range": [
      1922,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1940,
    "end": 1942,
    "range": [
      1940,
      1942
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1944,
    "end": 1945,
    "range": [
      1944,
      1945
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1954,
    "end": 1956,
    "range": [
      1954,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1973,
    "end": 1975,
    "range": [
      1973,
      1975
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1991,
    "end": 1999,
    "range": [
      1991,
      1999
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2000,
    "end": 2003,
    "range": [
      2000,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2019,
    "end": 2022,
    "range": [
      2019,
      2022
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 2026,
    "end": 2031,
    "range": [
      2026,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2041,
    "end": 2044,
    "range": [
      2041,
      2044
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 2048,
    "end": 2054,
    "range": [
      2048,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2098,
    "end": 2099,
    "range": [
      2098,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2116,
    "end": 2117,
    "range": [
      2116,
      2117
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2117,
    "end": 2119,
    "range": [
      2117,
      2119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2137,
    "end": 2139,
    "range": [
      2137,
      2139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2149,
    "end": 2150,
    "range": [
      2149,
      2150
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2153,
    "end": 2154,
    "range": [
      2153,
      2154
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2155,
    "end": 2156,
    "range": [
      2155,
      2156
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2156,
    "end": 2157,
    "range": [
      2156,
      2157
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2157,
    "end": 2159,
    "range": [
      2157,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2170,
    "end": 2171,
    "range": [
      2170,
      2171
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2175,
    "end": 2176,
    "range": [
      2175,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2177,
    "end": 2179,
    "range": [
      2177,
      2179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2190,
    "end": 2191,
    "range": [
      2190,
      2191
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2192,
    "end": 2194,
    "range": [
      2192,
      2194
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2195,
    "end": 2196,
    "range": [
      2195,
      2196
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2211,
    "end": 2212,
    "range": [
      2211,
      2212
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2212,
    "end": 2214,
    "range": [
      2212,
      2214
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2219,
    "end": 2221,
    "range": [
      2219,
      2221
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2221,
    "end": 2222,
    "range": [
      2221,
      2222
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2231,
    "end": 2232,
    "range": [
      2231,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2233,
    "end": 2235,
    "range": [
      2233,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
      2237
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2240,
    "end": 2242,
    "range": [
      2240,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2254,
    "end": 2256,
    "range": [
      2254,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2259,
    "end": 2260,
    "range": [
      2259,
      2260
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2261,
    "end": 2263,
    "range": [
      2261,
      2263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2275,
    "end": 2277,
    "range": [
      2275,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2282,
    "end": 2284,
    "range": [
      2282,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2284,
    "end": 2285,
    "range": [
      2284,
      2285
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2297,
    "end": 2299,
    "range": [
      2297,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2302,
    "end": 2303,
    "range": [
      2302,
      2303
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2305,
    "end": 2306,
    "range": [
      2305,
      2306
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2317,
    "end": 2319,
    "range": [
      2317,
      2319
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2320,
    "end": 2321,
    "range": [
      2320,
      2321
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2322,
    "end": 2323,
    "range": [
      2322,
      2323
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2323,
    "end": 2324,
    "range": [
      2323,
      2324
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2324,
    "end": 2326,
    "range": [
      2324,
      2326
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2326,
    "end": 2327,
    "range": [
      2326,
      2327
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2338,
    "end": 2340,
    "range": [
      2338,
      2340
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2341,
    "end": 2342,
    "range": [
      2341,
      2342
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2345,
    "end": 2347,
    "range": [
      2345,
      2347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2357,
    "end": 2358,
    "range": [
      2357,
      2358
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2358,
    "end": 2359,
    "range": [
      2358,
      2359
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2359,
    "end": 2361,
    "range": [
      2359,
      2361
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2362,
    "end": 2363,
    "range": [
      2362,
      2363
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2365,
    "end": 2366,
    "range": [
      2365,
      2366
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2366,
    "end": 2368,
    "range": [
      2366,
      2368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2368,
    "end": 2369,
    "range": [
      2368,
      2369
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2379,
    "end": 2380,
    "range": [
      2379,
      2380
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2380,
    "end": 2382,
    "range": [
      2380,
      2382
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2383,
    "end": 2384,
    "range": [
      2383,
      2384
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2386,
    "end": 2387,
    "range": [
      2386,
      2387
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2387,
    "end": 2389,
    "range": [
      2387,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2401,
    "end": 2402,
    "range": [
      2401,
      2402
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2402,
    "end": 2404,
    "range": [
      2402,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2407,
    "end": 2408,
    "range": [
      2407,
      2408
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2422,
    "end": 2424,
    "range": [
      2422,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2425,
    "end": 2426,
    "range": [
      2425,
      2426
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2427,
    "end": 2428,
    "range": [
      2427,
      2428
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2429,
    "end": 2431,
    "range": [
      2429,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2441,
    "end": 2442,
    "range": [
      2441,
      2442
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2443,
    "end": 2445,
    "range": [
      2443,
      2445
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2446,
    "end": 2447,
    "range": [
      2446,
      2447
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2448,
    "end": 2449,
    "range": [
      2448,
      2449
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2449,
    "end": 2450,
    "range": [
      2449,
      2450
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2450,
    "end": 2452,
    "range": [
      2450,
      2452
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2452,
    "end": 2453,
    "range": [
      2452,
      2453
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2464,
    "end": 2466,
    "range": [
      2464,
      2466
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2467,
    "end": 2468,
    "range": [
      2467,
      2468
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2470,
    "end": 2471,
    "range": [
      2470,
      2471
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2471,
    "end": 2473,
    "range": [
      2471,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2484,
    "end": 2485,
    "range": [
      2484,
      2485
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2485,
    "end": 2487,
    "range": [
      2485,
      2487
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2488,
    "end": 2489,
    "range": [
      2488,
      2489
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2490,
    "end": 2491,
    "range": [
      2490,
      2491
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2491,
    "end": 2492,
    "range": [
      2491,
      2492
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2492,
    "end": 2494,
    "range": [
      2492,
      2494
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2506,
    "end": 2507,
    "range": [
      2506,
      2507
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2507,
    "end": 2509,
    "range": [
      2507,
      2509
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2515,
    "end": 2516,
    "range": [
      2515,
      2516
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2525,
    "end": 2526,
    "range": [
      2525,
      2526
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2527,
    "end": 2529,
    "range": [
      2527,
      2529
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2530,
    "end": 2531,
    "range": [
      2530,
      2531
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2532,
    "end": 2533,
    "range": [
      2532,
      2533
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2534,
    "end": 2536,
    "range": [
      2534,
      2536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2536,
    "end": 2537,
    "range": [
      2536,
      2537
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2546,
    "end": 2547,
    "range": [
      2546,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2547,
    "end": 2548,
    "range": [
      2547,
      2548
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2548,
    "end": 2550,
    "range": [
      2548,
      2550
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2551,
    "end": 2552,
    "range": [
      2551,
      2552
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2553,
    "end": 2554,
    "range": [
      2553,
      2554
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2554,
    "end": 2555,
    "range": [
      2554,
      2555
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2555,
    "end": 2557,
    "range": [
      2555,
      2557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2557,
    "end": 2558,
    "range": [
      2557,
      2558
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2567,
    "end": 2568,
    "range": [
      2567,
      2568
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2569,
    "end": 2571,
    "range": [
      2569,
      2571
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2572,
    "end": 2573,
    "range": [
      2572,
      2573
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2574,
    "end": 2575,
    "range": [
      2574,
      2575
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2575,
    "end": 2576,
    "range": [
      2575,
      2576
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2576,
    "end": 2578,
    "range": [
      2576,
      2578
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2578,
    "end": 2579,
    "range": [
      2578,
      2579
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2589,
    "end": 2590,
    "range": [
      2589,
      2590
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2590,
    "end": 2592,
    "range": [
      2590,
      2592
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2593,
    "end": 2594,
    "range": [
      2593,
      2594
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2596,
    "end": 2597,
    "range": [
      2596,
      2597
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2597,
    "end": 2599,
    "range": [
      2597,
      2599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2599,
    "end": 2600,
    "range": [
      2599,
      2600
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2605,
    "end": 2606,
    "range": [
      2605,
      2606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2607,
    "end": 2608,
    "range": [
      2607,
      2608
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2610,
    "end": 2619,
    "range": [
      2610,
      2619
    ]
  },
  {
    "type": "Identifier",
    "value": "GenericSignaturesValid",
    "start": 2620,
    "end": 2642,
    "range": [
      2620,
      2642
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2643,
    "end": 2644,
    "range": [
      2643,
      2644
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2650,
    "end": 2655,
    "range": [
      2650,
      2655
    ]
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 2656,
    "end": 2661,
    "range": [
      2656,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2662,
    "end": 2663,
    "range": [
      2662,
      2663
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2672,
    "end": 2673,
    "range": [
      2672,
      2673
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2673,
    "end": 2674,
    "range": [
      2673,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2675,
    "end": 2676,
    "range": [
      2675,
      2676
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2676,
    "end": 2677,
    "range": [
      2676,
      2677
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2677,
    "end": 2678,
    "range": [
      2677,
      2678
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2678,
    "end": 2679,
    "range": [
      2678,
      2679
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2679,
    "end": 2680,
    "range": [
      2679,
      2680
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2681,
    "end": 2683,
    "range": [
      2681,
      2683
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2684,
    "end": 2685,
    "range": [
      2684,
      2685
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2685,
    "end": 2686,
    "range": [
      2685,
      2686
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2695,
    "end": 2697,
    "range": [
      2695,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2701,
    "end": 2702,
    "range": [
      2701,
      2702
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2708,
    "end": 2709,
    "range": [
      2708,
      2709
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2710,
    "end": 2712,
    "range": [
      2710,
      2712
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2724,
    "end": 2726,
    "range": [
      2724,
      2726
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2726,
    "end": 2727,
    "range": [
      2726,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2728,
    "end": 2729,
    "range": [
      2728,
      2729
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2729,
    "end": 2730,
    "range": [
      2729,
      2730
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2730,
    "end": 2731,
    "range": [
      2730,
      2731
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2732,
    "end": 2733,
    "range": [
      2732,
      2733
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2736,
    "end": 2737,
    "range": [
      2736,
      2737
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2738,
    "end": 2740,
    "range": [
      2738,
      2740
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2741,
    "end": 2742,
    "range": [
      2741,
      2742
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2752,
    "end": 2754,
    "range": [
      2752,
      2754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2754,
    "end": 2755,
    "range": [
      2754,
      2755
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2756,
    "end": 2757,
    "range": [
      2756,
      2757
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2757,
    "end": 2758,
    "range": [
      2757,
      2758
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2758,
    "end": 2759,
    "range": [
      2758,
      2759
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2759,
    "end": 2760,
    "range": [
      2759,
      2760
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2760,
    "end": 2761,
    "range": [
      2760,
      2761
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2761,
    "end": 2762,
    "range": [
      2761,
      2762
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2763,
    "end": 2764,
    "range": [
      2763,
      2764
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2764,
    "end": 2765,
    "range": [
      2764,
      2765
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2766,
    "end": 2767,
    "range": [
      2766,
      2767
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2767,
    "end": 2768,
    "range": [
      2767,
      2768
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2771,
    "end": 2772,
    "range": [
      2771,
      2772
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2773,
    "end": 2775,
    "range": [
      2773,
      2775
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2776,
    "end": 2777,
    "range": [
      2776,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2777,
    "end": 2778,
    "range": [
      2777,
      2778
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2787,
    "end": 2789,
    "range": [
      2787,
      2789
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2789,
    "end": 2790,
    "range": [
      2789,
      2790
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2791,
    "end": 2792,
    "range": [
      2791,
      2792
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2792,
    "end": 2793,
    "range": [
      2792,
      2793
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2793,
    "end": 2794,
    "range": [
      2793,
      2794
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2794,
    "end": 2795,
    "range": [
      2794,
      2795
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2795,
    "end": 2796,
    "range": [
      2795,
      2796
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2804,
    "end": 2805,
    "range": [
      2804,
      2805
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2806,
    "end": 2807,
    "range": [
      2806,
      2807
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2807,
    "end": 2808,
    "range": [
      2807,
      2808
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2809,
    "end": 2811,
    "range": [
      2809,
      2811
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2812,
    "end": 2813,
    "range": [
      2812,
      2813
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2813,
    "end": 2814,
    "range": [
      2813,
      2814
    ]
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 2824,
    "end": 2828,
    "range": [
      2824,
      2828
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2829,
    "end": 2830,
    "range": [
      2829,
      2830
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2831,
    "end": 2832,
    "range": [
      2831,
      2832
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2832,
    "end": 2833,
    "range": [
      2832,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2834,
    "end": 2836,
    "range": [
      2834,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2851,
    "end": 2855,
    "range": [
      2851,
      2855
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2862,
    "end": 2863,
    "range": [
      2862,
      2863
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2863,
    "end": 2864,
    "range": [
      2863,
      2864
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2864,
    "end": 2865,
    "range": [
      2864,
      2865
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2866,
    "end": 2868,
    "range": [
      2866,
      2868
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2869,
    "end": 2873,
    "range": [
      2869,
      2873
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2873,
    "end": 2874,
    "range": [
      2873,
      2874
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2920,
    "end": 2924,
    "range": [
      2920,
      2924
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2924,
    "end": 2925,
    "range": [
      2924,
      2925
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2925,
    "end": 2926,
    "range": [
      2925,
      2926
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2927,
    "end": 2928,
    "range": [
      2927,
      2928
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2931,
    "end": 2932,
    "range": [
      2931,
      2932
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2932,
    "end": 2933,
    "range": [
      2932,
      2933
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2933,
    "end": 2934,
    "range": [
      2933,
      2934
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2938,
    "end": 2939,
    "range": [
      2938,
      2939
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2940,
    "end": 2942,
    "range": [
      2940,
      2942
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2943,
    "end": 2947,
    "range": [
      2943,
      2947
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2947,
    "end": 2948,
    "range": [
      2947,
      2948
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2994,
    "end": 2998,
    "range": [
      2994,
      2998
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2999,
    "end": 3000,
    "range": [
      2999,
      3000
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3001,
    "end": 3002,
    "range": [
      3001,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3005,
    "end": 3006,
    "range": [
      3005,
      3006
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3007,
    "end": 3008,
    "range": [
      3007,
      3008
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3008,
    "end": 3009,
    "range": [
      3008,
      3009
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3010,
    "end": 3011,
    "range": [
      3010,
      3011
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3011,
    "end": 3012,
    "range": [
      3011,
      3012
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3013,
    "end": 3015,
    "range": [
      3013,
      3015
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3016,
    "end": 3020,
    "range": [
      3016,
      3020
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3020,
    "end": 3021,
    "range": [
      3020,
      3021
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3070,
    "end": 3074,
    "range": [
      3070,
      3074
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3074,
    "end": 3075,
    "range": [
      3074,
      3075
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3075,
    "end": 3077,
    "range": [
      3075,
      3077
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3078,
    "end": 3079,
    "range": [
      3078,
      3079
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3080,
    "end": 3081,
    "range": [
      3080,
      3081
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3081,
    "end": 3082,
    "range": [
      3081,
      3082
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3082,
    "end": 3083,
    "range": [
      3082,
      3083
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3083,
    "end": 3084,
    "range": [
      3083,
      3084
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3084,
    "end": 3085,
    "range": [
      3084,
      3085
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3086,
    "end": 3088,
    "range": [
      3086,
      3088
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3089,
    "end": 3093,
    "range": [
      3089,
      3093
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3093,
    "end": 3094,
    "range": [
      3093,
      3094
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3140,
    "end": 3144,
    "range": [
      3140,
      3144
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3144,
    "end": 3145,
    "range": [
      3144,
      3145
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3145,
    "end": 3147,
    "range": [
      3145,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3148,
    "end": 3149,
    "range": [
      3148,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3150,
    "end": 3151,
    "range": [
      3150,
      3151
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3152,
    "end": 3153,
    "range": [
      3152,
      3153
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3154,
    "end": 3155,
    "range": [
      3154,
      3155
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3155,
    "end": 3156,
    "range": [
      3155,
      3156
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3156,
    "end": 3157,
    "range": [
      3156,
      3157
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3158,
    "end": 3159,
    "range": [
      3158,
      3159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3159,
    "end": 3160,
    "range": [
      3159,
      3160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3161,
    "end": 3163,
    "range": [
      3161,
      3163
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3164,
    "end": 3168,
    "range": [
      3164,
      3168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3168,
    "end": 3169,
    "range": [
      3168,
      3169
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3215,
    "end": 3219,
    "range": [
      3215,
      3219
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3219,
    "end": 3220,
    "range": [
      3219,
      3220
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3220,
    "end": 3222,
    "range": [
      3220,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3225,
    "end": 3226,
    "range": [
      3225,
      3226
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3226,
    "end": 3227,
    "range": [
      3226,
      3227
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3227,
    "end": 3228,
    "range": [
      3227,
      3228
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3228,
    "end": 3229,
    "range": [
      3228,
      3229
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3229,
    "end": 3230,
    "range": [
      3229,
      3230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3230,
    "end": 3231,
    "range": [
      3230,
      3231
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3232,
    "end": 3233,
    "range": [
      3232,
      3233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3233,
    "end": 3234,
    "range": [
      3233,
      3234
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3235,
    "end": 3237,
    "range": [
      3235,
      3237
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3238,
    "end": 3242,
    "range": [
      3238,
      3242
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3242,
    "end": 3243,
    "range": [
      3242,
      3243
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3286,
    "end": 3290,
    "range": [
      3286,
      3290
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3290,
    "end": 3291,
    "range": [
      3290,
      3291
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3291,
    "end": 3293,
    "range": [
      3291,
      3293
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3296,
    "end": 3297,
    "range": [
      3296,
      3297
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3297,
    "end": 3298,
    "range": [
      3297,
      3298
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3298,
    "end": 3299,
    "range": [
      3298,
      3299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3299,
    "end": 3300,
    "range": [
      3299,
      3300
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3302,
    "end": 3304,
    "range": [
      3302,
      3304
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3305,
    "end": 3309,
    "range": [
      3305,
      3309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3309,
    "end": 3310,
    "range": [
      3309,
      3310
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3352,
    "end": 3356,
    "range": [
      3352,
      3356
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3356,
    "end": 3357,
    "range": [
      3356,
      3357
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3357,
    "end": 3359,
    "range": [
      3357,
      3359
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3360,
    "end": 3361,
    "range": [
      3360,
      3361
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3363,
    "end": 3364,
    "range": [
      3363,
      3364
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3364,
    "end": 3365,
    "range": [
      3364,
      3365
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3365,
    "end": 3366,
    "range": [
      3365,
      3366
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3366,
    "end": 3367,
    "range": [
      3366,
      3367
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3367,
    "end": 3368,
    "range": [
      3367,
      3368
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3368,
    "end": 3369,
    "range": [
      3368,
      3369
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3370,
    "end": 3371,
    "range": [
      3370,
      3371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3371,
    "end": 3372,
    "range": [
      3371,
      3372
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3373,
    "end": 3375,
    "range": [
      3373,
      3375
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3376,
    "end": 3380,
    "range": [
      3376,
      3380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3380,
    "end": 3381,
    "range": [
      3380,
      3381
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3423,
    "end": 3427,
    "range": [
      3423,
      3427
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3427,
    "end": 3428,
    "range": [
      3427,
      3428
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3428,
    "end": 3430,
    "range": [
      3428,
      3430
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3431,
    "end": 3432,
    "range": [
      3431,
      3432
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3433,
    "end": 3434,
    "range": [
      3433,
      3434
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3434,
    "end": 3435,
    "range": [
      3434,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3435,
    "end": 3436,
    "range": [
      3435,
      3436
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3436,
    "end": 3437,
    "range": [
      3436,
      3437
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3437,
    "end": 3438,
    "range": [
      3437,
      3438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3438,
    "end": 3439,
    "range": [
      3438,
      3439
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3443,
    "end": 3445,
    "range": [
      3443,
      3445
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3446,
    "end": 3450,
    "range": [
      3446,
      3450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3450,
    "end": 3451,
    "range": [
      3450,
      3451
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3497,
    "end": 3501,
    "range": [
      3497,
      3501
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3501,
    "end": 3502,
    "range": [
      3501,
      3502
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3502,
    "end": 3504,
    "range": [
      3502,
      3504
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3505,
    "end": 3506,
    "range": [
      3505,
      3506
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3507,
    "end": 3508,
    "range": [
      3507,
      3508
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3508,
    "end": 3509,
    "range": [
      3508,
      3509
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3509,
    "end": 3510,
    "range": [
      3509,
      3510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3510,
    "end": 3511,
    "range": [
      3510,
      3511
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3512,
    "end": 3513,
    "range": [
      3512,
      3513
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3514,
    "end": 3515,
    "range": [
      3514,
      3515
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3515,
    "end": 3516,
    "range": [
      3515,
      3516
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3517,
    "end": 3518,
    "range": [
      3517,
      3518
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3518,
    "end": 3519,
    "range": [
      3518,
      3519
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3520,
    "end": 3521,
    "range": [
      3520,
      3521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3521,
    "end": 3522,
    "range": [
      3521,
      3522
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3523,
    "end": 3525,
    "range": [
      3523,
      3525
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3526,
    "end": 3530,
    "range": [
      3526,
      3530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3530,
    "end": 3531,
    "range": [
      3530,
      3531
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3581,
    "end": 3585,
    "range": [
      3581,
      3585
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3585,
    "end": 3586,
    "range": [
      3585,
      3586
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3586,
    "end": 3588,
    "range": [
      3586,
      3588
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3589,
    "end": 3590,
    "range": [
      3589,
      3590
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3591,
    "end": 3592,
    "range": [
      3591,
      3592
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3592,
    "end": 3593,
    "range": [
      3592,
      3593
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3593,
    "end": 3594,
    "range": [
      3593,
      3594
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3594,
    "end": 3595,
    "range": [
      3594,
      3595
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3595,
    "end": 3596,
    "range": [
      3595,
      3596
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3597,
    "end": 3599,
    "range": [
      3597,
      3599
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3600,
    "end": 3604,
    "range": [
      3600,
      3604
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3604,
    "end": 3605,
    "range": [
      3604,
      3605
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3647,
    "end": 3651,
    "range": [
      3647,
      3651
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3651,
    "end": 3652,
    "range": [
      3651,
      3652
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3652,
    "end": 3654,
    "range": [
      3652,
      3654
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3655,
    "end": 3656,
    "range": [
      3655,
      3656
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3657,
    "end": 3658,
    "range": [
      3657,
      3658
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3658,
    "end": 3659,
    "range": [
      3658,
      3659
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3659,
    "end": 3660,
    "range": [
      3659,
      3660
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3660,
    "end": 3661,
    "range": [
      3660,
      3661
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3661,
    "end": 3662,
    "range": [
      3661,
      3662
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3662,
    "end": 3663,
    "range": [
      3662,
      3663
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3663,
    "end": 3664,
    "range": [
      3663,
      3664
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3665,
    "end": 3666,
    "range": [
      3665,
      3666
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3666,
    "end": 3667,
    "range": [
      3666,
      3667
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3668,
    "end": 3669,
    "range": [
      3668,
      3669
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3669,
    "end": 3670,
    "range": [
      3669,
      3670
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3670,
    "end": 3671,
    "range": [
      3670,
      3671
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3672,
    "end": 3673,
    "range": [
      3672,
      3673
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3673,
    "end": 3674,
    "range": [
      3673,
      3674
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3675,
    "end": 3677,
    "range": [
      3675,
      3677
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3678,
    "end": 3682,
    "range": [
      3678,
      3682
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3682,
    "end": 3683,
    "range": [
      3682,
      3683
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3725,
    "end": 3729,
    "range": [
      3725,
      3729
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3729,
    "end": 3730,
    "range": [
      3729,
      3730
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3730,
    "end": 3732,
    "range": [
      3730,
      3732
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3733,
    "end": 3734,
    "range": [
      3733,
      3734
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3735,
    "end": 3736,
    "range": [
      3735,
      3736
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3736,
    "end": 3737,
    "range": [
      3736,
      3737
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3737,
    "end": 3738,
    "range": [
      3737,
      3738
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3738,
    "end": 3739,
    "range": [
      3738,
      3739
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3739,
    "end": 3740,
    "range": [
      3739,
      3740
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3740,
    "end": 3741,
    "range": [
      3740,
      3741
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3742,
    "end": 3743,
    "range": [
      3742,
      3743
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3743,
    "end": 3744,
    "range": [
      3743,
      3744
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3745,
    "end": 3747,
    "range": [
      3745,
      3747
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3748,
    "end": 3752,
    "range": [
      3748,
      3752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3752,
    "end": 3753,
    "range": [
      3752,
      3753
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3799,
    "end": 3803,
    "range": [
      3799,
      3803
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3803,
    "end": 3804,
    "range": [
      3803,
      3804
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3804,
    "end": 3806,
    "range": [
      3804,
      3806
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3807,
    "end": 3808,
    "range": [
      3807,
      3808
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3809,
    "end": 3810,
    "range": [
      3809,
      3810
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3810,
    "end": 3811,
    "range": [
      3810,
      3811
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3811,
    "end": 3812,
    "range": [
      3811,
      3812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3812,
    "end": 3813,
    "range": [
      3812,
      3813
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3813,
    "end": 3814,
    "range": [
      3813,
      3814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3814,
    "end": 3815,
    "range": [
      3814,
      3815
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3816,
    "end": 3817,
    "range": [
      3816,
      3817
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3817,
    "end": 3818,
    "range": [
      3817,
      3818
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3819,
    "end": 3820,
    "range": [
      3819,
      3820
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3820,
    "end": 3821,
    "range": [
      3820,
      3821
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3822,
    "end": 3823,
    "range": [
      3822,
      3823
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3823,
    "end": 3824,
    "range": [
      3823,
      3824
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3825,
    "end": 3827,
    "range": [
      3825,
      3827
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3828,
    "end": 3832,
    "range": [
      3828,
      3832
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3832,
    "end": 3833,
    "range": [
      3832,
      3833
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3878,
    "end": 3882,
    "range": [
      3878,
      3882
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3882,
    "end": 3883,
    "range": [
      3882,
      3883
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 3883,
    "end": 3885,
    "range": [
      3883,
      3885
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3886,
    "end": 3887,
    "range": [
      3886,
      3887
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3888,
    "end": 3889,
    "range": [
      3888,
      3889
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3889,
    "end": 3890,
    "range": [
      3889,
      3890
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3890,
    "end": 3891,
    "range": [
      3890,
      3891
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3891,
    "end": 3892,
    "range": [
      3891,
      3892
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3892,
    "end": 3893,
    "range": [
      3892,
      3893
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3894,
    "end": 3896,
    "range": [
      3894,
      3896
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3897,
    "end": 3901,
    "range": [
      3897,
      3901
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3901,
    "end": 3902,
    "range": [
      3901,
      3902
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3944,
    "end": 3948,
    "range": [
      3944,
      3948
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3948,
    "end": 3949,
    "range": [
      3948,
      3949
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 3949,
    "end": 3951,
    "range": [
      3949,
      3951
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3952,
    "end": 3953,
    "range": [
      3952,
      3953
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3954,
    "end": 3955,
    "range": [
      3954,
      3955
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3955,
    "end": 3956,
    "range": [
      3955,
      3956
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3956,
    "end": 3957,
    "range": [
      3956,
      3957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3957,
    "end": 3958,
    "range": [
      3957,
      3958
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3958,
    "end": 3959,
    "range": [
      3958,
      3959
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3959,
    "end": 3960,
    "range": [
      3959,
      3960
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3960,
    "end": 3961,
    "range": [
      3960,
      3961
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3962,
    "end": 3963,
    "range": [
      3962,
      3963
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3963,
    "end": 3964,
    "range": [
      3963,
      3964
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3965,
    "end": 3966,
    "range": [
      3965,
      3966
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3966,
    "end": 3967,
    "range": [
      3966,
      3967
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3967,
    "end": 3968,
    "range": [
      3967,
      3968
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3969,
    "end": 3970,
    "range": [
      3969,
      3970
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3970,
    "end": 3971,
    "range": [
      3970,
      3971
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3972,
    "end": 3974,
    "range": [
      3972,
      3974
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3975,
    "end": 3979,
    "range": [
      3975,
      3979
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3979,
    "end": 3980,
    "range": [
      3979,
      3980
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4022,
    "end": 4026,
    "range": [
      4022,
      4026
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4026,
    "end": 4027,
    "range": [
      4026,
      4027
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 4027,
    "end": 4029,
    "range": [
      4027,
      4029
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4030,
    "end": 4031,
    "range": [
      4030,
      4031
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4032,
    "end": 4033,
    "range": [
      4032,
      4033
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4033,
    "end": 4034,
    "range": [
      4033,
      4034
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4034,
    "end": 4035,
    "range": [
      4034,
      4035
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4035,
    "end": 4036,
    "range": [
      4035,
      4036
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4036,
    "end": 4037,
    "range": [
      4036,
      4037
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4037,
    "end": 4038,
    "range": [
      4037,
      4038
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4039,
    "end": 4040,
    "range": [
      4039,
      4040
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4040,
    "end": 4041,
    "range": [
      4040,
      4041
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4042,
    "end": 4044,
    "range": [
      4042,
      4044
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4045,
    "end": 4049,
    "range": [
      4045,
      4049
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4049,
    "end": 4050,
    "range": [
      4049,
      4050
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4095,
    "end": 4099,
    "range": [
      4095,
      4099
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4099,
    "end": 4100,
    "range": [
      4099,
      4100
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 4100,
    "end": 4102,
    "range": [
      4100,
      4102
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4103,
    "end": 4104,
    "range": [
      4103,
      4104
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4105,
    "end": 4106,
    "range": [
      4105,
      4106
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4106,
    "end": 4107,
    "range": [
      4106,
      4107
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4107,
    "end": 4108,
    "range": [
      4107,
      4108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4108,
    "end": 4109,
    "range": [
      4108,
      4109
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4109,
    "end": 4110,
    "range": [
      4109,
      4110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4110,
    "end": 4111,
    "range": [
      4110,
      4111
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4112,
    "end": 4113,
    "range": [
      4112,
      4113
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4113,
    "end": 4114,
    "range": [
      4113,
      4114
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4115,
    "end": 4116,
    "range": [
      4115,
      4116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4116,
    "end": 4117,
    "range": [
      4116,
      4117
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4118,
    "end": 4119,
    "range": [
      4118,
      4119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4119,
    "end": 4120,
    "range": [
      4119,
      4120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4121,
    "end": 4123,
    "range": [
      4121,
      4123
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4124,
    "end": 4128,
    "range": [
      4124,
      4128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4128,
    "end": 4129,
    "range": [
      4128,
      4129
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4168,
    "end": 4169,
    "range": [
      4168,
      4169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4174,
    "end": 4175,
    "range": [
      4174,
      4175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4176,
    "end": 4177,
    "range": [
      4176,
      4177
    ]
  }
]
```
