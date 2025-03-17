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
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 40,
        "body": {
          "type": "TSEnumBody",
          "start": 19,
          "end": 40,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 25,
              "end": 28,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 25,
                "end": 28,
                "decorators": [],
                "name": "One",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            },
            {
              "type": "TSEnumMember",
              "start": 34,
              "end": 37,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 37,
                "decorators": [],
                "name": "Two",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 18,
          "decorators": [],
          "name": "Choice",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 62,
            "decorators": [],
            "name": "choice",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 62,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 62,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 65,
            "end": 75,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "decorators": [],
              "name": "Choice",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 72,
              "end": 75,
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 92,
            "decorators": [],
            "name": "choiceOne",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 95,
            "end": 105,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 95,
              "end": 101,
              "decorators": [],
              "name": "Choice",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 108,
      "end": 136,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 134,
        "end": 136,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 112,
        "end": 132,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 112,
          "end": 118,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 123,
          "end": 132,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 137,
      "end": 165,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 163,
        "end": 165,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 141,
        "end": 161,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 141,
          "end": 147,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 152,
          "end": 161,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 166,
      "end": 194,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 192,
        "end": 194,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 170,
        "end": 190,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 170,
          "end": 176,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 181,
          "end": 190,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 195,
      "end": 223,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 221,
        "end": 223,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 199,
        "end": 219,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 199,
          "end": 205,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 210,
          "end": 219,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 224,
      "end": 252,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 250,
        "end": 252,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 228,
        "end": 248,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 228,
          "end": 234,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 239,
          "end": 248,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 253,
      "end": 281,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 279,
        "end": 281,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 257,
        "end": 277,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 257,
          "end": 263,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 268,
          "end": 277,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 282,
      "end": 310,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 308,
        "end": 310,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 286,
        "end": 306,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 286,
          "end": 292,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 297,
          "end": 306,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 311,
      "end": 339,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 337,
        "end": 339,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 315,
        "end": 335,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 315,
          "end": 321,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 326,
          "end": 335,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 340,
      "end": 368,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 366,
        "end": 368,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 344,
        "end": 364,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 344,
          "end": 350,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 355,
          "end": 364,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 369,
      "end": 397,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 395,
        "end": 397,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 373,
        "end": 393,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 373,
          "end": 379,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 384,
          "end": 393,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 398,
      "end": 426,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 424,
        "end": 426,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 402,
        "end": 422,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 402,
          "end": 408,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 413,
          "end": 422,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 427,
      "end": 455,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 453,
        "end": 455,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 431,
        "end": 451,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 431,
          "end": 437,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 442,
          "end": 451,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 456,
      "end": 484,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 482,
        "end": 484,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 460,
        "end": 480,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 460,
          "end": 466,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 471,
          "end": 480,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 485,
      "end": 513,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 511,
        "end": 513,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 489,
        "end": 509,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 489,
          "end": 495,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 500,
          "end": 509,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 514,
      "end": 542,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 540,
        "end": 542,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 518,
        "end": 538,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 518,
          "end": 524,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 529,
          "end": 538,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 543,
      "end": 571,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 569,
        "end": 571,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 547,
        "end": 567,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 547,
          "end": 553,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 558,
          "end": 567,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 572,
      "end": 600,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 598,
        "end": 600,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 576,
        "end": 596,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 576,
          "end": 582,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 587,
          "end": 596,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 601,
      "end": 629,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 627,
        "end": 629,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 605,
        "end": 625,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 605,
          "end": 611,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 616,
          "end": 625,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 630,
      "end": 658,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 656,
        "end": 658,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 634,
        "end": 654,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 634,
          "end": 640,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 645,
          "end": 654,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 659,
      "end": 687,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 685,
        "end": 687,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 663,
        "end": 683,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 663,
          "end": 669,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 674,
          "end": 683,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 688,
      "end": 716,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 714,
        "end": 716,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 692,
        "end": 712,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 692,
          "end": 698,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 703,
          "end": 712,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 717,
      "end": 745,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 743,
        "end": 745,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 721,
        "end": 741,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 721,
          "end": 727,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 732,
          "end": 741,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 746,
      "end": 774,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 772,
        "end": 774,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 750,
        "end": 770,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 750,
          "end": 756,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 761,
          "end": 770,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 775,
      "end": 803,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 801,
        "end": 803,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 779,
        "end": 799,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 779,
          "end": 785,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 790,
          "end": 799,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 804,
      "end": 832,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 830,
        "end": 832,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 808,
        "end": 828,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 808,
          "end": 814,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 819,
          "end": 828,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 833,
      "end": 861,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 859,
        "end": 861,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 837,
        "end": 857,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 837,
          "end": 843,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 848,
          "end": 857,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 862,
      "end": 890,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 888,
        "end": 890,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 866,
        "end": 886,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 866,
          "end": 872,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 877,
          "end": 886,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 891,
      "end": 919,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 917,
        "end": 919,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 895,
        "end": 915,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 895,
          "end": 901,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 906,
          "end": 915,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 920,
      "end": 948,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 946,
        "end": 948,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 924,
        "end": 944,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 924,
          "end": 930,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 935,
          "end": 944,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 949,
      "end": 977,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 975,
        "end": 977,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 953,
        "end": 973,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 953,
          "end": 959,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 964,
          "end": 973,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 978,
      "end": 1006,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1004,
        "end": 1006,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 982,
        "end": 1002,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 982,
          "end": 988,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 993,
          "end": 1002,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1007,
      "end": 1035,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1033,
        "end": 1035,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1011,
        "end": 1031,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1011,
          "end": 1017,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1022,
          "end": 1031,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1036,
      "end": 1064,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1062,
        "end": 1064,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1040,
        "end": 1060,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1040,
          "end": 1046,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1051,
          "end": 1060,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1065,
      "end": 1093,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1091,
        "end": 1093,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1069,
        "end": 1089,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1069,
          "end": 1075,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1080,
          "end": 1089,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1094,
      "end": 1122,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1120,
        "end": 1122,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1098,
        "end": 1118,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1098,
          "end": 1104,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1109,
          "end": 1118,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1123,
      "end": 1151,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1149,
        "end": 1151,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1127,
        "end": 1147,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1127,
          "end": 1133,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1138,
          "end": 1147,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1152,
      "end": 1180,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1178,
        "end": 1180,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1156,
        "end": 1176,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1156,
          "end": 1162,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1167,
          "end": 1176,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1181,
      "end": 1209,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1207,
        "end": 1209,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1185,
        "end": 1205,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1185,
          "end": 1191,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1196,
          "end": 1205,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1210,
      "end": 1238,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1236,
        "end": 1238,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1214,
        "end": 1234,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1214,
          "end": 1220,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1225,
          "end": 1234,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1239,
      "end": 1267,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1265,
        "end": 1267,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1243,
        "end": 1263,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1243,
          "end": 1249,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1254,
          "end": 1263,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1268,
      "end": 1296,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1294,
        "end": 1296,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1272,
        "end": 1292,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1272,
          "end": 1278,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1283,
          "end": 1292,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1297,
      "end": 1325,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1323,
        "end": 1325,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1301,
        "end": 1321,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1301,
          "end": 1307,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1312,
          "end": 1321,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1326,
      "end": 1354,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1352,
        "end": 1354,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1330,
        "end": 1350,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1330,
          "end": 1336,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1341,
          "end": 1350,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1355,
      "end": 1383,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1381,
        "end": 1383,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1359,
        "end": 1379,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1359,
          "end": 1365,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1370,
          "end": 1379,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1384,
      "end": 1412,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1410,
        "end": 1412,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1388,
        "end": 1408,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1388,
          "end": 1394,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1399,
          "end": 1408,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1413,
      "end": 1441,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1439,
        "end": 1441,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1417,
        "end": 1437,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1417,
          "end": 1423,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1428,
          "end": 1437,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1442,
      "end": 1470,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1468,
        "end": 1470,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1446,
        "end": 1466,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1446,
          "end": 1452,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1457,
          "end": 1466,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1471,
      "end": 1499,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1497,
        "end": 1499,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1475,
        "end": 1495,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1475,
          "end": 1481,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1486,
          "end": 1495,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1500,
      "end": 1528,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1526,
        "end": 1528,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1504,
        "end": 1524,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1504,
          "end": 1510,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1515,
          "end": 1524,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1529,
      "end": 1557,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1555,
        "end": 1557,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1533,
        "end": 1553,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1533,
          "end": 1539,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1544,
          "end": 1553,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1558,
      "end": 1586,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1584,
        "end": 1586,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1562,
        "end": 1582,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1562,
          "end": 1568,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1573,
          "end": 1582,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1587,
      "end": 1615,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1613,
        "end": 1615,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1591,
        "end": 1611,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1591,
          "end": 1597,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1602,
          "end": 1611,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1616,
      "end": 1644,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1642,
        "end": 1644,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1620,
        "end": 1640,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1620,
          "end": 1626,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1631,
          "end": 1640,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1645,
      "end": 1673,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1671,
        "end": 1673,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1649,
        "end": 1669,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1649,
          "end": 1655,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1660,
          "end": 1669,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1674,
      "end": 1702,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1700,
        "end": 1702,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1678,
        "end": 1698,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1678,
          "end": 1684,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1689,
          "end": 1698,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1703,
      "end": 1731,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1729,
        "end": 1731,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1707,
        "end": 1727,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1707,
          "end": 1713,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1718,
          "end": 1727,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1732,
      "end": 1760,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1758,
        "end": 1760,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1736,
        "end": 1756,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1736,
          "end": 1742,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1747,
          "end": 1756,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1761,
      "end": 1789,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1787,
        "end": 1789,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1765,
        "end": 1785,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1765,
          "end": 1771,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1776,
          "end": 1785,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1790,
      "end": 1818,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1816,
        "end": 1818,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1794,
        "end": 1814,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1794,
          "end": 1800,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1805,
          "end": 1814,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1819,
      "end": 1847,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1845,
        "end": 1847,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1823,
        "end": 1843,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1823,
          "end": 1829,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1834,
          "end": 1843,
          "decorators": [],
          "name": "choiceOne",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "WhileStatement",
      "start": 1850,
      "end": 3847,
      "body": {
        "type": "BlockStatement",
        "start": 1863,
        "end": 3847,
        "body": [
          {
            "type": "IfStatement",
            "start": 1869,
            "end": 1897,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1895,
              "end": 1897,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1873,
              "end": 1893,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1873,
                "end": 1879,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1884,
                "end": 1893,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1902,
            "end": 1930,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1928,
              "end": 1930,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1906,
              "end": 1926,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1906,
                "end": 1912,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1917,
                "end": 1926,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1935,
            "end": 1963,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1961,
              "end": 1963,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1939,
              "end": 1959,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1939,
                "end": 1945,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1950,
                "end": 1959,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1968,
            "end": 1996,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1994,
              "end": 1996,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1972,
              "end": 1992,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1972,
                "end": 1978,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1983,
                "end": 1992,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2001,
            "end": 2029,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2027,
              "end": 2029,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2005,
              "end": 2025,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2005,
                "end": 2011,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2016,
                "end": 2025,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2034,
            "end": 2062,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2060,
              "end": 2062,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2038,
              "end": 2058,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2038,
                "end": 2044,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2049,
                "end": 2058,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2067,
            "end": 2095,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2093,
              "end": 2095,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2071,
              "end": 2091,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2071,
                "end": 2077,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2082,
                "end": 2091,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2100,
            "end": 2128,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2126,
              "end": 2128,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2104,
              "end": 2124,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2104,
                "end": 2110,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2115,
                "end": 2124,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2133,
            "end": 2161,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2159,
              "end": 2161,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2137,
              "end": 2157,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2137,
                "end": 2143,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2148,
                "end": 2157,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2166,
            "end": 2194,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2192,
              "end": 2194,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2170,
              "end": 2190,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2170,
                "end": 2176,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2181,
                "end": 2190,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2199,
            "end": 2227,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2225,
              "end": 2227,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2203,
              "end": 2223,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2203,
                "end": 2209,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2214,
                "end": 2223,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2232,
            "end": 2260,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2258,
              "end": 2260,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2236,
              "end": 2256,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2236,
                "end": 2242,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2247,
                "end": 2256,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2265,
            "end": 2293,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2291,
              "end": 2293,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2269,
              "end": 2289,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2269,
                "end": 2275,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2280,
                "end": 2289,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2298,
            "end": 2326,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2324,
              "end": 2326,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2302,
              "end": 2322,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2302,
                "end": 2308,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2313,
                "end": 2322,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2331,
            "end": 2359,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2357,
              "end": 2359,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2335,
              "end": 2355,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2335,
                "end": 2341,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2346,
                "end": 2355,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2364,
            "end": 2392,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2390,
              "end": 2392,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2368,
              "end": 2388,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2368,
                "end": 2374,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2379,
                "end": 2388,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2397,
            "end": 2425,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2423,
              "end": 2425,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2401,
              "end": 2421,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2401,
                "end": 2407,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2412,
                "end": 2421,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2430,
            "end": 2458,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2456,
              "end": 2458,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2434,
              "end": 2454,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2434,
                "end": 2440,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2445,
                "end": 2454,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2463,
            "end": 2491,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2489,
              "end": 2491,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2467,
              "end": 2487,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2467,
                "end": 2473,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2478,
                "end": 2487,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2496,
            "end": 2524,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2522,
              "end": 2524,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2500,
              "end": 2520,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2500,
                "end": 2506,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2511,
                "end": 2520,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2529,
            "end": 2557,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2555,
              "end": 2557,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2533,
              "end": 2553,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2533,
                "end": 2539,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2544,
                "end": 2553,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2562,
            "end": 2590,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2588,
              "end": 2590,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2566,
              "end": 2586,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2566,
                "end": 2572,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2577,
                "end": 2586,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2595,
            "end": 2623,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2621,
              "end": 2623,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2599,
              "end": 2619,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2599,
                "end": 2605,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2610,
                "end": 2619,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2628,
            "end": 2656,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2654,
              "end": 2656,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2632,
              "end": 2652,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2632,
                "end": 2638,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2643,
                "end": 2652,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2661,
            "end": 2689,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2687,
              "end": 2689,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2665,
              "end": 2685,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2665,
                "end": 2671,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2676,
                "end": 2685,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2694,
            "end": 2722,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2720,
              "end": 2722,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2698,
              "end": 2718,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2698,
                "end": 2704,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2709,
                "end": 2718,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2727,
            "end": 2755,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2753,
              "end": 2755,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2731,
              "end": 2751,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2731,
                "end": 2737,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2742,
                "end": 2751,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2760,
            "end": 2788,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2786,
              "end": 2788,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2764,
              "end": 2784,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2764,
                "end": 2770,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2775,
                "end": 2784,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2793,
            "end": 2821,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2819,
              "end": 2821,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2797,
              "end": 2817,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2797,
                "end": 2803,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2808,
                "end": 2817,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2826,
            "end": 2854,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2852,
              "end": 2854,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2830,
              "end": 2850,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2830,
                "end": 2836,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2841,
                "end": 2850,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2859,
            "end": 2887,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2885,
              "end": 2887,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2863,
              "end": 2883,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2863,
                "end": 2869,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2874,
                "end": 2883,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2892,
            "end": 2920,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2918,
              "end": 2920,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2896,
              "end": 2916,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2896,
                "end": 2902,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2907,
                "end": 2916,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2925,
            "end": 2953,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2951,
              "end": 2953,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2929,
              "end": 2949,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2929,
                "end": 2935,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2940,
                "end": 2949,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2958,
            "end": 2986,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2984,
              "end": 2986,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2962,
              "end": 2982,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2962,
                "end": 2968,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2973,
                "end": 2982,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2991,
            "end": 3019,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3017,
              "end": 3019,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2995,
              "end": 3015,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2995,
                "end": 3001,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3006,
                "end": 3015,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3024,
            "end": 3052,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3050,
              "end": 3052,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3028,
              "end": 3048,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3028,
                "end": 3034,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3039,
                "end": 3048,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3057,
            "end": 3085,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3083,
              "end": 3085,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3061,
              "end": 3081,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3061,
                "end": 3067,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3072,
                "end": 3081,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3090,
            "end": 3118,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3116,
              "end": 3118,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3094,
              "end": 3114,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3094,
                "end": 3100,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3105,
                "end": 3114,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3123,
            "end": 3151,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3149,
              "end": 3151,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3127,
              "end": 3147,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3127,
                "end": 3133,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3138,
                "end": 3147,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3156,
            "end": 3184,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3182,
              "end": 3184,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3160,
              "end": 3180,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3160,
                "end": 3166,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3171,
                "end": 3180,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3189,
            "end": 3217,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3215,
              "end": 3217,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3193,
              "end": 3213,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3193,
                "end": 3199,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3204,
                "end": 3213,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3222,
            "end": 3250,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3248,
              "end": 3250,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3226,
              "end": 3246,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3226,
                "end": 3232,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3237,
                "end": 3246,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3255,
            "end": 3283,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3281,
              "end": 3283,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3259,
              "end": 3279,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3259,
                "end": 3265,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3270,
                "end": 3279,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3288,
            "end": 3316,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3314,
              "end": 3316,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3292,
              "end": 3312,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3292,
                "end": 3298,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3303,
                "end": 3312,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3321,
            "end": 3349,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3347,
              "end": 3349,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3325,
              "end": 3345,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3325,
                "end": 3331,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3336,
                "end": 3345,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3354,
            "end": 3382,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3380,
              "end": 3382,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3358,
              "end": 3378,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3358,
                "end": 3364,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3369,
                "end": 3378,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3387,
            "end": 3415,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3413,
              "end": 3415,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3391,
              "end": 3411,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3391,
                "end": 3397,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3402,
                "end": 3411,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3420,
            "end": 3448,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3446,
              "end": 3448,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3424,
              "end": 3444,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3424,
                "end": 3430,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3435,
                "end": 3444,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3453,
            "end": 3481,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3479,
              "end": 3481,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3457,
              "end": 3477,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3457,
                "end": 3463,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3468,
                "end": 3477,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3486,
            "end": 3514,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3512,
              "end": 3514,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3490,
              "end": 3510,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3490,
                "end": 3496,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3501,
                "end": 3510,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3519,
            "end": 3547,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3545,
              "end": 3547,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3523,
              "end": 3543,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3523,
                "end": 3529,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3534,
                "end": 3543,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3552,
            "end": 3580,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3578,
              "end": 3580,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3556,
              "end": 3576,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3556,
                "end": 3562,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3567,
                "end": 3576,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3585,
            "end": 3613,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3611,
              "end": 3613,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3589,
              "end": 3609,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3589,
                "end": 3595,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3600,
                "end": 3609,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3618,
            "end": 3646,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3644,
              "end": 3646,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3622,
              "end": 3642,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3622,
                "end": 3628,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3633,
                "end": 3642,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3651,
            "end": 3679,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3677,
              "end": 3679,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3655,
              "end": 3675,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3655,
                "end": 3661,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3666,
                "end": 3675,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3684,
            "end": 3712,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3710,
              "end": 3712,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3688,
              "end": 3708,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3688,
                "end": 3694,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3699,
                "end": 3708,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3717,
            "end": 3745,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3743,
              "end": 3745,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3721,
              "end": 3741,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3721,
                "end": 3727,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3732,
                "end": 3741,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3750,
            "end": 3778,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3776,
              "end": 3778,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3754,
              "end": 3774,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3754,
                "end": 3760,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3765,
                "end": 3774,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3783,
            "end": 3811,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3809,
              "end": 3811,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3787,
              "end": 3807,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3787,
                "end": 3793,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3798,
                "end": 3807,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3816,
            "end": 3844,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3842,
              "end": 3844,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3820,
              "end": 3840,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3820,
                "end": 3826,
                "decorators": [],
                "name": "choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3831,
                "end": 3840,
                "decorators": [],
                "name": "choiceOne",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 1857,
        "end": 1861,
        "raw": "true",
        "value": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
