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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 72
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 74,
                "end": 80
              },
              "start": 72,
              "end": 80
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
            "start": 69,
            "end": 80
          }
        ],
        "start": 67,
        "end": 82
      },
      "abstract": false,
      "declare": false,
      "start": 56,
      "end": 82
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 97
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 110
      },
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 118,
                "end": 124
              },
              "start": 116,
              "end": 124
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
            "start": 113,
            "end": 124
          }
        ],
        "start": 111,
        "end": 126
      },
      "abstract": false,
      "declare": false,
      "start": 83,
      "end": 126
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 141
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 154
      },
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 160
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 162,
                "end": 168
              },
              "start": 160,
              "end": 168
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
            "start": 157,
            "end": 168
          }
        ],
        "start": 155,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 127,
      "end": 170
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 179
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 189
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 193,
                        "end": 197
                      },
                      "start": 193,
                      "end": 197
                    },
                    "start": 191,
                    "end": 197
                  },
                  "start": 190,
                  "end": 197
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 208
                  },
                  "typeArguments": null,
                  "start": 200,
                  "end": 208
                },
                "start": 198,
                "end": 208
              },
              "body": null,
              "expression": false,
              "start": 189,
              "end": 209
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 186,
            "end": 209
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
              "start": 214,
              "end": 217
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "bye",
                        "raw": "'bye'",
                        "start": 221,
                        "end": 226
                      },
                      "start": 221,
                      "end": 226
                    },
                    "start": 219,
                    "end": 226
                  },
                  "start": 218,
                  "end": 226
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 237
                  },
                  "typeArguments": null,
                  "start": 229,
                  "end": 237
                },
                "start": 227,
                "end": 237
              },
              "body": null,
              "expression": false,
              "start": 217,
              "end": 238
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 214,
            "end": 238
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
              "start": 243,
              "end": 246
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    },
                    "start": 248,
                    "end": 256
                  },
                  "start": 247,
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
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 263
                  },
                  "typeArguments": null,
                  "start": 259,
                  "end": 263
                },
                "start": 257,
                "end": 263
              },
              "body": null,
              "expression": false,
              "start": 246,
              "end": 264
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 243,
            "end": 264
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
              "start": 269,
              "end": 272
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
                }
              ],
              "returnType": null,
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
                      "start": 293,
                      "end": 294
                    },
                    "start": 286,
                    "end": 295
                  }
                ],
                "start": 276,
                "end": 301
              },
              "expression": false,
              "start": 272,
              "end": 301
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 269,
            "end": 301
          }
        ],
        "start": 180,
        "end": 303
      },
      "abstract": false,
      "declare": false,
      "start": 172,
      "end": 303
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 309
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 317
            },
            "typeArguments": null,
            "arguments": [],
            "start": 312,
            "end": 319
          },
          "definite": false,
          "start": 308,
          "end": 319
        }
      ],
      "declare": false,
      "start": 304,
      "end": 320
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 332,
        "end": 333
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 343
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 347,
                      "end": 351
                    },
                    "start": 347,
                    "end": 351
                  },
                  "start": 345,
                  "end": 351
                },
                "start": 344,
                "end": 351
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 362
                },
                "typeArguments": null,
                "start": 354,
                "end": 362
              },
              "start": 352,
              "end": 362
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 340,
            "end": 363
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 371
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bye",
                      "raw": "'bye'",
                      "start": 375,
                      "end": 380
                    },
                    "start": 375,
                    "end": 380
                  },
                  "start": 373,
                  "end": 380
                },
                "start": 372,
                "end": 380
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 391
                },
                "typeArguments": null,
                "start": 383,
                "end": 391
              },
              "start": 381,
              "end": 391
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 368,
            "end": 392
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 400
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 404,
                    "end": 410
                  },
                  "start": 402,
                  "end": 410
                },
                "start": 401,
                "end": 410
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 417
                },
                "typeArguments": null,
                "start": 413,
                "end": 417
              },
              "start": 411,
              "end": 417
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 397,
            "end": 418
          }
        ],
        "start": 334,
        "end": 420
      },
      "declare": false,
      "start": 322,
      "end": 420
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
                  "start": 428,
                  "end": 429
                },
                "typeArguments": null,
                "start": 428,
                "end": 429
              },
              "start": 426,
              "end": 429
            },
            "start": 425,
            "end": 429
          },
          "init": null,
          "definite": false,
          "start": 425,
          "end": 429
        }
      ],
      "declare": false,
      "start": 421,
      "end": 430
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
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 448
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "'hi'",
                              "start": 452,
                              "end": 456
                            },
                            "start": 452,
                            "end": 456
                          },
                          "start": 450,
                          "end": 456
                        },
                        "start": 449,
                        "end": 456
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 459,
                          "end": 467
                        },
                        "typeArguments": null,
                        "start": 459,
                        "end": 467
                      },
                      "start": 457,
                      "end": 467
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 445,
                    "end": 468
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 476
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "bye",
                              "raw": "'bye'",
                              "start": 480,
                              "end": 485
                            },
                            "start": 480,
                            "end": 485
                          },
                          "start": 478,
                          "end": 485
                        },
                        "start": 477,
                        "end": 485
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 488,
                          "end": 496
                        },
                        "typeArguments": null,
                        "start": 488,
                        "end": 496
                      },
                      "start": 486,
                      "end": 496
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 473,
                    "end": 497
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 505
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 509,
                            "end": 515
                          },
                          "start": 507,
                          "end": 515
                        },
                        "start": 506,
                        "end": 515
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 518,
                          "end": 522
                        },
                        "typeArguments": null,
                        "start": 518,
                        "end": 522
                      },
                      "start": 516,
                      "end": 522
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 502,
                    "end": 523
                  }
                ],
                "start": 439,
                "end": 525
              },
              "start": 437,
              "end": 525
            },
            "start": 436,
            "end": 525
          },
          "init": null,
          "definite": false,
          "start": 436,
          "end": 525
        }
      ],
      "declare": false,
      "start": 432,
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
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 528,
          "end": 529
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 532,
          "end": 533
        },
        "start": 528,
        "end": 533
      },
      "directive": null,
      "start": 528,
      "end": 534
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 535,
          "end": 536
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 539,
          "end": 540
        },
        "start": 535,
        "end": 540
      },
      "directive": null,
      "start": 535,
      "end": 541
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 543,
          "end": 544
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 547,
          "end": 548
        },
        "start": 543,
        "end": 548
      },
      "directive": null,
      "start": 543,
      "end": 549
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 550,
          "end": 551
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 555
        },
        "start": 550,
        "end": 555
      },
      "directive": null,
      "start": 550,
      "end": 556
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
          "start": 558,
          "end": 559
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 562,
          "end": 563
        },
        "start": 558,
        "end": 563
      },
      "directive": null,
      "start": 558,
      "end": 564
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
          "start": 565,
          "end": 566
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 569,
          "end": 570
        },
        "start": 565,
        "end": 570
      },
      "directive": null,
      "start": 565,
      "end": 571
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 589
                },
                "typeArguments": null,
                "start": 581,
                "end": 589
              },
              "start": 579,
              "end": 589
            },
            "start": 577,
            "end": 589
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 592,
                "end": 593
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 597
              },
              "optional": false,
              "computed": false,
              "start": 592,
              "end": 597
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hi",
                "raw": "'hi'",
                "start": 598,
                "end": 602
              }
            ],
            "optional": false,
            "start": 592,
            "end": 603
          },
          "definite": false,
          "start": 577,
          "end": 603
        }
      ],
      "declare": false,
      "start": 573,
      "end": 604
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
                  "start": 613,
                  "end": 621
                },
                "typeArguments": null,
                "start": 613,
                "end": 621
              },
              "start": 611,
              "end": 621
            },
            "start": 609,
            "end": 621
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 625
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 629
              },
              "optional": false,
              "computed": false,
              "start": 624,
              "end": 629
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "bye",
                "raw": "'bye'",
                "start": 630,
                "end": 635
              }
            ],
            "optional": false,
            "start": 624,
            "end": 636
          },
          "definite": false,
          "start": 609,
          "end": 636
        }
      ],
      "declare": false,
      "start": 605,
      "end": 637
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
                  "start": 646,
                  "end": 650
                },
                "typeArguments": null,
                "start": 646,
                "end": 650
              },
              "start": 644,
              "end": 650
            },
            "start": 642,
            "end": 650
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 653,
                "end": 654
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 655,
                "end": 658
              },
              "optional": false,
              "computed": false,
              "start": 653,
              "end": 658
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hm",
                "raw": "'hm'",
                "start": 659,
                "end": 663
              }
            ],
            "optional": false,
            "start": 653,
            "end": 664
          },
          "definite": false,
          "start": 642,
          "end": 664
        }
      ],
      "declare": false,
      "start": 638,
      "end": 665
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 665
}
```
