__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 896,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 24,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 38,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 72,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 55,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 60,
            "end": 70,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 74,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 96,
        "name": "HelloOrWorld",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 105,
          "end": 109,
          "expression": {
            "type": "Identifier",
            "start": 105,
            "end": 109,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 110,
        "end": 130,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 116,
            "end": 128,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 118,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 127,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 120,
                "end": 127
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 132,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 151,
        "name": "JustHello",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 160,
          "end": 164,
          "expression": {
            "type": "Identifier",
            "start": 160,
            "end": 164,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 165,
        "end": 185,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 171,
            "end": 183,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 173,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 182,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 175,
                "end": 182
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 187,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 206,
        "name": "JustWorld",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 215,
          "end": 219,
          "expression": {
            "type": "Identifier",
            "start": 215,
            "end": 219,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 220,
        "end": 240,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 226,
            "end": 238,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 228,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 237,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 230,
                "end": 237
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 246,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 246,
            "end": 260,
            "name": "hello",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 260,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 253,
                "end": 260,
                "literal": {
                  "type": "Literal",
                  "start": 253,
                  "end": 260,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 280,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 280,
            "name": "world",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 280,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 273,
                "end": 280,
                "literal": {
                  "type": "Literal",
                  "start": 273,
                  "end": 280,
                  "value": "world",
                  "raw": "\"world\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 282,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 317,
            "name": "helloOrWorld",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 298,
              "end": 317,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 300,
                "end": 317,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 300,
                    "end": 307,
                    "literal": {
                      "type": "Literal",
                      "start": 300,
                      "end": 307,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 310,
                    "end": 317,
                    "literal": {
                      "type": "Literal",
                      "start": 310,
                      "end": 317,
                      "value": "world",
                      "raw": "\"world\""
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 320,
      "end": 354,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 330,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 331,
          "end": 341,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 332,
            "end": 341,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 334,
              "end": 341,
              "literal": {
                "type": "Literal",
                "start": 334,
                "end": 341,
                "value": "hello",
                "raw": "\"hello\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 342,
        "end": 353,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 344,
          "end": 353,
          "typeName": {
            "type": "Identifier",
            "start": 344,
            "end": 353,
            "name": "JustHello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 355,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 365,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 366,
          "end": 386,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 367,
            "end": 386,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 369,
              "end": 386,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 369,
                  "end": 376,
                  "literal": {
                    "type": "Literal",
                    "start": 369,
                    "end": 376,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 379,
                  "end": 386,
                  "literal": {
                    "type": "Literal",
                    "start": 379,
                    "end": 386,
                    "value": "world",
                    "raw": "\"world\""
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 387,
        "end": 401,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 389,
          "end": 401,
          "typeName": {
            "type": "Identifier",
            "start": 389,
            "end": 401,
            "name": "HelloOrWorld",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 403,
      "end": 437,
      "id": {
        "type": "Identifier",
        "start": 412,
        "end": 413,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 414,
          "end": 424,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 415,
            "end": 424,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 417,
              "end": 424,
              "literal": {
                "type": "Literal",
                "start": 417,
                "end": 424,
                "value": "world",
                "raw": "\"world\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 425,
        "end": 436,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 427,
          "end": 436,
          "typeName": {
            "type": "Identifier",
            "start": 427,
            "end": 436,
            "name": "JustWorld",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 438,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 447,
        "end": 448,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 449,
          "end": 458,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 450,
            "end": 458,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 452,
              "end": 458
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 459,
        "end": 465,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 461,
          "end": 465,
          "typeName": {
            "type": "Identifier",
            "start": 461,
            "end": 465,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 467,
      "end": 524,
      "id": {
        "type": "Identifier",
        "start": 476,
        "end": 477,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 478,
          "end": 492,
          "argument": {
            "type": "Identifier",
            "start": 481,
            "end": 485,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 485,
            "end": 492,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 487,
              "end": 492,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 487,
                "end": 490
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 499,
        "end": 524,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 505,
            "end": 522,
            "argument": {
              "type": "Identifier",
              "start": 512,
              "end": 521,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 493,
        "end": 498,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 495,
          "end": 498
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 526,
      "end": 550,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 549,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 538,
            "name": "fResult1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 541,
            "end": 549,
            "callee": {
              "type": "Identifier",
              "start": 541,
              "end": 542,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 543,
                "end": 548,
                "name": "hello",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 551,
      "end": 575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 555,
          "end": 574,
          "id": {
            "type": "Identifier",
            "start": 555,
            "end": 563,
            "name": "fResult2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 566,
            "end": 574,
            "callee": {
              "type": "Identifier",
              "start": 566,
              "end": 567,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 568,
                "end": 573,
                "name": "world",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 576,
      "end": 607,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 580,
          "end": 606,
          "id": {
            "type": "Identifier",
            "start": 580,
            "end": 588,
            "name": "fResult3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 591,
            "end": 606,
            "callee": {
              "type": "Identifier",
              "start": 591,
              "end": 592,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 593,
                "end": 605,
                "name": "helloOrWorld",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 609,
      "end": 637,
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 619,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 620,
          "end": 629,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 621,
            "end": 629,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 623,
              "end": 629
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 630,
        "end": 636,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 632,
          "end": 636,
          "typeName": {
            "type": "Identifier",
            "start": 632,
            "end": 636,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 638,
      "end": 672,
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 648,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 649,
          "end": 659,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 650,
            "end": 659,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 652,
              "end": 659,
              "literal": {
                "type": "Literal",
                "start": 652,
                "end": 659,
                "value": "hello",
                "raw": "\"hello\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 660,
        "end": 671,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 662,
          "end": 671,
          "typeName": {
            "type": "Identifier",
            "start": 662,
            "end": 671,
            "name": "JustHello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 673,
      "end": 720,
      "id": {
        "type": "Identifier",
        "start": 682,
        "end": 683,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 684,
          "end": 704,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 685,
            "end": 704,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 687,
              "end": 704,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 687,
                  "end": 694,
                  "literal": {
                    "type": "Literal",
                    "start": 687,
                    "end": 694,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 697,
                  "end": 704,
                  "literal": {
                    "type": "Literal",
                    "start": 697,
                    "end": 704,
                    "value": "world",
                    "raw": "\"world\""
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 705,
        "end": 719,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 707,
          "end": 719,
          "typeName": {
            "type": "Identifier",
            "start": 707,
            "end": 719,
            "name": "HelloOrWorld",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 721,
      "end": 755,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 731,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 732,
          "end": 742,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 733,
            "end": 742,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 735,
              "end": 742,
              "literal": {
                "type": "Literal",
                "start": 735,
                "end": 742,
                "value": "world",
                "raw": "\"world\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 743,
        "end": 754,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 745,
          "end": 754,
          "typeName": {
            "type": "Identifier",
            "start": 745,
            "end": 754,
            "name": "JustWorld",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 756,
      "end": 813,
      "id": {
        "type": "Identifier",
        "start": 765,
        "end": 766,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 767,
          "end": 781,
          "argument": {
            "type": "Identifier",
            "start": 770,
            "end": 774,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 774,
            "end": 781,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 776,
              "end": 781,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 776,
                "end": 779
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 788,
        "end": 813,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 794,
            "end": 811,
            "argument": {
              "type": "Identifier",
              "start": 801,
              "end": 810,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 782,
        "end": 787,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 784,
          "end": 787
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 815,
      "end": 839,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 819,
          "end": 838,
          "id": {
            "type": "Identifier",
            "start": 819,
            "end": 827,
            "name": "gResult1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 830,
            "end": 838,
            "callee": {
              "type": "Identifier",
              "start": 830,
              "end": 831,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 832,
                "end": 837,
                "name": "hello",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 840,
      "end": 864,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 844,
          "end": 863,
          "id": {
            "type": "Identifier",
            "start": 844,
            "end": 852,
            "name": "gResult2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 855,
            "end": 863,
            "callee": {
              "type": "Identifier",
              "start": 855,
              "end": 856,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 857,
                "end": 862,
                "name": "world",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 865,
      "end": 896,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 869,
          "end": 895,
          "id": {
            "type": "Identifier",
            "start": 869,
            "end": 877,
            "name": "gResult3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 880,
            "end": 895,
            "callee": {
              "type": "Identifier",
              "start": 880,
              "end": 881,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 882,
                "end": 894,
                "name": "helloOrWorld",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
