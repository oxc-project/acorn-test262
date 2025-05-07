__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 80,
  "end": 988,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 97,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 97,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 94,
        "decorators": [],
        "name": "Accessor",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 99,
      "end": 135,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 125,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 125,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 126,
        "end": 134,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 128,
          "end": 134
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 136,
      "end": 189,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 149,
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 150,
          "end": 162,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 154,
            "end": 162,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 156,
              "end": 162
            }
          }
        },
        {
          "type": "Identifier",
          "start": 164,
          "end": 177,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 177,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 171,
              "end": 177
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 178,
        "end": 188,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 180,
          "end": 188,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 180,
            "end": 188,
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 190,
      "end": 224,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 203,
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 204,
          "end": 212,
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 207,
            "end": 212,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 209,
              "end": 212
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 213,
        "end": 223,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 215,
          "end": 223,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 215,
            "end": 223,
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 225,
      "end": 462,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 276,
        "end": 462,
        "body": [
          {
            "type": "IfStatement",
            "start": 282,
            "end": 460,
            "alternate": {
              "type": "BlockStatement",
              "start": 403,
              "end": 460,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 443,
                  "end": 454,
                  "argument": {
                    "type": "Literal",
                    "start": 450,
                    "end": 453,
                    "raw": "\"s\"",
                    "value": "s",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 330,
              "end": 393,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 367,
                  "end": 387,
                  "argument": {
                    "type": "NewExpression",
                    "start": 374,
                    "end": 386,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 386,
                      "decorators": [],
                      "name": "Accessor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 286,
              "end": 328,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 286,
                "end": 295,
                "decorators": [],
                "name": "nameOrMap",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 299,
                "end": 328,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 299,
                  "end": 315,
                  "argument": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 315,
                    "decorators": [],
                    "name": "nameOrMap",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 320,
                  "end": 328,
                  "raw": "\"object\"",
                  "value": "object",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 238,
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 239,
          "end": 253,
          "decorators": [],
          "name": "nameOrMap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 253,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 250,
              "end": 253
            }
          }
        },
        {
          "type": "Identifier",
          "start": 255,
          "end": 269,
          "decorators": [],
          "name": "value",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 269,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 263,
              "end": 269
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 270,
        "end": 275,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 272,
          "end": 275
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 511,
      "end": 548,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 520,
        "end": 525,
        "decorators": [],
        "name": "attr2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 526,
          "end": 538,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 530,
            "end": 538,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 532,
              "end": 538
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 539,
        "end": 547,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 541,
          "end": 547
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 549,
      "end": 603,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 558,
        "end": 563,
        "decorators": [],
        "name": "attr2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 564,
          "end": 576,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 568,
            "end": 576,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 570,
              "end": 576
            }
          }
        },
        {
          "type": "Identifier",
          "start": 578,
          "end": 591,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 583,
            "end": 591,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 585,
              "end": 591
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 592,
        "end": 602,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 594,
          "end": 602,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 594,
            "end": 602,
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 604,
      "end": 639,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 618,
        "decorators": [],
        "name": "attr2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 619,
          "end": 627,
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 622,
            "end": 627,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 624,
              "end": 627
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 628,
        "end": 638,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 630,
          "end": 638,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 630,
            "end": 638,
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 640,
      "end": 872,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 695,
        "end": 872,
        "body": [
          {
            "type": "IfStatement",
            "start": 701,
            "end": 870,
            "alternate": {
              "type": "BlockStatement",
              "start": 813,
              "end": 870,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 853,
                  "end": 864,
                  "argument": {
                    "type": "Literal",
                    "start": 860,
                    "end": 863,
                    "raw": "\"s\"",
                    "value": "s",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 749,
              "end": 803,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 786,
                  "end": 797,
                  "argument": {
                    "type": "Literal",
                    "start": 793,
                    "end": 796,
                    "raw": "\"t\"",
                    "value": "t",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 705,
              "end": 747,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 705,
                "end": 714,
                "decorators": [],
                "name": "nameOrMap",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 718,
                "end": 747,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 718,
                  "end": 734,
                  "argument": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 734,
                    "decorators": [],
                    "name": "nameOrMap",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 739,
                  "end": 747,
                  "raw": "\"object\"",
                  "value": "object",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 649,
        "end": 654,
        "decorators": [],
        "name": "attr2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 655,
          "end": 669,
          "decorators": [],
          "name": "nameOrMap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 664,
            "end": 669,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 666,
              "end": 669
            }
          }
        },
        {
          "type": "Identifier",
          "start": 671,
          "end": 685,
          "decorators": [],
          "name": "value",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 677,
            "end": 685,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 679,
              "end": 685
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 686,
        "end": 694,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 688,
          "end": 694
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 926,
      "end": 948,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 935,
        "end": 938,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 940,
        "end": 947,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 941,
          "end": 947
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 950,
      "end": 986,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 972,
        "end": 986,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 974,
            "end": 984,
            "argument": {
              "type": "Literal",
              "start": 981,
              "end": 984,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 962,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 964,
        "end": 971,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 965,
          "end": 971
        }
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 986,
      "end": 987
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
