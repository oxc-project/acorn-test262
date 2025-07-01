__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 33
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 37,
                      "end": 43
                    },
                    "start": 35,
                    "end": 43
                  },
                  "start": 34,
                  "end": 43
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 62,
                      "end": 64
                    },
                    "start": 55,
                    "end": 65
                  }
                ],
                "start": 45,
                "end": 71
              },
              "expression": false,
              "start": 22,
              "end": 71
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 71
          }
        ],
        "start": 9,
        "end": 73
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 73
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 82,
                "end": 85
              },
              "start": 80,
              "end": 85
            },
            "start": 79,
            "end": 85
          },
          "init": null,
          "definite": false,
          "start": 79,
          "end": 85
        }
      ],
      "declare": false,
      "start": 75,
      "end": 86
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 96
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 109,
            "end": 111
          },
          "consequent": [],
          "start": 104,
          "end": 112
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 122,
            "end": 124
          },
          "consequent": [],
          "start": 117,
          "end": 125
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 135,
            "end": 139
          },
          "consequent": [],
          "start": 130,
          "end": 140
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 150,
            "end": 154
          },
          "consequent": [],
          "start": 145,
          "end": 155
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 174
          },
          "consequent": [],
          "start": 160,
          "end": 175
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 193
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 194,
                "end": 196
              }
            ],
            "start": 185,
            "end": 197
          },
          "consequent": [],
          "start": 180,
          "end": 198
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 218
            },
            "typeArguments": null,
            "arguments": [],
            "start": 208,
            "end": 220
          },
          "consequent": [],
          "start": 203,
          "end": 221
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": null,
            "raw": "/[a-z]/",
            "regex": {
              "pattern": "[a-z]",
              "flags": ""
            },
            "start": 231,
            "end": 238
          },
          "consequent": [],
          "start": 226,
          "end": 239
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 248,
            "end": 250
          },
          "consequent": [],
          "start": 244,
          "end": 251
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 261,
            "end": 263
          },
          "consequent": [],
          "start": 256,
          "end": 264
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 278
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 280,
                  "end": 282
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 276,
                "end": 282
              }
            ],
            "start": 274,
            "end": 284
          },
          "consequent": [],
          "start": 269,
          "end": 285
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 295,
                "end": 298
              }
            ],
            "start": 294,
            "end": 299
          },
          "consequent": [],
          "start": 290,
          "end": 300
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "prefix": true,
            "start": 310,
            "end": 318
          },
          "consequent": [],
          "start": 305,
          "end": 319
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 337
            },
            "prefix": true,
            "start": 329,
            "end": 337
          },
          "consequent": [],
          "start": 324,
          "end": 338
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 349
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 352
              },
              "optional": false,
              "computed": false,
              "start": 348,
              "end": 352
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 353,
                "end": 354
              }
            ],
            "optional": false,
            "start": 348,
            "end": 355
          },
          "consequent": [],
          "start": 343,
          "end": 356
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 367,
                    "end": 368
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 367,
                  "end": 368
                }
              ],
              "start": 366,
              "end": 369
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
                    "type": "TSNumberKeyword",
                    "start": 373,
                    "end": 379
                  },
                  "start": 371,
                  "end": 379
                },
                "start": 370,
                "end": 379
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 384,
              "end": 386
            },
            "id": null,
            "generator": false,
            "start": 366,
            "end": 386
          },
          "consequent": [],
          "start": 361,
          "end": 387
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
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
                      "start": 399,
                      "end": 400
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 399,
                    "end": 400
                  }
                ],
                "start": 398,
                "end": 401
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
                      "type": "TSNumberKeyword",
                      "start": 405,
                      "end": 411
                    },
                    "start": 403,
                    "end": 411
                  },
                  "start": 402,
                  "end": 411
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 416,
                "end": 418
              },
              "id": null,
              "generator": false,
              "start": 398,
              "end": 418
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 420,
                "end": 421
              }
            ],
            "optional": false,
            "start": 397,
            "end": 422
          },
          "consequent": [],
          "start": 392,
          "end": 423
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [],
          "start": 428,
          "end": 436
        }
      ],
      "start": 87,
      "end": 438
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 527
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 532
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 534,
                "end": 540
              },
              "start": 532,
              "end": 540
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
            "start": 530,
            "end": 541
          }
        ],
        "start": 528,
        "end": 543
      },
      "abstract": false,
      "declare": false,
      "start": 520,
      "end": 543
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 550,
        "end": 551
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 560,
        "end": 561
      },
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 568
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 570,
                "end": 576
              },
              "start": 568,
              "end": 576
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
            "start": 564,
            "end": 576
          }
        ],
        "start": 562,
        "end": 578
      },
      "abstract": false,
      "declare": false,
      "start": 544,
      "end": 578
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 592,
          "end": 593
        },
        "typeArguments": null,
        "arguments": [],
        "start": 588,
        "end": 595
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 612,
              "end": 613
            },
            "typeArguments": null,
            "arguments": [],
            "start": 608,
            "end": 615
          },
          "consequent": [],
          "start": 603,
          "end": 616
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 630
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 632,
                  "end": 634
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 628,
                "end": 634
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 636,
                  "end": 640
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 642,
                  "end": 644
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 636,
                "end": 644
              }
            ],
            "start": 626,
            "end": 646
          },
          "consequent": [],
          "start": 621,
          "end": 647
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 661,
              "end": 662
            },
            "typeArguments": null,
            "arguments": [],
            "start": 657,
            "end": 664
          },
          "consequent": [],
          "start": 652,
          "end": 665
        }
      ],
      "start": 580,
      "end": 667
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 677,
        "end": 679
      },
      "cases": [],
      "start": 669,
      "end": 684
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 12,
        "raw": "12",
        "start": 693,
        "end": 695
      },
      "cases": [],
      "start": 685,
      "end": 700
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 709,
        "end": 713
      },
      "cases": [],
      "start": 701,
      "end": 718
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 727,
        "end": 731
      },
      "cases": [],
      "start": 719,
      "end": 736
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 745,
        "end": 754
      },
      "cases": [],
      "start": 737,
      "end": 759
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Date",
          "optional": false,
          "typeAnnotation": null,
          "start": 772,
          "end": 776
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 777,
            "end": 779
          }
        ],
        "start": 768,
        "end": 780
      },
      "cases": [],
      "start": 760,
      "end": 785
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 798,
          "end": 804
        },
        "typeArguments": null,
        "arguments": [],
        "start": 794,
        "end": 806
      },
      "cases": [],
      "start": 786,
      "end": 811
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 820,
        "end": 827
      },
      "cases": [],
      "start": 812,
      "end": 832
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 841,
        "end": 843
      },
      "cases": [],
      "start": 833,
      "end": 848
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 857,
        "end": 859
      },
      "cases": [],
      "start": 849,
      "end": 864
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 875,
              "end": 877
            },
            "value": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 879,
              "end": 881
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 875,
            "end": 881
          }
        ],
        "start": 873,
        "end": 883
      },
      "cases": [],
      "start": 865,
      "end": 888
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 898,
            "end": 901
          }
        ],
        "start": 897,
        "end": 902
      },
      "cases": [],
      "start": 889,
      "end": 907
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
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
                "start": 917,
                "end": 918
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 917,
              "end": 918
            }
          ],
          "start": 916,
          "end": 919
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
                "type": "TSNumberKeyword",
                "start": 923,
                "end": 929
              },
              "start": 921,
              "end": 929
            },
            "start": 920,
            "end": 929
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 934,
          "end": 936
        },
        "id": null,
        "generator": false,
        "start": 916,
        "end": 936
      },
      "cases": [],
      "start": 908,
      "end": 941
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
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
                  "start": 952,
                  "end": 953
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 952,
                "end": 953
              }
            ],
            "start": 951,
            "end": 954
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
                    "start": 958,
                    "end": 959
                  },
                  "typeArguments": null,
                  "start": 958,
                  "end": 959
                },
                "start": 956,
                "end": 959
              },
              "start": 955,
              "end": 959
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 964,
            "end": 966
          },
          "id": null,
          "generator": false,
          "start": 951,
          "end": 966
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 968,
            "end": 969
          }
        ],
        "optional": false,
        "start": 950,
        "end": 970
      },
      "cases": [],
      "start": 942,
      "end": 975
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 977
}
```
