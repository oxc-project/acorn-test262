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
        "start": 10,
        "end": 11
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
                "start": 35,
                "end": 40
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
                      "start": 51,
                      "end": 52
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 54,
                        "end": 60
                      },
                      "start": 52,
                      "end": 60
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 51,
                    "end": 61
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
                      "start": 70,
                      "end": 71
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      },
                      "start": 71,
                      "end": 79
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 70,
                    "end": 80
                  }
                ],
                "start": 41,
                "end": 86
              },
              "declare": false,
              "start": 25,
              "end": 86
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 86
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point3d",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 109
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
                  "start": 118,
                  "end": 123
                },
                "typeArguments": null,
                "start": 118,
                "end": 123
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
                    "start": 134,
                    "end": 135
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 137,
                      "end": 143
                    },
                    "start": 135,
                    "end": 143
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 134,
                  "end": 144
                }
              ],
              "start": 124,
              "end": 150
            },
            "declare": false,
            "start": 92,
            "end": 150
          }
        ],
        "start": 12,
        "end": 152
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 152
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 165
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
                "start": 185,
                "end": 189
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
                      "start": 200,
                      "end": 211
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
                                    "start": 226,
                                    "end": 227
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Point",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 228,
                                    "end": 233
                                  },
                                  "start": 226,
                                  "end": 233
                                },
                                "typeArguments": null,
                                "start": 226,
                                "end": 233
                              },
                              "start": 224,
                              "end": 233
                            },
                            "start": 219,
                            "end": 233
                          },
                          "readonly": false,
                          "static": false,
                          "start": 212,
                          "end": 233
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
                                    "start": 247,
                                    "end": 248
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Point",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 249,
                                    "end": 254
                                  },
                                  "start": 247,
                                  "end": 254
                                },
                                "typeArguments": null,
                                "start": 247,
                                "end": 254
                              },
                              "start": 245,
                              "end": 254
                            },
                            "start": 242,
                            "end": 254
                          },
                          "readonly": false,
                          "static": false,
                          "start": 235,
                          "end": 254
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 256,
                        "end": 259
                      },
                      "expression": false,
                      "start": 211,
                      "end": 259
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 200,
                    "end": 259
                  }
                ],
                "start": 190,
                "end": 265
              },
              "abstract": false,
              "declare": false,
              "start": 179,
              "end": 265
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 172,
            "end": 265
          }
        ],
        "start": 166,
        "end": 267
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 154,
      "end": 267
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Geometry",
        "optional": false,
        "typeAnnotation": null,
        "start": 279,
        "end": 287
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
                "start": 308,
                "end": 314
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 318
              },
              "importKind": "value",
              "start": 301,
              "end": 319
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 294,
            "end": 319
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lines",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 336
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 340
            },
            "importKind": "value",
            "start": 324,
            "end": 341
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
                            "start": 366,
                            "end": 372
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 373,
                            "end": 378
                          },
                          "start": 366,
                          "end": 378
                        },
                        "typeArguments": null,
                        "start": 366,
                        "end": 378
                      },
                      "start": 364,
                      "end": 378
                    },
                    "start": 358,
                    "end": 378
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
                          "start": 383,
                          "end": 384
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 386,
                          "end": 387
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 383,
                        "end": 387
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
                          "start": 389,
                          "end": 390
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 392,
                          "end": 393
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 389,
                        "end": 393
                      }
                    ],
                    "start": 381,
                    "end": 395
                  },
                  "definite": false,
                  "start": 358,
                  "end": 395
                }
              ],
              "declare": false,
              "start": 354,
              "end": 396
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 347,
            "end": 396
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
                            "start": 483,
                            "end": 488
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Line",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 489,
                            "end": 493
                          },
                          "start": 483,
                          "end": 493
                        },
                        "typeArguments": null,
                        "start": 483,
                        "end": 493
                      },
                      "start": 481,
                      "end": 493
                    },
                    "start": 477,
                    "end": 493
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
                        "start": 500,
                        "end": 505
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Line",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 510
                      },
                      "optional": false,
                      "computed": false,
                      "start": 500,
                      "end": 510
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Origin",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 511,
                        "end": 517
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
                              "start": 521,
                              "end": 522
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
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
                      }
                    ],
                    "start": 496,
                    "end": 534
                  },
                  "definite": false,
                  "start": 477,
                  "end": 534
                }
              ],
              "declare": false,
              "start": 473,
              "end": 535
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 466,
            "end": 535
          }
        ],
        "start": 288,
        "end": 537
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 269,
      "end": 537
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
                      "start": 591,
                      "end": 592
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 594,
                        "end": 600
                      },
                      "start": 592,
                      "end": 600
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 591,
                    "end": 601
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
                      "start": 602,
                      "end": 603
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 605,
                        "end": 611
                      },
                      "start": 603,
                      "end": 611
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 602,
                    "end": 611
                  }
                ],
                "start": 589,
                "end": 613
              },
              "start": 587,
              "end": 613
            },
            "start": 586,
            "end": 613
          },
          "init": null,
          "definite": false,
          "start": 586,
          "end": 613
        }
      ],
      "declare": false,
      "start": 582,
      "end": 614
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
                      "start": 622,
                      "end": 630
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Points",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 631,
                      "end": 637
                    },
                    "start": 622,
                    "end": 637
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 638,
                    "end": 643
                  },
                  "start": 622,
                  "end": 643
                },
                "typeArguments": null,
                "start": 622,
                "end": 643
              },
              "start": 620,
              "end": 643
            },
            "start": 619,
            "end": 643
          },
          "init": null,
          "definite": false,
          "start": 619,
          "end": 643
        }
      ],
      "declare": false,
      "start": 615,
      "end": 644
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
            "start": 649,
            "end": 650
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Geometry",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 661
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 668
            },
            "optional": false,
            "computed": false,
            "start": 653,
            "end": 668
          },
          "definite": false,
          "start": 649,
          "end": 668
        }
      ],
      "declare": false,
      "start": 645,
      "end": 669
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
                      "start": 683,
                      "end": 688
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
                              "start": 692,
                              "end": 693
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 695,
                                "end": 701
                              },
                              "start": 693,
                              "end": 701
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 692,
                            "end": 702
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
                              "start": 703,
                              "end": 704
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 706,
                                "end": 712
                              },
                              "start": 704,
                              "end": 712
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 703,
                            "end": 712
                          }
                        ],
                        "start": 690,
                        "end": 714
                      },
                      "start": 688,
                      "end": 714
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 683,
                    "end": 715
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
                      "start": 716,
                      "end": 719
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
                              "start": 723,
                              "end": 724
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 726,
                                "end": 732
                              },
                              "start": 724,
                              "end": 732
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 723,
                            "end": 733
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
                              "start": 734,
                              "end": 735
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 737,
                                "end": 743
                              },
                              "start": 735,
                              "end": 743
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 734,
                            "end": 744
                          }
                        ],
                        "start": 721,
                        "end": 746
                      },
                      "start": 719,
                      "end": 746
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 716,
                    "end": 746
                  }
                ],
                "start": 681,
                "end": 748
              },
              "start": 679,
              "end": 748
            },
            "start": 675,
            "end": 748
          },
          "init": null,
          "definite": false,
          "start": 675,
          "end": 748
        }
      ],
      "declare": false,
      "start": 671,
      "end": 749
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
            "start": 754,
            "end": 758
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Geometry",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 769
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Unit",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 774
            },
            "optional": false,
            "computed": false,
            "start": 761,
            "end": 774
          },
          "definite": false,
          "start": 754,
          "end": 774
        }
      ],
      "declare": false,
      "start": 750,
      "end": 775
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
            "start": 828,
            "end": 832
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
                "start": 835,
                "end": 843
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Lines",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 849
              },
              "optional": false,
              "computed": false,
              "start": 835,
              "end": 849
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Line",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 854
            },
            "optional": false,
            "computed": false,
            "start": 835,
            "end": 854
          },
          "definite": false,
          "start": 828,
          "end": 854
        }
      ],
      "declare": false,
      "start": 824,
      "end": 855
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 856
}
```
