__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 114
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
              "start": 115,
              "end": 116
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 129
              },
              "typeArguments": null,
              "start": 125,
              "end": 129
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 115,
            "end": 129
          }
        ],
        "start": 114,
        "end": 130
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                                "start": 158,
                                "end": 159
                              },
                              "typeArguments": null,
                              "start": 158,
                              "end": 159
                            },
                            "start": 156,
                            "end": 159
                          },
                          "start": 155,
                          "end": 159
                        },
                        "init": null,
                        "definite": false,
                        "start": 155,
                        "end": 159
                      }
                    ],
                    "declare": false,
                    "start": 151,
                    "end": 160
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
                          "typeAnnotation": null,
                          "start": 173,
                          "end": 174
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 177,
                              "end": 178
                            },
                            "property": {
                              "type": "Literal",
                              "value": "getDate",
                              "raw": "'getDate'",
                              "start": 179,
                              "end": 188
                            },
                            "optional": false,
                            "computed": true,
                            "start": 177,
                            "end": 189
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 177,
                          "end": 191
                        },
                        "definite": false,
                        "start": 173,
                        "end": 191
                      }
                    ],
                    "declare": false,
                    "start": 169,
                    "end": 192
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 219
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 222,
                            "end": 223
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "getDate",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 224,
                            "end": 231
                          },
                          "optional": false,
                          "computed": false,
                          "start": 222,
                          "end": 231
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 222,
                        "end": 233
                      },
                      "start": 218,
                      "end": 233
                    },
                    "start": 211,
                    "end": 234
                  }
                ],
                "start": 141,
                "end": 240
              },
              "expression": false,
              "start": 138,
              "end": 240
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 137,
            "end": 240
          }
        ],
        "start": 131,
        "end": 242
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 242
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 249
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 259,
                        "end": 263
                      },
                      "typeArguments": null,
                      "start": 259,
                      "end": 263
                    }
                  ],
                  "start": 258,
                  "end": 264
                },
                "arguments": [],
                "start": 253,
                "end": 266
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 269
              },
              "optional": false,
              "computed": false,
              "start": 252,
              "end": 269
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 252,
            "end": 271
          },
          "definite": false,
          "start": 248,
          "end": 271
        }
      ],
      "declare": false,
      "start": 244,
      "end": 272
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 285
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
              "start": 286,
              "end": 287
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 300
              },
              "typeArguments": null,
              "start": 296,
              "end": 300
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 286,
            "end": 300
          }
        ],
        "start": 285,
        "end": 301
      },
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
              "start": 308,
              "end": 311
            },
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
                  "start": 313,
                  "end": 314
                },
                "typeArguments": null,
                "start": 313,
                "end": 314
              },
              "start": 311,
              "end": 314
            },
            "accessibility": null,
            "static": false,
            "start": 308,
            "end": 315
          }
        ],
        "start": 302,
        "end": 317
      },
      "declare": false,
      "start": 274,
      "end": 317
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 326
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 327,
                        "end": 331
                      },
                      "typeArguments": null,
                      "start": 327,
                      "end": 331
                    }
                  ],
                  "start": 326,
                  "end": 332
                },
                "start": 325,
                "end": 332
              },
              "start": 323,
              "end": 332
            },
            "start": 322,
            "end": 332
          },
          "init": null,
          "definite": false,
          "start": 322,
          "end": 332
        }
      ],
      "declare": false,
      "start": 318,
      "end": 333
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 340
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 344
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 348
                },
                "optional": false,
                "computed": false,
                "start": 343,
                "end": 348
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDate",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 356
              },
              "optional": false,
              "computed": false,
              "start": 343,
              "end": 356
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 343,
            "end": 358
          },
          "definite": false,
          "start": 338,
          "end": 358
        }
      ],
      "declare": false,
      "start": 334,
      "end": 359
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 367
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 371
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 375
                },
                "optional": false,
                "computed": false,
                "start": 370,
                "end": 375
              },
              "property": {
                "type": "Literal",
                "value": "getDate",
                "raw": "'getDate'",
                "start": 376,
                "end": 385
              },
              "optional": false,
              "computed": true,
              "start": 370,
              "end": 386
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 370,
            "end": 388
          },
          "definite": false,
          "start": 364,
          "end": 388
        }
      ],
      "declare": false,
      "start": 360,
      "end": 389
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
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 405,
                            "end": 406
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 415,
                              "end": 419
                            },
                            "typeArguments": null,
                            "start": 415,
                            "end": 419
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 405,
                          "end": 419
                        }
                      ],
                      "start": 404,
                      "end": 420
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
                          "start": 424,
                          "end": 425
                        },
                        "typeArguments": null,
                        "start": 424,
                        "end": 425
                      },
                      "start": 422,
                      "end": 425
                    },
                    "start": 404,
                    "end": 426
                  }
                ],
                "start": 398,
                "end": 428
              },
              "start": 396,
              "end": 428
            },
            "start": 395,
            "end": 428
          },
          "init": null,
          "definite": false,
          "start": 395,
          "end": 428
        }
      ],
      "declare": false,
      "start": 391,
      "end": 428
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 435
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 439
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 440,
                        "end": 444
                      },
                      "typeArguments": null,
                      "start": 440,
                      "end": 444
                    }
                  ],
                  "start": 439,
                  "end": 445
                },
                "arguments": [],
                "optional": false,
                "start": 438,
                "end": 447
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDate",
                "optional": false,
                "typeAnnotation": null,
                "start": 448,
                "end": 455
              },
              "optional": false,
              "computed": false,
              "start": 438,
              "end": 455
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 438,
            "end": 457
          },
          "definite": false,
          "start": 433,
          "end": 457
        }
      ],
      "declare": false,
      "start": 429,
      "end": 458
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 466
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 470
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 469,
                "end": 472
              },
              "property": {
                "type": "Literal",
                "value": "getDate",
                "raw": "'getDate'",
                "start": 473,
                "end": 482
              },
              "optional": false,
              "computed": true,
              "start": 469,
              "end": 483
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 469,
            "end": 485
          },
          "definite": false,
          "start": 463,
          "end": 485
        }
      ],
      "declare": false,
      "start": 459,
      "end": 486
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
            "typeAnnotation": null,
            "start": 492,
            "end": 493
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 505
                },
                "value": {
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 508,
                          "end": 509
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 518,
                            "end": 522
                          },
                          "typeArguments": null,
                          "start": 518,
                          "end": 522
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 508,
                        "end": 522
                      }
                    ],
                    "start": 507,
                    "end": 523
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
                            "start": 527,
                            "end": 528
                          },
                          "typeArguments": null,
                          "start": 527,
                          "end": 528
                        },
                        "start": 525,
                        "end": 528
                      },
                      "start": 524,
                      "end": 528
                    }
                  ],
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
                              "typeAnnotation": null,
                              "start": 547,
                              "end": 548
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 551,
                                  "end": 552
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": "getDate",
                                  "raw": "'getDate'",
                                  "start": 553,
                                  "end": 562
                                },
                                "optional": false,
                                "computed": true,
                                "start": 551,
                                "end": 563
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 551,
                              "end": 565
                            },
                            "definite": false,
                            "start": 547,
                            "end": 565
                          }
                        ],
                        "declare": false,
                        "start": 543,
                        "end": 566
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 592,
                            "end": 593
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 596,
                                "end": 597
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getDate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 598,
                                "end": 605
                              },
                              "optional": false,
                              "computed": false,
                              "start": 596,
                              "end": 605
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 596,
                            "end": 607
                          },
                          "start": 592,
                          "end": 607
                        },
                        "start": 585,
                        "end": 608
                      }
                    ],
                    "start": 533,
                    "end": 614
                  },
                  "id": null,
                  "generator": false,
                  "start": 507,
                  "end": 614
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 502,
                "end": 614
              }
            ],
            "start": 496,
            "end": 616
          },
          "definite": false,
          "start": 492,
          "end": 616
        }
      ],
      "declare": false,
      "start": 488,
      "end": 616
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 622,
            "end": 624
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 628
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 629,
                "end": 632
              },
              "optional": false,
              "computed": false,
              "start": 627,
              "end": 632
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 641
                },
                "typeArguments": null,
                "arguments": [],
                "start": 633,
                "end": 643
              }
            ],
            "optional": false,
            "start": 627,
            "end": 644
          },
          "definite": false,
          "start": 622,
          "end": 644
        }
      ],
      "declare": false,
      "start": 618,
      "end": 645
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 107,
  "end": 645
}
```
