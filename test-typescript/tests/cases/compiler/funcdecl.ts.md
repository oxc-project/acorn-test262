__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1512,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 62,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 62,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 28,
            "end": 60,
            "argument": {
              "type": "Literal",
              "start": 35,
              "end": 59,
              "raw": "\"this is my simple func\"",
              "value": "this is my simple func"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 19,
        "decorators": [],
        "name": "simpleFunc",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 80,
            "decorators": [],
            "name": "simpleFuncVar",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 83,
            "end": 93,
            "decorators": [],
            "name": "simpleFunc",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 130,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 130,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 124,
        "decorators": [],
        "name": "anotherFuncNoReturn",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 157,
            "decorators": [],
            "name": "anotherFuncNoReturnVar",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 160,
            "end": 179,
            "decorators": [],
            "name": "anotherFuncNoReturn",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 182,
      "end": 235,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 212,
        "end": 235,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 218,
            "end": 233,
            "argument": {
              "type": "Literal",
              "start": 225,
              "end": 232,
              "raw": "\"Hello\"",
              "value": "Hello"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 201,
        "decorators": [],
        "name": "withReturn",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 204,
        "end": 212,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 206,
          "end": 212
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 266,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 253,
            "decorators": [],
            "name": "withReturnVar",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 256,
            "end": 266,
            "decorators": [],
            "name": "withReturn",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 269,
      "end": 326,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 309,
        "end": 326,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 315,
            "end": 324,
            "argument": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 278,
        "end": 288,
        "decorators": [],
        "name": "withParams",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 289,
          "end": 299,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 291,
            "end": 299,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 293,
              "end": 299
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 301,
        "end": 309,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 303,
          "end": 309
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 357,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 344,
            "decorators": [],
            "name": "withparamsVar",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 347,
            "end": 357,
            "decorators": [],
            "name": "withParams",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 360,
      "end": 428,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 411,
        "end": 428,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 417,
            "end": 426,
            "argument": {
              "type": "Identifier",
              "start": 424,
              "end": 425,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 384,
        "decorators": [],
        "name": "withMultiParams",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 385,
          "end": 395,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 387,
            "end": 395,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 389,
              "end": 395
            }
          }
        },
        {
          "type": "Identifier",
          "start": 397,
          "end": 398,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 400,
          "end": 409,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 401,
            "end": 409,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 403,
              "end": 409,
              "typeName": {
                "type": "Identifier",
                "start": 403,
                "end": 409,
                "decorators": [],
                "name": "Object",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 429,
      "end": 470,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 469,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 451,
            "decorators": [],
            "name": "withMultiParamsVar",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 454,
            "end": 469,
            "decorators": [],
            "name": "withMultiParams",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 472,
      "end": 515,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 512,
        "end": 515,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 481,
        "end": 499,
        "decorators": [],
        "name": "withOptionalParams",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 500,
          "end": 510,
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 502,
            "end": 510,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 504,
              "end": 510
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 516,
      "end": 563,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 520,
          "end": 562,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 520,
            "end": 541,
            "decorators": [],
            "name": "withOptionalParamsVar",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 544,
            "end": 562,
            "decorators": [],
            "name": "withOptionalParams",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 565,
      "end": 642,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 639,
        "end": 642,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 574,
        "end": 595,
        "decorators": [],
        "name": "withInitializedParams",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 596,
          "end": 605,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 597,
            "end": 605,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 599,
              "end": 605
            }
          }
        },
        {
          "type": "Identifier",
          "start": 607,
          "end": 609,
          "decorators": [],
          "name": "b0",
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 611,
          "end": 617,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 611,
            "end": 612,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 615,
            "end": 617,
            "raw": "30",
            "value": 30
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 619,
          "end": 637,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 619,
            "end": 620,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 623,
            "end": 637,
            "raw": "\"string value\"",
            "value": "string value"
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 643,
      "end": 696,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 647,
          "end": 695,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 647,
            "end": 671,
            "decorators": [],
            "name": "withInitializedParamsVar",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 674,
            "end": 695,
            "decorators": [],
            "name": "withInitializedParams",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 698,
      "end": 779,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 776,
        "end": 779,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 707,
        "end": 736,
        "decorators": [],
        "name": "withOptionalInitializedParams",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 737,
          "end": 746,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 738,
            "end": 746,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 740,
              "end": 746
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 748,
          "end": 774,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 748,
            "end": 757,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 749,
              "end": 757,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 751,
                "end": 757
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 760,
            "end": 774,
            "raw": "\"hello string\"",
            "value": "hello string"
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 780,
      "end": 849,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 784,
          "end": 848,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 784,
            "end": 816,
            "decorators": [],
            "name": "withOptionalInitializedParamsVar",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 819,
            "end": 848,
            "decorators": [],
            "name": "withOptionalInitializedParams",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 851,
      "end": 949,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 918,
        "end": 949,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 924,
            "end": 947,
            "argument": {
              "type": "Identifier",
              "start": 931,
              "end": 946,
              "decorators": [],
              "name": "myRestParameter",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 860,
        "end": 874,
        "decorators": [],
        "name": "withRestParams",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 875,
          "end": 884,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 876,
            "end": 884,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 878,
              "end": 884
            }
          }
        },
        {
          "type": "RestElement",
          "start": 886,
          "end": 916,
          "argument": {
            "type": "Identifier",
            "start": 890,
            "end": 905,
            "decorators": [],
            "name": "myRestParameter",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 906,
            "end": 916,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 908,
              "end": 916,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 908,
                "end": 914
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 950,
      "end": 989,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 954,
          "end": 988,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 954,
            "end": 971,
            "decorators": [],
            "name": "withRestParamsVar",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 974,
            "end": 988,
            "decorators": [],
            "name": "withRestParams",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 991,
      "end": 1030,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1000,
        "end": 1009,
        "decorators": [],
        "name": "overload1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1010,
          "end": 1019,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1011,
            "end": 1019,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1013,
              "end": 1019
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1021,
        "end": 1029,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1023,
          "end": 1029
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1031,
      "end": 1070,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1040,
        "end": 1049,
        "decorators": [],
        "name": "overload1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1050,
          "end": 1059,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1051,
            "end": 1059,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1053,
              "end": 1059
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1061,
        "end": 1069,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1063,
          "end": 1069
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1071,
      "end": 1128,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1099,
        "end": 1128,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1105,
            "end": 1126,
            "argument": {
              "type": "CallExpression",
              "start": 1112,
              "end": 1125,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 1112,
                "end": 1123,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1112,
                  "end": 1114,
                  "decorators": [],
                  "name": "ns",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1115,
                  "end": 1123,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1080,
        "end": 1089,
        "decorators": [],
        "name": "overload1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1090,
          "end": 1097,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1092,
            "end": 1097,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1094,
              "end": 1097
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 1129,
      "end": 1167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1133,
          "end": 1166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1133,
            "end": 1154,
            "decorators": [],
            "name": "withOverloadSignature",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 1157,
            "end": 1166,
            "decorators": [],
            "name": "overload1",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1169,
      "end": 1198,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1195,
        "end": 1198,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1178,
        "end": 1179,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1180,
          "end": 1193,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1181,
            "end": 1193,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1183,
              "end": 1193,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1186,
                "end": 1193,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1189,
                  "end": 1193
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1200,
      "end": 1262,
      "body": {
        "type": "TSModuleBlock",
        "start": 1210,
        "end": 1262,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1216,
            "end": 1259,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 1223,
              "end": 1259,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1252,
                "end": 1259,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 1232,
                "end": 1235,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 1236,
                  "end": 1249,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1237,
                    "end": 1249,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1239,
                      "end": 1249,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1242,
                        "end": 1249,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1245,
                          "end": 1249
                        }
                      }
                    }
                  }
                }
              ]
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1207,
        "end": 1209,
        "decorators": [],
        "name": "m2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 1264,
      "end": 1314,
      "expression": {
        "type": "CallExpression",
        "start": 1264,
        "end": 1313,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1271,
            "end": 1312,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1278,
              "end": 1312,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1285,
                  "end": 1296,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1289,
                      "end": 1295,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1289,
                        "end": 1290,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 1293,
                        "end": 1295,
                        "raw": "30",
                        "value": 30
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ReturnStatement",
                  "start": 1301,
                  "end": 1310,
                  "argument": {
                    "type": "Identifier",
                    "start": 1308,
                    "end": 1309,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1264,
          "end": 1270,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1264,
            "end": 1266,
            "decorators": [],
            "name": "m2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1267,
            "end": 1270,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1317,
      "end": 1364,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1334,
        "end": 1344,
        "decorators": [],
        "name": "fooAmbient",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1345,
          "end": 1354,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1346,
            "end": 1354,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1348,
              "end": 1354
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1355,
        "end": 1363,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1357,
          "end": 1363
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1366,
      "end": 1418,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1383,
        "end": 1398,
        "decorators": [],
        "name": "overloadAmbient",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1399,
          "end": 1408,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1400,
            "end": 1408,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1402,
              "end": 1408
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1409,
        "end": 1417,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1411,
          "end": 1417
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1419,
      "end": 1471,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1436,
        "end": 1451,
        "decorators": [],
        "name": "overloadAmbient",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1452,
          "end": 1461,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1453,
            "end": 1461,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1455,
              "end": 1461
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1462,
        "end": 1470,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1464,
          "end": 1470
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1473,
      "end": 1512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1477,
          "end": 1512,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1477,
            "end": 1479,
            "decorators": [],
            "name": "f2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1482,
            "end": 1512,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1488,
              "end": 1512,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1494,
                  "end": 1510,
                  "argument": {
                    "type": "Literal",
                    "start": 1501,
                    "end": 1509,
                    "raw": "\"string\"",
                    "value": "string"
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
