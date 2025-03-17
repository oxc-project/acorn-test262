__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 1101,
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
        "optional": false,
        "typeAnnotation": null
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
      },
      "typeParameters": null
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
              "optional": false,
              "typeAnnotation": null
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
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 181,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
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
              "params": [],
              "returnType": null,
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 301,
            "decorators": [],
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 304,
            "end": 317,
            "argument": {
              "type": "Identifier",
              "start": 311,
              "end": 317,
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 356,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 339,
            "decorators": [],
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 342,
            "end": 356,
            "argument": {
              "type": "Identifier",
              "start": 349,
              "end": 356,
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 382,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 414,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 402,
            "decorators": [],
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 405,
            "end": 414,
            "argument": {
              "type": "Literal",
              "start": 412,
              "end": 414,
              "raw": "\"\"",
              "value": ""
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 416,
      "end": 463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 462,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 436,
            "decorators": [],
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 439,
            "end": 462,
            "argument": {
              "type": "ObjectExpression",
              "start": 446,
              "end": 462,
              "properties": [
                {
                  "type": "Property",
                  "start": 448,
                  "end": 453,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 449,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 451,
                    "end": 453,
                    "raw": "\"\"",
                    "value": ""
                  }
                },
                {
                  "type": "Property",
                  "start": 455,
                  "end": 460,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 456,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 458,
                    "end": 460,
                    "raw": "\"\"",
                    "value": ""
                  }
                }
              ]
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 537,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 536,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 484,
            "decorators": [],
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 487,
            "end": 536,
            "argument": {
              "type": "ObjectExpression",
              "start": 494,
              "end": 536,
              "properties": [
                {
                  "type": "Property",
                  "start": 496,
                  "end": 501,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 496,
                    "end": 497,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 499,
                    "end": 501,
                    "raw": "\"\"",
                    "value": ""
                  }
                },
                {
                  "type": "Property",
                  "start": 503,
                  "end": 534,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 506,
                    "end": 534,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 521,
                      "end": 534,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 523,
                          "end": 532,
                          "argument": {
                            "type": "Identifier",
                            "start": 530,
                            "end": 531,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 507,
                        "end": 516,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 508,
                          "end": 516,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 510,
                            "end": 516
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 566,
      "end": 603,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 602,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 586,
            "decorators": [],
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 589,
            "end": 602,
            "argument": {
              "type": "MemberExpression",
              "start": 596,
              "end": 602,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 596,
                "end": 600,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 601,
                "end": 602,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 604,
      "end": 638,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 637,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 624,
            "decorators": [],
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 627,
            "end": 637,
            "argument": {
              "type": "MemberExpression",
              "start": 634,
              "end": 637,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 634,
                "end": 635,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 636,
                "end": 637,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 639,
      "end": 680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 643,
          "end": 679,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 643,
            "end": 659,
            "decorators": [],
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 662,
            "end": 679,
            "argument": {
              "type": "MemberExpression",
              "start": 669,
              "end": 679,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 669,
                "end": 676,
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 677,
                "end": 678,
                "raw": "0",
                "value": 0
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 681,
      "end": 717,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 685,
          "end": 716,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 685,
            "end": 701,
            "decorators": [],
            "name": "ResultIsBoolean9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 704,
            "end": 716,
            "argument": {
              "type": "CallExpression",
              "start": 711,
              "end": 716,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 711,
                "end": 714,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 757,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 756,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 739,
            "decorators": [],
            "name": "ResultIsBoolean10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 742,
            "end": 756,
            "argument": {
              "type": "CallExpression",
              "start": 749,
              "end": 756,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 749,
                "end": 754,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 749,
                  "end": 750,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 751,
                  "end": 754,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 758,
      "end": 807,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 762,
          "end": 806,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 762,
            "end": 779,
            "decorators": [],
            "name": "ResultIsBoolean11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 782,
            "end": 806,
            "argument": {
              "type": "BinaryExpression",
              "start": 790,
              "end": 805,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 790,
                "end": 796,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 799,
                "end": 805,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 808,
      "end": 856,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 812,
          "end": 855,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 812,
            "end": 829,
            "decorators": [],
            "name": "ResultIsBoolean12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 832,
            "end": 855,
            "argument": {
              "type": "CallExpression",
              "start": 839,
              "end": 855,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 853,
                  "end": 854,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 839,
                "end": 852,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 839,
                  "end": 845,
                  "decorators": [],
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 852,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 887,
      "end": 932,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 891,
          "end": 931,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 891,
            "end": 908,
            "decorators": [],
            "name": "ResultIsBoolean13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 911,
            "end": 931,
            "argument": {
              "type": "UnaryExpression",
              "start": 918,
              "end": 931,
              "argument": {
                "type": "Identifier",
                "start": 925,
                "end": 931,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "delete",
              "prefix": true
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 933,
      "end": 996,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 937,
          "end": 995,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 937,
            "end": 954,
            "decorators": [],
            "name": "ResultIsBoolean14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 957,
            "end": 995,
            "argument": {
              "type": "UnaryExpression",
              "start": 964,
              "end": 995,
              "argument": {
                "type": "UnaryExpression",
                "start": 971,
                "end": 995,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 979,
                  "end": 994,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 979,
                    "end": 985,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 988,
                    "end": 994,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "delete",
                "prefix": true
              },
              "operator": "delete",
              "prefix": true
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1027,
      "end": 1037,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1027,
        "end": 1036,
        "argument": {
          "type": "Literal",
          "start": 1034,
          "end": 1036,
          "raw": "\"\"",
          "value": ""
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1038,
      "end": 1052,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1038,
        "end": 1051,
        "argument": {
          "type": "Identifier",
          "start": 1045,
          "end": 1051,
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1053,
      "end": 1068,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1053,
        "end": 1067,
        "argument": {
          "type": "Identifier",
          "start": 1060,
          "end": 1067,
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1069,
      "end": 1082,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1069,
        "end": 1081,
        "argument": {
          "type": "CallExpression",
          "start": 1076,
          "end": 1081,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 1076,
            "end": 1079,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1083,
      "end": 1101,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 1083,
        "end": 1100,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1083,
            "end": 1096,
            "argument": {
              "type": "MemberExpression",
              "start": 1090,
              "end": 1096,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1090,
                "end": 1094,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1095,
                "end": 1096,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          },
          {
            "type": "MemberExpression",
            "start": 1097,
            "end": 1100,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1097,
              "end": 1098,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1099,
              "end": 1100,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
