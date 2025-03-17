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
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 53,
            "name": "STRING",
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
      "type": "VariableDeclaration",
      "start": 55,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 76,
            "name": "STRING1",
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
            },
            "decorators": [],
            "optional": false
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
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 84,
                "end": 89,
                "value": "abc",
                "raw": "\"abc\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 105,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": "abc",
              "raw": "\"abc\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 143,
        "end": 200,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 149,
            "end": 166,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "name": "a",
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
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 171,
            "end": 198,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 181,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 181,
              "end": 198,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "type": "TSModuleDeclaration",
      "start": 201,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 209,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 210,
        "end": 239,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 216,
            "end": 237,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 223,
              "end": 237,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 227,
                  "end": 236,
                  "id": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 236,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 228,
                      "end": 236,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 230,
                        "end": 236
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
      "start": 241,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 252,
            "end": 259,
            "callee": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 301,
            "name": "ResultIsBoolean1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 304,
            "end": 317,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 311,
              "end": 317,
              "name": "STRING",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 339,
            "name": "ResultIsBoolean2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 342,
            "end": 356,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 349,
              "end": 356,
              "name": "STRING1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 402,
            "name": "ResultIsBoolean3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 405,
            "end": 414,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 412,
              "end": 414,
              "value": "",
              "raw": "\"\""
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 436,
            "name": "ResultIsBoolean4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 439,
            "end": 462,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 446,
              "end": 462,
              "properties": [
                {
                  "type": "Property",
                  "start": 448,
                  "end": 453,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 449,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 451,
                    "end": 453,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 455,
                  "end": 460,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 456,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 458,
                    "end": 460,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 484,
            "name": "ResultIsBoolean5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 487,
            "end": 536,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 494,
              "end": 536,
              "properties": [
                {
                  "type": "Property",
                  "start": 496,
                  "end": 501,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 496,
                    "end": 497,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 499,
                    "end": 501,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 503,
                  "end": 534,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 506,
                    "end": 534,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 507,
                        "end": 516,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 508,
                          "end": 516,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 510,
                            "end": 516
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 586,
            "name": "ResultIsBoolean6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 589,
            "end": 602,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 596,
              "end": 602,
              "object": {
                "type": "Identifier",
                "start": 596,
                "end": 600,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 601,
                "end": 602,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 624,
            "name": "ResultIsBoolean7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 627,
            "end": 637,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 634,
              "end": 637,
              "object": {
                "type": "Identifier",
                "start": 634,
                "end": 635,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 636,
                "end": 637,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 643,
            "end": 659,
            "name": "ResultIsBoolean8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 662,
            "end": 679,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 669,
              "end": 679,
              "object": {
                "type": "Identifier",
                "start": 669,
                "end": 676,
                "name": "STRING1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 677,
                "end": 678,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 685,
            "end": 701,
            "name": "ResultIsBoolean9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 704,
            "end": 716,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 711,
              "end": 716,
              "callee": {
                "type": "Identifier",
                "start": 711,
                "end": 714,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 739,
            "name": "ResultIsBoolean10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 742,
            "end": 756,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 749,
              "end": 756,
              "callee": {
                "type": "MemberExpression",
                "start": 749,
                "end": 754,
                "object": {
                  "type": "Identifier",
                  "start": 749,
                  "end": 750,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 751,
                  "end": 754,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 762,
            "end": 779,
            "name": "ResultIsBoolean11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 782,
            "end": 806,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 790,
              "end": 805,
              "left": {
                "type": "Identifier",
                "start": 790,
                "end": 796,
                "name": "STRING",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 799,
                "end": 805,
                "name": "STRING",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 812,
            "end": 829,
            "name": "ResultIsBoolean12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 832,
            "end": 855,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 839,
              "end": 855,
              "callee": {
                "type": "MemberExpression",
                "start": 839,
                "end": 852,
                "object": {
                  "type": "Identifier",
                  "start": 839,
                  "end": 845,
                  "name": "STRING",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 852,
                  "name": "charAt",
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
                  "start": 853,
                  "end": 854,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 891,
            "end": 908,
            "name": "ResultIsBoolean13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 911,
            "end": 931,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 918,
              "end": 931,
              "operator": "delete",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 925,
                "end": 931,
                "name": "STRING",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 937,
            "end": 954,
            "name": "ResultIsBoolean14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 957,
            "end": 995,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 964,
              "end": 995,
              "operator": "delete",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 971,
                "end": 995,
                "operator": "delete",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 979,
                  "end": 994,
                  "left": {
                    "type": "Identifier",
                    "start": 979,
                    "end": 985,
                    "name": "STRING",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 988,
                    "end": 994,
                    "name": "STRING",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1027,
      "end": 1037,
      "expression": {
        "type": "UnaryExpression",
        "start": 1027,
        "end": 1036,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 1034,
          "end": 1036,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1038,
      "end": 1052,
      "expression": {
        "type": "UnaryExpression",
        "start": 1038,
        "end": 1051,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1045,
          "end": 1051,
          "name": "STRING",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1053,
      "end": 1068,
      "expression": {
        "type": "UnaryExpression",
        "start": 1053,
        "end": 1067,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1060,
          "end": 1067,
          "name": "STRING1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1069,
      "end": 1082,
      "expression": {
        "type": "UnaryExpression",
        "start": 1069,
        "end": 1081,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 1076,
          "end": 1081,
          "callee": {
            "type": "Identifier",
            "start": 1076,
            "end": 1079,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1083,
      "end": 1101,
      "expression": {
        "type": "SequenceExpression",
        "start": 1083,
        "end": 1100,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1083,
            "end": 1096,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 1090,
              "end": 1096,
              "object": {
                "type": "Identifier",
                "start": 1090,
                "end": 1094,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1095,
                "end": 1096,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          {
            "type": "MemberExpression",
            "start": 1097,
            "end": 1100,
            "object": {
              "type": "Identifier",
              "start": 1097,
              "end": 1098,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1099,
              "end": 1100,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
