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
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toCarth",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 86,
                      "end": 93
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 97,
                          "end": 102
                        },
                        "typeArguments": null,
                        "start": 97,
                        "end": 102
                      },
                      "start": 95,
                      "end": 102
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 86,
                    "end": 103
                  }
                ],
                "start": 38,
                "end": 109
              },
              "declare": false,
              "start": 22,
              "end": 109
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 15,
            "end": 109
          }
        ],
        "start": 9,
        "end": 111
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 111
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 121
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 143
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fromCarth",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 163
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 172
                      },
                      "typeArguments": null,
                      "start": 167,
                      "end": 172
                    },
                    "start": 165,
                    "end": 172
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 154,
                  "end": 173
                }
              ],
              "start": 144,
              "end": 179
            },
            "declare": false,
            "start": 128,
            "end": 179
          }
        ],
        "start": 122,
        "end": 181
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 113,
      "end": 181
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
                      "start": 221,
                      "end": 222
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 224,
                        "end": 230
                      },
                      "start": 222,
                      "end": 230
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 221,
                    "end": 231
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
                      "start": 232,
                      "end": 233
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 235,
                        "end": 241
                      },
                      "start": 233,
                      "end": 241
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 232,
                    "end": 242
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toCarth",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 250
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                            "start": 254,
                            "end": 255
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 256,
                            "end": 261
                          },
                          "start": 254,
                          "end": 261
                        },
                        "typeArguments": null,
                        "start": 254,
                        "end": 261
                      },
                      "start": 252,
                      "end": 261
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 243,
                    "end": 262
                  }
                ],
                "start": 219,
                "end": 264
              },
              "start": 217,
              "end": 264
            },
            "start": 216,
            "end": 264
          },
          "init": null,
          "definite": false,
          "start": 216,
          "end": 264
        }
      ],
      "declare": false,
      "start": 212,
      "end": 265
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 274
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 275,
                    "end": 280
                  },
                  "start": 273,
                  "end": 280
                },
                "typeArguments": null,
                "start": 273,
                "end": 280
              },
              "start": 271,
              "end": 280
            },
            "start": 270,
            "end": 280
          },
          "init": null,
          "definite": false,
          "start": 270,
          "end": 280
        }
      ],
      "declare": false,
      "start": 266,
      "end": 281
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 291
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 293
          },
          "start": 290,
          "end": 293
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 295
        },
        "start": 290,
        "end": 295
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
                "name": "Line",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 323
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
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
                                "start": 346,
                                "end": 347
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 348,
                                "end": 353
                              },
                              "start": 346,
                              "end": 353
                            },
                            "typeArguments": null,
                            "start": 346,
                            "end": 353
                          },
                          "start": 344,
                          "end": 353
                        },
                        "start": 339,
                        "end": 353
                      },
                      {
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
                                "start": 360,
                                "end": 361
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 362,
                                "end": 367
                              },
                              "start": 360,
                              "end": 367
                            },
                            "typeArguments": null,
                            "start": 360,
                            "end": 367
                          },
                          "start": 358,
                          "end": 367
                        },
                        "start": 355,
                        "end": 367
                      }
                    ],
                    "returnType": null,
                    "start": 334,
                    "end": 369
                  }
                ],
                "start": 324,
                "end": 375
              },
              "declare": false,
              "start": 309,
              "end": 375
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 302,
            "end": 375
          }
        ],
        "start": 296,
        "end": 377
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 283,
      "end": 377
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 387
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 408,
                  "end": 409
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 411
                },
                "start": 408,
                "end": 411
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Line",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 432,
                      "end": 436
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
                            "name": "start",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 451,
                            "end": 456
                          },
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
                                  "start": 458,
                                  "end": 459
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 460,
                                  "end": 465
                                },
                                "start": 458,
                                "end": 465
                              },
                              "typeArguments": null,
                              "start": 458,
                              "end": 465
                            },
                            "start": 456,
                            "end": 465
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 451,
                          "end": 466
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
                            "start": 479,
                            "end": 482
                          },
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
                                  "start": 484,
                                  "end": 485
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 486,
                                  "end": 491
                                },
                                "start": 484,
                                "end": 491
                              },
                              "typeArguments": null,
                              "start": 484,
                              "end": 491
                            },
                            "start": 482,
                            "end": 491
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 479,
                          "end": 492
                        }
                      ],
                      "start": 437,
                      "end": 502
                    },
                    "declare": false,
                    "start": 422,
                    "end": 502
                  }
                ],
                "start": 412,
                "end": 508
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 401,
              "end": 508
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 394,
            "end": 508
          }
        ],
        "start": 388,
        "end": 510
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 379,
      "end": 510
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
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
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
                                "start": 558,
                                "end": 559
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 560,
                                "end": 565
                              },
                              "start": 558,
                              "end": 565
                            },
                            "typeArguments": null,
                            "start": 558,
                            "end": 565
                          },
                          "start": 556,
                          "end": 565
                        },
                        "start": 555,
                        "end": 565
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
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
                                "start": 570,
                                "end": 571
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 572,
                                "end": 577
                              },
                              "start": 570,
                              "end": 577
                            },
                            "typeArguments": null,
                            "start": 570,
                            "end": 577
                          },
                          "start": 568,
                          "end": 577
                        },
                        "start": 567,
                        "end": 577
                      }
                    ],
                    "returnType": null,
                    "start": 550,
                    "end": 579
                  }
                ],
                "start": 548,
                "end": 581
              },
              "start": 546,
              "end": 581
            },
            "start": 545,
            "end": 581
          },
          "init": null,
          "definite": false,
          "start": 545,
          "end": 581
        }
      ],
      "declare": false,
      "start": 541,
      "end": 581
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
            "name": "l",
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
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 590
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 591,
                        "end": 592
                      },
                      "start": 589,
                      "end": 592
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 593,
                      "end": 594
                    },
                    "start": 589,
                    "end": 594
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Line",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 595,
                    "end": 599
                  },
                  "start": 589,
                  "end": 599
                },
                "typeArguments": null,
                "start": 589,
                "end": 599
              },
              "start": 587,
              "end": 599
            },
            "start": 586,
            "end": 599
          },
          "init": null,
          "definite": false,
          "start": 586,
          "end": 599
        }
      ],
      "declare": false,
      "start": 582,
      "end": 600
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 600
}
```
