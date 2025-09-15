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
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
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
                "start": 37,
                "end": 42
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
                      "start": 53,
                      "end": 64
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
                                "start": 75,
                                "end": 81
                              },
                              "start": 73,
                              "end": 81
                            },
                            "start": 72,
                            "end": 81
                          },
                          "readonly": false,
                          "static": false,
                          "start": 65,
                          "end": 81
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
                                "start": 93,
                                "end": 99
                              },
                              "start": 91,
                              "end": 99
                            },
                            "start": 90,
                            "end": 99
                          },
                          "readonly": false,
                          "static": false,
                          "start": 83,
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
                      "start": 64,
                      "end": 104
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 53,
                    "end": 104
                  }
                ],
                "start": 43,
                "end": 110
              },
              "abstract": false,
              "declare": false,
              "start": 31,
              "end": 110
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 24,
            "end": 110
          }
        ],
        "start": 18,
        "end": 112
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 112
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "alias",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 126
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 136
      },
      "importKind": "value",
      "start": 114,
      "end": 137
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alias",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 151
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 157
                  },
                  "start": 146,
                  "end": 157
                },
                "typeArguments": null,
                "start": 146,
                "end": 157
              },
              "start": 144,
              "end": 157
            },
            "start": 143,
            "end": 157
          },
          "init": null,
          "definite": false,
          "start": 143,
          "end": 157
        }
      ],
      "declare": false,
      "start": 139,
      "end": 158
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "moduleA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 166,
                    "end": 173
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 179
                  },
                  "start": 166,
                  "end": 179
                },
                "typeArguments": null,
                "start": 166,
                "end": 179
              },
              "start": 164,
              "end": 179
            },
            "start": 163,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 163,
          "end": 179
        }
      ],
      "declare": false,
      "start": 159,
      "end": 180
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
                      "start": 190,
                      "end": 191
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 193,
                        "end": 199
                      },
                      "start": 191,
                      "end": 199
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 190,
                    "end": 200
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
                      "start": 201,
                      "end": 202
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 204,
                        "end": 210
                      },
                      "start": 202,
                      "end": 210
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 201,
                    "end": 211
                  }
                ],
                "start": 188,
                "end": 213
              },
              "start": 186,
              "end": 213
            },
            "start": 185,
            "end": 213
          },
          "init": null,
          "definite": false,
          "start": 185,
          "end": 213
        }
      ],
      "declare": false,
      "start": 181,
      "end": 214
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "clodule",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 229
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 242,
                "end": 248
              },
              "start": 240,
              "end": 248
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
            "start": 236,
            "end": 249
          }
        ],
        "start": 230,
        "end": 251
      },
      "abstract": false,
      "declare": false,
      "start": 216,
      "end": 251
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "clodule",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 270
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
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 299
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
                      "start": 310,
                      "end": 311
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 313,
                        "end": 319
                      },
                      "start": 311,
                      "end": 319
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 310,
                    "end": 320
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
                      "start": 321,
                      "end": 322
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 324,
                        "end": 330
                      },
                      "start": 322,
                      "end": 330
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 321,
                    "end": 331
                  }
                ],
                "start": 300,
                "end": 337
              },
              "declare": false,
              "start": 284,
              "end": 337
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 277,
            "end": 337
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
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 353,
                        "end": 358
                      },
                      "typeArguments": null,
                      "start": 353,
                      "end": 358
                    },
                    "start": 351,
                    "end": 358
                  },
                  "start": 346,
                  "end": 358
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 363,
                        "end": 364
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 366,
                        "end": 367
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 363,
                      "end": 367
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 369,
                        "end": 370
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 372,
                        "end": 373
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 369,
                      "end": 373
                    }
                  ],
                  "start": 361,
                  "end": 375
                },
                "definite": false,
                "start": 346,
                "end": 375
              }
            ],
            "declare": false,
            "start": 342,
            "end": 376
          }
        ],
        "start": 271,
        "end": 378
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 253,
      "end": 378
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "clolias",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 394
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "clodule",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 404
      },
      "importKind": "value",
      "start": 380,
      "end": 405
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "clolias",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 414,
                    "end": 421
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 427
                  },
                  "start": 414,
                  "end": 427
                },
                "typeArguments": null,
                "start": 414,
                "end": 427
              },
              "start": 412,
              "end": 427
            },
            "start": 411,
            "end": 427
          },
          "init": null,
          "definite": false,
          "start": 411,
          "end": 427
        }
      ],
      "declare": false,
      "start": 407,
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "clodule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 443
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 449
                  },
                  "start": 436,
                  "end": 449
                },
                "typeArguments": null,
                "start": 436,
                "end": 449
              },
              "start": 434,
              "end": 449
            },
            "start": 433,
            "end": 449
          },
          "init": null,
          "definite": false,
          "start": 433,
          "end": 449
        }
      ],
      "declare": false,
      "start": 429,
      "end": 450
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
                      "start": 460,
                      "end": 461
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 463,
                        "end": 469
                      },
                      "start": 461,
                      "end": 469
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 460,
                    "end": 470
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
                      "start": 471,
                      "end": 472
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 474,
                        "end": 480
                      },
                      "start": 472,
                      "end": 480
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 471,
                    "end": 481
                  }
                ],
                "start": 458,
                "end": 483
              },
              "start": 456,
              "end": 483
            },
            "start": 455,
            "end": 483
          },
          "init": null,
          "definite": false,
          "start": 455,
          "end": 483
        }
      ],
      "declare": false,
      "start": 451,
      "end": 484
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fundule",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 503
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 521,
                    "end": 522
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 524,
                    "end": 525
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 521,
                  "end": 525
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 527,
                    "end": 528
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 530,
                    "end": 531
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 527,
                  "end": 531
                }
              ],
              "start": 519,
              "end": 533
            },
            "start": 512,
            "end": 534
          }
        ],
        "start": 506,
        "end": 536
      },
      "expression": false,
      "start": 487,
      "end": 536
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fundule",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 555
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
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 584
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
                      "start": 595,
                      "end": 596
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 598,
                        "end": 604
                      },
                      "start": 596,
                      "end": 604
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 595,
                    "end": 605
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
                      "start": 606,
                      "end": 607
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 609,
                        "end": 615
                      },
                      "start": 607,
                      "end": 615
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 606,
                    "end": 616
                  }
                ],
                "start": 585,
                "end": 622
              },
              "declare": false,
              "start": 569,
              "end": 622
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 562,
            "end": 622
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
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 638,
                        "end": 643
                      },
                      "typeArguments": null,
                      "start": 638,
                      "end": 643
                    },
                    "start": 636,
                    "end": 643
                  },
                  "start": 631,
                  "end": 643
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 648,
                        "end": 649
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 651,
                        "end": 652
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 648,
                      "end": 652
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 654,
                        "end": 655
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 657,
                        "end": 658
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 654,
                      "end": 658
                    }
                  ],
                  "start": 646,
                  "end": 660
                },
                "definite": false,
                "start": 631,
                "end": 660
              }
            ],
            "declare": false,
            "start": 627,
            "end": 661
          }
        ],
        "start": 556,
        "end": 663
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 538,
      "end": 663
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 672,
        "end": 679
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "fundule",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 689
      },
      "importKind": "value",
      "start": 665,
      "end": 690
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "funlias",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 699,
                    "end": 706
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 707,
                    "end": 712
                  },
                  "start": 699,
                  "end": 712
                },
                "typeArguments": null,
                "start": 699,
                "end": 712
              },
              "start": 697,
              "end": 712
            },
            "start": 696,
            "end": 712
          },
          "init": null,
          "definite": false,
          "start": 696,
          "end": 712
        }
      ],
      "declare": false,
      "start": 692,
      "end": 713
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fundule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 721,
                    "end": 728
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 734
                  },
                  "start": 721,
                  "end": 734
                },
                "typeArguments": null,
                "start": 721,
                "end": 734
              },
              "start": 719,
              "end": 734
            },
            "start": 718,
            "end": 734
          },
          "init": null,
          "definite": false,
          "start": 718,
          "end": 734
        }
      ],
      "declare": false,
      "start": 714,
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
          "init": null,
          "definite": false,
          "start": 740,
          "end": 768
        }
      ],
      "declare": false,
      "start": 736,
      "end": 769
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 769
}
```
