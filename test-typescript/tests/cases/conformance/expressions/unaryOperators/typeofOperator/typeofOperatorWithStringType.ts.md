typeofOperatorWithStringType.ts
```json
{
  "type": "Program",
  "start": 35,
  "end": 1314,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 53,
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
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
      "start": 55,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 76,
            "decorators": [],
            "name": "STRING1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 76,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 68,
                "end": 76,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 68,
                  "end": 74
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 79,
            "end": 90,
            "elements": [
              {
                "type": "Literal",
                "start": 80,
                "end": 82,
                "raw": "\"\"",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 84,
                "end": 89,
                "raw": "\"abc\"",
                "value": "abc"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 133,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 133,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 118,
            "end": 131,
            "argument": {
              "type": "Literal",
              "start": 125,
              "end": 130,
              "raw": "\"abc\"",
              "value": "abc"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 105,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 107,
        "end": 115,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 109,
          "end": 115
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 135,
      "end": 200,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 143,
        "end": 200,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 149,
            "end": 166,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 171,
            "end": 198,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 181,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 181,
              "end": 198,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 184,
                "end": 198,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 186,
                    "end": 196,
                    "argument": {
                      "type": "Literal",
                      "start": 193,
                      "end": 195,
                      "raw": "\"\"",
                      "value": ""
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
        "start": 141,
        "end": 142,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 201,
      "end": 239,
      "body": {
        "type": "TSModuleBlock",
        "start": 210,
        "end": 239,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 216,
            "end": 237,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 223,
              "end": 237,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 227,
                  "end": 236,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 236,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 228,
                      "end": 236,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 230,
                        "end": 236
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
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 209,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "decorators": [],
            "name": "objA",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 252,
            "end": 259,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 316,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 300,
            "decorators": [],
            "name": "ResultIsString1",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 303,
            "end": 316,
            "argument": {
              "type": "Identifier",
              "start": 310,
              "end": 316,
              "decorators": [],
              "name": "STRING",
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 337,
            "decorators": [],
            "name": "ResultIsString2",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 340,
            "end": 354,
            "argument": {
              "type": "Identifier",
              "start": 347,
              "end": 354,
              "decorators": [],
              "name": "STRING1",
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 380,
      "end": 412,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 411,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 399,
            "decorators": [],
            "name": "ResultIsString3",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 402,
            "end": 411,
            "argument": {
              "type": "Literal",
              "start": 409,
              "end": 411,
              "raw": "\"\"",
              "value": ""
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 413,
      "end": 459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 458,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 432,
            "decorators": [],
            "name": "ResultIsString4",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 435,
            "end": 458,
            "argument": {
              "type": "ObjectExpression",
              "start": 442,
              "end": 458,
              "properties": [
                {
                  "type": "Property",
                  "start": 444,
                  "end": 449,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 445,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 447,
                    "end": 449,
                    "raw": "\"\"",
                    "value": ""
                  }
                },
                {
                  "type": "Property",
                  "start": 451,
                  "end": 456,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 451,
                    "end": 452,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 454,
                    "end": 456,
                    "raw": "\"\"",
                    "value": ""
                  }
                }
              ]
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 460,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 464,
          "end": 531,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 479,
            "decorators": [],
            "name": "ResultIsString5",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 482,
            "end": 531,
            "argument": {
              "type": "ObjectExpression",
              "start": 489,
              "end": 531,
              "properties": [
                {
                  "type": "Property",
                  "start": 491,
                  "end": 496,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 491,
                    "end": 492,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 494,
                    "end": 496,
                    "raw": "\"\"",
                    "value": ""
                  }
                },
                {
                  "type": "Property",
                  "start": 498,
                  "end": 529,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 499,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 501,
                    "end": 529,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 516,
                      "end": 529,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 518,
                          "end": 527,
                          "argument": {
                            "type": "Identifier",
                            "start": 525,
                            "end": 526,
                            "decorators": [],
                            "name": "s",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 502,
                        "end": 511,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 503,
                          "end": 511,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 505,
                            "end": 511
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 561,
      "end": 597,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 565,
          "end": 596,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 565,
            "end": 580,
            "decorators": [],
            "name": "ResultIsString6",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 583,
            "end": 596,
            "argument": {
              "type": "MemberExpression",
              "start": 590,
              "end": 596,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 590,
                "end": 594,
                "decorators": [],
                "name": "objA",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 595,
                "end": 596,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 598,
      "end": 631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 602,
          "end": 630,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 602,
            "end": 617,
            "decorators": [],
            "name": "ResultIsString7",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 620,
            "end": 630,
            "argument": {
              "type": "MemberExpression",
              "start": 627,
              "end": 630,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 627,
                "end": 628,
                "decorators": [],
                "name": "M",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 629,
                "end": 630,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 632,
      "end": 672,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 671,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 636,
            "end": 651,
            "decorators": [],
            "name": "ResultIsString8",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 654,
            "end": 671,
            "argument": {
              "type": "MemberExpression",
              "start": 661,
              "end": 671,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 661,
                "end": 668,
                "decorators": [],
                "name": "STRING1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 669,
                "end": 670,
                "raw": "0",
                "value": 0
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 673,
      "end": 708,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 677,
          "end": 707,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 677,
            "end": 692,
            "decorators": [],
            "name": "ResultIsString9",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 695,
            "end": 707,
            "argument": {
              "type": "CallExpression",
              "start": 702,
              "end": 707,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 702,
                "end": 705,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 709,
      "end": 747,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 713,
          "end": 746,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 713,
            "end": 729,
            "decorators": [],
            "name": "ResultIsString10",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 732,
            "end": 746,
            "argument": {
              "type": "CallExpression",
              "start": 739,
              "end": 746,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 739,
                "end": 744,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 744,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 748,
      "end": 796,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 752,
          "end": 795,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 752,
            "end": 768,
            "decorators": [],
            "name": "ResultIsString11",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 771,
            "end": 795,
            "argument": {
              "type": "BinaryExpression",
              "start": 779,
              "end": 794,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 779,
                "end": 785,
                "decorators": [],
                "name": "STRING",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 788,
                "end": 794,
                "decorators": [],
                "name": "STRING",
                "optional": false
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 797,
      "end": 844,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 801,
          "end": 843,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 801,
            "end": 817,
            "decorators": [],
            "name": "ResultIsString12",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 820,
            "end": 843,
            "argument": {
              "type": "CallExpression",
              "start": 827,
              "end": 843,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 841,
                  "end": 842,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 827,
                "end": 840,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 827,
                  "end": 833,
                  "decorators": [],
                  "name": "STRING",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 840,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false
                }
              },
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 876,
      "end": 920,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 880,
          "end": 919,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 880,
            "end": 896,
            "decorators": [],
            "name": "ResultIsString13",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 899,
            "end": 919,
            "argument": {
              "type": "UnaryExpression",
              "start": 906,
              "end": 919,
              "argument": {
                "type": "Identifier",
                "start": 913,
                "end": 919,
                "decorators": [],
                "name": "STRING",
                "optional": false
              },
              "operator": "typeof",
              "prefix": true
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 921,
      "end": 983,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 925,
          "end": 982,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 925,
            "end": 941,
            "decorators": [],
            "name": "ResultIsString14",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 944,
            "end": 982,
            "argument": {
              "type": "UnaryExpression",
              "start": 951,
              "end": 982,
              "argument": {
                "type": "UnaryExpression",
                "start": 958,
                "end": 982,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 966,
                  "end": 981,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 966,
                    "end": 972,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 975,
                    "end": 981,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "operator": "typeof",
              "prefix": true
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1014,
      "end": 1024,
      "expression": {
        "type": "UnaryExpression",
        "start": 1014,
        "end": 1023,
        "argument": {
          "type": "Literal",
          "start": 1021,
          "end": 1023,
          "raw": "\"\"",
          "value": ""
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1025,
      "end": 1039,
      "expression": {
        "type": "UnaryExpression",
        "start": 1025,
        "end": 1038,
        "argument": {
          "type": "Identifier",
          "start": 1032,
          "end": 1038,
          "decorators": [],
          "name": "STRING",
          "optional": false
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1040,
      "end": 1055,
      "expression": {
        "type": "UnaryExpression",
        "start": 1040,
        "end": 1054,
        "argument": {
          "type": "Identifier",
          "start": 1047,
          "end": 1054,
          "decorators": [],
          "name": "STRING1",
          "optional": false
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1056,
      "end": 1069,
      "expression": {
        "type": "UnaryExpression",
        "start": 1056,
        "end": 1068,
        "argument": {
          "type": "CallExpression",
          "start": 1063,
          "end": 1068,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 1063,
            "end": 1066,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1070,
      "end": 1089,
      "expression": {
        "type": "SequenceExpression",
        "start": 1070,
        "end": 1088,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1070,
            "end": 1083,
            "argument": {
              "type": "MemberExpression",
              "start": 1077,
              "end": 1083,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1077,
                "end": 1081,
                "decorators": [],
                "name": "objA",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1082,
                "end": 1083,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "operator": "typeof",
            "prefix": true
          },
          {
            "type": "MemberExpression",
            "start": 1085,
            "end": 1088,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1085,
              "end": 1086,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1087,
              "end": 1088,
              "decorators": [],
              "name": "n",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1119,
      "end": 1133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1123,
          "end": 1132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1123,
            "end": 1132,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1124,
              "end": 1132,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1126,
                "end": 1132
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
      "start": 1134,
      "end": 1150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1138,
          "end": 1149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1138,
            "end": 1149,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1139,
              "end": 1149,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1141,
                "end": 1149,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1141,
                  "end": 1147
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
      "start": 1151,
      "end": 1171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1155,
          "end": 1170,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1155,
            "end": 1170,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1156,
              "end": 1170,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1158,
                "end": 1170,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1161,
                  "end": 1170,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1164,
                    "end": 1170
                  }
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
      "type": "LabeledStatement",
      "start": 1172,
      "end": 1189,
      "body": {
        "type": "ExpressionStatement",
        "start": 1175,
        "end": 1189,
        "expression": {
          "type": "UnaryExpression",
          "start": 1175,
          "end": 1188,
          "argument": {
            "type": "Identifier",
            "start": 1182,
            "end": 1188,
            "decorators": [],
            "name": "STRING",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1172,
        "end": 1173,
        "decorators": [],
        "name": "z",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1190,
      "end": 1208,
      "body": {
        "type": "ExpressionStatement",
        "start": 1193,
        "end": 1208,
        "expression": {
          "type": "UnaryExpression",
          "start": 1193,
          "end": 1207,
          "argument": {
            "type": "Identifier",
            "start": 1200,
            "end": 1207,
            "decorators": [],
            "name": "STRING1",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1190,
        "end": 1191,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1209,
      "end": 1223,
      "body": {
        "type": "ExpressionStatement",
        "start": 1212,
        "end": 1223,
        "expression": {
          "type": "UnaryExpression",
          "start": 1212,
          "end": 1222,
          "argument": {
            "type": "Identifier",
            "start": 1219,
            "end": 1222,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1209,
        "end": 1210,
        "decorators": [],
        "name": "r",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1224,
      "end": 1249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1228,
          "end": 1248,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1228,
            "end": 1229,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1232,
            "end": 1248,
            "properties": [
              {
                "type": "Property",
                "start": 1234,
                "end": 1239,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1234,
                  "end": 1235,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1237,
                  "end": 1239,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 1241,
                "end": 1246,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1241,
                  "end": 1242,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1244,
                  "end": 1246,
                  "raw": "\"\"",
                  "value": ""
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
      "type": "LabeledStatement",
      "start": 1250,
      "end": 1264,
      "body": {
        "type": "ExpressionStatement",
        "start": 1253,
        "end": 1264,
        "expression": {
          "type": "UnaryExpression",
          "start": 1253,
          "end": 1263,
          "argument": {
            "type": "MemberExpression",
            "start": 1260,
            "end": 1263,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1260,
              "end": 1261,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1262,
              "end": 1263,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1250,
        "end": 1251,
        "decorators": [],
        "name": "z",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1265,
      "end": 1282,
      "body": {
        "type": "ExpressionStatement",
        "start": 1268,
        "end": 1282,
        "expression": {
          "type": "UnaryExpression",
          "start": 1268,
          "end": 1281,
          "argument": {
            "type": "MemberExpression",
            "start": 1275,
            "end": 1281,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1275,
              "end": 1279,
              "decorators": [],
              "name": "objA",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1280,
              "end": 1281,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1265,
        "end": 1266,
        "decorators": [],
        "name": "z",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1283,
      "end": 1299,
      "body": {
        "type": "ExpressionStatement",
        "start": 1286,
        "end": 1299,
        "expression": {
          "type": "UnaryExpression",
          "start": 1286,
          "end": 1298,
          "argument": {
            "type": "MemberExpression",
            "start": 1293,
            "end": 1298,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1293,
              "end": 1294,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1295,
              "end": 1298,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1283,
        "end": 1284,
        "decorators": [],
        "name": "z",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1300,
      "end": 1314,
      "body": {
        "type": "ExpressionStatement",
        "start": 1303,
        "end": 1314,
        "expression": {
          "type": "UnaryExpression",
          "start": 1303,
          "end": 1313,
          "argument": {
            "type": "MemberExpression",
            "start": 1310,
            "end": 1313,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1310,
              "end": 1311,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1312,
              "end": 1313,
              "decorators": [],
              "name": "n",
              "optional": false
            }
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1300,
        "end": 1301,
        "decorators": [],
        "name": "z",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
