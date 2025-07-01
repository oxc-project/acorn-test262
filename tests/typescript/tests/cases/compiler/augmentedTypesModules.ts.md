__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 28
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 29,
        "end": 32
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 19,
      "end": 32
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
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 39
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 42,
            "end": 43
          },
          "definite": false,
          "start": 37,
          "end": 43
        }
      ],
      "declare": false,
      "start": 33,
      "end": 44
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1a",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 77
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 85
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 88,
                  "end": 89
                },
                "definite": false,
                "start": 84,
                "end": 89
              }
            ],
            "declare": false,
            "start": 80,
            "end": 90
          }
        ],
        "start": 78,
        "end": 92
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 67,
      "end": 92
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
            "name": "m1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 109
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 112,
            "end": 113
          },
          "definite": false,
          "start": 106,
          "end": 113
        }
      ],
      "declare": false,
      "start": 102,
      "end": 114
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 135
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 150
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 153,
                    "end": 154
                  },
                  "definite": false,
                  "start": 149,
                  "end": 154
                }
              ],
              "declare": false,
              "start": 145,
              "end": 155
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 138,
            "end": 155
          }
        ],
        "start": 136,
        "end": 157
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 125,
      "end": 157
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
            "name": "m1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 174
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 177,
            "end": 178
          },
          "definite": false,
          "start": 171,
          "end": 178
        }
      ],
      "declare": false,
      "start": 167,
      "end": 179
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 200
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 225
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 231
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 235,
                        "end": 239
                      },
                      "start": 233,
                      "end": 239
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 228,
                    "end": 240
                  }
                ],
                "start": 226,
                "end": 242
              },
              "declare": false,
              "start": 214,
              "end": 242
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 207,
            "end": 242
          }
        ],
        "start": 201,
        "end": 244
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 190,
      "end": 244
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
            "name": "m1c",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 252
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 255,
            "end": 256
          },
          "definite": false,
          "start": 249,
          "end": 256
        }
      ],
      "declare": false,
      "start": 245,
      "end": 257
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1d",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 290
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 320
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
                      "start": 323,
                      "end": 326
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
                        "start": 329,
                        "end": 332
                      },
                      "expression": false,
                      "start": 326,
                      "end": 332
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 323,
                    "end": 332
                  }
                ],
                "start": 321,
                "end": 334
              },
              "abstract": false,
              "declare": false,
              "start": 313,
              "end": 334
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 306,
            "end": 334
          }
        ],
        "start": 291,
        "end": 336
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 280,
      "end": 336
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
            "name": "m1d",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 344
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 347,
            "end": 348
          },
          "definite": false,
          "start": 341,
          "end": 348
        }
      ],
      "declare": false,
      "start": 337,
      "end": 349
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 393
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 394,
        "end": 397
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 384,
      "end": 397
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 407,
        "end": 409
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
        "start": 412,
        "end": 415
      },
      "expression": false,
      "start": 398,
      "end": 415
    },
    {
      "type": "EmptyStatement",
      "start": 415,
      "end": 416
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2a",
        "optional": false,
        "typeAnnotation": null,
        "start": 468,
        "end": 471
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 478,
                  "end": 479
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 482,
                  "end": 483
                },
                "definite": false,
                "start": 478,
                "end": 483
              }
            ],
            "declare": false,
            "start": 474,
            "end": 484
          }
        ],
        "start": 472,
        "end": 486
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 461,
      "end": 486
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2a",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 499
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
        "start": 502,
        "end": 505
      },
      "expression": false,
      "start": 487,
      "end": 505
    },
    {
      "type": "EmptyStatement",
      "start": 505,
      "end": 506
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 560
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 575
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 578,
                    "end": 579
                  },
                  "definite": false,
                  "start": 574,
                  "end": 579
                }
              ],
              "declare": false,
              "start": 570,
              "end": 580
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 563,
            "end": 580
          }
        ],
        "start": 561,
        "end": 582
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 550,
      "end": 582
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 592,
        "end": 595
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
        "start": 598,
        "end": 601
      },
      "expression": false,
      "start": 583,
      "end": 601
    },
    {
      "type": "EmptyStatement",
      "start": 601,
      "end": 602
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2c",
        "optional": false,
        "typeAnnotation": null,
        "start": 699,
        "end": 702
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
        "start": 705,
        "end": 708
      },
      "expression": false,
      "start": 690,
      "end": 708
    },
    {
      "type": "EmptyStatement",
      "start": 708,
      "end": 709
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2c",
        "optional": false,
        "typeAnnotation": null,
        "start": 718,
        "end": 721
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 735,
                    "end": 736
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 739,
                    "end": 740
                  },
                  "definite": false,
                  "start": 735,
                  "end": 740
                }
              ],
              "declare": false,
              "start": 731,
              "end": 741
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 724,
            "end": 741
          }
        ],
        "start": 722,
        "end": 743
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 711,
      "end": 743
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2d",
        "optional": false,
        "typeAnnotation": null,
        "start": 753,
        "end": 756
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 757,
        "end": 760
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 746,
      "end": 760
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2d",
        "optional": false,
        "typeAnnotation": null,
        "start": 778,
        "end": 781
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 785,
          "end": 789
        },
        "start": 783,
        "end": 789
      },
      "body": null,
      "expression": false,
      "start": 761,
      "end": 790
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2e",
        "optional": false,
        "typeAnnotation": null,
        "start": 810,
        "end": 813
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 817,
          "end": 821
        },
        "start": 815,
        "end": 821
      },
      "body": null,
      "expression": false,
      "start": 793,
      "end": 822
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2e",
        "optional": false,
        "typeAnnotation": null,
        "start": 831,
        "end": 834
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 835,
        "end": 838
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 824,
      "end": 838
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2f",
        "optional": false,
        "typeAnnotation": null,
        "start": 849,
        "end": 852
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
        "start": 855,
        "end": 858
      },
      "expression": false,
      "start": 840,
      "end": 858
    },
    {
      "type": "EmptyStatement",
      "start": 858,
      "end": 859
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2f",
        "optional": false,
        "typeAnnotation": null,
        "start": 867,
        "end": 870
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 891
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 894,
                      "end": 897
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 901,
                        "end": 905
                      },
                      "start": 899,
                      "end": 905
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 894,
                    "end": 905
                  }
                ],
                "start": 892,
                "end": 907
              },
              "declare": false,
              "start": 880,
              "end": 907
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 873,
            "end": 907
          }
        ],
        "start": 871,
        "end": 909
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 860,
      "end": 909
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2g",
        "optional": false,
        "typeAnnotation": null,
        "start": 921,
        "end": 924
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
        "start": 927,
        "end": 930
      },
      "expression": false,
      "start": 912,
      "end": 930
    },
    {
      "type": "EmptyStatement",
      "start": 930,
      "end": 931
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2g",
        "optional": false,
        "typeAnnotation": null,
        "start": 939,
        "end": 942
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 958,
                "end": 959
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
                      "start": 962,
                      "end": 965
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
                        "start": 968,
                        "end": 971
                      },
                      "expression": false,
                      "start": 965,
                      "end": 971
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 962,
                    "end": 971
                  }
                ],
                "start": 960,
                "end": 973
              },
              "abstract": false,
              "declare": false,
              "start": 952,
              "end": 973
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 945,
            "end": 973
          }
        ],
        "start": 943,
        "end": 975
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 932,
      "end": 975
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1006,
        "end": 1008
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 1009,
        "end": 1012
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 999,
      "end": 1012
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1019,
        "end": 1021
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1022,
        "end": 1025
      },
      "abstract": false,
      "declare": false,
      "start": 1013,
      "end": 1025
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1077,
        "end": 1080
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1087,
                  "end": 1088
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1091,
                  "end": 1092
                },
                "definite": false,
                "start": 1087,
                "end": 1092
              }
            ],
            "declare": false,
            "start": 1083,
            "end": 1093
          }
        ],
        "start": 1081,
        "end": 1095
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1070,
      "end": 1095
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1102,
        "end": 1105
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
              "start": 1108,
              "end": 1111
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
                "start": 1114,
                "end": 1117
              },
              "expression": false,
              "start": 1111,
              "end": 1117
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1108,
            "end": 1117
          }
        ],
        "start": 1106,
        "end": 1119
      },
      "abstract": false,
      "declare": false,
      "start": 1096,
      "end": 1119
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1187,
        "end": 1190
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
              "start": 1193,
              "end": 1196
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
                "start": 1199,
                "end": 1202
              },
              "expression": false,
              "start": 1196,
              "end": 1202
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1193,
            "end": 1202
          }
        ],
        "start": 1191,
        "end": 1204
      },
      "abstract": false,
      "declare": false,
      "start": 1181,
      "end": 1204
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1212,
        "end": 1215
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1223
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1226,
                  "end": 1227
                },
                "definite": false,
                "start": 1222,
                "end": 1227
              }
            ],
            "declare": false,
            "start": 1218,
            "end": 1228
          }
        ],
        "start": 1216,
        "end": 1230
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1205,
      "end": 1230
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1238,
        "end": 1241
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
              "start": 1244,
              "end": 1247
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
                "start": 1250,
                "end": 1253
              },
              "expression": false,
              "start": 1247,
              "end": 1253
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1244,
            "end": 1253
          }
        ],
        "start": 1242,
        "end": 1255
      },
      "abstract": false,
      "declare": false,
      "start": 1232,
      "end": 1255
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1263,
        "end": 1266
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1280,
                    "end": 1281
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1284,
                    "end": 1285
                  },
                  "definite": false,
                  "start": 1280,
                  "end": 1285
                }
              ],
              "declare": false,
              "start": 1276,
              "end": 1286
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1269,
            "end": 1286
          }
        ],
        "start": 1267,
        "end": 1288
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1256,
      "end": 1288
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1305,
        "end": 1308
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
              "start": 1311,
              "end": 1314
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1318,
                  "end": 1322
                },
                "start": 1316,
                "end": 1322
              },
              "body": null,
              "expression": false,
              "start": 1314,
              "end": 1322
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1311,
            "end": 1322
          }
        ],
        "start": 1309,
        "end": 1324
      },
      "abstract": false,
      "declare": true,
      "start": 1291,
      "end": 1324
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1332,
        "end": 1335
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1349,
                    "end": 1350
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1353,
                    "end": 1354
                  },
                  "definite": false,
                  "start": 1349,
                  "end": 1354
                }
              ],
              "declare": false,
              "start": 1345,
              "end": 1355
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1338,
            "end": 1355
          }
        ],
        "start": 1336,
        "end": 1357
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1325,
      "end": 1357
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3e",
        "optional": false,
        "typeAnnotation": null,
        "start": 1367,
        "end": 1370
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1384,
                    "end": 1385
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1388,
                    "end": 1389
                  },
                  "definite": false,
                  "start": 1384,
                  "end": 1389
                }
              ],
              "declare": false,
              "start": 1380,
              "end": 1390
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1373,
            "end": 1390
          }
        ],
        "start": 1371,
        "end": 1392
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1360,
      "end": 1392
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3e",
        "optional": false,
        "typeAnnotation": null,
        "start": 1408,
        "end": 1411
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
              "start": 1414,
              "end": 1417
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1421,
                  "end": 1425
                },
                "start": 1419,
                "end": 1425
              },
              "body": null,
              "expression": false,
              "start": 1417,
              "end": 1425
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1414,
            "end": 1425
          }
        ],
        "start": 1412,
        "end": 1427
      },
      "abstract": false,
      "declare": true,
      "start": 1394,
      "end": 1427
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1444,
        "end": 1447
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
              "start": 1450,
              "end": 1453
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1457,
                  "end": 1461
                },
                "start": 1455,
                "end": 1461
              },
              "body": null,
              "expression": false,
              "start": 1453,
              "end": 1461
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1450,
            "end": 1461
          }
        ],
        "start": 1448,
        "end": 1463
      },
      "abstract": false,
      "declare": true,
      "start": 1430,
      "end": 1463
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1471,
        "end": 1474
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1494,
                "end": 1495
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1498,
                      "end": 1501
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1505,
                        "end": 1509
                      },
                      "start": 1503,
                      "end": 1509
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1498,
                    "end": 1509
                  }
                ],
                "start": 1496,
                "end": 1511
              },
              "declare": false,
              "start": 1484,
              "end": 1511
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1477,
            "end": 1511
          }
        ],
        "start": 1475,
        "end": 1513
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1464,
      "end": 1513
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1529,
        "end": 1532
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
              "start": 1535,
              "end": 1538
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1542,
                  "end": 1546
                },
                "start": 1540,
                "end": 1546
              },
              "body": null,
              "expression": false,
              "start": 1538,
              "end": 1546
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1535,
            "end": 1546
          }
        ],
        "start": 1533,
        "end": 1548
      },
      "abstract": false,
      "declare": true,
      "start": 1515,
      "end": 1548
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1556,
        "end": 1559
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1575,
                "end": 1576
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
                      "start": 1579,
                      "end": 1582
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
                        "start": 1585,
                        "end": 1588
                      },
                      "expression": false,
                      "start": 1582,
                      "end": 1588
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1579,
                    "end": 1588
                  }
                ],
                "start": 1577,
                "end": 1590
              },
              "abstract": false,
              "declare": false,
              "start": 1569,
              "end": 1590
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1562,
            "end": 1590
          }
        ],
        "start": 1560,
        "end": 1592
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1549,
      "end": 1592
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1641,
        "end": 1643
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 1644,
        "end": 1647
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1634,
      "end": 1647
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1653,
        "end": 1655
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 1656,
        "end": 1659
      },
      "const": false,
      "declare": false,
      "start": 1648,
      "end": 1659
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1668,
        "end": 1671
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1678,
                  "end": 1679
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1682,
                  "end": 1683
                },
                "definite": false,
                "start": 1678,
                "end": 1683
              }
            ],
            "declare": false,
            "start": 1674,
            "end": 1684
          }
        ],
        "start": 1672,
        "end": 1686
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1661,
      "end": 1686
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1692,
        "end": 1695
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
              "start": 1698,
              "end": 1701
            },
            "initializer": null,
            "computed": false,
            "start": 1698,
            "end": 1701
          }
        ],
        "start": 1696,
        "end": 1703
      },
      "const": false,
      "declare": false,
      "start": 1687,
      "end": 1703
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1712,
        "end": 1715
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1729,
                    "end": 1730
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1733,
                    "end": 1734
                  },
                  "definite": false,
                  "start": 1729,
                  "end": 1734
                }
              ],
              "declare": false,
              "start": 1725,
              "end": 1735
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1718,
            "end": 1735
          }
        ],
        "start": 1716,
        "end": 1737
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1705,
      "end": 1737
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1743,
        "end": 1746
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
              "start": 1749,
              "end": 1752
            },
            "initializer": null,
            "computed": false,
            "start": 1749,
            "end": 1752
          }
        ],
        "start": 1747,
        "end": 1754
      },
      "const": false,
      "declare": false,
      "start": 1738,
      "end": 1754
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1763,
        "end": 1766
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 1779,
              "end": 1780
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1783,
                    "end": 1786
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1790,
                      "end": 1794
                    },
                    "start": 1788,
                    "end": 1794
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1783,
                  "end": 1794
                }
              ],
              "start": 1781,
              "end": 1796
            },
            "declare": false,
            "start": 1769,
            "end": 1796
          }
        ],
        "start": 1767,
        "end": 1798
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1756,
      "end": 1798
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1804,
        "end": 1807
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
              "start": 1810,
              "end": 1813
            },
            "initializer": null,
            "computed": false,
            "start": 1810,
            "end": 1813
          }
        ],
        "start": 1808,
        "end": 1815
      },
      "const": false,
      "declare": false,
      "start": 1799,
      "end": 1815
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1824,
        "end": 1827
      },
      "body": {
        "type": "TSModuleBlock",
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
              "start": 1836,
              "end": 1837
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
                    "start": 1840,
                    "end": 1843
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
                      "start": 1846,
                      "end": 1849
                    },
                    "expression": false,
                    "start": 1843,
                    "end": 1849
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1840,
                  "end": 1849
                }
              ],
              "start": 1838,
              "end": 1851
            },
            "abstract": false,
            "declare": false,
            "start": 1830,
            "end": 1851
          }
        ],
        "start": 1828,
        "end": 1853
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1817,
      "end": 1853
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1859,
        "end": 1862
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
              "start": 1865,
              "end": 1868
            },
            "initializer": null,
            "computed": false,
            "start": 1865,
            "end": 1868
          }
        ],
        "start": 1863,
        "end": 1870
      },
      "const": false,
      "declare": false,
      "start": 1854,
      "end": 1870
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1904,
        "end": 1906
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1920,
                    "end": 1921
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1924,
                    "end": 1925
                  },
                  "definite": false,
                  "start": 1920,
                  "end": 1925
                }
              ],
              "declare": false,
              "start": 1916,
              "end": 1926
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1909,
            "end": 1926
          }
        ],
        "start": 1907,
        "end": 1928
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1897,
      "end": 1928
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1936,
        "end": 1938
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1958,
                "end": 1959
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1962,
                      "end": 1965
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1969,
                        "end": 1973
                      },
                      "start": 1967,
                      "end": 1973
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1962,
                    "end": 1973
                  }
                ],
                "start": 1960,
                "end": 1975
              },
              "declare": false,
              "start": 1948,
              "end": 1975
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1941,
            "end": 1975
          }
        ],
        "start": 1939,
        "end": 1977
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1929,
      "end": 1977
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2053,
        "end": 2055
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2069,
                    "end": 2070
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2073,
                    "end": 2074
                  },
                  "definite": false,
                  "start": 2069,
                  "end": 2074
                }
              ],
              "declare": false,
              "start": 2065,
              "end": 2075
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2058,
            "end": 2075
          }
        ],
        "start": 2056,
        "end": 2077
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 2046,
      "end": 2077
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 2104
}
```
