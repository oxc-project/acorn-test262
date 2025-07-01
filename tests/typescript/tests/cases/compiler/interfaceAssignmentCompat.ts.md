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
        "name": "M",
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
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 32
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Green",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 48
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 43,
                    "end": 48
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Blue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 62
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 58,
                    "end": 62
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Brown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 77
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 72,
                    "end": 77
                  }
                ],
                "start": 33,
                "end": 84
              },
              "const": false,
              "declare": false,
              "start": 22,
              "end": 84
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 84
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IEye",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 111
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
                      "name": "color",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 127
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 128,
                        "end": 134
                      },
                      "start": 127,
                      "end": 134
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 122,
                    "end": 135
                  }
                ],
                "start": 112,
                "end": 141
              },
              "declare": false,
              "start": 97,
              "end": 141
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 90,
            "end": 141
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFrenchEye",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 174
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
                      "name": "coleur",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 191
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 192,
                        "end": 198
                      },
                      "start": 191,
                      "end": 198
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 185,
                    "end": 199
                  }
                ],
                "start": 175,
                "end": 205
              },
              "declare": false,
              "start": 154,
              "end": 205
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 147,
            "end": 205
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "CompareEyes",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 238
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IEye",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 241,
                        "end": 245
                      },
                      "typeArguments": null,
                      "start": 241,
                      "end": 245
                    },
                    "start": 240,
                    "end": 245
                  },
                  "start": 239,
                  "end": 245
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
                        "name": "IEye",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 252
                      },
                      "typeArguments": null,
                      "start": 248,
                      "end": 252
                    },
                    "start": 247,
                    "end": 252
                  },
                  "start": 246,
                  "end": 252
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 254,
                  "end": 260
                },
                "start": 253,
                "end": 260
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 278,
                          "end": 279
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "color",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 280,
                          "end": 285
                        },
                        "optional": false,
                        "computed": false,
                        "start": 278,
                        "end": 285
                      },
                      "operator": "-",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 286,
                          "end": 287
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "color",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 288,
                          "end": 293
                        },
                        "optional": false,
                        "computed": false,
                        "start": 286,
                        "end": 293
                      },
                      "start": 278,
                      "end": 293
                    },
                    "start": 271,
                    "end": 294
                  }
                ],
                "start": 261,
                "end": 300
              },
              "expression": false,
              "start": 218,
              "end": 300
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 211,
            "end": 300
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "CompareYeux",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 333
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFrenchEye",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 336,
                        "end": 346
                      },
                      "typeArguments": null,
                      "start": 336,
                      "end": 346
                    },
                    "start": 335,
                    "end": 346
                  },
                  "start": 334,
                  "end": 346
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
                        "name": "IFrenchEye",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 359
                      },
                      "typeArguments": null,
                      "start": 349,
                      "end": 359
                    },
                    "start": 348,
                    "end": 359
                  },
                  "start": 347,
                  "end": 359
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 361,
                  "end": 367
                },
                "start": 360,
                "end": 367
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 385,
                          "end": 386
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "coleur",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 387,
                          "end": 393
                        },
                        "optional": false,
                        "computed": false,
                        "start": 385,
                        "end": 393
                      },
                      "operator": "-",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 395
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "coleur",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 396,
                          "end": 402
                        },
                        "optional": false,
                        "computed": false,
                        "start": 394,
                        "end": 402
                      },
                      "start": 385,
                      "end": 402
                    },
                    "start": 378,
                    "end": 403
                  }
                ],
                "start": 368,
                "end": 409
              },
              "expression": false,
              "start": 313,
              "end": 409
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 306,
            "end": 409
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 431,
                "end": 435
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
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IEye",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 454,
                                  "end": 458
                                },
                                "typeArguments": null,
                                "start": 454,
                                "end": 458
                              },
                              "start": 454,
                              "end": 460
                            },
                            "start": 453,
                            "end": 460
                          },
                          "start": 452,
                          "end": 460
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 462,
                          "end": 464
                        },
                        "definite": false,
                        "start": 452,
                        "end": 464
                      }
                    ],
                    "declare": false,
                    "start": 448,
                    "end": 465
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
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 478,
                          "end": 484
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 485,
                          "end": 487
                        },
                        "definite": false,
                        "start": 478,
                        "end": 487
                      }
                    ],
                    "declare": false,
                    "start": 474,
                    "end": 488
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 502,
                          "end": 503
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 504,
                          "end": 505
                        },
                        "optional": false,
                        "computed": true,
                        "start": 502,
                        "end": 506
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 509,
                              "end": 514
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Color",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 515,
                                "end": 520
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Brown",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 521,
                                "end": 526
                              },
                              "optional": false,
                              "computed": false,
                              "start": 515,
                              "end": 526
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 509,
                            "end": 526
                          }
                        ],
                        "start": 507,
                        "end": 528
                      },
                      "start": 502,
                      "end": 528
                    },
                    "directive": null,
                    "start": 502,
                    "end": 529
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 538,
                          "end": 539
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 540,
                          "end": 541
                        },
                        "optional": false,
                        "computed": true,
                        "start": 538,
                        "end": 542
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 545,
                              "end": 550
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Color",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 551,
                                "end": 556
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Blue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 557,
                                "end": 561
                              },
                              "optional": false,
                              "computed": false,
                              "start": 551,
                              "end": 561
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 545,
                            "end": 561
                          }
                        ],
                        "start": 543,
                        "end": 563
                      },
                      "start": 538,
                      "end": 563
                    },
                    "directive": null,
                    "start": 538,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 573,
                          "end": 574
                        },
                        "property": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 575,
                          "end": 576
                        },
                        "optional": false,
                        "computed": true,
                        "start": 573,
                        "end": 577
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 580,
                              "end": 585
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Color",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 586,
                                "end": 591
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Green",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 592,
                                "end": 597
                              },
                              "optional": false,
                              "computed": false,
                              "start": 586,
                              "end": 597
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 580,
                            "end": 597
                          }
                        ],
                        "start": 578,
                        "end": 599
                      },
                      "start": 573,
                      "end": 599
                    },
                    "directive": null,
                    "start": 573,
                    "end": 600
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 611
                      },
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
                            "start": 612,
                            "end": 613
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sort",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 614,
                            "end": 618
                          },
                          "optional": false,
                          "computed": false,
                          "start": 612,
                          "end": 618
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CompareYeux",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 619,
                            "end": 630
                          }
                        ],
                        "optional": false,
                        "start": 612,
                        "end": 631
                      },
                      "start": 610,
                      "end": 631
                    },
                    "directive": null,
                    "start": 610,
                    "end": 632
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 725,
                          "end": 726
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
                              "start": 727,
                              "end": 728
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sort",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 729,
                              "end": 733
                            },
                            "optional": false,
                            "computed": false,
                            "start": 727,
                            "end": 733
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CompareEyes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 734,
                              "end": 745
                            }
                          ],
                          "optional": false,
                          "start": 727,
                          "end": 746
                        },
                        "definite": false,
                        "start": 725,
                        "end": 746
                      }
                    ],
                    "declare": false,
                    "start": 721,
                    "end": 747
                  },
                  {
                    "type": "ForStatement",
                    "init": {
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
                            "typeAnnotation": null,
                            "start": 772,
                            "end": 773
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 774,
                            "end": 775
                          },
                          "definite": false,
                          "start": 772,
                          "end": 775
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "len",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 776,
                            "end": 779
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 780,
                              "end": 781
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 782,
                              "end": 788
                            },
                            "optional": false,
                            "computed": false,
                            "start": 780,
                            "end": 788
                          },
                          "definite": false,
                          "start": 776,
                          "end": 788
                        }
                      ],
                      "declare": false,
                      "start": 768,
                      "end": 788
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 789,
                        "end": 790
                      },
                      "operator": "<",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 791,
                        "end": 794
                      },
                      "start": 789,
                      "end": 794
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 795,
                        "end": 796
                      },
                      "start": 795,
                      "end": 798
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 814,
                              "end": 820
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Color",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 824,
                                    "end": 829
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_map",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 830,
                                    "end": 834
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 824,
                                  "end": 834
                                },
                                "property": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "z",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 835,
                                      "end": 836
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 837,
                                      "end": 838
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 835,
                                    "end": 839
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "color",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 840,
                                    "end": 845
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 835,
                                  "end": 845
                                },
                                "optional": false,
                                "computed": true,
                                "start": 824,
                                "end": 846
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": "\r\n",
                                "raw": "\"\\r\\n\"",
                                "start": 848,
                                "end": 854
                              },
                              "start": 823,
                              "end": 854
                            },
                            "start": 814,
                            "end": 855
                          },
                          "directive": null,
                          "start": 814,
                          "end": 856
                        }
                      ],
                      "start": 800,
                      "end": 866
                    },
                    "start": 763,
                    "end": 866
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
                          "name": "eeks",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IFrenchEye",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 885,
                                  "end": 895
                                },
                                "typeArguments": null,
                                "start": 885,
                                "end": 895
                              },
                              "start": 885,
                              "end": 897
                            },
                            "start": 884,
                            "end": 897
                          },
                          "start": 880,
                          "end": 897
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 900,
                          "end": 902
                        },
                        "definite": false,
                        "start": 880,
                        "end": 902
                      }
                    ],
                    "declare": false,
                    "start": 876,
                    "end": 903
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 921,
                            "end": 922
                          },
                          "init": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 923,
                                "end": 924
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 925,
                                "end": 931
                              },
                              "optional": false,
                              "computed": false,
                              "start": 923,
                              "end": 931
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 932,
                              "end": 933
                            },
                            "start": 923,
                            "end": 933
                          },
                          "definite": false,
                          "start": 921,
                          "end": 933
                        }
                      ],
                      "declare": false,
                      "start": 917,
                      "end": 933
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "j",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 934,
                        "end": 935
                      },
                      "operator": ">=",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 937,
                        "end": 938
                      },
                      "start": 934,
                      "end": 938
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "j",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 939,
                        "end": 940
                      },
                      "start": 939,
                      "end": 942
                    },
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "eeks",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 958,
                                "end": 962
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "j",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 963,
                                "end": 964
                              },
                              "optional": false,
                              "computed": true,
                              "start": 958,
                              "end": 965
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 966,
                                "end": 967
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "j",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 968,
                                "end": 969
                              },
                              "optional": false,
                              "computed": true,
                              "start": 966,
                              "end": 970
                            },
                            "start": 958,
                            "end": 970
                          },
                          "directive": null,
                          "start": 958,
                          "end": 971
                        }
                      ],
                      "start": 944,
                      "end": 1010
                    },
                    "start": 912,
                    "end": 1010
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "eeks",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1019,
                        "end": 1023
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1024,
                        "end": 1025
                      },
                      "start": 1019,
                      "end": 1025
                    },
                    "directive": null,
                    "start": 1019,
                    "end": 1026
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1068,
                      "end": 1074
                    },
                    "start": 1061,
                    "end": 1075
                  }
                ],
                "start": 438,
                "end": 1081
              },
              "expression": false,
              "start": 422,
              "end": 1081
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 415,
            "end": 1081
          }
        ],
        "start": 9,
        "end": 1083
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1083
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
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1085,
            "end": 1086
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 1087,
            "end": 1091
          },
          "optional": false,
          "computed": false,
          "start": 1085,
          "end": 1091
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1085,
        "end": 1093
      },
      "directive": null,
      "start": 1085,
      "end": 1094
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1096
}
```
