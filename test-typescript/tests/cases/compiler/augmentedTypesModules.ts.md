__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 2104,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 19,
      "end": 32,
      "body": {
        "type": "TSModuleBlock",
        "start": 29,
        "end": 32,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 28,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 39,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 42,
            "end": 43,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 67,
      "end": 92,
      "body": {
        "type": "TSModuleBlock",
        "start": 78,
        "end": 92,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 80,
            "end": 90,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 84,
                "end": 89,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 88,
                  "end": 89,
                  "raw": "2",
                  "value": 2
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 77,
        "decorators": [],
        "name": "m1a",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 109,
            "decorators": [],
            "name": "m1a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 112,
            "end": 113,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 125,
      "end": 157,
      "body": {
        "type": "TSModuleBlock",
        "start": 136,
        "end": 157,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 138,
            "end": 155,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 145,
              "end": 155,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 149,
                  "end": 154,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 153,
                    "end": 154,
                    "raw": "2",
                    "value": 2
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 132,
        "end": 135,
        "decorators": [],
        "name": "m1b",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 178,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 174,
            "decorators": [],
            "name": "m1b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 177,
            "end": 178,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 190,
      "end": 244,
      "body": {
        "type": "TSModuleBlock",
        "start": 201,
        "end": 244,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 207,
            "end": 242,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 214,
              "end": 242,
              "body": {
                "type": "TSInterfaceBody",
                "start": 226,
                "end": 242,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 228,
                    "end": 240,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 231,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 233,
                      "end": 239,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 235,
                        "end": 239
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 200,
        "decorators": [],
        "name": "m1c",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 257,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 256,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 252,
            "decorators": [],
            "name": "m1c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 255,
            "end": 256,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 280,
      "end": 336,
      "body": {
        "type": "TSModuleBlock",
        "start": 291,
        "end": 336,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 306,
            "end": 334,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 313,
              "end": 334,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 321,
                "end": 334,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 323,
                    "end": 332,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 323,
                      "end": 326,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 326,
                      "end": 332,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 329,
                        "end": 332,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 319,
                "end": 320,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
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
        "start": 287,
        "end": 290,
        "decorators": [],
        "name": "m1d",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 337,
      "end": 349,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 341,
          "end": 348,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 341,
            "end": 344,
            "decorators": [],
            "name": "m1d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 347,
            "end": 348,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 384,
      "end": 397,
      "body": {
        "type": "TSModuleBlock",
        "start": 394,
        "end": 397,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 393,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 398,
      "end": 415,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 412,
        "end": 415,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 409,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 415,
      "end": 416
    },
    {
      "type": "TSModuleDeclaration",
      "start": 461,
      "end": 486,
      "body": {
        "type": "TSModuleBlock",
        "start": 472,
        "end": 486,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 474,
            "end": 484,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 478,
                "end": 483,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 479,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 482,
                  "end": 483,
                  "raw": "2",
                  "value": 2
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 468,
        "end": 471,
        "decorators": [],
        "name": "m2a",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 487,
      "end": 505,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 502,
        "end": 505,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 496,
        "end": 499,
        "decorators": [],
        "name": "m2a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 505,
      "end": 506
    },
    {
      "type": "TSModuleDeclaration",
      "start": 550,
      "end": 582,
      "body": {
        "type": "TSModuleBlock",
        "start": 561,
        "end": 582,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 563,
            "end": 580,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 570,
              "end": 580,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 574,
                  "end": 579,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 574,
                    "end": 575,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 578,
                    "end": 579,
                    "raw": "2",
                    "value": 2
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 557,
        "end": 560,
        "decorators": [],
        "name": "m2b",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 583,
      "end": 601,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 598,
        "end": 601,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 595,
        "decorators": [],
        "name": "m2b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 601,
      "end": 602
    },
    {
      "type": "FunctionDeclaration",
      "start": 690,
      "end": 708,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 705,
        "end": 708,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 699,
        "end": 702,
        "decorators": [],
        "name": "m2c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 708,
      "end": 709
    },
    {
      "type": "TSModuleDeclaration",
      "start": 711,
      "end": 743,
      "body": {
        "type": "TSModuleBlock",
        "start": 722,
        "end": 743,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 724,
            "end": 741,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 731,
              "end": 741,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 735,
                  "end": 740,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 735,
                    "end": 736,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 739,
                    "end": 740,
                    "raw": "2",
                    "value": 2
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 718,
        "end": 721,
        "decorators": [],
        "name": "m2c",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 746,
      "end": 760,
      "body": {
        "type": "TSModuleBlock",
        "start": 757,
        "end": 760,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 753,
        "end": 756,
        "decorators": [],
        "name": "m2d",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSDeclareFunction",
      "start": 761,
      "end": 790,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 778,
        "end": 781,
        "decorators": [],
        "name": "m2d",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 783,
        "end": 789,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 785,
          "end": 789
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 793,
      "end": 822,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 810,
        "end": 813,
        "decorators": [],
        "name": "m2e",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 815,
        "end": 821,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 817,
          "end": 821
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 824,
      "end": 838,
      "body": {
        "type": "TSModuleBlock",
        "start": 835,
        "end": 838,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 831,
        "end": 834,
        "decorators": [],
        "name": "m2e",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 840,
      "end": 858,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 855,
        "end": 858,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 849,
        "end": 852,
        "decorators": [],
        "name": "m2f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 858,
      "end": 859
    },
    {
      "type": "TSModuleDeclaration",
      "start": 860,
      "end": 909,
      "body": {
        "type": "TSModuleBlock",
        "start": 871,
        "end": 909,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 873,
            "end": 907,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 880,
              "end": 907,
              "body": {
                "type": "TSInterfaceBody",
                "start": 892,
                "end": 907,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 894,
                    "end": 905,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 894,
                      "end": 897,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 899,
                      "end": 905,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 901,
                        "end": 905
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 890,
                "end": 891,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 867,
        "end": 870,
        "decorators": [],
        "name": "m2f",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 912,
      "end": 930,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 927,
        "end": 930,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 921,
        "end": 924,
        "decorators": [],
        "name": "m2g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 930,
      "end": 931
    },
    {
      "type": "TSModuleDeclaration",
      "start": 932,
      "end": 975,
      "body": {
        "type": "TSModuleBlock",
        "start": 943,
        "end": 975,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 945,
            "end": 973,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 952,
              "end": 973,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 960,
                "end": 973,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 962,
                    "end": 971,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 962,
                      "end": 965,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 965,
                      "end": 971,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 968,
                        "end": 971,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 958,
                "end": 959,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
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
        "start": 939,
        "end": 942,
        "decorators": [],
        "name": "m2g",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 999,
      "end": 1012,
      "body": {
        "type": "TSModuleBlock",
        "start": 1009,
        "end": 1012,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1006,
        "end": 1008,
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 1013,
      "end": 1025,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1022,
        "end": 1025,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1019,
        "end": 1021,
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1070,
      "end": 1095,
      "body": {
        "type": "TSModuleBlock",
        "start": 1081,
        "end": 1095,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1083,
            "end": 1093,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1087,
                "end": 1092,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1087,
                  "end": 1088,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1091,
                  "end": 1092,
                  "raw": "2",
                  "value": 2
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1077,
        "end": 1080,
        "decorators": [],
        "name": "m3a",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 1096,
      "end": 1119,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1106,
        "end": 1119,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1108,
            "end": 1117,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1108,
              "end": 1111,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1111,
              "end": 1117,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1114,
                "end": 1117,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1102,
        "end": 1105,
        "decorators": [],
        "name": "m3a",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1181,
      "end": 1204,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1191,
        "end": 1204,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1193,
            "end": 1202,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1193,
              "end": 1196,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1196,
              "end": 1202,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1199,
                "end": 1202,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1187,
        "end": 1190,
        "decorators": [],
        "name": "m3b",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1205,
      "end": 1230,
      "body": {
        "type": "TSModuleBlock",
        "start": 1216,
        "end": 1230,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1218,
            "end": 1228,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1222,
                "end": 1227,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1222,
                  "end": 1223,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1226,
                  "end": 1227,
                  "raw": "2",
                  "value": 2
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1212,
        "end": 1215,
        "decorators": [],
        "name": "m3b",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 1232,
      "end": 1255,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1242,
        "end": 1255,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1244,
            "end": 1253,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1244,
              "end": 1247,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1247,
              "end": 1253,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1250,
                "end": 1253,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1238,
        "end": 1241,
        "decorators": [],
        "name": "m3c",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1256,
      "end": 1288,
      "body": {
        "type": "TSModuleBlock",
        "start": 1267,
        "end": 1288,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1269,
            "end": 1286,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1276,
              "end": 1286,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1280,
                  "end": 1285,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1280,
                    "end": 1281,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1284,
                    "end": 1285,
                    "raw": "2",
                    "value": 2
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 1263,
        "end": 1266,
        "decorators": [],
        "name": "m3c",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 1291,
      "end": 1324,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1309,
        "end": 1324,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1311,
            "end": 1322,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1311,
              "end": 1314,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1314,
              "end": 1322,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1316,
                "end": 1322,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1318,
                  "end": 1322
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1305,
        "end": 1308,
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1325,
      "end": 1357,
      "body": {
        "type": "TSModuleBlock",
        "start": 1336,
        "end": 1357,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1338,
            "end": 1355,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1345,
              "end": 1355,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1349,
                  "end": 1354,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1349,
                    "end": 1350,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1353,
                    "end": 1354,
                    "raw": "2",
                    "value": 2
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 1332,
        "end": 1335,
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1360,
      "end": 1392,
      "body": {
        "type": "TSModuleBlock",
        "start": 1371,
        "end": 1392,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1373,
            "end": 1390,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1380,
              "end": 1390,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1384,
                  "end": 1389,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1384,
                    "end": 1385,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1388,
                    "end": 1389,
                    "raw": "2",
                    "value": 2
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 1367,
        "end": 1370,
        "decorators": [],
        "name": "m3e",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 1394,
      "end": 1427,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1412,
        "end": 1427,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1414,
            "end": 1425,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1414,
              "end": 1417,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1417,
              "end": 1425,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1419,
                "end": 1425,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1421,
                  "end": 1425
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1408,
        "end": 1411,
        "decorators": [],
        "name": "m3e",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1430,
      "end": 1463,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1448,
        "end": 1463,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1450,
            "end": 1461,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1450,
              "end": 1453,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1453,
              "end": 1461,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1455,
                "end": 1461,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1457,
                  "end": 1461
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1444,
        "end": 1447,
        "decorators": [],
        "name": "m3f",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1464,
      "end": 1513,
      "body": {
        "type": "TSModuleBlock",
        "start": 1475,
        "end": 1513,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1477,
            "end": 1511,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1484,
              "end": 1511,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1496,
                "end": 1511,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 1498,
                    "end": 1509,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1498,
                      "end": 1501,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1503,
                      "end": 1509,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1505,
                        "end": 1509
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 1494,
                "end": 1495,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1471,
        "end": 1474,
        "decorators": [],
        "name": "m3f",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 1515,
      "end": 1548,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1533,
        "end": 1548,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1535,
            "end": 1546,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1535,
              "end": 1538,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1538,
              "end": 1546,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1540,
                "end": 1546,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1542,
                  "end": 1546
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1529,
        "end": 1532,
        "decorators": [],
        "name": "m3g",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1549,
      "end": 1592,
      "body": {
        "type": "TSModuleBlock",
        "start": 1560,
        "end": 1592,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1562,
            "end": 1590,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1569,
              "end": 1590,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1577,
                "end": 1590,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1579,
                    "end": 1588,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1579,
                      "end": 1582,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1582,
                      "end": 1588,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1585,
                        "end": 1588,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1575,
                "end": 1576,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
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
        "start": 1556,
        "end": 1559,
        "decorators": [],
        "name": "m3g",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1634,
      "end": 1647,
      "body": {
        "type": "TSModuleBlock",
        "start": 1644,
        "end": 1647,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1641,
        "end": 1643,
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1648,
      "end": 1659,
      "body": {
        "type": "TSEnumBody",
        "start": 1656,
        "end": 1659,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1653,
        "end": 1655,
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1661,
      "end": 1686,
      "body": {
        "type": "TSModuleBlock",
        "start": 1672,
        "end": 1686,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1674,
            "end": 1684,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1678,
                "end": 1683,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1678,
                  "end": 1679,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1682,
                  "end": 1683,
                  "raw": "2",
                  "value": 2
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1668,
        "end": 1671,
        "decorators": [],
        "name": "m4a",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1687,
      "end": 1703,
      "body": {
        "type": "TSEnumBody",
        "start": 1696,
        "end": 1703,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1698,
            "end": 1701,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1698,
              "end": 1701,
              "decorators": [],
              "name": "One",
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
        "start": 1692,
        "end": 1695,
        "decorators": [],
        "name": "m4a",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1705,
      "end": 1737,
      "body": {
        "type": "TSModuleBlock",
        "start": 1716,
        "end": 1737,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1718,
            "end": 1735,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1725,
              "end": 1735,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1729,
                  "end": 1734,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1729,
                    "end": 1730,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1733,
                    "end": 1734,
                    "raw": "2",
                    "value": 2
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 1712,
        "end": 1715,
        "decorators": [],
        "name": "m4b",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1738,
      "end": 1754,
      "body": {
        "type": "TSEnumBody",
        "start": 1747,
        "end": 1754,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1749,
            "end": 1752,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1749,
              "end": 1752,
              "decorators": [],
              "name": "One",
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
        "start": 1743,
        "end": 1746,
        "decorators": [],
        "name": "m4b",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1756,
      "end": 1798,
      "body": {
        "type": "TSModuleBlock",
        "start": 1767,
        "end": 1798,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 1769,
            "end": 1796,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1781,
              "end": 1796,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1783,
                  "end": 1794,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1783,
                    "end": 1786,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1788,
                    "end": 1794,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1790,
                      "end": 1794
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1779,
              "end": 1780,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1763,
        "end": 1766,
        "decorators": [],
        "name": "m4c",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1799,
      "end": 1815,
      "body": {
        "type": "TSEnumBody",
        "start": 1808,
        "end": 1815,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1810,
            "end": 1813,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1810,
              "end": 1813,
              "decorators": [],
              "name": "One",
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
        "start": 1804,
        "end": 1807,
        "decorators": [],
        "name": "m4c",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1817,
      "end": 1853,
      "body": {
        "type": "TSModuleBlock",
        "start": 1828,
        "end": 1853,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1830,
            "end": 1851,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1838,
              "end": 1851,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1840,
                  "end": 1849,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1840,
                    "end": 1843,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1843,
                    "end": 1849,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1846,
                      "end": 1849,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1836,
              "end": 1837,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1824,
        "end": 1827,
        "decorators": [],
        "name": "m4d",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1854,
      "end": 1870,
      "body": {
        "type": "TSEnumBody",
        "start": 1863,
        "end": 1870,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1865,
            "end": 1868,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1865,
              "end": 1868,
              "decorators": [],
              "name": "One",
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
        "start": 1859,
        "end": 1862,
        "decorators": [],
        "name": "m4d",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1897,
      "end": 1928,
      "body": {
        "type": "TSModuleBlock",
        "start": 1907,
        "end": 1928,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1909,
            "end": 1926,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1916,
              "end": 1926,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1920,
                  "end": 1925,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1920,
                    "end": 1921,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1924,
                    "end": 1925,
                    "raw": "2",
                    "value": 2
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 1904,
        "end": 1906,
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1929,
      "end": 1977,
      "body": {
        "type": "TSModuleBlock",
        "start": 1939,
        "end": 1977,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1941,
            "end": 1975,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1948,
              "end": 1975,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1960,
                "end": 1975,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 1962,
                    "end": 1973,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1962,
                      "end": 1965,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1967,
                      "end": 1973,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1969,
                        "end": 1973
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 1958,
                "end": 1959,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1936,
        "end": 1938,
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2046,
      "end": 2077,
      "body": {
        "type": "TSModuleBlock",
        "start": 2056,
        "end": 2077,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 2058,
            "end": 2075,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2065,
              "end": 2075,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2069,
                  "end": 2074,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2069,
                    "end": 2070,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2073,
                    "end": 2074,
                    "raw": "2",
                    "value": 2
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 2053,
        "end": 2055,
        "decorators": [],
        "name": "m6",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
