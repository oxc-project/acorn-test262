__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 57
                  },
                  "init": {
                    "type": "Literal",
                    "value": "hello world",
                    "raw": "'hello world'",
                    "start": 60,
                    "end": 73
                  },
                  "definite": false,
                  "start": 56,
                  "end": 73
                }
              ],
              "declare": false,
              "start": 52,
              "end": 73
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 45,
            "end": 73
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 96
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 107,
                      "end": 118
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
                                "type": "TSNumberKeyword",
                                "start": 129,
                                "end": 135
                              },
                              "start": 127,
                              "end": 135
                            },
                            "start": 126,
                            "end": 135
                          },
                          "readonly": false,
                          "static": false,
                          "start": 119,
                          "end": 135
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 147,
                                "end": 153
                              },
                              "start": 145,
                              "end": 153
                            },
                            "start": 144,
                            "end": 153
                          },
                          "readonly": false,
                          "static": false,
                          "start": 137,
                          "end": 153
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 155,
                        "end": 158
                      },
                      "expression": false,
                      "start": 118,
                      "end": 158
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 107,
                    "end": 158
                  }
                ],
                "start": 97,
                "end": 164
              },
              "abstract": false,
              "declare": false,
              "start": 85,
              "end": 164
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 78,
            "end": 164
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 186,
                "end": 187
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 215,
                        "end": 217
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
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 232,
                              "end": 236
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 238,
                                "end": 244
                              },
                              "start": 236,
                              "end": 244
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 232,
                            "end": 245
                          }
                        ],
                        "start": 218,
                        "end": 255
                      },
                      "declare": false,
                      "start": 205,
                      "end": 255
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 198,
                    "end": 255
                  }
                ],
                "start": 188,
                "end": 261
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 176,
              "end": 261
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 169,
            "end": 261
          }
        ],
        "start": 38,
        "end": 263
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 26,
      "end": 263
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 276
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 298
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 302
              },
              "importKind": "value",
              "start": 290,
              "end": 303
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 283,
            "end": 303
          }
        ],
        "start": 277,
        "end": 305
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 265,
      "end": 305
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
                "type": "TSStringKeyword",
                "start": 314,
                "end": 320
              },
              "start": 312,
              "end": 320
            },
            "start": 311,
            "end": 320
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 324
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 326
              },
              "optional": false,
              "computed": false,
              "start": 323,
              "end": 326
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 328
            },
            "optional": false,
            "computed": false,
            "start": 323,
            "end": 328
          },
          "definite": false,
          "start": 311,
          "end": 328
        }
      ],
      "declare": false,
      "start": 307,
      "end": 329
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
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 339,
                      "end": 340
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 342,
                        "end": 348
                      },
                      "start": 340,
                      "end": 348
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 339,
                    "end": 349
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 351
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 353,
                        "end": 359
                      },
                      "start": 351,
                      "end": 359
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 350,
                    "end": 360
                  }
                ],
                "start": 337,
                "end": 362
              },
              "start": 335,
              "end": 362
            },
            "start": 334,
            "end": 362
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 370
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 372
                },
                "optional": false,
                "computed": false,
                "start": 369,
                "end": 372
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 378
              },
              "optional": false,
              "computed": false,
              "start": 369,
              "end": 378
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 379,
                "end": 380
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 382,
                "end": 383
              }
            ],
            "start": 365,
            "end": 384
          },
          "definite": false,
          "start": 334,
          "end": 384
        }
      ],
      "declare": false,
      "start": 330,
      "end": 385
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
                      "start": 395,
                      "end": 399
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 401,
                        "end": 407
                      },
                      "start": 399,
                      "end": 407
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 395,
                    "end": 407
                  }
                ],
                "start": 393,
                "end": 409
              },
              "start": 391,
              "end": 409
            },
            "start": 390,
            "end": 409
          },
          "init": null,
          "definite": false,
          "start": 390,
          "end": 409
        }
      ],
      "declare": false,
      "start": 386,
      "end": 410
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 418,
                        "end": 419
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 421
                      },
                      "start": 418,
                      "end": 421
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 422,
                      "end": 423
                    },
                    "start": 418,
                    "end": 423
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 426
                  },
                  "start": 418,
                  "end": 426
                },
                "typeArguments": null,
                "start": 418,
                "end": 426
              },
              "start": 416,
              "end": 426
            },
            "start": 415,
            "end": 426
          },
          "init": null,
          "definite": false,
          "start": 415,
          "end": 426
        }
      ],
      "declare": false,
      "start": 411,
      "end": 427
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 440
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 484,
                      "end": 486
                    },
                    "start": 477,
                    "end": 487
                  }
                ],
                "start": 467,
                "end": 493
              },
              "expression": false,
              "start": 454,
              "end": 493
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 447,
            "end": 493
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 517
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 546
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
                              "name": "constructor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 561,
                              "end": 572
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
                                        "type": "TSNumberKeyword",
                                        "start": 583,
                                        "end": 589
                                      },
                                      "start": 581,
                                      "end": 589
                                    },
                                    "start": 580,
                                    "end": 589
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "start": 573,
                                  "end": 589
                                },
                                {
                                  "type": "TSParameterProperty",
                                  "accessibility": "public",
                                  "decorators": [],
                                  "override": false,
                                  "parameter": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 601,
                                        "end": 607
                                      },
                                      "start": 599,
                                      "end": 607
                                    },
                                    "start": 598,
                                    "end": 607
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "start": 591,
                                  "end": 607
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 609,
                                "end": 612
                              },
                              "expression": false,
                              "start": 572,
                              "end": 612
                            },
                            "kind": "constructor",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 561,
                            "end": 612
                          }
                        ],
                        "start": 547,
                        "end": 622
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 535,
                      "end": 622
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 528,
                    "end": 622
                  }
                ],
                "start": 518,
                "end": 628
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 506,
              "end": 628
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 499,
            "end": 628
          }
        ],
        "start": 441,
        "end": 630
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 429,
      "end": 630
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 642,
        "end": 643
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 702
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 706
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 708
                },
                "start": 705,
                "end": 708
              },
              "importKind": "value",
              "start": 694,
              "end": 709
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 687,
            "end": 709
          }
        ],
        "start": 644,
        "end": 711
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 632,
      "end": 711
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 720,
                "end": 726
              },
              "start": 718,
              "end": 726
            },
            "start": 717,
            "end": 726
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 729,
                "end": 730
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 732
              },
              "optional": false,
              "computed": false,
              "start": 729,
              "end": 732
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 729,
            "end": 734
          },
          "definite": false,
          "start": 717,
          "end": 734
        }
      ],
      "declare": false,
      "start": 713,
      "end": 735
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
            "name": "n",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 745,
                      "end": 746
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 748,
                        "end": 754
                      },
                      "start": 746,
                      "end": 754
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 745,
                    "end": 755
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 756,
                      "end": 757
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 759,
                        "end": 765
                      },
                      "start": 757,
                      "end": 765
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 756,
                    "end": 766
                  }
                ],
                "start": 743,
                "end": 768
              },
              "start": 741,
              "end": 768
            },
            "start": 740,
            "end": 768
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 776
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 777,
                  "end": 778
                },
                "optional": false,
                "computed": false,
                "start": 775,
                "end": 778
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 784
              },
              "optional": false,
              "computed": false,
              "start": 775,
              "end": 784
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 785,
                "end": 786
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 788,
                "end": 789
              }
            ],
            "start": 771,
            "end": 790
          },
          "definite": false,
          "start": 740,
          "end": 790
        }
      ],
      "declare": false,
      "start": 736,
      "end": 791
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 803,
        "end": 804
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 825
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 836,
                      "end": 847
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
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 861,
                                "end": 867
                              },
                              "start": 859,
                              "end": 867
                            },
                            "start": 855,
                            "end": 867
                          },
                          "readonly": false,
                          "static": false,
                          "start": 848,
                          "end": 867
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 869,
                        "end": 872
                      },
                      "expression": false,
                      "start": 847,
                      "end": 872
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 836,
                    "end": 872
                  }
                ],
                "start": 826,
                "end": 878
              },
              "abstract": false,
              "declare": false,
              "start": 818,
              "end": 878
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 811,
            "end": 878
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null,
                "start": 901,
                "end": 902
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 924,
                            "end": 925
                          },
                          "init": {
                            "type": "Literal",
                            "value": 12,
                            "raw": "12",
                            "start": 928,
                            "end": 930
                          },
                          "definite": false,
                          "start": 924,
                          "end": 930
                        }
                      ],
                      "declare": false,
                      "start": 920,
                      "end": 931
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 913,
                    "end": 931
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 957,
                        "end": 962
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 977,
                              "end": 978
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 980,
                                "end": 986
                              },
                              "start": 978,
                              "end": 986
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 977,
                            "end": 987
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1000,
                              "end": 1001
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1003,
                                "end": 1009
                              },
                              "start": 1001,
                              "end": 1009
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1000,
                            "end": 1010
                          }
                        ],
                        "start": 963,
                        "end": 1020
                      },
                      "declare": false,
                      "start": 947,
                      "end": 1020
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 940,
                    "end": 1020
                  }
                ],
                "start": 903,
                "end": 1026
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 891,
              "end": 1026
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 884,
            "end": 1026
          }
        ],
        "start": 805,
        "end": 1028
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 793,
      "end": 1028
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 1040,
        "end": 1041
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1063
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1066,
                  "end": 1067
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1068,
                  "end": 1069
                },
                "start": 1066,
                "end": 1069
              },
              "importKind": "value",
              "start": 1055,
              "end": 1070
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1048,
            "end": 1070
          }
        ],
        "start": 1042,
        "end": 1072
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1030,
      "end": 1072
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
            "name": "o",
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1083,
                      "end": 1087
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1089,
                        "end": 1095
                      },
                      "start": 1087,
                      "end": 1095
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1083,
                    "end": 1095
                  }
                ],
                "start": 1081,
                "end": 1097
              },
              "start": 1079,
              "end": 1097
            },
            "start": 1078,
            "end": 1097
          },
          "init": null,
          "definite": false,
          "start": 1078,
          "end": 1097
        }
      ],
      "declare": false,
      "start": 1074,
      "end": 1098
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1103,
            "end": 1104
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 1111,
                "end": 1112
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1113,
                "end": 1114
              },
              "optional": false,
              "computed": false,
              "start": 1111,
              "end": 1114
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "Hello",
                "raw": "'Hello'",
                "start": 1115,
                "end": 1122
              }
            ],
            "start": 1107,
            "end": 1123
          },
          "definite": false,
          "start": 1103,
          "end": 1123
        }
      ],
      "declare": false,
      "start": 1099,
      "end": 1124
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
            "name": "p",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1135,
                      "end": 1136
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1138,
                        "end": 1144
                      },
                      "start": 1136,
                      "end": 1144
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1135,
                    "end": 1145
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1146,
                      "end": 1147
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1149,
                        "end": 1155
                      },
                      "start": 1147,
                      "end": 1155
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1146,
                    "end": 1156
                  }
                ],
                "start": 1133,
                "end": 1158
              },
              "start": 1131,
              "end": 1158
            },
            "start": 1130,
            "end": 1158
          },
          "init": null,
          "definite": false,
          "start": 1130,
          "end": 1158
        }
      ],
      "declare": false,
      "start": 1126,
      "end": 1158
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1166,
                      "end": 1167
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1168,
                      "end": 1169
                    },
                    "start": 1166,
                    "end": 1169
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1170,
                    "end": 1175
                  },
                  "start": 1166,
                  "end": 1175
                },
                "typeArguments": null,
                "start": 1166,
                "end": 1175
              },
              "start": 1164,
              "end": 1175
            },
            "start": 1163,
            "end": 1175
          },
          "init": null,
          "definite": false,
          "start": 1163,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1159,
      "end": 1176
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 1176
}
```
