__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 36,
              "end": 42
            },
            "start": 34,
            "end": 42
          },
          "start": 25,
          "end": 42
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 61
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 44,
          "end": 61
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 103
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 106,
                  "end": 108
                },
                "definite": false,
                "start": 94,
                "end": 108
              }
            ],
            "declare": false,
            "start": 90,
            "end": 109
          }
        ],
        "start": 63,
        "end": 123
      },
      "expression": false,
      "start": 13,
      "end": 123
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 136
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 140,
              "end": 146
            },
            "start": 138,
            "end": 146
          },
          "start": 137,
          "end": 146
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 160
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 148,
          "end": 160
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 204,
                        "end": 207
                      },
                      "start": 204,
                      "end": 209
                    },
                    "start": 202,
                    "end": 209
                  },
                  "start": 193,
                  "end": 209
                },
                "init": null,
                "definite": false,
                "start": 193,
                "end": 209
              }
            ],
            "declare": false,
            "start": 189,
            "end": 210
          }
        ],
        "start": 162,
        "end": 224
      },
      "expression": false,
      "start": 124,
      "end": 224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 243
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 255,
              "end": 261
            },
            "start": 253,
            "end": 261
          },
          "start": 244,
          "end": 261
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 294
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 297,
                  "end": 299
                },
                "definite": false,
                "start": 285,
                "end": 299
              }
            ],
            "declare": false,
            "start": 281,
            "end": 300
          }
        ],
        "start": 263,
        "end": 314
      },
      "expression": false,
      "start": 225,
      "end": 314
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 335
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 339,
              "end": 345
            },
            "start": 337,
            "end": 345
          },
          "start": 336,
          "end": 345
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 359
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 347,
          "end": 359
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 316,
      "end": 361
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 405,
        "end": 408
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 420,
              "end": 426
            },
            "start": 418,
            "end": 426
          },
          "start": 409,
          "end": 426
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 431,
            "end": 435
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 428,
          "end": 435
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 388,
      "end": 437
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 490
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 502,
              "end": 508
            },
            "start": 500,
            "end": 508
          },
          "start": 491,
          "end": 508
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 464,
      "end": 510
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 533,
        "end": 535
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 553
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 536,
          "end": 553
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 565,
                  "end": 574
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 577,
                  "end": 579
                },
                "definite": false,
                "start": 565,
                "end": 579
              }
            ],
            "declare": false,
            "start": 561,
            "end": 580
          }
        ],
        "start": 555,
        "end": 594
      },
      "expression": false,
      "start": 524,
      "end": 594
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 613
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 635
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 638,
                  "end": 640
                },
                "definite": false,
                "start": 626,
                "end": 640
              }
            ],
            "declare": false,
            "start": 622,
            "end": 641
          }
        ],
        "start": 616,
        "end": 655
      },
      "expression": false,
      "start": 595,
      "end": 655
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 666,
        "end": 668
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 680,
              "end": 686
            },
            "start": 678,
            "end": 686
          },
          "start": 669,
          "end": 686
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 695
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 688,
          "end": 695
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 657,
      "end": 697
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 732
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 744,
              "end": 750
            },
            "start": 742,
            "end": 750
          },
          "start": 733,
          "end": 750
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 755,
            "end": 759
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 752,
          "end": 759
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 721,
      "end": 761
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 794,
        "end": 796
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 808,
              "end": 811
            },
            "start": 806,
            "end": 811
          },
          "start": 797,
          "end": 811
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 816,
            "end": 820
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 813,
          "end": 820
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 852,
                      "end": 855
                    },
                    "start": 850,
                    "end": 855
                  },
                  "start": 841,
                  "end": 855
                },
                "init": null,
                "definite": false,
                "start": 841,
                "end": 855
              }
            ],
            "declare": false,
            "start": 837,
            "end": 856
          }
        ],
        "start": 822,
        "end": 870
      },
      "expression": false,
      "start": 785,
      "end": 870
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f42",
        "optional": false,
        "typeAnnotation": null,
        "start": 880,
        "end": 883
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 887,
              "end": 893
            },
            "start": 885,
            "end": 893
          },
          "start": 884,
          "end": 893
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 898,
            "end": 907
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 895,
          "end": 907
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 871,
      "end": 909
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f42",
        "optional": false,
        "typeAnnotation": null,
        "start": 942,
        "end": 945
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 949,
              "end": 955
            },
            "start": 947,
            "end": 955
          },
          "start": 946,
          "end": 955
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 960,
            "end": 969
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 957,
          "end": 969
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 933,
      "end": 971
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f42",
        "optional": false,
        "typeAnnotation": null,
        "start": 1004,
        "end": 1007
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1011,
              "end": 1014
            },
            "start": 1009,
            "end": 1014
          },
          "start": 1008,
          "end": 1014
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 1019,
            "end": 1028
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1016,
          "end": 1028
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1060,
                        "end": 1063
                      },
                      "start": 1060,
                      "end": 1065
                    },
                    "start": 1058,
                    "end": 1065
                  },
                  "start": 1049,
                  "end": 1065
                },
                "init": null,
                "definite": false,
                "start": 1049,
                "end": 1065
              }
            ],
            "declare": false,
            "start": 1045,
            "end": 1066
          }
        ],
        "start": 1030,
        "end": 1080
      },
      "expression": false,
      "start": 995,
      "end": 1080
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1090,
        "end": 1099
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1111,
              "end": 1117
            },
            "start": 1109,
            "end": 1117
          },
          "start": 1100,
          "end": 1117
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1081,
      "end": 1119
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1141,
        "end": 1150
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1162,
              "end": 1168
            },
            "start": 1160,
            "end": 1168
          },
          "start": 1151,
          "end": 1168
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1132,
      "end": 1170
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1192,
        "end": 1201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1213,
              "end": 1216
            },
            "start": 1211,
            "end": 1216
          },
          "start": 1202,
          "end": 1216
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1251,
                      "end": 1254
                    },
                    "start": 1249,
                    "end": 1254
                  },
                  "start": 1240,
                  "end": 1254
                },
                "init": null,
                "definite": false,
                "start": 1240,
                "end": 1254
              }
            ],
            "declare": false,
            "start": 1236,
            "end": 1255
          }
        ],
        "start": 1218,
        "end": 1269
      },
      "expression": false,
      "start": 1183,
      "end": 1269
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1288,
        "end": 1290
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1302,
              "end": 1308
            },
            "start": 1300,
            "end": 1308
          },
          "start": 1291,
          "end": 1308
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 1313,
            "end": 1317
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1310,
          "end": 1317
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1271,
      "end": 1319
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1360,
        "end": 1362
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1374,
              "end": 1380
            },
            "start": 1372,
            "end": 1380
          },
          "start": 1363,
          "end": 1380
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 1385,
            "end": 1389
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1382,
          "end": 1389
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1343,
      "end": 1391
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f52",
        "optional": false,
        "typeAnnotation": null,
        "start": 1432,
        "end": 1435
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1439,
              "end": 1445
            },
            "start": 1437,
            "end": 1445
          },
          "start": 1436,
          "end": 1445
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 1450,
            "end": 1459
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1447,
          "end": 1459
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1415,
      "end": 1461
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f52",
        "optional": false,
        "typeAnnotation": null,
        "start": 1502,
        "end": 1505
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1509,
              "end": 1515
            },
            "start": 1507,
            "end": 1515
          },
          "start": 1506,
          "end": 1515
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 1520,
            "end": 1529
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1517,
          "end": 1529
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1485,
      "end": 1531
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1572,
        "end": 1574
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1586,
              "end": 1592
            },
            "start": 1584,
            "end": 1592
          },
          "start": 1575,
          "end": 1592
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1555,
      "end": 1594
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1635,
        "end": 1637
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1649,
              "end": 1655
            },
            "start": 1647,
            "end": 1655
          },
          "start": 1638,
          "end": 1655
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1618,
      "end": 1657
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 1680
}
```
