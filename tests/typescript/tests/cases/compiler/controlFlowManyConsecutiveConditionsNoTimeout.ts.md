__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 18
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "One",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 28
              },
              "initializer": null,
              "computed": false,
              "start": 25,
              "end": 28
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Two",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 37
              },
              "initializer": null,
              "computed": false,
              "start": 34,
              "end": 37
            }
          ],
          "start": 19,
          "end": 40
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 40
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
            "name": "choice",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 62
                },
                "typeArguments": null,
                "start": 56,
                "end": 62
              },
              "start": 54,
              "end": 62
            },
            "start": 48,
            "end": 62
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Choice",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 75
            },
            "optional": false,
            "computed": false,
            "start": 65,
            "end": 75
          },
          "definite": false,
          "start": 48,
          "end": 75
        }
      ],
      "declare": false,
      "start": 42,
      "end": 76
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
            "name": "choiceOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 92
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Choice",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 101
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 105
            },
            "optional": false,
            "computed": false,
            "start": 95,
            "end": 105
          },
          "definite": false,
          "start": 83,
          "end": 105
        }
      ],
      "declare": false,
      "start": 77,
      "end": 106
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 118
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 132
        },
        "start": 112,
        "end": 132
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 134,
        "end": 136
      },
      "alternate": null,
      "start": 108,
      "end": 136
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 147
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 161
        },
        "start": 141,
        "end": 161
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 163,
        "end": 165
      },
      "alternate": null,
      "start": 137,
      "end": 165
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 176
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 190
        },
        "start": 170,
        "end": 190
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 192,
        "end": 194
      },
      "alternate": null,
      "start": 166,
      "end": 194
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 205
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 219
        },
        "start": 199,
        "end": 219
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 221,
        "end": 223
      },
      "alternate": null,
      "start": 195,
      "end": 223
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 234
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 248
        },
        "start": 228,
        "end": 248
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 250,
        "end": 252
      },
      "alternate": null,
      "start": 224,
      "end": 252
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 263
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 277
        },
        "start": 257,
        "end": 277
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 279,
        "end": 281
      },
      "alternate": null,
      "start": 253,
      "end": 281
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 286,
          "end": 292
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 297,
          "end": 306
        },
        "start": 286,
        "end": 306
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 308,
        "end": 310
      },
      "alternate": null,
      "start": 282,
      "end": 310
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 321
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 326,
          "end": 335
        },
        "start": 315,
        "end": 335
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 337,
        "end": 339
      },
      "alternate": null,
      "start": 311,
      "end": 339
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 350
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 355,
          "end": 364
        },
        "start": 344,
        "end": 364
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 366,
        "end": 368
      },
      "alternate": null,
      "start": 340,
      "end": 368
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 379
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 384,
          "end": 393
        },
        "start": 373,
        "end": 393
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 395,
        "end": 397
      },
      "alternate": null,
      "start": 369,
      "end": 397
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 402,
          "end": 408
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 413,
          "end": 422
        },
        "start": 402,
        "end": 422
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 424,
        "end": 426
      },
      "alternate": null,
      "start": 398,
      "end": 426
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 437
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 451
        },
        "start": 431,
        "end": 451
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 453,
        "end": 455
      },
      "alternate": null,
      "start": 427,
      "end": 455
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 466
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 471,
          "end": 480
        },
        "start": 460,
        "end": 480
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 482,
        "end": 484
      },
      "alternate": null,
      "start": 456,
      "end": 484
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 495
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 500,
          "end": 509
        },
        "start": 489,
        "end": 509
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 511,
        "end": 513
      },
      "alternate": null,
      "start": 485,
      "end": 513
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 518,
          "end": 524
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 529,
          "end": 538
        },
        "start": 518,
        "end": 538
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 540,
        "end": 542
      },
      "alternate": null,
      "start": 514,
      "end": 542
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 547,
          "end": 553
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 558,
          "end": 567
        },
        "start": 547,
        "end": 567
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 569,
        "end": 571
      },
      "alternate": null,
      "start": 543,
      "end": 571
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 576,
          "end": 582
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 587,
          "end": 596
        },
        "start": 576,
        "end": 596
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 598,
        "end": 600
      },
      "alternate": null,
      "start": 572,
      "end": 600
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 605,
          "end": 611
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 616,
          "end": 625
        },
        "start": 605,
        "end": 625
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 627,
        "end": 629
      },
      "alternate": null,
      "start": 601,
      "end": 629
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 634,
          "end": 640
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 645,
          "end": 654
        },
        "start": 634,
        "end": 654
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 656,
        "end": 658
      },
      "alternate": null,
      "start": 630,
      "end": 658
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 663,
          "end": 669
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 674,
          "end": 683
        },
        "start": 663,
        "end": 683
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 685,
        "end": 687
      },
      "alternate": null,
      "start": 659,
      "end": 687
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 692,
          "end": 698
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 703,
          "end": 712
        },
        "start": 692,
        "end": 712
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 714,
        "end": 716
      },
      "alternate": null,
      "start": 688,
      "end": 716
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 721,
          "end": 727
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 732,
          "end": 741
        },
        "start": 721,
        "end": 741
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 743,
        "end": 745
      },
      "alternate": null,
      "start": 717,
      "end": 745
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 750,
          "end": 756
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 761,
          "end": 770
        },
        "start": 750,
        "end": 770
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 772,
        "end": 774
      },
      "alternate": null,
      "start": 746,
      "end": 774
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 779,
          "end": 785
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 790,
          "end": 799
        },
        "start": 779,
        "end": 799
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 801,
        "end": 803
      },
      "alternate": null,
      "start": 775,
      "end": 803
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 808,
          "end": 814
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 819,
          "end": 828
        },
        "start": 808,
        "end": 828
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 830,
        "end": 832
      },
      "alternate": null,
      "start": 804,
      "end": 832
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 837,
          "end": 843
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 848,
          "end": 857
        },
        "start": 837,
        "end": 857
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 859,
        "end": 861
      },
      "alternate": null,
      "start": 833,
      "end": 861
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 866,
          "end": 872
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 877,
          "end": 886
        },
        "start": 866,
        "end": 886
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 888,
        "end": 890
      },
      "alternate": null,
      "start": 862,
      "end": 890
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 895,
          "end": 901
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 906,
          "end": 915
        },
        "start": 895,
        "end": 915
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 917,
        "end": 919
      },
      "alternate": null,
      "start": 891,
      "end": 919
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 924,
          "end": 930
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 935,
          "end": 944
        },
        "start": 924,
        "end": 944
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 946,
        "end": 948
      },
      "alternate": null,
      "start": 920,
      "end": 948
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 953,
          "end": 959
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 964,
          "end": 973
        },
        "start": 953,
        "end": 973
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 975,
        "end": 977
      },
      "alternate": null,
      "start": 949,
      "end": 977
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 982,
          "end": 988
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 993,
          "end": 1002
        },
        "start": 982,
        "end": 1002
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1004,
        "end": 1006
      },
      "alternate": null,
      "start": 978,
      "end": 1006
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1011,
          "end": 1017
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1022,
          "end": 1031
        },
        "start": 1011,
        "end": 1031
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1033,
        "end": 1035
      },
      "alternate": null,
      "start": 1007,
      "end": 1035
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1040,
          "end": 1046
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1051,
          "end": 1060
        },
        "start": 1040,
        "end": 1060
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1062,
        "end": 1064
      },
      "alternate": null,
      "start": 1036,
      "end": 1064
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1069,
          "end": 1075
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1080,
          "end": 1089
        },
        "start": 1069,
        "end": 1089
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1091,
        "end": 1093
      },
      "alternate": null,
      "start": 1065,
      "end": 1093
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1098,
          "end": 1104
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1109,
          "end": 1118
        },
        "start": 1098,
        "end": 1118
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1120,
        "end": 1122
      },
      "alternate": null,
      "start": 1094,
      "end": 1122
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1127,
          "end": 1133
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1138,
          "end": 1147
        },
        "start": 1127,
        "end": 1147
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1149,
        "end": 1151
      },
      "alternate": null,
      "start": 1123,
      "end": 1151
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1156,
          "end": 1162
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1167,
          "end": 1176
        },
        "start": 1156,
        "end": 1176
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1178,
        "end": 1180
      },
      "alternate": null,
      "start": 1152,
      "end": 1180
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1185,
          "end": 1191
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1196,
          "end": 1205
        },
        "start": 1185,
        "end": 1205
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1207,
        "end": 1209
      },
      "alternate": null,
      "start": 1181,
      "end": 1209
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1214,
          "end": 1220
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1225,
          "end": 1234
        },
        "start": 1214,
        "end": 1234
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1236,
        "end": 1238
      },
      "alternate": null,
      "start": 1210,
      "end": 1238
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1249
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1254,
          "end": 1263
        },
        "start": 1243,
        "end": 1263
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1265,
        "end": 1267
      },
      "alternate": null,
      "start": 1239,
      "end": 1267
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1272,
          "end": 1278
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1283,
          "end": 1292
        },
        "start": 1272,
        "end": 1292
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1294,
        "end": 1296
      },
      "alternate": null,
      "start": 1268,
      "end": 1296
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1301,
          "end": 1307
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1312,
          "end": 1321
        },
        "start": 1301,
        "end": 1321
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1323,
        "end": 1325
      },
      "alternate": null,
      "start": 1297,
      "end": 1325
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1330,
          "end": 1336
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1341,
          "end": 1350
        },
        "start": 1330,
        "end": 1350
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1352,
        "end": 1354
      },
      "alternate": null,
      "start": 1326,
      "end": 1354
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1359,
          "end": 1365
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1370,
          "end": 1379
        },
        "start": 1359,
        "end": 1379
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1381,
        "end": 1383
      },
      "alternate": null,
      "start": 1355,
      "end": 1383
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1388,
          "end": 1394
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1399,
          "end": 1408
        },
        "start": 1388,
        "end": 1408
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1410,
        "end": 1412
      },
      "alternate": null,
      "start": 1384,
      "end": 1412
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1417,
          "end": 1423
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1428,
          "end": 1437
        },
        "start": 1417,
        "end": 1437
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1439,
        "end": 1441
      },
      "alternate": null,
      "start": 1413,
      "end": 1441
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1446,
          "end": 1452
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1457,
          "end": 1466
        },
        "start": 1446,
        "end": 1466
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1468,
        "end": 1470
      },
      "alternate": null,
      "start": 1442,
      "end": 1470
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1475,
          "end": 1481
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1486,
          "end": 1495
        },
        "start": 1475,
        "end": 1495
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1497,
        "end": 1499
      },
      "alternate": null,
      "start": 1471,
      "end": 1499
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1504,
          "end": 1510
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1515,
          "end": 1524
        },
        "start": 1504,
        "end": 1524
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1526,
        "end": 1528
      },
      "alternate": null,
      "start": 1500,
      "end": 1528
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1533,
          "end": 1539
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1544,
          "end": 1553
        },
        "start": 1533,
        "end": 1553
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1555,
        "end": 1557
      },
      "alternate": null,
      "start": 1529,
      "end": 1557
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1562,
          "end": 1568
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1573,
          "end": 1582
        },
        "start": 1562,
        "end": 1582
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1584,
        "end": 1586
      },
      "alternate": null,
      "start": 1558,
      "end": 1586
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1591,
          "end": 1597
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1602,
          "end": 1611
        },
        "start": 1591,
        "end": 1611
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1613,
        "end": 1615
      },
      "alternate": null,
      "start": 1587,
      "end": 1615
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1620,
          "end": 1626
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1631,
          "end": 1640
        },
        "start": 1620,
        "end": 1640
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1642,
        "end": 1644
      },
      "alternate": null,
      "start": 1616,
      "end": 1644
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1649,
          "end": 1655
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1660,
          "end": 1669
        },
        "start": 1649,
        "end": 1669
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1671,
        "end": 1673
      },
      "alternate": null,
      "start": 1645,
      "end": 1673
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1678,
          "end": 1684
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1689,
          "end": 1698
        },
        "start": 1678,
        "end": 1698
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1700,
        "end": 1702
      },
      "alternate": null,
      "start": 1674,
      "end": 1702
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1707,
          "end": 1713
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1718,
          "end": 1727
        },
        "start": 1707,
        "end": 1727
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1729,
        "end": 1731
      },
      "alternate": null,
      "start": 1703,
      "end": 1731
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1736,
          "end": 1742
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1747,
          "end": 1756
        },
        "start": 1736,
        "end": 1756
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1758,
        "end": 1760
      },
      "alternate": null,
      "start": 1732,
      "end": 1760
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1765,
          "end": 1771
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1776,
          "end": 1785
        },
        "start": 1765,
        "end": 1785
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1787,
        "end": 1789
      },
      "alternate": null,
      "start": 1761,
      "end": 1789
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1794,
          "end": 1800
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1805,
          "end": 1814
        },
        "start": 1794,
        "end": 1814
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1816,
        "end": 1818
      },
      "alternate": null,
      "start": 1790,
      "end": 1818
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1823,
          "end": 1829
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null,
          "start": 1834,
          "end": 1843
        },
        "start": 1823,
        "end": 1843
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1845,
        "end": 1847
      },
      "alternate": null,
      "start": 1819,
      "end": 1847
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 1857,
        "end": 1861
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1873,
                "end": 1879
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 1884,
                "end": 1893
              },
              "start": 1873,
              "end": 1893
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1895,
              "end": 1897
            },
            "alternate": null,
            "start": 1869,
            "end": 1897
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1906,
                "end": 1912
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 1917,
                "end": 1926
              },
              "start": 1906,
              "end": 1926
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1928,
              "end": 1930
            },
            "alternate": null,
            "start": 1902,
            "end": 1930
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1939,
                "end": 1945
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 1950,
                "end": 1959
              },
              "start": 1939,
              "end": 1959
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1961,
              "end": 1963
            },
            "alternate": null,
            "start": 1935,
            "end": 1963
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1972,
                "end": 1978
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 1983,
                "end": 1992
              },
              "start": 1972,
              "end": 1992
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1994,
              "end": 1996
            },
            "alternate": null,
            "start": 1968,
            "end": 1996
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2005,
                "end": 2011
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2016,
                "end": 2025
              },
              "start": 2005,
              "end": 2025
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2027,
              "end": 2029
            },
            "alternate": null,
            "start": 2001,
            "end": 2029
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2038,
                "end": 2044
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2049,
                "end": 2058
              },
              "start": 2038,
              "end": 2058
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2060,
              "end": 2062
            },
            "alternate": null,
            "start": 2034,
            "end": 2062
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2071,
                "end": 2077
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2082,
                "end": 2091
              },
              "start": 2071,
              "end": 2091
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2093,
              "end": 2095
            },
            "alternate": null,
            "start": 2067,
            "end": 2095
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2104,
                "end": 2110
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2115,
                "end": 2124
              },
              "start": 2104,
              "end": 2124
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2126,
              "end": 2128
            },
            "alternate": null,
            "start": 2100,
            "end": 2128
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2137,
                "end": 2143
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2148,
                "end": 2157
              },
              "start": 2137,
              "end": 2157
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2159,
              "end": 2161
            },
            "alternate": null,
            "start": 2133,
            "end": 2161
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2170,
                "end": 2176
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2181,
                "end": 2190
              },
              "start": 2170,
              "end": 2190
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2192,
              "end": 2194
            },
            "alternate": null,
            "start": 2166,
            "end": 2194
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2203,
                "end": 2209
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2214,
                "end": 2223
              },
              "start": 2203,
              "end": 2223
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2225,
              "end": 2227
            },
            "alternate": null,
            "start": 2199,
            "end": 2227
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2236,
                "end": 2242
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2247,
                "end": 2256
              },
              "start": 2236,
              "end": 2256
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2258,
              "end": 2260
            },
            "alternate": null,
            "start": 2232,
            "end": 2260
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2269,
                "end": 2275
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2280,
                "end": 2289
              },
              "start": 2269,
              "end": 2289
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2291,
              "end": 2293
            },
            "alternate": null,
            "start": 2265,
            "end": 2293
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2302,
                "end": 2308
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2313,
                "end": 2322
              },
              "start": 2302,
              "end": 2322
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2324,
              "end": 2326
            },
            "alternate": null,
            "start": 2298,
            "end": 2326
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2335,
                "end": 2341
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2346,
                "end": 2355
              },
              "start": 2335,
              "end": 2355
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2357,
              "end": 2359
            },
            "alternate": null,
            "start": 2331,
            "end": 2359
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2368,
                "end": 2374
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2379,
                "end": 2388
              },
              "start": 2368,
              "end": 2388
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2390,
              "end": 2392
            },
            "alternate": null,
            "start": 2364,
            "end": 2392
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2401,
                "end": 2407
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2412,
                "end": 2421
              },
              "start": 2401,
              "end": 2421
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2423,
              "end": 2425
            },
            "alternate": null,
            "start": 2397,
            "end": 2425
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2434,
                "end": 2440
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2445,
                "end": 2454
              },
              "start": 2434,
              "end": 2454
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2456,
              "end": 2458
            },
            "alternate": null,
            "start": 2430,
            "end": 2458
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2467,
                "end": 2473
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2478,
                "end": 2487
              },
              "start": 2467,
              "end": 2487
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2489,
              "end": 2491
            },
            "alternate": null,
            "start": 2463,
            "end": 2491
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2500,
                "end": 2506
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2511,
                "end": 2520
              },
              "start": 2500,
              "end": 2520
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2522,
              "end": 2524
            },
            "alternate": null,
            "start": 2496,
            "end": 2524
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2533,
                "end": 2539
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2544,
                "end": 2553
              },
              "start": 2533,
              "end": 2553
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2555,
              "end": 2557
            },
            "alternate": null,
            "start": 2529,
            "end": 2557
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2566,
                "end": 2572
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2577,
                "end": 2586
              },
              "start": 2566,
              "end": 2586
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2588,
              "end": 2590
            },
            "alternate": null,
            "start": 2562,
            "end": 2590
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2599,
                "end": 2605
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2610,
                "end": 2619
              },
              "start": 2599,
              "end": 2619
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2621,
              "end": 2623
            },
            "alternate": null,
            "start": 2595,
            "end": 2623
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2632,
                "end": 2638
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2643,
                "end": 2652
              },
              "start": 2632,
              "end": 2652
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2654,
              "end": 2656
            },
            "alternate": null,
            "start": 2628,
            "end": 2656
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2665,
                "end": 2671
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2676,
                "end": 2685
              },
              "start": 2665,
              "end": 2685
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2687,
              "end": 2689
            },
            "alternate": null,
            "start": 2661,
            "end": 2689
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2698,
                "end": 2704
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2709,
                "end": 2718
              },
              "start": 2698,
              "end": 2718
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2720,
              "end": 2722
            },
            "alternate": null,
            "start": 2694,
            "end": 2722
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2731,
                "end": 2737
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2742,
                "end": 2751
              },
              "start": 2731,
              "end": 2751
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2753,
              "end": 2755
            },
            "alternate": null,
            "start": 2727,
            "end": 2755
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2764,
                "end": 2770
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2775,
                "end": 2784
              },
              "start": 2764,
              "end": 2784
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2786,
              "end": 2788
            },
            "alternate": null,
            "start": 2760,
            "end": 2788
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2797,
                "end": 2803
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2808,
                "end": 2817
              },
              "start": 2797,
              "end": 2817
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2819,
              "end": 2821
            },
            "alternate": null,
            "start": 2793,
            "end": 2821
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2830,
                "end": 2836
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2841,
                "end": 2850
              },
              "start": 2830,
              "end": 2850
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2852,
              "end": 2854
            },
            "alternate": null,
            "start": 2826,
            "end": 2854
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2863,
                "end": 2869
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2874,
                "end": 2883
              },
              "start": 2863,
              "end": 2883
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2885,
              "end": 2887
            },
            "alternate": null,
            "start": 2859,
            "end": 2887
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2896,
                "end": 2902
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2907,
                "end": 2916
              },
              "start": 2896,
              "end": 2916
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2918,
              "end": 2920
            },
            "alternate": null,
            "start": 2892,
            "end": 2920
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2929,
                "end": 2935
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2940,
                "end": 2949
              },
              "start": 2929,
              "end": 2949
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2951,
              "end": 2953
            },
            "alternate": null,
            "start": 2925,
            "end": 2953
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2962,
                "end": 2968
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 2973,
                "end": 2982
              },
              "start": 2962,
              "end": 2982
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2984,
              "end": 2986
            },
            "alternate": null,
            "start": 2958,
            "end": 2986
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2995,
                "end": 3001
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3006,
                "end": 3015
              },
              "start": 2995,
              "end": 3015
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3017,
              "end": 3019
            },
            "alternate": null,
            "start": 2991,
            "end": 3019
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3028,
                "end": 3034
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3039,
                "end": 3048
              },
              "start": 3028,
              "end": 3048
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3050,
              "end": 3052
            },
            "alternate": null,
            "start": 3024,
            "end": 3052
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3061,
                "end": 3067
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3072,
                "end": 3081
              },
              "start": 3061,
              "end": 3081
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3083,
              "end": 3085
            },
            "alternate": null,
            "start": 3057,
            "end": 3085
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3094,
                "end": 3100
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3105,
                "end": 3114
              },
              "start": 3094,
              "end": 3114
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3116,
              "end": 3118
            },
            "alternate": null,
            "start": 3090,
            "end": 3118
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3127,
                "end": 3133
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3138,
                "end": 3147
              },
              "start": 3127,
              "end": 3147
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3149,
              "end": 3151
            },
            "alternate": null,
            "start": 3123,
            "end": 3151
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3160,
                "end": 3166
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3171,
                "end": 3180
              },
              "start": 3160,
              "end": 3180
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3182,
              "end": 3184
            },
            "alternate": null,
            "start": 3156,
            "end": 3184
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3193,
                "end": 3199
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3204,
                "end": 3213
              },
              "start": 3193,
              "end": 3213
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3215,
              "end": 3217
            },
            "alternate": null,
            "start": 3189,
            "end": 3217
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3226,
                "end": 3232
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3237,
                "end": 3246
              },
              "start": 3226,
              "end": 3246
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3248,
              "end": 3250
            },
            "alternate": null,
            "start": 3222,
            "end": 3250
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3259,
                "end": 3265
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3270,
                "end": 3279
              },
              "start": 3259,
              "end": 3279
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3281,
              "end": 3283
            },
            "alternate": null,
            "start": 3255,
            "end": 3283
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3292,
                "end": 3298
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3303,
                "end": 3312
              },
              "start": 3292,
              "end": 3312
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3314,
              "end": 3316
            },
            "alternate": null,
            "start": 3288,
            "end": 3316
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3325,
                "end": 3331
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3336,
                "end": 3345
              },
              "start": 3325,
              "end": 3345
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3347,
              "end": 3349
            },
            "alternate": null,
            "start": 3321,
            "end": 3349
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3358,
                "end": 3364
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3369,
                "end": 3378
              },
              "start": 3358,
              "end": 3378
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3380,
              "end": 3382
            },
            "alternate": null,
            "start": 3354,
            "end": 3382
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3391,
                "end": 3397
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3402,
                "end": 3411
              },
              "start": 3391,
              "end": 3411
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3413,
              "end": 3415
            },
            "alternate": null,
            "start": 3387,
            "end": 3415
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3424,
                "end": 3430
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3435,
                "end": 3444
              },
              "start": 3424,
              "end": 3444
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3446,
              "end": 3448
            },
            "alternate": null,
            "start": 3420,
            "end": 3448
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3457,
                "end": 3463
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3468,
                "end": 3477
              },
              "start": 3457,
              "end": 3477
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3479,
              "end": 3481
            },
            "alternate": null,
            "start": 3453,
            "end": 3481
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3490,
                "end": 3496
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3501,
                "end": 3510
              },
              "start": 3490,
              "end": 3510
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3512,
              "end": 3514
            },
            "alternate": null,
            "start": 3486,
            "end": 3514
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3523,
                "end": 3529
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3534,
                "end": 3543
              },
              "start": 3523,
              "end": 3543
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3545,
              "end": 3547
            },
            "alternate": null,
            "start": 3519,
            "end": 3547
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3556,
                "end": 3562
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3567,
                "end": 3576
              },
              "start": 3556,
              "end": 3576
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3578,
              "end": 3580
            },
            "alternate": null,
            "start": 3552,
            "end": 3580
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3589,
                "end": 3595
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3600,
                "end": 3609
              },
              "start": 3589,
              "end": 3609
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3611,
              "end": 3613
            },
            "alternate": null,
            "start": 3585,
            "end": 3613
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3622,
                "end": 3628
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3633,
                "end": 3642
              },
              "start": 3622,
              "end": 3642
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3644,
              "end": 3646
            },
            "alternate": null,
            "start": 3618,
            "end": 3646
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3655,
                "end": 3661
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3666,
                "end": 3675
              },
              "start": 3655,
              "end": 3675
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3677,
              "end": 3679
            },
            "alternate": null,
            "start": 3651,
            "end": 3679
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3688,
                "end": 3694
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3699,
                "end": 3708
              },
              "start": 3688,
              "end": 3708
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3710,
              "end": 3712
            },
            "alternate": null,
            "start": 3684,
            "end": 3712
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3721,
                "end": 3727
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3732,
                "end": 3741
              },
              "start": 3721,
              "end": 3741
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3743,
              "end": 3745
            },
            "alternate": null,
            "start": 3717,
            "end": 3745
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3754,
                "end": 3760
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3765,
                "end": 3774
              },
              "start": 3754,
              "end": 3774
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3776,
              "end": 3778
            },
            "alternate": null,
            "start": 3750,
            "end": 3778
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3787,
                "end": 3793
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3798,
                "end": 3807
              },
              "start": 3787,
              "end": 3807
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3809,
              "end": 3811
            },
            "alternate": null,
            "start": 3783,
            "end": 3811
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 3820,
                "end": 3826
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null,
                "start": 3831,
                "end": 3840
              },
              "start": 3820,
              "end": 3840
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3842,
              "end": 3844
            },
            "alternate": null,
            "start": 3816,
            "end": 3844
          }
        ],
        "start": 1863,
        "end": 3847
      },
      "start": 1850,
      "end": 3847
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3847
}
```
