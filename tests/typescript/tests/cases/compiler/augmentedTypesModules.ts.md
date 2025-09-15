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
        "start": 29,
        "end": 31
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 32,
        "end": 35
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 19,
      "end": 35
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
            "start": 40,
            "end": 42
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 45,
            "end": 46
          },
          "definite": false,
          "start": 40,
          "end": 46
        }
      ],
      "declare": false,
      "start": 36,
      "end": 47
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1a",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 83
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
                  "start": 90,
                  "end": 91
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 94,
                  "end": 95
                },
                "definite": false,
                "start": 90,
                "end": 95
              }
            ],
            "declare": false,
            "start": 86,
            "end": 96
          }
        ],
        "start": 84,
        "end": 98
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 70,
      "end": 98
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
            "start": 112,
            "end": 115
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 118,
            "end": 119
          },
          "definite": false,
          "start": 112,
          "end": 119
        }
      ],
      "declare": false,
      "start": 108,
      "end": 120
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 144
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
                    "start": 158,
                    "end": 159
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 162,
                    "end": 163
                  },
                  "definite": false,
                  "start": 158,
                  "end": 163
                }
              ],
              "declare": false,
              "start": 154,
              "end": 164
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 147,
            "end": 164
          }
        ],
        "start": 145,
        "end": 166
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 131,
      "end": 166
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
            "start": 180,
            "end": 183
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 186,
            "end": 187
          },
          "definite": false,
          "start": 180,
          "end": 187
        }
      ],
      "declare": false,
      "start": 176,
      "end": 188
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 212
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
                "start": 236,
                "end": 237
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
                      "start": 240,
                      "end": 243
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
                        "start": 247,
                        "end": 251
                      },
                      "start": 245,
                      "end": 251
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 240,
                    "end": 252
                  }
                ],
                "start": 238,
                "end": 254
              },
              "declare": false,
              "start": 226,
              "end": 254
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 219,
            "end": 254
          }
        ],
        "start": 213,
        "end": 256
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 199,
      "end": 256
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
            "start": 261,
            "end": 264
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 267,
            "end": 268
          },
          "definite": false,
          "start": 261,
          "end": 268
        }
      ],
      "declare": false,
      "start": 257,
      "end": 269
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1d",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 305
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
                "start": 334,
                "end": 335
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
                      "start": 338,
                      "end": 341
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
                        "start": 344,
                        "end": 347
                      },
                      "expression": false,
                      "start": 341,
                      "end": 347
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 338,
                    "end": 347
                  }
                ],
                "start": 336,
                "end": 349
              },
              "abstract": false,
              "declare": false,
              "start": 328,
              "end": 349
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 321,
            "end": 349
          }
        ],
        "start": 306,
        "end": 351
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 292,
      "end": 351
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
            "start": 356,
            "end": 359
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 362,
            "end": 363
          },
          "definite": false,
          "start": 356,
          "end": 363
        }
      ],
      "declare": false,
      "start": 352,
      "end": 364
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 411
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 412,
        "end": 415
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 399,
      "end": 415
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 427
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
        "start": 430,
        "end": 433
      },
      "expression": false,
      "start": 416,
      "end": 433
    },
    {
      "type": "EmptyStatement",
      "start": 433,
      "end": 434
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2a",
        "optional": false,
        "typeAnnotation": null,
        "start": 489,
        "end": 492
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
                  "start": 499,
                  "end": 500
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 503,
                  "end": 504
                },
                "definite": false,
                "start": 499,
                "end": 504
              }
            ],
            "declare": false,
            "start": 495,
            "end": 505
          }
        ],
        "start": 493,
        "end": 507
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 479,
      "end": 507
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2a",
        "optional": false,
        "typeAnnotation": null,
        "start": 517,
        "end": 520
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
        "start": 523,
        "end": 526
      },
      "expression": false,
      "start": 508,
      "end": 526
    },
    {
      "type": "EmptyStatement",
      "start": 526,
      "end": 527
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 581,
        "end": 584
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
                    "start": 598,
                    "end": 599
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 602,
                    "end": 603
                  },
                  "definite": false,
                  "start": 598,
                  "end": 603
                }
              ],
              "declare": false,
              "start": 594,
              "end": 604
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 587,
            "end": 604
          }
        ],
        "start": 585,
        "end": 606
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 571,
      "end": 606
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 616,
        "end": 619
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
        "start": 622,
        "end": 625
      },
      "expression": false,
      "start": 607,
      "end": 625
    },
    {
      "type": "EmptyStatement",
      "start": 625,
      "end": 626
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2c",
        "optional": false,
        "typeAnnotation": null,
        "start": 723,
        "end": 726
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
        "start": 729,
        "end": 732
      },
      "expression": false,
      "start": 714,
      "end": 732
    },
    {
      "type": "EmptyStatement",
      "start": 732,
      "end": 733
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2c",
        "optional": false,
        "typeAnnotation": null,
        "start": 745,
        "end": 748
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
                    "start": 762,
                    "end": 763
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 766,
                    "end": 767
                  },
                  "definite": false,
                  "start": 762,
                  "end": 767
                }
              ],
              "declare": false,
              "start": 758,
              "end": 768
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 751,
            "end": 768
          }
        ],
        "start": 749,
        "end": 770
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 735,
      "end": 770
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2d",
        "optional": false,
        "typeAnnotation": null,
        "start": 783,
        "end": 786
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 787,
        "end": 790
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 773,
      "end": 790
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2d",
        "optional": false,
        "typeAnnotation": null,
        "start": 808,
        "end": 811
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
          "start": 815,
          "end": 819
        },
        "start": 813,
        "end": 819
      },
      "body": null,
      "expression": false,
      "start": 791,
      "end": 820
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2e",
        "optional": false,
        "typeAnnotation": null,
        "start": 840,
        "end": 843
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
          "start": 847,
          "end": 851
        },
        "start": 845,
        "end": 851
      },
      "body": null,
      "expression": false,
      "start": 823,
      "end": 852
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2e",
        "optional": false,
        "typeAnnotation": null,
        "start": 864,
        "end": 867
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 868,
        "end": 871
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 854,
      "end": 871
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2f",
        "optional": false,
        "typeAnnotation": null,
        "start": 882,
        "end": 885
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
        "start": 888,
        "end": 891
      },
      "expression": false,
      "start": 873,
      "end": 891
    },
    {
      "type": "EmptyStatement",
      "start": 891,
      "end": 892
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2f",
        "optional": false,
        "typeAnnotation": null,
        "start": 903,
        "end": 906
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
                "start": 926,
                "end": 927
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
                      "start": 930,
                      "end": 933
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
                        "start": 937,
                        "end": 941
                      },
                      "start": 935,
                      "end": 941
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 930,
                    "end": 941
                  }
                ],
                "start": 928,
                "end": 943
              },
              "declare": false,
              "start": 916,
              "end": 943
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 909,
            "end": 943
          }
        ],
        "start": 907,
        "end": 945
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 893,
      "end": 945
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2g",
        "optional": false,
        "typeAnnotation": null,
        "start": 957,
        "end": 960
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
        "start": 963,
        "end": 966
      },
      "expression": false,
      "start": 948,
      "end": 966
    },
    {
      "type": "EmptyStatement",
      "start": 966,
      "end": 967
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2g",
        "optional": false,
        "typeAnnotation": null,
        "start": 978,
        "end": 981
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
                "start": 997,
                "end": 998
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
                      "start": 1001,
                      "end": 1004
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
                        "start": 1007,
                        "end": 1010
                      },
                      "expression": false,
                      "start": 1004,
                      "end": 1010
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1001,
                    "end": 1010
                  }
                ],
                "start": 999,
                "end": 1012
              },
              "abstract": false,
              "declare": false,
              "start": 991,
              "end": 1012
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 984,
            "end": 1012
          }
        ],
        "start": 982,
        "end": 1014
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 968,
      "end": 1014
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1048,
        "end": 1050
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 1051,
        "end": 1054
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1038,
      "end": 1054
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
        "start": 1061,
        "end": 1063
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1064,
        "end": 1067
      },
      "abstract": false,
      "declare": false,
      "start": 1055,
      "end": 1067
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1122,
        "end": 1125
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
                  "start": 1132,
                  "end": 1133
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1136,
                  "end": 1137
                },
                "definite": false,
                "start": 1132,
                "end": 1137
              }
            ],
            "declare": false,
            "start": 1128,
            "end": 1138
          }
        ],
        "start": 1126,
        "end": 1140
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1112,
      "end": 1140
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
        "start": 1147,
        "end": 1150
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
              "start": 1153,
              "end": 1156
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
                "start": 1159,
                "end": 1162
              },
              "expression": false,
              "start": 1156,
              "end": 1162
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1153,
            "end": 1162
          }
        ],
        "start": 1151,
        "end": 1164
      },
      "abstract": false,
      "declare": false,
      "start": 1141,
      "end": 1164
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
        "start": 1232,
        "end": 1235
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
              "start": 1238,
              "end": 1241
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
                "start": 1244,
                "end": 1247
              },
              "expression": false,
              "start": 1241,
              "end": 1247
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1238,
            "end": 1247
          }
        ],
        "start": 1236,
        "end": 1249
      },
      "abstract": false,
      "declare": false,
      "start": 1226,
      "end": 1249
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1260,
        "end": 1263
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
                  "start": 1270,
                  "end": 1271
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1274,
                  "end": 1275
                },
                "definite": false,
                "start": 1270,
                "end": 1275
              }
            ],
            "declare": false,
            "start": 1266,
            "end": 1276
          }
        ],
        "start": 1264,
        "end": 1278
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1250,
      "end": 1278
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
        "start": 1286,
        "end": 1289
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
              "start": 1292,
              "end": 1295
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
                "start": 1298,
                "end": 1301
              },
              "expression": false,
              "start": 1295,
              "end": 1301
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1292,
            "end": 1301
          }
        ],
        "start": 1290,
        "end": 1303
      },
      "abstract": false,
      "declare": false,
      "start": 1280,
      "end": 1303
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1314,
        "end": 1317
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
                    "start": 1331,
                    "end": 1332
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1335,
                    "end": 1336
                  },
                  "definite": false,
                  "start": 1331,
                  "end": 1336
                }
              ],
              "declare": false,
              "start": 1327,
              "end": 1337
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1320,
            "end": 1337
          }
        ],
        "start": 1318,
        "end": 1339
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1304,
      "end": 1339
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
        "start": 1356,
        "end": 1359
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
              "start": 1362,
              "end": 1365
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
                  "start": 1369,
                  "end": 1373
                },
                "start": 1367,
                "end": 1373
              },
              "body": null,
              "expression": false,
              "start": 1365,
              "end": 1373
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1362,
            "end": 1373
          }
        ],
        "start": 1360,
        "end": 1375
      },
      "abstract": false,
      "declare": true,
      "start": 1342,
      "end": 1375
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1386,
        "end": 1389
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
                    "start": 1403,
                    "end": 1404
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1407,
                    "end": 1408
                  },
                  "definite": false,
                  "start": 1403,
                  "end": 1408
                }
              ],
              "declare": false,
              "start": 1399,
              "end": 1409
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1392,
            "end": 1409
          }
        ],
        "start": 1390,
        "end": 1411
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1376,
      "end": 1411
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3e",
        "optional": false,
        "typeAnnotation": null,
        "start": 1424,
        "end": 1427
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
                    "start": 1441,
                    "end": 1442
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1445,
                    "end": 1446
                  },
                  "definite": false,
                  "start": 1441,
                  "end": 1446
                }
              ],
              "declare": false,
              "start": 1437,
              "end": 1447
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1430,
            "end": 1447
          }
        ],
        "start": 1428,
        "end": 1449
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1414,
      "end": 1449
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
        "start": 1465,
        "end": 1468
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
              "start": 1471,
              "end": 1474
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
                  "start": 1478,
                  "end": 1482
                },
                "start": 1476,
                "end": 1482
              },
              "body": null,
              "expression": false,
              "start": 1474,
              "end": 1482
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1471,
            "end": 1482
          }
        ],
        "start": 1469,
        "end": 1484
      },
      "abstract": false,
      "declare": true,
      "start": 1451,
      "end": 1484
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
        "start": 1501,
        "end": 1504
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
              "start": 1507,
              "end": 1510
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
                  "start": 1514,
                  "end": 1518
                },
                "start": 1512,
                "end": 1518
              },
              "body": null,
              "expression": false,
              "start": 1510,
              "end": 1518
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1507,
            "end": 1518
          }
        ],
        "start": 1505,
        "end": 1520
      },
      "abstract": false,
      "declare": true,
      "start": 1487,
      "end": 1520
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1531,
        "end": 1534
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
                "start": 1554,
                "end": 1555
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
                      "start": 1558,
                      "end": 1561
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
                        "start": 1565,
                        "end": 1569
                      },
                      "start": 1563,
                      "end": 1569
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1558,
                    "end": 1569
                  }
                ],
                "start": 1556,
                "end": 1571
              },
              "declare": false,
              "start": 1544,
              "end": 1571
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1537,
            "end": 1571
          }
        ],
        "start": 1535,
        "end": 1573
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1521,
      "end": 1573
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
        "start": 1589,
        "end": 1592
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
              "start": 1595,
              "end": 1598
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
                  "start": 1602,
                  "end": 1606
                },
                "start": 1600,
                "end": 1606
              },
              "body": null,
              "expression": false,
              "start": 1598,
              "end": 1606
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1595,
            "end": 1606
          }
        ],
        "start": 1593,
        "end": 1608
      },
      "abstract": false,
      "declare": true,
      "start": 1575,
      "end": 1608
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1619,
        "end": 1622
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
                "start": 1638,
                "end": 1639
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
                      "start": 1642,
                      "end": 1645
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
                        "start": 1648,
                        "end": 1651
                      },
                      "expression": false,
                      "start": 1645,
                      "end": 1651
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1642,
                    "end": 1651
                  }
                ],
                "start": 1640,
                "end": 1653
              },
              "abstract": false,
              "declare": false,
              "start": 1632,
              "end": 1653
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1625,
            "end": 1653
          }
        ],
        "start": 1623,
        "end": 1655
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1609,
      "end": 1655
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1707,
        "end": 1709
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 1710,
        "end": 1713
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1697,
      "end": 1713
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1719,
        "end": 1721
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 1722,
        "end": 1725
      },
      "const": false,
      "declare": false,
      "start": 1714,
      "end": 1725
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1737,
        "end": 1740
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
                  "start": 1747,
                  "end": 1748
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1751,
                  "end": 1752
                },
                "definite": false,
                "start": 1747,
                "end": 1752
              }
            ],
            "declare": false,
            "start": 1743,
            "end": 1753
          }
        ],
        "start": 1741,
        "end": 1755
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1727,
      "end": 1755
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1761,
        "end": 1764
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
              "start": 1767,
              "end": 1770
            },
            "initializer": null,
            "computed": false,
            "start": 1767,
            "end": 1770
          }
        ],
        "start": 1765,
        "end": 1772
      },
      "const": false,
      "declare": false,
      "start": 1756,
      "end": 1772
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1784,
        "end": 1787
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
                    "start": 1801,
                    "end": 1802
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1805,
                    "end": 1806
                  },
                  "definite": false,
                  "start": 1801,
                  "end": 1806
                }
              ],
              "declare": false,
              "start": 1797,
              "end": 1807
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1790,
            "end": 1807
          }
        ],
        "start": 1788,
        "end": 1809
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1774,
      "end": 1809
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1815,
        "end": 1818
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
              "start": 1821,
              "end": 1824
            },
            "initializer": null,
            "computed": false,
            "start": 1821,
            "end": 1824
          }
        ],
        "start": 1819,
        "end": 1826
      },
      "const": false,
      "declare": false,
      "start": 1810,
      "end": 1826
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1838,
        "end": 1841
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
              "start": 1854,
              "end": 1855
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
                    "start": 1858,
                    "end": 1861
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
                      "start": 1865,
                      "end": 1869
                    },
                    "start": 1863,
                    "end": 1869
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1858,
                  "end": 1869
                }
              ],
              "start": 1856,
              "end": 1871
            },
            "declare": false,
            "start": 1844,
            "end": 1871
          }
        ],
        "start": 1842,
        "end": 1873
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1828,
      "end": 1873
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1879,
        "end": 1882
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
              "start": 1885,
              "end": 1888
            },
            "initializer": null,
            "computed": false,
            "start": 1885,
            "end": 1888
          }
        ],
        "start": 1883,
        "end": 1890
      },
      "const": false,
      "declare": false,
      "start": 1874,
      "end": 1890
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1902,
        "end": 1905
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
              "start": 1914,
              "end": 1915
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
                    "start": 1918,
                    "end": 1921
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
                      "start": 1924,
                      "end": 1927
                    },
                    "expression": false,
                    "start": 1921,
                    "end": 1927
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1918,
                  "end": 1927
                }
              ],
              "start": 1916,
              "end": 1929
            },
            "abstract": false,
            "declare": false,
            "start": 1908,
            "end": 1929
          }
        ],
        "start": 1906,
        "end": 1931
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1892,
      "end": 1931
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1937,
        "end": 1940
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
              "start": 1943,
              "end": 1946
            },
            "initializer": null,
            "computed": false,
            "start": 1943,
            "end": 1946
          }
        ],
        "start": 1941,
        "end": 1948
      },
      "const": false,
      "declare": false,
      "start": 1932,
      "end": 1948
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1985,
        "end": 1987
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
                    "start": 2001,
                    "end": 2002
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2005,
                    "end": 2006
                  },
                  "definite": false,
                  "start": 2001,
                  "end": 2006
                }
              ],
              "declare": false,
              "start": 1997,
              "end": 2007
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1990,
            "end": 2007
          }
        ],
        "start": 1988,
        "end": 2009
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1975,
      "end": 2009
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2020,
        "end": 2022
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
                "start": 2042,
                "end": 2043
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
                      "start": 2046,
                      "end": 2049
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
                        "start": 2053,
                        "end": 2057
                      },
                      "start": 2051,
                      "end": 2057
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2046,
                    "end": 2057
                  }
                ],
                "start": 2044,
                "end": 2059
              },
              "declare": false,
              "start": 2032,
              "end": 2059
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 2025,
            "end": 2059
          }
        ],
        "start": 2023,
        "end": 2061
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2010,
      "end": 2061
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2140,
        "end": 2142
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
                    "start": 2156,
                    "end": 2157
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2160,
                    "end": 2161
                  },
                  "definite": false,
                  "start": 2156,
                  "end": 2161
                }
              ],
              "declare": false,
              "start": 2152,
              "end": 2162
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2145,
            "end": 2162
          }
        ],
        "start": 2143,
        "end": 2164
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2130,
      "end": 2164
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 2191
}
```
