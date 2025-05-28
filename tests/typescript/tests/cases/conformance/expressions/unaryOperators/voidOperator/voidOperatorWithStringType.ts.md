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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 51,
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
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
      "start": 53,
      "end": 89,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 74,
            "decorators": [],
            "name": "STRING1",
            "optional": false,
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
            }
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
        "start": 105,
        "end": 113,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 107,
          "end": 113
        }
      },
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 198,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
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
        "start": 141,
        "end": 198,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 164,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "start": 169,
            "end": 196,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 179,
              "end": 196,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
      "start": 199,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 207,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 225,
                  "end": 234,
                  "id": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 234,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 226,
                      "end": 234,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 228,
                        "end": 234
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
      "start": 239,
      "end": 258,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 247,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 250,
            "end": 257,
            "callee": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
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
      "start": 279,
      "end": 310,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 309,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 295,
            "decorators": [],
            "name": "ResultIsAny1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 298,
            "end": 309,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 303,
              "end": 309,
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
      "start": 311,
      "end": 343,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 327,
            "decorators": [],
            "name": "ResultIsAny2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 330,
            "end": 342,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 335,
              "end": 342,
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
      "start": 368,
      "end": 395,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 394,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 384,
            "decorators": [],
            "name": "ResultIsAny3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 387,
            "end": 394,
            "operator": "void",
            "argument": {
              "type": "Literal",
              "start": 392,
              "end": 394,
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
      "start": 396,
      "end": 437,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 436,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 412,
            "decorators": [],
            "name": "ResultIsAny4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 415,
            "end": 436,
            "operator": "void",
            "argument": {
              "type": "ObjectExpression",
              "start": 420,
              "end": 436,
              "properties": [
                {
                  "type": "Property",
                  "start": 422,
                  "end": 427,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 423,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 425,
                    "end": 427,
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
                  "start": 429,
                  "end": 434,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 430,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 432,
                    "end": 434,
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
      "start": 438,
      "end": 505,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 504,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 454,
            "decorators": [],
            "name": "ResultIsAny5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 457,
            "end": 504,
            "operator": "void",
            "argument": {
              "type": "ObjectExpression",
              "start": 462,
              "end": 504,
              "properties": [
                {
                  "type": "Property",
                  "start": 464,
                  "end": 469,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 465,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 467,
                    "end": 469,
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
                  "start": 471,
                  "end": 502,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 472,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 474,
                    "end": 502,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 475,
                        "end": 484,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 476,
                          "end": 484,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 478,
                            "end": 484
                          }
                        }
                      }
                    ],
                    "returnType": null,
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
      "start": 534,
      "end": 565,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 538,
          "end": 564,
          "id": {
            "type": "Identifier",
            "start": 538,
            "end": 550,
            "decorators": [],
            "name": "ResultIsAny6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 553,
            "end": 564,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 558,
              "end": 564,
              "object": {
                "type": "Identifier",
                "start": 558,
                "end": 562,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 563,
                "end": 564,
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
      "start": 566,
      "end": 594,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 593,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 582,
            "decorators": [],
            "name": "ResultIsAny7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 585,
            "end": 593,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 590,
              "end": 593,
              "object": {
                "type": "Identifier",
                "start": 590,
                "end": 591,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 592,
                "end": 593,
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
      "start": 595,
      "end": 630,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 599,
          "end": 629,
          "id": {
            "type": "Identifier",
            "start": 599,
            "end": 611,
            "decorators": [],
            "name": "ResultIsAny8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 614,
            "end": 629,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 619,
              "end": 629,
              "object": {
                "type": "Identifier",
                "start": 619,
                "end": 626,
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 627,
                "end": 628,
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
      "start": 631,
      "end": 661,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 660,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 647,
            "decorators": [],
            "name": "ResultIsAny9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 650,
            "end": 660,
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "start": 655,
              "end": 660,
              "callee": {
                "type": "Identifier",
                "start": 655,
                "end": 658,
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
      "start": 662,
      "end": 695,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 666,
          "end": 694,
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 679,
            "decorators": [],
            "name": "ResultIsAny10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 682,
            "end": 694,
            "operator": "void",
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 689,
                  "end": 692,
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
      "start": 696,
      "end": 739,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 700,
          "end": 738,
          "id": {
            "type": "Identifier",
            "start": 700,
            "end": 713,
            "decorators": [],
            "name": "ResultIsAny11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 716,
            "end": 738,
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "start": 722,
              "end": 737,
              "left": {
                "type": "Identifier",
                "start": 722,
                "end": 728,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 731,
                "end": 737,
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
      "start": 740,
      "end": 782,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 744,
          "end": 781,
          "id": {
            "type": "Identifier",
            "start": 744,
            "end": 757,
            "decorators": [],
            "name": "ResultIsAny12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 760,
            "end": 781,
            "operator": "void",
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
                  "decorators": [],
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 772,
                  "end": 778,
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
                  "start": 779,
                  "end": 780,
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
      "start": 812,
      "end": 849,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 816,
          "end": 848,
          "id": {
            "type": "Identifier",
            "start": 816,
            "end": 829,
            "decorators": [],
            "name": "ResultIsAny13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 832,
            "end": 848,
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "start": 837,
              "end": 848,
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "start": 842,
                "end": 848,
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
      "start": 850,
      "end": 903,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 854,
          "end": 902,
          "id": {
            "type": "Identifier",
            "start": 854,
            "end": 867,
            "decorators": [],
            "name": "ResultIsAny14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 870,
            "end": 902,
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "start": 875,
              "end": 902,
              "operator": "void",
              "argument": {
                "type": "UnaryExpression",
                "start": 880,
                "end": 902,
                "operator": "void",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 886,
                  "end": 901,
                  "left": {
                    "type": "Identifier",
                    "start": 886,
                    "end": 892,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 901,
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
      "start": 934,
      "end": 942,
      "expression": {
        "type": "UnaryExpression",
        "start": 934,
        "end": 941,
        "operator": "void",
        "argument": {
          "type": "Literal",
          "start": 939,
          "end": 941,
          "value": "",
          "raw": "\"\""
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 948,
          "end": 954,
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
      "start": 956,
      "end": 969,
      "expression": {
        "type": "UnaryExpression",
        "start": 956,
        "end": 968,
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "start": 961,
          "end": 968,
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
      "start": 970,
      "end": 981,
      "expression": {
        "type": "UnaryExpression",
        "start": 970,
        "end": 980,
        "operator": "void",
        "argument": {
          "type": "CallExpression",
          "start": 975,
          "end": 980,
          "callee": {
            "type": "Identifier",
            "start": 975,
            "end": 978,
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
            "argument": {
              "type": "MemberExpression",
              "start": 987,
              "end": 993,
              "object": {
                "type": "Identifier",
                "start": 987,
                "end": 991,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 992,
                "end": 993,
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
            "start": 994,
            "end": 997,
            "object": {
              "type": "Identifier",
              "start": 994,
              "end": 995,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 996,
              "end": 997,
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
