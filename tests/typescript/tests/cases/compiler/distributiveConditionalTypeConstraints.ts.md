__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "typeArguments": null,
          "start": 18,
          "end": 19
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSUnknownKeyword",
            "start": 28,
            "end": 35
          },
          "start": 28,
          "end": 37
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 40,
            "end": 44
          },
          "start": 40,
          "end": 44
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 47,
            "end": 52
          },
          "start": 47,
          "end": 52
        },
        "start": 18,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 77,
              "end": 83
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 83
          }
        ],
        "start": 66,
        "end": 84
      },
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
                "type": "Identifier",
                "decorators": [],
                "name": "IsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 95
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 97
                    },
                    "typeArguments": null,
                    "start": 96,
                    "end": 97
                  }
                ],
                "start": 95,
                "end": 98
              },
              "start": 88,
              "end": 98
            },
            "start": 86,
            "end": 98
          },
          "start": 85,
          "end": 98
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 113,
                        "end": 117
                      },
                      "start": 113,
                      "end": 117
                    },
                    "start": 111,
                    "end": 117
                  },
                  "start": 110,
                  "end": 117
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "definite": false,
                "start": 110,
                "end": 121
              }
            ],
            "declare": false,
            "start": 106,
            "end": 122
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 145,
                        "end": 150
                      },
                      "start": 145,
                      "end": 150
                    },
                    "start": 143,
                    "end": 150
                  },
                  "start": 142,
                  "end": 150
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 154
                },
                "definite": false,
                "start": 142,
                "end": 154
              }
            ],
            "declare": false,
            "start": 138,
            "end": 155
          }
        ],
        "start": 100,
        "end": 167
      },
      "expression": false,
      "start": 55,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 180
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 191,
                "end": 198
              },
              "start": 191,
              "end": 200
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 181,
            "end": 200
          }
        ],
        "start": 180,
        "end": 201
      },
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
                "type": "Identifier",
                "decorators": [],
                "name": "IsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 212
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 213,
                    "end": 214
                  }
                ],
                "start": 212,
                "end": 215
              },
              "start": 205,
              "end": 215
            },
            "start": 203,
            "end": 215
          },
          "start": 202,
          "end": 215
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 230,
                        "end": 234
                      },
                      "start": 230,
                      "end": 234
                    },
                    "start": 228,
                    "end": 234
                  },
                  "start": 227,
                  "end": 234
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 238
                },
                "definite": false,
                "start": 227,
                "end": 238
              }
            ],
            "declare": false,
            "start": 223,
            "end": 239
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 251,
                        "end": 256
                      },
                      "start": 251,
                      "end": 256
                    },
                    "start": 249,
                    "end": 256
                  },
                  "start": 248,
                  "end": 256
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 260
                },
                "definite": false,
                "start": 248,
                "end": 260
              }
            ],
            "declare": false,
            "start": 244,
            "end": 261
          }
        ],
        "start": 217,
        "end": 273
      },
      "expression": false,
      "start": 169,
      "end": 273
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 286
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 288
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 297,
                "end": 303
              },
              "start": 297,
              "end": 305
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 287,
            "end": 305
          }
        ],
        "start": 286,
        "end": 306
      },
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
                "type": "Identifier",
                "decorators": [],
                "name": "IsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 317
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 319
                    },
                    "typeArguments": null,
                    "start": 318,
                    "end": 319
                  }
                ],
                "start": 317,
                "end": 320
              },
              "start": 310,
              "end": 320
            },
            "start": 308,
            "end": 320
          },
          "start": 307,
          "end": 320
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 335,
                        "end": 339
                      },
                      "start": 335,
                      "end": 339
                    },
                    "start": 333,
                    "end": 339
                  },
                  "start": 332,
                  "end": 339
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 343
                },
                "definite": false,
                "start": 332,
                "end": 343
              }
            ],
            "declare": false,
            "start": 328,
            "end": 344
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 356,
                        "end": 361
                      },
                      "start": 356,
                      "end": 361
                    },
                    "start": 354,
                    "end": 361
                  },
                  "start": 353,
                  "end": 361
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 365
                },
                "definite": false,
                "start": 353,
                "end": 365
              }
            ],
            "declare": false,
            "start": 349,
            "end": 366
          }
        ],
        "start": 322,
        "end": 378
      },
      "expression": false,
      "start": 275,
      "end": 378
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 391
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 393
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 410
              },
              "typeArguments": null,
              "start": 402,
              "end": 410
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 392,
            "end": 410
          }
        ],
        "start": 391,
        "end": 411
      },
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
                "type": "Identifier",
                "decorators": [],
                "name": "IsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 422
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 423,
                      "end": 424
                    },
                    "typeArguments": null,
                    "start": 423,
                    "end": 424
                  }
                ],
                "start": 422,
                "end": 425
              },
              "start": 415,
              "end": 425
            },
            "start": 413,
            "end": 425
          },
          "start": 412,
          "end": 425
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 440,
                        "end": 444
                      },
                      "start": 440,
                      "end": 444
                    },
                    "start": 438,
                    "end": 444
                  },
                  "start": 437,
                  "end": 444
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 448
                },
                "definite": false,
                "start": 437,
                "end": 448
              }
            ],
            "declare": false,
            "start": 433,
            "end": 449
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 472,
                        "end": 477
                      },
                      "start": 472,
                      "end": 477
                    },
                    "start": 470,
                    "end": 477
                  },
                  "start": 469,
                  "end": 477
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 481
                },
                "definite": false,
                "start": 469,
                "end": 481
              }
            ],
            "declare": false,
            "start": 465,
            "end": 482
          }
        ],
        "start": 427,
        "end": 484
      },
      "expression": false,
      "start": 380,
      "end": 484
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZeroOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 491,
        "end": 497
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 499
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 498,
            "end": 499
          }
        ],
        "start": 497,
        "end": 500
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 508
          },
          "typeArguments": null,
          "start": 507,
          "end": 508
        },
        "extendsType": {
          "type": "TSNullKeyword",
          "start": 517,
          "end": 521
        },
        "trueType": {
          "type": "TSNullKeyword",
          "start": 524,
          "end": 528
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 536
            },
            "typeArguments": null,
            "start": 535,
            "end": 536
          },
          "extendsType": {
            "type": "TSUndefinedKeyword",
            "start": 545,
            "end": 554
          },
          "trueType": {
            "type": "TSUndefinedKeyword",
            "start": 557,
            "end": 566
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 573,
                "end": 574
              },
              "typeArguments": null,
              "start": 573,
              "end": 574
            },
            "extendsType": {
              "type": "TSStringKeyword",
              "start": 583,
              "end": 589
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 592,
                "end": 594
              },
              "start": 592,
              "end": 594
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 601,
                  "end": 602
                },
                "typeArguments": null,
                "start": 601,
                "end": 602
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "start": 611,
                "end": 617
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 620,
                  "end": 621
                },
                "start": 620,
                "end": 621
              },
              "falseType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 628,
                    "end": 629
                  },
                  "typeArguments": null,
                  "start": 628,
                  "end": 629
                },
                "extendsType": {
                  "type": "TSBooleanKeyword",
                  "start": 638,
                  "end": 645
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 648,
                    "end": 653
                  },
                  "start": 648,
                  "end": 653
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 660,
                  "end": 665
                },
                "start": 628,
                "end": 665
              },
              "start": 601,
              "end": 665
            },
            "start": 573,
            "end": 665
          },
          "start": 535,
          "end": 665
        },
        "start": 507,
        "end": 665
      },
      "declare": false,
      "start": 486,
      "end": 666
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 677,
        "end": 680
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 681,
              "end": 682
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 691,
              "end": 693
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 681,
            "end": 693
          }
        ],
        "start": 680,
        "end": 694
      },
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
                "type": "Identifier",
                "decorators": [],
                "name": "ZeroOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 698,
                "end": 704
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 705,
                      "end": 706
                    },
                    "typeArguments": null,
                    "start": 705,
                    "end": 706
                  }
                ],
                "start": 704,
                "end": 707
              },
              "start": 698,
              "end": 707
            },
            "start": 696,
            "end": 707
          },
          "start": 695,
          "end": 707
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 722,
                            "end": 724
                          },
                          "start": 722,
                          "end": 724
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 727,
                            "end": 728
                          },
                          "start": 727,
                          "end": 728
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 731,
                            "end": 736
                          },
                          "start": 731,
                          "end": 736
                        }
                      ],
                      "start": 722,
                      "end": 736
                    },
                    "start": 720,
                    "end": 736
                  },
                  "start": 719,
                  "end": 736
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 740
                },
                "definite": false,
                "start": 719,
                "end": 740
              }
            ],
            "declare": false,
            "start": 715,
            "end": 741
          }
        ],
        "start": 709,
        "end": 743
      },
      "expression": false,
      "start": 668,
      "end": 743
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 753
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 755
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 754,
            "end": 755
          }
        ],
        "start": 753,
        "end": 756
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 759,
            "end": 760
          },
          "typeArguments": null,
          "start": 759,
          "end": 760
        },
        "extendsType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 769,
                "end": 774
              },
              "start": 769,
              "end": 774
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 777,
                "end": 779
              },
              "start": 777,
              "end": 779
            }
          ],
          "start": 769,
          "end": 779
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 782,
            "end": 786
          },
          "start": 782,
          "end": 786
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 789,
            "end": 794
          },
          "start": 789,
          "end": 794
        },
        "start": 759,
        "end": 794
      },
      "declare": false,
      "start": 745,
      "end": 795
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 809
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 810,
              "end": 811
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 820,
              "end": 826
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 810,
            "end": 826
          }
        ],
        "start": 809,
        "end": 827
      },
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
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 831,
                "end": 834
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 835,
                      "end": 836
                    },
                    "typeArguments": null,
                    "start": 835,
                    "end": 836
                  }
                ],
                "start": 834,
                "end": 837
              },
              "start": 831,
              "end": 837
            },
            "start": 829,
            "end": 837
          },
          "start": 828,
          "end": 837
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 852,
                        "end": 857
                      },
                      "start": 852,
                      "end": 857
                    },
                    "start": 850,
                    "end": 857
                  },
                  "start": 849,
                  "end": 857
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 861
                },
                "definite": false,
                "start": 849,
                "end": 861
              }
            ],
            "declare": false,
            "start": 845,
            "end": 862
          }
        ],
        "start": 839,
        "end": 874
      },
      "expression": false,
      "start": 797,
      "end": 874
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 917,
        "end": 918
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 921,
              "end": 924
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 928,
                "end": 932
              },
              "start": 926,
              "end": 932
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 921,
            "end": 933
          }
        ],
        "start": 919,
        "end": 935
      },
      "declare": false,
      "start": 907,
      "end": 935
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 946,
        "end": 947
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 953
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 957,
                "end": 961
              },
              "start": 955,
              "end": 961
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 950,
            "end": 962
          }
        ],
        "start": 948,
        "end": 964
      },
      "declare": false,
      "start": 936,
      "end": 964
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 975,
        "end": 976
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 979,
              "end": 982
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 986,
                "end": 990
              },
              "start": 984,
              "end": 990
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 979,
            "end": 991
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 992,
              "end": 995
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 999,
                "end": 1003
              },
              "start": 997,
              "end": 1003
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 992,
            "end": 1003
          }
        ],
        "start": 977,
        "end": 1005
      },
      "declare": false,
      "start": 965,
      "end": 1005
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1016,
        "end": 1021
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1022,
              "end": 1023
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1032,
                "end": 1033
              },
              "typeArguments": null,
              "start": 1032,
              "end": 1033
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1022,
            "end": 1033
          }
        ],
        "start": 1021,
        "end": 1034
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1038,
                  "end": 1039
                },
                "typeArguments": null,
                "start": 1038,
                "end": 1039
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1048,
                  "end": 1049
                },
                "typeArguments": null,
                "start": 1048,
                "end": 1049
              },
              "trueType": {
                "type": "TSNumberKeyword",
                "start": 1052,
                "end": 1058
              },
              "falseType": {
                "type": "TSStringKeyword",
                "start": 1061,
                "end": 1067
              },
              "start": 1038,
              "end": 1067
            },
            "start": 1036,
            "end": 1067
          },
          "start": 1035,
          "end": 1067
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1087
                },
                "prefix": true,
                "start": 1079,
                "end": 1087
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 1091,
                "end": 1099
              },
              "start": 1079,
              "end": 1099
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1111,
                    "end": 1112
                  },
                  "directive": null,
                  "start": 1111,
                  "end": 1113
                }
              ],
              "start": 1101,
              "end": 1153
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1173,
                    "end": 1174
                  },
                  "directive": null,
                  "start": 1173,
                  "end": 1175
                }
              ],
              "start": 1163,
              "end": 1191
            },
            "start": 1075,
            "end": 1191
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newY",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1208,
                          "end": 1214
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1217,
                          "end": 1223
                        }
                      ],
                      "start": 1208,
                      "end": 1223
                    },
                    "start": 1206,
                    "end": 1223
                  },
                  "start": 1202,
                  "end": 1223
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1226,
                  "end": 1227
                },
                "definite": false,
                "start": 1202,
                "end": 1227
              }
            ],
            "declare": false,
            "start": 1196,
            "end": 1228
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "newY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1233,
              "end": 1237
            },
            "directive": null,
            "start": 1233,
            "end": 1238
          }
        ],
        "start": 1069,
        "end": 1251
      },
      "expression": false,
      "start": 1007,
      "end": 1251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1262,
        "end": 1267
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1268,
              "end": 1269
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1278,
                "end": 1279
              },
              "typeArguments": null,
              "start": 1278,
              "end": 1279
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1268,
            "end": 1279
          }
        ],
        "start": 1267,
        "end": 1280
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1284,
                  "end": 1285
                },
                "typeArguments": null,
                "start": 1284,
                "end": 1285
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1294,
                  "end": 1295
                },
                "typeArguments": null,
                "start": 1294,
                "end": 1295
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 1298,
                "end": 1304
              },
              "falseType": {
                "type": "TSNumberKeyword",
                "start": 1307,
                "end": 1313
              },
              "start": 1284,
              "end": 1313
            },
            "start": 1282,
            "end": 1313
          },
          "start": 1281,
          "end": 1313
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1332,
                  "end": 1333
                },
                "prefix": true,
                "start": 1325,
                "end": 1333
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 1337,
                "end": 1345
              },
              "start": 1325,
              "end": 1345
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1357,
                    "end": 1358
                  },
                  "directive": null,
                  "start": 1357,
                  "end": 1359
                }
              ],
              "start": 1347,
              "end": 1375
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1395,
                    "end": 1396
                  },
                  "directive": null,
                  "start": 1395,
                  "end": 1397
                }
              ],
              "start": 1385,
              "end": 1437
            },
            "start": 1321,
            "end": 1437
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newY",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1454,
                          "end": 1460
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1463,
                          "end": 1469
                        }
                      ],
                      "start": 1454,
                      "end": 1469
                    },
                    "start": 1452,
                    "end": 1469
                  },
                  "start": 1448,
                  "end": 1469
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1472,
                  "end": 1473
                },
                "definite": false,
                "start": 1448,
                "end": 1473
              }
            ],
            "declare": false,
            "start": 1442,
            "end": 1474
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "newY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1479,
              "end": 1483
            },
            "directive": null,
            "start": 1479,
            "end": 1484
          }
        ],
        "start": 1315,
        "end": 1498
      },
      "expression": false,
      "start": 1253,
      "end": 1498
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1509,
        "end": 1514
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1515,
              "end": 1516
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1525,
                "end": 1526
              },
              "typeArguments": null,
              "start": 1525,
              "end": 1526
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1515,
            "end": 1526
          }
        ],
        "start": 1514,
        "end": 1527
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1531,
                  "end": 1532
                },
                "typeArguments": null,
                "start": 1531,
                "end": 1532
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1541,
                  "end": 1542
                },
                "typeArguments": null,
                "start": 1541,
                "end": 1542
              },
              "trueType": {
                "type": "TSNumberKeyword",
                "start": 1545,
                "end": 1551
              },
              "falseType": {
                "type": "TSStringKeyword",
                "start": 1554,
                "end": 1560
              },
              "start": 1531,
              "end": 1560
            },
            "start": 1529,
            "end": 1560
          },
          "start": 1528,
          "end": 1560
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1579,
                  "end": 1580
                },
                "prefix": true,
                "start": 1572,
                "end": 1580
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 1584,
                "end": 1592
              },
              "start": 1572,
              "end": 1592
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1604,
                    "end": 1605
                  },
                  "directive": null,
                  "start": 1604,
                  "end": 1606
                }
              ],
              "start": 1594,
              "end": 1657
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1677,
                    "end": 1678
                  },
                  "directive": null,
                  "start": 1677,
                  "end": 1679
                }
              ],
              "start": 1667,
              "end": 1719
            },
            "start": 1568,
            "end": 1719
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newY",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1736,
                          "end": 1742
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1745,
                          "end": 1751
                        }
                      ],
                      "start": 1736,
                      "end": 1751
                    },
                    "start": 1734,
                    "end": 1751
                  },
                  "start": 1730,
                  "end": 1751
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1754,
                  "end": 1755
                },
                "definite": false,
                "start": 1730,
                "end": 1755
              }
            ],
            "declare": false,
            "start": 1724,
            "end": 1756
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "newY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1761,
              "end": 1765
            },
            "directive": null,
            "start": 1761,
            "end": 1766
          }
        ],
        "start": 1562,
        "end": 1788
      },
      "expression": false,
      "start": 1500,
      "end": 1788
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1799,
        "end": 1804
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1805,
              "end": 1806
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1815,
                "end": 1816
              },
              "typeArguments": null,
              "start": 1815,
              "end": 1816
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1805,
            "end": 1816
          }
        ],
        "start": 1804,
        "end": 1817
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1821,
                  "end": 1822
                },
                "typeArguments": null,
                "start": 1821,
                "end": 1822
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1831,
                  "end": 1832
                },
                "typeArguments": null,
                "start": 1831,
                "end": 1832
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 1835,
                "end": 1841
              },
              "falseType": {
                "type": "TSNumberKeyword",
                "start": 1844,
                "end": 1850
              },
              "start": 1821,
              "end": 1850
            },
            "start": 1819,
            "end": 1850
          },
          "start": 1818,
          "end": 1850
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1869,
                  "end": 1870
                },
                "prefix": true,
                "start": 1862,
                "end": 1870
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 1874,
                "end": 1882
              },
              "start": 1862,
              "end": 1882
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1894,
                    "end": 1895
                  },
                  "directive": null,
                  "start": 1894,
                  "end": 1896
                }
              ],
              "start": 1884,
              "end": 1947
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1967,
                    "end": 1968
                  },
                  "directive": null,
                  "start": 1967,
                  "end": 1969
                }
              ],
              "start": 1957,
              "end": 2009
            },
            "start": 1858,
            "end": 2009
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newY",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2026,
                          "end": 2032
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2035,
                          "end": 2041
                        }
                      ],
                      "start": 2026,
                      "end": 2041
                    },
                    "start": 2024,
                    "end": 2041
                  },
                  "start": 2020,
                  "end": 2041
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2044,
                  "end": 2045
                },
                "definite": false,
                "start": 2020,
                "end": 2045
              }
            ],
            "declare": false,
            "start": 2014,
            "end": 2046
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "newY",
              "optional": false,
              "typeAnnotation": null,
              "start": 2051,
              "end": 2055
            },
            "directive": null,
            "start": 2051,
            "end": 2056
          }
        ],
        "start": 1852,
        "end": 2078
      },
      "expression": false,
      "start": 1790,
      "end": 2078
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2078
}
```
