__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 929,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 131,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 48,
            "end": 80,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 50,
                "end": 58,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 58,
                  "decorators": [],
                  "name": "notation",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 58,
                  "decorators": [],
                  "name": "notation",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 60,
                "end": 65,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 65,
                  "decorators": [],
                  "name": "style",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 65,
                  "decorators": [],
                  "name": "style",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 67,
                "end": 78,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 78,
                  "decorators": [],
                  "name": "signDisplay",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 78,
                  "decorators": [],
                  "name": "signDisplay",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 83,
            "end": 131,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 83,
              "end": 129,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 83,
                "end": 113,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 105,
                    "end": 112,
                    "raw": "'en-NZ'",
                    "value": "en-NZ"
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 87,
                  "end": 104,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 91,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 104,
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 114,
                "end": 129,
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 186,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 151,
        "end": 185,
        "arguments": [
          {
            "type": "Literal",
            "start": 173,
            "end": 180,
            "raw": "'en-NZ'",
            "value": "en-NZ"
          },
          {
            "type": "ObjectExpression",
            "start": 182,
            "end": 184,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 155,
          "end": 172,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 155,
            "end": 159,
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 172,
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 277,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 217,
        "end": 276,
        "arguments": [
          {
            "type": "Literal",
            "start": 239,
            "end": 246,
            "raw": "'en-NZ'",
            "value": "en-NZ"
          },
          {
            "type": "ObjectExpression",
            "start": 248,
            "end": 275,
            "properties": [
              {
                "type": "Property",
                "start": 250,
                "end": 273,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 265,
                  "decorators": [],
                  "name": "numberingSystem",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 267,
                  "end": 273,
                  "raw": "'arab'",
                  "value": "arab"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 221,
          "end": 238,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 221,
            "end": 225,
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 226,
            "end": 238,
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 291,
      "end": 443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 442,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 297,
            "end": 323,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 299,
                "end": 307,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 307,
                  "decorators": [],
                  "name": "currency",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 307,
                  "decorators": [],
                  "name": "currency",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 309,
                "end": 321,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 321,
                  "decorators": [],
                  "name": "currencySign",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 321,
                  "decorators": [],
                  "name": "currencySign",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 326,
            "end": 442,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 326,
              "end": 440,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 326,
                "end": 424,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 348,
                    "end": 355,
                    "raw": "'en-NZ'",
                    "value": "en-NZ"
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 357,
                    "end": 423,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 359,
                        "end": 376,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 359,
                          "end": 364,
                          "decorators": [],
                          "name": "style",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 366,
                          "end": 376,
                          "raw": "'currency'",
                          "value": "currency"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 378,
                        "end": 393,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 378,
                          "end": 386,
                          "decorators": [],
                          "name": "currency",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 388,
                          "end": 393,
                          "raw": "'NZD'",
                          "value": "NZD"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 395,
                        "end": 421,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 395,
                          "end": 407,
                          "decorators": [],
                          "name": "currencySign",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 409,
                          "end": 421,
                          "raw": "'accounting'",
                          "value": "accounting"
                        }
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 330,
                  "end": 347,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 334,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 347,
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 425,
                "end": 440,
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 454,
      "end": 593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 592,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 460,
            "end": 481,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 462,
                "end": 466,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 466,
                  "decorators": [],
                  "name": "unit",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 466,
                  "decorators": [],
                  "name": "unit",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 468,
                "end": 479,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 479,
                  "decorators": [],
                  "name": "unitDisplay",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 479,
                  "decorators": [],
                  "name": "unitDisplay",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 484,
            "end": 592,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 484,
              "end": 590,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 484,
                "end": 574,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 506,
                    "end": 513,
                    "raw": "'en-NZ'",
                    "value": "en-NZ"
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 515,
                    "end": 573,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 517,
                        "end": 530,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 517,
                          "end": 522,
                          "decorators": [],
                          "name": "style",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 524,
                          "end": 530,
                          "raw": "'unit'",
                          "value": "unit"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 532,
                        "end": 548,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 532,
                          "end": 536,
                          "decorators": [],
                          "name": "unit",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 538,
                          "end": 548,
                          "raw": "'kilogram'",
                          "value": "kilogram"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 550,
                        "end": 571,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 550,
                          "end": 561,
                          "decorators": [],
                          "name": "unitDisplay",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 563,
                          "end": 571,
                          "raw": "'narrow'",
                          "value": "narrow"
                        }
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 488,
                  "end": 505,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 488,
                    "end": 492,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 493,
                    "end": 505,
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 575,
                "end": 590,
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 731,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 730,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 612,
            "end": 630,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 614,
                "end": 628,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 628,
                  "decorators": [],
                  "name": "compactDisplay",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 628,
                  "decorators": [],
                  "name": "compactDisplay",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 633,
            "end": 730,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 633,
              "end": 728,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 633,
                "end": 712,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 655,
                    "end": 662,
                    "raw": "'en-NZ'",
                    "value": "en-NZ"
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 664,
                    "end": 711,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 666,
                        "end": 685,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 666,
                          "end": 674,
                          "decorators": [],
                          "name": "notation",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 676,
                          "end": 685,
                          "raw": "'compact'",
                          "value": "compact"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 687,
                        "end": 709,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 687,
                          "end": 701,
                          "decorators": [],
                          "name": "compactDisplay",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 703,
                          "end": 709,
                          "raw": "'long'",
                          "value": "long"
                        }
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 637,
                  "end": 654,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 637,
                    "end": 641,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 654,
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 713,
                "end": 728,
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 749,
      "end": 807,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 749,
        "end": 806,
        "arguments": [
          {
            "type": "Literal",
            "start": 771,
            "end": 778,
            "raw": "'en-NZ'",
            "value": "en-NZ"
          },
          {
            "type": "ObjectExpression",
            "start": 780,
            "end": 805,
            "properties": [
              {
                "type": "Property",
                "start": 782,
                "end": 803,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 793,
                  "decorators": [],
                  "name": "signDisplay",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 795,
                  "end": 803,
                  "raw": "'always'",
                  "value": "always"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 753,
          "end": 770,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 753,
            "end": 757,
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 758,
            "end": 770,
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 851,
      "end": 928,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 857,
          "end": 927,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 857,
            "end": 892,
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 862,
              "end": 892,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 864,
                "end": 892,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 864,
                  "end": 890,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 864,
                    "end": 890,
                    "left": {
                      "type": "Identifier",
                      "start": 864,
                      "end": 868,
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 869,
                      "end": 890,
                      "decorators": [],
                      "name": "NumberFormatPartTypes",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 895,
            "end": 927,
            "elements": [
              {
                "type": "Literal",
                "start": 897,
                "end": 906,
                "raw": "'compact'",
                "value": "compact"
              },
              {
                "type": "Literal",
                "start": 908,
                "end": 914,
                "raw": "'unit'",
                "value": "unit"
              },
              {
                "type": "Literal",
                "start": 916,
                "end": 925,
                "raw": "'unknown'",
                "value": "unknown"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
