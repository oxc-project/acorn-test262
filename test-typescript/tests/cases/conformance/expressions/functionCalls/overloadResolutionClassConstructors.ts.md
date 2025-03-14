overloadResolutionClassConstructors.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 3019,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 56,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 31,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 54,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
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
        "start": 6,
        "end": 14,
        "decorators": [],
        "name": "SomeBase",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 111,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 111,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 109,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 75,
        "decorators": [],
        "name": "SomeDerived1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 84,
        "end": 92,
        "decorators": [],
        "name": "SomeBase",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 112,
      "end": 166,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 166,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 154,
            "end": 164,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 130,
        "decorators": [],
        "name": "SomeDerived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 139,
        "end": 147,
        "decorators": [],
        "name": "SomeBase",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 221,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 219,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 185,
        "decorators": [],
        "name": "SomeDerived3",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 194,
        "end": 202,
        "decorators": [],
        "name": "SomeBase",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 288,
      "end": 379,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 298,
        "end": 379,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 304,
            "end": 327,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 304,
              "end": 315,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 315,
              "end": 327,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 316,
                  "end": 325,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 317,
                    "end": 325,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 319,
                      "end": 325
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 332,
            "end": 355,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 332,
              "end": 343,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 343,
              "end": 355,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 344,
                  "end": 353,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 345,
                    "end": 353,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 347,
                      "end": 353
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 360,
            "end": 377,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 371,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 371,
              "end": 377,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 374,
                "end": 377,
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
        "start": 294,
        "end": 297,
        "decorators": [],
        "name": "fn1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 381,
      "end": 400,
      "expression": {
        "type": "NewExpression",
        "start": 381,
        "end": 399,
        "arguments": [
          {
            "type": "Identifier",
            "start": 389,
            "end": 398,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 385,
          "end": 388,
          "decorators": [],
          "name": "fn1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 434,
      "end": 446,
      "expression": {
        "type": "NewExpression",
        "start": 434,
        "end": 445,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 442,
            "end": 444,
            "properties": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 438,
          "end": 441,
          "decorators": [],
          "name": "fn1",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 572,
      "end": 683,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 585,
        "end": 683,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 591,
            "end": 625,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 591,
              "end": 602,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 602,
              "end": 625,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 603,
                  "end": 612,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 604,
                    "end": 612,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 606,
                      "end": 612
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 614,
                  "end": 623,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 615,
                    "end": 623,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 617,
                      "end": 623
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 630,
            "end": 659,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 630,
              "end": 641,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 641,
              "end": 659,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 642,
                  "end": 651,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 643,
                    "end": 651,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 645,
                      "end": 651
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 653,
                  "end": 657,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 654,
                    "end": 657,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 656,
                      "end": 657,
                      "typeName": {
                        "type": "Identifier",
                        "start": 656,
                        "end": 657,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 664,
            "end": 681,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 664,
              "end": 675,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 675,
              "end": 681,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 678,
                "end": 681,
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
        "start": 578,
        "end": 581,
        "decorators": [],
        "name": "fn2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 581,
        "end": 584,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 582,
            "end": 583,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 582,
              "end": 583,
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
      "type": "VariableDeclaration",
      "start": 685,
      "end": 721,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 689,
          "end": 720,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 689,
            "end": 690,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 693,
            "end": 720,
            "arguments": [
              {
                "type": "Literal",
                "start": 707,
                "end": 708,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Identifier",
                "start": 710,
                "end": 719,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 697,
              "end": 700,
              "decorators": [],
              "name": "fn2",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 700,
              "end": 706,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 701,
                  "end": 705,
                  "typeName": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 705,
                    "decorators": [],
                    "name": "Date",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 841,
      "end": 864,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 845,
          "end": 863,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 845,
            "end": 846,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 849,
            "end": 863,
            "arguments": [
              {
                "type": "Literal",
                "start": 857,
                "end": 858,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 860,
                "end": 862,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 853,
              "end": 856,
              "decorators": [],
              "name": "fn2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 987,
      "end": 1008,
      "expression": {
        "type": "NewExpression",
        "start": 987,
        "end": 1007,
        "arguments": [
          {
            "type": "Literal",
            "start": 1001,
            "end": 1003,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 1005,
            "end": 1006,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 991,
          "end": 994,
          "decorators": [],
          "name": "fn2",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 994,
          "end": 1000,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 995,
              "end": 999,
              "typeName": {
                "type": "Identifier",
                "start": 995,
                "end": 999,
                "decorators": [],
                "name": "Date",
                "optional": false
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1140,
      "end": 1155,
      "expression": {
        "type": "NewExpression",
        "start": 1140,
        "end": 1154,
        "arguments": [
          {
            "type": "Literal",
            "start": 1148,
            "end": 1150,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 1152,
            "end": 1153,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1144,
          "end": 1147,
          "decorators": [],
          "name": "fn2",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1235,
      "end": 1377,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1254,
        "end": 1377,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1260,
            "end": 1278,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1260,
              "end": 1271,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1271,
              "end": 1278,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1272,
                  "end": 1276,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1273,
                    "end": 1276,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1275,
                      "end": 1276,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1275,
                        "end": 1276,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1283,
            "end": 1318,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1283,
              "end": 1294,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1294,
              "end": 1318,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1295,
                  "end": 1304,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1296,
                    "end": 1304,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1298,
                      "end": 1304
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1306,
                  "end": 1310,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1307,
                    "end": 1310,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1309,
                      "end": 1310,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1309,
                        "end": 1310,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1312,
                  "end": 1316,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1313,
                    "end": 1316,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1315,
                      "end": 1316,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1315,
                        "end": 1316,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1323,
            "end": 1353,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1323,
              "end": 1334,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1334,
              "end": 1353,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1335,
                  "end": 1339,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1336,
                    "end": 1339,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1338,
                      "end": 1339,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1338,
                        "end": 1339,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1341,
                  "end": 1345,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1342,
                    "end": 1345,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1344,
                      "end": 1345,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1344,
                        "end": 1345,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1347,
                  "end": 1351,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1348,
                    "end": 1351,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1350,
                      "end": 1351,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1350,
                        "end": 1351,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1358,
            "end": 1375,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1358,
              "end": 1369,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1369,
              "end": 1375,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1372,
                "end": 1375,
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
        "start": 1241,
        "end": 1244,
        "decorators": [],
        "name": "fn3",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1244,
        "end": 1253,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1245,
            "end": 1246,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1245,
              "end": 1246,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1248,
            "end": 1249,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1248,
              "end": 1249,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1251,
            "end": 1252,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1251,
              "end": 1252,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1379,
      "end": 1390,
      "expression": {
        "type": "NewExpression",
        "start": 1379,
        "end": 1389,
        "arguments": [
          {
            "type": "Literal",
            "start": 1387,
            "end": 1388,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1383,
          "end": 1386,
          "decorators": [],
          "name": "fn3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1391,
      "end": 1410,
      "expression": {
        "type": "NewExpression",
        "start": 1391,
        "end": 1409,
        "arguments": [
          {
            "type": "Literal",
            "start": 1399,
            "end": 1401,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 1403,
            "end": 1404,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 1406,
            "end": 1408,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1395,
          "end": 1398,
          "decorators": [],
          "name": "fn3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1411,
      "end": 1428,
      "expression": {
        "type": "NewExpression",
        "start": 1411,
        "end": 1427,
        "arguments": [
          {
            "type": "Literal",
            "start": 1419,
            "end": 1420,
            "raw": "5",
            "value": 5
          },
          {
            "type": "Literal",
            "start": 1422,
            "end": 1423,
            "raw": "5",
            "value": 5
          },
          {
            "type": "Literal",
            "start": 1425,
            "end": 1426,
            "raw": "5",
            "value": 5
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1415,
          "end": 1418,
          "decorators": [],
          "name": "fn3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1543,
      "end": 1562,
      "expression": {
        "type": "NewExpression",
        "start": 1543,
        "end": 1561,
        "arguments": [
          {
            "type": "Literal",
            "start": 1559,
            "end": 1560,
            "raw": "4",
            "value": 4
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1547,
          "end": 1550,
          "decorators": [],
          "name": "fn3",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1550,
          "end": 1558,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1551,
              "end": 1557
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1572,
      "end": 1608,
      "expression": {
        "type": "NewExpression",
        "start": 1572,
        "end": 1607,
        "arguments": [
          {
            "type": "Literal",
            "start": 1596,
            "end": 1598,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 1600,
            "end": 1602,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 1604,
            "end": 1606,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1576,
          "end": 1579,
          "decorators": [],
          "name": "fn3",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1579,
          "end": 1595,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1580,
              "end": 1586
            },
            {
              "type": "TSStringKeyword",
              "start": 1588,
              "end": 1594
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1619,
      "end": 1662,
      "expression": {
        "type": "NewExpression",
        "start": 1619,
        "end": 1661,
        "arguments": [
          {
            "type": "Literal",
            "start": 1651,
            "end": 1653,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 1655,
            "end": 1657,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 1659,
            "end": 1660,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1623,
          "end": 1626,
          "decorators": [],
          "name": "fn3",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1626,
          "end": 1650,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1627,
              "end": 1633
            },
            {
              "type": "TSStringKeyword",
              "start": 1635,
              "end": 1641
            },
            {
              "type": "TSStringKeyword",
              "start": 1643,
              "end": 1649
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1770,
      "end": 1812,
      "expression": {
        "type": "NewExpression",
        "start": 1770,
        "end": 1811,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1774,
          "end": 1777,
          "decorators": [],
          "name": "fn3",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1777,
          "end": 1809,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1778,
              "end": 1784
            },
            {
              "type": "TSNumberKeyword",
              "start": 1786,
              "end": 1792
            },
            {
              "type": "TSNumberKeyword",
              "start": 1794,
              "end": 1800
            },
            {
              "type": "TSNumberKeyword",
              "start": 1802,
              "end": 1808
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1917,
      "end": 2017,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1963,
        "end": 2017,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1969,
            "end": 1993,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1969,
              "end": 1980,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1980,
              "end": 1993,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1981,
                  "end": 1985,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1982,
                    "end": 1985,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1984,
                      "end": 1985,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1984,
                        "end": 1985,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1987,
                  "end": 1991,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1988,
                    "end": 1991,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1990,
                      "end": 1991,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1990,
                        "end": 1991,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1998,
            "end": 2015,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1998,
              "end": 2009,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2009,
              "end": 2015,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2012,
                "end": 2015,
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
        "start": 1923,
        "end": 1926,
        "decorators": [],
        "name": "fn4",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1926,
        "end": 1962,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1927,
            "end": 1943,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1937,
              "end": 1943
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1927,
              "end": 1928,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1945,
            "end": 1961,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1955,
              "end": 1961
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1945,
              "end": 1946,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2018,
      "end": 2049,
      "expression": {
        "type": "NewExpression",
        "start": 2018,
        "end": 2048,
        "arguments": [
          {
            "type": "Literal",
            "start": 2042,
            "end": 2044,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 2046,
            "end": 2047,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2022,
          "end": 2025,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2025,
          "end": 2041,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2026,
              "end": 2032
            },
            {
              "type": "TSNumberKeyword",
              "start": 2034,
              "end": 2040
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2050,
      "end": 2081,
      "expression": {
        "type": "NewExpression",
        "start": 2050,
        "end": 2080,
        "arguments": [
          {
            "type": "Literal",
            "start": 2074,
            "end": 2075,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 2077,
            "end": 2079,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2054,
          "end": 2057,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2057,
          "end": 2073,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2058,
              "end": 2064
            },
            {
              "type": "TSNumberKeyword",
              "start": 2066,
              "end": 2072
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2091,
      "end": 2122,
      "expression": {
        "type": "NewExpression",
        "start": 2091,
        "end": 2121,
        "arguments": [
          {
            "type": "Literal",
            "start": 2115,
            "end": 2117,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 2119,
            "end": 2120,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2095,
          "end": 2098,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2098,
          "end": 2114,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2099,
              "end": 2105
            },
            {
              "type": "TSStringKeyword",
              "start": 2107,
              "end": 2113
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2132,
      "end": 2163,
      "expression": {
        "type": "NewExpression",
        "start": 2132,
        "end": 2162,
        "arguments": [
          {
            "type": "Literal",
            "start": 2156,
            "end": 2157,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 2159,
            "end": 2161,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2136,
          "end": 2139,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2139,
          "end": 2155,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2140,
              "end": 2146
            },
            {
              "type": "TSStringKeyword",
              "start": 2148,
              "end": 2154
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2286,
      "end": 2301,
      "expression": {
        "type": "NewExpression",
        "start": 2286,
        "end": 2300,
        "arguments": [
          {
            "type": "Literal",
            "start": 2294,
            "end": 2296,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 2298,
            "end": 2299,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2290,
          "end": 2293,
          "decorators": [],
          "name": "fn4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2302,
      "end": 2317,
      "expression": {
        "type": "NewExpression",
        "start": 2302,
        "end": 2316,
        "arguments": [
          {
            "type": "Literal",
            "start": 2310,
            "end": 2311,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 2313,
            "end": 2315,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2306,
          "end": 2309,
          "decorators": [],
          "name": "fn4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2327,
      "end": 2349,
      "expression": {
        "type": "NewExpression",
        "start": 2327,
        "end": 2348,
        "arguments": [
          {
            "type": "Literal",
            "start": 2335,
            "end": 2336,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Identifier",
            "start": 2338,
            "end": 2347,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2331,
          "end": 2334,
          "decorators": [],
          "name": "fn4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2359,
      "end": 2377,
      "expression": {
        "type": "NewExpression",
        "start": 2359,
        "end": 2376,
        "arguments": [
          {
            "type": "Literal",
            "start": 2367,
            "end": 2369,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 2371,
            "end": 2375,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2363,
          "end": 2366,
          "decorators": [],
          "name": "fn4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2480,
      "end": 2515,
      "expression": {
        "type": "NewExpression",
        "start": 2480,
        "end": 2514,
        "arguments": [
          {
            "type": "Literal",
            "start": 2503,
            "end": 2507,
            "raw": "null",
            "value": null
          },
          {
            "type": "Literal",
            "start": 2509,
            "end": 2513,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2484,
          "end": 2487,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2487,
          "end": 2502,
          "params": [
            {
              "type": "TSBooleanKeyword",
              "start": 2488,
              "end": 2495
            },
            {
              "type": "TSTypeReference",
              "start": 2497,
              "end": 2501,
              "typeName": {
                "type": "Identifier",
                "start": 2497,
                "end": 2501,
                "decorators": [],
                "name": "Date",
                "optional": false
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2645,
      "end": 2665,
      "expression": {
        "type": "NewExpression",
        "start": 2645,
        "end": 2664,
        "arguments": [
          {
            "type": "Literal",
            "start": 2653,
            "end": 2657,
            "raw": "true",
            "value": true
          },
          {
            "type": "Literal",
            "start": 2659,
            "end": 2663,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2649,
          "end": 2652,
          "decorators": [],
          "name": "fn4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2675,
      "end": 2695,
      "expression": {
        "type": "NewExpression",
        "start": 2675,
        "end": 2694,
        "arguments": [
          {
            "type": "Literal",
            "start": 2683,
            "end": 2687,
            "raw": "null",
            "value": null
          },
          {
            "type": "Literal",
            "start": 2689,
            "end": 2693,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2679,
          "end": 2682,
          "decorators": [],
          "name": "fn4",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 2790,
      "end": 2925,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2800,
        "end": 2925,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2806,
            "end": 2842,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2806,
              "end": 2817,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2817,
              "end": 2842,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2818,
                  "end": 2840,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2819,
                    "end": 2840,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2821,
                      "end": 2840,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2822,
                          "end": 2831,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2823,
                            "end": 2831,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2825,
                              "end": 2831
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2833,
                        "end": 2840,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2836,
                          "end": 2840
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2847,
            "end": 2883,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2847,
              "end": 2858,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2858,
              "end": 2883,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2859,
                  "end": 2881,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2860,
                    "end": 2881,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2862,
                      "end": 2881,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2863,
                          "end": 2872,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2864,
                            "end": 2872,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2866,
                              "end": 2872
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2874,
                        "end": 2881,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2877,
                          "end": 2881
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2888,
            "end": 2923,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2888,
              "end": 2899,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2899,
              "end": 2923,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2902,
                "end": 2923,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2904,
                    "end": 2921,
                    "argument": {
                      "type": "Identifier",
                      "start": 2911,
                      "end": 2920,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  }
                ]
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
        "start": 2796,
        "end": 2799,
        "decorators": [],
        "name": "fn5",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2926,
      "end": 2954,
      "expression": {
        "type": "NewExpression",
        "start": 2926,
        "end": 2953,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 2934,
            "end": 2952,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 2941,
              "end": 2952,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 2941,
                "end": 2950,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2941,
                  "end": 2942,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2943,
                  "end": 2950,
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2935,
                "end": 2936,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2930,
          "end": 2933,
          "decorators": [],
          "name": "fn5",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2955,
      "end": 2983,
      "expression": {
        "type": "NewExpression",
        "start": 2955,
        "end": 2982,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 2963,
            "end": 2981,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 2970,
              "end": 2981,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2979,
                  "end": 2980,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2970,
                "end": 2978,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2970,
                  "end": 2971,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2972,
                  "end": 2978,
                  "decorators": [],
                  "name": "substr",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2964,
                "end": 2965,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2959,
          "end": 2962,
          "decorators": [],
          "name": "fn5",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2984,
      "end": 3007,
      "expression": {
        "type": "NewExpression",
        "start": 2984,
        "end": 3006,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 2992,
            "end": 3005,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 2999,
              "end": 3005,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2999,
                "end": 3000,
                "decorators": [],
                "name": "n",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3001,
                "end": 3005,
                "decorators": [],
                "name": "blah",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2993,
                "end": 2994,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2988,
          "end": 2991,
          "decorators": [],
          "name": "fn5",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
