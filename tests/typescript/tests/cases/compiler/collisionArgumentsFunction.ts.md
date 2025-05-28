__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 1680,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 13,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 24,
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
          "start": 25,
          "end": 42,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 42,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 36,
              "end": 42
            }
          }
        },
        {
          "type": "RestElement",
          "start": 44,
          "end": 61,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 47,
            "end": 61,
            "decorators": [],
            "name": "restParameters",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 123,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 90,
            "end": 109,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 94,
                "end": 108,
                "id": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 103,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 106,
                  "end": 108,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 124,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 136,
        "decorators": [],
        "name": "f12",
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
          "start": 137,
          "end": 146,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 138,
            "end": 146,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 140,
              "end": 146
            }
          }
        },
        {
          "type": "RestElement",
          "start": 148,
          "end": 160,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 151,
            "end": 160,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 162,
        "end": 224,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 189,
            "end": 210,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 193,
                "end": 209,
                "id": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 209,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 202,
                    "end": 209,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 204,
                      "end": 209,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 204,
                        "end": 207
                      }
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 225,
      "end": 314,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 243,
        "decorators": [],
        "name": "f1NoError",
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
          "start": 244,
          "end": 261,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 253,
            "end": 261,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 255,
              "end": 261
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 263,
        "end": 314,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 281,
            "end": 300,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 285,
                "end": 299,
                "id": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 294,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 297,
                  "end": 299,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 316,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 335,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 336,
          "end": 345,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 337,
            "end": 345,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 339,
              "end": 345
            }
          }
        },
        {
          "type": "RestElement",
          "start": 347,
          "end": 359,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 350,
            "end": 359,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 388,
      "end": 437,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 408,
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 409,
          "end": 426,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 418,
            "end": 426,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 420,
              "end": 426
            }
          }
        },
        {
          "type": "RestElement",
          "start": 428,
          "end": 435,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 431,
            "end": 435,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 464,
      "end": 510,
      "id": {
        "type": "Identifier",
        "start": 481,
        "end": 490,
        "decorators": [],
        "name": "f2NoError",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 491,
          "end": 508,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 500,
            "end": 508,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 502,
              "end": 508
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 524,
      "end": 594,
      "id": {
        "type": "Identifier",
        "start": 533,
        "end": 535,
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
          "type": "RestElement",
          "start": 536,
          "end": 553,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 539,
            "end": 553,
            "decorators": [],
            "name": "restParameters",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 555,
        "end": 594,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 561,
            "end": 580,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 565,
                "end": 579,
                "id": {
                  "type": "Identifier",
                  "start": 565,
                  "end": 574,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 577,
                  "end": 579,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 595,
      "end": 655,
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 613,
        "decorators": [],
        "name": "f3NoError",
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
        "start": 616,
        "end": 655,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 622,
            "end": 641,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 626,
                "end": 640,
                "id": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 635,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 638,
                  "end": 640,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 657,
      "end": 697,
      "id": {
        "type": "Identifier",
        "start": 666,
        "end": 668,
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
          "start": 669,
          "end": 686,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 678,
            "end": 686,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 680,
              "end": 686
            }
          }
        },
        {
          "type": "RestElement",
          "start": 688,
          "end": 695,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 691,
            "end": 695,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 721,
      "end": 761,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 732,
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
          "start": 733,
          "end": 750,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 742,
            "end": 750,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 744,
              "end": 750
            }
          }
        },
        {
          "type": "RestElement",
          "start": 752,
          "end": 759,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 755,
            "end": 759,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 785,
      "end": 870,
      "id": {
        "type": "Identifier",
        "start": 794,
        "end": 796,
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
          "start": 797,
          "end": 811,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 806,
            "end": 811,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 808,
              "end": 811
            }
          }
        },
        {
          "type": "RestElement",
          "start": 813,
          "end": 820,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 816,
            "end": 820,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 822,
        "end": 870,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 837,
            "end": 856,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 841,
                "end": 855,
                "id": {
                  "type": "Identifier",
                  "start": 841,
                  "end": 855,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 850,
                    "end": 855,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 852,
                      "end": 855
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 871,
      "end": 909,
      "id": {
        "type": "Identifier",
        "start": 880,
        "end": 883,
        "decorators": [],
        "name": "f42",
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
          "start": 884,
          "end": 893,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 885,
            "end": 893,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 887,
              "end": 893
            }
          }
        },
        {
          "type": "RestElement",
          "start": 895,
          "end": 907,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 898,
            "end": 907,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 933,
      "end": 971,
      "id": {
        "type": "Identifier",
        "start": 942,
        "end": 945,
        "decorators": [],
        "name": "f42",
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
          "start": 946,
          "end": 955,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 947,
            "end": 955,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 949,
              "end": 955
            }
          }
        },
        {
          "type": "RestElement",
          "start": 957,
          "end": 969,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 960,
            "end": 969,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 995,
      "end": 1080,
      "id": {
        "type": "Identifier",
        "start": 1004,
        "end": 1007,
        "decorators": [],
        "name": "f42",
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
          "start": 1008,
          "end": 1014,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1009,
            "end": 1014,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1011,
              "end": 1014
            }
          }
        },
        {
          "type": "RestElement",
          "start": 1016,
          "end": 1028,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 1019,
            "end": 1028,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1030,
        "end": 1080,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1045,
            "end": 1066,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1049,
                "end": 1065,
                "id": {
                  "type": "Identifier",
                  "start": 1049,
                  "end": 1065,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1058,
                    "end": 1065,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1060,
                      "end": 1065,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1060,
                        "end": 1063
                      }
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1081,
      "end": 1119,
      "id": {
        "type": "Identifier",
        "start": 1090,
        "end": 1099,
        "decorators": [],
        "name": "f4NoError",
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
          "start": 1100,
          "end": 1117,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1109,
            "end": 1117,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1111,
              "end": 1117
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1132,
      "end": 1170,
      "id": {
        "type": "Identifier",
        "start": 1141,
        "end": 1150,
        "decorators": [],
        "name": "f4NoError",
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
          "start": 1151,
          "end": 1168,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1160,
            "end": 1168,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1162,
              "end": 1168
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1183,
      "end": 1269,
      "id": {
        "type": "Identifier",
        "start": 1192,
        "end": 1201,
        "decorators": [],
        "name": "f4NoError",
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
          "start": 1202,
          "end": 1216,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1211,
            "end": 1216,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1213,
              "end": 1216
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1218,
        "end": 1269,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1236,
            "end": 1255,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1240,
                "end": 1254,
                "id": {
                  "type": "Identifier",
                  "start": 1240,
                  "end": 1254,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1249,
                    "end": 1254,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1251,
                      "end": 1254
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1271,
      "end": 1319,
      "id": {
        "type": "Identifier",
        "start": 1288,
        "end": 1290,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1291,
          "end": 1308,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1300,
            "end": 1308,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1302,
              "end": 1308
            }
          }
        },
        {
          "type": "RestElement",
          "start": 1310,
          "end": 1317,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 1313,
            "end": 1317,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1343,
      "end": 1391,
      "id": {
        "type": "Identifier",
        "start": 1360,
        "end": 1362,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1363,
          "end": 1380,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1372,
            "end": 1380,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1374,
              "end": 1380
            }
          }
        },
        {
          "type": "RestElement",
          "start": 1382,
          "end": 1389,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 1385,
            "end": 1389,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1415,
      "end": 1461,
      "id": {
        "type": "Identifier",
        "start": 1432,
        "end": 1435,
        "decorators": [],
        "name": "f52",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1436,
          "end": 1445,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1437,
            "end": 1445,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1439,
              "end": 1445
            }
          }
        },
        {
          "type": "RestElement",
          "start": 1447,
          "end": 1459,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 1450,
            "end": 1459,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1485,
      "end": 1531,
      "id": {
        "type": "Identifier",
        "start": 1502,
        "end": 1505,
        "decorators": [],
        "name": "f52",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1506,
          "end": 1515,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1507,
            "end": 1515,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1509,
              "end": 1515
            }
          }
        },
        {
          "type": "RestElement",
          "start": 1517,
          "end": 1529,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 1520,
            "end": 1529,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1555,
      "end": 1594,
      "id": {
        "type": "Identifier",
        "start": 1572,
        "end": 1574,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1575,
          "end": 1592,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1584,
            "end": 1592,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1586,
              "end": 1592
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1618,
      "end": 1657,
      "id": {
        "type": "Identifier",
        "start": 1635,
        "end": 1637,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1638,
          "end": 1655,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1647,
            "end": 1655,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1649,
              "end": 1655
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
