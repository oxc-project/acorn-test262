__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 938,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 47,
            "name": "STRING",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
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
      "start": 49,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 70,
            "name": "STRING1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 70,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 62,
                "end": 70,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 62,
                  "end": 68
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 73,
            "end": 84,
            "elements": [
              {
                "type": "Literal",
                "start": 74,
                "end": 76,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 78,
                "end": 83,
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
      "start": 87,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
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
        "start": 110,
        "end": 127,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 112,
            "end": 125,
            "argument": {
              "type": "Literal",
              "start": 119,
              "end": 124,
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
        "start": 101,
        "end": 109,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 103,
          "end": 109
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 194,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 160,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
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
              "start": 151,
              "end": 159,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 153,
                "end": 159
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 165,
            "end": 192,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 175,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 175,
              "end": 192,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 192,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 180,
                    "end": 190,
                    "argument": {
                      "type": "Literal",
                      "start": 187,
                      "end": 189,
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
      "start": 195,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 203,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 204,
        "end": 233,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 210,
            "end": 231,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 217,
              "end": 231,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 221,
                  "end": 230,
                  "id": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 230,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 222,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 224,
                        "end": 230
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
      "start": 235,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 243,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 246,
            "end": 253,
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
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
      "start": 275,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 304,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 294,
            "name": "ResultIsNumber1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 297,
            "end": 304,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 298,
              "end": 304,
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
      "start": 306,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 325,
            "name": "ResultIsNumber2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 328,
            "end": 336,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 329,
              "end": 336,
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
      "start": 362,
      "end": 388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 387,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 381,
            "name": "ResultIsNumber3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 384,
            "end": 387,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 385,
              "end": 387,
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
      "start": 389,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 393,
          "end": 428,
          "id": {
            "type": "Identifier",
            "start": 393,
            "end": 408,
            "name": "ResultIsNumber4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 411,
            "end": 428,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 412,
              "end": 428,
              "properties": [
                {
                  "type": "Property",
                  "start": 414,
                  "end": 419,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 414,
                    "end": 415,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 417,
                    "end": 419,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 421,
                  "end": 426,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 422,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 424,
                    "end": 426,
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
      "start": 430,
      "end": 496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 495,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 449,
            "name": "ResultIsNumber5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 452,
            "end": 495,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 453,
              "end": 495,
              "properties": [
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
                    "name": "x",
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
                },
                {
                  "type": "Property",
                  "start": 462,
                  "end": 493,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 463,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 465,
                    "end": 493,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 466,
                        "end": 475,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 467,
                          "end": 475,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 469,
                            "end": 475
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 480,
                      "end": 493,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 482,
                          "end": 491,
                          "argument": {
                            "type": "Identifier",
                            "start": 489,
                            "end": 490,
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
      "start": 525,
      "end": 555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 529,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 529,
            "end": 544,
            "name": "ResultIsNumber6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 547,
            "end": 554,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 548,
              "end": 554,
              "object": {
                "type": "Identifier",
                "start": 548,
                "end": 552,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 553,
                "end": 554,
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
      "start": 556,
      "end": 583,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 560,
          "end": 582,
          "id": {
            "type": "Identifier",
            "start": 560,
            "end": 575,
            "name": "ResultIsNumber7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 578,
            "end": 582,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 579,
              "end": 582,
              "object": {
                "type": "Identifier",
                "start": 579,
                "end": 580,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 581,
                "end": 582,
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
      "start": 584,
      "end": 618,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 617,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 603,
            "name": "ResultIsNumber8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 606,
            "end": 617,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 607,
              "end": 617,
              "object": {
                "type": "Identifier",
                "start": 607,
                "end": 614,
                "name": "STRING1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 615,
                "end": 616,
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
      "start": 619,
      "end": 648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 623,
          "end": 647,
          "id": {
            "type": "Identifier",
            "start": 623,
            "end": 638,
            "name": "ResultIsNumber9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 641,
            "end": 647,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 642,
              "end": 647,
              "callee": {
                "type": "Identifier",
                "start": 642,
                "end": 645,
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
      "start": 649,
      "end": 681,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 653,
          "end": 680,
          "id": {
            "type": "Identifier",
            "start": 653,
            "end": 669,
            "name": "ResultIsNumber10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 672,
            "end": 680,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 673,
              "end": 680,
              "callee": {
                "type": "MemberExpression",
                "start": 673,
                "end": 678,
                "object": {
                  "type": "Identifier",
                  "start": 673,
                  "end": 674,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 675,
                  "end": 678,
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
      "start": 682,
      "end": 724,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 723,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 702,
            "name": "ResultIsNumber11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 705,
            "end": 723,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 707,
              "end": 722,
              "left": {
                "type": "Identifier",
                "start": 707,
                "end": 713,
                "name": "STRING",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 716,
                "end": 722,
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
      "start": 725,
      "end": 766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 729,
          "end": 765,
          "id": {
            "type": "Identifier",
            "start": 729,
            "end": 745,
            "name": "ResultIsNumber12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 748,
            "end": 765,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 749,
              "end": 765,
              "callee": {
                "type": "MemberExpression",
                "start": 749,
                "end": 762,
                "object": {
                  "type": "Identifier",
                  "start": 749,
                  "end": 755,
                  "name": "STRING",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 756,
                  "end": 762,
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
                  "start": 763,
                  "end": 764,
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
      "start": 792,
      "end": 824,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 796,
          "end": 823,
          "id": {
            "type": "Identifier",
            "start": 796,
            "end": 812,
            "name": "ResultIsNumber13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 815,
            "end": 823,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 816,
              "end": 823,
              "operator": "~",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 817,
                "end": 823,
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
      "start": 825,
      "end": 869,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 829,
          "end": 868,
          "id": {
            "type": "Identifier",
            "start": 829,
            "end": 845,
            "name": "ResultIsNumber14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 848,
            "end": 868,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 849,
              "end": 868,
              "operator": "~",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 850,
                "end": 868,
                "operator": "~",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 852,
                  "end": 867,
                  "left": {
                    "type": "Identifier",
                    "start": 852,
                    "end": 858,
                    "name": "STRING",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 861,
                    "end": 867,
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
      "start": 899,
      "end": 907,
      "expression": {
        "type": "UnaryExpression",
        "start": 899,
        "end": 906,
        "operator": "~",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 900,
          "end": 906,
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
      "start": 908,
      "end": 917,
      "expression": {
        "type": "UnaryExpression",
        "start": 908,
        "end": 916,
        "operator": "~",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 909,
          "end": 916,
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
      "start": 918,
      "end": 925,
      "expression": {
        "type": "UnaryExpression",
        "start": 918,
        "end": 924,
        "operator": "~",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 919,
          "end": 924,
          "callee": {
            "type": "Identifier",
            "start": 919,
            "end": 922,
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
      "start": 926,
      "end": 938,
      "expression": {
        "type": "SequenceExpression",
        "start": 926,
        "end": 937,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 926,
            "end": 933,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 927,
              "end": 933,
              "object": {
                "type": "Identifier",
                "start": 927,
                "end": 931,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 932,
                "end": 933,
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
            "start": 934,
            "end": 937,
            "object": {
              "type": "Identifier",
              "start": 934,
              "end": 935,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 936,
              "end": 937,
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
