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
        "name": "simpleFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 19
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "this is my simple func",
              "raw": "\"this is my simple func\"",
              "start": 35,
              "end": 59
            },
            "start": 28,
            "end": 60
          }
        ],
        "start": 22,
        "end": 62
      },
      "expression": false,
      "start": 0,
      "end": 62
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
            "name": "simpleFuncVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 80
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "simpleFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 93
          },
          "definite": false,
          "start": 67,
          "end": 93
        }
      ],
      "declare": false,
      "start": 63,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "anotherFuncNoReturn",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 124
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 127,
        "end": 130
      },
      "expression": false,
      "start": 96,
      "end": 130
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
            "name": "anotherFuncNoReturnVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 157
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "anotherFuncNoReturn",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 179
          },
          "definite": false,
          "start": 135,
          "end": 179
        }
      ],
      "declare": false,
      "start": 131,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withReturn",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 206,
          "end": 212
        },
        "start": 204,
        "end": 212
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "Hello",
              "raw": "\"Hello\"",
              "start": 225,
              "end": 232
            },
            "start": 218,
            "end": 233
          }
        ],
        "start": 212,
        "end": 235
      },
      "expression": false,
      "start": 182,
      "end": 235
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
            "name": "withReturnVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 253
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withReturn",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 266
          },
          "definite": false,
          "start": 240,
          "end": 266
        }
      ],
      "declare": false,
      "start": 236,
      "end": 267
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 288
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 293,
              "end": 299
            },
            "start": 291,
            "end": 299
          },
          "start": 289,
          "end": 299
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 303,
          "end": 309
        },
        "start": 301,
        "end": 309
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 323
            },
            "start": 315,
            "end": 324
          }
        ],
        "start": 309,
        "end": 326
      },
      "expression": false,
      "start": 269,
      "end": 326
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
            "name": "withparamsVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 344
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 357
          },
          "definite": false,
          "start": 331,
          "end": 357
        }
      ],
      "declare": false,
      "start": 327,
      "end": 358
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withMultiParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 384
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 389,
              "end": 395
            },
            "start": 387,
            "end": 395
          },
          "start": 385,
          "end": 395
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 397,
          "end": 398
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
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
                "start": 403,
                "end": 409
              },
              "typeArguments": null,
              "start": 403,
              "end": 409
            },
            "start": 401,
            "end": 409
          },
          "start": 400,
          "end": 409
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 425
            },
            "start": 417,
            "end": 426
          }
        ],
        "start": 411,
        "end": 428
      },
      "expression": false,
      "start": 360,
      "end": 428
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
            "name": "withMultiParamsVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 451
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withMultiParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 469
          },
          "definite": false,
          "start": 433,
          "end": 469
        }
      ],
      "declare": false,
      "start": 429,
      "end": 470
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withOptionalParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 499
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 504,
              "end": 510
            },
            "start": 502,
            "end": 510
          },
          "start": 500,
          "end": 510
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 512,
        "end": 515
      },
      "expression": false,
      "start": 472,
      "end": 515
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
            "name": "withOptionalParamsVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 541
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withOptionalParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 544,
            "end": 562
          },
          "definite": false,
          "start": 520,
          "end": 562
        }
      ],
      "declare": false,
      "start": 516,
      "end": 563
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withInitializedParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 595
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 599,
              "end": 605
            },
            "start": 597,
            "end": 605
          },
          "start": 596,
          "end": 605
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b0",
          "optional": false,
          "typeAnnotation": null,
          "start": 607,
          "end": 609
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 612
          },
          "right": {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 615,
            "end": 617
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 611,
          "end": 617
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 619,
            "end": 620
          },
          "right": {
            "type": "Literal",
            "value": "string value",
            "raw": "\"string value\"",
            "start": 623,
            "end": 637
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 619,
          "end": 637
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 639,
        "end": 642
      },
      "expression": false,
      "start": 565,
      "end": 642
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
            "name": "withInitializedParamsVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 671
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withInitializedParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 695
          },
          "definite": false,
          "start": 647,
          "end": 695
        }
      ],
      "declare": false,
      "start": 643,
      "end": 696
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withOptionalInitializedParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 707,
        "end": 736
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 740,
              "end": 746
            },
            "start": 738,
            "end": 746
          },
          "start": 737,
          "end": 746
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 751,
                "end": 757
              },
              "start": 749,
              "end": 757
            },
            "start": 748,
            "end": 757
          },
          "right": {
            "type": "Literal",
            "value": "hello string",
            "raw": "\"hello string\"",
            "start": 760,
            "end": 774
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 748,
          "end": 774
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 776,
        "end": 779
      },
      "expression": false,
      "start": 698,
      "end": 779
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
            "name": "withOptionalInitializedParamsVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 816
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withOptionalInitializedParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 848
          },
          "definite": false,
          "start": 784,
          "end": 848
        }
      ],
      "declare": false,
      "start": 780,
      "end": 849
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withRestParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 860,
        "end": 874
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 878,
              "end": 884
            },
            "start": 876,
            "end": 884
          },
          "start": 875,
          "end": 884
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "myRestParameter",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 905
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 908,
                "end": 914
              },
              "start": 908,
              "end": 916
            },
            "start": 906,
            "end": 916
          },
          "value": null,
          "start": 886,
          "end": 916
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "myRestParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 931,
              "end": 946
            },
            "start": 924,
            "end": 947
          }
        ],
        "start": 918,
        "end": 949
      },
      "expression": false,
      "start": 851,
      "end": 949
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
            "name": "withRestParamsVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 954,
            "end": 971
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withRestParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 974,
            "end": 988
          },
          "definite": false,
          "start": 954,
          "end": 988
        }
      ],
      "declare": false,
      "start": 950,
      "end": 989
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1000,
        "end": 1009
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1013,
              "end": 1019
            },
            "start": 1011,
            "end": 1019
          },
          "start": 1010,
          "end": 1019
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1023,
          "end": 1029
        },
        "start": 1021,
        "end": 1029
      },
      "body": null,
      "expression": false,
      "start": 991,
      "end": 1030
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1040,
        "end": 1049
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1053,
              "end": 1059
            },
            "start": 1051,
            "end": 1059
          },
          "start": 1050,
          "end": 1059
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1063,
          "end": 1069
        },
        "start": 1061,
        "end": 1069
      },
      "body": null,
      "expression": false,
      "start": 1031,
      "end": 1070
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1080,
        "end": 1089
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1094,
              "end": 1097
            },
            "start": 1092,
            "end": 1097
          },
          "start": 1090,
          "end": 1097
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1112,
                  "end": 1114
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1115,
                  "end": 1123
                },
                "optional": false,
                "computed": false,
                "start": 1112,
                "end": 1123
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1112,
              "end": 1125
            },
            "start": 1105,
            "end": 1126
          }
        ],
        "start": 1099,
        "end": 1128
      },
      "expression": false,
      "start": 1071,
      "end": 1128
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
            "name": "withOverloadSignature",
            "optional": false,
            "typeAnnotation": null,
            "start": 1133,
            "end": 1154
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "overload1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1157,
            "end": 1166
          },
          "definite": false,
          "start": 1133,
          "end": 1166
        }
      ],
      "declare": false,
      "start": 1129,
      "end": 1167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1178,
        "end": 1179
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1189,
                  "end": 1193
                },
                "start": 1186,
                "end": 1193
              },
              "start": 1183,
              "end": 1193
            },
            "start": 1181,
            "end": 1193
          },
          "start": 1180,
          "end": 1193
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1195,
        "end": 1198
      },
      "expression": false,
      "start": 1169,
      "end": 1198
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1207,
        "end": 1209
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1232,
                "end": 1235
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1245,
                          "end": 1249
                        },
                        "start": 1242,
                        "end": 1249
                      },
                      "start": 1239,
                      "end": 1249
                    },
                    "start": 1237,
                    "end": 1249
                  },
                  "start": 1236,
                  "end": 1249
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1252,
                "end": 1259
              },
              "expression": false,
              "start": 1223,
              "end": 1259
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1216,
            "end": 1259
          }
        ],
        "start": 1210,
        "end": 1262
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1200,
      "end": 1262
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1264,
            "end": 1266
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1267,
            "end": 1270
          },
          "optional": false,
          "computed": false,
          "start": 1264,
          "end": 1270
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1289,
                        "end": 1290
                      },
                      "init": {
                        "type": "Literal",
                        "value": 30,
                        "raw": "30",
                        "start": 1293,
                        "end": 1295
                      },
                      "definite": false,
                      "start": 1289,
                      "end": 1295
                    }
                  ],
                  "declare": false,
                  "start": 1285,
                  "end": 1296
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1308,
                    "end": 1309
                  },
                  "start": 1301,
                  "end": 1310
                }
              ],
              "start": 1278,
              "end": 1312
            },
            "id": null,
            "generator": false,
            "start": 1271,
            "end": 1312
          }
        ],
        "optional": false,
        "start": 1264,
        "end": 1313
      },
      "directive": null,
      "start": 1264,
      "end": 1314
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fooAmbient",
        "optional": false,
        "typeAnnotation": null,
        "start": 1334,
        "end": 1344
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1348,
              "end": 1354
            },
            "start": 1346,
            "end": 1354
          },
          "start": 1345,
          "end": 1354
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1357,
          "end": 1363
        },
        "start": 1355,
        "end": 1363
      },
      "body": null,
      "expression": false,
      "start": 1317,
      "end": 1364
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloadAmbient",
        "optional": false,
        "typeAnnotation": null,
        "start": 1383,
        "end": 1398
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1402,
              "end": 1408
            },
            "start": 1400,
            "end": 1408
          },
          "start": 1399,
          "end": 1408
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1411,
          "end": 1417
        },
        "start": 1409,
        "end": 1417
      },
      "body": null,
      "expression": false,
      "start": 1366,
      "end": 1418
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloadAmbient",
        "optional": false,
        "typeAnnotation": null,
        "start": 1436,
        "end": 1451
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1455,
              "end": 1461
            },
            "start": 1453,
            "end": 1461
          },
          "start": 1452,
          "end": 1461
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1464,
          "end": 1470
        },
        "start": 1462,
        "end": 1470
      },
      "body": null,
      "expression": false,
      "start": 1419,
      "end": 1471
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1477,
            "end": 1479
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 1501,
                    "end": 1509
                  },
                  "start": 1494,
                  "end": 1510
                }
              ],
              "start": 1488,
              "end": 1512
            },
            "id": null,
            "generator": false,
            "start": 1482,
            "end": 1512
          },
          "definite": false,
          "start": 1477,
          "end": 1512
        }
      ],
      "declare": false,
      "start": 1473,
      "end": 1512
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1512
}
```
