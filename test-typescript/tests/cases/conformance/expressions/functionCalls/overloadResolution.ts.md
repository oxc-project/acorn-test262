overloadResolution.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 3017,
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
      "type": "TSDeclareFunction",
      "start": 288,
      "end": 320,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 300,
        "decorators": [],
        "name": "fn1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 301,
          "end": 310,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 302,
            "end": 310,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 304,
              "end": 310
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 311,
        "end": 319,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 313,
          "end": 319
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 321,
      "end": 353,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 330,
        "end": 333,
        "decorators": [],
        "name": "fn1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 334,
          "end": 343,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 335,
            "end": 343,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 337,
              "end": 343
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 344,
        "end": 352,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 346,
          "end": 352
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 354,
      "end": 385,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 369,
        "end": 385,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 371,
            "end": 383,
            "argument": {
              "type": "Literal",
              "start": 378,
              "end": 382,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 366,
        "decorators": [],
        "name": "fn1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 387,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 409,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 392,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 395,
            "end": 409,
            "arguments": [
              {
                "type": "Identifier",
                "start": 399,
                "end": 408,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 395,
              "end": 398,
              "decorators": [],
              "name": "fn1",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 411,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 424,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 424,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 424,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 418,
                "end": 424
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
      "type": "ExpressionStatement",
      "start": 460,
      "end": 468,
      "expression": {
        "type": "CallExpression",
        "start": 460,
        "end": 467,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 464,
            "end": 466,
            "properties": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 460,
          "end": 463,
          "decorators": [],
          "name": "fn1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 594,
      "end": 637,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 606,
        "decorators": [],
        "name": "fn2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 607,
          "end": 616,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 608,
            "end": 616,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 610,
              "end": 616
            }
          }
        },
        {
          "type": "Identifier",
          "start": 618,
          "end": 627,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 619,
            "end": 627,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 621,
              "end": 627
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 628,
        "end": 636,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 630,
          "end": 636
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 638,
      "end": 674,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 650,
        "decorators": [],
        "name": "fn2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 654,
          "end": 663,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 655,
            "end": 663,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 657,
              "end": 663
            }
          }
        },
        {
          "type": "Identifier",
          "start": 665,
          "end": 669,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 666,
            "end": 669,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 668,
              "end": 669,
              "typeName": {
                "type": "Identifier",
                "start": 668,
                "end": 669,
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
        "start": 670,
        "end": 673,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 672,
          "end": 673,
          "typeName": {
            "type": "Identifier",
            "start": 672,
            "end": 673,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 650,
        "end": 653,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 651,
            "end": 652,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 651,
              "end": 652,
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
      "type": "FunctionDeclaration",
      "start": 675,
      "end": 711,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 690,
        "end": 711,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 692,
            "end": 709,
            "argument": {
              "type": "Identifier",
              "start": 699,
              "end": 708,
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
      "id": {
        "type": "Identifier",
        "start": 684,
        "end": 687,
        "decorators": [],
        "name": "fn2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 713,
      "end": 745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 717,
          "end": 744,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 717,
            "end": 718,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 721,
            "end": 744,
            "arguments": [
              {
                "type": "Literal",
                "start": 731,
                "end": 732,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Identifier",
                "start": 734,
                "end": 743,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 721,
              "end": 724,
              "decorators": [],
              "name": "fn2",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 724,
              "end": 730,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 725,
                  "end": 729,
                  "typeName": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 729,
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
      "start": 746,
      "end": 758,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 750,
          "end": 757,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 750,
            "end": 757,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 751,
              "end": 757,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 753,
                "end": 757,
                "typeName": {
                  "type": "Identifier",
                  "start": 753,
                  "end": 757,
                  "decorators": [],
                  "name": "Date",
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
      "type": "VariableDeclaration",
      "start": 878,
      "end": 897,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 882,
          "end": 896,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 882,
            "end": 883,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 886,
            "end": 896,
            "arguments": [
              {
                "type": "Literal",
                "start": 890,
                "end": 891,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 893,
                "end": 895,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 886,
              "end": 889,
              "decorators": [],
              "name": "fn2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1020,
      "end": 1037,
      "expression": {
        "type": "CallExpression",
        "start": 1020,
        "end": 1036,
        "arguments": [
          {
            "type": "Literal",
            "start": 1030,
            "end": 1032,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 1034,
            "end": 1035,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1020,
          "end": 1023,
          "decorators": [],
          "name": "fn2",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1023,
          "end": 1029,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1024,
              "end": 1028,
              "typeName": {
                "type": "Identifier",
                "start": 1024,
                "end": 1028,
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
      "start": 1172,
      "end": 1183,
      "expression": {
        "type": "CallExpression",
        "start": 1172,
        "end": 1182,
        "arguments": [
          {
            "type": "Literal",
            "start": 1176,
            "end": 1178,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 1180,
            "end": 1181,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1172,
          "end": 1175,
          "decorators": [],
          "name": "fn2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1263,
      "end": 1293,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1272,
        "end": 1275,
        "decorators": [],
        "name": "fn3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1279,
          "end": 1283,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1280,
            "end": 1283,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1282,
              "end": 1283,
              "typeName": {
                "type": "Identifier",
                "start": 1282,
                "end": 1283,
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
        "start": 1284,
        "end": 1292,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1286,
          "end": 1292
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1275,
        "end": 1278,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1276,
            "end": 1277,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1276,
              "end": 1277,
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
      "type": "TSDeclareFunction",
      "start": 1294,
      "end": 1339,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1303,
        "end": 1306,
        "decorators": [],
        "name": "fn3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1313,
          "end": 1322,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1314,
            "end": 1322,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1316,
              "end": 1322
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1324,
          "end": 1328,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1325,
            "end": 1328,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1327,
              "end": 1328,
              "typeName": {
                "type": "Identifier",
                "start": 1327,
                "end": 1328,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1330,
          "end": 1334,
          "decorators": [],
          "name": "u",
          "optional": false,
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
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1335,
        "end": 1338,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1337,
          "end": 1338,
          "typeName": {
            "type": "Identifier",
            "start": 1337,
            "end": 1338,
            "decorators": [],
            "name": "U",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1306,
        "end": 1312,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1307,
            "end": 1308,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1307,
              "end": 1308,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1310,
            "end": 1311,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1310,
              "end": 1311,
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
      "type": "TSDeclareFunction",
      "start": 1340,
      "end": 1388,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1349,
        "end": 1352,
        "decorators": [],
        "name": "fn3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1362,
          "end": 1366,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1363,
            "end": 1366,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1365,
              "end": 1366,
              "typeName": {
                "type": "Identifier",
                "start": 1365,
                "end": 1366,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1368,
          "end": 1372,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1369,
            "end": 1372,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1371,
              "end": 1372,
              "typeName": {
                "type": "Identifier",
                "start": 1371,
                "end": 1372,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1374,
          "end": 1378,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1375,
            "end": 1378,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1377,
              "end": 1378,
              "typeName": {
                "type": "Identifier",
                "start": 1377,
                "end": 1378,
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
        "start": 1379,
        "end": 1387,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1381,
          "end": 1387
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1352,
        "end": 1361,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1353,
            "end": 1354,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1353,
              "end": 1354,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1356,
            "end": 1357,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1356,
              "end": 1357,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1359,
            "end": 1360,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1359,
              "end": 1360,
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
      "type": "FunctionDeclaration",
      "start": 1389,
      "end": 1420,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1404,
        "end": 1420,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1406,
            "end": 1418,
            "argument": {
              "type": "Literal",
              "start": 1413,
              "end": 1417,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1398,
        "end": 1401,
        "decorators": [],
        "name": "fn3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 1422,
      "end": 1437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1426,
          "end": 1436,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1426,
            "end": 1427,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1430,
            "end": 1436,
            "arguments": [
              {
                "type": "Literal",
                "start": 1434,
                "end": 1435,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1430,
              "end": 1433,
              "decorators": [],
              "name": "fn3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1438,
      "end": 1461,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1442,
          "end": 1460,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1442,
            "end": 1443,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1446,
            "end": 1460,
            "arguments": [
              {
                "type": "Literal",
                "start": 1450,
                "end": 1452,
                "raw": "''",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 1454,
                "end": 1455,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 1457,
                "end": 1459,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1446,
              "end": 1449,
              "decorators": [],
              "name": "fn3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1462,
      "end": 1483,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1466,
          "end": 1482,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1466,
            "end": 1467,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1470,
            "end": 1482,
            "arguments": [
              {
                "type": "Literal",
                "start": 1474,
                "end": 1475,
                "raw": "5",
                "value": 5
              },
              {
                "type": "Literal",
                "start": 1477,
                "end": 1478,
                "raw": "5",
                "value": 5
              },
              {
                "type": "Literal",
                "start": 1480,
                "end": 1481,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1470,
              "end": 1473,
              "decorators": [],
              "name": "fn3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1484,
      "end": 1498,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1488,
          "end": 1497,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1488,
            "end": 1497,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1489,
              "end": 1497,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1491,
                "end": 1497
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
      "start": 1613,
      "end": 1636,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1617,
          "end": 1635,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1617,
            "end": 1618,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1621,
            "end": 1635,
            "arguments": [
              {
                "type": "Literal",
                "start": 1633,
                "end": 1634,
                "raw": "4",
                "value": 4
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1621,
              "end": 1624,
              "decorators": [],
              "name": "fn3",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1624,
              "end": 1632,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1625,
                  "end": 1631
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
      "start": 1637,
      "end": 1677,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1641,
          "end": 1676,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1641,
            "end": 1642,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1645,
            "end": 1676,
            "arguments": [
              {
                "type": "Literal",
                "start": 1665,
                "end": 1667,
                "raw": "''",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 1669,
                "end": 1671,
                "raw": "''",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 1673,
                "end": 1675,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1645,
              "end": 1648,
              "decorators": [],
              "name": "fn3",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1648,
              "end": 1664,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 1649,
                  "end": 1655
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1657,
                  "end": 1663
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
      "start": 1678,
      "end": 1725,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1682,
          "end": 1724,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1682,
            "end": 1683,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1686,
            "end": 1724,
            "arguments": [
              {
                "type": "Literal",
                "start": 1714,
                "end": 1716,
                "raw": "''",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 1718,
                "end": 1720,
                "raw": "''",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 1722,
                "end": 1723,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1686,
              "end": 1689,
              "decorators": [],
              "name": "fn3",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1689,
              "end": 1713,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1690,
                  "end": 1696
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1698,
                  "end": 1704
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1706,
                  "end": 1712
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
      "type": "ExpressionStatement",
      "start": 1833,
      "end": 1871,
      "expression": {
        "type": "CallExpression",
        "start": 1833,
        "end": 1870,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1833,
          "end": 1836,
          "decorators": [],
          "name": "fn3",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1836,
          "end": 1868,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1837,
              "end": 1843
            },
            {
              "type": "TSNumberKeyword",
              "start": 1845,
              "end": 1851
            },
            {
              "type": "TSNumberKeyword",
              "start": 1853,
              "end": 1859
            },
            {
              "type": "TSNumberKeyword",
              "start": 1861,
              "end": 1867
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1976,
      "end": 2037,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1985,
        "end": 1988,
        "decorators": [],
        "name": "fn4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2025,
          "end": 2029,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2026,
            "end": 2029,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2028,
              "end": 2029,
              "typeName": {
                "type": "Identifier",
                "start": 2028,
                "end": 2029,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2031,
          "end": 2035,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2032,
            "end": 2035,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2034,
              "end": 2035,
              "typeName": {
                "type": "Identifier",
                "start": 2034,
                "end": 2035,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1988,
        "end": 2024,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1989,
            "end": 2005,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1999,
              "end": 2005
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1989,
              "end": 1990,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2007,
            "end": 2023,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2017,
              "end": 2023
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2007,
              "end": 2008,
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
      "type": "TSDeclareFunction",
      "start": 2038,
      "end": 2099,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2047,
        "end": 2050,
        "decorators": [],
        "name": "fn4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2087,
          "end": 2091,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2088,
            "end": 2091,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2090,
              "end": 2091,
              "typeName": {
                "type": "Identifier",
                "start": 2090,
                "end": 2091,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2093,
          "end": 2097,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2094,
            "end": 2097,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2096,
              "end": 2097,
              "typeName": {
                "type": "Identifier",
                "start": 2096,
                "end": 2097,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2050,
        "end": 2086,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2051,
            "end": 2067,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2061,
              "end": 2067
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2051,
              "end": 2052,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2069,
            "end": 2085,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2079,
              "end": 2085
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2069,
              "end": 2070,
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
      "type": "FunctionDeclaration",
      "start": 2100,
      "end": 2118,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2115,
        "end": 2118,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2109,
        "end": 2112,
        "decorators": [],
        "name": "fn4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 2119,
      "end": 2146,
      "expression": {
        "type": "CallExpression",
        "start": 2119,
        "end": 2145,
        "arguments": [
          {
            "type": "Literal",
            "start": 2139,
            "end": 2141,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 2143,
            "end": 2144,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2119,
          "end": 2122,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2122,
          "end": 2138,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2123,
              "end": 2129
            },
            {
              "type": "TSNumberKeyword",
              "start": 2131,
              "end": 2137
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2147,
      "end": 2174,
      "expression": {
        "type": "CallExpression",
        "start": 2147,
        "end": 2173,
        "arguments": [
          {
            "type": "Literal",
            "start": 2167,
            "end": 2168,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 2170,
            "end": 2172,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2147,
          "end": 2150,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2150,
          "end": 2166,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2151,
              "end": 2157
            },
            {
              "type": "TSNumberKeyword",
              "start": 2159,
              "end": 2165
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2184,
      "end": 2211,
      "expression": {
        "type": "CallExpression",
        "start": 2184,
        "end": 2210,
        "arguments": [
          {
            "type": "Literal",
            "start": 2204,
            "end": 2206,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 2208,
            "end": 2209,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2184,
          "end": 2187,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2187,
          "end": 2203,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2188,
              "end": 2194
            },
            {
              "type": "TSStringKeyword",
              "start": 2196,
              "end": 2202
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2221,
      "end": 2248,
      "expression": {
        "type": "CallExpression",
        "start": 2221,
        "end": 2247,
        "arguments": [
          {
            "type": "Literal",
            "start": 2241,
            "end": 2242,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 2244,
            "end": 2246,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2221,
          "end": 2224,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2224,
          "end": 2240,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2225,
              "end": 2231
            },
            {
              "type": "TSStringKeyword",
              "start": 2233,
              "end": 2239
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2363,
      "end": 2374,
      "expression": {
        "type": "CallExpression",
        "start": 2363,
        "end": 2373,
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
            "end": 2372,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2363,
          "end": 2366,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2375,
      "end": 2386,
      "expression": {
        "type": "CallExpression",
        "start": 2375,
        "end": 2385,
        "arguments": [
          {
            "type": "Literal",
            "start": 2379,
            "end": 2380,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 2382,
            "end": 2384,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2375,
          "end": 2378,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2387,
      "end": 2405,
      "expression": {
        "type": "CallExpression",
        "start": 2387,
        "end": 2404,
        "arguments": [
          {
            "type": "Literal",
            "start": 2391,
            "end": 2392,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Identifier",
            "start": 2394,
            "end": 2403,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2387,
          "end": 2390,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2406,
      "end": 2420,
      "expression": {
        "type": "CallExpression",
        "start": 2406,
        "end": 2419,
        "arguments": [
          {
            "type": "Literal",
            "start": 2410,
            "end": 2412,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 2414,
            "end": 2418,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2406,
          "end": 2409,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2523,
      "end": 2554,
      "expression": {
        "type": "CallExpression",
        "start": 2523,
        "end": 2553,
        "arguments": [
          {
            "type": "Literal",
            "start": 2542,
            "end": 2546,
            "raw": "null",
            "value": null
          },
          {
            "type": "Literal",
            "start": 2548,
            "end": 2552,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2523,
          "end": 2526,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2526,
          "end": 2541,
          "params": [
            {
              "type": "TSBooleanKeyword",
              "start": 2527,
              "end": 2534
            },
            {
              "type": "TSTypeReference",
              "start": 2536,
              "end": 2540,
              "typeName": {
                "type": "Identifier",
                "start": 2536,
                "end": 2540,
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
      "start": 2684,
      "end": 2700,
      "expression": {
        "type": "CallExpression",
        "start": 2684,
        "end": 2699,
        "arguments": [
          {
            "type": "Literal",
            "start": 2688,
            "end": 2692,
            "raw": "true",
            "value": true
          },
          {
            "type": "Literal",
            "start": 2694,
            "end": 2698,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2684,
          "end": 2687,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2710,
      "end": 2726,
      "expression": {
        "type": "CallExpression",
        "start": 2710,
        "end": 2725,
        "arguments": [
          {
            "type": "Literal",
            "start": 2714,
            "end": 2718,
            "raw": "null",
            "value": null
          },
          {
            "type": "Literal",
            "start": 2720,
            "end": 2724,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2710,
          "end": 2713,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2821,
      "end": 2866,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2830,
        "end": 2833,
        "decorators": [],
        "name": "fn5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2834,
          "end": 2856,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2835,
            "end": 2856,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2837,
              "end": 2856,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2838,
                  "end": 2847,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2839,
                    "end": 2847,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2841,
                      "end": 2847
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2849,
                "end": 2856,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2852,
                  "end": 2856
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2857,
        "end": 2865,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2859,
          "end": 2865
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2867,
      "end": 2912,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2876,
        "end": 2879,
        "decorators": [],
        "name": "fn5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2880,
          "end": 2902,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2881,
            "end": 2902,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2883,
              "end": 2902,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2884,
                  "end": 2893,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2885,
                    "end": 2893,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2887,
                      "end": 2893
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2895,
                "end": 2902,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2898,
                  "end": 2902
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2903,
        "end": 2911,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2905,
          "end": 2911
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2913,
      "end": 2949,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2928,
        "end": 2949,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2930,
            "end": 2947,
            "argument": {
              "type": "Identifier",
              "start": 2937,
              "end": 2946,
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
      "id": {
        "type": "Identifier",
        "start": 2922,
        "end": 2925,
        "decorators": [],
        "name": "fn5",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 2950,
      "end": 2982,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2954,
          "end": 2981,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2954,
            "end": 2955,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2958,
            "end": 2981,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2962,
                "end": 2980,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 2969,
                  "end": 2980,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2969,
                    "end": 2978,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2969,
                      "end": 2970,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2971,
                      "end": 2978,
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
                    "start": 2963,
                    "end": 2964,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2958,
              "end": 2961,
              "decorators": [],
              "name": "fn5",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2983,
      "end": 3015,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2987,
          "end": 3014,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2987,
            "end": 2988,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2991,
            "end": 3014,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2995,
                "end": 3013,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 3002,
                  "end": 3013,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3011,
                      "end": 3012,
                      "raw": "0",
                      "value": 0
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3002,
                    "end": 3010,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3002,
                      "end": 3003,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3004,
                      "end": 3010,
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
                    "start": 2996,
                    "end": 2997,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2991,
              "end": 2994,
              "decorators": [],
              "name": "fn5",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
