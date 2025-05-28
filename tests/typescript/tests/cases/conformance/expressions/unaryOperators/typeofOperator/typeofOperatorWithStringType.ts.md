__ESTREE_TEST__:PASS:
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
      "end": 317,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 316,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 300,
            "decorators": [],
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 303,
            "end": 316,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 310,
              "end": 316,
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
      "start": 318,
      "end": 355,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 354,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 337,
            "decorators": [],
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 340,
            "end": 354,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 347,
              "end": 354,
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
      "start": 380,
      "end": 412,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 411,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 399,
            "decorators": [],
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 402,
            "end": 411,
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "start": 409,
              "end": 411,
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
      "start": 413,
      "end": 459,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 458,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 432,
            "decorators": [],
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 435,
            "end": 458,
            "operator": "typeof",
            "argument": {
              "type": "ObjectExpression",
              "start": 442,
              "end": 458,
              "properties": [
                {
                  "type": "Property",
                  "start": 444,
                  "end": 449,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 445,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 447,
                    "end": 449,
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
                  "start": 451,
                  "end": 456,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 451,
                    "end": 452,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 454,
                    "end": 456,
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
      "start": 460,
      "end": 532,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 464,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 479,
            "decorators": [],
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 482,
            "end": 531,
            "operator": "typeof",
            "argument": {
              "type": "ObjectExpression",
              "start": 489,
              "end": 531,
              "properties": [
                {
                  "type": "Property",
                  "start": 491,
                  "end": 496,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 491,
                    "end": 492,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 494,
                    "end": 496,
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
                  "start": 498,
                  "end": 529,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 499,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 501,
                    "end": 529,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
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
                    ],
                    "returnType": null,
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
      "start": 561,
      "end": 597,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 565,
          "end": 596,
          "id": {
            "type": "Identifier",
            "start": 565,
            "end": 580,
            "decorators": [],
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 583,
            "end": 596,
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "start": 590,
              "end": 596,
              "object": {
                "type": "Identifier",
                "start": 590,
                "end": 594,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 595,
                "end": 596,
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
      "start": 598,
      "end": 631,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 602,
          "end": 630,
          "id": {
            "type": "Identifier",
            "start": 602,
            "end": 617,
            "decorators": [],
            "name": "ResultIsString7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 620,
            "end": 630,
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "start": 627,
              "end": 630,
              "object": {
                "type": "Identifier",
                "start": 627,
                "end": 628,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 629,
                "end": 630,
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
      "start": 632,
      "end": 672,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 671,
          "id": {
            "type": "Identifier",
            "start": 636,
            "end": 651,
            "decorators": [],
            "name": "ResultIsString8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 654,
            "end": 671,
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "start": 661,
              "end": 671,
              "object": {
                "type": "Identifier",
                "start": 661,
                "end": 668,
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 669,
                "end": 670,
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
      "start": 673,
      "end": 708,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 677,
          "end": 707,
          "id": {
            "type": "Identifier",
            "start": 677,
            "end": 692,
            "decorators": [],
            "name": "ResultIsString9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 695,
            "end": 707,
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "start": 702,
              "end": 707,
              "callee": {
                "type": "Identifier",
                "start": 702,
                "end": 705,
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
      "start": 709,
      "end": 747,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 713,
          "end": 746,
          "id": {
            "type": "Identifier",
            "start": 713,
            "end": 729,
            "decorators": [],
            "name": "ResultIsString10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 732,
            "end": 746,
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "start": 739,
              "end": 746,
              "callee": {
                "type": "MemberExpression",
                "start": 739,
                "end": 744,
                "object": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 744,
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
      "start": 748,
      "end": 796,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 752,
          "end": 795,
          "id": {
            "type": "Identifier",
            "start": 752,
            "end": 768,
            "decorators": [],
            "name": "ResultIsString11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 771,
            "end": 795,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 779,
              "end": 794,
              "left": {
                "type": "Identifier",
                "start": 779,
                "end": 785,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 788,
                "end": 794,
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
      "start": 797,
      "end": 844,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 801,
          "end": 843,
          "id": {
            "type": "Identifier",
            "start": 801,
            "end": 817,
            "decorators": [],
            "name": "ResultIsString12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 820,
            "end": 843,
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "start": 827,
              "end": 843,
              "callee": {
                "type": "MemberExpression",
                "start": 827,
                "end": 840,
                "object": {
                  "type": "Identifier",
                  "start": 827,
                  "end": 833,
                  "decorators": [],
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 840,
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
                  "start": 841,
                  "end": 842,
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
      "start": 876,
      "end": 920,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 880,
          "end": 919,
          "id": {
            "type": "Identifier",
            "start": 880,
            "end": 896,
            "decorators": [],
            "name": "ResultIsString13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 899,
            "end": 919,
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "start": 906,
              "end": 919,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 913,
                "end": 919,
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
      "start": 921,
      "end": 983,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 925,
          "end": 982,
          "id": {
            "type": "Identifier",
            "start": 925,
            "end": 941,
            "decorators": [],
            "name": "ResultIsString14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 944,
            "end": 982,
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "start": 951,
              "end": 982,
              "operator": "typeof",
              "argument": {
                "type": "UnaryExpression",
                "start": 958,
                "end": 982,
                "operator": "typeof",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 966,
                  "end": 981,
                  "left": {
                    "type": "Identifier",
                    "start": 966,
                    "end": 972,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 975,
                    "end": 981,
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
      "start": 1014,
      "end": 1024,
      "expression": {
        "type": "UnaryExpression",
        "start": 1014,
        "end": 1023,
        "operator": "typeof",
        "argument": {
          "type": "Literal",
          "start": 1021,
          "end": 1023,
          "value": "",
          "raw": "\"\""
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1025,
      "end": 1039,
      "expression": {
        "type": "UnaryExpression",
        "start": 1025,
        "end": 1038,
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "start": 1032,
          "end": 1038,
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
      "start": 1040,
      "end": 1055,
      "expression": {
        "type": "UnaryExpression",
        "start": 1040,
        "end": 1054,
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "start": 1047,
          "end": 1054,
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
      "start": 1056,
      "end": 1069,
      "expression": {
        "type": "UnaryExpression",
        "start": 1056,
        "end": 1068,
        "operator": "typeof",
        "argument": {
          "type": "CallExpression",
          "start": 1063,
          "end": 1068,
          "callee": {
            "type": "Identifier",
            "start": 1063,
            "end": 1066,
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
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "start": 1077,
              "end": 1083,
              "object": {
                "type": "Identifier",
                "start": 1077,
                "end": 1081,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1082,
                "end": 1083,
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
            "start": 1085,
            "end": 1088,
            "object": {
              "type": "Identifier",
              "start": 1085,
              "end": 1086,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1087,
              "end": 1088,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 1119,
      "end": 1133,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1123,
          "end": 1132,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1134,
      "end": 1150,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1138,
          "end": 1149,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1151,
      "end": 1171,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1155,
          "end": 1170,
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
                "typeParameters": null,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "LabeledStatement",
      "start": 1172,
      "end": 1189,
      "label": {
        "type": "Identifier",
        "start": 1172,
        "end": 1173,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1175,
        "end": 1189,
        "expression": {
          "type": "UnaryExpression",
          "start": 1175,
          "end": 1188,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 1182,
            "end": 1188,
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "directive": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1190,
      "end": 1208,
      "label": {
        "type": "Identifier",
        "start": 1190,
        "end": 1191,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1193,
        "end": 1208,
        "expression": {
          "type": "UnaryExpression",
          "start": 1193,
          "end": 1207,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 1200,
            "end": 1207,
            "decorators": [],
            "name": "STRING1",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "directive": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1209,
      "end": 1223,
      "label": {
        "type": "Identifier",
        "start": 1209,
        "end": 1210,
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1212,
        "end": 1223,
        "expression": {
          "type": "UnaryExpression",
          "start": 1212,
          "end": 1222,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 1219,
            "end": 1222,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "directive": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1224,
      "end": 1249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1228,
          "end": 1248,
          "id": {
            "type": "Identifier",
            "start": 1228,
            "end": 1229,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1234,
                  "end": 1235,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1237,
                  "end": 1239,
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
                "start": 1241,
                "end": 1246,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1241,
                  "end": 1242,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1244,
                  "end": 1246,
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "LabeledStatement",
      "start": 1250,
      "end": 1264,
      "label": {
        "type": "Identifier",
        "start": 1250,
        "end": 1251,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1253,
        "end": 1264,
        "expression": {
          "type": "UnaryExpression",
          "start": 1253,
          "end": 1263,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 1260,
            "end": 1263,
            "object": {
              "type": "Identifier",
              "start": 1260,
              "end": 1261,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1262,
              "end": 1263,
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
        "directive": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1265,
      "end": 1282,
      "label": {
        "type": "Identifier",
        "start": 1265,
        "end": 1266,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1268,
        "end": 1282,
        "expression": {
          "type": "UnaryExpression",
          "start": 1268,
          "end": 1281,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 1275,
            "end": 1281,
            "object": {
              "type": "Identifier",
              "start": 1275,
              "end": 1279,
              "decorators": [],
              "name": "objA",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1280,
              "end": 1281,
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
        "directive": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1283,
      "end": 1299,
      "label": {
        "type": "Identifier",
        "start": 1283,
        "end": 1284,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1286,
        "end": 1299,
        "expression": {
          "type": "UnaryExpression",
          "start": 1286,
          "end": 1298,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 1293,
            "end": 1298,
            "object": {
              "type": "Identifier",
              "start": 1293,
              "end": 1294,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1295,
              "end": 1298,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "prefix": true
        },
        "directive": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1300,
      "end": 1314,
      "label": {
        "type": "Identifier",
        "start": 1300,
        "end": 1301,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1303,
        "end": 1314,
        "expression": {
          "type": "UnaryExpression",
          "start": 1303,
          "end": 1313,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 1310,
            "end": 1313,
            "object": {
              "type": "Identifier",
              "start": 1310,
              "end": 1311,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1312,
              "end": 1313,
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
        "directive": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
