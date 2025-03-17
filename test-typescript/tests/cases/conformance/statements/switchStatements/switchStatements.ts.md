__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 978,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 73,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 71,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 22,
              "end": 71,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 33,
                "name": "fn",
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
                  "start": 34,
                  "end": 43,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 37,
                      "end": 43
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 55,
                    "end": 65,
                    "argument": {
                      "type": "Literal",
                      "start": 62,
                      "end": 64,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 85,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 85,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 82,
                "end": 85
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 87,
      "end": 438,
      "discriminant": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 104,
          "end": 112,
          "consequent": [],
          "test": {
            "type": "Literal",
            "start": 109,
            "end": 111,
            "value": "",
            "raw": "''"
          }
        },
        {
          "type": "SwitchCase",
          "start": 117,
          "end": 125,
          "consequent": [],
          "test": {
            "type": "Literal",
            "start": 122,
            "end": 124,
            "value": 12,
            "raw": "12"
          }
        },
        {
          "type": "SwitchCase",
          "start": 130,
          "end": 140,
          "consequent": [],
          "test": {
            "type": "Literal",
            "start": 135,
            "end": 139,
            "value": true,
            "raw": "true"
          }
        },
        {
          "type": "SwitchCase",
          "start": 145,
          "end": 155,
          "consequent": [],
          "test": {
            "type": "Literal",
            "start": 150,
            "end": 154,
            "value": null,
            "raw": "null"
          }
        },
        {
          "type": "SwitchCase",
          "start": 160,
          "end": 175,
          "consequent": [],
          "test": {
            "type": "Identifier",
            "start": 165,
            "end": 174,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "SwitchCase",
          "start": 180,
          "end": 198,
          "consequent": [],
          "test": {
            "type": "NewExpression",
            "start": 185,
            "end": 197,
            "callee": {
              "type": "Identifier",
              "start": 189,
              "end": 193,
              "name": "Date",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 194,
                "end": 196,
                "value": 12,
                "raw": "12"
              }
            ],
            "typeArguments": null
          }
        },
        {
          "type": "SwitchCase",
          "start": 203,
          "end": 221,
          "consequent": [],
          "test": {
            "type": "NewExpression",
            "start": 208,
            "end": 220,
            "callee": {
              "type": "Identifier",
              "start": 212,
              "end": 218,
              "name": "Object",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          }
        },
        {
          "type": "SwitchCase",
          "start": 226,
          "end": 239,
          "consequent": [],
          "test": {
            "type": "Literal",
            "start": 231,
            "end": 238,
            "value": null,
            "raw": "/[a-z]/",
            "regex": {
              "flags": "",
              "pattern": "[a-z]"
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 244,
          "end": 251,
          "consequent": [],
          "test": {
            "type": "ArrayExpression",
            "start": 248,
            "end": 250,
            "elements": []
          }
        },
        {
          "type": "SwitchCase",
          "start": 256,
          "end": 264,
          "consequent": [],
          "test": {
            "type": "ObjectExpression",
            "start": 261,
            "end": 263,
            "properties": []
          }
        },
        {
          "type": "SwitchCase",
          "start": 269,
          "end": 285,
          "consequent": [],
          "test": {
            "type": "ObjectExpression",
            "start": 274,
            "end": 284,
            "properties": [
              {
                "type": "Property",
                "start": 276,
                "end": 282,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 278,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 280,
                  "end": 282,
                  "value": 12,
                  "raw": "12"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 290,
          "end": 300,
          "consequent": [],
          "test": {
            "type": "ArrayExpression",
            "start": 294,
            "end": 299,
            "elements": [
              {
                "type": "Literal",
                "start": 295,
                "end": 298,
                "value": "a",
                "raw": "'a'"
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 305,
          "end": 319,
          "consequent": [],
          "test": {
            "type": "UnaryExpression",
            "start": 310,
            "end": 318,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 324,
          "end": 338,
          "consequent": [],
          "test": {
            "type": "UnaryExpression",
            "start": 329,
            "end": 337,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 343,
          "end": 356,
          "consequent": [],
          "test": {
            "type": "CallExpression",
            "start": 348,
            "end": 355,
            "callee": {
              "type": "MemberExpression",
              "start": 348,
              "end": 352,
              "object": {
                "type": "Identifier",
                "start": 348,
                "end": 349,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 350,
                "end": 352,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 353,
                "end": 354,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        },
        {
          "type": "SwitchCase",
          "start": 361,
          "end": 387,
          "consequent": [],
          "test": {
            "type": "ArrowFunctionExpression",
            "start": 366,
            "end": 386,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 370,
                "end": 379,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 371,
                  "end": 379,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 373,
                    "end": 379
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 384,
              "end": 386,
              "value": "",
              "raw": "''"
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 366,
              "end": 369,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 367,
                  "end": 368,
                  "name": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 368,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          }
        },
        {
          "type": "SwitchCase",
          "start": 392,
          "end": 423,
          "consequent": [],
          "test": {
            "type": "CallExpression",
            "start": 397,
            "end": 422,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 398,
              "end": 418,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 402,
                  "end": 411,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 403,
                    "end": 411,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 405,
                      "end": 411
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "Literal",
                "start": 416,
                "end": 418,
                "value": "",
                "raw": "''"
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 398,
                "end": 401,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 399,
                    "end": 400,
                    "name": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 400,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": null
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 420,
                "end": 421,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        },
        {
          "type": "SwitchCase",
          "start": 428,
          "end": 436,
          "consequent": [],
          "test": null
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 520,
      "end": 543,
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 527,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 528,
        "end": 543,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 530,
            "end": 541,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 530,
              "end": 532,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 532,
              "end": 540,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 534,
                "end": 540
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 544,
      "end": 578,
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 551,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 560,
        "end": 561,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 562,
        "end": 578,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 564,
            "end": 576,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 564,
              "end": 568,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "SwitchStatement",
      "start": 580,
      "end": 667,
      "discriminant": {
        "type": "NewExpression",
        "start": 588,
        "end": 595,
        "callee": {
          "type": "Identifier",
          "start": 592,
          "end": 593,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 603,
          "end": 616,
          "consequent": [],
          "test": {
            "type": "NewExpression",
            "start": 608,
            "end": 615,
            "callee": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          }
        },
        {
          "type": "SwitchCase",
          "start": 621,
          "end": 647,
          "consequent": [],
          "test": {
            "type": "ObjectExpression",
            "start": 626,
            "end": 646,
            "properties": [
              {
                "type": "Property",
                "start": 628,
                "end": 634,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 630,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 632,
                  "end": 634,
                  "value": 12,
                  "raw": "12"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 636,
                "end": 644,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 640,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 642,
                  "end": 644,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 652,
          "end": 665,
          "consequent": [],
          "test": {
            "type": "NewExpression",
            "start": 657,
            "end": 664,
            "callee": {
              "type": "Identifier",
              "start": 661,
              "end": 662,
              "name": "C",
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
    {
      "type": "SwitchStatement",
      "start": 669,
      "end": 684,
      "discriminant": {
        "type": "Literal",
        "start": 677,
        "end": 679,
        "value": "",
        "raw": "''"
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 685,
      "end": 700,
      "discriminant": {
        "type": "Literal",
        "start": 693,
        "end": 695,
        "value": 12,
        "raw": "12"
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 701,
      "end": 718,
      "discriminant": {
        "type": "Literal",
        "start": 709,
        "end": 713,
        "value": true,
        "raw": "true"
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 719,
      "end": 736,
      "discriminant": {
        "type": "Literal",
        "start": 727,
        "end": 731,
        "value": null,
        "raw": "null"
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 737,
      "end": 759,
      "discriminant": {
        "type": "Identifier",
        "start": 745,
        "end": 754,
        "name": "undefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 760,
      "end": 785,
      "discriminant": {
        "type": "NewExpression",
        "start": 768,
        "end": 780,
        "callee": {
          "type": "Identifier",
          "start": 772,
          "end": 776,
          "name": "Date",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 777,
            "end": 779,
            "value": 12,
            "raw": "12"
          }
        ],
        "typeArguments": null
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 786,
      "end": 811,
      "discriminant": {
        "type": "NewExpression",
        "start": 794,
        "end": 806,
        "callee": {
          "type": "Identifier",
          "start": 798,
          "end": 804,
          "name": "Object",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 812,
      "end": 832,
      "discriminant": {
        "type": "Literal",
        "start": 820,
        "end": 827,
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "flags": "",
          "pattern": "[a-z]"
        }
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 833,
      "end": 848,
      "discriminant": {
        "type": "ArrayExpression",
        "start": 841,
        "end": 843,
        "elements": []
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 849,
      "end": 864,
      "discriminant": {
        "type": "ObjectExpression",
        "start": 857,
        "end": 859,
        "properties": []
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 865,
      "end": 888,
      "discriminant": {
        "type": "ObjectExpression",
        "start": 873,
        "end": 883,
        "properties": [
          {
            "type": "Property",
            "start": 875,
            "end": 881,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 875,
              "end": 877,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 879,
              "end": 881,
              "value": 12,
              "raw": "12"
            },
            "kind": "init",
            "optional": false
          }
        ]
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 889,
      "end": 907,
      "discriminant": {
        "type": "ArrayExpression",
        "start": 897,
        "end": 902,
        "elements": [
          {
            "type": "Literal",
            "start": 898,
            "end": 901,
            "value": "a",
            "raw": "'a'"
          }
        ]
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 908,
      "end": 941,
      "discriminant": {
        "type": "ArrowFunctionExpression",
        "start": 916,
        "end": 936,
        "id": null,
        "expression": true,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 920,
            "end": 929,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 921,
              "end": 929,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 923,
                "end": 929
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "Literal",
          "start": 934,
          "end": 936,
          "value": "",
          "raw": "''"
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 916,
          "end": 919,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 917,
              "end": 918,
              "name": {
                "type": "Identifier",
                "start": 917,
                "end": 918,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": null
      },
      "cases": []
    },
    {
      "type": "SwitchStatement",
      "start": 942,
      "end": 975,
      "discriminant": {
        "type": "CallExpression",
        "start": 950,
        "end": 970,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 951,
          "end": 966,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 955,
              "end": 959,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 956,
                "end": 959,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 958,
                  "end": 959,
                  "typeName": {
                    "type": "Identifier",
                    "start": 958,
                    "end": 959,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "Literal",
            "start": 964,
            "end": 966,
            "value": "",
            "raw": "''"
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 951,
            "end": 954,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 952,
                "end": 953,
                "name": {
                  "type": "Identifier",
                  "start": 952,
                  "end": 953,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            ]
          },
          "returnType": null
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 968,
            "end": 969,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "cases": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
