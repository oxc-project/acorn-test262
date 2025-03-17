__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 80,
  "end": 989,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 94,
        "name": "Accessor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 97,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 99,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "name": "attr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 125,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 125,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 126,
        "end": 134,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 128,
          "end": 134
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 136,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 149,
        "name": "attr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 150,
          "end": 162,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 154,
            "end": 162,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 156,
              "end": 162
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 164,
          "end": 177,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 177,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 171,
              "end": 177
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 178,
        "end": 188,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 180,
          "end": 188,
          "typeName": {
            "type": "Identifier",
            "start": 180,
            "end": 188,
            "name": "Accessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 190,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 203,
        "name": "attr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 204,
          "end": 212,
          "name": "map",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 207,
            "end": 212,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 209,
              "end": 212
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 213,
        "end": 223,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 215,
          "end": 223,
          "typeName": {
            "type": "Identifier",
            "start": 215,
            "end": 223,
            "name": "Accessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 225,
      "end": 462,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 238,
        "name": "attr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 239,
          "end": 253,
          "name": "nameOrMap",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 253,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 250,
              "end": 253
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 255,
          "end": 269,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 269,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 263,
              "end": 269
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 276,
        "end": 462,
        "body": [
          {
            "type": "IfStatement",
            "start": 282,
            "end": 460,
            "test": {
              "type": "LogicalExpression",
              "start": 286,
              "end": 328,
              "left": {
                "type": "Identifier",
                "start": 286,
                "end": 295,
                "name": "nameOrMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 299,
                "end": 328,
                "left": {
                  "type": "UnaryExpression",
                  "start": 299,
                  "end": 315,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 315,
                    "name": "nameOrMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 320,
                  "end": 328,
                  "value": "object",
                  "raw": "\"object\""
                }
              }
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
                    "callee": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 386,
                      "name": "Accessor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
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
                    "value": "s",
                    "raw": "\"s\""
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 270,
        "end": 275,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 272,
          "end": 275
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 511,
      "end": 548,
      "id": {
        "type": "Identifier",
        "start": 520,
        "end": 525,
        "name": "attr2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 526,
          "end": 538,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 530,
            "end": 538,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 532,
              "end": 538
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 539,
        "end": 547,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 541,
          "end": 547
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 549,
      "end": 603,
      "id": {
        "type": "Identifier",
        "start": 558,
        "end": 563,
        "name": "attr2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 564,
          "end": 576,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 568,
            "end": 576,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 570,
              "end": 576
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 578,
          "end": 591,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 583,
            "end": 591,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 585,
              "end": 591
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 592,
        "end": 602,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 594,
          "end": 602,
          "typeName": {
            "type": "Identifier",
            "start": 594,
            "end": 602,
            "name": "Accessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 604,
      "end": 639,
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 618,
        "name": "attr2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 619,
          "end": 627,
          "name": "map",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 622,
            "end": 627,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 624,
              "end": 627
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 628,
        "end": 638,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 630,
          "end": 638,
          "typeName": {
            "type": "Identifier",
            "start": 630,
            "end": 638,
            "name": "Accessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 640,
      "end": 872,
      "id": {
        "type": "Identifier",
        "start": 649,
        "end": 654,
        "name": "attr2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 655,
          "end": 669,
          "name": "nameOrMap",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 664,
            "end": 669,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 666,
              "end": 669
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 671,
          "end": 685,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 677,
            "end": 685,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 679,
              "end": 685
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 695,
        "end": 872,
        "body": [
          {
            "type": "IfStatement",
            "start": 701,
            "end": 870,
            "test": {
              "type": "LogicalExpression",
              "start": 705,
              "end": 747,
              "left": {
                "type": "Identifier",
                "start": 705,
                "end": 714,
                "name": "nameOrMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 718,
                "end": 747,
                "left": {
                  "type": "UnaryExpression",
                  "start": 718,
                  "end": 734,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 734,
                    "name": "nameOrMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 739,
                  "end": 747,
                  "value": "object",
                  "raw": "\"object\""
                }
              }
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
                    "value": "t",
                    "raw": "\"t\""
                  }
                }
              ]
            },
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
                    "value": "s",
                    "raw": "\"s\""
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 686,
        "end": 694,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 688,
          "end": 694
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 926,
      "end": 948,
      "id": {
        "type": "Identifier",
        "start": 935,
        "end": 938,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 940,
        "end": 947,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 941,
          "end": 947
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 950,
      "end": 986,
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 962,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": "a",
              "raw": "\"a\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 964,
        "end": 971,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 965,
          "end": 971
        }
      }
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
