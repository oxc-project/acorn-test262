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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "inA",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 112
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
                        "start": 140,
                        "end": 147
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
                            "start": 156,
                            "end": 161
                          },
                          "typeArguments": null,
                          "start": 156,
                          "end": 161
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
                              "start": 176,
                              "end": 177
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 179,
                                "end": 185
                              },
                              "start": 177,
                              "end": 185
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 176,
                            "end": 186
                          }
                        ],
                        "start": 162,
                        "end": 196
                      },
                      "declare": false,
                      "start": 130,
                      "end": 196
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 123,
                    "end": 196
                  }
                ],
                "start": 113,
                "end": 202
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 99,
              "end": 202
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 92,
            "end": 202
          }
        ],
        "start": 12,
        "end": 204
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 204
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 241
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
              "start": 255,
              "end": 256
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 260
            },
            "importKind": "value",
            "start": 248,
            "end": 261
          }
        ],
        "start": 242,
        "end": 263
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 230,
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
        "start": 299,
        "end": 300
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
              "start": 314,
              "end": 315
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 319
            },
            "importKind": "value",
            "start": 307,
            "end": 320
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 333
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 336,
                "end": 337
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "inA",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 341
              },
              "start": 336,
              "end": 341
            },
            "importKind": "value",
            "start": 325,
            "end": 342
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
                        "start": 361,
                        "end": 362
                      },
                      "typeArguments": null,
                      "start": 354,
                      "end": 362
                    },
                    "start": 352,
                    "end": 362
                  },
                  "start": 351,
                  "end": 362
                },
                "init": null,
                "definite": false,
                "start": 351,
                "end": 362
              }
            ],
            "declare": false,
            "start": 347,
            "end": 363
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
                          "start": 375,
                          "end": 376
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point3D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 377,
                          "end": 384
                        },
                        "start": 375,
                        "end": 384
                      },
                      "typeArguments": null,
                      "start": 375,
                      "end": 384
                    },
                    "start": 373,
                    "end": 384
                  },
                  "start": 372,
                  "end": 384
                },
                "init": null,
                "definite": false,
                "start": 372,
                "end": 384
              }
            ],
            "declare": false,
            "start": 368,
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 395
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
                        "start": 399,
                        "end": 400
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 401,
                        "end": 402
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 399,
                      "end": 402
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
                        "start": 404,
                        "end": 405
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 406,
                        "end": 407
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 404,
                      "end": 407
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
                        "start": 409,
                        "end": 410
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 412,
                        "end": 413
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 409,
                      "end": 413
                    }
                  ],
                  "start": 398,
                  "end": 415
                },
                "definite": false,
                "start": 394,
                "end": 415
              }
            ],
            "declare": false,
            "start": 390,
            "end": 416
          }
        ],
        "start": 301,
        "end": 418
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 289,
      "end": 418
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 454,
        "end": 455
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
              "start": 469,
              "end": 470
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 474
            },
            "importKind": "value",
            "start": 462,
            "end": 475
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
                          "start": 489,
                          "end": 490
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 491,
                          "end": 496
                        },
                        "start": 489,
                        "end": 496
                      },
                      "typeArguments": null,
                      "start": 489,
                      "end": 496
                    },
                    "start": 487,
                    "end": 496
                  },
                  "start": 485,
                  "end": 496
                },
                "init": null,
                "definite": false,
                "start": 485,
                "end": 496
              }
            ],
            "declare": false,
            "start": 481,
            "end": 497
          }
        ],
        "start": 456,
        "end": 499
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 444,
      "end": 499
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 535,
        "end": 536
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
              "start": 550,
              "end": 551
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 555
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "inA",
                "optional": false,
                "typeAnnotation": null,
                "start": 556,
                "end": 559
              },
              "start": 554,
              "end": 559
            },
            "importKind": "value",
            "start": 543,
            "end": 560
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
                "start": 581,
                "end": 586
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
                          "start": 590,
                          "end": 591
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point3D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 592,
                          "end": 599
                        },
                        "start": 590,
                        "end": 599
                      },
                      "typeArguments": null,
                      "start": 590,
                      "end": 599
                    },
                    "start": 588,
                    "end": 599
                  },
                  "start": 587,
                  "end": 599
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
                        "start": 618,
                        "end": 619
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
                          "start": 622,
                          "end": 623
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 624,
                          "end": 625
                        },
                        "optional": false,
                        "computed": false,
                        "start": 622,
                        "end": 625
                      },
                      "start": 618,
                      "end": 625
                    },
                    "start": 611,
                    "end": 626
                  }
                ],
                "start": 601,
                "end": 632
              },
              "expression": false,
              "start": 572,
              "end": 632
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 565,
            "end": 632
          }
        ],
        "start": 537,
        "end": 634
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 525,
      "end": 634
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 634
}
```
