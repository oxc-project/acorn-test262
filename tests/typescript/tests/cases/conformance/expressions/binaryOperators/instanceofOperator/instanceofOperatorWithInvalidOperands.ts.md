__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1016,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 25,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 25,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 23,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 23,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 23,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 38,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 37,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 37,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 37,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 34,
                "end": 37
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
      "start": 156,
      "end": 171,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 170,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 170,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
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
      "start": 172,
      "end": 188,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 187,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 187,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 180,
                "end": 187
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
      "start": 189,
      "end": 204,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 203,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 203,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 203,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
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
      "start": 205,
      "end": 218,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 217,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 217,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 217,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 213,
                "end": 217
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
      "start": 220,
      "end": 246,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "decorators": [],
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 230,
            "end": 245,
            "left": {
              "type": "Identifier",
              "start": 230,
              "end": 232,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 273,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 254,
            "decorators": [],
            "name": "ra2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 257,
            "end": 272,
            "left": {
              "type": "Identifier",
              "start": 257,
              "end": 259,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 300,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 281,
            "decorators": [],
            "name": "ra3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 284,
            "end": 299,
            "left": {
              "type": "Identifier",
              "start": 284,
              "end": 286,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 298,
              "end": 299,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 327,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 326,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 308,
            "decorators": [],
            "name": "ra4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 311,
            "end": 326,
            "left": {
              "type": "Identifier",
              "start": 311,
              "end": 313,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 325,
              "end": 326,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 353,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 335,
            "decorators": [],
            "name": "ra5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 338,
            "end": 352,
            "left": {
              "type": "Literal",
              "start": 338,
              "end": 339,
              "value": 0,
              "raw": "0"
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 382,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 361,
            "decorators": [],
            "name": "ra6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 364,
            "end": 381,
            "left": {
              "type": "Literal",
              "start": 364,
              "end": 368,
              "value": true,
              "raw": "true"
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 409,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 408,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 390,
            "decorators": [],
            "name": "ra7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 393,
            "end": 408,
            "left": {
              "type": "Literal",
              "start": 393,
              "end": 395,
              "value": "",
              "raw": "''"
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 407,
              "end": 408,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 410,
      "end": 438,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 414,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 414,
            "end": 417,
            "decorators": [],
            "name": "ra8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 420,
            "end": 437,
            "left": {
              "type": "Literal",
              "start": 420,
              "end": 424,
              "value": null,
              "raw": "null"
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 436,
              "end": 437,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 439,
      "end": 472,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 443,
          "end": 471,
          "id": {
            "type": "Identifier",
            "start": 443,
            "end": 446,
            "decorators": [],
            "name": "ra9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 449,
            "end": 471,
            "left": {
              "type": "Identifier",
              "start": 449,
              "end": 458,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 470,
              "end": 471,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 584,
      "end": 599,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 598,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 598,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 590,
              "end": 598,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 592,
                "end": 598
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
      "start": 600,
      "end": 616,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 604,
          "end": 615,
          "id": {
            "type": "Identifier",
            "start": 604,
            "end": 615,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 606,
              "end": 615,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 608,
                "end": 615
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
      "start": 617,
      "end": 632,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 621,
          "end": 631,
          "id": {
            "type": "Identifier",
            "start": 621,
            "end": 631,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 623,
              "end": 631,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 625,
                "end": 631
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
      "start": 633,
      "end": 646,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 637,
          "end": 645,
          "id": {
            "type": "Identifier",
            "start": 637,
            "end": 645,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 639,
              "end": 645,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 641,
                "end": 645
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
      "start": 647,
      "end": 658,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 651,
          "end": 657,
          "id": {
            "type": "Identifier",
            "start": 651,
            "end": 657,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 653,
              "end": 657,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 655,
                "end": 657,
                "members": []
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
      "start": 659,
      "end": 674,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 663,
          "end": 673,
          "id": {
            "type": "Identifier",
            "start": 663,
            "end": 673,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 665,
              "end": 673,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 667,
                "end": 673,
                "typeName": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 673,
                  "decorators": [],
                  "name": "Object",
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
      "start": 675,
      "end": 685,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 679,
          "end": 684,
          "id": {
            "type": "Identifier",
            "start": 679,
            "end": 684,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 681,
              "end": 684,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 683,
                "end": 684,
                "typeName": {
                  "type": "Identifier",
                  "start": 683,
                  "end": 684,
                  "decorators": [],
                  "name": "C",
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
      "start": 687,
      "end": 713,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 691,
          "end": 712,
          "id": {
            "type": "Identifier",
            "start": 691,
            "end": 694,
            "decorators": [],
            "name": "rb1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 697,
            "end": 712,
            "left": {
              "type": "Identifier",
              "start": 697,
              "end": 698,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 710,
              "end": 712,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 714,
      "end": 740,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 718,
          "end": 739,
          "id": {
            "type": "Identifier",
            "start": 718,
            "end": 721,
            "decorators": [],
            "name": "rb2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 724,
            "end": 739,
            "left": {
              "type": "Identifier",
              "start": 724,
              "end": 725,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 737,
              "end": 739,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 741,
      "end": 767,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 745,
          "end": 766,
          "id": {
            "type": "Identifier",
            "start": 745,
            "end": 748,
            "decorators": [],
            "name": "rb3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 751,
            "end": 766,
            "left": {
              "type": "Identifier",
              "start": 751,
              "end": 752,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 764,
              "end": 766,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 768,
      "end": 794,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 772,
          "end": 793,
          "id": {
            "type": "Identifier",
            "start": 772,
            "end": 775,
            "decorators": [],
            "name": "rb4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 778,
            "end": 793,
            "left": {
              "type": "Identifier",
              "start": 778,
              "end": 779,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 791,
              "end": 793,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 795,
      "end": 820,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 799,
          "end": 819,
          "id": {
            "type": "Identifier",
            "start": 799,
            "end": 802,
            "decorators": [],
            "name": "rb5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 805,
            "end": 819,
            "left": {
              "type": "Identifier",
              "start": 805,
              "end": 806,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "start": 818,
              "end": 819,
              "value": 0,
              "raw": "0"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 821,
      "end": 849,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 825,
          "end": 848,
          "id": {
            "type": "Identifier",
            "start": 825,
            "end": 828,
            "decorators": [],
            "name": "rb6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 831,
            "end": 848,
            "left": {
              "type": "Identifier",
              "start": 831,
              "end": 832,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "start": 844,
              "end": 848,
              "value": true,
              "raw": "true"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 850,
      "end": 876,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 854,
          "end": 875,
          "id": {
            "type": "Identifier",
            "start": 854,
            "end": 857,
            "decorators": [],
            "name": "rb7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 860,
            "end": 875,
            "left": {
              "type": "Identifier",
              "start": 860,
              "end": 861,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "start": 873,
              "end": 875,
              "value": "",
              "raw": "''"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 877,
      "end": 903,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 881,
          "end": 902,
          "id": {
            "type": "Identifier",
            "start": 881,
            "end": 884,
            "decorators": [],
            "name": "rb8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 887,
            "end": 902,
            "left": {
              "type": "Identifier",
              "start": 887,
              "end": 888,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 900,
              "end": 902,
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 904,
      "end": 930,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 908,
          "end": 929,
          "id": {
            "type": "Identifier",
            "start": 908,
            "end": 911,
            "decorators": [],
            "name": "rb9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 914,
            "end": 929,
            "left": {
              "type": "Identifier",
              "start": 914,
              "end": 915,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 927,
              "end": 929,
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 931,
      "end": 958,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 935,
          "end": 957,
          "id": {
            "type": "Identifier",
            "start": 935,
            "end": 939,
            "decorators": [],
            "name": "rb10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 942,
            "end": 957,
            "left": {
              "type": "Identifier",
              "start": 942,
              "end": 943,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 955,
              "end": 957,
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 989,
      "end": 1016,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 993,
          "end": 1015,
          "id": {
            "type": "Identifier",
            "start": 993,
            "end": 996,
            "decorators": [],
            "name": "rc1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 999,
            "end": 1015,
            "left": {
              "type": "Literal",
              "start": 999,
              "end": 1001,
              "value": "",
              "raw": "''"
            },
            "operator": "instanceof",
            "right": {
              "type": "ObjectExpression",
              "start": 1013,
              "end": 1015,
              "properties": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
