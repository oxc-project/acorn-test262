__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 19,
    "end": 28,
    "range": [
      19,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 29,
    "end": 31,
    "range": [
      29,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 40,
    "end": 42,
    "range": [
      40,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 70,
    "end": 79,
    "range": [
      70,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "m1a",
    "start": 80,
    "end": 83,
    "range": [
      80,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 86,
    "end": 89,
    "range": [
      86,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 108,
    "end": 111,
    "range": [
      108,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "m1a",
    "start": 112,
    "end": 115,
    "range": [
      112,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 131,
    "end": 140,
    "range": [
      131,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "m1b",
    "start": 141,
    "end": 144,
    "range": [
      141,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 147,
    "end": 153,
    "range": [
      147,
      153
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 154,
    "end": 157,
    "range": [
      154,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 176,
    "end": 179,
    "range": [
      176,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "m1b",
    "start": 180,
    "end": 183,
    "range": [
      180,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 199,
    "end": 208,
    "range": [
      199,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "m1c",
    "start": 209,
    "end": 212,
    "range": [
      209,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 219,
    "end": 225,
    "range": [
      219,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 226,
    "end": 235,
    "range": [
      226,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 240,
    "end": 243,
    "range": [
      240,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244,
    "range": [
      243,
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
    "type": "Keyword",
    "value": "void",
    "start": 247,
    "end": 251,
    "range": [
      247,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 257,
    "end": 260,
    "range": [
      257,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "m1c",
    "start": 261,
    "end": 264,
    "range": [
      261,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 292,
    "end": 301,
    "range": [
      292,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "m1d",
    "start": 302,
    "end": 305,
    "range": [
      302,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 321,
    "end": 327,
    "range": [
      321,
      327
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 328,
    "end": 333,
    "range": [
      328,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 338,
    "end": 341,
    "range": [
      338,
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
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 352,
    "end": 355,
    "range": [
      352,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "m1d",
    "start": 356,
    "end": 359,
    "range": [
      356,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 399,
    "end": 408,
    "range": [
      399,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 409,
    "end": 411,
    "range": [
      409,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 416,
    "end": 424,
    "range": [
      416,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 425,
    "end": 427,
    "range": [
      425,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 479,
    "end": 488,
    "range": [
      479,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "m2a",
    "start": 489,
    "end": 492,
    "range": [
      489,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 495,
    "end": 498,
    "range": [
      495,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 508,
    "end": 516,
    "range": [
      508,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "m2a",
    "start": 517,
    "end": 520,
    "range": [
      517,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 571,
    "end": 580,
    "range": [
      571,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "m2b",
    "start": 581,
    "end": 584,
    "range": [
      581,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 587,
    "end": 593,
    "range": [
      587,
      593
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 594,
    "end": 597,
    "range": [
      594,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 607,
    "end": 615,
    "range": [
      607,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "m2b",
    "start": 616,
    "end": 619,
    "range": [
      616,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 714,
    "end": 722,
    "range": [
      714,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "m2c",
    "start": 723,
    "end": 726,
    "range": [
      723,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 735,
    "end": 744,
    "range": [
      735,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "m2c",
    "start": 745,
    "end": 748,
    "range": [
      745,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 751,
    "end": 757,
    "range": [
      751,
      757
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 758,
    "end": 761,
    "range": [
      758,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 773,
    "end": 782,
    "range": [
      773,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "m2d",
    "start": 783,
    "end": 786,
    "range": [
      783,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 791,
    "end": 798,
    "range": [
      791,
      798
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 799,
    "end": 807,
    "range": [
      799,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "m2d",
    "start": 808,
    "end": 811,
    "range": [
      808,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 815,
    "end": 819,
    "range": [
      815,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 823,
    "end": 830,
    "range": [
      823,
      830
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 831,
    "end": 839,
    "range": [
      831,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "m2e",
    "start": 840,
    "end": 843,
    "range": [
      840,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 847,
    "end": 851,
    "range": [
      847,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 854,
    "end": 863,
    "range": [
      854,
      863
    ]
  },
  {
    "type": "Identifier",
    "value": "m2e",
    "start": 864,
    "end": 867,
    "range": [
      864,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 873,
    "end": 881,
    "range": [
      873,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "m2f",
    "start": 882,
    "end": 885,
    "range": [
      882,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 893,
    "end": 902,
    "range": [
      893,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "m2f",
    "start": 903,
    "end": 906,
    "range": [
      903,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 909,
    "end": 915,
    "range": [
      909,
      915
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 916,
    "end": 925,
    "range": [
      916,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 930,
    "end": 933,
    "range": [
      930,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 937,
    "end": 941,
    "range": [
      937,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 948,
    "end": 956,
    "range": [
      948,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "m2g",
    "start": 957,
    "end": 960,
    "range": [
      957,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 968,
    "end": 977,
    "range": [
      968,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "m2g",
    "start": 978,
    "end": 981,
    "range": [
      978,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 984,
    "end": 990,
    "range": [
      984,
      990
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 991,
    "end": 996,
    "range": [
      991,
      996
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1001,
    "end": 1004,
    "range": [
      1001,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1038,
    "end": 1047,
    "range": [
      1038,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1048,
    "end": 1050,
    "range": [
      1048,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1055,
    "end": 1060,
    "range": [
      1055,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1061,
    "end": 1063,
    "range": [
      1061,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1112,
    "end": 1121,
    "range": [
      1112,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "m3a",
    "start": 1122,
    "end": 1125,
    "range": [
      1122,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1128,
    "end": 1131,
    "range": [
      1128,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1141,
    "end": 1146,
    "range": [
      1141,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "m3a",
    "start": 1147,
    "end": 1150,
    "range": [
      1147,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1153,
    "end": 1156,
    "range": [
      1153,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1226,
    "end": 1231,
    "range": [
      1226,
      1231
    ]
  },
  {
    "type": "Identifier",
    "value": "m3b",
    "start": 1232,
    "end": 1235,
    "range": [
      1232,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1238,
    "end": 1241,
    "range": [
      1238,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1250,
    "end": 1259,
    "range": [
      1250,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "m3b",
    "start": 1260,
    "end": 1263,
    "range": [
      1260,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1266,
    "end": 1269,
    "range": [
      1266,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1280,
    "end": 1285,
    "range": [
      1280,
      1285
    ]
  },
  {
    "type": "Identifier",
    "value": "m3c",
    "start": 1286,
    "end": 1289,
    "range": [
      1286,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1292,
    "end": 1295,
    "range": [
      1292,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1304,
    "end": 1313,
    "range": [
      1304,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "m3c",
    "start": 1314,
    "end": 1317,
    "range": [
      1314,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1320,
    "end": 1326,
    "range": [
      1320,
      1326
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1327,
    "end": 1330,
    "range": [
      1327,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1342,
    "end": 1349,
    "range": [
      1342,
      1349
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1350,
    "end": 1355,
    "range": [
      1350,
      1355
    ]
  },
  {
    "type": "Identifier",
    "value": "m3d",
    "start": 1356,
    "end": 1359,
    "range": [
      1356,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1362,
    "end": 1365,
    "range": [
      1362,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1369,
    "end": 1373,
    "range": [
      1369,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1376,
    "end": 1385,
    "range": [
      1376,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "m3d",
    "start": 1386,
    "end": 1389,
    "range": [
      1386,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1392,
    "end": 1398,
    "range": [
      1392,
      1398
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1399,
    "end": 1402,
    "range": [
      1399,
      1402
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1407,
    "end": 1408,
    "range": [
      1407,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1414,
    "end": 1423,
    "range": [
      1414,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "m3e",
    "start": 1424,
    "end": 1427,
    "range": [
      1424,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1430,
    "end": 1436,
    "range": [
      1430,
      1436
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1437,
    "end": 1440,
    "range": [
      1437,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1451,
    "end": 1458,
    "range": [
      1451,
      1458
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1459,
    "end": 1464,
    "range": [
      1459,
      1464
    ]
  },
  {
    "type": "Identifier",
    "value": "m3e",
    "start": 1465,
    "end": 1468,
    "range": [
      1465,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1471,
    "end": 1474,
    "range": [
      1471,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1478,
    "end": 1482,
    "range": [
      1478,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1487,
    "end": 1494,
    "range": [
      1487,
      1494
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1495,
    "end": 1500,
    "range": [
      1495,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "m3f",
    "start": 1501,
    "end": 1504,
    "range": [
      1501,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1507,
    "end": 1510,
    "range": [
      1507,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1514,
    "end": 1518,
    "range": [
      1514,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1521,
    "end": 1530,
    "range": [
      1521,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "m3f",
    "start": 1531,
    "end": 1534,
    "range": [
      1531,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1537,
    "end": 1543,
    "range": [
      1537,
      1543
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1544,
    "end": 1553,
    "range": [
      1544,
      1553
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1558,
    "end": 1561,
    "range": [
      1558,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1565,
    "end": 1569,
    "range": [
      1565,
      1569
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1575,
    "end": 1582,
    "range": [
      1575,
      1582
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1583,
    "end": 1588,
    "range": [
      1583,
      1588
    ]
  },
  {
    "type": "Identifier",
    "value": "m3g",
    "start": 1589,
    "end": 1592,
    "range": [
      1589,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1595,
    "end": 1598,
    "range": [
      1595,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1602,
    "end": 1606,
    "range": [
      1602,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1609,
    "end": 1618,
    "range": [
      1609,
      1618
    ]
  },
  {
    "type": "Identifier",
    "value": "m3g",
    "start": 1619,
    "end": 1622,
    "range": [
      1619,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1625,
    "end": 1631,
    "range": [
      1625,
      1631
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1632,
    "end": 1637,
    "range": [
      1632,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1642,
    "end": 1645,
    "range": [
      1642,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1697,
    "end": 1706,
    "range": [
      1697,
      1706
    ]
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1707,
    "end": 1709,
    "range": [
      1707,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1714,
    "end": 1718,
    "range": [
      1714,
      1718
    ]
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1719,
    "end": 1721,
    "range": [
      1719,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1727,
    "end": 1736,
    "range": [
      1727,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "m4a",
    "start": 1737,
    "end": 1740,
    "range": [
      1737,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1743,
    "end": 1746,
    "range": [
      1743,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1756,
    "end": 1760,
    "range": [
      1756,
      1760
    ]
  },
  {
    "type": "Identifier",
    "value": "m4a",
    "start": 1761,
    "end": 1764,
    "range": [
      1761,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 1767,
    "end": 1770,
    "range": [
      1767,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1774,
    "end": 1783,
    "range": [
      1774,
      1783
    ]
  },
  {
    "type": "Identifier",
    "value": "m4b",
    "start": 1784,
    "end": 1787,
    "range": [
      1784,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1790,
    "end": 1796,
    "range": [
      1790,
      1796
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1797,
    "end": 1800,
    "range": [
      1797,
      1800
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1810,
    "end": 1814,
    "range": [
      1810,
      1814
    ]
  },
  {
    "type": "Identifier",
    "value": "m4b",
    "start": 1815,
    "end": 1818,
    "range": [
      1815,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 1821,
    "end": 1824,
    "range": [
      1821,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1828,
    "end": 1837,
    "range": [
      1828,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "m4c",
    "start": 1838,
    "end": 1841,
    "range": [
      1838,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1844,
    "end": 1853,
    "range": [
      1844,
      1853
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1858,
    "end": 1861,
    "range": [
      1858,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1865,
    "end": 1869,
    "range": [
      1865,
      1869
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1874,
    "end": 1878,
    "range": [
      1874,
      1878
    ]
  },
  {
    "type": "Identifier",
    "value": "m4c",
    "start": 1879,
    "end": 1882,
    "range": [
      1879,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 1885,
    "end": 1888,
    "range": [
      1885,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1892,
    "end": 1901,
    "range": [
      1892,
      1901
    ]
  },
  {
    "type": "Identifier",
    "value": "m4d",
    "start": 1902,
    "end": 1905,
    "range": [
      1902,
      1905
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1908,
    "end": 1913,
    "range": [
      1908,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1918,
    "end": 1921,
    "range": [
      1918,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1932,
    "end": 1936,
    "range": [
      1932,
      1936
    ]
  },
  {
    "type": "Identifier",
    "value": "m4d",
    "start": 1937,
    "end": 1940,
    "range": [
      1937,
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
    "type": "Identifier",
    "value": "One",
    "start": 1943,
    "end": 1946,
    "range": [
      1943,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1975,
    "end": 1984,
    "range": [
      1975,
      1984
    ]
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1985,
    "end": 1987,
    "range": [
      1985,
      1987
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1990,
    "end": 1996,
    "range": [
      1990,
      1996
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1997,
    "end": 2000,
    "range": [
      1997,
      2000
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2010,
    "end": 2019,
    "range": [
      2010,
      2019
    ]
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 2020,
    "end": 2022,
    "range": [
      2020,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2025,
    "end": 2031,
    "range": [
      2025,
      2031
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2032,
    "end": 2041,
    "range": [
      2032,
      2041
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2046,
    "end": 2049,
    "range": [
      2046,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2053,
    "end": 2057,
    "range": [
      2053,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2130,
    "end": 2139,
    "range": [
      2130,
      2139
    ]
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 2140,
    "end": 2142,
    "range": [
      2140,
      2142
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2145,
    "end": 2151,
    "range": [
      2145,
      2151
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2152,
    "end": 2155,
    "range": [
      2152,
      2155
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2156,
    "end": 2157,
    "range": [
      2156,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  }
]
```
