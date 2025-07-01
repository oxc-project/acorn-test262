__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 111
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 122,
                "end": 126
              },
              "start": 120,
              "end": 126
            },
            "start": 118,
            "end": 127
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 137
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSAnyKeyword",
                    "start": 141,
                    "end": 144
                  },
                  "start": 139,
                  "end": 144
                },
                "start": 138,
                "end": 144
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 150,
                    "end": 153
                  },
                  "start": 148,
                  "end": 153
                },
                "start": 146,
                "end": 153
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 156,
                "end": 160
              },
              "start": 154,
              "end": 160
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 132,
            "end": 161
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 170
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thisArg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 180,
                    "end": 186
                  },
                  "start": 178,
                  "end": 186
                },
                "start": 171,
                "end": 186
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "argArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 199
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 201,
                      "end": 207
                    },
                    "start": 201,
                    "end": 209
                  },
                  "start": 199,
                  "end": 209
                },
                "value": null,
                "start": 188,
                "end": 209
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 212,
                "end": 215
              },
              "start": 210,
              "end": 215
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 166,
            "end": 216
          }
        ],
        "start": 112,
        "end": 218
      },
      "declare": false,
      "start": 100,
      "end": 218
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 228
                },
                "typeArguments": null,
                "start": 227,
                "end": 228
              },
              "start": 225,
              "end": 228
            },
            "start": 224,
            "end": 228
          },
          "init": null,
          "definite": false,
          "start": 224,
          "end": 228
        }
      ],
      "declare": false,
      "start": 220,
      "end": 229
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSAnyKeyword",
                        "start": 242,
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
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 251,
                        "end": 254
                      },
                      "start": 249,
                      "end": 254
                    },
                    "start": 247,
                    "end": 254
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 259,
                    "end": 263
                  },
                  "start": 256,
                  "end": 263
                },
                "start": 238,
                "end": 263
              },
              "start": 236,
              "end": 263
            },
            "start": 234,
            "end": 263
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 273
            },
            "optional": false,
            "computed": false,
            "start": 266,
            "end": 273
          },
          "definite": false,
          "start": 234,
          "end": 273
        }
      ],
      "declare": false,
      "start": 230,
      "end": 274
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
            "name": "r1b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 294,
                        "end": 300
                      },
                      "start": 292,
                      "end": 300
                    },
                    "start": 285,
                    "end": 300
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "argArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 313
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 315,
                          "end": 321
                        },
                        "start": 315,
                        "end": 323
                      },
                      "start": 313,
                      "end": 323
                    },
                    "value": null,
                    "start": 302,
                    "end": 323
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 328,
                    "end": 332
                  },
                  "start": 325,
                  "end": 332
                },
                "start": 284,
                "end": 332
              },
              "start": 282,
              "end": 332
            },
            "start": 279,
            "end": 332
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 341
            },
            "optional": false,
            "computed": false,
            "start": 335,
            "end": 341
          },
          "definite": false,
          "start": 279,
          "end": 341
        }
      ],
      "declare": false,
      "start": 275,
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
            "name": "r1c",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 350
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 354
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 364
            },
            "optional": false,
            "computed": false,
            "start": 353,
            "end": 364
          },
          "definite": false,
          "start": 347,
          "end": 364
        }
      ],
      "declare": false,
      "start": 343,
      "end": 365
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 384,
                        "end": 388
                      },
                      "start": 382,
                      "end": 388
                    },
                    "start": 380,
                    "end": 389
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "apply",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 399
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSAnyKeyword",
                            "start": 403,
                            "end": 406
                          },
                          "start": 401,
                          "end": 406
                        },
                        "start": 400,
                        "end": 406
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 412,
                            "end": 415
                          },
                          "start": 410,
                          "end": 415
                        },
                        "start": 408,
                        "end": 415
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 418,
                        "end": 422
                      },
                      "start": 416,
                      "end": 422
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 394,
                    "end": 423
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "call",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 428,
                      "end": 432
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thisArg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 442,
                            "end": 448
                          },
                          "start": 440,
                          "end": 448
                        },
                        "start": 433,
                        "end": 448
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "argArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 453,
                          "end": 461
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 463,
                              "end": 469
                            },
                            "start": 463,
                            "end": 471
                          },
                          "start": 461,
                          "end": 471
                        },
                        "value": null,
                        "start": 450,
                        "end": 471
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 474,
                        "end": 477
                      },
                      "start": 472,
                      "end": 477
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 428,
                    "end": 478
                  }
                ],
                "start": 374,
                "end": 480
              },
              "start": 372,
              "end": 480
            },
            "start": 371,
            "end": 480
          },
          "init": null,
          "definite": false,
          "start": 371,
          "end": 480
        }
      ],
      "declare": false,
      "start": 367,
      "end": 480
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSAnyKeyword",
                        "start": 494,
                        "end": 497
                      },
                      "start": 492,
                      "end": 497
                    },
                    "start": 491,
                    "end": 497
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 503,
                        "end": 506
                      },
                      "start": 501,
                      "end": 506
                    },
                    "start": 499,
                    "end": 506
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 511,
                    "end": 515
                  },
                  "start": 508,
                  "end": 515
                },
                "start": 490,
                "end": 515
              },
              "start": 488,
              "end": 515
            },
            "start": 486,
            "end": 515
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 519
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 520,
              "end": 525
            },
            "optional": false,
            "computed": false,
            "start": 518,
            "end": 525
          },
          "definite": false,
          "start": 486,
          "end": 525
        }
      ],
      "declare": false,
      "start": 482,
      "end": 526
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 546,
                        "end": 552
                      },
                      "start": 544,
                      "end": 552
                    },
                    "start": 537,
                    "end": 552
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "argArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 557,
                      "end": 565
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 567,
                          "end": 573
                        },
                        "start": 567,
                        "end": 575
                      },
                      "start": 565,
                      "end": 575
                    },
                    "value": null,
                    "start": 554,
                    "end": 575
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 580,
                    "end": 584
                  },
                  "start": 577,
                  "end": 584
                },
                "start": 536,
                "end": 584
              },
              "start": 534,
              "end": 584
            },
            "start": 531,
            "end": 584
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 587,
              "end": 588
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 593
            },
            "optional": false,
            "computed": false,
            "start": 587,
            "end": 593
          },
          "definite": false,
          "start": 531,
          "end": 593
        }
      ],
      "declare": false,
      "start": 527,
      "end": 594
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
            "name": "r2c",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 602
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 605,
              "end": 606
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 616
            },
            "optional": false,
            "computed": false,
            "start": 605,
            "end": 616
          },
          "definite": false,
          "start": 599,
          "end": 616
        }
      ],
      "declare": false,
      "start": 595,
      "end": 617
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 100,
  "end": 617
}
```
