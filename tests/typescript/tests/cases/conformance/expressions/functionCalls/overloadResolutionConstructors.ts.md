__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3070,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 56,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 31,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 54,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 111,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 75,
        "decorators": [],
        "name": "SomeDerived1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 84,
        "end": 92,
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 111,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 109,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 112,
      "end": 166,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 130,
        "decorators": [],
        "name": "SomeDerived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 139,
        "end": 147,
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 166,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 154,
            "end": 164,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 221,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 185,
        "decorators": [],
        "name": "SomeDerived3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 194,
        "end": 202,
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 219,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 223,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 236,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 237,
        "end": 298,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 243,
            "end": 267,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 248,
                "end": 257,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 249,
                  "end": 257,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 251,
                    "end": 257
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 266,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 260,
                "end": 266
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 272,
            "end": 296,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 277,
                "end": 286,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 278,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 280,
                    "end": 286
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 295,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 289,
                "end": 295
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 299,
      "end": 312,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 311,
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 311,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 308,
                "end": 311,
                "typeName": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 311,
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 405,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 404,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 386,
            "end": 404,
            "callee": {
              "type": "Identifier",
              "start": 390,
              "end": 393,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 394,
                "end": 403,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 406,
      "end": 420,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 410,
          "end": 419,
          "id": {
            "type": "Identifier",
            "start": 410,
            "end": 419,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 411,
              "end": 419,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 413,
                "end": 419
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 454,
      "end": 466,
      "expression": {
        "type": "NewExpression",
        "start": 454,
        "end": 465,
        "callee": {
          "type": "Identifier",
          "start": 458,
          "end": 461,
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 462,
            "end": 464,
            "properties": []
          }
        ]
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 592,
      "end": 682,
      "id": {
        "type": "Identifier",
        "start": 602,
        "end": 605,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 606,
        "end": 682,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 612,
            "end": 647,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 617,
                "end": 626,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 618,
                  "end": 626,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 620,
                    "end": 626
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 628,
                "end": 637,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 629,
                  "end": 637,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 631,
                    "end": 637
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 638,
              "end": 646,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 640,
                "end": 646
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 652,
            "end": 680,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 656,
              "end": 659,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 657,
                  "end": 658,
                  "name": {
                    "type": "Identifier",
                    "start": 657,
                    "end": 658,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 660,
                "end": 669,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 661,
                  "end": 669,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 663,
                    "end": 669
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 671,
                "end": 675,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 672,
                  "end": 675,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 674,
                    "end": 675,
                    "typeName": {
                      "type": "Identifier",
                      "start": 674,
                      "end": 675,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 676,
              "end": 679,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 678,
                "end": 679,
                "typeName": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 679,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 683,
      "end": 696,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 687,
          "end": 695,
          "id": {
            "type": "Identifier",
            "start": 687,
            "end": 695,
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 690,
              "end": 695,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 692,
                "end": 695,
                "typeName": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 695,
                  "decorators": [],
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 698,
      "end": 734,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 702,
          "end": 733,
          "id": {
            "type": "Identifier",
            "start": 702,
            "end": 703,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 706,
            "end": 733,
            "callee": {
              "type": "Identifier",
              "start": 710,
              "end": 713,
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 713,
              "end": 719,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 714,
                  "end": 718,
                  "typeName": {
                    "type": "Identifier",
                    "start": 714,
                    "end": 718,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 720,
                "end": 721,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Identifier",
                "start": 723,
                "end": 732,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 735,
      "end": 747,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 739,
          "end": 746,
          "id": {
            "type": "Identifier",
            "start": 739,
            "end": 746,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 740,
              "end": 746,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 742,
                "end": 746,
                "typeName": {
                  "type": "Identifier",
                  "start": 742,
                  "end": 746,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 867,
      "end": 890,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 871,
          "end": 889,
          "id": {
            "type": "Identifier",
            "start": 871,
            "end": 872,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 875,
            "end": 889,
            "callee": {
              "type": "Identifier",
              "start": 879,
              "end": 882,
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 883,
                "end": 884,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 886,
                "end": 888,
                "value": "",
                "raw": "''"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1013,
      "end": 1034,
      "expression": {
        "type": "NewExpression",
        "start": 1013,
        "end": 1033,
        "callee": {
          "type": "Identifier",
          "start": 1017,
          "end": 1020,
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1020,
          "end": 1026,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1021,
              "end": 1025,
              "typeName": {
                "type": "Identifier",
                "start": 1021,
                "end": 1025,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1027,
            "end": 1029,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 1031,
            "end": 1032,
            "value": 0,
            "raw": "0"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1169,
      "end": 1184,
      "expression": {
        "type": "NewExpression",
        "start": 1169,
        "end": 1183,
        "callee": {
          "type": "Identifier",
          "start": 1173,
          "end": 1176,
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1177,
            "end": 1179,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 1181,
            "end": 1182,
            "value": 0,
            "raw": "0"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1264,
      "end": 1392,
      "id": {
        "type": "Identifier",
        "start": 1274,
        "end": 1277,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1278,
        "end": 1392,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1284,
            "end": 1305,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1287,
              "end": 1290,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1288,
                  "end": 1289,
                  "name": {
                    "type": "Identifier",
                    "start": 1288,
                    "end": 1289,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1291,
                "end": 1295,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1292,
                  "end": 1295,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1294,
                    "end": 1295,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1294,
                      "end": 1295,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
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
            "type": "TSConstructSignatureDeclaration",
            "start": 1310,
            "end": 1346,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1313,
              "end": 1319,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1314,
                  "end": 1315,
                  "name": {
                    "type": "Identifier",
                    "start": 1314,
                    "end": 1315,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1317,
                  "end": 1318,
                  "name": {
                    "type": "Identifier",
                    "start": 1317,
                    "end": 1318,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1320,
                "end": 1329,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1321,
                  "end": 1329,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1323,
                    "end": 1329
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1331,
                "end": 1335,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1332,
                  "end": 1335,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1334,
                    "end": 1335,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1334,
                      "end": 1335,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1337,
                "end": 1341,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1338,
                  "end": 1341,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1340,
                    "end": 1341,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1340,
                      "end": 1341,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1351,
            "end": 1390,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1354,
              "end": 1363,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1355,
                  "end": 1356,
                  "name": {
                    "type": "Identifier",
                    "start": 1355,
                    "end": 1356,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1358,
                  "end": 1359,
                  "name": {
                    "type": "Identifier",
                    "start": 1358,
                    "end": 1359,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1361,
                  "end": 1362,
                  "name": {
                    "type": "Identifier",
                    "start": 1361,
                    "end": 1362,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1364,
                "end": 1368,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1365,
                  "end": 1368,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1367,
                    "end": 1368,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1367,
                      "end": 1368,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1370,
                "end": 1374,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1371,
                  "end": 1374,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1373,
                    "end": 1374,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1373,
                      "end": 1374,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1376,
                "end": 1380,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1377,
                  "end": 1380,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1379,
                    "end": 1380,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1379,
                      "end": 1380,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1381,
              "end": 1389,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1383,
                "end": 1389
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1393,
      "end": 1406,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1397,
          "end": 1405,
          "id": {
            "type": "Identifier",
            "start": 1397,
            "end": 1405,
            "decorators": [],
            "name": "fn3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1400,
              "end": 1405,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1402,
                "end": 1405,
                "typeName": {
                  "type": "Identifier",
                  "start": 1402,
                  "end": 1405,
                  "decorators": [],
                  "name": "fn3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1408,
      "end": 1427,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1412,
          "end": 1426,
          "id": {
            "type": "Identifier",
            "start": 1412,
            "end": 1413,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1416,
            "end": 1426,
            "callee": {
              "type": "Identifier",
              "start": 1420,
              "end": 1423,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1424,
                "end": 1425,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1428,
      "end": 1455,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1432,
          "end": 1454,
          "id": {
            "type": "Identifier",
            "start": 1432,
            "end": 1433,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1436,
            "end": 1454,
            "callee": {
              "type": "Identifier",
              "start": 1440,
              "end": 1443,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1444,
                "end": 1446,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1448,
                "end": 1449,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 1451,
                "end": 1453,
                "value": "",
                "raw": "''"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1456,
      "end": 1481,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1460,
          "end": 1480,
          "id": {
            "type": "Identifier",
            "start": 1460,
            "end": 1461,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1464,
            "end": 1480,
            "callee": {
              "type": "Identifier",
              "start": 1468,
              "end": 1471,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1472,
                "end": 1473,
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "start": 1475,
                "end": 1476,
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "start": 1478,
                "end": 1479,
                "value": 5,
                "raw": "5"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1482,
      "end": 1496,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1486,
          "end": 1495,
          "id": {
            "type": "Identifier",
            "start": 1486,
            "end": 1495,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1487,
              "end": 1495,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1489,
                "end": 1495
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1611,
      "end": 1638,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1615,
          "end": 1637,
          "id": {
            "type": "Identifier",
            "start": 1615,
            "end": 1616,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1619,
            "end": 1637,
            "callee": {
              "type": "Identifier",
              "start": 1623,
              "end": 1626,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1626,
              "end": 1634,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1627,
                  "end": 1633
                }
              ]
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1635,
                "end": 1636,
                "value": 4,
                "raw": "4"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1639,
      "end": 1683,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1643,
          "end": 1682,
          "id": {
            "type": "Identifier",
            "start": 1643,
            "end": 1644,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1647,
            "end": 1682,
            "callee": {
              "type": "Identifier",
              "start": 1651,
              "end": 1654,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1654,
              "end": 1670,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 1655,
                  "end": 1661
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1663,
                  "end": 1669
                }
              ]
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1671,
                "end": 1673,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1675,
                "end": 1677,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1679,
                "end": 1681,
                "value": "",
                "raw": "''"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1684,
      "end": 1735,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1688,
          "end": 1734,
          "id": {
            "type": "Identifier",
            "start": 1688,
            "end": 1689,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1692,
            "end": 1734,
            "callee": {
              "type": "Identifier",
              "start": 1696,
              "end": 1699,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1699,
              "end": 1723,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1700,
                  "end": 1706
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1708,
                  "end": 1714
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1716,
                  "end": 1722
                }
              ]
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1724,
                "end": 1726,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1728,
                "end": 1730,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1732,
                "end": 1733,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1843,
      "end": 1885,
      "expression": {
        "type": "NewExpression",
        "start": 1843,
        "end": 1884,
        "callee": {
          "type": "Identifier",
          "start": 1847,
          "end": 1850,
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1850,
          "end": 1882,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1851,
              "end": 1857
            },
            {
              "type": "TSNumberKeyword",
              "start": 1859,
              "end": 1865
            },
            {
              "type": "TSNumberKeyword",
              "start": 1867,
              "end": 1873
            },
            {
              "type": "TSNumberKeyword",
              "start": 1875,
              "end": 1881
            }
          ]
        },
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1990,
      "end": 2121,
      "id": {
        "type": "Identifier",
        "start": 2000,
        "end": 2003,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2004,
        "end": 2121,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 2010,
            "end": 2062,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2013,
              "end": 2049,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2014,
                  "end": 2030,
                  "name": {
                    "type": "Identifier",
                    "start": 2014,
                    "end": 2015,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 2024,
                    "end": 2030
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2032,
                  "end": 2048,
                  "name": {
                    "type": "Identifier",
                    "start": 2032,
                    "end": 2033,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 2042,
                    "end": 2048
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 2050,
                "end": 2054,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2051,
                  "end": 2054,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2053,
                    "end": 2054,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2053,
                      "end": 2054,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 2056,
                "end": 2060,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2057,
                  "end": 2060,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2059,
                    "end": 2060,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2059,
                      "end": 2060,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 2067,
            "end": 2119,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2070,
              "end": 2106,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2071,
                  "end": 2087,
                  "name": {
                    "type": "Identifier",
                    "start": 2071,
                    "end": 2072,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 2081,
                    "end": 2087
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2089,
                  "end": 2105,
                  "name": {
                    "type": "Identifier",
                    "start": 2089,
                    "end": 2090,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 2099,
                    "end": 2105
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 2107,
                "end": 2111,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2108,
                  "end": 2111,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2110,
                    "end": 2111,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2110,
                      "end": 2111,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 2113,
                "end": 2117,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2114,
                  "end": 2117,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2116,
                    "end": 2117,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2116,
                      "end": 2117,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2122,
      "end": 2135,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2126,
          "end": 2134,
          "id": {
            "type": "Identifier",
            "start": 2126,
            "end": 2134,
            "decorators": [],
            "name": "fn4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2129,
              "end": 2134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2131,
                "end": 2134,
                "typeName": {
                  "type": "Identifier",
                  "start": 2131,
                  "end": 2134,
                  "decorators": [],
                  "name": "fn4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2137,
      "end": 2168,
      "expression": {
        "type": "NewExpression",
        "start": 2137,
        "end": 2167,
        "callee": {
          "type": "Identifier",
          "start": 2141,
          "end": 2144,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2144,
          "end": 2160,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2145,
              "end": 2151
            },
            {
              "type": "TSNumberKeyword",
              "start": 2153,
              "end": 2159
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2161,
            "end": 2163,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 2165,
            "end": 2166,
            "value": 3,
            "raw": "3"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2169,
      "end": 2200,
      "expression": {
        "type": "NewExpression",
        "start": 2169,
        "end": 2199,
        "callee": {
          "type": "Identifier",
          "start": 2173,
          "end": 2176,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2176,
          "end": 2192,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2177,
              "end": 2183
            },
            {
              "type": "TSNumberKeyword",
              "start": 2185,
              "end": 2191
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2193,
            "end": 2194,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 2196,
            "end": 2198,
            "value": "",
            "raw": "''"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2210,
      "end": 2241,
      "expression": {
        "type": "NewExpression",
        "start": 2210,
        "end": 2240,
        "callee": {
          "type": "Identifier",
          "start": 2214,
          "end": 2217,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2217,
          "end": 2233,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2218,
              "end": 2224
            },
            {
              "type": "TSStringKeyword",
              "start": 2226,
              "end": 2232
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2234,
            "end": 2236,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 2238,
            "end": 2239,
            "value": 3,
            "raw": "3"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2251,
      "end": 2282,
      "expression": {
        "type": "NewExpression",
        "start": 2251,
        "end": 2281,
        "callee": {
          "type": "Identifier",
          "start": 2255,
          "end": 2258,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2258,
          "end": 2274,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2259,
              "end": 2265
            },
            {
              "type": "TSStringKeyword",
              "start": 2267,
              "end": 2273
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2275,
            "end": 2276,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 2278,
            "end": 2280,
            "value": "",
            "raw": "''"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2397,
      "end": 2412,
      "expression": {
        "type": "NewExpression",
        "start": 2397,
        "end": 2411,
        "callee": {
          "type": "Identifier",
          "start": 2401,
          "end": 2404,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2405,
            "end": 2407,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 2409,
            "end": 2410,
            "value": 3,
            "raw": "3"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2413,
      "end": 2428,
      "expression": {
        "type": "NewExpression",
        "start": 2413,
        "end": 2427,
        "callee": {
          "type": "Identifier",
          "start": 2417,
          "end": 2420,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2421,
            "end": 2422,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 2424,
            "end": 2426,
            "value": "",
            "raw": "''"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2429,
      "end": 2451,
      "expression": {
        "type": "NewExpression",
        "start": 2429,
        "end": 2450,
        "callee": {
          "type": "Identifier",
          "start": 2433,
          "end": 2436,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2437,
            "end": 2438,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Identifier",
            "start": 2440,
            "end": 2449,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2452,
      "end": 2470,
      "expression": {
        "type": "NewExpression",
        "start": 2452,
        "end": 2469,
        "callee": {
          "type": "Identifier",
          "start": 2456,
          "end": 2459,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2460,
            "end": 2462,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 2464,
            "end": 2468,
            "value": null,
            "raw": "null"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2573,
      "end": 2608,
      "expression": {
        "type": "NewExpression",
        "start": 2573,
        "end": 2607,
        "callee": {
          "type": "Identifier",
          "start": 2577,
          "end": 2580,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2580,
          "end": 2595,
          "params": [
            {
              "type": "TSBooleanKeyword",
              "start": 2581,
              "end": 2588
            },
            {
              "type": "TSTypeReference",
              "start": 2590,
              "end": 2594,
              "typeName": {
                "type": "Identifier",
                "start": 2590,
                "end": 2594,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2596,
            "end": 2600,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Literal",
            "start": 2602,
            "end": 2606,
            "value": null,
            "raw": "null"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2738,
      "end": 2758,
      "expression": {
        "type": "NewExpression",
        "start": 2738,
        "end": 2757,
        "callee": {
          "type": "Identifier",
          "start": 2742,
          "end": 2745,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2746,
            "end": 2750,
            "value": true,
            "raw": "true"
          },
          {
            "type": "Literal",
            "start": 2752,
            "end": 2756,
            "value": null,
            "raw": "null"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2768,
      "end": 2788,
      "expression": {
        "type": "NewExpression",
        "start": 2768,
        "end": 2787,
        "callee": {
          "type": "Identifier",
          "start": 2772,
          "end": 2775,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2776,
            "end": 2780,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Literal",
            "start": 2782,
            "end": 2786,
            "value": true,
            "raw": "true"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2883,
      "end": 2982,
      "id": {
        "type": "Identifier",
        "start": 2893,
        "end": 2896,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2897,
        "end": 2982,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 2903,
            "end": 2939,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2907,
                "end": 2929,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2908,
                  "end": 2929,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2910,
                    "end": 2929,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2911,
                        "end": 2920,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2912,
                          "end": 2920,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2914,
                            "end": 2920
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2922,
                      "end": 2929,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2925,
                        "end": 2929
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2930,
              "end": 2938,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2932,
                "end": 2938
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 2944,
            "end": 2980,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2948,
                "end": 2970,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2949,
                  "end": 2970,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2951,
                    "end": 2970,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2952,
                        "end": 2961,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2953,
                          "end": 2961,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2955,
                            "end": 2961
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2963,
                      "end": 2970,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2966,
                        "end": 2970
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2971,
              "end": 2979,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2973,
                "end": 2979
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2983,
      "end": 2996,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2987,
          "end": 2995,
          "id": {
            "type": "Identifier",
            "start": 2987,
            "end": 2995,
            "decorators": [],
            "name": "fn5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2990,
              "end": 2995,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2992,
                "end": 2995,
                "typeName": {
                  "type": "Identifier",
                  "start": 2992,
                  "end": 2995,
                  "decorators": [],
                  "name": "fn5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2997,
      "end": 3033,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3001,
          "end": 3032,
          "id": {
            "type": "Identifier",
            "start": 3001,
            "end": 3002,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 3005,
            "end": 3032,
            "callee": {
              "type": "Identifier",
              "start": 3009,
              "end": 3012,
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3013,
                "end": 3031,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3014,
                    "end": 3015,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 3020,
                  "end": 3031,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3020,
                    "end": 3029,
                    "object": {
                      "type": "Identifier",
                      "start": 3020,
                      "end": 3021,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3022,
                      "end": 3029,
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3034,
      "end": 3070,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3038,
          "end": 3069,
          "id": {
            "type": "Identifier",
            "start": 3038,
            "end": 3039,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 3042,
            "end": 3069,
            "callee": {
              "type": "Identifier",
              "start": 3046,
              "end": 3049,
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3050,
                "end": 3068,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3051,
                    "end": 3052,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 3057,
                  "end": 3068,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3057,
                    "end": 3065,
                    "object": {
                      "type": "Identifier",
                      "start": 3057,
                      "end": 3058,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3059,
                      "end": 3065,
                      "decorators": [],
                      "name": "substr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3066,
                      "end": 3067,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
