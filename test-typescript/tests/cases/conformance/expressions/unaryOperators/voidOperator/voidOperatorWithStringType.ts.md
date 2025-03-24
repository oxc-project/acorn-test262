__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 998,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 51,
            "name": "STRING",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
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
      "start": 53,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 74,
            "name": "STRING1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 74,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 66,
                "end": 74,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 66,
                  "end": 72
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 77,
            "end": 88,
            "elements": [
              {
                "type": "Literal",
                "start": 78,
                "end": 80,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 82,
                "end": 87,
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
      "start": 91,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 103,
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
        "start": 114,
        "end": 131,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 116,
            "end": 129,
            "argument": {
              "type": "Literal",
              "start": 123,
              "end": 128,
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
        "start": 105,
        "end": 113,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 107,
          "end": 113
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 198,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 164,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
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
              "start": 155,
              "end": 163,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 169,
            "end": 196,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 179,
              "end": 196,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 182,
                "end": 196,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 184,
                    "end": 194,
                    "argument": {
                      "type": "Literal",
                      "start": 191,
                      "end": 193,
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
      "start": 199,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 207,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 208,
        "end": 237,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 214,
            "end": 235,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 221,
              "end": 235,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 225,
                  "end": 234,
                  "id": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 234,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 226,
                      "end": 234,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 228,
                        "end": 234
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
      "start": 239,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 247,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 250,
            "end": 257,
            "callee": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
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
      "start": 279,
      "end": 310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 309,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 295,
            "name": "ResultIsAny1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 298,
            "end": 309,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 303,
              "end": 309,
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
      "start": 311,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 327,
            "name": "ResultIsAny2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 330,
            "end": 342,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 335,
              "end": 342,
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
      "start": 368,
      "end": 395,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 394,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 384,
            "name": "ResultIsAny3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 387,
            "end": 394,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 392,
              "end": 394,
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
      "start": 396,
      "end": 437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 436,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 412,
            "name": "ResultIsAny4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 415,
            "end": 436,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 420,
              "end": 436,
              "properties": [
                {
                  "type": "Property",
                  "start": 422,
                  "end": 427,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 423,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 425,
                    "end": 427,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 429,
                  "end": 434,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 430,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 432,
                    "end": 434,
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
      "start": 438,
      "end": 505,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 504,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 454,
            "name": "ResultIsAny5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 457,
            "end": 504,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 462,
              "end": 504,
              "properties": [
                {
                  "type": "Property",
                  "start": 464,
                  "end": 469,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 465,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 467,
                    "end": 469,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 471,
                  "end": 502,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 472,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 474,
                    "end": 502,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 475,
                        "end": 484,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 476,
                          "end": 484,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 478,
                            "end": 484
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 489,
                      "end": 502,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 491,
                          "end": 500,
                          "argument": {
                            "type": "Identifier",
                            "start": 498,
                            "end": 499,
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
      "start": 534,
      "end": 565,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 538,
          "end": 564,
          "id": {
            "type": "Identifier",
            "start": 538,
            "end": 550,
            "name": "ResultIsAny6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 553,
            "end": 564,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 558,
              "end": 564,
              "object": {
                "type": "Identifier",
                "start": 558,
                "end": 562,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 563,
                "end": 564,
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
      "start": 566,
      "end": 594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 593,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 582,
            "name": "ResultIsAny7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 585,
            "end": 593,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 590,
              "end": 593,
              "object": {
                "type": "Identifier",
                "start": 590,
                "end": 591,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 592,
                "end": 593,
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
      "start": 595,
      "end": 630,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 599,
          "end": 629,
          "id": {
            "type": "Identifier",
            "start": 599,
            "end": 611,
            "name": "ResultIsAny8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 614,
            "end": 629,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 619,
              "end": 629,
              "object": {
                "type": "Identifier",
                "start": 619,
                "end": 626,
                "name": "STRING1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 627,
                "end": 628,
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
      "start": 631,
      "end": 661,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 660,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 647,
            "name": "ResultIsAny9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 650,
            "end": 660,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 655,
              "end": 660,
              "callee": {
                "type": "Identifier",
                "start": 655,
                "end": 658,
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
      "start": 662,
      "end": 695,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 666,
          "end": 694,
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 679,
            "name": "ResultIsAny10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 682,
            "end": 694,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 687,
              "end": 694,
              "callee": {
                "type": "MemberExpression",
                "start": 687,
                "end": 692,
                "object": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 688,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 689,
                  "end": 692,
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
      "start": 696,
      "end": 739,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 700,
          "end": 738,
          "id": {
            "type": "Identifier",
            "start": 700,
            "end": 713,
            "name": "ResultIsAny11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 716,
            "end": 738,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 722,
              "end": 737,
              "left": {
                "type": "Identifier",
                "start": 722,
                "end": 728,
                "name": "STRING",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 731,
                "end": 737,
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
      "start": 740,
      "end": 782,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 744,
          "end": 781,
          "id": {
            "type": "Identifier",
            "start": 744,
            "end": 757,
            "name": "ResultIsAny12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 760,
            "end": 781,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 765,
              "end": 781,
              "callee": {
                "type": "MemberExpression",
                "start": 765,
                "end": 778,
                "object": {
                  "type": "Identifier",
                  "start": 765,
                  "end": 771,
                  "name": "STRING",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 772,
                  "end": 778,
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
                  "start": 779,
                  "end": 780,
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
      "start": 812,
      "end": 849,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 816,
          "end": 848,
          "id": {
            "type": "Identifier",
            "start": 816,
            "end": 829,
            "name": "ResultIsAny13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 832,
            "end": 848,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 837,
              "end": 848,
              "operator": "void",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 842,
                "end": 848,
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
      "start": 850,
      "end": 903,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 854,
          "end": 902,
          "id": {
            "type": "Identifier",
            "start": 854,
            "end": 867,
            "name": "ResultIsAny14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 870,
            "end": 902,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 875,
              "end": 902,
              "operator": "void",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 880,
                "end": 902,
                "operator": "void",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 886,
                  "end": 901,
                  "left": {
                    "type": "Identifier",
                    "start": 886,
                    "end": 892,
                    "name": "STRING",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 901,
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
      "start": 934,
      "end": 942,
      "expression": {
        "type": "UnaryExpression",
        "start": 934,
        "end": 941,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 939,
          "end": 941,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 943,
      "end": 955,
      "expression": {
        "type": "UnaryExpression",
        "start": 943,
        "end": 954,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 948,
          "end": 954,
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
      "start": 956,
      "end": 969,
      "expression": {
        "type": "UnaryExpression",
        "start": 956,
        "end": 968,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 961,
          "end": 968,
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
      "start": 970,
      "end": 981,
      "expression": {
        "type": "UnaryExpression",
        "start": 970,
        "end": 980,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 975,
          "end": 980,
          "callee": {
            "type": "Identifier",
            "start": 975,
            "end": 978,
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
      "start": 982,
      "end": 998,
      "expression": {
        "type": "SequenceExpression",
        "start": 982,
        "end": 997,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 982,
            "end": 993,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 987,
              "end": 993,
              "object": {
                "type": "Identifier",
                "start": 987,
                "end": 991,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 992,
                "end": 993,
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
            "start": 994,
            "end": 997,
            "object": {
              "type": "Identifier",
              "start": 994,
              "end": 995,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 996,
              "end": 997,
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
