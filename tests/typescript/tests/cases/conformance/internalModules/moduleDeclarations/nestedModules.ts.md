__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "start": 7,
          "end": 10
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 12
        },
        "start": 7,
        "end": 12
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
                "start": 36,
                "end": 41
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
                      "start": 52,
                      "end": 53
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      },
                      "start": 53,
                      "end": 61
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 52,
                    "end": 62
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
                      "start": 71,
                      "end": 72
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 74,
                        "end": 80
                      },
                      "start": 72,
                      "end": 80
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 71,
                    "end": 81
                  }
                ],
                "start": 42,
                "end": 87
              },
              "declare": false,
              "start": 26,
              "end": 87
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 19,
            "end": 87
          }
        ],
        "start": 13,
        "end": 89
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 89
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 99
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                "start": 120,
                "end": 121
              },
              "body": {
                "type": "TSModuleBlock",
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
                          "name": "Point",
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
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 143,
                                  "end": 144
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 145,
                                  "end": 150
                                },
                                "start": 143,
                                "end": 150
                              },
                              "typeArguments": null,
                              "start": 143,
                              "end": 150
                            },
                            "start": 141,
                            "end": 150
                          },
                          "start": 136,
                          "end": 150
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
                                "start": 155,
                                "end": 156
                              },
                              "value": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 158,
                                "end": 159
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 155,
                              "end": 159
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
                                "start": 161,
                                "end": 162
                              },
                              "value": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 164,
                                "end": 165
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 161,
                              "end": 165
                            }
                          ],
                          "start": 153,
                          "end": 167
                        },
                        "definite": false,
                        "start": 136,
                        "end": 167
                      }
                    ],
                    "declare": false,
                    "start": 132,
                    "end": 168
                  }
                ],
                "start": 122,
                "end": 215
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 113,
              "end": 215
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 106,
            "end": 215
          }
        ],
        "start": 100,
        "end": 217
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 91,
      "end": 217
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "M2",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 228
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 230
        },
        "start": 226,
        "end": 230
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
                "start": 254,
                "end": 259
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
                      "start": 270,
                      "end": 271
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 273,
                        "end": 279
                      },
                      "start": 271,
                      "end": 279
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 270,
                    "end": 280
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
                      "start": 281,
                      "end": 282
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 284,
                        "end": 290
                      },
                      "start": 282,
                      "end": 290
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 281,
                    "end": 291
                  }
                ],
                "start": 260,
                "end": 297
              },
              "declare": false,
              "start": 244,
              "end": 297
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 237,
            "end": 297
          }
        ],
        "start": 231,
        "end": 299
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 219,
      "end": 299
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 310
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 332
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
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 361,
                                "end": 367
                              },
                              "start": 359,
                              "end": 367
                            },
                            "start": 354,
                            "end": 367
                          },
                          "init": null,
                          "definite": false,
                          "start": 354,
                          "end": 367
                        }
                      ],
                      "declare": false,
                      "start": 350,
                      "end": 368
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 343,
                    "end": 368
                  }
                ],
                "start": 333,
                "end": 374
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 324,
              "end": 374
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 317,
            "end": 374
          }
        ],
        "start": 311,
        "end": 376
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 301,
      "end": 376
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
            "typeAnnotation": null,
            "start": 382,
            "end": 383
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M2",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 388
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 390
            },
            "optional": false,
            "computed": false,
            "start": 386,
            "end": 390
          },
          "definite": false,
          "start": 382,
          "end": 390
        }
      ],
      "declare": false,
      "start": 378,
      "end": 391
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
            "name": "point",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 403,
                "end": 409
              },
              "start": 401,
              "end": 409
            },
            "start": 396,
            "end": 409
          },
          "init": null,
          "definite": false,
          "start": 396,
          "end": 409
        }
      ],
      "declare": false,
      "start": 392,
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
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 420
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 424
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 430
            },
            "optional": false,
            "computed": false,
            "start": 423,
            "end": 430
          },
          "definite": false,
          "start": 415,
          "end": 430
        }
      ],
      "declare": false,
      "start": 411,
      "end": 431
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
                      "start": 442,
                      "end": 443
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 445,
                        "end": 451
                      },
                      "start": 443,
                      "end": 451
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 442,
                    "end": 452
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
                      "start": 453,
                      "end": 454
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 456,
                        "end": 462
                      },
                      "start": 454,
                      "end": 462
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 453,
                    "end": 463
                  }
                ],
                "start": 440,
                "end": 465
              },
              "start": 438,
              "end": 465
            },
            "start": 437,
            "end": 465
          },
          "init": null,
          "definite": false,
          "start": 437,
          "end": 465
        }
      ],
      "declare": false,
      "start": 433,
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
                      "name": "M2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 475
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 476,
                      "end": 477
                    },
                    "start": 473,
                    "end": 477
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 483
                  },
                  "start": 473,
                  "end": 483
                },
                "typeArguments": null,
                "start": 473,
                "end": 483
              },
              "start": 471,
              "end": 483
            },
            "start": 470,
            "end": 483
          },
          "init": null,
          "definite": false,
          "start": 470,
          "end": 483
        }
      ],
      "declare": false,
      "start": 466,
      "end": 484
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 484
}
```
