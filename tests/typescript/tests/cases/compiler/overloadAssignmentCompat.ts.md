__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Accessor",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 94
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 95,
        "end": 97
      },
      "abstract": false,
      "declare": false,
      "start": 80,
      "end": 97
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 112
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            },
            "start": 117,
            "end": 125
          },
          "start": 113,
          "end": 125
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 128,
          "end": 134
        },
        "start": 126,
        "end": 134
      },
      "body": null,
      "expression": false,
      "start": 99,
      "end": 135
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 149
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 156,
              "end": 162
            },
            "start": 154,
            "end": 162
          },
          "start": 150,
          "end": 162
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 171,
              "end": 177
            },
            "start": 169,
            "end": 177
          },
          "start": 164,
          "end": 177
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 188
          },
          "typeArguments": null,
          "start": 180,
          "end": 188
        },
        "start": 178,
        "end": 188
      },
      "body": null,
      "expression": false,
      "start": 136,
      "end": 189
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 203
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 209,
              "end": 212
            },
            "start": 207,
            "end": 212
          },
          "start": 204,
          "end": 212
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 223
          },
          "typeArguments": null,
          "start": 215,
          "end": 223
        },
        "start": 213,
        "end": 223
      },
      "body": null,
      "expression": false,
      "start": 190,
      "end": 224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 238
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nameOrMap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 250,
              "end": 253
            },
            "start": 248,
            "end": 253
          },
          "start": 239,
          "end": 253
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 263,
              "end": 269
            },
            "start": 261,
            "end": 269
          },
          "start": 255,
          "end": 269
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 272,
          "end": 275
        },
        "start": 270,
        "end": 275
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameOrMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 295
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameOrMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 315
                  },
                  "prefix": true,
                  "start": 299,
                  "end": 315
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "\"object\"",
                  "start": 320,
                  "end": 328
                },
                "start": 299,
                "end": 328
              },
              "start": 286,
              "end": 328
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Accessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 378,
                      "end": 386
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 374,
                    "end": 386
                  },
                  "start": 367,
                  "end": 387
                }
              ],
              "start": 330,
              "end": 393
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "s",
                    "raw": "\"s\"",
                    "start": 450,
                    "end": 453
                  },
                  "start": 443,
                  "end": 454
                }
              ],
              "start": 403,
              "end": 460
            },
            "start": 282,
            "end": 460
          }
        ],
        "start": 276,
        "end": 462
      },
      "expression": false,
      "start": 225,
      "end": 462
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr2",
        "optional": false,
        "typeAnnotation": null,
        "start": 520,
        "end": 525
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 532,
              "end": 538
            },
            "start": 530,
            "end": 538
          },
          "start": 526,
          "end": 538
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 541,
          "end": 547
        },
        "start": 539,
        "end": 547
      },
      "body": null,
      "expression": false,
      "start": 511,
      "end": 548
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr2",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 563
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 570,
              "end": 576
            },
            "start": 568,
            "end": 576
          },
          "start": 564,
          "end": 576
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 585,
              "end": 591
            },
            "start": 583,
            "end": 591
          },
          "start": 578,
          "end": 591
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 594,
            "end": 602
          },
          "typeArguments": null,
          "start": 594,
          "end": 602
        },
        "start": 592,
        "end": 602
      },
      "body": null,
      "expression": false,
      "start": 549,
      "end": 603
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr2",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 618
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 624,
              "end": 627
            },
            "start": 622,
            "end": 627
          },
          "start": 619,
          "end": 627
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 638
          },
          "typeArguments": null,
          "start": 630,
          "end": 638
        },
        "start": 628,
        "end": 638
      },
      "body": null,
      "expression": false,
      "start": 604,
      "end": 639
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr2",
        "optional": false,
        "typeAnnotation": null,
        "start": 649,
        "end": 654
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nameOrMap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 666,
              "end": 669
            },
            "start": 664,
            "end": 669
          },
          "start": 655,
          "end": 669
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 679,
              "end": 685
            },
            "start": 677,
            "end": 685
          },
          "start": 671,
          "end": 685
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 688,
          "end": 694
        },
        "start": 686,
        "end": 694
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameOrMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 714
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameOrMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 734
                  },
                  "prefix": true,
                  "start": 718,
                  "end": 734
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "\"object\"",
                  "start": 739,
                  "end": 747
                },
                "start": 718,
                "end": 747
              },
              "start": 705,
              "end": 747
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "t",
                    "raw": "\"t\"",
                    "start": 793,
                    "end": 796
                  },
                  "start": 786,
                  "end": 797
                }
              ],
              "start": 749,
              "end": 803
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "s",
                    "raw": "\"s\"",
                    "start": 860,
                    "end": 863
                  },
                  "start": 853,
                  "end": 864
                }
              ],
              "start": 813,
              "end": 870
            },
            "start": 701,
            "end": 870
          }
        ],
        "start": 695,
        "end": 872
      },
      "expression": false,
      "start": 640,
      "end": 872
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 935,
        "end": 938
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 941,
          "end": 947
        },
        "start": 940,
        "end": 947
      },
      "body": null,
      "expression": false,
      "start": 926,
      "end": 948
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 959,
        "end": 962
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
          "start": 965,
          "end": 971
        },
        "start": 964,
        "end": 971
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 981,
              "end": 984
            },
            "start": 974,
            "end": 984
          }
        ],
        "start": 972,
        "end": 986
      },
      "expression": false,
      "start": 950,
      "end": 986
    },
    {
      "type": "EmptyStatement",
      "start": 986,
      "end": 987
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 80,
  "end": 988
}
```
