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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 53,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 91,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 90,
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 135,
      "end": 200,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 143,
        "end": 200,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 149,
            "end": 166,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 171,
            "end": 198,
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
            "value": {
              "type": "FunctionExpression",
              "start": 181,
              "end": 198,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 201,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 209,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 227,
                  "end": 236,
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
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 259,
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
            "callee": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 318,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 317,
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
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 311,
              "end": 317,
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 357,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 356,
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
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 349,
              "end": 356,
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 382,
      "end": 415,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 414,
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
            "operator": "delete",
            "argument": {
              "type": "Literal",
              "start": 412,
              "end": 414,
              "value": "",
              "raw": "\"\""
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 416,
      "end": 463,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 462,
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
            "operator": "delete",
            "argument": {
              "type": "ObjectExpression",
              "start": 446,
              "end": 462,
              "properties": [
                {
                  "type": "Property",
                  "start": 448,
                  "end": 453,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 449,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 451,
                    "end": 453,
                    "value": "",
                    "raw": "\"\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 455,
                  "end": 460,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 456,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 458,
                    "end": 460,
                    "value": "",
                    "raw": "\"\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 537,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 536,
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
            "operator": "delete",
            "argument": {
              "type": "ObjectExpression",
              "start": 494,
              "end": 536,
              "properties": [
                {
                  "type": "Property",
                  "start": 496,
                  "end": 501,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 496,
                    "end": 497,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 499,
                    "end": 501,
                    "value": "",
                    "raw": "\"\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 503,
                  "end": 534,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 506,
                    "end": 534,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
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
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 566,
      "end": 603,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 602,
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
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "start": 596,
              "end": 602,
              "object": {
                "type": "Identifier",
                "start": 596,
                "end": 600,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 601,
                "end": 602,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 604,
      "end": 638,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 637,
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
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "start": 634,
              "end": 637,
              "object": {
                "type": "Identifier",
                "start": 634,
                "end": 635,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 636,
                "end": 637,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 639,
      "end": 680,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 643,
          "end": 679,
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
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "start": 669,
              "end": 679,
              "object": {
                "type": "Identifier",
                "start": 669,
                "end": 676,
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 677,
                "end": 678,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 681,
      "end": 717,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 685,
          "end": 716,
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
            "operator": "delete",
            "argument": {
              "type": "CallExpression",
              "start": 711,
              "end": 716,
              "callee": {
                "type": "Identifier",
                "start": 711,
                "end": 714,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 757,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 756,
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
            "operator": "delete",
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 751,
                  "end": 754,
                  "decorators": [],
                  "name": "foo",
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
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 758,
      "end": 807,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 762,
          "end": 806,
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
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "start": 790,
              "end": 805,
              "left": {
                "type": "Identifier",
                "start": 790,
                "end": 796,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
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
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 808,
      "end": 856,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 812,
          "end": 855,
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
            "operator": "delete",
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
                  "decorators": [],
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 852,
                  "decorators": [],
                  "name": "charAt",
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
                  "start": 853,
                  "end": 854,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 887,
      "end": 932,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 891,
          "end": 931,
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
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "start": 918,
              "end": 931,
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "start": 925,
                "end": 931,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 933,
      "end": 996,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 937,
          "end": 995,
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
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "start": 964,
              "end": 995,
              "operator": "delete",
              "argument": {
                "type": "UnaryExpression",
                "start": 971,
                "end": 995,
                "operator": "delete",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 979,
                  "end": 994,
                  "left": {
                    "type": "Identifier",
                    "start": 979,
                    "end": 985,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
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
                "prefix": true
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
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
        "argument": {
          "type": "Literal",
          "start": 1034,
          "end": 1036,
          "value": "",
          "raw": "\"\""
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 1045,
          "end": 1051,
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 1060,
          "end": 1067,
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "CallExpression",
          "start": 1076,
          "end": 1081,
          "callee": {
            "type": "Identifier",
            "start": 1076,
            "end": 1079,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "prefix": true
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
            "argument": {
              "type": "MemberExpression",
              "start": 1090,
              "end": 1096,
              "object": {
                "type": "Identifier",
                "start": 1090,
                "end": 1094,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1095,
                "end": 1096,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          {
            "type": "MemberExpression",
            "start": 1097,
            "end": 1100,
            "object": {
              "type": "Identifier",
              "start": 1097,
              "end": 1098,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1099,
              "end": 1100,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
