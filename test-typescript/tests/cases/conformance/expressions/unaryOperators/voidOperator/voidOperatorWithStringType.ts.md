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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                "raw": "\"\"",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 82,
                "end": 87,
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
      "start": 91,
      "end": 131,
      "async": false,
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
        "start": 100,
        "end": 103,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
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
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 198,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 198,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 164,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
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
              "start": 155,
              "end": 163,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 169,
            "end": 196,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
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
              "start": 179,
              "end": 196,
              "async": false,
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
        "start": 139,
        "end": 140,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 199,
      "end": 237,
      "body": {
        "type": "TSModuleBlock",
        "start": 208,
        "end": 237,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 214,
            "end": 235,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 221,
              "end": 235,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 225,
                  "end": 234,
                  "definite": false,
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
        "start": 206,
        "end": 207,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 247,
            "decorators": [],
            "name": "objA",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 250,
            "end": 257,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
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
      "start": 279,
      "end": 310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 309,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 295,
            "decorators": [],
            "name": "ResultIsAny1",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 298,
            "end": 309,
            "argument": {
              "type": "Identifier",
              "start": 303,
              "end": 309,
              "decorators": [],
              "name": "STRING",
              "optional": false
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 327,
            "decorators": [],
            "name": "ResultIsAny2",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 330,
            "end": 342,
            "argument": {
              "type": "Identifier",
              "start": 335,
              "end": 342,
              "decorators": [],
              "name": "STRING1",
              "optional": false
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 384,
            "decorators": [],
            "name": "ResultIsAny3",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 387,
            "end": 394,
            "argument": {
              "type": "Literal",
              "start": 392,
              "end": 394,
              "raw": "\"\"",
              "value": ""
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 412,
            "decorators": [],
            "name": "ResultIsAny4",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 415,
            "end": 436,
            "argument": {
              "type": "ObjectExpression",
              "start": 420,
              "end": 436,
              "properties": [
                {
                  "type": "Property",
                  "start": 422,
                  "end": 427,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 423,
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
                    "start": 425,
                    "end": 427,
                    "raw": "\"\"",
                    "value": ""
                  }
                },
                {
                  "type": "Property",
                  "start": 429,
                  "end": 434,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 430,
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
                    "start": 432,
                    "end": 434,
                    "raw": "\"\"",
                    "value": ""
                  }
                }
              ]
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 454,
            "decorators": [],
            "name": "ResultIsAny5",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 457,
            "end": 504,
            "argument": {
              "type": "ObjectExpression",
              "start": 462,
              "end": 504,
              "properties": [
                {
                  "type": "Property",
                  "start": 464,
                  "end": 469,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 465,
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
                    "start": 467,
                    "end": 469,
                    "raw": "\"\"",
                    "value": ""
                  }
                },
                {
                  "type": "Property",
                  "start": 471,
                  "end": 502,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 472,
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
                    "start": 474,
                    "end": 502,
                    "async": false,
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
                    ]
                  }
                }
              ]
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 538,
            "end": 550,
            "decorators": [],
            "name": "ResultIsAny6",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 553,
            "end": 564,
            "argument": {
              "type": "MemberExpression",
              "start": 558,
              "end": 564,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 558,
                "end": 562,
                "decorators": [],
                "name": "objA",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 563,
                "end": 564,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "operator": "void",
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
      "end": 594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 593,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 582,
            "decorators": [],
            "name": "ResultIsAny7",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 585,
            "end": 593,
            "argument": {
              "type": "MemberExpression",
              "start": 590,
              "end": 593,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 590,
                "end": 591,
                "decorators": [],
                "name": "M",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 592,
                "end": 593,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 599,
            "end": 611,
            "decorators": [],
            "name": "ResultIsAny8",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 614,
            "end": 629,
            "argument": {
              "type": "MemberExpression",
              "start": 619,
              "end": 629,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 619,
                "end": 626,
                "decorators": [],
                "name": "STRING1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 627,
                "end": 628,
                "raw": "0",
                "value": 0
              }
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 647,
            "decorators": [],
            "name": "ResultIsAny9",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 650,
            "end": 660,
            "argument": {
              "type": "CallExpression",
              "start": 655,
              "end": 660,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 655,
                "end": 658,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 679,
            "decorators": [],
            "name": "ResultIsAny10",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 682,
            "end": 694,
            "argument": {
              "type": "CallExpression",
              "start": 687,
              "end": 694,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 687,
                "end": 692,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 688,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 689,
                  "end": 692,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 700,
            "end": 713,
            "decorators": [],
            "name": "ResultIsAny11",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 716,
            "end": 738,
            "argument": {
              "type": "BinaryExpression",
              "start": 722,
              "end": 737,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 722,
                "end": 728,
                "decorators": [],
                "name": "STRING",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 731,
                "end": 737,
                "decorators": [],
                "name": "STRING",
                "optional": false
              }
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 744,
            "end": 757,
            "decorators": [],
            "name": "ResultIsAny12",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 760,
            "end": 781,
            "argument": {
              "type": "CallExpression",
              "start": 765,
              "end": 781,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 779,
                  "end": 780,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 765,
                "end": 778,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 765,
                  "end": 771,
                  "decorators": [],
                  "name": "STRING",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 772,
                  "end": 778,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false
                }
              },
              "optional": false
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 816,
            "end": 829,
            "decorators": [],
            "name": "ResultIsAny13",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 832,
            "end": 848,
            "argument": {
              "type": "UnaryExpression",
              "start": 837,
              "end": 848,
              "argument": {
                "type": "Identifier",
                "start": 842,
                "end": 848,
                "decorators": [],
                "name": "STRING",
                "optional": false
              },
              "operator": "void",
              "prefix": true
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 854,
            "end": 867,
            "decorators": [],
            "name": "ResultIsAny14",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 870,
            "end": 902,
            "argument": {
              "type": "UnaryExpression",
              "start": 875,
              "end": 902,
              "argument": {
                "type": "UnaryExpression",
                "start": 880,
                "end": 902,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 886,
                  "end": 901,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 886,
                    "end": 892,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 901,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false
                  }
                },
                "operator": "void",
                "prefix": true
              },
              "operator": "void",
              "prefix": true
            },
            "operator": "void",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 934,
      "end": 942,
      "expression": {
        "type": "UnaryExpression",
        "start": 934,
        "end": 941,
        "argument": {
          "type": "Literal",
          "start": 939,
          "end": 941,
          "raw": "\"\"",
          "value": ""
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 943,
      "end": 955,
      "expression": {
        "type": "UnaryExpression",
        "start": 943,
        "end": 954,
        "argument": {
          "type": "Identifier",
          "start": 948,
          "end": 954,
          "decorators": [],
          "name": "STRING",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 956,
      "end": 969,
      "expression": {
        "type": "UnaryExpression",
        "start": 956,
        "end": 968,
        "argument": {
          "type": "Identifier",
          "start": 961,
          "end": 968,
          "decorators": [],
          "name": "STRING1",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 970,
      "end": 981,
      "expression": {
        "type": "UnaryExpression",
        "start": 970,
        "end": 980,
        "argument": {
          "type": "CallExpression",
          "start": 975,
          "end": 980,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 975,
            "end": 978,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
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
            "argument": {
              "type": "MemberExpression",
              "start": 987,
              "end": 993,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 987,
                "end": 991,
                "decorators": [],
                "name": "objA",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 992,
                "end": 993,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "operator": "void",
            "prefix": true
          },
          {
            "type": "MemberExpression",
            "start": 994,
            "end": 997,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 994,
              "end": 995,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 996,
              "end": 997,
              "decorators": [],
              "name": "n",
              "optional": false
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
