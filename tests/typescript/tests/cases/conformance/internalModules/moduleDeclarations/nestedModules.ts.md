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
            "start": 10,
            "end": 11
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 10,
          "end": 13
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 15
        },
        "start": 10,
        "end": 15
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
                "start": 39,
                "end": 44
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
                      "start": 55,
                      "end": 56
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 58,
                        "end": 64
                      },
                      "start": 56,
                      "end": 64
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 55,
                    "end": 65
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
                      "start": 74,
                      "end": 75
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 77,
                        "end": 83
                      },
                      "start": 75,
                      "end": 83
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 74,
                    "end": 84
                  }
                ],
                "start": 45,
                "end": 90
              },
              "declare": false,
              "start": 29,
              "end": 90
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 22,
            "end": 90
          }
        ],
        "start": 16,
        "end": 92
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 92
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 105
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
                "start": 129,
                "end": 130
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
                                  "start": 152,
                                  "end": 153
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 154,
                                  "end": 159
                                },
                                "start": 152,
                                "end": 159
                              },
                              "typeArguments": null,
                              "start": 152,
                              "end": 159
                            },
                            "start": 150,
                            "end": 159
                          },
                          "start": 145,
                          "end": 159
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
                                "start": 164,
                                "end": 165
                              },
                              "value": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 167,
                                "end": 168
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 164,
                              "end": 168
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
                                "start": 170,
                                "end": 171
                              },
                              "value": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 173,
                                "end": 174
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 170,
                              "end": 174
                            }
                          ],
                          "start": 162,
                          "end": 176
                        },
                        "definite": false,
                        "start": 145,
                        "end": 176
                      }
                    ],
                    "declare": false,
                    "start": 141,
                    "end": 177
                  }
                ],
                "start": 131,
                "end": 224
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 119,
              "end": 224
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 112,
            "end": 224
          }
        ],
        "start": 106,
        "end": 226
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 94,
      "end": 226
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
          "start": 238,
          "end": 240
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 242
        },
        "start": 238,
        "end": 242
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
                "start": 266,
                "end": 271
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
                      "start": 282,
                      "end": 283
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 285,
                        "end": 291
                      },
                      "start": 283,
                      "end": 291
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 282,
                    "end": 292
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
                      "start": 293,
                      "end": 294
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 296,
                        "end": 302
                      },
                      "start": 294,
                      "end": 302
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 293,
                    "end": 303
                  }
                ],
                "start": 272,
                "end": 309
              },
              "declare": false,
              "start": 256,
              "end": 309
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 249,
            "end": 309
          }
        ],
        "start": 243,
        "end": 311
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 228,
      "end": 311
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 325
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
                "start": 349,
                "end": 350
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
                                "start": 379,
                                "end": 385
                              },
                              "start": 377,
                              "end": 385
                            },
                            "start": 372,
                            "end": 385
                          },
                          "init": null,
                          "definite": false,
                          "start": 372,
                          "end": 385
                        }
                      ],
                      "declare": false,
                      "start": 368,
                      "end": 386
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 361,
                    "end": 386
                  }
                ],
                "start": 351,
                "end": 392
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 339,
              "end": 392
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 332,
            "end": 392
          }
        ],
        "start": 326,
        "end": 394
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 313,
      "end": 394
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
            "start": 400,
            "end": 401
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M2",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 406
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 408
            },
            "optional": false,
            "computed": false,
            "start": 404,
            "end": 408
          },
          "definite": false,
          "start": 400,
          "end": 408
        }
      ],
      "declare": false,
      "start": 396,
      "end": 409
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
                "start": 421,
                "end": 427
              },
              "start": 419,
              "end": 427
            },
            "start": 414,
            "end": 427
          },
          "init": null,
          "definite": false,
          "start": 414,
          "end": 427
        }
      ],
      "declare": false,
      "start": 410,
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
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 438
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 442
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 448
            },
            "optional": false,
            "computed": false,
            "start": 441,
            "end": 448
          },
          "definite": false,
          "start": 433,
          "end": 448
        }
      ],
      "declare": false,
      "start": 429,
      "end": 449
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
      "end": 483
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
                      "start": 491,
                      "end": 493
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 495
                    },
                    "start": 491,
                    "end": 495
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 496,
                    "end": 501
                  },
                  "start": 491,
                  "end": 501
                },
                "typeArguments": null,
                "start": 491,
                "end": 501
              },
              "start": 489,
              "end": 501
            },
            "start": 488,
            "end": 501
          },
          "init": null,
          "definite": false,
          "start": 488,
          "end": 501
        }
      ],
      "declare": false,
      "start": 484,
      "end": 502
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 502
}
```
