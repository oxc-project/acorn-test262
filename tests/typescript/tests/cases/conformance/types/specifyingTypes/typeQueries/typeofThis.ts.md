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
        "start": 811,
        "end": 816
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
                    "start": 834,
                    "end": 835
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
                                        "start": 868,
                                        "end": 872
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "no",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 873,
                                        "end": 875
                                      },
                                      "start": 868,
                                      "end": 875
                                    },
                                    "typeArguments": null,
                                    "start": 861,
                                    "end": 875
                                  },
                                  "start": 859,
                                  "end": 875
                                },
                                "start": 858,
                                "end": 875
                              },
                              "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 878,
                                "end": 879
                              },
                              "definite": false,
                              "start": 858,
                              "end": 879
                            }
                          ],
                          "declare": false,
                          "start": 854,
                          "end": 880
                        }
                      ],
                      "start": 844,
                      "end": 886
                    },
                    "id": null,
                    "generator": false,
                    "start": 838,
                    "end": 886
                  },
                  "definite": false,
                  "start": 834,
                  "end": 886
                }
              ],
              "declare": false,
              "start": 830,
              "end": 886
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 823,
            "end": 886
          }
        ],
        "start": 817,
        "end": 888
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 801,
      "end": 888
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
            "start": 896,
            "end": 901
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
                                "start": 930,
                                "end": 934
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "no",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 935,
                                "end": 937
                              },
                              "start": 930,
                              "end": 937
                            },
                            "typeArguments": null,
                            "start": 923,
                            "end": 937
                          },
                          "start": 921,
                          "end": 937
                        },
                        "start": 920,
                        "end": 937
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 940,
                        "end": 941
                      },
                      "definite": false,
                      "start": 920,
                      "end": 941
                    }
                  ],
                  "declare": false,
                  "start": 916,
                  "end": 942
                }
              ],
              "start": 910,
              "end": 944
            },
            "id": null,
            "generator": false,
            "start": 904,
            "end": 944
          },
          "definite": false,
          "start": 896,
          "end": 944
        }
      ],
      "declare": false,
      "start": 890,
      "end": 944
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
        "start": 952,
        "end": 957
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
              "start": 964,
              "end": 966
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 969,
              "end": 970
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 964,
            "end": 971
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
              "start": 976,
              "end": 980
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 983,
              "end": 984
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 976,
            "end": 985
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
              "start": 991,
              "end": 992
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
                        "start": 1009,
                        "end": 1013
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test9D1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1025,
                        "end": 1032
                      },
                      "start": 1009,
                      "end": 1032
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
                                      "start": 1065,
                                      "end": 1069
                                    },
                                    "typeArguments": null,
                                    "start": 1058,
                                    "end": 1069
                                  },
                                  "start": 1056,
                                  "end": 1069
                                },
                                "start": 1054,
                                "end": 1069
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 1072,
                                "end": 1076
                              },
                              "definite": false,
                              "start": 1054,
                              "end": 1076
                            }
                          ],
                          "declare": false,
                          "start": 1048,
                          "end": 1077
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
                                "start": 1090,
                                "end": 1092
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1093,
                                "end": 1095
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1090,
                              "end": 1095
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1090,
                            "end": 1097
                          },
                          "directive": null,
                          "start": 1090,
                          "end": 1098
                        }
                      ],
                      "start": 1034,
                      "end": 1108
                    },
                    "alternate": null,
                    "start": 1005,
                    "end": 1108
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 1122,
                        "end": 1126
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test9D2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1138,
                        "end": 1145
                      },
                      "start": 1122,
                      "end": 1145
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
                                      "start": 1178,
                                      "end": 1182
                                    },
                                    "typeArguments": null,
                                    "start": 1171,
                                    "end": 1182
                                  },
                                  "start": 1169,
                                  "end": 1182
                                },
                                "start": 1167,
                                "end": 1182
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 1185,
                                "end": 1189
                              },
                              "definite": false,
                              "start": 1167,
                              "end": 1189
                            }
                          ],
                          "declare": false,
                          "start": 1161,
                          "end": 1190
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
                                "start": 1203,
                                "end": 1205
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1206,
                                "end": 1208
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1203,
                              "end": 1208
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1203,
                            "end": 1210
                          },
                          "directive": null,
                          "start": 1203,
                          "end": 1211
                        }
                      ],
                      "start": 1147,
                      "end": 1221
                    },
                    "alternate": null,
                    "start": 1118,
                    "end": 1221
                  }
                ],
                "start": 995,
                "end": 1227
              },
              "expression": false,
              "start": 992,
              "end": 1227
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 991,
            "end": 1227
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
              "start": 1233,
              "end": 1234
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
                          "start": 1251,
                          "end": 1255
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "no",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1256,
                          "end": 1258
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1251,
                        "end": 1258
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1263,
                        "end": 1264
                      },
                      "start": 1251,
                      "end": 1264
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
                                        "start": 1297,
                                        "end": 1301
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "no",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1302,
                                        "end": 1304
                                      },
                                      "start": 1297,
                                      "end": 1304
                                    },
                                    "typeArguments": null,
                                    "start": 1290,
                                    "end": 1304
                                  },
                                  "start": 1288,
                                  "end": 1304
                                },
                                "start": 1286,
                                "end": 1304
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1307,
                                  "end": 1311
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "no",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1312,
                                  "end": 1314
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1307,
                                "end": 1314
                              },
                              "definite": false,
                              "start": 1286,
                              "end": 1314
                            }
                          ],
                          "declare": false,
                          "start": 1280,
                          "end": 1315
                        }
                      ],
                      "start": 1266,
                      "end": 1325
                    },
                    "alternate": null,
                    "start": 1247,
                    "end": 1325
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1339,
                          "end": 1343
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1344,
                          "end": 1348
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1339,
                        "end": 1348
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1353,
                        "end": 1354
                      },
                      "start": 1339,
                      "end": 1354
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
                                        "start": 1387,
                                        "end": 1391
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "this",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1392,
                                        "end": 1396
                                      },
                                      "start": 1387,
                                      "end": 1396
                                    },
                                    "typeArguments": null,
                                    "start": 1380,
                                    "end": 1396
                                  },
                                  "start": 1378,
                                  "end": 1396
                                },
                                "start": 1376,
                                "end": 1396
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1399,
                                  "end": 1403
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "this",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1404,
                                  "end": 1408
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1399,
                                "end": 1408
                              },
                              "definite": false,
                              "start": 1376,
                              "end": 1408
                            }
                          ],
                          "declare": false,
                          "start": 1370,
                          "end": 1409
                        }
                      ],
                      "start": 1356,
                      "end": 1419
                    },
                    "alternate": null,
                    "start": 1335,
                    "end": 1419
                  }
                ],
                "start": 1237,
                "end": 1425
              },
              "expression": false,
              "start": 1234,
              "end": 1425
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1233,
            "end": 1425
          }
        ],
        "start": 958,
        "end": 1427
      },
      "abstract": false,
      "declare": false,
      "start": 946,
      "end": 1427
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
        "start": 1435,
        "end": 1442
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
              "start": 1449,
              "end": 1451
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
                "start": 1454,
                "end": 1456
              },
              "expression": false,
              "start": 1451,
              "end": 1456
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1449,
            "end": 1456
          }
        ],
        "start": 1443,
        "end": 1458
      },
      "abstract": false,
      "declare": false,
      "start": 1429,
      "end": 1458
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
        "start": 1466,
        "end": 1473
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
              "start": 1480,
              "end": 1482
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
                "start": 1485,
                "end": 1487
              },
              "expression": false,
              "start": 1482,
              "end": 1487
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1480,
            "end": 1487
          }
        ],
        "start": 1474,
        "end": 1489
      },
      "abstract": false,
      "declare": false,
      "start": 1460,
      "end": 1489
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
        "start": 1497,
        "end": 1503
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
              "start": 1510,
              "end": 1511
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
                      "start": 1516,
                      "end": 1517
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1520,
                        "end": 1526
                      },
                      "start": 1518,
                      "end": 1526
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1516,
                    "end": 1526
                  }
                ],
                "start": 1514,
                "end": 1528
              },
              "start": 1512,
              "end": 1528
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
            "start": 1510,
            "end": 1528
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
              "start": 1534,
              "end": 1537
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
                                  "start": 1564,
                                  "end": 1568
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1569,
                                  "end": 1570
                                },
                                "start": 1564,
                                "end": 1570
                              },
                              "typeArguments": null,
                              "start": 1557,
                              "end": 1570
                            },
                            "start": 1555,
                            "end": 1570
                          },
                          "start": 1554,
                          "end": 1570
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1573,
                            "end": 1582
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1586,
                            "end": 1589
                          },
                          "start": 1573,
                          "end": 1589
                        },
                        "definite": false,
                        "start": 1554,
                        "end": 1589
                      }
                    ],
                    "declare": false,
                    "start": 1550,
                    "end": 1590
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1603,
                        "end": 1607
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1608,
                        "end": 1609
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1603,
                      "end": 1609
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
                                        "start": 1639,
                                        "end": 1643
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1644,
                                        "end": 1645
                                      },
                                      "start": 1639,
                                      "end": 1645
                                    },
                                    "typeArguments": null,
                                    "start": 1632,
                                    "end": 1645
                                  },
                                  "start": 1630,
                                  "end": 1645
                                },
                                "start": 1629,
                                "end": 1645
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1648,
                                  "end": 1657
                                },
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1661,
                                  "end": 1664
                                },
                                "start": 1648,
                                "end": 1664
                              },
                              "definite": false,
                              "start": 1629,
                              "end": 1664
                            }
                          ],
                          "declare": false,
                          "start": 1625,
                          "end": 1665
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
                                          "start": 1730,
                                          "end": 1734
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1735,
                                          "end": 1736
                                        },
                                        "start": 1730,
                                        "end": 1736
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "b",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1737,
                                        "end": 1738
                                      },
                                      "start": 1730,
                                      "end": 1738
                                    },
                                    "typeArguments": null,
                                    "start": 1723,
                                    "end": 1738
                                  },
                                  "start": 1721,
                                  "end": 1738
                                },
                                "start": 1720,
                                "end": 1738
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1741,
                                  "end": 1750
                                },
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1754,
                                  "end": 1757
                                },
                                "start": 1741,
                                "end": 1757
                              },
                              "definite": false,
                              "start": 1720,
                              "end": 1757
                            }
                          ],
                          "declare": false,
                          "start": 1716,
                          "end": 1758
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1776,
                                "end": 1780
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1781,
                                "end": 1782
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1776,
                              "end": 1782
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1783,
                              "end": 1784
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1776,
                            "end": 1784
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
                                                "start": 1818,
                                                "end": 1822
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1823,
                                                "end": 1824
                                              },
                                              "start": 1818,
                                              "end": 1824
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "b",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1825,
                                              "end": 1826
                                            },
                                            "start": 1818,
                                            "end": 1826
                                          },
                                          "typeArguments": null,
                                          "start": 1811,
                                          "end": 1826
                                        },
                                        "start": 1809,
                                        "end": 1826
                                      },
                                      "start": 1808,
                                      "end": 1826
                                    },
                                    "init": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1829,
                                        "end": 1838
                                      },
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 1842,
                                        "end": 1845
                                      },
                                      "start": 1829,
                                      "end": 1845
                                    },
                                    "definite": false,
                                    "start": 1808,
                                    "end": 1845
                                  }
                                ],
                                "declare": false,
                                "start": 1804,
                                "end": 1846
                              }
                            ],
                            "start": 1786,
                            "end": 1889
                          },
                          "alternate": null,
                          "start": 1772,
                          "end": 1889
                        }
                      ],
                      "start": 1611,
                      "end": 1899
                    },
                    "alternate": null,
                    "start": 1599,
                    "end": 1899
                  }
                ],
                "start": 1540,
                "end": 1905
              },
              "expression": false,
              "start": 1537,
              "end": 1905
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1534,
            "end": 1905
          }
        ],
        "start": 1504,
        "end": 1907
      },
      "abstract": false,
      "declare": false,
      "start": 1491,
      "end": 1907
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
        "start": 1915,
        "end": 1921
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
              "start": 1928,
              "end": 1932
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
                      "start": 1937,
                      "end": 1938
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1941,
                        "end": 1947
                      },
                      "start": 1939,
                      "end": 1947
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1937,
                    "end": 1947
                  }
                ],
                "start": 1935,
                "end": 1949
              },
              "start": 1933,
              "end": 1949
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
            "start": 1928,
            "end": 1950
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
              "start": 1960,
              "end": 1963
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
                          "start": 1982,
                          "end": 1983
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1986,
                          "end": 1990
                        },
                        "definite": false,
                        "start": 1982,
                        "end": 1990
                      }
                    ],
                    "declare": false,
                    "start": 1976,
                    "end": 1991
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
                                  "start": 2016,
                                  "end": 2017
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "this",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2018,
                                  "end": 2022
                                },
                                "start": 2016,
                                "end": 2022
                              },
                              "typeArguments": null,
                              "start": 2009,
                              "end": 2022
                            },
                            "start": 2007,
                            "end": 2022
                          },
                          "start": 2004,
                          "end": 2022
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 2025,
                          "end": 2027
                        },
                        "definite": false,
                        "start": 2004,
                        "end": 2027
                      }
                    ],
                    "declare": false,
                    "start": 2000,
                    "end": 2028
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
                          "start": 2042,
                          "end": 2043
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2044,
                          "end": 2048
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2042,
                        "end": 2048
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
                            "start": 2052,
                            "end": 2053
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "this",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2054,
                            "end": 2058
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2052,
                          "end": 2058
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2059,
                          "end": 2060
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2052,
                        "end": 2060
                      },
                      "start": 2042,
                      "end": 2060
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
                                    "start": 2083,
                                    "end": 2089
                                  },
                                  "start": 2081,
                                  "end": 2089
                                },
                                "start": 2080,
                                "end": 2089
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
                                    "start": 2092,
                                    "end": 2093
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "this",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2094,
                                    "end": 2098
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2092,
                                  "end": 2098
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2099,
                                  "end": 2100
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2092,
                                "end": 2100
                              },
                              "definite": false,
                              "start": 2080,
                              "end": 2100
                            }
                          ],
                          "declare": false,
                          "start": 2076,
                          "end": 2101
                        }
                      ],
                      "start": 2062,
                      "end": 2140
                    },
                    "alternate": null,
                    "start": 2038,
                    "end": 2140
                  }
                ],
                "start": 1966,
                "end": 2146
              },
              "expression": false,
              "start": 1963,
              "end": 2146
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1960,
            "end": 2146
          }
        ],
        "start": 1922,
        "end": 2148
      },
      "abstract": false,
      "declare": false,
      "start": 1909,
      "end": 2148
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
        "start": 2156,
        "end": 2163
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
              "start": 2170,
              "end": 2175
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
                      "start": 2199,
                      "end": 2203
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2213,
                        "end": 2217
                      },
                      "typeArguments": null,
                      "start": 2206,
                      "end": 2217
                    },
                    "declare": false,
                    "start": 2194,
                    "end": 2218
                  }
                ],
                "start": 2178,
                "end": 2224
              },
              "expression": false,
              "start": 2175,
              "end": 2224
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2170,
            "end": 2224
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
              "start": 2230,
              "end": 2235
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
                      "start": 2263,
                      "end": 2265
                    },
                    "start": 2254,
                    "end": 2265
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2279,
                      "end": 2283
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2293,
                        "end": 2297
                      },
                      "typeArguments": null,
                      "start": 2286,
                      "end": 2297
                    },
                    "declare": false,
                    "start": 2274,
                    "end": 2298
                  }
                ],
                "start": 2238,
                "end": 2304
              },
              "expression": false,
              "start": 2235,
              "end": 2304
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2230,
            "end": 2304
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
              "start": 2310,
              "end": 2315
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
                            "start": 2369,
                            "end": 2374
                          },
                          "init": null,
                          "definite": false,
                          "start": 2369,
                          "end": 2374
                        }
                      ],
                      "declare": false,
                      "start": 2363,
                      "end": 2374
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 2378,
                      "end": 2380
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2382,
                      "end": 2384
                    },
                    "start": 2358,
                    "end": 2384
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2398,
                      "end": 2402
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2412,
                        "end": 2416
                      },
                      "typeArguments": null,
                      "start": 2405,
                      "end": 2416
                    },
                    "declare": false,
                    "start": 2393,
                    "end": 2417
                  }
                ],
                "start": 2318,
                "end": 2423
              },
              "expression": false,
              "start": 2315,
              "end": 2423
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2310,
            "end": 2423
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
              "start": 2429,
              "end": 2434
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
                            "start": 2488,
                            "end": 2493
                          },
                          "init": null,
                          "definite": false,
                          "start": 2488,
                          "end": 2493
                        }
                      ],
                      "declare": false,
                      "start": 2482,
                      "end": 2493
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 2497,
                      "end": 2499
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2501,
                      "end": 2503
                    },
                    "start": 2477,
                    "end": 2503
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2517,
                      "end": 2521
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "ThisExpression",
                        "start": 2531,
                        "end": 2535
                      },
                      "typeArguments": null,
                      "start": 2524,
                      "end": 2535
                    },
                    "declare": false,
                    "start": 2512,
                    "end": 2536
                  }
                ],
                "start": 2437,
                "end": 2542
              },
              "expression": false,
              "start": 2434,
              "end": 2542
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2429,
            "end": 2542
          }
        ],
        "start": 2164,
        "end": 2544
      },
      "abstract": false,
      "declare": false,
      "start": 2150,
      "end": 2544
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2544
}
```
