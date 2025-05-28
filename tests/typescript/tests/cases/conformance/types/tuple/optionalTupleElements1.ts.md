__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 805,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 10,
        "end": 35,
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 11,
            "end": 17
          },
          {
            "type": "TSStringKeyword",
            "start": 19,
            "end": 25
          },
          {
            "type": "TSBooleanKeyword",
            "start": 27,
            "end": 34
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 37,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 44,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 47,
        "end": 73,
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 48,
            "end": 54
          },
          {
            "type": "TSStringKeyword",
            "start": 56,
            "end": 62
          },
          {
            "type": "TSOptionalType",
            "start": 64,
            "end": 72,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 64,
              "end": 71
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 75,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 82,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 85,
        "end": 112,
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 86,
            "end": 92
          },
          {
            "type": "TSOptionalType",
            "start": 94,
            "end": 101,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 94,
              "end": 100
            }
          },
          {
            "type": "TSOptionalType",
            "start": 103,
            "end": 111,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 103,
              "end": 110
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 114,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 121,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 124,
        "end": 152,
        "elementTypes": [
          {
            "type": "TSOptionalType",
            "start": 125,
            "end": 132,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 125,
              "end": 131
            }
          },
          {
            "type": "TSOptionalType",
            "start": 134,
            "end": 141,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 134,
              "end": 140
            }
          },
          {
            "type": "TSOptionalType",
            "start": 143,
            "end": 151,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 143,
              "end": 150
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 155,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 162,
        "decorators": [],
        "name": "L1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 165,
        "end": 177,
        "objectType": {
          "type": "TSTypeReference",
          "start": 165,
          "end": 167,
          "typeName": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 168,
          "end": 176,
          "literal": {
            "type": "Literal",
            "start": 168,
            "end": 176,
            "value": "length",
            "raw": "\"length\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 179,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 186,
        "decorators": [],
        "name": "L2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 189,
        "end": 201,
        "objectType": {
          "type": "TSTypeReference",
          "start": 189,
          "end": 191,
          "typeName": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 192,
          "end": 200,
          "literal": {
            "type": "Literal",
            "start": 192,
            "end": 200,
            "value": "length",
            "raw": "\"length\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 203,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 210,
        "decorators": [],
        "name": "L3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 213,
        "end": 225,
        "objectType": {
          "type": "TSTypeReference",
          "start": 213,
          "end": 215,
          "typeName": {
            "type": "Identifier",
            "start": 213,
            "end": 215,
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 216,
          "end": 224,
          "literal": {
            "type": "Literal",
            "start": 216,
            "end": 224,
            "value": "length",
            "raw": "\"length\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 227,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "L4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 237,
        "end": 249,
        "objectType": {
          "type": "TSTypeReference",
          "start": 237,
          "end": 239,
          "typeName": {
            "type": "Identifier",
            "start": 237,
            "end": 239,
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 240,
          "end": 248,
          "literal": {
            "type": "Literal",
            "start": 240,
            "end": 248,
            "value": "length",
            "raw": "\"length\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 252,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 259,
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 262,
        "end": 288,
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 263,
            "end": 269
          },
          {
            "type": "TSOptionalType",
            "start": 271,
            "end": 278,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 271,
              "end": 277
            }
          },
          {
            "type": "TSBooleanKeyword",
            "start": 280,
            "end": 287
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 301,
      "end": 616,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 312,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 313,
          "end": 319,
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 315,
            "end": 319,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 317,
              "end": 319,
              "typeName": {
                "type": "Identifier",
                "start": 317,
                "end": 319,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 321,
          "end": 327,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 323,
            "end": 327,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 325,
              "end": 327,
              "typeName": {
                "type": "Identifier",
                "start": 325,
                "end": 327,
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 329,
          "end": 335,
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 331,
            "end": 335,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 333,
              "end": 335,
              "typeName": {
                "type": "Identifier",
                "start": 333,
                "end": 335,
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 337,
          "end": 343,
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 339,
            "end": 343,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 341,
              "end": 343,
              "typeName": {
                "type": "Identifier",
                "start": 341,
                "end": 343,
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 345,
        "end": 616,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 351,
            "end": 359,
            "expression": {
              "type": "AssignmentExpression",
              "start": 351,
              "end": 358,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 351,
                "end": 353,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 356,
                "end": 358,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 364,
            "end": 372,
            "expression": {
              "type": "AssignmentExpression",
              "start": 364,
              "end": 371,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 364,
                "end": 366,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 369,
                "end": 371,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 387,
            "end": 395,
            "expression": {
              "type": "AssignmentExpression",
              "start": 387,
              "end": 394,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 387,
                "end": 389,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 392,
                "end": 394,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 410,
            "end": 418,
            "expression": {
              "type": "AssignmentExpression",
              "start": 410,
              "end": 417,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 410,
                "end": 412,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 415,
                "end": 417,
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 433,
            "end": 441,
            "expression": {
              "type": "AssignmentExpression",
              "start": 433,
              "end": 440,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 433,
                "end": 435,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 438,
                "end": 440,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 446,
            "end": 454,
            "expression": {
              "type": "AssignmentExpression",
              "start": 446,
              "end": 453,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 446,
                "end": 448,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 451,
                "end": 453,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 459,
            "end": 467,
            "expression": {
              "type": "AssignmentExpression",
              "start": 459,
              "end": 466,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 459,
                "end": 461,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 464,
                "end": 466,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 482,
            "end": 490,
            "expression": {
              "type": "AssignmentExpression",
              "start": 482,
              "end": 489,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 482,
                "end": 484,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 487,
                "end": 489,
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 505,
            "end": 513,
            "expression": {
              "type": "AssignmentExpression",
              "start": 505,
              "end": 512,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 505,
                "end": 507,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 510,
                "end": 512,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 518,
            "end": 526,
            "expression": {
              "type": "AssignmentExpression",
              "start": 518,
              "end": 525,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 518,
                "end": 520,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 523,
                "end": 525,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 531,
            "end": 539,
            "expression": {
              "type": "AssignmentExpression",
              "start": 531,
              "end": 538,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 531,
                "end": 533,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 536,
                "end": 538,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 544,
            "end": 552,
            "expression": {
              "type": "AssignmentExpression",
              "start": 544,
              "end": 551,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 544,
                "end": 546,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 549,
                "end": 551,
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 567,
            "end": 575,
            "expression": {
              "type": "AssignmentExpression",
              "start": 567,
              "end": 574,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 567,
                "end": 569,
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 572,
                "end": 574,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 580,
            "end": 588,
            "expression": {
              "type": "AssignmentExpression",
              "start": 580,
              "end": 587,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 580,
                "end": 582,
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 585,
                "end": 587,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 593,
            "end": 601,
            "expression": {
              "type": "AssignmentExpression",
              "start": 593,
              "end": 600,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 593,
                "end": 595,
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 598,
                "end": 600,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 606,
            "end": 614,
            "expression": {
              "type": "AssignmentExpression",
              "start": 606,
              "end": 613,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 606,
                "end": 608,
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 611,
                "end": 613,
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 618,
      "end": 629,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 622,
          "end": 628,
          "id": {
            "type": "Identifier",
            "start": 622,
            "end": 628,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 624,
              "end": 628,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 626,
                "end": 628,
                "typeName": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 628,
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 630,
      "end": 641,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 634,
          "end": 640,
          "id": {
            "type": "Identifier",
            "start": 634,
            "end": 640,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 636,
              "end": 640,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 638,
                "end": 640,
                "typeName": {
                  "type": "Identifier",
                  "start": 638,
                  "end": 640,
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 642,
      "end": 653,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 646,
          "end": 652,
          "id": {
            "type": "Identifier",
            "start": 646,
            "end": 652,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 648,
              "end": 652,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 650,
                "end": 652,
                "typeName": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 652,
                  "decorators": [],
                  "name": "T4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 655,
      "end": 674,
      "expression": {
        "type": "AssignmentExpression",
        "start": 655,
        "end": 673,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 655,
          "end": 657,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 660,
          "end": 673,
          "elements": [
            {
              "type": "Literal",
              "start": 661,
              "end": 663,
              "value": 42,
              "raw": "42"
            },
            {
              "type": "Literal",
              "start": 665,
              "end": 672,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 675,
      "end": 694,
      "expression": {
        "type": "AssignmentExpression",
        "start": 675,
        "end": 693,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 675,
          "end": 677,
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 680,
          "end": 693,
          "elements": [
            {
              "type": "Literal",
              "start": 681,
              "end": 683,
              "value": 42,
              "raw": "42"
            },
            {
              "type": "Literal",
              "start": 685,
              "end": 692,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 695,
      "end": 710,
      "expression": {
        "type": "AssignmentExpression",
        "start": 695,
        "end": 710,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 695,
          "end": 697,
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 700,
          "end": 710,
          "elements": [
            {
              "type": "Literal",
              "start": 701,
              "end": 703,
              "value": 42,
              "raw": "42"
            },
            null,
            {
              "type": "Literal",
              "start": 705,
              "end": 709,
              "value": true,
              "raw": "true"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 711,
      "end": 721,
      "expression": {
        "type": "AssignmentExpression",
        "start": 711,
        "end": 720,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 711,
          "end": 713,
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 716,
          "end": 720,
          "elements": [
            {
              "type": "Literal",
              "start": 717,
              "end": 719,
              "value": 42,
              "raw": "42"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 722,
      "end": 741,
      "expression": {
        "type": "AssignmentExpression",
        "start": 722,
        "end": 740,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 722,
          "end": 724,
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 727,
          "end": 740,
          "elements": [
            {
              "type": "Literal",
              "start": 728,
              "end": 730,
              "value": 42,
              "raw": "42"
            },
            {
              "type": "Literal",
              "start": 732,
              "end": 739,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 742,
      "end": 758,
      "expression": {
        "type": "AssignmentExpression",
        "start": 742,
        "end": 757,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 742,
          "end": 744,
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 747,
          "end": 757,
          "elements": [
            {
              "type": "Literal",
              "start": 748,
              "end": 750,
              "value": 42,
              "raw": "42"
            },
            null,
            {
              "type": "Literal",
              "start": 752,
              "end": 756,
              "value": true,
              "raw": "true"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 759,
      "end": 781,
      "expression": {
        "type": "AssignmentExpression",
        "start": 759,
        "end": 780,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 759,
          "end": 761,
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 764,
          "end": 780,
          "elements": [
            null,
            {
              "type": "Literal",
              "start": 766,
              "end": 773,
              "value": "hello",
              "raw": "\"hello\""
            },
            {
              "type": "Literal",
              "start": 775,
              "end": 779,
              "value": true,
              "raw": "true"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 782,
      "end": 796,
      "expression": {
        "type": "AssignmentExpression",
        "start": 782,
        "end": 795,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 782,
          "end": 784,
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 787,
          "end": 795,
          "elements": [
            null,
            null,
            {
              "type": "Literal",
              "start": 790,
              "end": 794,
              "value": true,
              "raw": "true"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 797,
      "end": 805,
      "expression": {
        "type": "AssignmentExpression",
        "start": 797,
        "end": 804,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 797,
          "end": 799,
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 802,
          "end": 804,
          "elements": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
