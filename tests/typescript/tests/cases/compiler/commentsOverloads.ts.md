__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 37
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
              "start": 53,
              "end": 59
            },
            "start": 51,
            "end": 59
          },
          "start": 50,
          "end": 59
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 62,
          "end": 68
        },
        "start": 60,
        "end": 68
      },
      "body": null,
      "expression": false,
      "start": 26,
      "end": 69
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 81
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 85,
              "end": 91
            },
            "start": 83,
            "end": 91
          },
          "start": 82,
          "end": 91
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 94,
          "end": 100
        },
        "start": 92,
        "end": 100
      },
      "body": null,
      "expression": false,
      "start": 70,
      "end": 101
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aOrb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 120,
              "end": 123
            },
            "start": 118,
            "end": 123
          },
          "start": 114,
          "end": 123
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 138,
              "end": 140
            },
            "start": 131,
            "end": 141
          }
        ],
        "start": 125,
        "end": 143
      },
      "expression": false,
      "start": 102,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 146
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 147,
            "end": 154
          }
        ],
        "optional": false,
        "start": 144,
        "end": 155
      },
      "directive": null,
      "start": 144,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 159
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 160,
            "end": 162
          }
        ],
        "optional": false,
        "start": 157,
        "end": 163
      },
      "directive": null,
      "start": 157,
      "end": 164
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
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
              "start": 180,
              "end": 186
            },
            "start": 178,
            "end": 186
          },
          "start": 177,
          "end": 186
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 189,
          "end": 195
        },
        "start": 187,
        "end": 195
      },
      "body": null,
      "expression": false,
      "start": 165,
      "end": 196
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 238,
              "end": 244
            },
            "start": 236,
            "end": 244
          },
          "start": 235,
          "end": 244
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 247,
          "end": 253
        },
        "start": 245,
        "end": 253
      },
      "body": null,
      "expression": false,
      "start": 223,
      "end": 254
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 295
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aOrb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 302,
              "end": 305
            },
            "start": 300,
            "end": 305
          },
          "start": 296,
          "end": 305
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 320,
              "end": 322
            },
            "start": 313,
            "end": 323
          }
        ],
        "start": 307,
        "end": 325
      },
      "expression": false,
      "start": 284,
      "end": 325
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 326,
          "end": 328
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 329,
            "end": 336
          }
        ],
        "optional": false,
        "start": 326,
        "end": 337
      },
      "directive": null,
      "start": 326,
      "end": 338
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 341
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 342,
            "end": 344
          }
        ],
        "optional": false,
        "start": 339,
        "end": 345
      },
      "directive": null,
      "start": 339,
      "end": 346
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 358
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
              "start": 362,
              "end": 368
            },
            "start": 360,
            "end": 368
          },
          "start": 359,
          "end": 368
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 371,
          "end": 377
        },
        "start": 369,
        "end": 377
      },
      "body": null,
      "expression": false,
      "start": 347,
      "end": 378
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 390
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 394,
              "end": 400
            },
            "start": 392,
            "end": 400
          },
          "start": 391,
          "end": 400
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 403,
          "end": 409
        },
        "start": 401,
        "end": 409
      },
      "body": null,
      "expression": false,
      "start": 379,
      "end": 410
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 422
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aOrb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 429,
              "end": 432
            },
            "start": 427,
            "end": 432
          },
          "start": 423,
          "end": 432
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 447,
              "end": 449
            },
            "start": 440,
            "end": 450
          }
        ],
        "start": 434,
        "end": 452
      },
      "expression": false,
      "start": 411,
      "end": 452
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 453,
          "end": 455
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 456,
            "end": 463
          }
        ],
        "optional": false,
        "start": 453,
        "end": 464
      },
      "directive": null,
      "start": 453,
      "end": 465
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 468
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 469,
            "end": 471
          }
        ],
        "optional": false,
        "start": 466,
        "end": 472
      },
      "directive": null,
      "start": 466,
      "end": 473
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
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
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 551,
              "end": 557
            },
            "start": 549,
            "end": 557
          },
          "start": 548,
          "end": 557
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 560,
          "end": 566
        },
        "start": 558,
        "end": 566
      },
      "body": null,
      "expression": false,
      "start": 524,
      "end": 567
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 627,
        "end": 629
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 633,
              "end": 639
            },
            "start": 631,
            "end": 639
          },
          "start": 630,
          "end": 639
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 642,
          "end": 648
        },
        "start": 640,
        "end": 648
      },
      "body": null,
      "expression": false,
      "start": 618,
      "end": 649
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 661
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aOrb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 668,
              "end": 671
            },
            "start": 666,
            "end": 671
          },
          "start": 662,
          "end": 671
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 686,
              "end": 688
            },
            "start": 679,
            "end": 689
          }
        ],
        "start": 673,
        "end": 691
      },
      "expression": false,
      "start": 650,
      "end": 691
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 692,
          "end": 694
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 695,
            "end": 702
          }
        ],
        "optional": false,
        "start": 692,
        "end": 703
      },
      "directive": null,
      "start": 692,
      "end": 704
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 705,
          "end": 707
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 708,
            "end": 710
          }
        ],
        "optional": false,
        "start": 705,
        "end": 711
      },
      "directive": null,
      "start": 705,
      "end": 712
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i1",
        "optional": false,
        "typeAnnotation": null,
        "start": 723,
        "end": 725
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 775,
                    "end": 781
                  },
                  "start": 773,
                  "end": 781
                },
                "start": 772,
                "end": 781
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 784,
                "end": 790
              },
              "start": 782,
              "end": 790
            },
            "start": 758,
            "end": 791
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 829,
                    "end": 835
                  },
                  "start": 827,
                  "end": 835
                },
                "start": 826,
                "end": 835
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 838,
                "end": 844
              },
              "start": 836,
              "end": 844
            },
            "start": 825,
            "end": 845
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 866,
              "end": 869
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 873,
                    "end": 879
                  },
                  "start": 871,
                  "end": 879
                },
                "start": 870,
                "end": 879
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 882,
                "end": 888
              },
              "start": 880,
              "end": 888
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 866,
            "end": 889
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 913
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 917,
                    "end": 923
                  },
                  "start": 915,
                  "end": 923
                },
                "start": 914,
                "end": 923
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 926,
                "end": 932
              },
              "start": 924,
              "end": 932
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 910,
            "end": 933
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 954
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 960,
                      "end": 966
                    },
                    "start": 960,
                    "end": 968
                  },
                  "start": 958,
                  "end": 968
                },
                "start": 955,
                "end": 968
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 971,
                "end": 977
              },
              "start": 969,
              "end": 977
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 951,
            "end": 978
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1000,
              "end": 1003
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1009,
                      "end": 1015
                    },
                    "start": 1009,
                    "end": 1017
                  },
                  "start": 1007,
                  "end": 1017
                },
                "start": 1004,
                "end": 1017
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1020,
                "end": 1026
              },
              "start": 1018,
              "end": 1026
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1000,
            "end": 1027
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1037
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1041,
                    "end": 1047
                  },
                  "start": 1039,
                  "end": 1047
                },
                "start": 1038,
                "end": 1047
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1050,
                "end": 1056
              },
              "start": 1048,
              "end": 1056
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1033,
            "end": 1057
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1079,
              "end": 1083
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1087,
                    "end": 1093
                  },
                  "start": 1085,
                  "end": 1093
                },
                "start": 1084,
                "end": 1093
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1096,
                "end": 1102
              },
              "start": 1094,
              "end": 1102
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1079,
            "end": 1103
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1108,
              "end": 1112
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1116,
                    "end": 1122
                  },
                  "start": 1114,
                  "end": 1122
                },
                "start": 1113,
                "end": 1122
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1125,
                "end": 1131
              },
              "start": 1123,
              "end": 1131
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1108,
            "end": 1132
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1141
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1145,
                    "end": 1151
                  },
                  "start": 1143,
                  "end": 1151
                },
                "start": 1142,
                "end": 1151
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1154,
                "end": 1160
              },
              "start": 1152,
              "end": 1160
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1137,
            "end": 1161
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1183,
              "end": 1187
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1191,
                    "end": 1197
                  },
                  "start": 1189,
                  "end": 1197
                },
                "start": 1188,
                "end": 1197
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1200,
                "end": 1206
              },
              "start": 1198,
              "end": 1206
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1183,
            "end": 1207
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1216
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1220,
                    "end": 1226
                  },
                  "start": 1218,
                  "end": 1226
                },
                "start": 1217,
                "end": 1226
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1229,
                "end": 1235
              },
              "start": 1227,
              "end": 1235
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1212,
            "end": 1236
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1261,
              "end": 1265
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1269,
                    "end": 1272
                  },
                  "start": 1267,
                  "end": 1272
                },
                "start": 1266,
                "end": 1272
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1275,
                "end": 1278
              },
              "start": 1273,
              "end": 1278
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1261,
            "end": 1279
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1306,
                    "end": 1312
                  },
                  "start": 1304,
                  "end": 1312
                },
                "start": 1303,
                "end": 1312
              }
            ],
            "returnType": null,
            "start": 1298,
            "end": 1314
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1343,
                    "end": 1349
                  },
                  "start": 1341,
                  "end": 1349
                },
                "start": 1340,
                "end": 1349
              }
            ],
            "returnType": null,
            "start": 1335,
            "end": 1351
          }
        ],
        "start": 726,
        "end": 1353
      },
      "declare": false,
      "start": 713,
      "end": 1353
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
            "name": "i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1364,
                  "end": 1366
                },
                "typeArguments": null,
                "start": 1364,
                "end": 1366
              },
              "start": 1362,
              "end": 1366
            },
            "start": 1358,
            "end": 1366
          },
          "init": null,
          "definite": false,
          "start": 1358,
          "end": 1366
        }
      ],
      "declare": false,
      "start": 1354,
      "end": 1367
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1378,
        "end": 1380
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1395,
                    "end": 1401
                  },
                  "start": 1393,
                  "end": 1401
                },
                "start": 1392,
                "end": 1401
              }
            ],
            "returnType": null,
            "start": 1387,
            "end": 1403
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1432,
                    "end": 1438
                  },
                  "start": 1430,
                  "end": 1438
                },
                "start": 1429,
                "end": 1438
              }
            ],
            "returnType": null,
            "start": 1424,
            "end": 1440
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 1449,
                    "end": 1455
                  },
                  "start": 1447,
                  "end": 1455
                },
                "start": 1446,
                "end": 1455
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1458,
                "end": 1464
              },
              "start": 1456,
              "end": 1464
            },
            "start": 1445,
            "end": 1465
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1503,
                    "end": 1509
                  },
                  "start": 1501,
                  "end": 1509
                },
                "start": 1500,
                "end": 1509
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1512,
                "end": 1518
              },
              "start": 1510,
              "end": 1518
            },
            "start": 1499,
            "end": 1519
          }
        ],
        "start": 1381,
        "end": 1521
      },
      "declare": false,
      "start": 1368,
      "end": 1521
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
            "name": "i2_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1532,
                  "end": 1534
                },
                "typeArguments": null,
                "start": 1532,
                "end": 1534
              },
              "start": 1530,
              "end": 1534
            },
            "start": 1526,
            "end": 1534
          },
          "init": null,
          "definite": false,
          "start": 1526,
          "end": 1534
        }
      ],
      "declare": false,
      "start": 1522,
      "end": 1535
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1546,
        "end": 1548
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1579,
                    "end": 1585
                  },
                  "start": 1577,
                  "end": 1585
                },
                "start": 1576,
                "end": 1585
              }
            ],
            "returnType": null,
            "start": 1571,
            "end": 1587
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1616,
                    "end": 1622
                  },
                  "start": 1614,
                  "end": 1622
                },
                "start": 1613,
                "end": 1622
              }
            ],
            "returnType": null,
            "start": 1608,
            "end": 1624
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 1662,
                    "end": 1668
                  },
                  "start": 1660,
                  "end": 1668
                },
                "start": 1659,
                "end": 1668
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1671,
                "end": 1677
              },
              "start": 1669,
              "end": 1677
            },
            "start": 1658,
            "end": 1678
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1687,
                    "end": 1693
                  },
                  "start": 1685,
                  "end": 1693
                },
                "start": 1684,
                "end": 1693
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1696,
                "end": 1702
              },
              "start": 1694,
              "end": 1702
            },
            "start": 1683,
            "end": 1703
          }
        ],
        "start": 1549,
        "end": 1705
      },
      "declare": false,
      "start": 1536,
      "end": 1705
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
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1716,
                  "end": 1718
                },
                "typeArguments": null,
                "start": 1716,
                "end": 1718
              },
              "start": 1714,
              "end": 1718
            },
            "start": 1710,
            "end": 1718
          },
          "init": null,
          "definite": false,
          "start": 1710,
          "end": 1718
        }
      ],
      "declare": false,
      "start": 1706,
      "end": 1719
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1730,
        "end": 1732
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1747,
                    "end": 1753
                  },
                  "start": 1745,
                  "end": 1753
                },
                "start": 1744,
                "end": 1753
              }
            ],
            "returnType": null,
            "start": 1739,
            "end": 1755
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1768,
                    "end": 1774
                  },
                  "start": 1766,
                  "end": 1774
                },
                "start": 1765,
                "end": 1774
              }
            ],
            "returnType": null,
            "start": 1760,
            "end": 1776
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 1785,
                    "end": 1791
                  },
                  "start": 1783,
                  "end": 1791
                },
                "start": 1782,
                "end": 1791
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1794,
                "end": 1800
              },
              "start": 1792,
              "end": 1800
            },
            "start": 1781,
            "end": 1801
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1810,
                    "end": 1816
                  },
                  "start": 1808,
                  "end": 1816
                },
                "start": 1807,
                "end": 1816
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1819,
                "end": 1825
              },
              "start": 1817,
              "end": 1825
            },
            "start": 1806,
            "end": 1826
          }
        ],
        "start": 1733,
        "end": 1828
      },
      "declare": false,
      "start": 1720,
      "end": 1828
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1835,
        "end": 1836
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1850,
              "end": 1855
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 1859,
                      "end": 1865
                    },
                    "start": 1857,
                    "end": 1865
                  },
                  "start": 1856,
                  "end": 1865
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1868,
                  "end": 1874
                },
                "start": 1866,
                "end": 1874
              },
              "body": null,
              "expression": false,
              "start": 1855,
              "end": 1875
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1843,
            "end": 1875
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1887,
              "end": 1892
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1896,
                      "end": 1902
                    },
                    "start": 1894,
                    "end": 1902
                  },
                  "start": 1893,
                  "end": 1902
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1905,
                  "end": 1911
                },
                "start": 1903,
                "end": 1911
              },
              "body": null,
              "expression": false,
              "start": 1892,
              "end": 1912
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1880,
            "end": 1912
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1924,
              "end": 1929
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1936,
                      "end": 1939
                    },
                    "start": 1934,
                    "end": 1939
                  },
                  "start": 1930,
                  "end": 1939
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 1958,
                      "end": 1960
                    },
                    "start": 1951,
                    "end": 1961
                  }
                ],
                "start": 1941,
                "end": 1967
              },
              "expression": false,
              "start": 1929,
              "end": 1967
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1917,
            "end": 1967
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1997,
              "end": 2002
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2006,
                      "end": 2012
                    },
                    "start": 2004,
                    "end": 2012
                  },
                  "start": 2003,
                  "end": 2012
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2015,
                  "end": 2021
                },
                "start": 2013,
                "end": 2021
              },
              "body": null,
              "expression": false,
              "start": 2002,
              "end": 2022
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1990,
            "end": 2022
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2034,
              "end": 2039
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2043,
                      "end": 2049
                    },
                    "start": 2041,
                    "end": 2049
                  },
                  "start": 2040,
                  "end": 2049
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2052,
                  "end": 2058
                },
                "start": 2050,
                "end": 2058
              },
              "body": null,
              "expression": false,
              "start": 2039,
              "end": 2059
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2027,
            "end": 2059
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2071,
              "end": 2076
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2083,
                      "end": 2086
                    },
                    "start": 2081,
                    "end": 2086
                  },
                  "start": 2077,
                  "end": 2086
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2105,
                      "end": 2107
                    },
                    "start": 2098,
                    "end": 2108
                  }
                ],
                "start": 2088,
                "end": 2114
              },
              "expression": false,
              "start": 2076,
              "end": 2114
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2064,
            "end": 2114
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2126,
              "end": 2131
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2135,
                      "end": 2141
                    },
                    "start": 2133,
                    "end": 2141
                  },
                  "start": 2132,
                  "end": 2141
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2144,
                  "end": 2150
                },
                "start": 2142,
                "end": 2150
              },
              "body": null,
              "expression": false,
              "start": 2131,
              "end": 2151
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2119,
            "end": 2151
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2181,
              "end": 2186
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2190,
                      "end": 2196
                    },
                    "start": 2188,
                    "end": 2196
                  },
                  "start": 2187,
                  "end": 2196
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2199,
                  "end": 2205
                },
                "start": 2197,
                "end": 2205
              },
              "body": null,
              "expression": false,
              "start": 2186,
              "end": 2206
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2174,
            "end": 2206
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2218,
              "end": 2223
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2230,
                      "end": 2233
                    },
                    "start": 2228,
                    "end": 2233
                  },
                  "start": 2224,
                  "end": 2233
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2252,
                      "end": 2254
                    },
                    "start": 2245,
                    "end": 2255
                  }
                ],
                "start": 2235,
                "end": 2261
              },
              "expression": false,
              "start": 2223,
              "end": 2261
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2211,
            "end": 2261
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2291,
              "end": 2296
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2300,
                      "end": 2306
                    },
                    "start": 2298,
                    "end": 2306
                  },
                  "start": 2297,
                  "end": 2306
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2309,
                  "end": 2315
                },
                "start": 2307,
                "end": 2315
              },
              "body": null,
              "expression": false,
              "start": 2296,
              "end": 2316
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2284,
            "end": 2316
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2346,
              "end": 2351
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2355,
                      "end": 2361
                    },
                    "start": 2353,
                    "end": 2361
                  },
                  "start": 2352,
                  "end": 2361
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2364,
                  "end": 2370
                },
                "start": 2362,
                "end": 2370
              },
              "body": null,
              "expression": false,
              "start": 2351,
              "end": 2371
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2339,
            "end": 2371
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2383,
              "end": 2388
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2395,
                      "end": 2398
                    },
                    "start": 2393,
                    "end": 2398
                  },
                  "start": 2389,
                  "end": 2398
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2417,
                      "end": 2419
                    },
                    "start": 2410,
                    "end": 2420
                  }
                ],
                "start": 2400,
                "end": 2426
              },
              "expression": false,
              "start": 2388,
              "end": 2426
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2376,
            "end": 2426
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2456,
              "end": 2461
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2465,
                      "end": 2471
                    },
                    "start": 2463,
                    "end": 2471
                  },
                  "start": 2462,
                  "end": 2471
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2474,
                  "end": 2480
                },
                "start": 2472,
                "end": 2480
              },
              "body": null,
              "expression": false,
              "start": 2461,
              "end": 2481
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2449,
            "end": 2481
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2511,
              "end": 2516
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2520,
                      "end": 2526
                    },
                    "start": 2518,
                    "end": 2526
                  },
                  "start": 2517,
                  "end": 2526
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2529,
                  "end": 2535
                },
                "start": 2527,
                "end": 2535
              },
              "body": null,
              "expression": false,
              "start": 2516,
              "end": 2536
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2504,
            "end": 2536
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2578,
              "end": 2583
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2590,
                      "end": 2593
                    },
                    "start": 2588,
                    "end": 2593
                  },
                  "start": 2584,
                  "end": 2593
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2612,
                      "end": 2614
                    },
                    "start": 2605,
                    "end": 2615
                  }
                ],
                "start": 2595,
                "end": 2621
              },
              "expression": false,
              "start": 2583,
              "end": 2621
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2571,
            "end": 2621
          }
        ],
        "start": 1837,
        "end": 2623
      },
      "abstract": false,
      "declare": false,
      "start": 1829,
      "end": 2623
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2630,
        "end": 2632
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2639,
              "end": 2650
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2654,
                      "end": 2660
                    },
                    "start": 2652,
                    "end": 2660
                  },
                  "start": 2651,
                  "end": 2660
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2650,
              "end": 2662
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2639,
            "end": 2662
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2667,
              "end": 2678
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2682,
                      "end": 2688
                    },
                    "start": 2680,
                    "end": 2688
                  },
                  "start": 2679,
                  "end": 2688
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2678,
              "end": 2690
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2667,
            "end": 2690
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2695,
              "end": 2706
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2713,
                      "end": 2716
                    },
                    "start": 2711,
                    "end": 2716
                  },
                  "start": 2707,
                  "end": 2716
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2718,
                "end": 2725
              },
              "expression": false,
              "start": 2706,
              "end": 2725
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2695,
            "end": 2725
          }
        ],
        "start": 2633,
        "end": 2727
      },
      "abstract": false,
      "declare": false,
      "start": 2624,
      "end": 2727
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2734,
        "end": 2736
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2758,
              "end": 2769
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2773,
                      "end": 2779
                    },
                    "start": 2771,
                    "end": 2779
                  },
                  "start": 2770,
                  "end": 2779
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2769,
              "end": 2781
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2758,
            "end": 2781
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2798,
              "end": 2809
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2813,
                      "end": 2819
                    },
                    "start": 2811,
                    "end": 2819
                  },
                  "start": 2810,
                  "end": 2819
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2809,
              "end": 2821
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2798,
            "end": 2821
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2826,
              "end": 2837
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2844,
                      "end": 2847
                    },
                    "start": 2842,
                    "end": 2847
                  },
                  "start": 2838,
                  "end": 2847
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2849,
                "end": 2856
              },
              "expression": false,
              "start": 2837,
              "end": 2856
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2826,
            "end": 2856
          }
        ],
        "start": 2737,
        "end": 2858
      },
      "abstract": false,
      "declare": false,
      "start": 2728,
      "end": 2858
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2865,
        "end": 2867
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2874,
              "end": 2885
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2889,
                      "end": 2895
                    },
                    "start": 2887,
                    "end": 2895
                  },
                  "start": 2886,
                  "end": 2895
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2885,
              "end": 2897
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2874,
            "end": 2897
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2917,
              "end": 2928
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2932,
                      "end": 2938
                    },
                    "start": 2930,
                    "end": 2938
                  },
                  "start": 2929,
                  "end": 2938
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2928,
              "end": 2940
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2917,
            "end": 2940
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2945,
              "end": 2956
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2963,
                      "end": 2966
                    },
                    "start": 2961,
                    "end": 2966
                  },
                  "start": 2957,
                  "end": 2966
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2968,
                "end": 2975
              },
              "expression": false,
              "start": 2956,
              "end": 2975
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2945,
            "end": 2975
          }
        ],
        "start": 2868,
        "end": 2977
      },
      "abstract": false,
      "declare": false,
      "start": 2859,
      "end": 2977
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2984,
        "end": 2986
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3008,
              "end": 3019
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 3023,
                      "end": 3029
                    },
                    "start": 3021,
                    "end": 3029
                  },
                  "start": 3020,
                  "end": 3029
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3019,
              "end": 3031
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3008,
            "end": 3031
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3051,
              "end": 3062
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3066,
                      "end": 3072
                    },
                    "start": 3064,
                    "end": 3072
                  },
                  "start": 3063,
                  "end": 3072
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3062,
              "end": 3074
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3051,
            "end": 3074
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3095,
              "end": 3106
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3113,
                      "end": 3116
                    },
                    "start": 3111,
                    "end": 3116
                  },
                  "start": 3107,
                  "end": 3116
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3118,
                "end": 3125
              },
              "expression": false,
              "start": 3106,
              "end": 3125
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3095,
            "end": 3125
          }
        ],
        "start": 2987,
        "end": 3127
      },
      "abstract": false,
      "declare": false,
      "start": 2978,
      "end": 3127
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3134,
        "end": 3136
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3158,
              "end": 3169
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 3173,
                      "end": 3179
                    },
                    "start": 3171,
                    "end": 3179
                  },
                  "start": 3170,
                  "end": 3179
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3169,
              "end": 3181
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3158,
            "end": 3181
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3201,
              "end": 3212
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3216,
                      "end": 3222
                    },
                    "start": 3214,
                    "end": 3222
                  },
                  "start": 3213,
                  "end": 3222
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3212,
              "end": 3224
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3201,
            "end": 3224
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3257,
              "end": 3268
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aorb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3275,
                      "end": 3278
                    },
                    "start": 3273,
                    "end": 3278
                  },
                  "start": 3269,
                  "end": 3278
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3280,
                "end": 3287
              },
              "expression": false,
              "start": 3268,
              "end": 3287
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3257,
            "end": 3287
          }
        ],
        "start": 3137,
        "end": 3289
      },
      "abstract": false,
      "declare": false,
      "start": 3128,
      "end": 3289
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
            "name": "c_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 3294,
            "end": 3297
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3304,
              "end": 3305
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3300,
            "end": 3307
          },
          "definite": false,
          "start": 3294,
          "end": 3307
        }
      ],
      "declare": false,
      "start": 3290,
      "end": 3308
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
            "name": "c1_i_1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3314,
            "end": 3320
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3327,
              "end": 3329
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 3330,
                "end": 3332
              }
            ],
            "start": 3323,
            "end": 3333
          },
          "definite": false,
          "start": 3314,
          "end": 3333
        }
      ],
      "declare": false,
      "start": 3310,
      "end": 3334
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
            "name": "c1_i_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3339,
            "end": 3345
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3352,
              "end": 3354
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3355,
                "end": 3362
              }
            ],
            "start": 3348,
            "end": 3363
          },
          "definite": false,
          "start": 3339,
          "end": 3363
        }
      ],
      "declare": false,
      "start": 3335,
      "end": 3364
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
            "name": "c2_i_1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3369,
            "end": 3375
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3382,
              "end": 3384
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 3385,
                "end": 3387
              }
            ],
            "start": 3378,
            "end": 3388
          },
          "definite": false,
          "start": 3369,
          "end": 3388
        }
      ],
      "declare": false,
      "start": 3365,
      "end": 3389
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
            "name": "c2_i_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3394,
            "end": 3400
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3407,
              "end": 3409
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3410,
                "end": 3417
              }
            ],
            "start": 3403,
            "end": 3418
          },
          "definite": false,
          "start": 3394,
          "end": 3418
        }
      ],
      "declare": false,
      "start": 3390,
      "end": 3419
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
            "name": "c3_i_1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3424,
            "end": 3430
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3437,
              "end": 3439
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 3440,
                "end": 3442
              }
            ],
            "start": 3433,
            "end": 3443
          },
          "definite": false,
          "start": 3424,
          "end": 3443
        }
      ],
      "declare": false,
      "start": 3420,
      "end": 3444
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
            "name": "c3_i_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3449,
            "end": 3455
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3462,
              "end": 3464
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3465,
                "end": 3472
              }
            ],
            "start": 3458,
            "end": 3473
          },
          "definite": false,
          "start": 3449,
          "end": 3473
        }
      ],
      "declare": false,
      "start": 3445,
      "end": 3474
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
            "name": "c4_i_1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3479,
            "end": 3485
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3492,
              "end": 3494
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 3495,
                "end": 3497
              }
            ],
            "start": 3488,
            "end": 3498
          },
          "definite": false,
          "start": 3479,
          "end": 3498
        }
      ],
      "declare": false,
      "start": 3475,
      "end": 3499
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
            "name": "c4_i_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3504,
            "end": 3510
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3517,
              "end": 3519
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3520,
                "end": 3527
              }
            ],
            "start": 3513,
            "end": 3528
          },
          "definite": false,
          "start": 3504,
          "end": 3528
        }
      ],
      "declare": false,
      "start": 3500,
      "end": 3529
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
            "name": "c5_i_1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3534,
            "end": 3540
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3547,
              "end": 3549
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 3550,
                "end": 3552
              }
            ],
            "start": 3543,
            "end": 3553
          },
          "definite": false,
          "start": 3534,
          "end": 3553
        }
      ],
      "declare": false,
      "start": 3530,
      "end": 3554
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
            "name": "c5_i_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3559,
            "end": 3565
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3572,
              "end": 3574
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3575,
                "end": 3582
              }
            ],
            "start": 3568,
            "end": 3583
          },
          "definite": false,
          "start": 3559,
          "end": 3583
        }
      ],
      "declare": false,
      "start": 3555,
      "end": 3584
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 3584
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 26,
    "end": 34,
    "range": [
      26,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 35,
    "end": 37,
    "range": [
      35,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 53,
    "end": 59,
    "range": [
      53,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 62,
    "end": 68,
    "range": [
      62,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 70,
    "end": 78,
    "range": [
      70,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 79,
    "end": 81,
    "range": [
      79,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 94,
    "end": 100,
    "range": [
      94,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110,
    "range": [
      102,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 111,
    "end": 113,
    "range": [
      111,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "aOrb",
    "start": 114,
    "end": 118,
    "range": [
      114,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 120,
    "end": 123,
    "range": [
      120,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 131,
    "end": 137,
    "range": [
      131,
      137
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 138,
    "end": 140,
    "range": [
      138,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 144,
    "end": 146,
    "range": [
      144,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 147,
    "end": 154,
    "range": [
      147,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 157,
    "end": 159,
    "range": [
      157,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 160,
    "end": 162,
    "range": [
      160,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 165,
    "end": 173,
    "range": [
      165,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 174,
    "end": 176,
    "range": [
      174,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 180,
    "end": 186,
    "range": [
      180,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 189,
    "end": 195,
    "range": [
      189,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 223,
    "end": 231,
    "range": [
      223,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 232,
    "end": 234,
    "range": [
      232,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 238,
    "end": 244,
    "range": [
      238,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 284,
    "end": 292,
    "range": [
      284,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 293,
    "end": 295,
    "range": [
      293,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "aOrb",
    "start": 296,
    "end": 300,
    "range": [
      296,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 302,
    "end": 305,
    "range": [
      302,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 313,
    "end": 319,
    "range": [
      313,
      319
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 320,
    "end": 322,
    "range": [
      320,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 326,
    "end": 328,
    "range": [
      326,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 329,
    "end": 336,
    "range": [
      329,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 339,
    "end": 341,
    "range": [
      339,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 342,
    "end": 344,
    "range": [
      342,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 347,
    "end": 355,
    "range": [
      347,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 356,
    "end": 358,
    "range": [
      356,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 362,
    "end": 368,
    "range": [
      362,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 371,
    "end": 377,
    "range": [
      371,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 379,
    "end": 387,
    "range": [
      379,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 388,
    "end": 390,
    "range": [
      388,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 394,
    "end": 400,
    "range": [
      394,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 403,
    "end": 409,
    "range": [
      403,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 411,
    "end": 419,
    "range": [
      411,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 420,
    "end": 422,
    "range": [
      420,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "aOrb",
    "start": 423,
    "end": 427,
    "range": [
      423,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 429,
    "end": 432,
    "range": [
      429,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 440,
    "end": 446,
    "range": [
      440,
      446
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 447,
    "end": 449,
    "range": [
      447,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 453,
    "end": 455,
    "range": [
      453,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 456,
    "end": 463,
    "range": [
      456,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 466,
    "end": 468,
    "range": [
      466,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 469,
    "end": 471,
    "range": [
      469,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 524,
    "end": 532,
    "range": [
      524,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 533,
    "end": 535,
    "range": [
      533,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 551,
    "end": 557,
    "range": [
      551,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 560,
    "end": 566,
    "range": [
      560,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 618,
    "end": 626,
    "range": [
      618,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 627,
    "end": 629,
    "range": [
      627,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 633,
    "end": 639,
    "range": [
      633,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 642,
    "end": 648,
    "range": [
      642,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 650,
    "end": 658,
    "range": [
      650,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 659,
    "end": 661,
    "range": [
      659,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "aOrb",
    "start": 662,
    "end": 666,
    "range": [
      662,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 668,
    "end": 671,
    "range": [
      668,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 679,
    "end": 685,
    "range": [
      679,
      685
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 686,
    "end": 688,
    "range": [
      686,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 692,
    "end": 694,
    "range": [
      692,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 695,
    "end": 702,
    "range": [
      695,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 705,
    "end": 707,
    "range": [
      705,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 708,
    "end": 710,
    "range": [
      708,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 713,
    "end": 722,
    "range": [
      713,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 723,
    "end": 725,
    "range": [
      723,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 775,
    "end": 781,
    "range": [
      775,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 784,
    "end": 790,
    "range": [
      784,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 829,
    "end": 835,
    "range": [
      829,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 838,
    "end": 844,
    "range": [
      838,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 866,
    "end": 869,
    "range": [
      866,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 873,
    "end": 879,
    "range": [
      873,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 882,
    "end": 888,
    "range": [
      882,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 910,
    "end": 913,
    "range": [
      910,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 917,
    "end": 923,
    "range": [
      917,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 926,
    "end": 932,
    "range": [
      926,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 951,
    "end": 954,
    "range": [
      951,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 955,
    "end": 958,
    "range": [
      955,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 960,
    "end": 966,
    "range": [
      960,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 971,
    "end": 977,
    "range": [
      971,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1000,
    "end": 1003,
    "range": [
      1000,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1004,
    "end": 1007,
    "range": [
      1004,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1009,
    "end": 1015,
    "range": [
      1009,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1020,
    "end": 1026,
    "range": [
      1020,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1033,
    "end": 1037,
    "range": [
      1033,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1041,
    "end": 1047,
    "range": [
      1041,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1050,
    "end": 1056,
    "range": [
      1050,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1079,
    "end": 1083,
    "range": [
      1079,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1087,
    "end": 1093,
    "range": [
      1087,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1096,
    "end": 1102,
    "range": [
      1096,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1108,
    "end": 1112,
    "range": [
      1108,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1116,
    "end": 1122,
    "range": [
      1116,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1125,
    "end": 1131,
    "range": [
      1125,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1137,
    "end": 1141,
    "range": [
      1137,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1145,
    "end": 1151,
    "range": [
      1145,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1154,
    "end": 1160,
    "range": [
      1154,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1183,
    "end": 1187,
    "range": [
      1183,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1191,
    "end": 1197,
    "range": [
      1191,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1200,
    "end": 1206,
    "range": [
      1200,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1212,
    "end": 1216,
    "range": [
      1212,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1220,
    "end": 1226,
    "range": [
      1220,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1229,
    "end": 1235,
    "range": [
      1229,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1261,
    "end": 1265,
    "range": [
      1261,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1269,
    "end": 1272,
    "range": [
      1269,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1275,
    "end": 1278,
    "range": [
      1275,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1298,
    "end": 1301,
    "range": [
      1298,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1306,
    "end": 1312,
    "range": [
      1306,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1335,
    "end": 1338,
    "range": [
      1335,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1343,
    "end": 1349,
    "range": [
      1343,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1354,
    "end": 1357,
    "range": [
      1354,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "i1_i",
    "start": 1358,
    "end": 1362,
    "range": [
      1358,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 1364,
    "end": 1366,
    "range": [
      1364,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1368,
    "end": 1377,
    "range": [
      1368,
      1377
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 1378,
    "end": 1380,
    "range": [
      1378,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1387,
    "end": 1390,
    "range": [
      1387,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1395,
    "end": 1401,
    "range": [
      1395,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1424,
    "end": 1427,
    "range": [
      1424,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1432,
    "end": 1438,
    "range": [
      1432,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1449,
    "end": 1455,
    "range": [
      1449,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1458,
    "end": 1464,
    "range": [
      1458,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1503,
    "end": 1509,
    "range": [
      1503,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1512,
    "end": 1518,
    "range": [
      1512,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1522,
    "end": 1525,
    "range": [
      1522,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "i2_i",
    "start": 1526,
    "end": 1530,
    "range": [
      1526,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 1532,
    "end": 1534,
    "range": [
      1532,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1536,
    "end": 1545,
    "range": [
      1536,
      1545
    ]
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 1546,
    "end": 1548,
    "range": [
      1546,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1571,
    "end": 1574,
    "range": [
      1571,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1579,
    "end": 1585,
    "range": [
      1579,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1608,
    "end": 1611,
    "range": [
      1608,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1616,
    "end": 1622,
    "range": [
      1616,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1662,
    "end": 1668,
    "range": [
      1662,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1671,
    "end": 1677,
    "range": [
      1671,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1687,
    "end": 1693,
    "range": [
      1687,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1696,
    "end": 1702,
    "range": [
      1696,
      1702
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1706,
    "end": 1709,
    "range": [
      1706,
      1709
    ]
  },
  {
    "type": "Identifier",
    "value": "i3_i",
    "start": 1710,
    "end": 1714,
    "range": [
      1710,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 1716,
    "end": 1718,
    "range": [
      1716,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1720,
    "end": 1729,
    "range": [
      1720,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 1730,
    "end": 1732,
    "range": [
      1730,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1739,
    "end": 1742,
    "range": [
      1739,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1747,
    "end": 1753,
    "range": [
      1747,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1760,
    "end": 1763,
    "range": [
      1760,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767,
    "range": [
      1766,
      1767
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1768,
    "end": 1774,
    "range": [
      1768,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1785,
    "end": 1791,
    "range": [
      1785,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1794,
    "end": 1800,
    "range": [
      1794,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1810,
    "end": 1816,
    "range": [
      1810,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1819,
    "end": 1825,
    "range": [
      1819,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1829,
    "end": 1834,
    "range": [
      1829,
      1834
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1843,
    "end": 1849,
    "range": [
      1843,
      1849
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1850,
    "end": 1855,
    "range": [
      1850,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1859,
    "end": 1865,
    "range": [
      1859,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1868,
    "end": 1874,
    "range": [
      1868,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1880,
    "end": 1886,
    "range": [
      1880,
      1886
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1887,
    "end": 1892,
    "range": [
      1887,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1893,
    "end": 1894,
    "range": [
      1893,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1896,
    "end": 1902,
    "range": [
      1896,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1905,
    "end": 1911,
    "range": [
      1905,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1917,
    "end": 1923,
    "range": [
      1917,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1924,
    "end": 1929,
    "range": [
      1924,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 1930,
    "end": 1934,
    "range": [
      1930,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1936,
    "end": 1939,
    "range": [
      1936,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1951,
    "end": 1957,
    "range": [
      1951,
      1957
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1958,
    "end": 1960,
    "range": [
      1958,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1990,
    "end": 1996,
    "range": [
      1990,
      1996
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 1997,
    "end": 2002,
    "range": [
      1997,
      2002
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2006,
    "end": 2012,
    "range": [
      2006,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2015,
    "end": 2021,
    "range": [
      2015,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2027,
    "end": 2033,
    "range": [
      2027,
      2033
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 2034,
    "end": 2039,
    "range": [
      2034,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2043,
    "end": 2049,
    "range": [
      2043,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2052,
    "end": 2058,
    "range": [
      2052,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2064,
    "end": 2070,
    "range": [
      2064,
      2070
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 2071,
    "end": 2076,
    "range": [
      2071,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2077,
    "end": 2081,
    "range": [
      2077,
      2081
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2083,
    "end": 2086,
    "range": [
      2083,
      2086
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2098,
    "end": 2104,
    "range": [
      2098,
      2104
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2105,
    "end": 2107,
    "range": [
      2105,
      2107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2107,
    "end": 2108,
    "range": [
      2107,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2119,
    "end": 2125,
    "range": [
      2119,
      2125
    ]
  },
  {
    "type": "Identifier",
    "value": "prop3",
    "start": 2126,
    "end": 2131,
    "range": [
      2126,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2135,
    "end": 2141,
    "range": [
      2135,
      2141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2141,
    "end": 2142,
    "range": [
      2141,
      2142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2142,
    "end": 2143,
    "range": [
      2142,
      2143
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2144,
    "end": 2150,
    "range": [
      2144,
      2150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2174,
    "end": 2180,
    "range": [
      2174,
      2180
    ]
  },
  {
    "type": "Identifier",
    "value": "prop3",
    "start": 2181,
    "end": 2186,
    "range": [
      2181,
      2186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2186,
    "end": 2187,
    "range": [
      2186,
      2187
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2190,
    "end": 2196,
    "range": [
      2190,
      2196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2199,
    "end": 2205,
    "range": [
      2199,
      2205
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2211,
    "end": 2217,
    "range": [
      2211,
      2217
    ]
  },
  {
    "type": "Identifier",
    "value": "prop3",
    "start": 2218,
    "end": 2223,
    "range": [
      2218,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2224,
    "end": 2228,
    "range": [
      2224,
      2228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2230,
    "end": 2233,
    "range": [
      2230,
      2233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2245,
    "end": 2251,
    "range": [
      2245,
      2251
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2252,
    "end": 2254,
    "range": [
      2252,
      2254
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2284,
    "end": 2290,
    "range": [
      2284,
      2290
    ]
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 2291,
    "end": 2296,
    "range": [
      2291,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2297,
    "end": 2298,
    "range": [
      2297,
      2298
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2300,
    "end": 2306,
    "range": [
      2300,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2309,
    "end": 2315,
    "range": [
      2309,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2339,
    "end": 2345,
    "range": [
      2339,
      2345
    ]
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 2346,
    "end": 2351,
    "range": [
      2346,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2355,
    "end": 2361,
    "range": [
      2355,
      2361
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2361,
    "end": 2362,
    "range": [
      2361,
      2362
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2362,
    "end": 2363,
    "range": [
      2362,
      2363
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2364,
    "end": 2370,
    "range": [
      2364,
      2370
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2376,
    "end": 2382,
    "range": [
      2376,
      2382
    ]
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 2383,
    "end": 2388,
    "range": [
      2383,
      2388
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2388,
    "end": 2389,
    "range": [
      2388,
      2389
    ]
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2389,
    "end": 2393,
    "range": [
      2389,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2393,
    "end": 2394,
    "range": [
      2393,
      2394
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2395,
    "end": 2398,
    "range": [
      2395,
      2398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2410,
    "end": 2416,
    "range": [
      2410,
      2416
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2417,
    "end": 2419,
    "range": [
      2417,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2425,
    "end": 2426,
    "range": [
      2425,
      2426
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2449,
    "end": 2455,
    "range": [
      2449,
      2455
    ]
  },
  {
    "type": "Identifier",
    "value": "prop5",
    "start": 2456,
    "end": 2461,
    "range": [
      2456,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2465,
    "end": 2471,
    "range": [
      2465,
      2471
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2471,
    "end": 2472,
    "range": [
      2471,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2474,
    "end": 2480,
    "range": [
      2474,
      2480
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2480,
    "end": 2481,
    "range": [
      2480,
      2481
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2504,
    "end": 2510,
    "range": [
      2504,
      2510
    ]
  },
  {
    "type": "Identifier",
    "value": "prop5",
    "start": 2511,
    "end": 2516,
    "range": [
      2511,
      2516
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2517,
    "end": 2518,
    "range": [
      2517,
      2518
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2518,
    "end": 2519,
    "range": [
      2518,
      2519
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2520,
    "end": 2526,
    "range": [
      2520,
      2526
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2529,
    "end": 2535,
    "range": [
      2529,
      2535
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2571,
    "end": 2577,
    "range": [
      2571,
      2577
    ]
  },
  {
    "type": "Identifier",
    "value": "prop5",
    "start": 2578,
    "end": 2583,
    "range": [
      2578,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2583,
    "end": 2584,
    "range": [
      2583,
      2584
    ]
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2584,
    "end": 2588,
    "range": [
      2584,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2590,
    "end": 2593,
    "range": [
      2590,
      2593
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2593,
    "end": 2594,
    "range": [
      2593,
      2594
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2605,
    "end": 2611,
    "range": [
      2605,
      2611
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2612,
    "end": 2614,
    "range": [
      2612,
      2614
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2614,
    "end": 2615,
    "range": [
      2614,
      2615
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2620,
    "end": 2621,
    "range": [
      2620,
      2621
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2622,
    "end": 2623,
    "range": [
      2622,
      2623
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2624,
    "end": 2629,
    "range": [
      2624,
      2629
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2630,
    "end": 2632,
    "range": [
      2630,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2639,
    "end": 2650,
    "range": [
      2639,
      2650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2650,
    "end": 2651,
    "range": [
      2650,
      2651
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2654,
    "end": 2660,
    "range": [
      2654,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2661,
    "end": 2662,
    "range": [
      2661,
      2662
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2667,
    "end": 2678,
    "range": [
      2667,
      2678
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2678,
    "end": 2679,
    "range": [
      2678,
      2679
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2679,
    "end": 2680,
    "range": [
      2679,
      2680
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2682,
    "end": 2688,
    "range": [
      2682,
      2688
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2688,
    "end": 2689,
    "range": [
      2688,
      2689
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2689,
    "end": 2690,
    "range": [
      2689,
      2690
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2695,
    "end": 2706,
    "range": [
      2695,
      2706
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2707,
    "end": 2711,
    "range": [
      2707,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2713,
    "end": 2716,
    "range": [
      2713,
      2716
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2716,
    "end": 2717,
    "range": [
      2716,
      2717
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2718,
    "end": 2719,
    "range": [
      2718,
      2719
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2724,
    "end": 2725,
    "range": [
      2724,
      2725
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2726,
    "end": 2727,
    "range": [
      2726,
      2727
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2728,
    "end": 2733,
    "range": [
      2728,
      2733
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2734,
    "end": 2736,
    "range": [
      2734,
      2736
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2737,
    "end": 2738,
    "range": [
      2737,
      2738
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2758,
    "end": 2769,
    "range": [
      2758,
      2769
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2771,
    "end": 2772,
    "range": [
      2771,
      2772
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2773,
    "end": 2779,
    "range": [
      2773,
      2779
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2779,
    "end": 2780,
    "range": [
      2779,
      2780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2798,
    "end": 2809,
    "range": [
      2798,
      2809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2809,
    "end": 2810,
    "range": [
      2809,
      2810
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2811,
    "end": 2812,
    "range": [
      2811,
      2812
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2813,
    "end": 2819,
    "range": [
      2813,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2820,
    "end": 2821,
    "range": [
      2820,
      2821
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2826,
    "end": 2837,
    "range": [
      2826,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2838,
    "end": 2842,
    "range": [
      2838,
      2842
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2842,
    "end": 2843,
    "range": [
      2842,
      2843
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2844,
    "end": 2847,
    "range": [
      2844,
      2847
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2847,
    "end": 2848,
    "range": [
      2847,
      2848
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2857,
    "end": 2858,
    "range": [
      2857,
      2858
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2859,
    "end": 2864,
    "range": [
      2859,
      2864
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 2865,
    "end": 2867,
    "range": [
      2865,
      2867
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2868,
    "end": 2869,
    "range": [
      2868,
      2869
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2874,
    "end": 2885,
    "range": [
      2874,
      2885
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2885,
    "end": 2886,
    "range": [
      2885,
      2886
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2886,
    "end": 2887,
    "range": [
      2886,
      2887
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2887,
    "end": 2888,
    "range": [
      2887,
      2888
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2889,
    "end": 2895,
    "range": [
      2889,
      2895
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2895,
    "end": 2896,
    "range": [
      2895,
      2896
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2896,
    "end": 2897,
    "range": [
      2896,
      2897
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2917,
    "end": 2928,
    "range": [
      2917,
      2928
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2932,
    "end": 2938,
    "range": [
      2932,
      2938
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2938,
    "end": 2939,
    "range": [
      2938,
      2939
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2939,
    "end": 2940,
    "range": [
      2939,
      2940
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2945,
    "end": 2956,
    "range": [
      2945,
      2956
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2956,
    "end": 2957,
    "range": [
      2956,
      2957
    ]
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 2957,
    "end": 2961,
    "range": [
      2957,
      2961
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2963,
    "end": 2966,
    "range": [
      2963,
      2966
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2966,
    "end": 2967,
    "range": [
      2966,
      2967
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2968,
    "end": 2969,
    "range": [
      2968,
      2969
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2974,
    "end": 2975,
    "range": [
      2974,
      2975
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2976,
    "end": 2977,
    "range": [
      2976,
      2977
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2978,
    "end": 2983,
    "range": [
      2978,
      2983
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 2984,
    "end": 2986,
    "range": [
      2984,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2987,
    "end": 2988,
    "range": [
      2987,
      2988
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3008,
    "end": 3019,
    "range": [
      3008,
      3019
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3019,
    "end": 3020,
    "range": [
      3019,
      3020
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3020,
    "end": 3021,
    "range": [
      3020,
      3021
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3021,
    "end": 3022,
    "range": [
      3021,
      3022
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3023,
    "end": 3029,
    "range": [
      3023,
      3029
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3029,
    "end": 3030,
    "range": [
      3029,
      3030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3030,
    "end": 3031,
    "range": [
      3030,
      3031
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3051,
    "end": 3062,
    "range": [
      3051,
      3062
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3062,
    "end": 3063,
    "range": [
      3062,
      3063
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3063,
    "end": 3064,
    "range": [
      3063,
      3064
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3064,
    "end": 3065,
    "range": [
      3064,
      3065
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3066,
    "end": 3072,
    "range": [
      3066,
      3072
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3072,
    "end": 3073,
    "range": [
      3072,
      3073
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3073,
    "end": 3074,
    "range": [
      3073,
      3074
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3095,
    "end": 3106,
    "range": [
      3095,
      3106
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3106,
    "end": 3107,
    "range": [
      3106,
      3107
    ]
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 3107,
    "end": 3111,
    "range": [
      3107,
      3111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3111,
    "end": 3112,
    "range": [
      3111,
      3112
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3113,
    "end": 3116,
    "range": [
      3113,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3118,
    "end": 3119,
    "range": [
      3118,
      3119
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3124,
    "end": 3125,
    "range": [
      3124,
      3125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3126,
    "end": 3127,
    "range": [
      3126,
      3127
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3128,
    "end": 3133,
    "range": [
      3128,
      3133
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 3134,
    "end": 3136,
    "range": [
      3134,
      3136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3137,
    "end": 3138,
    "range": [
      3137,
      3138
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3158,
    "end": 3169,
    "range": [
      3158,
      3169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3170,
    "end": 3171,
    "range": [
      3170,
      3171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3171,
    "end": 3172,
    "range": [
      3171,
      3172
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3173,
    "end": 3179,
    "range": [
      3173,
      3179
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3179,
    "end": 3180,
    "range": [
      3179,
      3180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3180,
    "end": 3181,
    "range": [
      3180,
      3181
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3201,
    "end": 3212,
    "range": [
      3201,
      3212
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3212,
    "end": 3213,
    "range": [
      3212,
      3213
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3213,
    "end": 3214,
    "range": [
      3213,
      3214
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3214,
    "end": 3215,
    "range": [
      3214,
      3215
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3216,
    "end": 3222,
    "range": [
      3216,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3222,
    "end": 3223,
    "range": [
      3222,
      3223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3257,
    "end": 3268,
    "range": [
      3257,
      3268
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3268,
    "end": 3269,
    "range": [
      3268,
      3269
    ]
  },
  {
    "type": "Identifier",
    "value": "aorb",
    "start": 3269,
    "end": 3273,
    "range": [
      3269,
      3273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3273,
    "end": 3274,
    "range": [
      3273,
      3274
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3275,
    "end": 3278,
    "range": [
      3275,
      3278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3286,
    "end": 3287,
    "range": [
      3286,
      3287
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3288,
    "end": 3289,
    "range": [
      3288,
      3289
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3290,
    "end": 3293,
    "range": [
      3290,
      3293
    ]
  },
  {
    "type": "Identifier",
    "value": "c_i",
    "start": 3294,
    "end": 3297,
    "range": [
      3294,
      3297
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3298,
    "end": 3299,
    "range": [
      3298,
      3299
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3300,
    "end": 3303,
    "range": [
      3300,
      3303
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3304,
    "end": 3305,
    "range": [
      3304,
      3305
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3305,
    "end": 3306,
    "range": [
      3305,
      3306
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3306,
    "end": 3307,
    "range": [
      3306,
      3307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3307,
    "end": 3308,
    "range": [
      3307,
      3308
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3310,
    "end": 3313,
    "range": [
      3310,
      3313
    ]
  },
  {
    "type": "Identifier",
    "value": "c1_i_1",
    "start": 3314,
    "end": 3320,
    "range": [
      3314,
      3320
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3321,
    "end": 3322,
    "range": [
      3321,
      3322
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3323,
    "end": 3326,
    "range": [
      3323,
      3326
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3327,
    "end": 3329,
    "range": [
      3327,
      3329
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3329,
    "end": 3330,
    "range": [
      3329,
      3330
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3330,
    "end": 3332,
    "range": [
      3330,
      3332
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3332,
    "end": 3333,
    "range": [
      3332,
      3333
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3333,
    "end": 3334,
    "range": [
      3333,
      3334
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3335,
    "end": 3338,
    "range": [
      3335,
      3338
    ]
  },
  {
    "type": "Identifier",
    "value": "c1_i_2",
    "start": 3339,
    "end": 3345,
    "range": [
      3339,
      3345
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3346,
    "end": 3347,
    "range": [
      3346,
      3347
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3348,
    "end": 3351,
    "range": [
      3348,
      3351
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3352,
    "end": 3354,
    "range": [
      3352,
      3354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3355,
    "end": 3362,
    "range": [
      3355,
      3362
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3363,
    "end": 3364,
    "range": [
      3363,
      3364
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3365,
    "end": 3368,
    "range": [
      3365,
      3368
    ]
  },
  {
    "type": "Identifier",
    "value": "c2_i_1",
    "start": 3369,
    "end": 3375,
    "range": [
      3369,
      3375
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3376,
    "end": 3377,
    "range": [
      3376,
      3377
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3378,
    "end": 3381,
    "range": [
      3378,
      3381
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 3382,
    "end": 3384,
    "range": [
      3382,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3385,
    "end": 3387,
    "range": [
      3385,
      3387
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3387,
    "end": 3388,
    "range": [
      3387,
      3388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3388,
    "end": 3389,
    "range": [
      3388,
      3389
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3390,
    "end": 3393,
    "range": [
      3390,
      3393
    ]
  },
  {
    "type": "Identifier",
    "value": "c2_i_2",
    "start": 3394,
    "end": 3400,
    "range": [
      3394,
      3400
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3401,
    "end": 3402,
    "range": [
      3401,
      3402
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3403,
    "end": 3406,
    "range": [
      3403,
      3406
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 3407,
    "end": 3409,
    "range": [
      3407,
      3409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3409,
    "end": 3410,
    "range": [
      3409,
      3410
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3410,
    "end": 3417,
    "range": [
      3410,
      3417
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3417,
    "end": 3418,
    "range": [
      3417,
      3418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3418,
    "end": 3419,
    "range": [
      3418,
      3419
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3420,
    "end": 3423,
    "range": [
      3420,
      3423
    ]
  },
  {
    "type": "Identifier",
    "value": "c3_i_1",
    "start": 3424,
    "end": 3430,
    "range": [
      3424,
      3430
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3431,
    "end": 3432,
    "range": [
      3431,
      3432
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3433,
    "end": 3436,
    "range": [
      3433,
      3436
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 3437,
    "end": 3439,
    "range": [
      3437,
      3439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3439,
    "end": 3440,
    "range": [
      3439,
      3440
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3440,
    "end": 3442,
    "range": [
      3440,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3443,
    "end": 3444,
    "range": [
      3443,
      3444
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3445,
    "end": 3448,
    "range": [
      3445,
      3448
    ]
  },
  {
    "type": "Identifier",
    "value": "c3_i_2",
    "start": 3449,
    "end": 3455,
    "range": [
      3449,
      3455
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3456,
    "end": 3457,
    "range": [
      3456,
      3457
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3458,
    "end": 3461,
    "range": [
      3458,
      3461
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 3462,
    "end": 3464,
    "range": [
      3462,
      3464
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3464,
    "end": 3465,
    "range": [
      3464,
      3465
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3465,
    "end": 3472,
    "range": [
      3465,
      3472
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3472,
    "end": 3473,
    "range": [
      3472,
      3473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3475,
    "end": 3478,
    "range": [
      3475,
      3478
    ]
  },
  {
    "type": "Identifier",
    "value": "c4_i_1",
    "start": 3479,
    "end": 3485,
    "range": [
      3479,
      3485
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3486,
    "end": 3487,
    "range": [
      3486,
      3487
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3488,
    "end": 3491,
    "range": [
      3488,
      3491
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 3492,
    "end": 3494,
    "range": [
      3492,
      3494
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3494,
    "end": 3495,
    "range": [
      3494,
      3495
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3495,
    "end": 3497,
    "range": [
      3495,
      3497
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3497,
    "end": 3498,
    "range": [
      3497,
      3498
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3498,
    "end": 3499,
    "range": [
      3498,
      3499
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3500,
    "end": 3503,
    "range": [
      3500,
      3503
    ]
  },
  {
    "type": "Identifier",
    "value": "c4_i_2",
    "start": 3504,
    "end": 3510,
    "range": [
      3504,
      3510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3513,
    "end": 3516,
    "range": [
      3513,
      3516
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 3517,
    "end": 3519,
    "range": [
      3517,
      3519
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3519,
    "end": 3520,
    "range": [
      3519,
      3520
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3520,
    "end": 3527,
    "range": [
      3520,
      3527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3527,
    "end": 3528,
    "range": [
      3527,
      3528
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3528,
    "end": 3529,
    "range": [
      3528,
      3529
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3530,
    "end": 3533,
    "range": [
      3530,
      3533
    ]
  },
  {
    "type": "Identifier",
    "value": "c5_i_1",
    "start": 3534,
    "end": 3540,
    "range": [
      3534,
      3540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3541,
    "end": 3542,
    "range": [
      3541,
      3542
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3543,
    "end": 3546,
    "range": [
      3543,
      3546
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 3547,
    "end": 3549,
    "range": [
      3547,
      3549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3549,
    "end": 3550,
    "range": [
      3549,
      3550
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3550,
    "end": 3552,
    "range": [
      3550,
      3552
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3552,
    "end": 3553,
    "range": [
      3552,
      3553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3553,
    "end": 3554,
    "range": [
      3553,
      3554
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3555,
    "end": 3558,
    "range": [
      3555,
      3558
    ]
  },
  {
    "type": "Identifier",
    "value": "c5_i_2",
    "start": 3559,
    "end": 3565,
    "range": [
      3559,
      3565
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3566,
    "end": 3567,
    "range": [
      3566,
      3567
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3568,
    "end": 3571,
    "range": [
      3568,
      3571
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 3572,
    "end": 3574,
    "range": [
      3572,
      3574
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3574,
    "end": 3575,
    "range": [
      3574,
      3575
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3575,
    "end": 3582,
    "range": [
      3575,
      3582
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3582,
    "end": 3583,
    "range": [
      3582,
      3583
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3583,
    "end": 3584,
    "range": [
      3583,
      3584
    ]
  }
]
```
