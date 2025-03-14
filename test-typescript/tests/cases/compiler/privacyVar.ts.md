privacyVar.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 6345,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 2020,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 2020,
        "body": {
          "type": "TSModuleBlock",
          "start": 17,
          "end": 2020,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 23,
              "end": 86,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 30,
                "end": 86,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 46,
                  "end": 86,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 56,
                      "end": 80,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 66,
                        "decorators": [],
                        "name": "f1",
                        "optional": false
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 66,
                        "end": 80,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 69,
                          "end": 80,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 45,
                  "decorators": [],
                  "name": "C1_public",
                  "optional": false
                },
                "implements": [],
                "superClass": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ClassDeclaration",
              "start": 92,
              "end": 116,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 109,
                "end": 116,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 98,
                "end": 108,
                "decorators": [],
                "name": "C2_private",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 122,
              "end": 789,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 129,
                "end": 789,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 145,
                  "end": 789,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 155,
                      "end": 188,
                      "accessibility": "private",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 176,
                        "decorators": [],
                        "name": "C3_v1_private",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 176,
                        "end": 187,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 178,
                          "end": 187,
                          "typeName": {
                            "type": "Identifier",
                            "start": 178,
                            "end": 187,
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false
                          }
                        }
                      },
                      "value": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 197,
                      "end": 228,
                      "accessibility": "public",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 216,
                        "decorators": [],
                        "name": "C3_v2_public",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 216,
                        "end": 227,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 218,
                          "end": 227,
                          "typeName": {
                            "type": "Identifier",
                            "start": 218,
                            "end": 227,
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false
                          }
                        }
                      },
                      "value": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 237,
                      "end": 271,
                      "accessibility": "private",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 258,
                        "decorators": [],
                        "name": "C3_v3_private",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 258,
                        "end": 270,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 260,
                          "end": 270,
                          "typeName": {
                            "type": "Identifier",
                            "start": 260,
                            "end": 270,
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false
                          }
                        }
                      },
                      "value": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 280,
                      "end": 312,
                      "accessibility": "public",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 287,
                        "end": 299,
                        "decorators": [],
                        "name": "C3_v4_public",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 299,
                        "end": 311,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 301,
                          "end": 311,
                          "typeName": {
                            "type": "Identifier",
                            "start": 301,
                            "end": 311,
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false
                          }
                        }
                      },
                      "value": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 331,
                      "end": 372,
                      "accessibility": "private",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 339,
                        "end": 353,
                        "decorators": [],
                        "name": "C3_v11_private",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "value": {
                        "type": "NewExpression",
                        "start": 356,
                        "end": 371,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 360,
                          "end": 369,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 381,
                      "end": 420,
                      "accessibility": "public",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 401,
                        "decorators": [],
                        "name": "C3_v12_public",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "value": {
                        "type": "NewExpression",
                        "start": 404,
                        "end": 419,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 408,
                          "end": 417,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 429,
                      "end": 471,
                      "accessibility": "private",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 437,
                        "end": 451,
                        "decorators": [],
                        "name": "C3_v13_private",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "value": {
                        "type": "NewExpression",
                        "start": 454,
                        "end": 470,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 458,
                          "end": 468,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 480,
                      "end": 520,
                      "accessibility": "public",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 487,
                        "end": 500,
                        "decorators": [],
                        "name": "C3_v14_public",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "value": {
                        "type": "NewExpression",
                        "start": 503,
                        "end": 519,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 507,
                          "end": 517,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 539,
                      "end": 591,
                      "accessibility": "private",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 547,
                        "end": 561,
                        "decorators": [],
                        "name": "C3_v21_private",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 561,
                        "end": 572,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 563,
                          "end": 572,
                          "typeName": {
                            "type": "Identifier",
                            "start": 563,
                            "end": 572,
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false
                          }
                        }
                      },
                      "value": {
                        "type": "NewExpression",
                        "start": 575,
                        "end": 590,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 579,
                          "end": 588,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 600,
                      "end": 650,
                      "accessibility": "public",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 620,
                        "decorators": [],
                        "name": "C3_v22_public",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 620,
                        "end": 631,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 622,
                          "end": 631,
                          "typeName": {
                            "type": "Identifier",
                            "start": 622,
                            "end": 631,
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false
                          }
                        }
                      },
                      "value": {
                        "type": "NewExpression",
                        "start": 634,
                        "end": 649,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 638,
                          "end": 647,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 659,
                      "end": 713,
                      "accessibility": "private",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 667,
                        "end": 681,
                        "decorators": [],
                        "name": "C3_v23_private",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 681,
                        "end": 693,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 683,
                          "end": 693,
                          "typeName": {
                            "type": "Identifier",
                            "start": 683,
                            "end": 693,
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false
                          }
                        }
                      },
                      "value": {
                        "type": "NewExpression",
                        "start": 696,
                        "end": 712,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 700,
                          "end": 710,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 722,
                      "end": 774,
                      "accessibility": "public",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 729,
                        "end": 742,
                        "decorators": [],
                        "name": "C3_v24_public",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 742,
                        "end": 754,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 744,
                          "end": 754,
                          "typeName": {
                            "type": "Identifier",
                            "start": 744,
                            "end": 754,
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false
                          }
                        }
                      },
                      "value": {
                        "type": "NewExpression",
                        "start": 757,
                        "end": 773,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 761,
                          "end": 771,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 144,
                  "decorators": [],
                  "name": "C3_public",
                  "optional": false
                },
                "implements": [],
                "superClass": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ClassDeclaration",
              "start": 795,
              "end": 1428,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 811,
                "end": 1428,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 821,
                    "end": 854,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 829,
                      "end": 842,
                      "decorators": [],
                      "name": "C4_v1_private",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 842,
                      "end": 853,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 844,
                        "end": 853,
                        "typeName": {
                          "type": "Identifier",
                          "start": 844,
                          "end": 853,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 863,
                    "end": 894,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 870,
                      "end": 882,
                      "decorators": [],
                      "name": "C4_v2_public",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 882,
                      "end": 893,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 884,
                        "end": 893,
                        "typeName": {
                          "type": "Identifier",
                          "start": 884,
                          "end": 893,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 903,
                    "end": 937,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 911,
                      "end": 924,
                      "decorators": [],
                      "name": "C4_v3_private",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 924,
                      "end": 936,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 926,
                        "end": 936,
                        "typeName": {
                          "type": "Identifier",
                          "start": 926,
                          "end": 936,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 946,
                    "end": 978,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 953,
                      "end": 965,
                      "decorators": [],
                      "name": "C4_v4_public",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 965,
                      "end": 977,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 967,
                        "end": 977,
                        "typeName": {
                          "type": "Identifier",
                          "start": 967,
                          "end": 977,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 988,
                    "end": 1029,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 996,
                      "end": 1010,
                      "decorators": [],
                      "name": "C4_v11_private",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 1013,
                      "end": 1028,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1017,
                        "end": 1026,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1038,
                    "end": 1077,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1045,
                      "end": 1058,
                      "decorators": [],
                      "name": "C4_v12_public",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 1061,
                      "end": 1076,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1065,
                        "end": 1074,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1086,
                    "end": 1128,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1094,
                      "end": 1108,
                      "decorators": [],
                      "name": "C4_v13_private",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 1111,
                      "end": 1127,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1115,
                        "end": 1125,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1137,
                    "end": 1177,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1144,
                      "end": 1157,
                      "decorators": [],
                      "name": "C4_v14_public",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 1160,
                      "end": 1176,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1164,
                        "end": 1174,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1187,
                    "end": 1239,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1195,
                      "end": 1209,
                      "decorators": [],
                      "name": "C4_v21_private",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1209,
                      "end": 1220,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1211,
                        "end": 1220,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1211,
                          "end": 1220,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false
                        }
                      }
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 1223,
                      "end": 1238,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1227,
                        "end": 1236,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1248,
                    "end": 1298,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1255,
                      "end": 1268,
                      "decorators": [],
                      "name": "C4_v22_public",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1268,
                      "end": 1279,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1270,
                        "end": 1279,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1270,
                          "end": 1279,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false
                        }
                      }
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 1282,
                      "end": 1297,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1286,
                        "end": 1295,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1307,
                    "end": 1361,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1315,
                      "end": 1329,
                      "decorators": [],
                      "name": "C4_v23_private",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1329,
                      "end": 1341,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1331,
                        "end": 1341,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1331,
                          "end": 1341,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false
                        }
                      }
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 1344,
                      "end": 1360,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1348,
                        "end": 1358,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1370,
                    "end": 1422,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1377,
                      "end": 1390,
                      "decorators": [],
                      "name": "C4_v24_public",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1390,
                      "end": 1402,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1392,
                        "end": 1402,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1392,
                          "end": 1402,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false
                        }
                      }
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 1405,
                      "end": 1421,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1409,
                        "end": 1419,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 801,
                "end": 810,
                "decorators": [],
                "name": "C4_public",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            {
              "type": "VariableDeclaration",
              "start": 1434,
              "end": 1463,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1438,
                  "end": 1462,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1438,
                    "end": 1462,
                    "decorators": [],
                    "name": "m1_v1_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1451,
                      "end": 1462,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1453,
                        "end": 1462,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1453,
                          "end": 1462,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1468,
              "end": 1503,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1475,
                "end": 1503,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1479,
                    "end": 1502,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1479,
                      "end": 1502,
                      "decorators": [],
                      "name": "m1_v2_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1491,
                        "end": 1502,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1493,
                          "end": 1502,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1493,
                            "end": 1502,
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false
                          }
                        }
                      }
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "VariableDeclaration",
              "start": 1508,
              "end": 1538,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1512,
                  "end": 1537,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1512,
                    "end": 1537,
                    "decorators": [],
                    "name": "m1_v3_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1525,
                      "end": 1537,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1527,
                        "end": 1537,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1527,
                          "end": 1537,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1543,
              "end": 1579,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1550,
                "end": 1579,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1554,
                    "end": 1578,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1554,
                      "end": 1578,
                      "decorators": [],
                      "name": "m1_v4_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1566,
                        "end": 1578,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1568,
                          "end": 1578,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1568,
                            "end": 1578,
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false
                          }
                        }
                      }
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "VariableDeclaration",
              "start": 1594,
              "end": 1631,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1598,
                  "end": 1630,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1598,
                    "end": 1612,
                    "decorators": [],
                    "name": "m1_v11_private",
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1615,
                    "end": 1630,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1619,
                      "end": 1628,
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1636,
              "end": 1679,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1643,
                "end": 1679,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1647,
                    "end": 1678,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1647,
                      "end": 1660,
                      "decorators": [],
                      "name": "m1_v12_public",
                      "optional": false
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 1663,
                      "end": 1678,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1667,
                        "end": 1676,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "VariableDeclaration",
              "start": 1684,
              "end": 1722,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1688,
                  "end": 1721,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1688,
                    "end": 1702,
                    "decorators": [],
                    "name": "m1_v13_private",
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1705,
                    "end": 1721,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1709,
                      "end": 1719,
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1727,
              "end": 1771,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1734,
                "end": 1771,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1738,
                    "end": 1770,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1738,
                      "end": 1751,
                      "decorators": [],
                      "name": "m1_v14_public",
                      "optional": false
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 1754,
                      "end": 1770,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1758,
                        "end": 1768,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "VariableDeclaration",
              "start": 1786,
              "end": 1834,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1790,
                  "end": 1833,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1790,
                    "end": 1815,
                    "decorators": [],
                    "name": "m1_v21_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1804,
                      "end": 1815,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1806,
                        "end": 1815,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1806,
                          "end": 1815,
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1818,
                    "end": 1833,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1822,
                      "end": 1831,
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1839,
              "end": 1893,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1846,
                "end": 1893,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1850,
                    "end": 1892,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1850,
                      "end": 1874,
                      "decorators": [],
                      "name": "m1_v22_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1863,
                        "end": 1874,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1865,
                          "end": 1874,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1865,
                            "end": 1874,
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false
                          }
                        }
                      }
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 1877,
                      "end": 1892,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1881,
                        "end": 1890,
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "VariableDeclaration",
              "start": 1898,
              "end": 1948,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1902,
                  "end": 1947,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1902,
                    "end": 1928,
                    "decorators": [],
                    "name": "m1_v23_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1916,
                      "end": 1928,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1918,
                        "end": 1928,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1918,
                          "end": 1928,
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1931,
                    "end": 1947,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1935,
                      "end": 1945,
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1953,
              "end": 2009,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1960,
                "end": 2009,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1964,
                    "end": 2008,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1964,
                      "end": 1989,
                      "decorators": [],
                      "name": "m1_v24_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1977,
                        "end": 1989,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1979,
                          "end": 1989,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1979,
                            "end": 1989,
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false
                          }
                        }
                      }
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 1992,
                      "end": 2008,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1996,
                        "end": 2006,
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false
                      }
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
          "start": 14,
          "end": 16,
          "decorators": [],
          "name": "m1",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2022,
      "end": 4213,
      "body": {
        "type": "TSModuleBlock",
        "start": 2032,
        "end": 4213,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 2038,
            "end": 2104,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 2045,
              "end": 2104,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 2064,
                "end": 2104,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 2074,
                    "end": 2098,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2082,
                      "end": 2084,
                      "decorators": [],
                      "name": "f1",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2084,
                      "end": 2098,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2087,
                        "end": 2098,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 2051,
                "end": 2063,
                "decorators": [],
                "name": "m2_C1_public",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 2110,
            "end": 2137,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2130,
              "end": 2137,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2116,
              "end": 2129,
              "decorators": [],
              "name": "m2_C2_private",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2143,
            "end": 2871,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 2150,
              "end": 2871,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 2169,
                "end": 2871,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 2179,
                    "end": 2218,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2187,
                      "end": 2203,
                      "decorators": [],
                      "name": "m2_C3_v1_private",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2203,
                      "end": 2217,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2205,
                        "end": 2217,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2205,
                          "end": 2217,
                          "decorators": [],
                          "name": "m2_C1_public",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 2227,
                    "end": 2264,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2234,
                      "end": 2249,
                      "decorators": [],
                      "name": "m2_C3_v2_public",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2249,
                      "end": 2263,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2251,
                        "end": 2263,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2251,
                          "end": 2263,
                          "decorators": [],
                          "name": "m2_C1_public",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 2273,
                    "end": 2313,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2281,
                      "end": 2297,
                      "decorators": [],
                      "name": "m2_C3_v3_private",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2297,
                      "end": 2312,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2299,
                        "end": 2312,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2299,
                          "end": 2312,
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 2322,
                    "end": 2360,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2329,
                      "end": 2344,
                      "decorators": [],
                      "name": "m2_C3_v4_public",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2344,
                      "end": 2359,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2346,
                        "end": 2359,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2346,
                          "end": 2359,
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 2370,
                    "end": 2417,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2378,
                      "end": 2395,
                      "decorators": [],
                      "name": "m2_C3_v11_private",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 2398,
                      "end": 2416,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2402,
                        "end": 2414,
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 2426,
                    "end": 2471,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2433,
                      "end": 2449,
                      "decorators": [],
                      "name": "m2_C3_v12_public",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 2452,
                      "end": 2470,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2456,
                        "end": 2468,
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 2480,
                    "end": 2528,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2488,
                      "end": 2505,
                      "decorators": [],
                      "name": "m2_C3_v13_private",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 2508,
                      "end": 2527,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2512,
                        "end": 2525,
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 2537,
                    "end": 2583,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2544,
                      "end": 2560,
                      "decorators": [],
                      "name": "m2_C3_v14_public",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 2563,
                      "end": 2582,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2567,
                        "end": 2580,
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 2594,
                    "end": 2655,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2602,
                      "end": 2619,
                      "decorators": [],
                      "name": "m2_C3_v21_private",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2619,
                      "end": 2633,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2621,
                        "end": 2633,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2621,
                          "end": 2633,
                          "decorators": [],
                          "name": "m2_C1_public",
                          "optional": false
                        }
                      }
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 2636,
                      "end": 2654,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2640,
                        "end": 2652,
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 2664,
                    "end": 2723,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2671,
                      "end": 2687,
                      "decorators": [],
                      "name": "m2_C3_v22_public",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2687,
                      "end": 2701,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2689,
                        "end": 2701,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2689,
                          "end": 2701,
                          "decorators": [],
                          "name": "m2_C1_public",
                          "optional": false
                        }
                      }
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 2704,
                      "end": 2722,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2708,
                        "end": 2720,
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 2732,
                    "end": 2795,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2740,
                      "end": 2757,
                      "decorators": [],
                      "name": "m2_C3_v23_private",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2757,
                      "end": 2772,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2759,
                        "end": 2772,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2759,
                          "end": 2772,
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false
                        }
                      }
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 2775,
                      "end": 2794,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2779,
                        "end": 2792,
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 2804,
                    "end": 2865,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2811,
                      "end": 2827,
                      "decorators": [],
                      "name": "m2_C3_v24_public",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2827,
                      "end": 2842,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2829,
                        "end": 2842,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2829,
                          "end": 2842,
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false
                        }
                      }
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 2845,
                      "end": 2864,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2849,
                        "end": 2862,
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 2156,
                "end": 2168,
                "decorators": [],
                "name": "m2_C3_public",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 2877,
            "end": 3597,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2896,
              "end": 3597,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2906,
                  "end": 2945,
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2914,
                    "end": 2930,
                    "decorators": [],
                    "name": "m2_C4_v1_private",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2930,
                    "end": 2944,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2932,
                      "end": 2944,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2932,
                        "end": 2944,
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2954,
                  "end": 2991,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2961,
                    "end": 2976,
                    "decorators": [],
                    "name": "m2_C4_v2_public",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2976,
                    "end": 2990,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2978,
                      "end": 2990,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2978,
                        "end": 2990,
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3000,
                  "end": 3040,
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3008,
                    "end": 3024,
                    "decorators": [],
                    "name": "m2_C4_v3_private",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3024,
                    "end": 3039,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3026,
                      "end": 3039,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3026,
                        "end": 3039,
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3049,
                  "end": 3087,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3056,
                    "end": 3071,
                    "decorators": [],
                    "name": "m2_C4_v4_public",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3071,
                    "end": 3086,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3073,
                      "end": 3086,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3073,
                        "end": 3086,
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3097,
                  "end": 3144,
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3105,
                    "end": 3122,
                    "decorators": [],
                    "name": "m2_C4_v11_private",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "NewExpression",
                    "start": 3125,
                    "end": 3143,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 3129,
                      "end": 3141,
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3153,
                  "end": 3198,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3160,
                    "end": 3176,
                    "decorators": [],
                    "name": "m2_C4_v12_public",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "NewExpression",
                    "start": 3179,
                    "end": 3197,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 3183,
                      "end": 3195,
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3207,
                  "end": 3255,
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3215,
                    "end": 3232,
                    "decorators": [],
                    "name": "m2_C4_v13_private",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "NewExpression",
                    "start": 3235,
                    "end": 3254,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 3239,
                      "end": 3252,
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3264,
                  "end": 3310,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3271,
                    "end": 3287,
                    "decorators": [],
                    "name": "m2_C4_v14_public",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "NewExpression",
                    "start": 3290,
                    "end": 3309,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 3294,
                      "end": 3307,
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3320,
                  "end": 3381,
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3328,
                    "end": 3345,
                    "decorators": [],
                    "name": "m2_C4_v21_private",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3345,
                    "end": 3359,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3347,
                      "end": 3359,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3347,
                        "end": 3359,
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false
                      }
                    }
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 3362,
                    "end": 3380,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 3366,
                      "end": 3378,
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3390,
                  "end": 3449,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3397,
                    "end": 3413,
                    "decorators": [],
                    "name": "m2_C4_v22_public",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3413,
                    "end": 3427,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3415,
                      "end": 3427,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3415,
                        "end": 3427,
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false
                      }
                    }
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 3430,
                    "end": 3448,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 3434,
                      "end": 3446,
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3458,
                  "end": 3521,
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3466,
                    "end": 3483,
                    "decorators": [],
                    "name": "m2_C4_v23_private",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3483,
                    "end": 3498,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3485,
                      "end": 3498,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3485,
                        "end": 3498,
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false
                      }
                    }
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 3501,
                    "end": 3520,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 3505,
                      "end": 3518,
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3530,
                  "end": 3591,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3537,
                    "end": 3553,
                    "decorators": [],
                    "name": "m2_C4_v24_public",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3553,
                    "end": 3568,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3555,
                      "end": 3568,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3555,
                        "end": 3568,
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false
                      }
                    }
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 3571,
                    "end": 3590,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 3575,
                      "end": 3588,
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2883,
              "end": 2895,
              "decorators": [],
              "name": "m2_C4_public",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "VariableDeclaration",
            "start": 3603,
            "end": 3635,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3607,
                "end": 3634,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3607,
                  "end": 3634,
                  "decorators": [],
                  "name": "m2_v1_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3620,
                    "end": 3634,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3622,
                      "end": 3634,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3622,
                        "end": 3634,
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3640,
            "end": 3678,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3647,
              "end": 3678,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3651,
                  "end": 3677,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 3651,
                    "end": 3677,
                    "decorators": [],
                    "name": "m2_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3663,
                      "end": 3677,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3665,
                        "end": 3677,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3665,
                          "end": 3677,
                          "decorators": [],
                          "name": "m2_C1_public",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 3683,
            "end": 3716,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3687,
                "end": 3715,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3687,
                  "end": 3715,
                  "decorators": [],
                  "name": "m2_v3_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3700,
                    "end": 3715,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3702,
                      "end": 3715,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3702,
                        "end": 3715,
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3721,
            "end": 3760,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3728,
              "end": 3760,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3732,
                  "end": 3759,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 3732,
                    "end": 3759,
                    "decorators": [],
                    "name": "m2_v4_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3744,
                      "end": 3759,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3746,
                        "end": 3759,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3746,
                          "end": 3759,
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 3767,
            "end": 3807,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3771,
                "end": 3806,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3771,
                  "end": 3785,
                  "decorators": [],
                  "name": "m2_v11_private",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 3788,
                  "end": 3806,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 3792,
                    "end": 3804,
                    "decorators": [],
                    "name": "m2_C1_public",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3812,
            "end": 3858,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3819,
              "end": 3858,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3823,
                  "end": 3857,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 3823,
                    "end": 3836,
                    "decorators": [],
                    "name": "m2_v12_public",
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 3839,
                    "end": 3857,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 3843,
                      "end": 3855,
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 3863,
            "end": 3904,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3867,
                "end": 3903,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3867,
                  "end": 3881,
                  "decorators": [],
                  "name": "m2_v13_private",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 3884,
                  "end": 3903,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 3888,
                    "end": 3901,
                    "decorators": [],
                    "name": "m2_C2_private",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3909,
            "end": 3956,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3916,
              "end": 3956,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3920,
                  "end": 3955,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 3920,
                    "end": 3933,
                    "decorators": [],
                    "name": "m2_v14_public",
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 3936,
                    "end": 3955,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 3940,
                      "end": 3953,
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 3963,
            "end": 4017,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3967,
                "end": 4016,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3967,
                  "end": 3995,
                  "decorators": [],
                  "name": "m2_v21_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3981,
                    "end": 3995,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3983,
                      "end": 3995,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3983,
                        "end": 3995,
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "start": 3998,
                  "end": 4016,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 4002,
                    "end": 4014,
                    "decorators": [],
                    "name": "m2_C1_public",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4022,
            "end": 4082,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4029,
              "end": 4082,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4033,
                  "end": 4081,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 4033,
                    "end": 4060,
                    "decorators": [],
                    "name": "m2_v22_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4046,
                      "end": 4060,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4048,
                        "end": 4060,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4048,
                          "end": 4060,
                          "decorators": [],
                          "name": "m2_C1_public",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 4063,
                    "end": 4081,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 4067,
                      "end": 4079,
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 4087,
            "end": 4143,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4091,
                "end": 4142,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4091,
                  "end": 4120,
                  "decorators": [],
                  "name": "m2_v23_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4105,
                    "end": 4120,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4107,
                      "end": 4120,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4107,
                        "end": 4120,
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "start": 4123,
                  "end": 4142,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 4127,
                    "end": 4140,
                    "decorators": [],
                    "name": "m2_C2_private",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4148,
            "end": 4210,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4155,
              "end": 4210,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4159,
                  "end": 4209,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 4159,
                    "end": 4187,
                    "decorators": [],
                    "name": "m2_v24_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4172,
                      "end": 4187,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4174,
                        "end": 4187,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4174,
                          "end": 4187,
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 4190,
                    "end": 4209,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 4194,
                      "end": 4207,
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false
                    }
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
        "start": 2029,
        "end": 2031,
        "decorators": [],
        "name": "m2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4215,
      "end": 4270,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 4222,
        "end": 4270,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 4242,
          "end": 4270,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 4248,
              "end": 4268,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4256,
                "end": 4258,
                "decorators": [],
                "name": "f1",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 4258,
                "end": 4268,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4261,
                  "end": 4268,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 4228,
          "end": 4241,
          "decorators": [],
          "name": "glo_C1_public",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 4272,
      "end": 4296,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 4293,
        "end": 4296,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4278,
        "end": 4292,
        "decorators": [],
        "name": "glo_C2_private",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4298,
      "end": 5028,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 4305,
        "end": 5028,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 4325,
          "end": 5028,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 4331,
              "end": 4372,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 4339,
                "end": 4356,
                "decorators": [],
                "name": "glo_C3_v1_private",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4356,
                "end": 4371,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4358,
                  "end": 4371,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4358,
                    "end": 4371,
                    "decorators": [],
                    "name": "glo_C1_public",
                    "optional": false
                  }
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 4377,
              "end": 4416,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 4384,
                "end": 4400,
                "decorators": [],
                "name": "glo_C3_v2_public",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4400,
                "end": 4415,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4402,
                  "end": 4415,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4402,
                    "end": 4415,
                    "decorators": [],
                    "name": "glo_C1_public",
                    "optional": false
                  }
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 4421,
              "end": 4463,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 4429,
                "end": 4446,
                "decorators": [],
                "name": "glo_C3_v3_private",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4446,
                "end": 4462,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4448,
                  "end": 4462,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4448,
                    "end": 4462,
                    "decorators": [],
                    "name": "glo_C2_private",
                    "optional": false
                  }
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 4468,
              "end": 4508,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 4475,
                "end": 4491,
                "decorators": [],
                "name": "glo_C3_v4_public",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4491,
                "end": 4507,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4493,
                  "end": 4507,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4493,
                    "end": 4507,
                    "decorators": [],
                    "name": "glo_C2_private",
                    "optional": false
                  }
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 4522,
              "end": 4571,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 4530,
                "end": 4548,
                "decorators": [],
                "name": "glo_C3_v11_private",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "NewExpression",
                "start": 4551,
                "end": 4570,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 4555,
                  "end": 4568,
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 4576,
              "end": 4623,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 4583,
                "end": 4600,
                "decorators": [],
                "name": "glo_C3_v12_public",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "NewExpression",
                "start": 4603,
                "end": 4622,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 4607,
                  "end": 4620,
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 4628,
              "end": 4678,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 4636,
                "end": 4654,
                "decorators": [],
                "name": "glo_C3_v13_private",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "NewExpression",
                "start": 4657,
                "end": 4677,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 4661,
                  "end": 4675,
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 4683,
              "end": 4731,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 4690,
                "end": 4707,
                "decorators": [],
                "name": "glo_C3_v14_public",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "NewExpression",
                "start": 4710,
                "end": 4730,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 4714,
                  "end": 4728,
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 4747,
              "end": 4811,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 4755,
                "end": 4773,
                "decorators": [],
                "name": "glo_C3_v21_private",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4773,
                "end": 4788,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4775,
                  "end": 4788,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4775,
                    "end": 4788,
                    "decorators": [],
                    "name": "glo_C1_public",
                    "optional": false
                  }
                }
              },
              "value": {
                "type": "NewExpression",
                "start": 4791,
                "end": 4810,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 4795,
                  "end": 4808,
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 4816,
              "end": 4878,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 4823,
                "end": 4840,
                "decorators": [],
                "name": "glo_C3_v22_public",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4840,
                "end": 4855,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4842,
                  "end": 4855,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4842,
                    "end": 4855,
                    "decorators": [],
                    "name": "glo_C1_public",
                    "optional": false
                  }
                }
              },
              "value": {
                "type": "NewExpression",
                "start": 4858,
                "end": 4877,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 4862,
                  "end": 4875,
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 4883,
              "end": 4949,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 4891,
                "end": 4909,
                "decorators": [],
                "name": "glo_C3_v23_private",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4909,
                "end": 4925,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4911,
                  "end": 4925,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4911,
                    "end": 4925,
                    "decorators": [],
                    "name": "glo_C2_private",
                    "optional": false
                  }
                }
              },
              "value": {
                "type": "NewExpression",
                "start": 4928,
                "end": 4948,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 4932,
                  "end": 4946,
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 4954,
              "end": 5018,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 4961,
                "end": 4978,
                "decorators": [],
                "name": "glo_C3_v24_public",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4978,
                "end": 4994,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4980,
                  "end": 4994,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4980,
                    "end": 4994,
                    "decorators": [],
                    "name": "glo_C2_private",
                    "optional": false
                  }
                }
              },
              "value": {
                "type": "NewExpression",
                "start": 4997,
                "end": 5017,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 5001,
                  "end": 5015,
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 4311,
          "end": 4324,
          "decorators": [],
          "name": "glo_C3_public",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 5030,
      "end": 5727,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 5050,
        "end": 5727,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 5056,
            "end": 5097,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5064,
              "end": 5081,
              "decorators": [],
              "name": "glo_C4_v1_private",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5081,
              "end": 5096,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5083,
                "end": 5096,
                "typeName": {
                  "type": "Identifier",
                  "start": 5083,
                  "end": 5096,
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5102,
            "end": 5141,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5109,
              "end": 5125,
              "decorators": [],
              "name": "glo_C4_v2_public",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5125,
              "end": 5140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5127,
                "end": 5140,
                "typeName": {
                  "type": "Identifier",
                  "start": 5127,
                  "end": 5140,
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5146,
            "end": 5188,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5154,
              "end": 5171,
              "decorators": [],
              "name": "glo_C4_v3_private",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5171,
              "end": 5187,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5173,
                "end": 5187,
                "typeName": {
                  "type": "Identifier",
                  "start": 5173,
                  "end": 5187,
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5193,
            "end": 5233,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5200,
              "end": 5216,
              "decorators": [],
              "name": "glo_C4_v4_public",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5216,
              "end": 5232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5218,
                "end": 5232,
                "typeName": {
                  "type": "Identifier",
                  "start": 5218,
                  "end": 5232,
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5239,
            "end": 5288,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5247,
              "end": 5265,
              "decorators": [],
              "name": "glo_C4_v11_private",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 5268,
              "end": 5287,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 5272,
                "end": 5285,
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5293,
            "end": 5340,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5300,
              "end": 5317,
              "decorators": [],
              "name": "glo_C4_v12_public",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 5320,
              "end": 5339,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 5324,
                "end": 5337,
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5345,
            "end": 5395,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5353,
              "end": 5371,
              "decorators": [],
              "name": "glo_C4_v13_private",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 5374,
              "end": 5394,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 5378,
                "end": 5392,
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5400,
            "end": 5448,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5407,
              "end": 5424,
              "decorators": [],
              "name": "glo_C4_v14_public",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 5427,
              "end": 5447,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 5431,
                "end": 5445,
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5454,
            "end": 5518,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5462,
              "end": 5480,
              "decorators": [],
              "name": "glo_C4_v21_private",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5480,
              "end": 5495,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5482,
                "end": 5495,
                "typeName": {
                  "type": "Identifier",
                  "start": 5482,
                  "end": 5495,
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false
                }
              }
            },
            "value": {
              "type": "NewExpression",
              "start": 5498,
              "end": 5517,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 5502,
                "end": 5515,
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5523,
            "end": 5585,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5530,
              "end": 5547,
              "decorators": [],
              "name": "glo_C4_v22_public",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5547,
              "end": 5562,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5549,
                "end": 5562,
                "typeName": {
                  "type": "Identifier",
                  "start": 5549,
                  "end": 5562,
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false
                }
              }
            },
            "value": {
              "type": "NewExpression",
              "start": 5565,
              "end": 5584,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 5569,
                "end": 5582,
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5590,
            "end": 5656,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5598,
              "end": 5616,
              "decorators": [],
              "name": "glo_C4_v23_private",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5616,
              "end": 5632,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5618,
                "end": 5632,
                "typeName": {
                  "type": "Identifier",
                  "start": 5618,
                  "end": 5632,
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false
                }
              }
            },
            "value": {
              "type": "NewExpression",
              "start": 5635,
              "end": 5655,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 5639,
                "end": 5653,
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5661,
            "end": 5725,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5668,
              "end": 5685,
              "decorators": [],
              "name": "glo_C4_v24_public",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5685,
              "end": 5701,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5687,
                "end": 5701,
                "typeName": {
                  "type": "Identifier",
                  "start": 5687,
                  "end": 5701,
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false
                }
              }
            },
            "value": {
              "type": "NewExpression",
              "start": 5704,
              "end": 5724,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 5708,
                "end": 5722,
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 5036,
        "end": 5049,
        "decorators": [],
        "name": "glo_C4_public",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 5729,
      "end": 5763,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5733,
          "end": 5762,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5733,
            "end": 5762,
            "decorators": [],
            "name": "glo_v1_private",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5747,
              "end": 5762,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5749,
                "end": 5762,
                "typeName": {
                  "type": "Identifier",
                  "start": 5749,
                  "end": 5762,
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5764,
      "end": 5804,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 5771,
        "end": 5804,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 5775,
            "end": 5803,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 5775,
              "end": 5803,
              "decorators": [],
              "name": "glo_v2_public",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5788,
                "end": 5803,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5790,
                  "end": 5803,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5790,
                    "end": 5803,
                    "decorators": [],
                    "name": "glo_C1_public",
                    "optional": false
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 5805,
      "end": 5840,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5809,
          "end": 5839,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5809,
            "end": 5839,
            "decorators": [],
            "name": "glo_v3_private",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5823,
              "end": 5839,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5825,
                "end": 5839,
                "typeName": {
                  "type": "Identifier",
                  "start": 5825,
                  "end": 5839,
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5841,
      "end": 5882,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 5848,
        "end": 5882,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 5852,
            "end": 5881,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 5852,
              "end": 5881,
              "decorators": [],
              "name": "glo_v4_public",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5865,
                "end": 5881,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5867,
                  "end": 5881,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5867,
                    "end": 5881,
                    "decorators": [],
                    "name": "glo_C2_private",
                    "optional": false
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 5893,
      "end": 5935,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5897,
          "end": 5934,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5897,
            "end": 5912,
            "decorators": [],
            "name": "glo_v11_private",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5915,
            "end": 5934,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 5919,
              "end": 5932,
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5936,
      "end": 5984,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 5943,
        "end": 5984,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 5947,
            "end": 5983,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 5947,
              "end": 5961,
              "decorators": [],
              "name": "glo_v12_public",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 5964,
              "end": 5983,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 5968,
                "end": 5981,
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 5985,
      "end": 6028,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5989,
          "end": 6027,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5989,
            "end": 6004,
            "decorators": [],
            "name": "glo_v13_private",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 6007,
            "end": 6027,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 6011,
              "end": 6025,
              "decorators": [],
              "name": "glo_C2_private",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 6029,
      "end": 6078,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 6036,
        "end": 6078,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 6040,
            "end": 6077,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 6040,
              "end": 6054,
              "decorators": [],
              "name": "glo_v14_public",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 6057,
              "end": 6077,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 6061,
                "end": 6075,
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 6089,
      "end": 6146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6093,
          "end": 6145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6093,
            "end": 6123,
            "decorators": [],
            "name": "glo_v21_private",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6108,
              "end": 6123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6110,
                "end": 6123,
                "typeName": {
                  "type": "Identifier",
                  "start": 6110,
                  "end": 6123,
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 6126,
            "end": 6145,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 6130,
              "end": 6143,
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 6147,
      "end": 6210,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 6154,
        "end": 6210,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 6158,
            "end": 6209,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 6158,
              "end": 6187,
              "decorators": [],
              "name": "glo_v22_public",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6172,
                "end": 6187,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6174,
                  "end": 6187,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6174,
                    "end": 6187,
                    "decorators": [],
                    "name": "glo_C1_public",
                    "optional": false
                  }
                }
              }
            },
            "init": {
              "type": "NewExpression",
              "start": 6190,
              "end": 6209,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 6194,
                "end": 6207,
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 6211,
      "end": 6270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6215,
          "end": 6269,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6215,
            "end": 6246,
            "decorators": [],
            "name": "glo_v23_private",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6230,
              "end": 6246,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6232,
                "end": 6246,
                "typeName": {
                  "type": "Identifier",
                  "start": 6232,
                  "end": 6246,
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 6249,
            "end": 6269,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 6253,
              "end": 6267,
              "decorators": [],
              "name": "glo_C2_private",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 6271,
      "end": 6336,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 6278,
        "end": 6336,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 6282,
            "end": 6335,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 6282,
              "end": 6312,
              "decorators": [],
              "name": "glo_v24_public",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6296,
                "end": 6312,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6298,
                  "end": 6312,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6298,
                    "end": 6312,
                    "decorators": [],
                    "name": "glo_C2_private",
                    "optional": false
                  }
                }
              }
            },
            "init": {
              "type": "NewExpression",
              "start": 6315,
              "end": 6335,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 6319,
                "end": 6333,
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false
              }
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
  ],
  "sourceType": "script"
}
```
