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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 73,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 71,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 22,
              "end": 71,
              "async": false,
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
                      "raw": "''",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 33,
                "decorators": [],
                "name": "fn",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 43,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 37,
                      "end": 43
                    }
                  }
                }
              ]
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 85,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 85,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 82,
                "end": 85
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
      "type": "SwitchStatement",
      "start": 87,
      "end": 438,
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
            "raw": "''",
            "value": ""
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
            "raw": "12",
            "value": 12
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
            "raw": "true",
            "value": true
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
            "raw": "null",
            "value": null
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
            "decorators": [],
            "name": "undefined",
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
            "arguments": [
              {
                "type": "Literal",
                "start": 194,
                "end": 196,
                "raw": "12",
                "value": 12
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 189,
              "end": 193,
              "decorators": [],
              "name": "Date",
              "optional": false
            }
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 212,
              "end": 218,
              "decorators": [],
              "name": "Object",
              "optional": false
            }
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
            "raw": "/[a-z]/",
            "regex": {
              "flags": "",
              "pattern": "[a-z]"
            },
            "value": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 278,
                  "decorators": [],
                  "name": "id",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 280,
                  "end": 282,
                  "raw": "12",
                  "value": 12
                }
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
                "raw": "'a'",
                "value": "a"
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
            "argument": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
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
            "argument": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
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
            "arguments": [
              {
                "type": "Literal",
                "start": 353,
                "end": 354,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 348,
              "end": 352,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 348,
                "end": 349,
                "decorators": [],
                "name": "M",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 350,
                "end": 352,
                "decorators": [],
                "name": "fn",
                "optional": false
              }
            },
            "optional": false
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
            "async": false,
            "body": {
              "type": "Literal",
              "start": 384,
              "end": 386,
              "raw": "''",
              "value": ""
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 370,
                "end": 379,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 371,
                  "end": 379,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 373,
                    "end": 379
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 366,
              "end": 369,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 367,
                  "end": 368,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 368,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
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
            "arguments": [
              {
                "type": "Literal",
                "start": 420,
                "end": 421,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 398,
              "end": 418,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 416,
                "end": 418,
                "raw": "''",
                "value": ""
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 402,
                  "end": 411,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 403,
                    "end": 411,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 405,
                      "end": 411
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 398,
                "end": 401,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 399,
                    "end": 400,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 400,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "optional": false
          }
        },
        {
          "type": "SwitchCase",
          "start": 428,
          "end": 436,
          "consequent": [],
          "test": null
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 520,
      "end": 543,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 528,
        "end": 543,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 530,
            "end": 541,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 530,
              "end": 532,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 527,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 544,
      "end": 578,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 562,
        "end": 578,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 564,
            "end": 576,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 564,
              "end": 568,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 551,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 560,
        "end": 561,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "SwitchStatement",
      "start": 580,
      "end": 667,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
              "decorators": [],
              "name": "D",
              "optional": false
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 630,
                  "decorators": [],
                  "name": "id",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 632,
                  "end": 634,
                  "raw": "12",
                  "value": 12
                }
              },
              {
                "type": "Property",
                "start": 636,
                "end": 644,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 640,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 642,
                  "end": 644,
                  "raw": "''",
                  "value": ""
                }
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 661,
              "end": 662,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "discriminant": {
        "type": "NewExpression",
        "start": 588,
        "end": 595,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 592,
          "end": 593,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "SwitchStatement",
      "start": 669,
      "end": 684,
      "cases": [],
      "discriminant": {
        "type": "Literal",
        "start": 677,
        "end": 679,
        "raw": "''",
        "value": ""
      }
    },
    {
      "type": "SwitchStatement",
      "start": 685,
      "end": 700,
      "cases": [],
      "discriminant": {
        "type": "Literal",
        "start": 693,
        "end": 695,
        "raw": "12",
        "value": 12
      }
    },
    {
      "type": "SwitchStatement",
      "start": 701,
      "end": 718,
      "cases": [],
      "discriminant": {
        "type": "Literal",
        "start": 709,
        "end": 713,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "SwitchStatement",
      "start": 719,
      "end": 736,
      "cases": [],
      "discriminant": {
        "type": "Literal",
        "start": 727,
        "end": 731,
        "raw": "null",
        "value": null
      }
    },
    {
      "type": "SwitchStatement",
      "start": 737,
      "end": 759,
      "cases": [],
      "discriminant": {
        "type": "Identifier",
        "start": 745,
        "end": 754,
        "decorators": [],
        "name": "undefined",
        "optional": false
      }
    },
    {
      "type": "SwitchStatement",
      "start": 760,
      "end": 785,
      "cases": [],
      "discriminant": {
        "type": "NewExpression",
        "start": 768,
        "end": 780,
        "arguments": [
          {
            "type": "Literal",
            "start": 777,
            "end": 779,
            "raw": "12",
            "value": 12
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 772,
          "end": 776,
          "decorators": [],
          "name": "Date",
          "optional": false
        }
      }
    },
    {
      "type": "SwitchStatement",
      "start": 786,
      "end": 811,
      "cases": [],
      "discriminant": {
        "type": "NewExpression",
        "start": 794,
        "end": 806,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 798,
          "end": 804,
          "decorators": [],
          "name": "Object",
          "optional": false
        }
      }
    },
    {
      "type": "SwitchStatement",
      "start": 812,
      "end": 832,
      "cases": [],
      "discriminant": {
        "type": "Literal",
        "start": 820,
        "end": 827,
        "raw": "/[a-z]/",
        "regex": {
          "flags": "",
          "pattern": "[a-z]"
        },
        "value": null
      }
    },
    {
      "type": "SwitchStatement",
      "start": 833,
      "end": 848,
      "cases": [],
      "discriminant": {
        "type": "ArrayExpression",
        "start": 841,
        "end": 843,
        "elements": []
      }
    },
    {
      "type": "SwitchStatement",
      "start": 849,
      "end": 864,
      "cases": [],
      "discriminant": {
        "type": "ObjectExpression",
        "start": 857,
        "end": 859,
        "properties": []
      }
    },
    {
      "type": "SwitchStatement",
      "start": 865,
      "end": 888,
      "cases": [],
      "discriminant": {
        "type": "ObjectExpression",
        "start": 873,
        "end": 883,
        "properties": [
          {
            "type": "Property",
            "start": 875,
            "end": 881,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 875,
              "end": 877,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 879,
              "end": 881,
              "raw": "12",
              "value": 12
            }
          }
        ]
      }
    },
    {
      "type": "SwitchStatement",
      "start": 889,
      "end": 907,
      "cases": [],
      "discriminant": {
        "type": "ArrayExpression",
        "start": 897,
        "end": 902,
        "elements": [
          {
            "type": "Literal",
            "start": 898,
            "end": 901,
            "raw": "'a'",
            "value": "a"
          }
        ]
      }
    },
    {
      "type": "SwitchStatement",
      "start": 908,
      "end": 941,
      "cases": [],
      "discriminant": {
        "type": "ArrowFunctionExpression",
        "start": 916,
        "end": 936,
        "async": false,
        "body": {
          "type": "Literal",
          "start": 934,
          "end": 936,
          "raw": "''",
          "value": ""
        },
        "expression": true,
        "generator": false,
        "id": null,
        "params": [
          {
            "type": "Identifier",
            "start": 920,
            "end": 929,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 921,
              "end": 929,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 923,
                "end": 929
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 916,
          "end": 919,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 917,
              "end": 918,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 917,
                "end": 918,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      }
    },
    {
      "type": "SwitchStatement",
      "start": 942,
      "end": 975,
      "cases": [],
      "discriminant": {
        "type": "CallExpression",
        "start": 950,
        "end": 970,
        "arguments": [
          {
            "type": "Literal",
            "start": 968,
            "end": 969,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 951,
          "end": 966,
          "async": false,
          "body": {
            "type": "Literal",
            "start": 964,
            "end": 966,
            "raw": "''",
            "value": ""
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 955,
              "end": 959,
              "decorators": [],
              "name": "x",
              "optional": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          ],
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 951,
            "end": 954,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 952,
                "end": 953,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 952,
                  "end": 953,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                },
                "out": false
              }
            ]
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
