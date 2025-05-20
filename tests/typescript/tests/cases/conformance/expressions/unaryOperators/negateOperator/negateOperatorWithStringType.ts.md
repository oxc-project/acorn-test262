__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 841,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 47,
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
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
      "start": 49,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 70,
            "decorators": [],
            "name": "STRING1",
            "optional": false,
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
            }
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
                "raw": "\"\"",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 78,
                "end": 83,
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
      "start": 87,
      "end": 127,
      "async": false,
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
        "start": 96,
        "end": 99,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 101,
        "end": 109,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 103,
          "end": 109
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 194,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 194,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 160,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
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
              "start": 151,
              "end": 159,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 153,
                "end": 159
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 165,
            "end": 192,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 175,
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
              "start": 175,
              "end": 192,
              "async": false,
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
        "start": 135,
        "end": 136,
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
      "start": 195,
      "end": 233,
      "body": {
        "type": "TSModuleBlock",
        "start": 204,
        "end": 233,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 210,
            "end": 231,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 217,
              "end": 231,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 221,
                  "end": 230,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 230,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 222,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 224,
                        "end": 230
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
        "start": 202,
        "end": 203,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 243,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 246,
            "end": 253,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
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
      "start": 275,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 304,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 294,
            "decorators": [],
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 297,
            "end": 304,
            "argument": {
              "type": "Identifier",
              "start": 298,
              "end": 304,
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 325,
            "decorators": [],
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 328,
            "end": 336,
            "argument": {
              "type": "Identifier",
              "start": 329,
              "end": 336,
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 381,
            "decorators": [],
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 384,
            "end": 387,
            "argument": {
              "type": "Literal",
              "start": 385,
              "end": 387,
              "raw": "\"\"",
              "value": ""
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 393,
            "end": 408,
            "decorators": [],
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 411,
            "end": 428,
            "argument": {
              "type": "ObjectExpression",
              "start": 412,
              "end": 428,
              "properties": [
                {
                  "type": "Property",
                  "start": 414,
                  "end": 419,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 414,
                    "end": 415,
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
                    "start": 417,
                    "end": 419,
                    "raw": "\"\"",
                    "value": ""
                  }
                },
                {
                  "type": "Property",
                  "start": 421,
                  "end": 426,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 422,
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
                    "start": 424,
                    "end": 426,
                    "raw": "\"\"",
                    "value": ""
                  }
                }
              ]
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 449,
            "decorators": [],
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 452,
            "end": 495,
            "argument": {
              "type": "ObjectExpression",
              "start": 453,
              "end": 495,
              "properties": [
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
                    "start": 458,
                    "end": 460,
                    "raw": "\"\"",
                    "value": ""
                  }
                },
                {
                  "type": "Property",
                  "start": 462,
                  "end": 493,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 463,
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
                    "start": 465,
                    "end": 493,
                    "async": false,
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
                        "start": 466,
                        "end": 475,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 467,
                          "end": 475,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 469,
                            "end": 475
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
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 529,
            "end": 544,
            "decorators": [],
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 547,
            "end": 554,
            "argument": {
              "type": "MemberExpression",
              "start": 548,
              "end": 554,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 548,
                "end": 552,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 553,
                "end": 554,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 560,
            "end": 575,
            "decorators": [],
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 578,
            "end": 582,
            "argument": {
              "type": "MemberExpression",
              "start": 579,
              "end": 582,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 579,
                "end": 580,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 581,
                "end": 582,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 603,
            "decorators": [],
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 606,
            "end": 617,
            "argument": {
              "type": "MemberExpression",
              "start": 607,
              "end": 617,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 607,
                "end": 614,
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 615,
                "end": 616,
                "raw": "0",
                "value": 0
              }
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 623,
            "end": 638,
            "decorators": [],
            "name": "ResultIsNumber9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 641,
            "end": 647,
            "argument": {
              "type": "CallExpression",
              "start": 642,
              "end": 647,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 642,
                "end": 645,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 653,
            "end": 669,
            "decorators": [],
            "name": "ResultIsNumber10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 672,
            "end": 680,
            "argument": {
              "type": "CallExpression",
              "start": 673,
              "end": 680,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 673,
                "end": 678,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 673,
                  "end": 674,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 675,
                  "end": 678,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 702,
            "decorators": [],
            "name": "ResultIsNumber11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 705,
            "end": 723,
            "argument": {
              "type": "BinaryExpression",
              "start": 707,
              "end": 722,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 707,
                "end": 713,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 716,
                "end": 722,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 729,
            "end": 745,
            "decorators": [],
            "name": "ResultIsNumber12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 748,
            "end": 765,
            "argument": {
              "type": "CallExpression",
              "start": 749,
              "end": 765,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 763,
                  "end": 764,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 749,
                "end": 762,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 749,
                  "end": 755,
                  "decorators": [],
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 756,
                  "end": 762,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 797,
      "end": 801,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 797,
        "end": 800,
        "argument": {
          "type": "Literal",
          "start": 798,
          "end": 800,
          "raw": "\"\"",
          "value": ""
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 802,
      "end": 810,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 802,
        "end": 809,
        "argument": {
          "type": "Identifier",
          "start": 803,
          "end": 809,
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 811,
      "end": 820,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 811,
        "end": 819,
        "argument": {
          "type": "Identifier",
          "start": 812,
          "end": 819,
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 821,
      "end": 828,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 821,
        "end": 827,
        "argument": {
          "type": "CallExpression",
          "start": 822,
          "end": 827,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 822,
            "end": 825,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 829,
      "end": 841,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 829,
        "end": 840,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 829,
            "end": 836,
            "argument": {
              "type": "MemberExpression",
              "start": 830,
              "end": 836,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 830,
                "end": 834,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 835,
                "end": 836,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "-",
            "prefix": true
          },
          {
            "type": "MemberExpression",
            "start": 837,
            "end": 840,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 837,
              "end": 838,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 839,
              "end": 840,
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
