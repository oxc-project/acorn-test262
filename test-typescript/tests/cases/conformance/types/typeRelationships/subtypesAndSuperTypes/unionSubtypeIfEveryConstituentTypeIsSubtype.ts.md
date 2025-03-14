__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2313,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 25,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 25,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 15,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 15,
              "decorators": [],
              "name": "e1",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 23,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "decorators": [],
              "name": "e2",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "e",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 106,
      "end": 203,
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 203,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 124,
            "end": 141,
            "parameters": [
              {
                "type": "Identifier",
                "start": 125,
                "end": 134,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 126,
                  "end": 134,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 128,
                    "end": 134
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 140,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 137,
                "end": 140
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 146,
            "end": 167,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 166,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 151,
                "end": 166,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 178,
            "end": 195,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 182,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 194,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 184,
                "end": 194,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 184,
                    "end": 185,
                    "typeName": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 185,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 188,
                    "end": 194
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 204,
      "end": 448,
      "body": {
        "type": "TSInterfaceBody",
        "start": 217,
        "end": 448,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 223,
            "end": 243,
            "parameters": [
              {
                "type": "Identifier",
                "start": 224,
                "end": 233,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 225,
                  "end": 233,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 227,
                    "end": 233
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 242,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 236,
                "end": 242
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 320,
            "end": 341,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 320,
              "end": 323,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 340,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 325,
                "end": 340,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 387,
            "end": 404,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 391,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 403,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 393,
                "end": 403,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 393,
                    "end": 394,
                    "typeName": {
                      "type": "Identifier",
                      "start": 393,
                      "end": 394,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 397,
                    "end": 403
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 216,
        "decorators": [],
        "name": "I2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 450,
      "end": 628,
      "body": {
        "type": "TSInterfaceBody",
        "start": 463,
        "end": 628,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 469,
            "end": 489,
            "parameters": [
              {
                "type": "Identifier",
                "start": 470,
                "end": 479,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 471,
                  "end": 479,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 473,
                    "end": 479
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 480,
              "end": 488,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 482,
                "end": 488
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 494,
            "end": 515,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 494,
              "end": 497,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 497,
              "end": 514,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 499,
                "end": 514,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 560,
            "end": 577,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 560,
              "end": 564,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 564,
              "end": 576,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 566,
                "end": 576,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 566,
                    "end": 567,
                    "typeName": {
                      "type": "Identifier",
                      "start": 566,
                      "end": 567,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 570,
                    "end": 576
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 460,
        "end": 462,
        "decorators": [],
        "name": "I3",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 645,
      "end": 735,
      "body": {
        "type": "TSInterfaceBody",
        "start": 658,
        "end": 735,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 664,
            "end": 685,
            "parameters": [
              {
                "type": "Identifier",
                "start": 665,
                "end": 674,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 666,
                  "end": 674,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 668,
                    "end": 674
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 675,
              "end": 684,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 677,
                "end": 684
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 690,
            "end": 711,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 690,
              "end": 693,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 693,
              "end": 710,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 695,
                "end": 710,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 716,
            "end": 733,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 716,
              "end": 720,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 720,
              "end": 732,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 722,
                "end": 732,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 722,
                    "end": 723,
                    "typeName": {
                      "type": "Identifier",
                      "start": 722,
                      "end": 723,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 726,
                    "end": 732
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 655,
        "end": 657,
        "decorators": [],
        "name": "I4",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 738,
      "end": 825,
      "body": {
        "type": "TSInterfaceBody",
        "start": 751,
        "end": 825,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 757,
            "end": 775,
            "parameters": [
              {
                "type": "Identifier",
                "start": 758,
                "end": 767,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 759,
                  "end": 767,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 761,
                    "end": 767
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 768,
              "end": 774,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 770,
                "end": 774,
                "typeName": {
                  "type": "Identifier",
                  "start": 770,
                  "end": 774,
                  "decorators": [],
                  "name": "Date",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 780,
            "end": 801,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 780,
              "end": 783,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 783,
              "end": 800,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 785,
                "end": 800,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 806,
            "end": 823,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 806,
              "end": 810,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 810,
              "end": 822,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 812,
                "end": 822,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 812,
                    "end": 813,
                    "typeName": {
                      "type": "Identifier",
                      "start": 812,
                      "end": 813,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 816,
                    "end": 822
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 748,
        "end": 750,
        "decorators": [],
        "name": "I5",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 828,
      "end": 917,
      "body": {
        "type": "TSInterfaceBody",
        "start": 841,
        "end": 917,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 847,
            "end": 867,
            "parameters": [
              {
                "type": "Identifier",
                "start": 848,
                "end": 857,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 849,
                  "end": 857,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 851,
                    "end": 857
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 858,
              "end": 866,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 860,
                "end": 866,
                "typeName": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 866,
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 872,
            "end": 893,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 872,
              "end": 875,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 875,
              "end": 892,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 877,
                "end": 892,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 898,
            "end": 915,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 898,
              "end": 902,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 902,
              "end": 914,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 904,
                "end": 914,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 904,
                    "end": 905,
                    "typeName": {
                      "type": "Identifier",
                      "start": 904,
                      "end": 905,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 908,
                    "end": 914
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 838,
        "end": 840,
        "decorators": [],
        "name": "I6",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 920,
      "end": 1018,
      "body": {
        "type": "TSInterfaceBody",
        "start": 933,
        "end": 1018,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 939,
            "end": 968,
            "parameters": [
              {
                "type": "Identifier",
                "start": 940,
                "end": 949,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 941,
                  "end": 949,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 943,
                    "end": 949
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 950,
              "end": 967,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 952,
                "end": 967,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 954,
                    "end": 965,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 954,
                      "end": 957,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 957,
                      "end": 965,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 959,
                        "end": 965
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 973,
            "end": 994,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 973,
              "end": 976,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 976,
              "end": 993,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 978,
                "end": 993,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 999,
            "end": 1016,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 999,
              "end": 1003,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1003,
              "end": 1015,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1005,
                "end": 1015,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1005,
                    "end": 1006,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1005,
                      "end": 1006,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1009,
                    "end": 1015
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 930,
        "end": 932,
        "decorators": [],
        "name": "I7",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1021,
      "end": 1112,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1034,
        "end": 1112,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1040,
            "end": 1062,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1041,
                "end": 1050,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1042,
                  "end": 1050,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1044,
                    "end": 1050
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1051,
              "end": 1061,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1053,
                "end": 1061,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1053,
                  "end": 1059
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1067,
            "end": 1088,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1067,
              "end": 1070,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1070,
              "end": 1087,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1072,
                "end": 1087,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1093,
            "end": 1110,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1093,
              "end": 1097,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1097,
              "end": 1109,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1099,
                "end": 1109,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1099,
                    "end": 1100,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1099,
                      "end": 1100,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1103,
                    "end": 1109
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1031,
        "end": 1033,
        "decorators": [],
        "name": "I8",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1115,
      "end": 1200,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1128,
        "end": 1200,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1134,
            "end": 1150,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1135,
                "end": 1144,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1136,
                  "end": 1144,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1138,
                    "end": 1144
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1145,
              "end": 1149,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1147,
                "end": 1149,
                "typeName": {
                  "type": "Identifier",
                  "start": 1147,
                  "end": 1149,
                  "decorators": [],
                  "name": "I8",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1155,
            "end": 1176,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1155,
              "end": 1158,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1158,
              "end": 1175,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1160,
                "end": 1175,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1181,
            "end": 1198,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1181,
              "end": 1185,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1185,
              "end": 1197,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1187,
                "end": 1197,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1187,
                    "end": 1188,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1187,
                      "end": 1188,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1191,
                    "end": 1197
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1125,
        "end": 1127,
        "decorators": [],
        "name": "I9",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1202,
      "end": 1226,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1210,
        "end": 1226,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1212,
            "end": 1224,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1212,
              "end": 1215,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1215,
              "end": 1223,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1217,
                "end": 1223
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1208,
        "end": 1209,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1227,
      "end": 1312,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1241,
        "end": 1312,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1247,
            "end": 1262,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1248,
                "end": 1257,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1249,
                  "end": 1257,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1251,
                    "end": 1257
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1258,
              "end": 1261,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1260,
                "end": 1261,
                "typeName": {
                  "type": "Identifier",
                  "start": 1260,
                  "end": 1261,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1267,
            "end": 1288,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1267,
              "end": 1270,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1270,
              "end": 1287,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1272,
                "end": 1287,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1293,
            "end": 1310,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1293,
              "end": 1297,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1297,
              "end": 1309,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1299,
                "end": 1309,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1299,
                    "end": 1300,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1299,
                      "end": 1300,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1303,
                    "end": 1309
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1237,
        "end": 1240,
        "decorators": [],
        "name": "I10",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1314,
      "end": 1337,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1326,
        "end": 1337,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1328,
            "end": 1335,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1328,
              "end": 1331,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1331,
              "end": 1334,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1333,
                "end": 1334,
                "typeName": {
                  "type": "Identifier",
                  "start": 1333,
                  "end": 1334,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1320,
        "end": 1322,
        "decorators": [],
        "name": "A2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1322,
        "end": 1325,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1323,
            "end": 1324,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1323,
              "end": 1324,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1338,
      "end": 1432,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1352,
        "end": 1432,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1358,
            "end": 1382,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1359,
                "end": 1368,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1360,
                  "end": 1368,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1362,
                    "end": 1368
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1369,
              "end": 1381,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1371,
                "end": 1381,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1373,
                  "end": 1381,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1374,
                      "end": 1380
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1371,
                  "end": 1373,
                  "decorators": [],
                  "name": "A2",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1387,
            "end": 1408,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1387,
              "end": 1390,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1390,
              "end": 1407,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1392,
                "end": 1407,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1413,
            "end": 1430,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1413,
              "end": 1417,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1417,
              "end": 1429,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1419,
                "end": 1429,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1419,
                    "end": 1420,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1419,
                      "end": 1420,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1423,
                    "end": 1429
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1348,
        "end": 1351,
        "decorators": [],
        "name": "I11",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1435,
      "end": 1532,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1449,
        "end": 1532,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1455,
            "end": 1482,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1456,
                "end": 1465,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1457,
                  "end": 1465,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1459,
                    "end": 1465
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1466,
              "end": 1481,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1468,
                "end": 1481,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1469,
                    "end": 1470,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1472,
                  "end": 1481,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1475,
                    "end": 1481
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1487,
            "end": 1508,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1487,
              "end": 1490,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1490,
              "end": 1507,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1492,
                "end": 1507,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1513,
            "end": 1530,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1513,
              "end": 1517,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1517,
              "end": 1529,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1519,
                "end": 1529,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1519,
                    "end": 1520,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1519,
                      "end": 1520,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1523,
                    "end": 1529
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1445,
        "end": 1448,
        "decorators": [],
        "name": "I12",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1535,
      "end": 1633,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1549,
        "end": 1633,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1555,
            "end": 1583,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1556,
                "end": 1565,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1557,
                  "end": 1565,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1559,
                    "end": 1565
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1566,
              "end": 1582,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1568,
                "end": 1582,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1572,
                    "end": 1576,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1573,
                      "end": 1576,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1575,
                        "end": 1576,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1575,
                          "end": 1576,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1578,
                  "end": 1582,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1581,
                    "end": 1582,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1581,
                      "end": 1582,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1568,
                  "end": 1571,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1569,
                      "end": 1570,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1569,
                        "end": 1570,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1588,
            "end": 1609,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1588,
              "end": 1591,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1591,
              "end": 1608,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1593,
                "end": 1608,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1614,
            "end": 1631,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1614,
              "end": 1618,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1618,
              "end": 1630,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1620,
                "end": 1630,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1620,
                    "end": 1621,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1620,
                      "end": 1621,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1624,
                    "end": 1630
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1545,
        "end": 1548,
        "decorators": [],
        "name": "I13",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1636,
      "end": 1649,
      "body": {
        "type": "TSEnumBody",
        "start": 1644,
        "end": 1649,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1646,
            "end": 1647,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1646,
              "end": 1647,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1641,
        "end": 1643,
        "decorators": [],
        "name": "E2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1650,
      "end": 1736,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1664,
        "end": 1736,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1670,
            "end": 1686,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1671,
                "end": 1680,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1672,
                  "end": 1680,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1674,
                    "end": 1680
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1681,
              "end": 1685,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1683,
                "end": 1685,
                "typeName": {
                  "type": "Identifier",
                  "start": 1683,
                  "end": 1685,
                  "decorators": [],
                  "name": "E2",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1691,
            "end": 1712,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1691,
              "end": 1694,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1694,
              "end": 1711,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1696,
                "end": 1711,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1717,
            "end": 1734,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1717,
              "end": 1721,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1721,
              "end": 1733,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1723,
                "end": 1733,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1723,
                    "end": 1724,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1723,
                      "end": 1724,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1727,
                    "end": 1733
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1660,
        "end": 1663,
        "decorators": [],
        "name": "I14",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1739,
      "end": 1755,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1752,
        "end": 1755,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1748,
        "end": 1749,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1756,
      "end": 1792,
      "body": {
        "type": "TSModuleBlock",
        "start": 1765,
        "end": 1792,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1771,
            "end": 1790,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1778,
              "end": 1790,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1782,
                  "end": 1789,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1782,
                    "end": 1785,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1788,
                    "end": 1789,
                    "raw": "1",
                    "value": 1
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
        "start": 1763,
        "end": 1764,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1793,
      "end": 1885,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1807,
        "end": 1885,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1813,
            "end": 1835,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1814,
                "end": 1823,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1815,
                  "end": 1823,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1817,
                    "end": 1823
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1824,
              "end": 1834,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1826,
                "end": 1834,
                "exprName": {
                  "type": "Identifier",
                  "start": 1833,
                  "end": 1834,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1840,
            "end": 1861,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1840,
              "end": 1843,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1843,
              "end": 1860,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1845,
                "end": 1860,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1845,
                    "end": 1851
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1854,
                    "end": 1860
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1866,
            "end": 1883,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1866,
              "end": 1870,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1870,
              "end": 1882,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1872,
                "end": 1882,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1872,
                    "end": 1873,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1872,
                      "end": 1873,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1876,
                    "end": 1882
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1803,
        "end": 1806,
        "decorators": [],
        "name": "I15",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1888,
      "end": 1911,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1896,
        "end": 1911,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1898,
            "end": 1909,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1898,
              "end": 1901,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1901,
              "end": 1909,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1903,
                "end": 1909
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1894,
        "end": 1895,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1912,
      "end": 1948,
      "body": {
        "type": "TSModuleBlock",
        "start": 1921,
        "end": 1948,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1927,
            "end": 1946,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1934,
              "end": 1946,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1938,
                  "end": 1945,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1938,
                    "end": 1941,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1944,
                    "end": 1945,
                    "raw": "1",
                    "value": 1
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
        "start": 1919,
        "end": 1920,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1949,
      "end": 2041,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1963,
        "end": 2041,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1969,
            "end": 1991,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1970,
                "end": 1979,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1971,
                  "end": 1979,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1973,
                    "end": 1979
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1980,
              "end": 1990,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1982,
                "end": 1990,
                "exprName": {
                  "type": "Identifier",
                  "start": 1989,
                  "end": 1990,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1996,
            "end": 2017,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1996,
              "end": 1999,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1999,
              "end": 2016,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2001,
                "end": 2016,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2001,
                    "end": 2007
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2010,
                    "end": 2016
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2022,
            "end": 2039,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2022,
              "end": 2026,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2026,
              "end": 2038,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2028,
                "end": 2038,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2028,
                    "end": 2029,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2028,
                      "end": 2029,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2032,
                    "end": 2038
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1959,
        "end": 1962,
        "decorators": [],
        "name": "I16",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2044,
      "end": 2132,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2061,
        "end": 2132,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2067,
            "end": 2082,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2068,
                "end": 2077,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2069,
                  "end": 2077,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2071,
                    "end": 2077
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2078,
              "end": 2081,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2080,
                "end": 2081,
                "typeName": {
                  "type": "Identifier",
                  "start": 2080,
                  "end": 2081,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2087,
            "end": 2108,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2087,
              "end": 2090,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2090,
              "end": 2107,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2092,
                "end": 2107,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2092,
                    "end": 2098
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2101,
                    "end": 2107
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2113,
            "end": 2130,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2113,
              "end": 2117,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2117,
              "end": 2129,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2119,
                "end": 2129,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2119,
                    "end": 2120,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2119,
                      "end": 2120,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2123,
                    "end": 2129
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2054,
        "end": 2057,
        "decorators": [],
        "name": "I17",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2057,
        "end": 2060,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2058,
            "end": 2059,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2058,
              "end": 2059,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2134,
      "end": 2224,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2148,
        "end": 2224,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2154,
            "end": 2174,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2155,
                "end": 2164,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2156,
                  "end": 2164,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2158,
                    "end": 2164
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2165,
              "end": 2173,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2167,
                "end": 2173,
                "typeName": {
                  "type": "Identifier",
                  "start": 2167,
                  "end": 2173,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2179,
            "end": 2200,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2179,
              "end": 2182,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2182,
              "end": 2199,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2184,
                "end": 2199,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2184,
                    "end": 2190
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2193,
                    "end": 2199
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2205,
            "end": 2222,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2205,
              "end": 2209,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2209,
              "end": 2221,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2211,
                "end": 2221,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2211,
                    "end": 2212,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2211,
                      "end": 2212,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2215,
                    "end": 2221
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2144,
        "end": 2147,
        "decorators": [],
        "name": "I19",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2227,
      "end": 2313,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2241,
        "end": 2313,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2247,
            "end": 2263,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2248,
                "end": 2257,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2249,
                  "end": 2257,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2251,
                    "end": 2257
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2258,
              "end": 2262,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2260,
                "end": 2262,
                "members": []
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2268,
            "end": 2289,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2268,
              "end": 2271,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2271,
              "end": 2288,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2273,
                "end": 2288,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2273,
                    "end": 2279
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2282,
                    "end": 2288
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2294,
            "end": 2311,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2294,
              "end": 2298,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2298,
              "end": 2310,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2300,
                "end": 2310,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2300,
                    "end": 2301,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2300,
                      "end": 2301,
                      "decorators": [],
                      "name": "e",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2304,
                    "end": 2310
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2237,
        "end": 2240,
        "decorators": [],
        "name": "I20",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
