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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "inA",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 106
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
                        "name": "Point3D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 141
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
                            "start": 150,
                            "end": 155
                          },
                          "typeArguments": null,
                          "start": 150,
                          "end": 155
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
                              "start": 170,
                              "end": 171
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 173,
                                "end": 179
                              },
                              "start": 171,
                              "end": 179
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 170,
                            "end": 180
                          }
                        ],
                        "start": 156,
                        "end": 190
                      },
                      "declare": false,
                      "start": 124,
                      "end": 190
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 117,
                    "end": 190
                  }
                ],
                "start": 107,
                "end": 196
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 96,
              "end": 196
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 89,
            "end": 196
          }
        ],
        "start": 9,
        "end": 198
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 198
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 232
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 247
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 251
            },
            "importKind": "value",
            "start": 239,
            "end": 252
          }
        ],
        "start": 233,
        "end": 254
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 224,
      "end": 254
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 288
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 303
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "importKind": "value",
            "start": 295,
            "end": 308
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 325
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "inA",
                "optional": false,
                "typeAnnotation": null,
                "start": 326,
                "end": 329
              },
              "start": 324,
              "end": 329
            },
            "importKind": "value",
            "start": 313,
            "end": 330
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
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 350
                      },
                      "typeArguments": null,
                      "start": 342,
                      "end": 350
                    },
                    "start": 340,
                    "end": 350
                  },
                  "start": 339,
                  "end": 350
                },
                "init": null,
                "definite": false,
                "start": 339,
                "end": 350
              }
            ],
            "declare": false,
            "start": 335,
            "end": 351
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 363,
                          "end": 364
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point3D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 365,
                          "end": 372
                        },
                        "start": 363,
                        "end": 372
                      },
                      "typeArguments": null,
                      "start": 363,
                      "end": 372
                    },
                    "start": 361,
                    "end": 372
                  },
                  "start": 360,
                  "end": 372
                },
                "init": null,
                "definite": false,
                "start": 360,
                "end": 372
              }
            ],
            "declare": false,
            "start": 356,
            "end": 373
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
                  "start": 382,
                  "end": 383
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
                        "start": 387,
                        "end": 388
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 389,
                        "end": 390
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 387,
                      "end": 390
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
                        "start": 392,
                        "end": 393
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 394,
                        "end": 395
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 392,
                      "end": 395
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 398
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 400,
                        "end": 401
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 397,
                      "end": 401
                    }
                  ],
                  "start": 386,
                  "end": 403
                },
                "definite": false,
                "start": 382,
                "end": 403
              }
            ],
            "declare": false,
            "start": 378,
            "end": 404
          }
        ],
        "start": 289,
        "end": 406
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 280,
      "end": 406
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 440
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 455
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 459
            },
            "importKind": "value",
            "start": 447,
            "end": 460
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 474,
                          "end": 475
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 476,
                          "end": 481
                        },
                        "start": 474,
                        "end": 481
                      },
                      "typeArguments": null,
                      "start": 474,
                      "end": 481
                    },
                    "start": 472,
                    "end": 481
                  },
                  "start": 470,
                  "end": 481
                },
                "init": null,
                "definite": false,
                "start": 470,
                "end": 481
              }
            ],
            "declare": false,
            "start": 466,
            "end": 482
          }
        ],
        "start": 441,
        "end": 484
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 432,
      "end": 484
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 517,
        "end": 518
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 533
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 537
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "inA",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 541
              },
              "start": 536,
              "end": 541
            },
            "importKind": "value",
            "start": 525,
            "end": 542
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "xDist",
                "optional": false,
                "typeAnnotation": null,
                "start": 563,
                "end": 568
              },
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 572,
                          "end": 573
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point3D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 581
                        },
                        "start": 572,
                        "end": 581
                      },
                      "typeArguments": null,
                      "start": 572,
                      "end": 581
                    },
                    "start": 570,
                    "end": 581
                  },
                  "start": 569,
                  "end": 581
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 600,
                        "end": 601
                      },
                      "operator": "-",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 604,
                          "end": 605
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 606,
                          "end": 607
                        },
                        "optional": false,
                        "computed": false,
                        "start": 604,
                        "end": 607
                      },
                      "start": 600,
                      "end": 607
                    },
                    "start": 593,
                    "end": 608
                  }
                ],
                "start": 583,
                "end": 614
              },
              "expression": false,
              "start": 554,
              "end": 614
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 547,
            "end": 614
          }
        ],
        "start": 519,
        "end": 616
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 510,
      "end": 616
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 616
}
```
