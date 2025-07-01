__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 17
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 20,
                "end": 23
              },
              "expression": false,
              "start": 17,
              "end": 23
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 23
          }
        ],
        "start": 8,
        "end": 25
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 25
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
                "type": "TSAnyKeyword",
                "start": 34,
                "end": 37
              },
              "start": 32,
              "end": 37
            },
            "start": 31,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 37
        }
      ],
      "declare": false,
      "start": 27,
      "end": 38
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
            },
            "start": 160,
            "end": 170
          },
          "init": null,
          "definite": false,
          "start": 160,
          "end": 170
        }
      ],
      "declare": false,
      "start": 156,
      "end": 171
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 180,
                "end": 187
              },
              "start": 178,
              "end": 187
            },
            "start": 176,
            "end": 187
          },
          "init": null,
          "definite": false,
          "start": 176,
          "end": 187
        }
      ],
      "declare": false,
      "start": 172,
      "end": 188
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
              },
              "start": 195,
              "end": 203
            },
            "start": 193,
            "end": 203
          },
          "init": null,
          "definite": false,
          "start": 193,
          "end": 203
        }
      ],
      "declare": false,
      "start": 189,
      "end": 204
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 213,
                "end": 217
              },
              "start": 211,
              "end": 217
            },
            "start": 209,
            "end": 217
          },
          "init": null,
          "definite": false,
          "start": 209,
          "end": 217
        }
      ],
      "declare": false,
      "start": 205,
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
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 227
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 232
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "start": 230,
            "end": 245
          },
          "definite": false,
          "start": 224,
          "end": 245
        }
      ],
      "declare": false,
      "start": 220,
      "end": 246
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
            "name": "ra2",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 254
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 259
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 272
            },
            "start": 257,
            "end": 272
          },
          "definite": false,
          "start": 251,
          "end": 272
        }
      ],
      "declare": false,
      "start": 247,
      "end": 273
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
            "name": "ra3",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 281
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 286
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 299
            },
            "start": 284,
            "end": 299
          },
          "definite": false,
          "start": 278,
          "end": 299
        }
      ],
      "declare": false,
      "start": 274,
      "end": 300
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
            "name": "ra4",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 308
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 313
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 326
            },
            "start": 311,
            "end": 326
          },
          "definite": false,
          "start": 305,
          "end": 326
        }
      ],
      "declare": false,
      "start": 301,
      "end": 327
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
            "name": "ra5",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 335
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 338,
              "end": 339
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 352
            },
            "start": 338,
            "end": 352
          },
          "definite": false,
          "start": 332,
          "end": 352
        }
      ],
      "declare": false,
      "start": 328,
      "end": 353
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
            "name": "ra6",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 361
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 364,
              "end": 368
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 381
            },
            "start": 364,
            "end": 381
          },
          "definite": false,
          "start": 358,
          "end": 381
        }
      ],
      "declare": false,
      "start": 354,
      "end": 382
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
            "name": "ra7",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 390
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 393,
              "end": 395
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 408
            },
            "start": 393,
            "end": 408
          },
          "definite": false,
          "start": 387,
          "end": 408
        }
      ],
      "declare": false,
      "start": 383,
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
            "name": "ra8",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 417
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 420,
              "end": 424
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 437
            },
            "start": 420,
            "end": 437
          },
          "definite": false,
          "start": 414,
          "end": 437
        }
      ],
      "declare": false,
      "start": 410,
      "end": 438
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
            "name": "ra9",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 446
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 458
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 471
            },
            "start": 449,
            "end": 471
          },
          "definite": false,
          "start": 443,
          "end": 471
        }
      ],
      "declare": false,
      "start": 439,
      "end": 472
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 592,
                "end": 598
              },
              "start": 590,
              "end": 598
            },
            "start": 588,
            "end": 598
          },
          "init": null,
          "definite": false,
          "start": 588,
          "end": 598
        }
      ],
      "declare": false,
      "start": 584,
      "end": 599
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 608,
                "end": 615
              },
              "start": 606,
              "end": 615
            },
            "start": 604,
            "end": 615
          },
          "init": null,
          "definite": false,
          "start": 604,
          "end": 615
        }
      ],
      "declare": false,
      "start": 600,
      "end": 616
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 625,
                "end": 631
              },
              "start": 623,
              "end": 631
            },
            "start": 621,
            "end": 631
          },
          "init": null,
          "definite": false,
          "start": 621,
          "end": 631
        }
      ],
      "declare": false,
      "start": 617,
      "end": 632
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 641,
                "end": 645
              },
              "start": 639,
              "end": 645
            },
            "start": 637,
            "end": 645
          },
          "init": null,
          "definite": false,
          "start": 637,
          "end": 645
        }
      ],
      "declare": false,
      "start": 633,
      "end": 646
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 655,
                "end": 657
              },
              "start": 653,
              "end": 657
            },
            "start": 651,
            "end": 657
          },
          "init": null,
          "definite": false,
          "start": 651,
          "end": 657
        }
      ],
      "declare": false,
      "start": 647,
      "end": 658
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 673
                },
                "typeArguments": null,
                "start": 667,
                "end": 673
              },
              "start": 665,
              "end": 673
            },
            "start": 663,
            "end": 673
          },
          "init": null,
          "definite": false,
          "start": 663,
          "end": 673
        }
      ],
      "declare": false,
      "start": 659,
      "end": 674
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 683,
                  "end": 684
                },
                "typeArguments": null,
                "start": 683,
                "end": 684
              },
              "start": 681,
              "end": 684
            },
            "start": 679,
            "end": 684
          },
          "init": null,
          "definite": false,
          "start": 679,
          "end": 684
        }
      ],
      "declare": false,
      "start": 675,
      "end": 685
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
            "name": "rb1",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 694
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 698
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 710,
              "end": 712
            },
            "start": 697,
            "end": 712
          },
          "definite": false,
          "start": 691,
          "end": 712
        }
      ],
      "declare": false,
      "start": 687,
      "end": 713
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
            "name": "rb2",
            "optional": false,
            "typeAnnotation": null,
            "start": 718,
            "end": 721
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 724,
              "end": 725
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 739
            },
            "start": 724,
            "end": 739
          },
          "definite": false,
          "start": 718,
          "end": 739
        }
      ],
      "declare": false,
      "start": 714,
      "end": 740
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
            "name": "rb3",
            "optional": false,
            "typeAnnotation": null,
            "start": 745,
            "end": 748
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 752
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 764,
              "end": 766
            },
            "start": 751,
            "end": 766
          },
          "definite": false,
          "start": 745,
          "end": 766
        }
      ],
      "declare": false,
      "start": 741,
      "end": 767
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
            "name": "rb4",
            "optional": false,
            "typeAnnotation": null,
            "start": 772,
            "end": 775
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 778,
              "end": 779
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 793
            },
            "start": 778,
            "end": 793
          },
          "definite": false,
          "start": 772,
          "end": 793
        }
      ],
      "declare": false,
      "start": 768,
      "end": 794
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
            "name": "rb5",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 802
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 806
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 818,
              "end": 819
            },
            "start": 805,
            "end": 819
          },
          "definite": false,
          "start": 799,
          "end": 819
        }
      ],
      "declare": false,
      "start": 795,
      "end": 820
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
            "name": "rb6",
            "optional": false,
            "typeAnnotation": null,
            "start": 825,
            "end": 828
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 832
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 844,
              "end": 848
            },
            "start": 831,
            "end": 848
          },
          "definite": false,
          "start": 825,
          "end": 848
        }
      ],
      "declare": false,
      "start": 821,
      "end": 849
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
            "name": "rb7",
            "optional": false,
            "typeAnnotation": null,
            "start": 854,
            "end": 857
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 860,
              "end": 861
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 873,
              "end": 875
            },
            "start": 860,
            "end": 875
          },
          "definite": false,
          "start": 854,
          "end": 875
        }
      ],
      "declare": false,
      "start": 850,
      "end": 876
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
            "name": "rb8",
            "optional": false,
            "typeAnnotation": null,
            "start": 881,
            "end": 884
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 888
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null,
              "start": 900,
              "end": 902
            },
            "start": 887,
            "end": 902
          },
          "definite": false,
          "start": 881,
          "end": 902
        }
      ],
      "declare": false,
      "start": 877,
      "end": 903
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
            "name": "rb9",
            "optional": false,
            "typeAnnotation": null,
            "start": 908,
            "end": 911
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 914,
              "end": 915
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 929
            },
            "start": 914,
            "end": 929
          },
          "definite": false,
          "start": 908,
          "end": 929
        }
      ],
      "declare": false,
      "start": 904,
      "end": 930
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
            "name": "rb10",
            "optional": false,
            "typeAnnotation": null,
            "start": 935,
            "end": 939
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 942,
              "end": 943
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 957
            },
            "start": 942,
            "end": 957
          },
          "definite": false,
          "start": 935,
          "end": 957
        }
      ],
      "declare": false,
      "start": 931,
      "end": 958
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
            "name": "rc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 993,
            "end": 996
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 999,
              "end": 1001
            },
            "operator": "instanceof",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1013,
              "end": 1015
            },
            "start": 999,
            "end": 1015
          },
          "definite": false,
          "start": 993,
          "end": 1015
        }
      ],
      "declare": false,
      "start": 989,
      "end": 1016
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1016
}
```
