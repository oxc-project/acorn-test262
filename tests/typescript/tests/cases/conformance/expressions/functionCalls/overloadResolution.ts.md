__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3016,
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
      "type": "TSDeclareFunction",
      "start": 288,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 300,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 321,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 330,
        "end": 333,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 354,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 366,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 387,
      "end": 410,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 409,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 392,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 395,
            "end": 409,
            "callee": {
              "type": "Identifier",
              "start": 395,
              "end": 398,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 399,
                "end": 408,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 411,
      "end": 425,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 424,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 468,
      "expression": {
        "type": "CallExpression",
        "start": 460,
        "end": 467,
        "callee": {
          "type": "Identifier",
          "start": 460,
          "end": 463,
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 464,
            "end": 466,
            "properties": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 594,
      "end": 637,
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 606,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 638,
      "end": 674,
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 650,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 650,
        "end": 653,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 651,
            "end": 652,
            "name": {
              "type": "Identifier",
              "start": 651,
              "end": 652,
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 675,
      "end": 711,
      "id": {
        "type": "Identifier",
        "start": 684,
        "end": 687,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 713,
      "end": 745,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 717,
          "end": 744,
          "id": {
            "type": "Identifier",
            "start": 717,
            "end": 718,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 721,
            "end": 744,
            "callee": {
              "type": "Identifier",
              "start": 721,
              "end": 724,
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null
            },
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
                "start": 731,
                "end": 732,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Identifier",
                "start": 734,
                "end": 743,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 746,
      "end": 758,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 750,
          "end": 757,
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
      "start": 878,
      "end": 897,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 882,
          "end": 896,
          "id": {
            "type": "Identifier",
            "start": 882,
            "end": 883,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 886,
            "end": 896,
            "callee": {
              "type": "Identifier",
              "start": 886,
              "end": 889,
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 890,
                "end": 891,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 893,
                "end": 895,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1020,
      "end": 1037,
      "expression": {
        "type": "CallExpression",
        "start": 1020,
        "end": 1036,
        "callee": {
          "type": "Identifier",
          "start": 1020,
          "end": 1023,
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null
        },
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
            "start": 1030,
            "end": 1032,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 1034,
            "end": 1035,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1172,
      "end": 1183,
      "expression": {
        "type": "CallExpression",
        "start": 1172,
        "end": 1182,
        "callee": {
          "type": "Identifier",
          "start": 1172,
          "end": 1175,
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1176,
            "end": 1178,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 1180,
            "end": 1181,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1263,
      "end": 1293,
      "id": {
        "type": "Identifier",
        "start": 1272,
        "end": 1275,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1275,
        "end": 1278,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1276,
            "end": 1277,
            "name": {
              "type": "Identifier",
              "start": 1276,
              "end": 1277,
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
        "start": 1284,
        "end": 1292,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1286,
          "end": 1292
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1294,
      "end": 1339,
      "id": {
        "type": "Identifier",
        "start": 1303,
        "end": 1306,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1306,
        "end": 1312,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1307,
            "end": 1308,
            "name": {
              "type": "Identifier",
              "start": 1307,
              "end": 1308,
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
            "start": 1310,
            "end": 1311,
            "name": {
              "type": "Identifier",
              "start": 1310,
              "end": 1311,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1340,
      "end": 1388,
      "id": {
        "type": "Identifier",
        "start": 1349,
        "end": 1352,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1352,
        "end": 1361,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1353,
            "end": 1354,
            "name": {
              "type": "Identifier",
              "start": 1353,
              "end": 1354,
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
            "start": 1356,
            "end": 1357,
            "name": {
              "type": "Identifier",
              "start": 1356,
              "end": 1357,
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
            "start": 1359,
            "end": 1360,
            "name": {
              "type": "Identifier",
              "start": 1359,
              "end": 1360,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
        "start": 1379,
        "end": 1387,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1381,
          "end": 1387
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1389,
      "end": 1420,
      "id": {
        "type": "Identifier",
        "start": 1398,
        "end": 1401,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1422,
      "end": 1437,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1426,
          "end": 1436,
          "id": {
            "type": "Identifier",
            "start": 1426,
            "end": 1427,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1430,
            "end": 1436,
            "callee": {
              "type": "Identifier",
              "start": 1430,
              "end": 1433,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1434,
                "end": 1435,
                "value": 3,
                "raw": "3"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1438,
      "end": 1461,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1442,
          "end": 1460,
          "id": {
            "type": "Identifier",
            "start": 1442,
            "end": 1443,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1446,
            "end": 1460,
            "callee": {
              "type": "Identifier",
              "start": 1446,
              "end": 1449,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1450,
                "end": 1452,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1454,
                "end": 1455,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 1457,
                "end": 1459,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1462,
      "end": 1483,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1466,
          "end": 1482,
          "id": {
            "type": "Identifier",
            "start": 1466,
            "end": 1467,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1470,
            "end": 1482,
            "callee": {
              "type": "Identifier",
              "start": 1470,
              "end": 1473,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1474,
                "end": 1475,
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "start": 1477,
                "end": 1478,
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "start": 1480,
                "end": 1481,
                "value": 5,
                "raw": "5"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1484,
      "end": 1498,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1488,
          "end": 1497,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1613,
      "end": 1636,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1617,
          "end": 1635,
          "id": {
            "type": "Identifier",
            "start": 1617,
            "end": 1618,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1621,
            "end": 1635,
            "callee": {
              "type": "Identifier",
              "start": 1621,
              "end": 1624,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1633,
                "end": 1634,
                "value": 4,
                "raw": "4"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1637,
      "end": 1677,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1641,
          "end": 1676,
          "id": {
            "type": "Identifier",
            "start": 1641,
            "end": 1642,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1645,
            "end": 1676,
            "callee": {
              "type": "Identifier",
              "start": 1645,
              "end": 1648,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1665,
                "end": 1667,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1669,
                "end": 1671,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1673,
                "end": 1675,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1678,
      "end": 1725,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1682,
          "end": 1724,
          "id": {
            "type": "Identifier",
            "start": 1682,
            "end": 1683,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1686,
            "end": 1724,
            "callee": {
              "type": "Identifier",
              "start": 1686,
              "end": 1689,
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1714,
                "end": 1716,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1718,
                "end": 1720,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1722,
                "end": 1723,
                "value": 3,
                "raw": "3"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1833,
      "end": 1871,
      "expression": {
        "type": "CallExpression",
        "start": 1833,
        "end": 1870,
        "callee": {
          "type": "Identifier",
          "start": 1833,
          "end": 1836,
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null
        },
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
        },
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1976,
      "end": 2037,
      "id": {
        "type": "Identifier",
        "start": 1985,
        "end": 1988,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1988,
        "end": 2024,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1989,
            "end": 2005,
            "name": {
              "type": "Identifier",
              "start": 1989,
              "end": 1990,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1999,
              "end": 2005
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2007,
            "end": 2023,
            "name": {
              "type": "Identifier",
              "start": 2007,
              "end": 2008,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2017,
              "end": 2023
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2038,
      "end": 2099,
      "id": {
        "type": "Identifier",
        "start": 2047,
        "end": 2050,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2050,
        "end": 2086,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2051,
            "end": 2067,
            "name": {
              "type": "Identifier",
              "start": 2051,
              "end": 2052,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2061,
              "end": 2067
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2069,
            "end": 2085,
            "name": {
              "type": "Identifier",
              "start": 2069,
              "end": 2070,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2079,
              "end": 2085
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2100,
      "end": 2118,
      "id": {
        "type": "Identifier",
        "start": 2109,
        "end": 2112,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2115,
        "end": 2118,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2119,
      "end": 2146,
      "expression": {
        "type": "CallExpression",
        "start": 2119,
        "end": 2145,
        "callee": {
          "type": "Identifier",
          "start": 2119,
          "end": 2122,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
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
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2139,
            "end": 2141,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 2143,
            "end": 2144,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2147,
      "end": 2174,
      "expression": {
        "type": "CallExpression",
        "start": 2147,
        "end": 2173,
        "callee": {
          "type": "Identifier",
          "start": 2147,
          "end": 2150,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
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
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2167,
            "end": 2168,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 2170,
            "end": 2172,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2184,
      "end": 2211,
      "expression": {
        "type": "CallExpression",
        "start": 2184,
        "end": 2210,
        "callee": {
          "type": "Identifier",
          "start": 2184,
          "end": 2187,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
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
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2204,
            "end": 2206,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 2208,
            "end": 2209,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2221,
      "end": 2248,
      "expression": {
        "type": "CallExpression",
        "start": 2221,
        "end": 2247,
        "callee": {
          "type": "Identifier",
          "start": 2221,
          "end": 2224,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
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
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2241,
            "end": 2242,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 2244,
            "end": 2246,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2363,
      "end": 2374,
      "expression": {
        "type": "CallExpression",
        "start": 2363,
        "end": 2373,
        "callee": {
          "type": "Identifier",
          "start": 2363,
          "end": 2366,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2367,
            "end": 2369,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 2371,
            "end": 2372,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2375,
      "end": 2386,
      "expression": {
        "type": "CallExpression",
        "start": 2375,
        "end": 2385,
        "callee": {
          "type": "Identifier",
          "start": 2375,
          "end": 2378,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2379,
            "end": 2380,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 2382,
            "end": 2384,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2387,
      "end": 2405,
      "expression": {
        "type": "CallExpression",
        "start": 2387,
        "end": 2404,
        "callee": {
          "type": "Identifier",
          "start": 2387,
          "end": 2390,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2391,
            "end": 2392,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Identifier",
            "start": 2394,
            "end": 2403,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2406,
      "end": 2420,
      "expression": {
        "type": "CallExpression",
        "start": 2406,
        "end": 2419,
        "callee": {
          "type": "Identifier",
          "start": 2406,
          "end": 2409,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2410,
            "end": 2412,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 2414,
            "end": 2418,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2523,
      "end": 2554,
      "expression": {
        "type": "CallExpression",
        "start": 2523,
        "end": 2553,
        "callee": {
          "type": "Identifier",
          "start": 2523,
          "end": 2526,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
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
            "start": 2542,
            "end": 2546,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Literal",
            "start": 2548,
            "end": 2552,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2684,
      "end": 2700,
      "expression": {
        "type": "CallExpression",
        "start": 2684,
        "end": 2699,
        "callee": {
          "type": "Identifier",
          "start": 2684,
          "end": 2687,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2688,
            "end": 2692,
            "value": true,
            "raw": "true"
          },
          {
            "type": "Literal",
            "start": 2694,
            "end": 2698,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2710,
      "end": 2726,
      "expression": {
        "type": "CallExpression",
        "start": 2710,
        "end": 2725,
        "callee": {
          "type": "Identifier",
          "start": 2710,
          "end": 2713,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2714,
            "end": 2718,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Literal",
            "start": 2720,
            "end": 2724,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2821,
      "end": 2866,
      "id": {
        "type": "Identifier",
        "start": 2830,
        "end": 2833,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2867,
      "end": 2912,
      "id": {
        "type": "Identifier",
        "start": 2876,
        "end": 2879,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2913,
      "end": 2949,
      "id": {
        "type": "Identifier",
        "start": 2922,
        "end": 2925,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2950,
      "end": 2982,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2954,
          "end": 2981,
          "id": {
            "type": "Identifier",
            "start": 2954,
            "end": 2955,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2958,
            "end": 2981,
            "callee": {
              "type": "Identifier",
              "start": 2958,
              "end": 2961,
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2962,
                "end": 2980,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2963,
                    "end": 2964,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 2969,
                  "end": 2980,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2969,
                    "end": 2978,
                    "object": {
                      "type": "Identifier",
                      "start": 2969,
                      "end": 2970,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2971,
                      "end": 2978,
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
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2983,
      "end": 3015,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2987,
          "end": 3014,
          "id": {
            "type": "Identifier",
            "start": 2987,
            "end": 2988,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2991,
            "end": 3014,
            "callee": {
              "type": "Identifier",
              "start": 2991,
              "end": 2994,
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2995,
                "end": 3013,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2996,
                    "end": 2997,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 3002,
                  "end": 3013,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3002,
                    "end": 3010,
                    "object": {
                      "type": "Identifier",
                      "start": 3002,
                      "end": 3003,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3004,
                      "end": 3010,
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
                      "start": 3011,
                      "end": 3012,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
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
