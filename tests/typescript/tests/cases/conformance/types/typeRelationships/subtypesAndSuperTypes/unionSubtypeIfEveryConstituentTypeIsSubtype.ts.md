__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 15
            },
            "initializer": null,
            "computed": false,
            "start": 13,
            "end": 15
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e2",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 23
            },
            "initializer": null,
            "computed": false,
            "start": 21,
            "end": 23
          }
        ],
        "start": 7,
        "end": 25
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 117
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 128,
                    "end": 134
                  },
                  "start": 126,
                  "end": 134
                },
                "start": 125,
                "end": 134
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 137,
                "end": 140
              },
              "start": 135,
              "end": 140
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 124,
            "end": 141
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 149
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 151,
                    "end": 157
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 160,
                    "end": 166
                  }
                ],
                "start": 151,
                "end": 166
              },
              "start": 149,
              "end": 166
            },
            "accessibility": null,
            "static": false,
            "start": 146,
            "end": 167
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 182
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 185
                    },
                    "typeArguments": null,
                    "start": 184,
                    "end": 185
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 188,
                    "end": 194
                  }
                ],
                "start": 184,
                "end": 194
              },
              "start": 182,
              "end": 194
            },
            "accessibility": null,
            "static": false,
            "start": 178,
            "end": 195
          }
        ],
        "start": 118,
        "end": 203
      },
      "declare": false,
      "start": 106,
      "end": 203
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 216
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 227,
                    "end": 233
                  },
                  "start": 225,
                  "end": 233
                },
                "start": 224,
                "end": 233
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 236,
                "end": 242
              },
              "start": 234,
              "end": 242
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 223,
            "end": 243
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 323
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 325,
                    "end": 331
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 334,
                    "end": 340
                  }
                ],
                "start": 325,
                "end": 340
              },
              "start": 323,
              "end": 340
            },
            "accessibility": null,
            "static": false,
            "start": 320,
            "end": 341
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 391
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 393,
                      "end": 394
                    },
                    "typeArguments": null,
                    "start": 393,
                    "end": 394
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 397,
                    "end": 403
                  }
                ],
                "start": 393,
                "end": 403
              },
              "start": 391,
              "end": 403
            },
            "accessibility": null,
            "static": false,
            "start": 387,
            "end": 404
          }
        ],
        "start": 217,
        "end": 448
      },
      "declare": false,
      "start": 204,
      "end": 448
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 460,
        "end": 462
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 473,
                    "end": 479
                  },
                  "start": 471,
                  "end": 479
                },
                "start": 470,
                "end": 479
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 482,
                "end": 488
              },
              "start": 480,
              "end": 488
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 469,
            "end": 489
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 497
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 499,
                    "end": 505
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 508,
                    "end": 514
                  }
                ],
                "start": 499,
                "end": 514
              },
              "start": 497,
              "end": 514
            },
            "accessibility": null,
            "static": false,
            "start": 494,
            "end": 515
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 560,
              "end": 564
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 566,
                      "end": 567
                    },
                    "typeArguments": null,
                    "start": 566,
                    "end": 567
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 570,
                    "end": 576
                  }
                ],
                "start": 566,
                "end": 576
              },
              "start": 564,
              "end": 576
            },
            "accessibility": null,
            "static": false,
            "start": 560,
            "end": 577
          }
        ],
        "start": 463,
        "end": 628
      },
      "declare": false,
      "start": 450,
      "end": 628
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 655,
        "end": 657
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 668,
                    "end": 674
                  },
                  "start": 666,
                  "end": 674
                },
                "start": 665,
                "end": 674
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 677,
                "end": 684
              },
              "start": 675,
              "end": 684
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 664,
            "end": 685
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 690,
              "end": 693
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 695,
                    "end": 701
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 704,
                    "end": 710
                  }
                ],
                "start": 695,
                "end": 710
              },
              "start": 693,
              "end": 710
            },
            "accessibility": null,
            "static": false,
            "start": 690,
            "end": 711
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 720
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 722,
                      "end": 723
                    },
                    "typeArguments": null,
                    "start": 722,
                    "end": 723
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 726,
                    "end": 732
                  }
                ],
                "start": 722,
                "end": 732
              },
              "start": 720,
              "end": 732
            },
            "accessibility": null,
            "static": false,
            "start": 716,
            "end": 733
          }
        ],
        "start": 658,
        "end": 735
      },
      "declare": false,
      "start": 645,
      "end": 735
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 750
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 761,
                    "end": 767
                  },
                  "start": 759,
                  "end": 767
                },
                "start": 758,
                "end": 767
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 770,
                  "end": 774
                },
                "typeArguments": null,
                "start": 770,
                "end": 774
              },
              "start": 768,
              "end": 774
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 757,
            "end": 775
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 783
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 785,
                    "end": 791
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 794,
                    "end": 800
                  }
                ],
                "start": 785,
                "end": 800
              },
              "start": 783,
              "end": 800
            },
            "accessibility": null,
            "static": false,
            "start": 780,
            "end": 801
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 810
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 812,
                      "end": 813
                    },
                    "typeArguments": null,
                    "start": 812,
                    "end": 813
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 816,
                    "end": 822
                  }
                ],
                "start": 812,
                "end": 822
              },
              "start": 810,
              "end": 822
            },
            "accessibility": null,
            "static": false,
            "start": 806,
            "end": 823
          }
        ],
        "start": 751,
        "end": 825
      },
      "declare": false,
      "start": 738,
      "end": 825
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I6",
        "optional": false,
        "typeAnnotation": null,
        "start": 838,
        "end": 840
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 851,
                    "end": 857
                  },
                  "start": 849,
                  "end": 857
                },
                "start": 848,
                "end": 857
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 866
                },
                "typeArguments": null,
                "start": 860,
                "end": 866
              },
              "start": 858,
              "end": 866
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 847,
            "end": 867
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 872,
              "end": 875
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 877,
                    "end": 883
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 886,
                    "end": 892
                  }
                ],
                "start": 877,
                "end": 892
              },
              "start": 875,
              "end": 892
            },
            "accessibility": null,
            "static": false,
            "start": 872,
            "end": 893
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 902
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 904,
                      "end": 905
                    },
                    "typeArguments": null,
                    "start": 904,
                    "end": 905
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 908,
                    "end": 914
                  }
                ],
                "start": 904,
                "end": 914
              },
              "start": 902,
              "end": 914
            },
            "accessibility": null,
            "static": false,
            "start": 898,
            "end": 915
          }
        ],
        "start": 841,
        "end": 917
      },
      "declare": false,
      "start": 828,
      "end": 917
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I7",
        "optional": false,
        "typeAnnotation": null,
        "start": 930,
        "end": 932
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 943,
                    "end": 949
                  },
                  "start": 941,
                  "end": 949
                },
                "start": 940,
                "end": 949
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 954,
                      "end": 957
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 959,
                        "end": 965
                      },
                      "start": 957,
                      "end": 965
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 954,
                    "end": 965
                  }
                ],
                "start": 952,
                "end": 967
              },
              "start": 950,
              "end": 967
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 939,
            "end": 968
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 976
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 978,
                    "end": 984
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 987,
                    "end": 993
                  }
                ],
                "start": 978,
                "end": 993
              },
              "start": 976,
              "end": 993
            },
            "accessibility": null,
            "static": false,
            "start": 973,
            "end": 994
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1003
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1005,
                      "end": 1006
                    },
                    "typeArguments": null,
                    "start": 1005,
                    "end": 1006
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1009,
                    "end": 1015
                  }
                ],
                "start": 1005,
                "end": 1015
              },
              "start": 1003,
              "end": 1015
            },
            "accessibility": null,
            "static": false,
            "start": 999,
            "end": 1016
          }
        ],
        "start": 933,
        "end": 1018
      },
      "declare": false,
      "start": 920,
      "end": 1018
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1031,
        "end": 1033
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1044,
                    "end": 1050
                  },
                  "start": 1042,
                  "end": 1050
                },
                "start": 1041,
                "end": 1050
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1053,
                  "end": 1059
                },
                "start": 1053,
                "end": 1061
              },
              "start": 1051,
              "end": 1061
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1040,
            "end": 1062
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1067,
              "end": 1070
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1072,
                    "end": 1078
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1081,
                    "end": 1087
                  }
                ],
                "start": 1072,
                "end": 1087
              },
              "start": 1070,
              "end": 1087
            },
            "accessibility": null,
            "static": false,
            "start": 1067,
            "end": 1088
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1093,
              "end": 1097
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1099,
                      "end": 1100
                    },
                    "typeArguments": null,
                    "start": 1099,
                    "end": 1100
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1103,
                    "end": 1109
                  }
                ],
                "start": 1099,
                "end": 1109
              },
              "start": 1097,
              "end": 1109
            },
            "accessibility": null,
            "static": false,
            "start": 1093,
            "end": 1110
          }
        ],
        "start": 1034,
        "end": 1112
      },
      "declare": false,
      "start": 1021,
      "end": 1112
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1125,
        "end": 1127
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1138,
                    "end": 1144
                  },
                  "start": 1136,
                  "end": 1144
                },
                "start": 1135,
                "end": 1144
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1147,
                  "end": 1149
                },
                "typeArguments": null,
                "start": 1147,
                "end": 1149
              },
              "start": 1145,
              "end": 1149
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1134,
            "end": 1150
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1155,
              "end": 1158
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1160,
                    "end": 1166
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1169,
                    "end": 1175
                  }
                ],
                "start": 1160,
                "end": 1175
              },
              "start": 1158,
              "end": 1175
            },
            "accessibility": null,
            "static": false,
            "start": 1155,
            "end": 1176
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1181,
              "end": 1185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1187,
                      "end": 1188
                    },
                    "typeArguments": null,
                    "start": 1187,
                    "end": 1188
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1191,
                    "end": 1197
                  }
                ],
                "start": 1187,
                "end": 1197
              },
              "start": 1185,
              "end": 1197
            },
            "accessibility": null,
            "static": false,
            "start": 1181,
            "end": 1198
          }
        ],
        "start": 1128,
        "end": 1200
      },
      "declare": false,
      "start": 1115,
      "end": 1200
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1209
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1215
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1217,
                "end": 1223
              },
              "start": 1215,
              "end": 1223
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1212,
            "end": 1224
          }
        ],
        "start": 1210,
        "end": 1226
      },
      "abstract": false,
      "declare": false,
      "start": 1202,
      "end": 1226
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1237,
        "end": 1240
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1251,
                    "end": 1257
                  },
                  "start": 1249,
                  "end": 1257
                },
                "start": 1248,
                "end": 1257
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1260,
                  "end": 1261
                },
                "typeArguments": null,
                "start": 1260,
                "end": 1261
              },
              "start": 1258,
              "end": 1261
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1247,
            "end": 1262
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1270
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1272,
                    "end": 1278
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1281,
                    "end": 1287
                  }
                ],
                "start": 1272,
                "end": 1287
              },
              "start": 1270,
              "end": 1287
            },
            "accessibility": null,
            "static": false,
            "start": 1267,
            "end": 1288
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1293,
              "end": 1297
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1299,
                      "end": 1300
                    },
                    "typeArguments": null,
                    "start": 1299,
                    "end": 1300
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1303,
                    "end": 1309
                  }
                ],
                "start": 1299,
                "end": 1309
              },
              "start": 1297,
              "end": 1309
            },
            "accessibility": null,
            "static": false,
            "start": 1293,
            "end": 1310
          }
        ],
        "start": 1241,
        "end": 1312
      },
      "declare": false,
      "start": 1227,
      "end": 1312
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1320,
        "end": 1322
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1323,
              "end": 1324
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1323,
            "end": 1324
          }
        ],
        "start": 1322,
        "end": 1325
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1331
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1333,
                  "end": 1334
                },
                "typeArguments": null,
                "start": 1333,
                "end": 1334
              },
              "start": 1331,
              "end": 1334
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1328,
            "end": 1335
          }
        ],
        "start": 1326,
        "end": 1337
      },
      "abstract": false,
      "declare": false,
      "start": 1314,
      "end": 1337
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1348,
        "end": 1351
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1362,
                    "end": 1368
                  },
                  "start": 1360,
                  "end": 1368
                },
                "start": 1359,
                "end": 1368
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1371,
                  "end": 1373
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1374,
                      "end": 1380
                    }
                  ],
                  "start": 1373,
                  "end": 1381
                },
                "start": 1371,
                "end": 1381
              },
              "start": 1369,
              "end": 1381
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1358,
            "end": 1382
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1387,
              "end": 1390
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1392,
                    "end": 1398
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1401,
                    "end": 1407
                  }
                ],
                "start": 1392,
                "end": 1407
              },
              "start": 1390,
              "end": 1407
            },
            "accessibility": null,
            "static": false,
            "start": 1387,
            "end": 1408
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1413,
              "end": 1417
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1419,
                      "end": 1420
                    },
                    "typeArguments": null,
                    "start": 1419,
                    "end": 1420
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1423,
                    "end": 1429
                  }
                ],
                "start": 1419,
                "end": 1429
              },
              "start": 1417,
              "end": 1429
            },
            "accessibility": null,
            "static": false,
            "start": 1413,
            "end": 1430
          }
        ],
        "start": 1352,
        "end": 1432
      },
      "declare": false,
      "start": 1338,
      "end": 1432
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1445,
        "end": 1448
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1459,
                    "end": 1465
                  },
                  "start": 1457,
                  "end": 1465
                },
                "start": 1456,
                "end": 1465
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1469,
                    "end": 1470
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1475,
                    "end": 1481
                  },
                  "start": 1472,
                  "end": 1481
                },
                "start": 1468,
                "end": 1481
              },
              "start": 1466,
              "end": 1481
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1455,
            "end": 1482
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1487,
              "end": 1490
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1492,
                    "end": 1498
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1501,
                    "end": 1507
                  }
                ],
                "start": 1492,
                "end": 1507
              },
              "start": 1490,
              "end": 1507
            },
            "accessibility": null,
            "static": false,
            "start": 1487,
            "end": 1508
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1513,
              "end": 1517
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1519,
                      "end": 1520
                    },
                    "typeArguments": null,
                    "start": 1519,
                    "end": 1520
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1523,
                    "end": 1529
                  }
                ],
                "start": 1519,
                "end": 1529
              },
              "start": 1517,
              "end": 1529
            },
            "accessibility": null,
            "static": false,
            "start": 1513,
            "end": 1530
          }
        ],
        "start": 1449,
        "end": 1532
      },
      "declare": false,
      "start": 1435,
      "end": 1532
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1545,
        "end": 1548
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1559,
                    "end": 1565
                  },
                  "start": 1557,
                  "end": 1565
                },
                "start": 1556,
                "end": 1565
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1569,
                        "end": 1570
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1569,
                      "end": 1570
                    }
                  ],
                  "start": 1568,
                  "end": 1571
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1575,
                          "end": 1576
                        },
                        "typeArguments": null,
                        "start": 1575,
                        "end": 1576
                      },
                      "start": 1573,
                      "end": 1576
                    },
                    "start": 1572,
                    "end": 1576
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1581,
                      "end": 1582
                    },
                    "typeArguments": null,
                    "start": 1581,
                    "end": 1582
                  },
                  "start": 1578,
                  "end": 1582
                },
                "start": 1568,
                "end": 1582
              },
              "start": 1566,
              "end": 1582
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1555,
            "end": 1583
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1588,
              "end": 1591
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1593,
                    "end": 1599
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1602,
                    "end": 1608
                  }
                ],
                "start": 1593,
                "end": 1608
              },
              "start": 1591,
              "end": 1608
            },
            "accessibility": null,
            "static": false,
            "start": 1588,
            "end": 1609
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1614,
              "end": 1618
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1620,
                      "end": 1621
                    },
                    "typeArguments": null,
                    "start": 1620,
                    "end": 1621
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1624,
                    "end": 1630
                  }
                ],
                "start": 1620,
                "end": 1630
              },
              "start": 1618,
              "end": 1630
            },
            "accessibility": null,
            "static": false,
            "start": 1614,
            "end": 1631
          }
        ],
        "start": 1549,
        "end": 1633
      },
      "declare": false,
      "start": 1535,
      "end": 1633
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1641,
        "end": 1643
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1646,
              "end": 1647
            },
            "initializer": null,
            "computed": false,
            "start": 1646,
            "end": 1647
          }
        ],
        "start": 1644,
        "end": 1649
      },
      "const": false,
      "declare": false,
      "start": 1636,
      "end": 1649
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1660,
        "end": 1663
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1674,
                    "end": 1680
                  },
                  "start": 1672,
                  "end": 1680
                },
                "start": 1671,
                "end": 1680
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1683,
                  "end": 1685
                },
                "typeArguments": null,
                "start": 1683,
                "end": 1685
              },
              "start": 1681,
              "end": 1685
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1670,
            "end": 1686
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1691,
              "end": 1694
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1696,
                    "end": 1702
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1705,
                    "end": 1711
                  }
                ],
                "start": 1696,
                "end": 1711
              },
              "start": 1694,
              "end": 1711
            },
            "accessibility": null,
            "static": false,
            "start": 1691,
            "end": 1712
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1717,
              "end": 1721
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1723,
                      "end": 1724
                    },
                    "typeArguments": null,
                    "start": 1723,
                    "end": 1724
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1727,
                    "end": 1733
                  }
                ],
                "start": 1723,
                "end": 1733
              },
              "start": 1721,
              "end": 1733
            },
            "accessibility": null,
            "static": false,
            "start": 1717,
            "end": 1734
          }
        ],
        "start": 1664,
        "end": 1736
      },
      "declare": false,
      "start": 1650,
      "end": 1736
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1748,
        "end": 1749
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
        "start": 1752,
        "end": 1755
      },
      "expression": false,
      "start": 1739,
      "end": 1755
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1766,
        "end": 1767
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1785,
                    "end": 1788
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1791,
                    "end": 1792
                  },
                  "definite": false,
                  "start": 1785,
                  "end": 1792
                }
              ],
              "declare": false,
              "start": 1781,
              "end": 1793
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1774,
            "end": 1793
          }
        ],
        "start": 1768,
        "end": 1795
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1756,
      "end": 1795
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1806,
        "end": 1809
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1820,
                    "end": 1826
                  },
                  "start": 1818,
                  "end": 1826
                },
                "start": 1817,
                "end": 1826
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1836,
                  "end": 1837
                },
                "typeArguments": null,
                "start": 1829,
                "end": 1837
              },
              "start": 1827,
              "end": 1837
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1816,
            "end": 1838
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1843,
              "end": 1846
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1848,
                    "end": 1854
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1857,
                    "end": 1863
                  }
                ],
                "start": 1848,
                "end": 1863
              },
              "start": 1846,
              "end": 1863
            },
            "accessibility": null,
            "static": false,
            "start": 1843,
            "end": 1864
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1869,
              "end": 1873
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1875,
                      "end": 1876
                    },
                    "typeArguments": null,
                    "start": 1875,
                    "end": 1876
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1879,
                    "end": 1885
                  }
                ],
                "start": 1875,
                "end": 1885
              },
              "start": 1873,
              "end": 1885
            },
            "accessibility": null,
            "static": false,
            "start": 1869,
            "end": 1886
          }
        ],
        "start": 1810,
        "end": 1888
      },
      "declare": false,
      "start": 1796,
      "end": 1888
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
        "start": 1897,
        "end": 1898
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 1901,
              "end": 1904
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1906,
                "end": 1912
              },
              "start": 1904,
              "end": 1912
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1901,
            "end": 1912
          }
        ],
        "start": 1899,
        "end": 1914
      },
      "abstract": false,
      "declare": false,
      "start": 1891,
      "end": 1914
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1925,
        "end": 1926
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1944,
                    "end": 1947
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1950,
                    "end": 1951
                  },
                  "definite": false,
                  "start": 1944,
                  "end": 1951
                }
              ],
              "declare": false,
              "start": 1940,
              "end": 1952
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1933,
            "end": 1952
          }
        ],
        "start": 1927,
        "end": 1954
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1915,
      "end": 1954
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1965,
        "end": 1968
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1979,
                    "end": 1985
                  },
                  "start": 1977,
                  "end": 1985
                },
                "start": 1976,
                "end": 1985
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1995,
                  "end": 1996
                },
                "typeArguments": null,
                "start": 1988,
                "end": 1996
              },
              "start": 1986,
              "end": 1996
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1975,
            "end": 1997
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2002,
              "end": 2005
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2007,
                    "end": 2013
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2016,
                    "end": 2022
                  }
                ],
                "start": 2007,
                "end": 2022
              },
              "start": 2005,
              "end": 2022
            },
            "accessibility": null,
            "static": false,
            "start": 2002,
            "end": 2023
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2028,
              "end": 2032
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2034,
                      "end": 2035
                    },
                    "typeArguments": null,
                    "start": 2034,
                    "end": 2035
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2038,
                    "end": 2044
                  }
                ],
                "start": 2034,
                "end": 2044
              },
              "start": 2032,
              "end": 2044
            },
            "accessibility": null,
            "static": false,
            "start": 2028,
            "end": 2045
          }
        ],
        "start": 1969,
        "end": 2047
      },
      "declare": false,
      "start": 1955,
      "end": 2047
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2060,
        "end": 2063
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2064,
              "end": 2065
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2064,
            "end": 2065
          }
        ],
        "start": 2063,
        "end": 2066
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2077,
                    "end": 2083
                  },
                  "start": 2075,
                  "end": 2083
                },
                "start": 2074,
                "end": 2083
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2086,
                  "end": 2087
                },
                "typeArguments": null,
                "start": 2086,
                "end": 2087
              },
              "start": 2084,
              "end": 2087
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2073,
            "end": 2088
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2093,
              "end": 2096
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2098,
                    "end": 2104
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2107,
                    "end": 2113
                  }
                ],
                "start": 2098,
                "end": 2113
              },
              "start": 2096,
              "end": 2113
            },
            "accessibility": null,
            "static": false,
            "start": 2093,
            "end": 2114
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2119,
              "end": 2123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2125,
                      "end": 2126
                    },
                    "typeArguments": null,
                    "start": 2125,
                    "end": 2126
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2129,
                    "end": 2135
                  }
                ],
                "start": 2125,
                "end": 2135
              },
              "start": 2123,
              "end": 2135
            },
            "accessibility": null,
            "static": false,
            "start": 2119,
            "end": 2136
          }
        ],
        "start": 2067,
        "end": 2138
      },
      "declare": false,
      "start": 2050,
      "end": 2138
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I19",
        "optional": false,
        "typeAnnotation": null,
        "start": 2150,
        "end": 2153
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2164,
                    "end": 2170
                  },
                  "start": 2162,
                  "end": 2170
                },
                "start": 2161,
                "end": 2170
              }
            ],
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
                  "start": 2173,
                  "end": 2179
                },
                "typeArguments": null,
                "start": 2173,
                "end": 2179
              },
              "start": 2171,
              "end": 2179
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2160,
            "end": 2180
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2185,
              "end": 2188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2190,
                    "end": 2196
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2199,
                    "end": 2205
                  }
                ],
                "start": 2190,
                "end": 2205
              },
              "start": 2188,
              "end": 2205
            },
            "accessibility": null,
            "static": false,
            "start": 2185,
            "end": 2206
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2211,
              "end": 2215
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2217,
                      "end": 2218
                    },
                    "typeArguments": null,
                    "start": 2217,
                    "end": 2218
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2221,
                    "end": 2227
                  }
                ],
                "start": 2217,
                "end": 2227
              },
              "start": 2215,
              "end": 2227
            },
            "accessibility": null,
            "static": false,
            "start": 2211,
            "end": 2228
          }
        ],
        "start": 2154,
        "end": 2230
      },
      "declare": false,
      "start": 2140,
      "end": 2230
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I20",
        "optional": false,
        "typeAnnotation": null,
        "start": 2243,
        "end": 2246
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2257,
                    "end": 2263
                  },
                  "start": 2255,
                  "end": 2263
                },
                "start": 2254,
                "end": 2263
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 2266,
                "end": 2268
              },
              "start": 2264,
              "end": 2268
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2253,
            "end": 2269
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2274,
              "end": 2277
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2279,
                    "end": 2285
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2288,
                    "end": 2294
                  }
                ],
                "start": 2279,
                "end": 2294
              },
              "start": 2277,
              "end": 2294
            },
            "accessibility": null,
            "static": false,
            "start": 2274,
            "end": 2295
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2300,
              "end": 2304
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2306,
                      "end": 2307
                    },
                    "typeArguments": null,
                    "start": 2306,
                    "end": 2307
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2310,
                    "end": 2316
                  }
                ],
                "start": 2306,
                "end": 2316
              },
              "start": 2304,
              "end": 2316
            },
            "accessibility": null,
            "static": false,
            "start": 2300,
            "end": 2317
          }
        ],
        "start": 2247,
        "end": 2319
      },
      "declare": false,
      "start": 2233,
      "end": 2319
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2319
}
```
