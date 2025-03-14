subtypingWithObjectMembersOptionality.ts
```json
{
  "type": "Program",
  "start": 68,
  "end": 1600,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 68,
      "end": 99,
      "body": {
        "type": "TSInterfaceBody",
        "start": 83,
        "end": 99,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 97,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 90,
                "end": 96
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 82,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 100,
      "end": 147,
      "body": {
        "type": "TSInterfaceBody",
        "start": 131,
        "end": 147,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 133,
            "end": 145,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 136,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 144,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 126,
          "end": 130,
          "expression": {
            "type": "Identifier",
            "start": 126,
            "end": 130,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 117,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 148,
      "end": 199,
      "body": {
        "type": "TSInterfaceBody",
        "start": 183,
        "end": 199,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 185,
            "end": 197,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 188,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 196,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 175,
          "end": 182,
          "expression": {
            "type": "Identifier",
            "start": 175,
            "end": 182,
            "decorators": [],
            "name": "Derived",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 166,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 811,
      "end": 842,
      "body": {
        "type": "TSInterfaceBody",
        "start": 823,
        "end": 842,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 829,
            "end": 840,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 829,
              "end": 832,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 833,
              "end": 839,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 835,
                "end": 839,
                "typeName": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 839,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 821,
        "end": 822,
        "decorators": [],
        "name": "T",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 844,
      "end": 886,
      "body": {
        "type": "TSInterfaceBody",
        "start": 866,
        "end": 886,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 872,
            "end": 884,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 872,
              "end": 875,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 875,
              "end": 884,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 877,
                "end": 884,
                "typeName": {
                  "type": "Identifier",
                  "start": 877,
                  "end": 884,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 864,
          "end": 865,
          "expression": {
            "type": "Identifier",
            "start": 864,
            "end": 865,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 854,
        "end": 855,
        "decorators": [],
        "name": "S",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 888,
      "end": 919,
      "body": {
        "type": "TSInterfaceBody",
        "start": 901,
        "end": 919,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 907,
            "end": 916,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 907,
              "end": 908,
              "raw": "1",
              "value": 1
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 909,
              "end": 915,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 911,
                "end": 915,
                "typeName": {
                  "type": "Identifier",
                  "start": 911,
                  "end": 915,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 898,
        "end": 900,
        "decorators": [],
        "name": "T2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 921,
      "end": 964,
      "body": {
        "type": "TSInterfaceBody",
        "start": 945,
        "end": 964,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 951,
            "end": 962,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 951,
              "end": 952,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 952,
              "end": 961,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 954,
                "end": 961,
                "typeName": {
                  "type": "Identifier",
                  "start": 954,
                  "end": 961,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 942,
          "end": 944,
          "expression": {
            "type": "Identifier",
            "start": 942,
            "end": 944,
            "decorators": [],
            "name": "T2",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 931,
        "end": 933,
        "decorators": [],
        "name": "S2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 966,
      "end": 998,
      "body": {
        "type": "TSInterfaceBody",
        "start": 979,
        "end": 998,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 985,
            "end": 996,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 985,
              "end": 988,
              "raw": "'1'",
              "value": "1"
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 989,
              "end": 995,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 991,
                "end": 995,
                "typeName": {
                  "type": "Identifier",
                  "start": 991,
                  "end": 995,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 976,
        "end": 978,
        "decorators": [],
        "name": "T3",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1000,
      "end": 1046,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1024,
        "end": 1046,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1030,
            "end": 1044,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 1030,
              "end": 1034,
              "raw": "'1.'",
              "value": "1."
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1034,
              "end": 1043,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1036,
                "end": 1043,
                "typeName": {
                  "type": "Identifier",
                  "start": 1036,
                  "end": 1043,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1021,
          "end": 1023,
          "expression": {
            "type": "Identifier",
            "start": 1021,
            "end": 1023,
            "decorators": [],
            "name": "T3",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1010,
        "end": 1012,
        "decorators": [],
        "name": "S3",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1071,
      "end": 1094,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1075,
          "end": 1093,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1075,
            "end": 1093,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1076,
              "end": 1093,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1078,
                "end": 1093,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1080,
                    "end": 1091,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1080,
                      "end": 1083,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1084,
                      "end": 1090,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1086,
                        "end": 1090,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1086,
                          "end": 1090,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 1095,
      "end": 1126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1099,
          "end": 1125,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1099,
            "end": 1100,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1103,
            "end": 1125,
            "properties": [
              {
                "type": "Property",
                "start": 1105,
                "end": 1123,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1105,
                  "end": 1108,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 1110,
                  "end": 1123,
                  "expression": {
                    "type": "Literal",
                    "start": 1119,
                    "end": 1123,
                    "raw": "null",
                    "value": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1111,
                    "end": 1118,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1111,
                      "end": 1118,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1127,
      "end": 1148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1131,
          "end": 1147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1131,
            "end": 1132,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 1135,
            "end": 1147,
            "alternate": {
              "type": "Identifier",
              "start": 1146,
              "end": 1147,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "consequent": {
              "type": "Identifier",
              "start": 1142,
              "end": 1143,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "test": {
              "type": "Literal",
              "start": 1135,
              "end": 1139,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1150,
      "end": 1600,
      "body": {
        "type": "TSModuleBlock",
        "start": 1167,
        "end": 1600,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 1173,
            "end": 1212,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1185,
              "end": 1212,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1195,
                  "end": 1206,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1195,
                    "end": 1198,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1199,
                    "end": 1205,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1201,
                      "end": 1205,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1201,
                        "end": 1205,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1183,
              "end": 1184,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1218,
            "end": 1270,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1240,
              "end": 1270,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1250,
                  "end": 1263,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1250,
                    "end": 1253,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1253,
                    "end": 1263,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1255,
                      "end": 1263,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1255,
                        "end": 1263,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1238,
                "end": 1239,
                "expression": {
                  "type": "Identifier",
                  "start": 1238,
                  "end": 1239,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1228,
              "end": 1229,
              "decorators": [],
              "name": "S",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1276,
            "end": 1314,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1289,
              "end": 1314,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1299,
                  "end": 1308,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1299,
                    "end": 1300,
                    "raw": "1",
                    "value": 1
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1301,
                    "end": 1307,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1303,
                      "end": 1307,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1303,
                        "end": 1307,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1286,
              "end": 1288,
              "decorators": [],
              "name": "T2",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1320,
            "end": 1372,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1344,
              "end": 1372,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1354,
                  "end": 1366,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1354,
                    "end": 1355,
                    "raw": "1",
                    "value": 1
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1355,
                    "end": 1365,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1357,
                      "end": 1365,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1357,
                        "end": 1365,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1341,
                "end": 1343,
                "expression": {
                  "type": "Identifier",
                  "start": 1341,
                  "end": 1343,
                  "decorators": [],
                  "name": "T2",
                  "optional": false
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1330,
              "end": 1332,
              "decorators": [],
              "name": "S2",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1378,
            "end": 1418,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1391,
              "end": 1418,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1401,
                  "end": 1412,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1401,
                    "end": 1404,
                    "raw": "'1'",
                    "value": "1"
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1405,
                    "end": 1411,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1407,
                      "end": 1411,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1407,
                        "end": 1411,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1388,
              "end": 1390,
              "decorators": [],
              "name": "T3",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1424,
            "end": 1479,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1448,
              "end": 1479,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1458,
                  "end": 1473,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1458,
                    "end": 1462,
                    "raw": "'1.'",
                    "value": "1."
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1462,
                    "end": 1472,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1464,
                      "end": 1472,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1464,
                        "end": 1472,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1445,
                "end": 1447,
                "expression": {
                  "type": "Identifier",
                  "start": 1445,
                  "end": 1447,
                  "decorators": [],
                  "name": "T3",
                  "optional": false
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1434,
              "end": 1436,
              "decorators": [],
              "name": "S3",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1512,
            "end": 1535,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1516,
                "end": 1534,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1516,
                  "end": 1534,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1517,
                    "end": 1534,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1519,
                      "end": 1534,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1521,
                          "end": 1532,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1521,
                            "end": 1524,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1525,
                            "end": 1531,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1527,
                              "end": 1531,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1527,
                                "end": 1531,
                                "decorators": [],
                                "name": "Base",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
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
            "type": "VariableDeclaration",
            "start": 1540,
            "end": 1572,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1544,
                "end": 1571,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1544,
                  "end": 1545,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1548,
                  "end": 1571,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1550,
                      "end": 1569,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1550,
                        "end": 1553,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "TSTypeAssertion",
                        "start": 1555,
                        "end": 1569,
                        "expression": {
                          "type": "Literal",
                          "start": 1565,
                          "end": 1569,
                          "raw": "null",
                          "value": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1556,
                          "end": 1564,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1556,
                            "end": 1564,
                            "decorators": [],
                            "name": "Derived2",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1577,
            "end": 1598,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1581,
                "end": 1597,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1581,
                  "end": 1582,
                  "decorators": [],
                  "name": "r",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1585,
                  "end": 1597,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1596,
                    "end": 1597,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1592,
                    "end": 1593,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1585,
                    "end": 1589,
                    "raw": "true",
                    "value": true
                  }
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
        "start": 1157,
        "end": 1166,
        "decorators": [],
        "name": "TwoLevels",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
