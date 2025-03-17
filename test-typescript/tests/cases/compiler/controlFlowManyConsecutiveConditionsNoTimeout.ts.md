__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3848,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 40,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 18,
          "name": "Choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 25,
            "end": 28,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "name": "One",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 34,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "name": "Two",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ],
        "const": false,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 19,
          "end": 40,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 25,
              "end": 28,
              "id": {
                "type": "Identifier",
                "start": 25,
                "end": 28,
                "name": "One",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 34,
              "end": 37,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 37,
                "name": "Two",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 62,
            "name": "choice",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 62,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 65,
            "end": 75,
            "object": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "name": "Choice",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 72,
              "end": 75,
              "name": "One",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 92,
            "name": "choiceOne",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 95,
            "end": 105,
            "object": {
              "type": "Identifier",
              "start": 95,
              "end": 101,
              "name": "Choice",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "name": "One",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 108,
      "end": 136,
      "test": {
        "type": "BinaryExpression",
        "start": 112,
        "end": 132,
        "left": {
          "type": "Identifier",
          "start": 112,
          "end": 118,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 123,
          "end": 132,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 134,
        "end": 136,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 137,
      "end": 165,
      "test": {
        "type": "BinaryExpression",
        "start": 141,
        "end": 161,
        "left": {
          "type": "Identifier",
          "start": 141,
          "end": 147,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 152,
          "end": 161,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 163,
        "end": 165,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 166,
      "end": 194,
      "test": {
        "type": "BinaryExpression",
        "start": 170,
        "end": 190,
        "left": {
          "type": "Identifier",
          "start": 170,
          "end": 176,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 181,
          "end": 190,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 192,
        "end": 194,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 195,
      "end": 223,
      "test": {
        "type": "BinaryExpression",
        "start": 199,
        "end": 219,
        "left": {
          "type": "Identifier",
          "start": 199,
          "end": 205,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 210,
          "end": 219,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 221,
        "end": 223,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 224,
      "end": 252,
      "test": {
        "type": "BinaryExpression",
        "start": 228,
        "end": 248,
        "left": {
          "type": "Identifier",
          "start": 228,
          "end": 234,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 239,
          "end": 248,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 250,
        "end": 252,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 253,
      "end": 281,
      "test": {
        "type": "BinaryExpression",
        "start": 257,
        "end": 277,
        "left": {
          "type": "Identifier",
          "start": 257,
          "end": 263,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 268,
          "end": 277,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 279,
        "end": 281,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 282,
      "end": 310,
      "test": {
        "type": "BinaryExpression",
        "start": 286,
        "end": 306,
        "left": {
          "type": "Identifier",
          "start": 286,
          "end": 292,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 297,
          "end": 306,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 308,
        "end": 310,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 311,
      "end": 339,
      "test": {
        "type": "BinaryExpression",
        "start": 315,
        "end": 335,
        "left": {
          "type": "Identifier",
          "start": 315,
          "end": 321,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 326,
          "end": 335,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 337,
        "end": 339,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 340,
      "end": 368,
      "test": {
        "type": "BinaryExpression",
        "start": 344,
        "end": 364,
        "left": {
          "type": "Identifier",
          "start": 344,
          "end": 350,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 355,
          "end": 364,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 366,
        "end": 368,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 369,
      "end": 397,
      "test": {
        "type": "BinaryExpression",
        "start": 373,
        "end": 393,
        "left": {
          "type": "Identifier",
          "start": 373,
          "end": 379,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 384,
          "end": 393,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 395,
        "end": 397,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 398,
      "end": 426,
      "test": {
        "type": "BinaryExpression",
        "start": 402,
        "end": 422,
        "left": {
          "type": "Identifier",
          "start": 402,
          "end": 408,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 413,
          "end": 422,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 424,
        "end": 426,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 427,
      "end": 455,
      "test": {
        "type": "BinaryExpression",
        "start": 431,
        "end": 451,
        "left": {
          "type": "Identifier",
          "start": 431,
          "end": 437,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 442,
          "end": 451,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 453,
        "end": 455,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 456,
      "end": 484,
      "test": {
        "type": "BinaryExpression",
        "start": 460,
        "end": 480,
        "left": {
          "type": "Identifier",
          "start": 460,
          "end": 466,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 471,
          "end": 480,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 482,
        "end": 484,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 485,
      "end": 513,
      "test": {
        "type": "BinaryExpression",
        "start": 489,
        "end": 509,
        "left": {
          "type": "Identifier",
          "start": 489,
          "end": 495,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 500,
          "end": 509,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 511,
        "end": 513,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 514,
      "end": 542,
      "test": {
        "type": "BinaryExpression",
        "start": 518,
        "end": 538,
        "left": {
          "type": "Identifier",
          "start": 518,
          "end": 524,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 529,
          "end": 538,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 540,
        "end": 542,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 543,
      "end": 571,
      "test": {
        "type": "BinaryExpression",
        "start": 547,
        "end": 567,
        "left": {
          "type": "Identifier",
          "start": 547,
          "end": 553,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 558,
          "end": 567,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 569,
        "end": 571,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 572,
      "end": 600,
      "test": {
        "type": "BinaryExpression",
        "start": 576,
        "end": 596,
        "left": {
          "type": "Identifier",
          "start": 576,
          "end": 582,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 587,
          "end": 596,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 598,
        "end": 600,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 601,
      "end": 629,
      "test": {
        "type": "BinaryExpression",
        "start": 605,
        "end": 625,
        "left": {
          "type": "Identifier",
          "start": 605,
          "end": 611,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 616,
          "end": 625,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 627,
        "end": 629,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 630,
      "end": 658,
      "test": {
        "type": "BinaryExpression",
        "start": 634,
        "end": 654,
        "left": {
          "type": "Identifier",
          "start": 634,
          "end": 640,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 645,
          "end": 654,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 656,
        "end": 658,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 659,
      "end": 687,
      "test": {
        "type": "BinaryExpression",
        "start": 663,
        "end": 683,
        "left": {
          "type": "Identifier",
          "start": 663,
          "end": 669,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 674,
          "end": 683,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 685,
        "end": 687,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 688,
      "end": 716,
      "test": {
        "type": "BinaryExpression",
        "start": 692,
        "end": 712,
        "left": {
          "type": "Identifier",
          "start": 692,
          "end": 698,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 703,
          "end": 712,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 714,
        "end": 716,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 717,
      "end": 745,
      "test": {
        "type": "BinaryExpression",
        "start": 721,
        "end": 741,
        "left": {
          "type": "Identifier",
          "start": 721,
          "end": 727,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 732,
          "end": 741,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 743,
        "end": 745,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 746,
      "end": 774,
      "test": {
        "type": "BinaryExpression",
        "start": 750,
        "end": 770,
        "left": {
          "type": "Identifier",
          "start": 750,
          "end": 756,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 761,
          "end": 770,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 772,
        "end": 774,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 775,
      "end": 803,
      "test": {
        "type": "BinaryExpression",
        "start": 779,
        "end": 799,
        "left": {
          "type": "Identifier",
          "start": 779,
          "end": 785,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 790,
          "end": 799,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 801,
        "end": 803,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 804,
      "end": 832,
      "test": {
        "type": "BinaryExpression",
        "start": 808,
        "end": 828,
        "left": {
          "type": "Identifier",
          "start": 808,
          "end": 814,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 819,
          "end": 828,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 830,
        "end": 832,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 833,
      "end": 861,
      "test": {
        "type": "BinaryExpression",
        "start": 837,
        "end": 857,
        "left": {
          "type": "Identifier",
          "start": 837,
          "end": 843,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 848,
          "end": 857,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 859,
        "end": 861,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 862,
      "end": 890,
      "test": {
        "type": "BinaryExpression",
        "start": 866,
        "end": 886,
        "left": {
          "type": "Identifier",
          "start": 866,
          "end": 872,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 877,
          "end": 886,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 888,
        "end": 890,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 891,
      "end": 919,
      "test": {
        "type": "BinaryExpression",
        "start": 895,
        "end": 915,
        "left": {
          "type": "Identifier",
          "start": 895,
          "end": 901,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 906,
          "end": 915,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 917,
        "end": 919,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 920,
      "end": 948,
      "test": {
        "type": "BinaryExpression",
        "start": 924,
        "end": 944,
        "left": {
          "type": "Identifier",
          "start": 924,
          "end": 930,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 935,
          "end": 944,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 946,
        "end": 948,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 949,
      "end": 977,
      "test": {
        "type": "BinaryExpression",
        "start": 953,
        "end": 973,
        "left": {
          "type": "Identifier",
          "start": 953,
          "end": 959,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 964,
          "end": 973,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 975,
        "end": 977,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 978,
      "end": 1006,
      "test": {
        "type": "BinaryExpression",
        "start": 982,
        "end": 1002,
        "left": {
          "type": "Identifier",
          "start": 982,
          "end": 988,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 993,
          "end": 1002,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1004,
        "end": 1006,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1007,
      "end": 1035,
      "test": {
        "type": "BinaryExpression",
        "start": 1011,
        "end": 1031,
        "left": {
          "type": "Identifier",
          "start": 1011,
          "end": 1017,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1022,
          "end": 1031,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1033,
        "end": 1035,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1036,
      "end": 1064,
      "test": {
        "type": "BinaryExpression",
        "start": 1040,
        "end": 1060,
        "left": {
          "type": "Identifier",
          "start": 1040,
          "end": 1046,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1051,
          "end": 1060,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1062,
        "end": 1064,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1065,
      "end": 1093,
      "test": {
        "type": "BinaryExpression",
        "start": 1069,
        "end": 1089,
        "left": {
          "type": "Identifier",
          "start": 1069,
          "end": 1075,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1080,
          "end": 1089,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1091,
        "end": 1093,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1094,
      "end": 1122,
      "test": {
        "type": "BinaryExpression",
        "start": 1098,
        "end": 1118,
        "left": {
          "type": "Identifier",
          "start": 1098,
          "end": 1104,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1109,
          "end": 1118,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1120,
        "end": 1122,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1123,
      "end": 1151,
      "test": {
        "type": "BinaryExpression",
        "start": 1127,
        "end": 1147,
        "left": {
          "type": "Identifier",
          "start": 1127,
          "end": 1133,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1138,
          "end": 1147,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1149,
        "end": 1151,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1152,
      "end": 1180,
      "test": {
        "type": "BinaryExpression",
        "start": 1156,
        "end": 1176,
        "left": {
          "type": "Identifier",
          "start": 1156,
          "end": 1162,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1167,
          "end": 1176,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1178,
        "end": 1180,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1181,
      "end": 1209,
      "test": {
        "type": "BinaryExpression",
        "start": 1185,
        "end": 1205,
        "left": {
          "type": "Identifier",
          "start": 1185,
          "end": 1191,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1196,
          "end": 1205,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1207,
        "end": 1209,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1210,
      "end": 1238,
      "test": {
        "type": "BinaryExpression",
        "start": 1214,
        "end": 1234,
        "left": {
          "type": "Identifier",
          "start": 1214,
          "end": 1220,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1225,
          "end": 1234,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1236,
        "end": 1238,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1239,
      "end": 1267,
      "test": {
        "type": "BinaryExpression",
        "start": 1243,
        "end": 1263,
        "left": {
          "type": "Identifier",
          "start": 1243,
          "end": 1249,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1254,
          "end": 1263,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1265,
        "end": 1267,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1268,
      "end": 1296,
      "test": {
        "type": "BinaryExpression",
        "start": 1272,
        "end": 1292,
        "left": {
          "type": "Identifier",
          "start": 1272,
          "end": 1278,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1283,
          "end": 1292,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1294,
        "end": 1296,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1297,
      "end": 1325,
      "test": {
        "type": "BinaryExpression",
        "start": 1301,
        "end": 1321,
        "left": {
          "type": "Identifier",
          "start": 1301,
          "end": 1307,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1312,
          "end": 1321,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1323,
        "end": 1325,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1326,
      "end": 1354,
      "test": {
        "type": "BinaryExpression",
        "start": 1330,
        "end": 1350,
        "left": {
          "type": "Identifier",
          "start": 1330,
          "end": 1336,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1341,
          "end": 1350,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1352,
        "end": 1354,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1355,
      "end": 1383,
      "test": {
        "type": "BinaryExpression",
        "start": 1359,
        "end": 1379,
        "left": {
          "type": "Identifier",
          "start": 1359,
          "end": 1365,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1370,
          "end": 1379,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1381,
        "end": 1383,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1384,
      "end": 1412,
      "test": {
        "type": "BinaryExpression",
        "start": 1388,
        "end": 1408,
        "left": {
          "type": "Identifier",
          "start": 1388,
          "end": 1394,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1399,
          "end": 1408,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1410,
        "end": 1412,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1413,
      "end": 1441,
      "test": {
        "type": "BinaryExpression",
        "start": 1417,
        "end": 1437,
        "left": {
          "type": "Identifier",
          "start": 1417,
          "end": 1423,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1428,
          "end": 1437,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1439,
        "end": 1441,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1442,
      "end": 1470,
      "test": {
        "type": "BinaryExpression",
        "start": 1446,
        "end": 1466,
        "left": {
          "type": "Identifier",
          "start": 1446,
          "end": 1452,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1457,
          "end": 1466,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1468,
        "end": 1470,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1471,
      "end": 1499,
      "test": {
        "type": "BinaryExpression",
        "start": 1475,
        "end": 1495,
        "left": {
          "type": "Identifier",
          "start": 1475,
          "end": 1481,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1486,
          "end": 1495,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1497,
        "end": 1499,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1500,
      "end": 1528,
      "test": {
        "type": "BinaryExpression",
        "start": 1504,
        "end": 1524,
        "left": {
          "type": "Identifier",
          "start": 1504,
          "end": 1510,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1515,
          "end": 1524,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1526,
        "end": 1528,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1529,
      "end": 1557,
      "test": {
        "type": "BinaryExpression",
        "start": 1533,
        "end": 1553,
        "left": {
          "type": "Identifier",
          "start": 1533,
          "end": 1539,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1544,
          "end": 1553,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1555,
        "end": 1557,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1558,
      "end": 1586,
      "test": {
        "type": "BinaryExpression",
        "start": 1562,
        "end": 1582,
        "left": {
          "type": "Identifier",
          "start": 1562,
          "end": 1568,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1573,
          "end": 1582,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1584,
        "end": 1586,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1587,
      "end": 1615,
      "test": {
        "type": "BinaryExpression",
        "start": 1591,
        "end": 1611,
        "left": {
          "type": "Identifier",
          "start": 1591,
          "end": 1597,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1602,
          "end": 1611,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1613,
        "end": 1615,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1616,
      "end": 1644,
      "test": {
        "type": "BinaryExpression",
        "start": 1620,
        "end": 1640,
        "left": {
          "type": "Identifier",
          "start": 1620,
          "end": 1626,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1631,
          "end": 1640,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1642,
        "end": 1644,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1645,
      "end": 1673,
      "test": {
        "type": "BinaryExpression",
        "start": 1649,
        "end": 1669,
        "left": {
          "type": "Identifier",
          "start": 1649,
          "end": 1655,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1660,
          "end": 1669,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1671,
        "end": 1673,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1674,
      "end": 1702,
      "test": {
        "type": "BinaryExpression",
        "start": 1678,
        "end": 1698,
        "left": {
          "type": "Identifier",
          "start": 1678,
          "end": 1684,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1689,
          "end": 1698,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1700,
        "end": 1702,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1703,
      "end": 1731,
      "test": {
        "type": "BinaryExpression",
        "start": 1707,
        "end": 1727,
        "left": {
          "type": "Identifier",
          "start": 1707,
          "end": 1713,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1718,
          "end": 1727,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1729,
        "end": 1731,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1732,
      "end": 1760,
      "test": {
        "type": "BinaryExpression",
        "start": 1736,
        "end": 1756,
        "left": {
          "type": "Identifier",
          "start": 1736,
          "end": 1742,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1747,
          "end": 1756,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1758,
        "end": 1760,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1761,
      "end": 1789,
      "test": {
        "type": "BinaryExpression",
        "start": 1765,
        "end": 1785,
        "left": {
          "type": "Identifier",
          "start": 1765,
          "end": 1771,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1776,
          "end": 1785,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1787,
        "end": 1789,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1790,
      "end": 1818,
      "test": {
        "type": "BinaryExpression",
        "start": 1794,
        "end": 1814,
        "left": {
          "type": "Identifier",
          "start": 1794,
          "end": 1800,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1805,
          "end": 1814,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1816,
        "end": 1818,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 1819,
      "end": 1847,
      "test": {
        "type": "BinaryExpression",
        "start": 1823,
        "end": 1843,
        "left": {
          "type": "Identifier",
          "start": 1823,
          "end": 1829,
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1834,
          "end": 1843,
          "name": "choiceOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1845,
        "end": 1847,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1850,
      "end": 3847,
      "test": {
        "type": "Literal",
        "start": 1857,
        "end": 1861,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "start": 1863,
        "end": 3847,
        "body": [
          {
            "type": "IfStatement",
            "start": 1869,
            "end": 1897,
            "test": {
              "type": "BinaryExpression",
              "start": 1873,
              "end": 1893,
              "left": {
                "type": "Identifier",
                "start": 1873,
                "end": 1879,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1884,
                "end": 1893,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1895,
              "end": 1897,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1902,
            "end": 1930,
            "test": {
              "type": "BinaryExpression",
              "start": 1906,
              "end": 1926,
              "left": {
                "type": "Identifier",
                "start": 1906,
                "end": 1912,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1917,
                "end": 1926,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1928,
              "end": 1930,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1935,
            "end": 1963,
            "test": {
              "type": "BinaryExpression",
              "start": 1939,
              "end": 1959,
              "left": {
                "type": "Identifier",
                "start": 1939,
                "end": 1945,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1950,
                "end": 1959,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1961,
              "end": 1963,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1968,
            "end": 1996,
            "test": {
              "type": "BinaryExpression",
              "start": 1972,
              "end": 1992,
              "left": {
                "type": "Identifier",
                "start": 1972,
                "end": 1978,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1983,
                "end": 1992,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1994,
              "end": 1996,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2001,
            "end": 2029,
            "test": {
              "type": "BinaryExpression",
              "start": 2005,
              "end": 2025,
              "left": {
                "type": "Identifier",
                "start": 2005,
                "end": 2011,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2016,
                "end": 2025,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2027,
              "end": 2029,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2034,
            "end": 2062,
            "test": {
              "type": "BinaryExpression",
              "start": 2038,
              "end": 2058,
              "left": {
                "type": "Identifier",
                "start": 2038,
                "end": 2044,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2049,
                "end": 2058,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2060,
              "end": 2062,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2067,
            "end": 2095,
            "test": {
              "type": "BinaryExpression",
              "start": 2071,
              "end": 2091,
              "left": {
                "type": "Identifier",
                "start": 2071,
                "end": 2077,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2082,
                "end": 2091,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2093,
              "end": 2095,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2100,
            "end": 2128,
            "test": {
              "type": "BinaryExpression",
              "start": 2104,
              "end": 2124,
              "left": {
                "type": "Identifier",
                "start": 2104,
                "end": 2110,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2115,
                "end": 2124,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2126,
              "end": 2128,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2133,
            "end": 2161,
            "test": {
              "type": "BinaryExpression",
              "start": 2137,
              "end": 2157,
              "left": {
                "type": "Identifier",
                "start": 2137,
                "end": 2143,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2148,
                "end": 2157,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2159,
              "end": 2161,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2166,
            "end": 2194,
            "test": {
              "type": "BinaryExpression",
              "start": 2170,
              "end": 2190,
              "left": {
                "type": "Identifier",
                "start": 2170,
                "end": 2176,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2181,
                "end": 2190,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2192,
              "end": 2194,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2199,
            "end": 2227,
            "test": {
              "type": "BinaryExpression",
              "start": 2203,
              "end": 2223,
              "left": {
                "type": "Identifier",
                "start": 2203,
                "end": 2209,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2214,
                "end": 2223,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2225,
              "end": 2227,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2232,
            "end": 2260,
            "test": {
              "type": "BinaryExpression",
              "start": 2236,
              "end": 2256,
              "left": {
                "type": "Identifier",
                "start": 2236,
                "end": 2242,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2247,
                "end": 2256,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2258,
              "end": 2260,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2265,
            "end": 2293,
            "test": {
              "type": "BinaryExpression",
              "start": 2269,
              "end": 2289,
              "left": {
                "type": "Identifier",
                "start": 2269,
                "end": 2275,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2280,
                "end": 2289,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2291,
              "end": 2293,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2298,
            "end": 2326,
            "test": {
              "type": "BinaryExpression",
              "start": 2302,
              "end": 2322,
              "left": {
                "type": "Identifier",
                "start": 2302,
                "end": 2308,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2313,
                "end": 2322,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2324,
              "end": 2326,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2331,
            "end": 2359,
            "test": {
              "type": "BinaryExpression",
              "start": 2335,
              "end": 2355,
              "left": {
                "type": "Identifier",
                "start": 2335,
                "end": 2341,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2346,
                "end": 2355,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2357,
              "end": 2359,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2364,
            "end": 2392,
            "test": {
              "type": "BinaryExpression",
              "start": 2368,
              "end": 2388,
              "left": {
                "type": "Identifier",
                "start": 2368,
                "end": 2374,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2379,
                "end": 2388,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2390,
              "end": 2392,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2397,
            "end": 2425,
            "test": {
              "type": "BinaryExpression",
              "start": 2401,
              "end": 2421,
              "left": {
                "type": "Identifier",
                "start": 2401,
                "end": 2407,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2412,
                "end": 2421,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2423,
              "end": 2425,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2430,
            "end": 2458,
            "test": {
              "type": "BinaryExpression",
              "start": 2434,
              "end": 2454,
              "left": {
                "type": "Identifier",
                "start": 2434,
                "end": 2440,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2445,
                "end": 2454,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2456,
              "end": 2458,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2463,
            "end": 2491,
            "test": {
              "type": "BinaryExpression",
              "start": 2467,
              "end": 2487,
              "left": {
                "type": "Identifier",
                "start": 2467,
                "end": 2473,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2478,
                "end": 2487,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2489,
              "end": 2491,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2496,
            "end": 2524,
            "test": {
              "type": "BinaryExpression",
              "start": 2500,
              "end": 2520,
              "left": {
                "type": "Identifier",
                "start": 2500,
                "end": 2506,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2511,
                "end": 2520,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2522,
              "end": 2524,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2529,
            "end": 2557,
            "test": {
              "type": "BinaryExpression",
              "start": 2533,
              "end": 2553,
              "left": {
                "type": "Identifier",
                "start": 2533,
                "end": 2539,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2544,
                "end": 2553,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2555,
              "end": 2557,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2562,
            "end": 2590,
            "test": {
              "type": "BinaryExpression",
              "start": 2566,
              "end": 2586,
              "left": {
                "type": "Identifier",
                "start": 2566,
                "end": 2572,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2577,
                "end": 2586,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2588,
              "end": 2590,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2595,
            "end": 2623,
            "test": {
              "type": "BinaryExpression",
              "start": 2599,
              "end": 2619,
              "left": {
                "type": "Identifier",
                "start": 2599,
                "end": 2605,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2610,
                "end": 2619,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2621,
              "end": 2623,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2628,
            "end": 2656,
            "test": {
              "type": "BinaryExpression",
              "start": 2632,
              "end": 2652,
              "left": {
                "type": "Identifier",
                "start": 2632,
                "end": 2638,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2643,
                "end": 2652,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2654,
              "end": 2656,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2661,
            "end": 2689,
            "test": {
              "type": "BinaryExpression",
              "start": 2665,
              "end": 2685,
              "left": {
                "type": "Identifier",
                "start": 2665,
                "end": 2671,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2676,
                "end": 2685,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2687,
              "end": 2689,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2694,
            "end": 2722,
            "test": {
              "type": "BinaryExpression",
              "start": 2698,
              "end": 2718,
              "left": {
                "type": "Identifier",
                "start": 2698,
                "end": 2704,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2709,
                "end": 2718,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2720,
              "end": 2722,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2727,
            "end": 2755,
            "test": {
              "type": "BinaryExpression",
              "start": 2731,
              "end": 2751,
              "left": {
                "type": "Identifier",
                "start": 2731,
                "end": 2737,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2742,
                "end": 2751,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2753,
              "end": 2755,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2760,
            "end": 2788,
            "test": {
              "type": "BinaryExpression",
              "start": 2764,
              "end": 2784,
              "left": {
                "type": "Identifier",
                "start": 2764,
                "end": 2770,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2775,
                "end": 2784,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2786,
              "end": 2788,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2793,
            "end": 2821,
            "test": {
              "type": "BinaryExpression",
              "start": 2797,
              "end": 2817,
              "left": {
                "type": "Identifier",
                "start": 2797,
                "end": 2803,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2808,
                "end": 2817,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2819,
              "end": 2821,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2826,
            "end": 2854,
            "test": {
              "type": "BinaryExpression",
              "start": 2830,
              "end": 2850,
              "left": {
                "type": "Identifier",
                "start": 2830,
                "end": 2836,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2841,
                "end": 2850,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2852,
              "end": 2854,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2859,
            "end": 2887,
            "test": {
              "type": "BinaryExpression",
              "start": 2863,
              "end": 2883,
              "left": {
                "type": "Identifier",
                "start": 2863,
                "end": 2869,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2874,
                "end": 2883,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2885,
              "end": 2887,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2892,
            "end": 2920,
            "test": {
              "type": "BinaryExpression",
              "start": 2896,
              "end": 2916,
              "left": {
                "type": "Identifier",
                "start": 2896,
                "end": 2902,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2907,
                "end": 2916,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2918,
              "end": 2920,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2925,
            "end": 2953,
            "test": {
              "type": "BinaryExpression",
              "start": 2929,
              "end": 2949,
              "left": {
                "type": "Identifier",
                "start": 2929,
                "end": 2935,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2940,
                "end": 2949,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2951,
              "end": 2953,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2958,
            "end": 2986,
            "test": {
              "type": "BinaryExpression",
              "start": 2962,
              "end": 2982,
              "left": {
                "type": "Identifier",
                "start": 2962,
                "end": 2968,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 2973,
                "end": 2982,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2984,
              "end": 2986,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2991,
            "end": 3019,
            "test": {
              "type": "BinaryExpression",
              "start": 2995,
              "end": 3015,
              "left": {
                "type": "Identifier",
                "start": 2995,
                "end": 3001,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3006,
                "end": 3015,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3017,
              "end": 3019,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3024,
            "end": 3052,
            "test": {
              "type": "BinaryExpression",
              "start": 3028,
              "end": 3048,
              "left": {
                "type": "Identifier",
                "start": 3028,
                "end": 3034,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3039,
                "end": 3048,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3050,
              "end": 3052,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3057,
            "end": 3085,
            "test": {
              "type": "BinaryExpression",
              "start": 3061,
              "end": 3081,
              "left": {
                "type": "Identifier",
                "start": 3061,
                "end": 3067,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3072,
                "end": 3081,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3083,
              "end": 3085,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3090,
            "end": 3118,
            "test": {
              "type": "BinaryExpression",
              "start": 3094,
              "end": 3114,
              "left": {
                "type": "Identifier",
                "start": 3094,
                "end": 3100,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3105,
                "end": 3114,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3116,
              "end": 3118,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3123,
            "end": 3151,
            "test": {
              "type": "BinaryExpression",
              "start": 3127,
              "end": 3147,
              "left": {
                "type": "Identifier",
                "start": 3127,
                "end": 3133,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3138,
                "end": 3147,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3149,
              "end": 3151,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3156,
            "end": 3184,
            "test": {
              "type": "BinaryExpression",
              "start": 3160,
              "end": 3180,
              "left": {
                "type": "Identifier",
                "start": 3160,
                "end": 3166,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3171,
                "end": 3180,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3182,
              "end": 3184,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3189,
            "end": 3217,
            "test": {
              "type": "BinaryExpression",
              "start": 3193,
              "end": 3213,
              "left": {
                "type": "Identifier",
                "start": 3193,
                "end": 3199,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3204,
                "end": 3213,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3215,
              "end": 3217,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3222,
            "end": 3250,
            "test": {
              "type": "BinaryExpression",
              "start": 3226,
              "end": 3246,
              "left": {
                "type": "Identifier",
                "start": 3226,
                "end": 3232,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3237,
                "end": 3246,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3248,
              "end": 3250,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3255,
            "end": 3283,
            "test": {
              "type": "BinaryExpression",
              "start": 3259,
              "end": 3279,
              "left": {
                "type": "Identifier",
                "start": 3259,
                "end": 3265,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3270,
                "end": 3279,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3281,
              "end": 3283,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3288,
            "end": 3316,
            "test": {
              "type": "BinaryExpression",
              "start": 3292,
              "end": 3312,
              "left": {
                "type": "Identifier",
                "start": 3292,
                "end": 3298,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3303,
                "end": 3312,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3314,
              "end": 3316,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3321,
            "end": 3349,
            "test": {
              "type": "BinaryExpression",
              "start": 3325,
              "end": 3345,
              "left": {
                "type": "Identifier",
                "start": 3325,
                "end": 3331,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3336,
                "end": 3345,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3347,
              "end": 3349,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3354,
            "end": 3382,
            "test": {
              "type": "BinaryExpression",
              "start": 3358,
              "end": 3378,
              "left": {
                "type": "Identifier",
                "start": 3358,
                "end": 3364,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3369,
                "end": 3378,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3380,
              "end": 3382,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3387,
            "end": 3415,
            "test": {
              "type": "BinaryExpression",
              "start": 3391,
              "end": 3411,
              "left": {
                "type": "Identifier",
                "start": 3391,
                "end": 3397,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3402,
                "end": 3411,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3413,
              "end": 3415,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3420,
            "end": 3448,
            "test": {
              "type": "BinaryExpression",
              "start": 3424,
              "end": 3444,
              "left": {
                "type": "Identifier",
                "start": 3424,
                "end": 3430,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3435,
                "end": 3444,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3446,
              "end": 3448,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3453,
            "end": 3481,
            "test": {
              "type": "BinaryExpression",
              "start": 3457,
              "end": 3477,
              "left": {
                "type": "Identifier",
                "start": 3457,
                "end": 3463,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3468,
                "end": 3477,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3479,
              "end": 3481,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3486,
            "end": 3514,
            "test": {
              "type": "BinaryExpression",
              "start": 3490,
              "end": 3510,
              "left": {
                "type": "Identifier",
                "start": 3490,
                "end": 3496,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3501,
                "end": 3510,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3512,
              "end": 3514,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3519,
            "end": 3547,
            "test": {
              "type": "BinaryExpression",
              "start": 3523,
              "end": 3543,
              "left": {
                "type": "Identifier",
                "start": 3523,
                "end": 3529,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3534,
                "end": 3543,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3545,
              "end": 3547,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3552,
            "end": 3580,
            "test": {
              "type": "BinaryExpression",
              "start": 3556,
              "end": 3576,
              "left": {
                "type": "Identifier",
                "start": 3556,
                "end": 3562,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3567,
                "end": 3576,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3578,
              "end": 3580,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3585,
            "end": 3613,
            "test": {
              "type": "BinaryExpression",
              "start": 3589,
              "end": 3609,
              "left": {
                "type": "Identifier",
                "start": 3589,
                "end": 3595,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3600,
                "end": 3609,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3611,
              "end": 3613,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3618,
            "end": 3646,
            "test": {
              "type": "BinaryExpression",
              "start": 3622,
              "end": 3642,
              "left": {
                "type": "Identifier",
                "start": 3622,
                "end": 3628,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3633,
                "end": 3642,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3644,
              "end": 3646,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3651,
            "end": 3679,
            "test": {
              "type": "BinaryExpression",
              "start": 3655,
              "end": 3675,
              "left": {
                "type": "Identifier",
                "start": 3655,
                "end": 3661,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3666,
                "end": 3675,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3677,
              "end": 3679,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3684,
            "end": 3712,
            "test": {
              "type": "BinaryExpression",
              "start": 3688,
              "end": 3708,
              "left": {
                "type": "Identifier",
                "start": 3688,
                "end": 3694,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3699,
                "end": 3708,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3710,
              "end": 3712,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3717,
            "end": 3745,
            "test": {
              "type": "BinaryExpression",
              "start": 3721,
              "end": 3741,
              "left": {
                "type": "Identifier",
                "start": 3721,
                "end": 3727,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3732,
                "end": 3741,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3743,
              "end": 3745,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3750,
            "end": 3778,
            "test": {
              "type": "BinaryExpression",
              "start": 3754,
              "end": 3774,
              "left": {
                "type": "Identifier",
                "start": 3754,
                "end": 3760,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3765,
                "end": 3774,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3776,
              "end": 3778,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3783,
            "end": 3811,
            "test": {
              "type": "BinaryExpression",
              "start": 3787,
              "end": 3807,
              "left": {
                "type": "Identifier",
                "start": 3787,
                "end": 3793,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3798,
                "end": 3807,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3809,
              "end": 3811,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3816,
            "end": 3844,
            "test": {
              "type": "BinaryExpression",
              "start": 3820,
              "end": 3840,
              "left": {
                "type": "Identifier",
                "start": 3820,
                "end": 3826,
                "name": "choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3831,
                "end": 3840,
                "name": "choiceOne",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3842,
              "end": 3844,
              "body": []
            },
            "alternate": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
