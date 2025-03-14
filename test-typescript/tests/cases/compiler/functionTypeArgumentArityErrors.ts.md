functionTypeArgumentArityErrors.ts
```json
{
  "type": "Program",
  "start": 52,
  "end": 778,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 52,
      "end": 89,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 71,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 82,
        "end": 88,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 84,
          "end": 88
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 79,
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "start": 76,
              "end": 79
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 90,
      "end": 136,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 109,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 135,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 131,
          "end": 135
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 109,
        "end": 127,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 111,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 117,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 126,
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "start": 123,
              "end": 126
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 158,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 157,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 139,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 139,
          "end": 155,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 140,
              "end": 146
            },
            {
              "type": "TSNumberKeyword",
              "start": 148,
              "end": 154
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 204,
      "expression": {
        "type": "CallExpression",
        "start": 159,
        "end": 203,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 159,
          "end": 161,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 161,
          "end": 201,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 162,
              "end": 168
            },
            {
              "type": "TSNumberKeyword",
              "start": 170,
              "end": 176
            },
            {
              "type": "TSNumberKeyword",
              "start": 178,
              "end": 184
            },
            {
              "type": "TSNumberKeyword",
              "start": 186,
              "end": 192
            },
            {
              "type": "TSNumberKeyword",
              "start": 194,
              "end": 200
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 261,
      "end": 292,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 278,
        "end": 280,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 285,
        "end": 291,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 287,
          "end": 291
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 280,
        "end": 283,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 281,
            "end": 282,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 293,
      "end": 330,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 312,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 323,
        "end": 329,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 325,
          "end": 329
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 312,
        "end": 321,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 313,
            "end": 314,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 316,
            "end": 317,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 319,
            "end": 320,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 331,
      "end": 352,
      "expression": {
        "type": "CallExpression",
        "start": 331,
        "end": 351,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 331,
          "end": 333,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 333,
          "end": 349,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 334,
              "end": 340
            },
            {
              "type": "TSNumberKeyword",
              "start": 342,
              "end": 348
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 353,
      "end": 390,
      "expression": {
        "type": "CallExpression",
        "start": 353,
        "end": 389,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 353,
          "end": 355,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 355,
          "end": 387,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 356,
              "end": 362
            },
            {
              "type": "TSNumberKeyword",
              "start": 364,
              "end": 370
            },
            {
              "type": "TSNumberKeyword",
              "start": 372,
              "end": 378
            },
            {
              "type": "TSNumberKeyword",
              "start": 380,
              "end": 386
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 428,
      "end": 456,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 445,
        "end": 447,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 449,
        "end": 455,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 451,
          "end": 455
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 457,
      "end": 486,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 476,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 477,
          "end": 478,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 479,
        "end": 485,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 481,
          "end": 485
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 487,
      "end": 500,
      "expression": {
        "type": "CallExpression",
        "start": 487,
        "end": 499,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 487,
          "end": 489,
          "decorators": [],
          "name": "f3",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 489,
          "end": 497,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 490,
              "end": 496
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 551,
      "end": 594,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 568,
        "end": 570,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 587,
        "end": 593,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 589,
          "end": 593
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 570,
        "end": 585,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 571,
            "end": 572,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 571,
              "end": 572,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 574,
            "end": 575,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 574,
              "end": 575,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 577,
            "end": 584,
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "start": 581,
              "end": 584
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 577,
              "end": 578,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 595,
      "end": 608,
      "expression": {
        "type": "CallExpression",
        "start": 595,
        "end": 607,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 595,
          "end": 597,
          "decorators": [],
          "name": "f4",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 597,
          "end": 605,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 598,
              "end": 604
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 609,
      "end": 646,
      "expression": {
        "type": "CallExpression",
        "start": 609,
        "end": 645,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 609,
          "end": 611,
          "decorators": [],
          "name": "f4",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 611,
          "end": 643,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 612,
              "end": 618
            },
            {
              "type": "TSNumberKeyword",
              "start": 620,
              "end": 626
            },
            {
              "type": "TSNumberKeyword",
              "start": 628,
              "end": 634
            },
            {
              "type": "TSNumberKeyword",
              "start": 636,
              "end": 642
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 699,
      "end": 733,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 716,
        "end": 718,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 726,
        "end": 732,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 728,
          "end": 732
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 718,
        "end": 724,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 719,
            "end": 720,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 719,
              "end": 720,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 722,
            "end": 723,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 722,
              "end": 723,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 734,
      "end": 747,
      "expression": {
        "type": "CallExpression",
        "start": 734,
        "end": 746,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 734,
          "end": 736,
          "decorators": [],
          "name": "f5",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 736,
          "end": 744,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 737,
              "end": 743
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 748,
      "end": 777,
      "expression": {
        "type": "CallExpression",
        "start": 748,
        "end": 776,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 748,
          "end": 750,
          "decorators": [],
          "name": "f5",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 750,
          "end": 774,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 751,
              "end": 757
            },
            {
              "type": "TSNumberKeyword",
              "start": 759,
              "end": 765
            },
            {
              "type": "TSNumberKeyword",
              "start": 767,
              "end": 773
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
