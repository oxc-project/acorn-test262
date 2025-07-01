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
        "start": 7,
        "end": 8
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
                "start": 32,
                "end": 37
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
                      "start": 48,
                      "end": 49
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      },
                      "start": 49,
                      "end": 57
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 48,
                    "end": 58
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
                      "start": 67,
                      "end": 68
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 70,
                        "end": 76
                      },
                      "start": 68,
                      "end": 76
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 67,
                    "end": 77
                  }
                ],
                "start": 38,
                "end": 83
              },
              "declare": false,
              "start": 22,
              "end": 83
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 15,
            "end": 83
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point3d",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 106
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 120
                },
                "typeArguments": null,
                "start": 115,
                "end": 120
              }
            ],
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 132
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 134,
                      "end": 140
                    },
                    "start": 132,
                    "end": 140
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 131,
                  "end": 141
                }
              ],
              "start": 121,
              "end": 147
            },
            "declare": false,
            "start": 89,
            "end": 147
          }
        ],
        "start": 9,
        "end": 149
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 149
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 159
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
                "name": "Line",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 183
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
                      "start": 194,
                      "end": 205
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
                            "name": "start",
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
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 220,
                                    "end": 221
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Point",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 222,
                                    "end": 227
                                  },
                                  "start": 220,
                                  "end": 227
                                },
                                "typeArguments": null,
                                "start": 220,
                                "end": 227
                              },
                              "start": 218,
                              "end": 227
                            },
                            "start": 213,
                            "end": 227
                          },
                          "readonly": false,
                          "static": false,
                          "start": 206,
                          "end": 227
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "end",
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
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 241,
                                    "end": 242
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Point",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 243,
                                    "end": 248
                                  },
                                  "start": 241,
                                  "end": 248
                                },
                                "typeArguments": null,
                                "start": 241,
                                "end": 248
                              },
                              "start": 239,
                              "end": 248
                            },
                            "start": 236,
                            "end": 248
                          },
                          "readonly": false,
                          "static": false,
                          "start": 229,
                          "end": 248
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 250,
                        "end": 253
                      },
                      "expression": false,
                      "start": 205,
                      "end": 253
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 194,
                    "end": 253
                  }
                ],
                "start": 184,
                "end": 259
              },
              "abstract": false,
              "declare": false,
              "start": 173,
              "end": 259
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 166,
            "end": 259
          }
        ],
        "start": 160,
        "end": 261
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 151,
      "end": 261
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Geometry",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 278
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
                "name": "Points",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 305
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "importKind": "value",
              "start": 292,
              "end": 310
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 285,
            "end": 310
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lines",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 327
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
            },
            "importKind": "value",
            "start": 315,
            "end": 332
          },
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
                    "name": "Origin",
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
                            "name": "Points",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 357,
                            "end": 363
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 364,
                            "end": 369
                          },
                          "start": 357,
                          "end": 369
                        },
                        "typeArguments": null,
                        "start": 357,
                        "end": 369
                      },
                      "start": 355,
                      "end": 369
                    },
                    "start": 349,
                    "end": 369
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
                          "start": 374,
                          "end": 375
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 377,
                          "end": 378
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 374,
                        "end": 378
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
                          "start": 380,
                          "end": 381
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 383,
                          "end": 384
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 380,
                        "end": 384
                      }
                    ],
                    "start": 372,
                    "end": 386
                  },
                  "definite": false,
                  "start": 349,
                  "end": 386
                }
              ],
              "declare": false,
              "start": 345,
              "end": 387
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 338,
            "end": 387
          },
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
                    "name": "Unit",
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
                            "name": "Lines",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 474,
                            "end": 479
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Line",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 480,
                            "end": 484
                          },
                          "start": 474,
                          "end": 484
                        },
                        "typeArguments": null,
                        "start": 474,
                        "end": 484
                      },
                      "start": 472,
                      "end": 484
                    },
                    "start": 468,
                    "end": 484
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Lines",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 491,
                        "end": 496
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Line",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 497,
                        "end": 501
                      },
                      "optional": false,
                      "computed": false,
                      "start": 491,
                      "end": 501
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Origin",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 502,
                        "end": 508
                      },
                      {
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
                              "start": 512,
                              "end": 513
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 515,
                              "end": 516
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 512,
                            "end": 516
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
                              "start": 518,
                              "end": 519
                            },
                            "value": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 521,
                              "end": 522
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 518,
                            "end": 522
                          }
                        ],
                        "start": 510,
                        "end": 524
                      }
                    ],
                    "start": 487,
                    "end": 525
                  },
                  "definite": false,
                  "start": 468,
                  "end": 525
                }
              ],
              "declare": false,
              "start": 464,
              "end": 526
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 457,
            "end": 526
          }
        ],
        "start": 279,
        "end": 528
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 263,
      "end": 528
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
                      "start": 582,
                      "end": 583
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 585,
                        "end": 591
                      },
                      "start": 583,
                      "end": 591
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 582,
                    "end": 592
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
                      "start": 593,
                      "end": 594
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 596,
                        "end": 602
                      },
                      "start": 594,
                      "end": 602
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 593,
                    "end": 602
                  }
                ],
                "start": 580,
                "end": 604
              },
              "start": 578,
              "end": 604
            },
            "start": 577,
            "end": 604
          },
          "init": null,
          "definite": false,
          "start": 577,
          "end": 604
        }
      ],
      "declare": false,
      "start": 573,
      "end": 605
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
                      "name": "Geometry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 613,
                      "end": 621
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Points",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 622,
                      "end": 628
                    },
                    "start": 613,
                    "end": 628
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 629,
                    "end": 634
                  },
                  "start": 613,
                  "end": 634
                },
                "typeArguments": null,
                "start": 613,
                "end": 634
              },
              "start": 611,
              "end": 634
            },
            "start": 610,
            "end": 634
          },
          "init": null,
          "definite": false,
          "start": 610,
          "end": 634
        }
      ],
      "declare": false,
      "start": 606,
      "end": 635
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
            "typeAnnotation": null,
            "start": 640,
            "end": 641
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Geometry",
              "optional": false,
              "typeAnnotation": null,
              "start": 644,
              "end": 652
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 659
            },
            "optional": false,
            "computed": false,
            "start": 644,
            "end": 659
          },
          "definite": false,
          "start": 640,
          "end": 659
        }
      ],
      "declare": false,
      "start": 636,
      "end": 660
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
            "name": "line",
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
                      "name": "start",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 674,
                      "end": 679
                    },
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
                              "start": 683,
                              "end": 684
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 686,
                                "end": 692
                              },
                              "start": 684,
                              "end": 692
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 683,
                            "end": 693
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
                              "start": 694,
                              "end": 695
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 697,
                                "end": 703
                              },
                              "start": 695,
                              "end": 703
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 694,
                            "end": 703
                          }
                        ],
                        "start": 681,
                        "end": 705
                      },
                      "start": 679,
                      "end": 705
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 674,
                    "end": 706
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "end",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 707,
                      "end": 710
                    },
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
                              "start": 714,
                              "end": 715
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 717,
                                "end": 723
                              },
                              "start": 715,
                              "end": 723
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 714,
                            "end": 724
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
                              "start": 725,
                              "end": 726
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 728,
                                "end": 734
                              },
                              "start": 726,
                              "end": 734
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 725,
                            "end": 735
                          }
                        ],
                        "start": 712,
                        "end": 737
                      },
                      "start": 710,
                      "end": 737
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 707,
                    "end": 737
                  }
                ],
                "start": 672,
                "end": 739
              },
              "start": 670,
              "end": 739
            },
            "start": 666,
            "end": 739
          },
          "init": null,
          "definite": false,
          "start": 666,
          "end": 739
        }
      ],
      "declare": false,
      "start": 662,
      "end": 740
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
            "name": "line",
            "optional": false,
            "typeAnnotation": null,
            "start": 745,
            "end": 749
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Geometry",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 760
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Unit",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 765
            },
            "optional": false,
            "computed": false,
            "start": 752,
            "end": 765
          },
          "definite": false,
          "start": 745,
          "end": 765
        }
      ],
      "declare": false,
      "start": 741,
      "end": 766
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
            "name": "line",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 823
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Geometry",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 834
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Lines",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 840
              },
              "optional": false,
              "computed": false,
              "start": 826,
              "end": 840
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Line",
              "optional": false,
              "typeAnnotation": null,
              "start": 841,
              "end": 845
            },
            "optional": false,
            "computed": false,
            "start": 826,
            "end": 845
          },
          "definite": false,
          "start": 819,
          "end": 845
        }
      ],
      "declare": false,
      "start": 815,
      "end": 846
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 847
}
```
