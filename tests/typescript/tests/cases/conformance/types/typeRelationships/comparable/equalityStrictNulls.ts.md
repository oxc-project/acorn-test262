__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1172,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 506,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
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
          "start": 12,
          "end": 21,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 21,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 506,
        "body": [
          {
            "type": "IfStatement",
            "start": 29,
            "end": 56,
            "test": {
              "type": "BinaryExpression",
              "start": 33,
              "end": 47,
              "left": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 38,
                "end": 47,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 49,
              "end": 56,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 61,
            "end": 88,
            "test": {
              "type": "BinaryExpression",
              "start": 65,
              "end": 79,
              "left": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "start": 70,
                "end": 79,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 81,
              "end": 88,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 93,
            "end": 121,
            "test": {
              "type": "BinaryExpression",
              "start": 97,
              "end": 112,
              "left": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 103,
                "end": 112,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 114,
              "end": 121,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 126,
            "end": 154,
            "test": {
              "type": "BinaryExpression",
              "start": 130,
              "end": 145,
              "left": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 136,
                "end": 145,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 147,
              "end": 154,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 159,
            "end": 181,
            "test": {
              "type": "BinaryExpression",
              "start": 163,
              "end": 172,
              "left": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 168,
                "end": 172,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 174,
              "end": 181,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 186,
            "end": 208,
            "test": {
              "type": "BinaryExpression",
              "start": 190,
              "end": 199,
              "left": {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "start": 195,
                "end": 199,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 201,
              "end": 208,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 213,
            "end": 236,
            "test": {
              "type": "BinaryExpression",
              "start": 217,
              "end": 227,
              "left": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 223,
                "end": 227,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 229,
              "end": 236,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 241,
            "end": 264,
            "test": {
              "type": "BinaryExpression",
              "start": 245,
              "end": 255,
              "left": {
                "type": "Identifier",
                "start": 245,
                "end": 246,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 251,
                "end": 255,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 257,
              "end": 264,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 269,
            "end": 296,
            "test": {
              "type": "BinaryExpression",
              "start": 273,
              "end": 287,
              "left": {
                "type": "Identifier",
                "start": 273,
                "end": 282,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 286,
                "end": 287,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 289,
              "end": 296,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 301,
            "end": 328,
            "test": {
              "type": "BinaryExpression",
              "start": 305,
              "end": 319,
              "left": {
                "type": "Identifier",
                "start": 305,
                "end": 314,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 321,
              "end": 328,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 333,
            "end": 361,
            "test": {
              "type": "BinaryExpression",
              "start": 337,
              "end": 352,
              "left": {
                "type": "Identifier",
                "start": 337,
                "end": 346,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
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
            "consequent": {
              "type": "BlockStatement",
              "start": 354,
              "end": 361,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 366,
            "end": 394,
            "test": {
              "type": "BinaryExpression",
              "start": 370,
              "end": 385,
              "left": {
                "type": "Identifier",
                "start": 370,
                "end": 379,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 384,
                "end": 385,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 387,
              "end": 394,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 399,
            "end": 421,
            "test": {
              "type": "BinaryExpression",
              "start": 403,
              "end": 412,
              "left": {
                "type": "Literal",
                "start": 403,
                "end": 407,
                "value": null,
                "raw": "null"
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 411,
                "end": 412,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 414,
              "end": 421,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 426,
            "end": 448,
            "test": {
              "type": "BinaryExpression",
              "start": 430,
              "end": 439,
              "left": {
                "type": "Literal",
                "start": 430,
                "end": 434,
                "value": null,
                "raw": "null"
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "start": 438,
                "end": 439,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 441,
              "end": 448,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 453,
            "end": 476,
            "test": {
              "type": "BinaryExpression",
              "start": 457,
              "end": 467,
              "left": {
                "type": "Literal",
                "start": 457,
                "end": 461,
                "value": null,
                "raw": "null"
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 466,
                "end": 467,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 469,
              "end": 476,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 481,
            "end": 504,
            "test": {
              "type": "BinaryExpression",
              "start": 485,
              "end": 495,
              "left": {
                "type": "Literal",
                "start": 485,
                "end": 489,
                "value": null,
                "raw": "null"
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 494,
                "end": 495,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 497,
              "end": 504,
              "body": []
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 508,
      "end": 665,
      "id": {
        "type": "Identifier",
        "start": 517,
        "end": 519,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 522,
        "end": 665,
        "body": [
          {
            "type": "IfStatement",
            "start": 528,
            "end": 563,
            "test": {
              "type": "BinaryExpression",
              "start": 532,
              "end": 554,
              "left": {
                "type": "Identifier",
                "start": 532,
                "end": 541,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 545,
                "end": 554,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 556,
              "end": 563,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 568,
            "end": 598,
            "test": {
              "type": "BinaryExpression",
              "start": 572,
              "end": 589,
              "left": {
                "type": "Identifier",
                "start": 572,
                "end": 581,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 585,
                "end": 589,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 591,
              "end": 598,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 603,
            "end": 633,
            "test": {
              "type": "BinaryExpression",
              "start": 607,
              "end": 624,
              "left": {
                "type": "Literal",
                "start": 607,
                "end": 611,
                "value": null,
                "raw": "null"
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 615,
                "end": 624,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 626,
              "end": 633,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 638,
            "end": 663,
            "test": {
              "type": "BinaryExpression",
              "start": 642,
              "end": 654,
              "left": {
                "type": "Literal",
                "start": 642,
                "end": 646,
                "value": null,
                "raw": "null"
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 650,
                "end": 654,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 656,
              "end": 663,
              "body": []
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 667,
      "end": 851,
      "id": {
        "type": "Identifier",
        "start": 676,
        "end": 678,
        "decorators": [],
        "name": "f3",
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
          "start": 679,
          "end": 688,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 680,
            "end": 688,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 682,
              "end": 688
            }
          }
        },
        {
          "type": "Identifier",
          "start": 690,
          "end": 700,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 691,
            "end": 700,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 693,
              "end": 700
            }
          }
        },
        {
          "type": "Identifier",
          "start": 702,
          "end": 718,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 703,
            "end": 718,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 705,
              "end": 718,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 707,
                  "end": 716,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 707,
                    "end": 708,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 708,
                    "end": 716,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 710,
                      "end": 716
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 720,
          "end": 738,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 721,
            "end": 738,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 723,
              "end": 738,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 723,
                  "end": 729
                },
                {
                  "type": "TSStringKeyword",
                  "start": 732,
                  "end": 738
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 740,
        "end": 851,
        "body": [
          {
            "type": "IfStatement",
            "start": 746,
            "end": 768,
            "test": {
              "type": "BinaryExpression",
              "start": 750,
              "end": 759,
              "left": {
                "type": "Identifier",
                "start": 750,
                "end": 751,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 755,
                "end": 759,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 761,
              "end": 768,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 773,
            "end": 795,
            "test": {
              "type": "BinaryExpression",
              "start": 777,
              "end": 786,
              "left": {
                "type": "Identifier",
                "start": 777,
                "end": 778,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 782,
                "end": 786,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 788,
              "end": 795,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 800,
            "end": 822,
            "test": {
              "type": "BinaryExpression",
              "start": 804,
              "end": 813,
              "left": {
                "type": "Identifier",
                "start": 804,
                "end": 805,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 809,
                "end": 813,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 815,
              "end": 822,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 827,
            "end": 849,
            "test": {
              "type": "BinaryExpression",
              "start": 831,
              "end": 840,
              "left": {
                "type": "Identifier",
                "start": 831,
                "end": 832,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 836,
                "end": 840,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 842,
              "end": 849,
              "body": []
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 853,
      "end": 1005,
      "id": {
        "type": "Identifier",
        "start": 862,
        "end": 864,
        "decorators": [],
        "name": "f4",
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
          "start": 865,
          "end": 874,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 866,
            "end": 874,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 868,
              "end": 874
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 876,
        "end": 1005,
        "body": [
          {
            "type": "IfStatement",
            "start": 882,
            "end": 908,
            "test": {
              "type": "BinaryExpression",
              "start": 886,
              "end": 899,
              "left": {
                "type": "Identifier",
                "start": 886,
                "end": 887,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": ">",
              "right": {
                "type": "Identifier",
                "start": 890,
                "end": 899,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 901,
              "end": 908,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 913,
            "end": 939,
            "test": {
              "type": "BinaryExpression",
              "start": 917,
              "end": 930,
              "left": {
                "type": "Identifier",
                "start": 917,
                "end": 918,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 921,
                "end": 930,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 932,
              "end": 939,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 944,
            "end": 971,
            "test": {
              "type": "BinaryExpression",
              "start": 948,
              "end": 962,
              "left": {
                "type": "Identifier",
                "start": 948,
                "end": 949,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": ">=",
              "right": {
                "type": "Identifier",
                "start": 953,
                "end": 962,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 964,
              "end": 971,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 976,
            "end": 1003,
            "test": {
              "type": "BinaryExpression",
              "start": 980,
              "end": 994,
              "left": {
                "type": "Identifier",
                "start": 980,
                "end": 981,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<=",
              "right": {
                "type": "Identifier",
                "start": 985,
                "end": 994,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 996,
              "end": 1003,
              "body": []
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1006,
      "end": 1172,
      "id": {
        "type": "Identifier",
        "start": 1015,
        "end": 1017,
        "decorators": [],
        "name": "f5",
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
          "start": 1018,
          "end": 1027,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1019,
            "end": 1027,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1021,
              "end": 1027
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1029,
        "end": 1172,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1035,
            "end": 1170,
            "discriminant": {
              "type": "Identifier",
              "start": 1042,
              "end": 1043,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1055,
                "end": 1084,
                "test": {
                  "type": "Literal",
                  "start": 1060,
                  "end": 1064,
                  "value": null,
                  "raw": "null"
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 1078,
                    "end": 1084,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1093,
                "end": 1127,
                "test": {
                  "type": "Identifier",
                  "start": 1098,
                  "end": 1107,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 1121,
                    "end": 1127,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1136,
                "end": 1164,
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1157,
                    "end": 1164,
                    "argument": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
