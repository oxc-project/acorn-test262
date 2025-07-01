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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 21
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 24,
              "end": 26
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 27
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 43
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
                          "name": "copy",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 73,
                                  "end": 77
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 78,
                                  "end": 82
                                },
                                "start": 73,
                                "end": 82
                              },
                              "typeArguments": null,
                              "start": 66,
                              "end": 82
                            },
                            "start": 64,
                            "end": 82
                          },
                          "start": 60,
                          "end": 82
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 85,
                          "end": 87
                        },
                        "definite": false,
                        "start": 60,
                        "end": 87
                      }
                    ],
                    "declare": false,
                    "start": 56,
                    "end": 88
                  }
                ],
                "start": 46,
                "end": 94
              },
              "expression": false,
              "start": 43,
              "end": 94
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 32,
            "end": 94
          }
        ],
        "start": 11,
        "end": 96
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 96
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 109
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 120
            },
            "typeAnnotation": null,
            "value": {
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
                    "start": 125,
                    "end": 128
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 130,
                    "end": 132
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 125,
                  "end": 132
                }
              ],
              "start": 123,
              "end": 134
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 116,
            "end": 135
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "this",
              "raw": "'this'",
              "start": 141,
              "end": 147
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 151,
              "end": 153
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 140,
            "end": 154
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 170
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
                          "name": "copy",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 200,
                                  "end": 204
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 205,
                                  "end": 209
                                },
                                "start": 200,
                                "end": 209
                              },
                              "typeArguments": null,
                              "start": 193,
                              "end": 209
                            },
                            "start": 191,
                            "end": 209
                          },
                          "start": 187,
                          "end": 209
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
                                "start": 214,
                                "end": 217
                              },
                              "value": {
                                "type": "Literal",
                                "value": "",
                                "raw": "''",
                                "start": 219,
                                "end": 221
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 214,
                              "end": 221
                            }
                          ],
                          "start": 212,
                          "end": 223
                        },
                        "definite": false,
                        "start": 187,
                        "end": 223
                      }
                    ],
                    "declare": false,
                    "start": 183,
                    "end": 224
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
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "ThisExpression",
                                    "start": 249,
                                    "end": 253
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "data",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 254,
                                    "end": 258
                                  },
                                  "start": 249,
                                  "end": 258
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 259,
                                  "end": 262
                                },
                                "start": 249,
                                "end": 262
                              },
                              "typeArguments": null,
                              "start": 242,
                              "end": 262
                            },
                            "start": 240,
                            "end": 262
                          },
                          "start": 237,
                          "end": 262
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 265,
                          "end": 267
                        },
                        "definite": false,
                        "start": 237,
                        "end": 267
                      }
                    ],
                    "declare": false,
                    "start": 233,
                    "end": 268
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
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "ThisExpression",
                                "start": 295,
                                "end": 299
                              },
                              "typeArguments": null,
                              "start": 288,
                              "end": 299
                            },
                            "start": 286,
                            "end": 299
                          },
                          "start": 282,
                          "end": 299
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 302,
                          "end": 306
                        },
                        "definite": false,
                        "start": 282,
                        "end": 306
                      }
                    ],
                    "declare": false,
                    "start": 278,
                    "end": 307
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 316,
                        "end": 320
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 321,
                        "end": 325
                      },
                      "optional": false,
                      "computed": false,
                      "start": 316,
                      "end": 325
                    },
                    "directive": null,
                    "start": 316,
                    "end": 326
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
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 352,
                                  "end": 356
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "this",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 357,
                                  "end": 361
                                },
                                "start": 352,
                                "end": 361
                              },
                              "typeArguments": null,
                              "start": 345,
                              "end": 361
                            },
                            "start": 343,
                            "end": 361
                          },
                          "start": 340,
                          "end": 361
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 364,
                          "end": 366
                        },
                        "definite": false,
                        "start": 340,
                        "end": 366
                      }
                    ],
                    "declare": false,
                    "start": 336,
                    "end": 367
                  }
                ],
                "start": 173,
                "end": 373
              },
              "expression": false,
              "start": 170,
              "end": 373
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 159,
            "end": 373
          }
        ],
        "start": 110,
        "end": 375
      },
      "abstract": false,
      "declare": false,
      "start": 98,
      "end": 375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 392
      },
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
            "kind": "let",
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
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "ThisExpression",
                          "start": 415,
                          "end": 419
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "no",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 420,
                          "end": 422
                        },
                        "start": 415,
                        "end": 422
                      },
                      "typeArguments": null,
                      "start": 408,
                      "end": 422
                    },
                    "start": 406,
                    "end": 422
                  },
                  "start": 405,
                  "end": 422
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 425,
                  "end": 426
                },
                "definite": false,
                "start": 405,
                "end": 426
              }
            ],
            "declare": false,
            "start": 401,
            "end": 427
          }
        ],
        "start": 395,
        "end": 429
      },
      "expression": false,
      "start": 378,
      "end": 429
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 445
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                    "name": "no",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 454,
                    "end": 456
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 458,
                      "end": 464
                    },
                    "start": 456,
                    "end": 464
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 454,
                  "end": 464
                }
              ],
              "start": 452,
              "end": 466
            },
            "start": 450,
            "end": 466
          },
          "start": 446,
          "end": 466
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "ThisExpression",
                          "start": 488,
                          "end": 492
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "no",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 493,
                          "end": 495
                        },
                        "start": 488,
                        "end": 495
                      },
                      "typeArguments": null,
                      "start": 481,
                      "end": 495
                    },
                    "start": 479,
                    "end": 495
                  },
                  "start": 478,
                  "end": 495
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 498,
                  "end": 499
                },
                "definite": false,
                "start": 478,
                "end": 499
              }
            ],
            "declare": false,
            "start": 474,
            "end": 500
          }
        ],
        "start": 468,
        "end": 502
      },
      "expression": false,
      "start": 431,
      "end": 502
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 518
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                        "name": "no",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 527,
                        "end": 529
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 531,
                          "end": 537
                        },
                        "start": 529,
                        "end": 537
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 527,
                      "end": 537
                    }
                  ],
                  "start": 525,
                  "end": 539
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 542,
                  "end": 551
                }
              ],
              "start": 525,
              "end": 551
            },
            "start": 523,
            "end": 551
          },
          "start": 519,
          "end": 551
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "ThisExpression",
                          "start": 573,
                          "end": 577
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "no",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 578,
                          "end": 580
                        },
                        "start": 573,
                        "end": 580
                      },
                      "typeArguments": null,
                      "start": 566,
                      "end": 580
                    },
                    "start": 564,
                    "end": 580
                  },
                  "start": 563,
                  "end": 580
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 583,
                  "end": 584
                },
                "definite": false,
                "start": 563,
                "end": 584
              }
            ],
            "declare": false,
            "start": 559,
            "end": 585
          }
        ],
        "start": 553,
        "end": 587
      },
      "expression": false,
      "start": 504,
      "end": 587
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 600
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
              "name": "no",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 609
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 612,
              "end": 613
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 607,
            "end": 614
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 620,
              "end": 621
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
                    "type": "VariableDeclaration",
                    "kind": "let",
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
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 690,
                                  "end": 694
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "no",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 695,
                                  "end": 697
                                },
                                "start": 690,
                                "end": 697
                              },
                              "typeArguments": null,
                              "start": 683,
                              "end": 697
                            },
                            "start": 681,
                            "end": 697
                          },
                          "start": 680,
                          "end": 697
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 700,
                          "end": 701
                        },
                        "definite": false,
                        "start": 680,
                        "end": 701
                      }
                    ],
                    "declare": false,
                    "start": 676,
                    "end": 702
                  }
                ],
                "start": 630,
                "end": 708
              },
              "id": null,
              "generator": false,
              "start": 624,
              "end": 708
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 620,
            "end": 708
          }
        ],
        "start": 601,
        "end": 710
      },
      "abstract": false,
      "declare": false,
      "start": 589,
      "end": 710
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test6",
        "optional": false,
        "typeAnnotation": null,
        "start": 722,
        "end": 727
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 745,
                    "end": 746
                  },
                  "init": {
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
                          "type": "VariableDeclaration",
                          "kind": "let",
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
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 779,
                                        "end": 783
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "no",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 784,
                                        "end": 786
                                      },
                                      "start": 779,
                                      "end": 786
                                    },
                                    "typeArguments": null,
                                    "start": 772,
                                    "end": 786
                                  },
                                  "start": 770,
                                  "end": 786
                                },
                                "start": 769,
                                "end": 786
                              },
                              "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 789,
                                "end": 790
                              },
                              "definite": false,
                              "start": 769,
                              "end": 790
                            }
                          ],
                          "declare": false,
                          "start": 765,
                          "end": 791
                        }
                      ],
                      "start": 755,
                      "end": 797
                    },
                    "id": null,
                    "generator": false,
                    "start": 749,
                    "end": 797
                  },
                  "definite": false,
                  "start": 745,
                  "end": 797
                }
              ],
              "declare": false,
              "start": 741,
              "end": 797
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 734,
            "end": 797
          }
        ],
        "start": 728,
        "end": 799
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 712,
      "end": 799
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test7",
        "optional": false,
        "typeAnnotation": null,
        "start": 808,
        "end": 813
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 831,
                    "end": 832
                  },
                  "init": {
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
                          "type": "VariableDeclaration",
                          "kind": "let",
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
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 865,
                                        "end": 869
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "no",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 870,
                                        "end": 872
                                      },
                                      "start": 865,
                                      "end": 872
                                    },
                                    "typeArguments": null,
                                    "start": 858,
                                    "end": 872
                                  },
                                  "start": 856,
                                  "end": 872
                                },
                                "start": 855,
                                "end": 872
                              },
                              "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 875,
                                "end": 876
                              },
                              "definite": false,
                              "start": 855,
                              "end": 876
                            }
                          ],
                          "declare": false,
                          "start": 851,
                          "end": 877
                        }
                      ],
                      "start": 841,
                      "end": 883
                    },
                    "id": null,
                    "generator": false,
                    "start": 835,
                    "end": 883
                  },
                  "definite": false,
                  "start": 831,
                  "end": 883
                }
              ],
              "declare": false,
              "start": 827,
              "end": 883
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 820,
            "end": 883
          }
        ],
        "start": 814,
        "end": 885
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 801,
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
            "name": "Test8",
            "optional": false,
            "typeAnnotation": null,
            "start": 893,
            "end": 898
          },
          "init": {
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
                  "type": "VariableDeclaration",
                  "kind": "let",
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
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "ThisExpression",
                                "start": 927,
                                "end": 931
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "no",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 932,
                                "end": 934
                              },
                              "start": 927,
                              "end": 934
                            },
                            "typeArguments": null,
                            "start": 920,
                            "end": 934
                          },
                          "start": 918,
                          "end": 934
                        },
                        "start": 917,
                        "end": 934
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 937,
                        "end": 938
                      },
                      "definite": false,
                      "start": 917,
                      "end": 938
                    }
                  ],
                  "declare": false,
                  "start": 913,
                  "end": 939
                }
              ],
              "start": 907,
              "end": 941
            },
            "id": null,
            "generator": false,
            "start": 901,
            "end": 941
          },
          "definite": false,
          "start": 893,
          "end": 941
        }
      ],
      "declare": false,
      "start": 887,
      "end": 941
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test9",
        "optional": false,
        "typeAnnotation": null,
        "start": 949,
        "end": 954
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
              "name": "no",
              "optional": false,
              "typeAnnotation": null,
              "start": 961,
              "end": 963
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 966,
              "end": 967
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 961,
            "end": 968
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 977
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 980,
              "end": 981
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 973,
            "end": 982
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 988,
              "end": 989
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 1006,
                        "end": 1010
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test9D1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1022,
                        "end": 1029
                      },
                      "start": 1006,
                      "end": 1029
                    },
                    "consequent": {
                      "type": "BlockStatement",
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
                                "name": "d1",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "ThisExpression",
                                      "start": 1062,
                                      "end": 1066
                                    },
                                    "typeArguments": null,
                                    "start": 1055,
                                    "end": 1066
                                  },
                                  "start": 1053,
                                  "end": 1066
                                },
                                "start": 1051,
                                "end": 1066
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 1069,
                                "end": 1073
                              },
                              "definite": false,
                              "start": 1051,
                              "end": 1073
                            }
                          ],
                          "declare": false,
                          "start": 1045,
                          "end": 1074
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1087,
                                "end": 1089
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1090,
                                "end": 1092
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1087,
                              "end": 1092
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1087,
                            "end": 1094
                          },
                          "directive": null,
                          "start": 1087,
                          "end": 1095
                        }
                      ],
                      "start": 1031,
                      "end": 1105
                    },
                    "alternate": null,
                    "start": 1002,
                    "end": 1105
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 1119,
                        "end": 1123
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test9D2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1135,
                        "end": 1142
                      },
                      "start": 1119,
                      "end": 1142
                    },
                    "consequent": {
                      "type": "BlockStatement",
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
                                "name": "d2",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "ThisExpression",
                                      "start": 1175,
                                      "end": 1179
                                    },
                                    "typeArguments": null,
                                    "start": 1168,
                                    "end": 1179
                                  },
                                  "start": 1166,
                                  "end": 1179
                                },
                                "start": 1164,
                                "end": 1179
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 1182,
                                "end": 1186
                              },
                              "definite": false,
                              "start": 1164,
                              "end": 1186
                            }
                          ],
                          "declare": false,
                          "start": 1158,
                          "end": 1187
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1200,
                                "end": 1202
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1203,
                                "end": 1205
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1200,
                              "end": 1205
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1200,
                            "end": 1207
                          },
                          "directive": null,
                          "start": 1200,
                          "end": 1208
                        }
                      ],
                      "start": 1144,
                      "end": 1218
                    },
                    "alternate": null,
                    "start": 1115,
                    "end": 1218
                  }
                ],
                "start": 992,
                "end": 1224
              },
              "expression": false,
              "start": 989,
              "end": 1224
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 988,
            "end": 1224
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1230,
              "end": 1231
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1248,
                          "end": 1252
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "no",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1253,
                          "end": 1255
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1248,
                        "end": 1255
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1260,
                        "end": 1261
                      },
                      "start": 1248,
                      "end": 1261
                    },
                    "consequent": {
                      "type": "BlockStatement",
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
                                "name": "no",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 1294,
                                        "end": 1298
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "no",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1299,
                                        "end": 1301
                                      },
                                      "start": 1294,
                                      "end": 1301
                                    },
                                    "typeArguments": null,
                                    "start": 1287,
                                    "end": 1301
                                  },
                                  "start": 1285,
                                  "end": 1301
                                },
                                "start": 1283,
                                "end": 1301
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1304,
                                  "end": 1308
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "no",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1309,
                                  "end": 1311
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1304,
                                "end": 1311
                              },
                              "definite": false,
                              "start": 1283,
                              "end": 1311
                            }
                          ],
                          "declare": false,
                          "start": 1277,
                          "end": 1312
                        }
                      ],
                      "start": 1263,
                      "end": 1322
                    },
                    "alternate": null,
                    "start": 1244,
                    "end": 1322
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1336,
                          "end": 1340
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1341,
                          "end": 1345
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1336,
                        "end": 1345
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1350,
                        "end": 1351
                      },
                      "start": 1336,
                      "end": 1351
                    },
                    "consequent": {
                      "type": "BlockStatement",
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
                                "name": "no",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 1384,
                                        "end": 1388
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "this",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1389,
                                        "end": 1393
                                      },
                                      "start": 1384,
                                      "end": 1393
                                    },
                                    "typeArguments": null,
                                    "start": 1377,
                                    "end": 1393
                                  },
                                  "start": 1375,
                                  "end": 1393
                                },
                                "start": 1373,
                                "end": 1393
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1396,
                                  "end": 1400
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "this",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1401,
                                  "end": 1405
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1396,
                                "end": 1405
                              },
                              "definite": false,
                              "start": 1373,
                              "end": 1405
                            }
                          ],
                          "declare": false,
                          "start": 1367,
                          "end": 1406
                        }
                      ],
                      "start": 1353,
                      "end": 1416
                    },
                    "alternate": null,
                    "start": 1332,
                    "end": 1416
                  }
                ],
                "start": 1234,
                "end": 1422
              },
              "expression": false,
              "start": 1231,
              "end": 1422
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1230,
            "end": 1422
          }
        ],
        "start": 955,
        "end": 1424
      },
      "abstract": false,
      "declare": false,
      "start": 943,
      "end": 1424
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test9D1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1432,
        "end": 1439
      },
      "typeParameters": null,
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
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1446,
              "end": 1448
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
                "body": [],
                "start": 1451,
                "end": 1453
              },
              "expression": false,
              "start": 1448,
              "end": 1453
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1446,
            "end": 1453
          }
        ],
        "start": 1440,
        "end": 1455
      },
      "abstract": false,
      "declare": false,
      "start": 1426,
      "end": 1455
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test9D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1463,
        "end": 1470
      },
      "typeParameters": null,
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
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1477,
              "end": 1479
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
                "body": [],
                "start": 1482,
                "end": 1484
              },
              "expression": false,
              "start": 1479,
              "end": 1484
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1477,
            "end": 1484
          }
        ],
        "start": 1471,
        "end": 1486
      },
      "abstract": false,
      "declare": false,
      "start": 1457,
      "end": 1486
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1494,
        "end": 1500
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
              "start": 1507,
              "end": 1508
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1513,
                      "end": 1514
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1517,
                        "end": 1523
                      },
                      "start": 1515,
                      "end": 1523
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1513,
                    "end": 1523
                  }
                ],
                "start": 1511,
                "end": 1525
              },
              "start": 1509,
              "end": 1525
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1507,
            "end": 1525
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1531,
              "end": 1534
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
                    "kind": "let",
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
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "ThisExpression",
                                  "start": 1561,
                                  "end": 1565
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1566,
                                  "end": 1567
                                },
                                "start": 1561,
                                "end": 1567
                              },
                              "typeArguments": null,
                              "start": 1554,
                              "end": 1567
                            },
                            "start": 1552,
                            "end": 1567
                          },
                          "start": 1551,
                          "end": 1567
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1570,
                            "end": 1579
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1583,
                            "end": 1586
                          },
                          "start": 1570,
                          "end": 1586
                        },
                        "definite": false,
                        "start": 1551,
                        "end": 1586
                      }
                    ],
                    "declare": false,
                    "start": 1547,
                    "end": 1587
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1600,
                        "end": 1604
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1605,
                        "end": 1606
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1600,
                      "end": 1606
                    },
                    "consequent": {
                      "type": "BlockStatement",
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "ThisExpression",
                                        "start": 1636,
                                        "end": 1640
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1641,
                                        "end": 1642
                                      },
                                      "start": 1636,
                                      "end": 1642
                                    },
                                    "typeArguments": null,
                                    "start": 1629,
                                    "end": 1642
                                  },
                                  "start": 1627,
                                  "end": 1642
                                },
                                "start": 1626,
                                "end": 1642
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1645,
                                  "end": 1654
                                },
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1658,
                                  "end": 1661
                                },
                                "start": 1645,
                                "end": 1661
                              },
                              "definite": false,
                              "start": 1626,
                              "end": 1661
                            }
                          ],
                          "declare": false,
                          "start": 1622,
                          "end": 1662
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "ThisExpression",
                                          "start": 1727,
                                          "end": 1731
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1732,
                                          "end": 1733
                                        },
                                        "start": 1727,
                                        "end": 1733
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "b",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1734,
                                        "end": 1735
                                      },
                                      "start": 1727,
                                      "end": 1735
                                    },
                                    "typeArguments": null,
                                    "start": 1720,
                                    "end": 1735
                                  },
                                  "start": 1718,
                                  "end": 1735
                                },
                                "start": 1717,
                                "end": 1735
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1738,
                                  "end": 1747
                                },
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1751,
                                  "end": 1754
                                },
                                "start": 1738,
                                "end": 1754
                              },
                              "definite": false,
                              "start": 1717,
                              "end": 1754
                            }
                          ],
                          "declare": false,
                          "start": 1713,
                          "end": 1755
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1773,
                                "end": 1777
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1778,
                                "end": 1779
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1773,
                              "end": 1779
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1780,
                              "end": 1781
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1773,
                            "end": 1781
                          },
                          "consequent": {
                            "type": "BlockStatement",
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
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeQuery",
                                          "exprName": {
                                            "type": "TSQualifiedName",
                                            "left": {
                                              "type": "TSQualifiedName",
                                              "left": {
                                                "type": "ThisExpression",
                                                "start": 1815,
                                                "end": 1819
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1820,
                                                "end": 1821
                                              },
                                              "start": 1815,
                                              "end": 1821
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "b",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1822,
                                              "end": 1823
                                            },
                                            "start": 1815,
                                            "end": 1823
                                          },
                                          "typeArguments": null,
                                          "start": 1808,
                                          "end": 1823
                                        },
                                        "start": 1806,
                                        "end": 1823
                                      },
                                      "start": 1805,
                                      "end": 1823
                                    },
                                    "init": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1826,
                                        "end": 1835
                                      },
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 1839,
                                        "end": 1842
                                      },
                                      "start": 1826,
                                      "end": 1842
                                    },
                                    "definite": false,
                                    "start": 1805,
                                    "end": 1842
                                  }
                                ],
                                "declare": false,
                                "start": 1801,
                                "end": 1843
                              }
                            ],
                            "start": 1783,
                            "end": 1886
                          },
                          "alternate": null,
                          "start": 1769,
                          "end": 1886
                        }
                      ],
                      "start": 1608,
                      "end": 1896
                    },
                    "alternate": null,
                    "start": 1596,
                    "end": 1896
                  }
                ],
                "start": 1537,
                "end": 1902
              },
              "expression": false,
              "start": 1534,
              "end": 1902
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1531,
            "end": 1902
          }
        ],
        "start": 1501,
        "end": 1904
      },
      "abstract": false,
      "declare": false,
      "start": 1488,
      "end": 1904
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1912,
        "end": 1918
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
              "name": "this",
              "optional": false,
              "typeAnnotation": null,
              "start": 1925,
              "end": 1929
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
                      "start": 1934,
                      "end": 1935
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1938,
                        "end": 1944
                      },
                      "start": 1936,
                      "end": 1944
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1934,
                    "end": 1944
                  }
                ],
                "start": 1932,
                "end": 1946
              },
              "start": 1930,
              "end": 1946
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1925,
            "end": 1947
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1957,
              "end": 1960
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1979,
                          "end": 1980
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1983,
                          "end": 1987
                        },
                        "definite": false,
                        "start": 1979,
                        "end": 1987
                      }
                    ],
                    "declare": false,
                    "start": 1973,
                    "end": 1988
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
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "o",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2013,
                                  "end": 2014
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "this",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2015,
                                  "end": 2019
                                },
                                "start": 2013,
                                "end": 2019
                              },
                              "typeArguments": null,
                              "start": 2006,
                              "end": 2019
                            },
                            "start": 2004,
                            "end": 2019
                          },
                          "start": 2001,
                          "end": 2019
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 2022,
                          "end": 2024
                        },
                        "definite": false,
                        "start": 2001,
                        "end": 2024
                      }
                    ],
                    "declare": false,
                    "start": 1997,
                    "end": 2025
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2039,
                          "end": 2040
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2041,
                          "end": 2045
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2039,
                        "end": 2045
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2049,
                            "end": 2050
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "this",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2051,
                            "end": 2055
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2049,
                          "end": 2055
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2056,
                          "end": 2057
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2049,
                        "end": 2057
                      },
                      "start": 2039,
                      "end": 2057
                    },
                    "consequent": {
                      "type": "BlockStatement",
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
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2080,
                                    "end": 2086
                                  },
                                  "start": 2078,
                                  "end": 2086
                                },
                                "start": 2077,
                                "end": 2086
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2089,
                                    "end": 2090
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "this",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2091,
                                    "end": 2095
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2089,
                                  "end": 2095
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2096,
                                  "end": 2097
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2089,
                                "end": 2097
                              },
                              "definite": false,
                              "start": 2077,
                              "end": 2097
                            }
                          ],
                          "declare": false,
                          "start": 2073,
                          "end": 2098
                        }
                      ],
                      "start": 2059,
                      "end": 2137
                    },
                    "alternate": null,
                    "start": 2035,
                    "end": 2137
                  }
                ],
                "start": 1963,
                "end": 2143
              },
              "expression": false,
              "start": 1960,
              "end": 2143
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1957,
            "end": 2143
          }
        ],
        "start": 1919,
        "end": 2145
      },
      "abstract": false,
      "declare": false,
      "start": 1906,
      "end": 2145
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tests12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2153,
        "end": 2160
      },
      "typeParameters": null,
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
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2167,
              "end": 2172
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
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2196,
                      "end": 2200
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2210,
                        "end": 2214
                      },
                      "typeArguments": null,
                      "start": 2203,
                      "end": 2214
                    },
                    "declare": false,
                    "start": 2191,
                    "end": 2215
                  }
                ],
                "start": 2175,
                "end": 2221
              },
              "expression": false,
              "start": 2172,
              "end": 2221
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2167,
            "end": 2221
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2227,
              "end": 2232
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
                    "type": "ForStatement",
                    "init": null,
                    "test": null,
                    "update": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2260,
                      "end": 2262
                    },
                    "start": 2251,
                    "end": 2262
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2276,
                      "end": 2280
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2290,
                        "end": 2294
                      },
                      "typeArguments": null,
                      "start": 2283,
                      "end": 2294
                    },
                    "declare": false,
                    "start": 2271,
                    "end": 2295
                  }
                ],
                "start": 2235,
                "end": 2301
              },
              "expression": false,
              "start": 2232,
              "end": 2301
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2227,
            "end": 2301
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2307,
              "end": 2312
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
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dummy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2366,
                            "end": 2371
                          },
                          "init": null,
                          "definite": false,
                          "start": 2366,
                          "end": 2371
                        }
                      ],
                      "declare": false,
                      "start": 2360,
                      "end": 2371
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 2375,
                      "end": 2377
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2379,
                      "end": 2381
                    },
                    "start": 2355,
                    "end": 2381
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2395,
                      "end": 2399
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2409,
                        "end": 2413
                      },
                      "typeArguments": null,
                      "start": 2402,
                      "end": 2413
                    },
                    "declare": false,
                    "start": 2390,
                    "end": 2414
                  }
                ],
                "start": 2315,
                "end": 2420
              },
              "expression": false,
              "start": 2312,
              "end": 2420
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2307,
            "end": 2420
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2426,
              "end": 2431
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
                    "type": "ForOfStatement",
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dummy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2485,
                            "end": 2490
                          },
                          "init": null,
                          "definite": false,
                          "start": 2485,
                          "end": 2490
                        }
                      ],
                      "declare": false,
                      "start": 2479,
                      "end": 2490
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 2494,
                      "end": 2496
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2498,
                      "end": 2500
                    },
                    "start": 2474,
                    "end": 2500
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2514,
                      "end": 2518
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2528,
                        "end": 2532
                      },
                      "typeArguments": null,
                      "start": 2521,
                      "end": 2532
                    },
                    "declare": false,
                    "start": 2509,
                    "end": 2533
                  }
                ],
                "start": 2434,
                "end": 2539
              },
              "expression": false,
              "start": 2431,
              "end": 2539
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2426,
            "end": 2539
          }
        ],
        "start": 2161,
        "end": 2541
      },
      "abstract": false,
      "declare": false,
      "start": 2147,
      "end": 2541
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2541
}
```
