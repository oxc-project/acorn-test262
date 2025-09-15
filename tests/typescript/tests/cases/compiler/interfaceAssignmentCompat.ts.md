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
        "start": 10,
        "end": 11
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
                "start": 30,
                "end": 35
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
                      "start": 46,
                      "end": 51
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 46,
                    "end": 51
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Blue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 65
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 61,
                    "end": 65
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Brown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 80
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 75,
                    "end": 80
                  }
                ],
                "start": 36,
                "end": 87
              },
              "const": false,
              "declare": false,
              "start": 25,
              "end": 87
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 87
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
                "start": 110,
                "end": 114
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
                      "start": 125,
                      "end": 130
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 131,
                        "end": 137
                      },
                      "start": 130,
                      "end": 137
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 125,
                    "end": 138
                  }
                ],
                "start": 115,
                "end": 144
              },
              "declare": false,
              "start": 100,
              "end": 144
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 93,
            "end": 144
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
                "start": 167,
                "end": 177
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
                      "start": 188,
                      "end": 194
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 195,
                        "end": 201
                      },
                      "start": 194,
                      "end": 201
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 188,
                    "end": 202
                  }
                ],
                "start": 178,
                "end": 208
              },
              "declare": false,
              "start": 157,
              "end": 208
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 150,
            "end": 208
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
                "start": 230,
                "end": 241
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
                        "start": 244,
                        "end": 248
                      },
                      "typeArguments": null,
                      "start": 244,
                      "end": 248
                    },
                    "start": 243,
                    "end": 248
                  },
                  "start": 242,
                  "end": 248
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
                        "start": 251,
                        "end": 255
                      },
                      "typeArguments": null,
                      "start": 251,
                      "end": 255
                    },
                    "start": 250,
                    "end": 255
                  },
                  "start": 249,
                  "end": 255
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 257,
                  "end": 263
                },
                "start": 256,
                "end": 263
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
                          "start": 281,
                          "end": 282
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "color",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 283,
                          "end": 288
                        },
                        "optional": false,
                        "computed": false,
                        "start": 281,
                        "end": 288
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
                          "start": 289,
                          "end": 290
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "color",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 291,
                          "end": 296
                        },
                        "optional": false,
                        "computed": false,
                        "start": 289,
                        "end": 296
                      },
                      "start": 281,
                      "end": 296
                    },
                    "start": 274,
                    "end": 297
                  }
                ],
                "start": 264,
                "end": 303
              },
              "expression": false,
              "start": 221,
              "end": 303
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 214,
            "end": 303
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
                "start": 325,
                "end": 336
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
                        "start": 339,
                        "end": 349
                      },
                      "typeArguments": null,
                      "start": 339,
                      "end": 349
                    },
                    "start": 338,
                    "end": 349
                  },
                  "start": 337,
                  "end": 349
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
                        "start": 352,
                        "end": 362
                      },
                      "typeArguments": null,
                      "start": 352,
                      "end": 362
                    },
                    "start": 351,
                    "end": 362
                  },
                  "start": 350,
                  "end": 362
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 364,
                  "end": 370
                },
                "start": 363,
                "end": 370
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
                          "start": 388,
                          "end": 389
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "coleur",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 396
                        },
                        "optional": false,
                        "computed": false,
                        "start": 388,
                        "end": 396
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
                          "start": 397,
                          "end": 398
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "coleur",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 399,
                          "end": 405
                        },
                        "optional": false,
                        "computed": false,
                        "start": 397,
                        "end": 405
                      },
                      "start": 388,
                      "end": 405
                    },
                    "start": 381,
                    "end": 406
                  }
                ],
                "start": 371,
                "end": 412
              },
              "expression": false,
              "start": 316,
              "end": 412
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 309,
            "end": 412
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
                "start": 434,
                "end": 438
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
                                  "start": 457,
                                  "end": 461
                                },
                                "typeArguments": null,
                                "start": 457,
                                "end": 461
                              },
                              "start": 457,
                              "end": 463
                            },
                            "start": 456,
                            "end": 463
                          },
                          "start": 455,
                          "end": 463
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 465,
                          "end": 467
                        },
                        "definite": false,
                        "start": 455,
                        "end": 467
                      }
                    ],
                    "declare": false,
                    "start": 451,
                    "end": 468
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
                          "start": 481,
                          "end": 487
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 488,
                          "end": 490
                        },
                        "definite": false,
                        "start": 481,
                        "end": 490
                      }
                    ],
                    "declare": false,
                    "start": 477,
                    "end": 491
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
                          "start": 505,
                          "end": 506
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 507,
                          "end": 508
                        },
                        "optional": false,
                        "computed": true,
                        "start": 505,
                        "end": 509
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
                              "start": 512,
                              "end": 517
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Color",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 518,
                                "end": 523
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Brown",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 524,
                                "end": 529
                              },
                              "optional": false,
                              "computed": false,
                              "start": 518,
                              "end": 529
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 512,
                            "end": 529
                          }
                        ],
                        "start": 510,
                        "end": 531
                      },
                      "start": 505,
                      "end": 531
                    },
                    "directive": null,
                    "start": 505,
                    "end": 532
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
                          "start": 541,
                          "end": 542
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 543,
                          "end": 544
                        },
                        "optional": false,
                        "computed": true,
                        "start": 541,
                        "end": 545
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
                              "start": 548,
                              "end": 553
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Color",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 554,
                                "end": 559
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Blue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 560,
                                "end": 564
                              },
                              "optional": false,
                              "computed": false,
                              "start": 554,
                              "end": 564
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 548,
                            "end": 564
                          }
                        ],
                        "start": 546,
                        "end": 566
                      },
                      "start": 541,
                      "end": 566
                    },
                    "directive": null,
                    "start": 541,
                    "end": 567
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
                          "start": 576,
                          "end": 577
                        },
                        "property": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 578,
                          "end": 579
                        },
                        "optional": false,
                        "computed": true,
                        "start": 576,
                        "end": 580
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
                              "start": 583,
                              "end": 588
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Color",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 589,
                                "end": 594
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Green",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 595,
                                "end": 600
                              },
                              "optional": false,
                              "computed": false,
                              "start": 589,
                              "end": 600
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 583,
                            "end": 600
                          }
                        ],
                        "start": 581,
                        "end": 602
                      },
                      "start": 576,
                      "end": 602
                    },
                    "directive": null,
                    "start": 576,
                    "end": 603
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
                        "start": 613,
                        "end": 614
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
                            "start": 615,
                            "end": 616
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sort",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 617,
                            "end": 621
                          },
                          "optional": false,
                          "computed": false,
                          "start": 615,
                          "end": 621
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CompareYeux",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 622,
                            "end": 633
                          }
                        ],
                        "optional": false,
                        "start": 615,
                        "end": 634
                      },
                      "start": 613,
                      "end": 634
                    },
                    "directive": null,
                    "start": 613,
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 728,
                          "end": 729
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
                              "start": 730,
                              "end": 731
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sort",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 732,
                              "end": 736
                            },
                            "optional": false,
                            "computed": false,
                            "start": 730,
                            "end": 736
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CompareEyes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 737,
                              "end": 748
                            }
                          ],
                          "optional": false,
                          "start": 730,
                          "end": 749
                        },
                        "definite": false,
                        "start": 728,
                        "end": 749
                      }
                    ],
                    "declare": false,
                    "start": 724,
                    "end": 750
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
                            "start": 775,
                            "end": 776
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 777,
                            "end": 778
                          },
                          "definite": false,
                          "start": 775,
                          "end": 778
                        },
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "len",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 779,
                            "end": 782
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 783,
                              "end": 784
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 785,
                              "end": 791
                            },
                            "optional": false,
                            "computed": false,
                            "start": 783,
                            "end": 791
                          },
                          "definite": false,
                          "start": 779,
                          "end": 791
                        }
                      ],
                      "declare": false,
                      "start": 771,
                      "end": 791
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 792,
                        "end": 793
                      },
                      "operator": "<",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 794,
                        "end": 797
                      },
                      "start": 792,
                      "end": 797
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
                        "start": 798,
                        "end": 799
                      },
                      "start": 798,
                      "end": 801
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
                              "start": 817,
                              "end": 823
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
                                    "start": 827,
                                    "end": 832
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_map",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 833,
                                    "end": 837
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 827,
                                  "end": 837
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
                                      "start": 838,
                                      "end": 839
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 840,
                                      "end": 841
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 838,
                                    "end": 842
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "color",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 843,
                                    "end": 848
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 838,
                                  "end": 848
                                },
                                "optional": false,
                                "computed": true,
                                "start": 827,
                                "end": 849
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": "\r\n",
                                "raw": "\"\\r\\n\"",
                                "start": 851,
                                "end": 857
                              },
                              "start": 826,
                              "end": 857
                            },
                            "start": 817,
                            "end": 858
                          },
                          "directive": null,
                          "start": 817,
                          "end": 859
                        }
                      ],
                      "start": 803,
                      "end": 869
                    },
                    "start": 766,
                    "end": 869
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
                                  "start": 888,
                                  "end": 898
                                },
                                "typeArguments": null,
                                "start": 888,
                                "end": 898
                              },
                              "start": 888,
                              "end": 900
                            },
                            "start": 887,
                            "end": 900
                          },
                          "start": 883,
                          "end": 900
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 903,
                          "end": 905
                        },
                        "definite": false,
                        "start": 883,
                        "end": 905
                      }
                    ],
                    "declare": false,
                    "start": 879,
                    "end": 906
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
                            "start": 924,
                            "end": 925
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
                                "start": 926,
                                "end": 927
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 928,
                                "end": 934
                              },
                              "optional": false,
                              "computed": false,
                              "start": 926,
                              "end": 934
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 935,
                              "end": 936
                            },
                            "start": 926,
                            "end": 936
                          },
                          "definite": false,
                          "start": 924,
                          "end": 936
                        }
                      ],
                      "declare": false,
                      "start": 920,
                      "end": 936
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "j",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 937,
                        "end": 938
                      },
                      "operator": ">=",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 940,
                        "end": 941
                      },
                      "start": 937,
                      "end": 941
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
                        "start": 942,
                        "end": 943
                      },
                      "start": 942,
                      "end": 945
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
                                "start": 961,
                                "end": 965
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "j",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 966,
                                "end": 967
                              },
                              "optional": false,
                              "computed": true,
                              "start": 961,
                              "end": 968
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 969,
                                "end": 970
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "j",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 971,
                                "end": 972
                              },
                              "optional": false,
                              "computed": true,
                              "start": 969,
                              "end": 973
                            },
                            "start": 961,
                            "end": 973
                          },
                          "directive": null,
                          "start": 961,
                          "end": 974
                        }
                      ],
                      "start": 947,
                      "end": 1013
                    },
                    "start": 915,
                    "end": 1013
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
                        "start": 1022,
                        "end": 1026
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1027,
                        "end": 1028
                      },
                      "start": 1022,
                      "end": 1028
                    },
                    "directive": null,
                    "start": 1022,
                    "end": 1029
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1071,
                      "end": 1077
                    },
                    "start": 1064,
                    "end": 1078
                  }
                ],
                "start": 441,
                "end": 1084
              },
              "expression": false,
              "start": 425,
              "end": 1084
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 418,
            "end": 1084
          }
        ],
        "start": 12,
        "end": 1086
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1086
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
            "start": 1088,
            "end": 1089
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 1090,
            "end": 1094
          },
          "optional": false,
          "computed": false,
          "start": 1088,
          "end": 1094
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1088,
        "end": 1096
      },
      "directive": null,
      "start": 1088,
      "end": 1097
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1099
}
```
