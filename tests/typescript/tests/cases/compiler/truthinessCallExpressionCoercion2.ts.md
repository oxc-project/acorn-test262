__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3307,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 46,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
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
        "start": 16,
        "end": 46,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 44,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "from",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 33,
              "end": 44,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 37,
                  "end": 43
                }
              },
              "body": null,
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 94,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 94,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 92,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 81,
              "decorators": [],
              "name": "from",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 81,
              "end": 92,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 91,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 85,
                  "end": 91
                }
              },
              "body": null,
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
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 1795,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 109,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 110,
          "end": 134,
          "decorators": [],
          "name": "required1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 119,
            "end": 134,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 121,
              "end": 134,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 124,
                "end": 134,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 127,
                  "end": 134
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 136,
          "end": 160,
          "decorators": [],
          "name": "required2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 145,
            "end": 160,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 147,
              "end": 160,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 150,
                "end": 160,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 153,
                  "end": 160
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 162,
          "end": 172,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 163,
            "end": 172,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 165,
              "end": 172
            }
          }
        },
        {
          "type": "Identifier",
          "start": 174,
          "end": 198,
          "decorators": [],
          "name": "optional",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 198,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 185,
              "end": 198,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 188,
                "end": 198,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 191,
                  "end": 198
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 200,
        "end": 1795,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 219,
            "end": 256,
            "expression": {
              "type": "LogicalExpression",
              "start": 219,
              "end": 255,
              "left": {
                "type": "Identifier",
                "start": 219,
                "end": 228,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 232,
                "end": 255,
                "callee": {
                  "type": "MemberExpression",
                  "start": 232,
                  "end": 243,
                  "object": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 239,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 243,
                    "decorators": [],
                    "name": "log",
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
                    "start": 244,
                    "end": 254,
                    "value": "required",
                    "raw": "'required'"
                  }
                ],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 275,
            "end": 317,
            "expression": {
              "type": "LogicalExpression",
              "start": 275,
              "end": 316,
              "left": {
                "type": "LogicalExpression",
                "start": 275,
                "end": 289,
                "left": {
                  "type": "Literal",
                  "start": 275,
                  "end": 276,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 289,
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 293,
                "end": 316,
                "callee": {
                  "type": "MemberExpression",
                  "start": 293,
                  "end": 304,
                  "object": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 300,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 304,
                    "decorators": [],
                    "name": "log",
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
                    "start": 305,
                    "end": 315,
                    "value": "required",
                    "raw": "'required'"
                  }
                ],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 333,
            "end": 358,
            "expression": {
              "type": "LogicalExpression",
              "start": 333,
              "end": 357,
              "left": {
                "type": "Identifier",
                "start": 333,
                "end": 342,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 346,
                "end": 357,
                "callee": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 355,
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 374,
            "end": 404,
            "expression": {
              "type": "LogicalExpression",
              "start": 374,
              "end": 403,
              "left": {
                "type": "LogicalExpression",
                "start": 374,
                "end": 388,
                "left": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 383,
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "&&",
                "right": {
                  "type": "Literal",
                  "start": 387,
                  "end": 388,
                  "value": 1,
                  "raw": "1"
                }
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 392,
                "end": 403,
                "callee": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 401,
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 420,
            "end": 456,
            "expression": {
              "type": "LogicalExpression",
              "start": 420,
              "end": 455,
              "left": {
                "type": "Identifier",
                "start": 420,
                "end": 428,
                "decorators": [],
                "name": "optional",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 432,
                "end": 455,
                "callee": {
                  "type": "MemberExpression",
                  "start": 432,
                  "end": 443,
                  "object": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 439,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 443,
                    "decorators": [],
                    "name": "log",
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
                    "start": 444,
                    "end": 454,
                    "value": "optional",
                    "raw": "'optional'"
                  }
                ],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 472,
            "end": 513,
            "expression": {
              "type": "LogicalExpression",
              "start": 472,
              "end": 512,
              "left": {
                "type": "LogicalExpression",
                "start": 472,
                "end": 485,
                "left": {
                  "type": "Literal",
                  "start": 472,
                  "end": 473,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 485,
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 489,
                "end": 512,
                "callee": {
                  "type": "MemberExpression",
                  "start": 489,
                  "end": 500,
                  "object": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 496,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 500,
                    "decorators": [],
                    "name": "log",
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
                    "start": 501,
                    "end": 511,
                    "value": "optional",
                    "raw": "'optional'"
                  }
                ],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 529,
            "end": 572,
            "expression": {
              "type": "LogicalExpression",
              "start": 529,
              "end": 571,
              "left": {
                "type": "UnaryExpression",
                "start": 529,
                "end": 540,
                "operator": "!",
                "argument": {
                  "type": "UnaryExpression",
                  "start": 530,
                  "end": 540,
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 540,
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "prefix": true
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 544,
                "end": 571,
                "callee": {
                  "type": "MemberExpression",
                  "start": 544,
                  "end": 555,
                  "object": {
                    "type": "Identifier",
                    "start": 544,
                    "end": 551,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 555,
                    "decorators": [],
                    "name": "log",
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
                    "start": 556,
                    "end": 570,
                    "value": "not required",
                    "raw": "'not required'"
                  }
                ],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 588,
            "end": 632,
            "expression": {
              "type": "LogicalExpression",
              "start": 588,
              "end": 631,
              "left": {
                "type": "CallExpression",
                "start": 588,
                "end": 599,
                "callee": {
                  "type": "Identifier",
                  "start": 588,
                  "end": 597,
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 603,
                "end": 631,
                "callee": {
                  "type": "MemberExpression",
                  "start": 603,
                  "end": 614,
                  "object": {
                    "type": "Identifier",
                    "start": 603,
                    "end": 610,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 611,
                    "end": 614,
                    "decorators": [],
                    "name": "log",
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
                    "start": 615,
                    "end": 630,
                    "value": "required call",
                    "raw": "'required call'"
                  }
                ],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 648,
            "end": 701,
            "expression": {
              "type": "LogicalExpression",
              "start": 648,
              "end": 700,
              "left": {
                "type": "LogicalExpression",
                "start": 648,
                "end": 685,
                "left": {
                  "type": "LogicalExpression",
                  "start": 648,
                  "end": 670,
                  "left": {
                    "type": "Identifier",
                    "start": 648,
                    "end": 657,
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 661,
                    "end": 670,
                    "decorators": [],
                    "name": "required2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "start": 674,
                  "end": 685,
                  "callee": {
                    "type": "Identifier",
                    "start": 674,
                    "end": 683,
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                }
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 689,
                "end": 700,
                "callee": {
                  "type": "Identifier",
                  "start": 689,
                  "end": 698,
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 717,
            "end": 773,
            "expression": {
              "type": "CallExpression",
              "start": 717,
              "end": 772,
              "callee": {
                "type": "MemberExpression",
                "start": 717,
                "end": 727,
                "object": {
                  "type": "ArrayExpression",
                  "start": 717,
                  "end": 719,
                  "elements": []
                },
                "property": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 727,
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 728,
                  "end": 771,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 729,
                      "end": 742,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 730,
                        "end": 742,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 732,
                          "end": 742,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 735,
                            "end": 742,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 738,
                              "end": 742
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "LogicalExpression",
                    "start": 747,
                    "end": 771,
                    "left": {
                      "type": "Identifier",
                      "start": 747,
                      "end": 748,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "&&",
                    "right": {
                      "type": "CallExpression",
                      "start": 752,
                      "end": 771,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 752,
                        "end": 759,
                        "object": {
                          "type": "Identifier",
                          "start": 752,
                          "end": 753,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 754,
                          "end": 759,
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 760,
                          "end": 766,
                          "decorators": [],
                          "name": "parent",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "ArrayExpression",
                          "start": 768,
                          "end": 770,
                          "elements": []
                        }
                      ],
                      "optional": false
                    }
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 792,
            "end": 852,
            "expression": {
              "type": "LogicalExpression",
              "start": 792,
              "end": 851,
              "left": {
                "type": "LogicalExpression",
                "start": 792,
                "end": 829,
                "left": {
                  "type": "LogicalExpression",
                  "start": 792,
                  "end": 814,
                  "left": {
                    "type": "Identifier",
                    "start": 792,
                    "end": 801,
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 805,
                    "end": 814,
                    "decorators": [],
                    "name": "required2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "start": 818,
                  "end": 829,
                  "callee": {
                    "type": "Identifier",
                    "start": 818,
                    "end": 827,
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                }
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 833,
                "end": 851,
                "callee": {
                  "type": "MemberExpression",
                  "start": 833,
                  "end": 844,
                  "object": {
                    "type": "Identifier",
                    "start": 833,
                    "end": 840,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 841,
                    "end": 844,
                    "decorators": [],
                    "name": "log",
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
                    "start": 845,
                    "end": 850,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                ],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 871,
            "end": 898,
            "test": {
              "type": "LogicalExpression",
              "start": 875,
              "end": 889,
              "left": {
                "type": "Identifier",
                "start": 875,
                "end": 884,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "start": 888,
                "end": 889,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 891,
              "end": 898,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 917,
            "end": 944,
            "test": {
              "type": "LogicalExpression",
              "start": 921,
              "end": 935,
              "left": {
                "type": "Identifier",
                "start": 921,
                "end": 930,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "start": 934,
                "end": 935,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 937,
              "end": 944,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 963,
            "end": 998,
            "test": {
              "type": "LogicalExpression",
              "start": 967,
              "end": 989,
              "left": {
                "type": "Identifier",
                "start": 967,
                "end": 976,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "start": 980,
                "end": 989,
                "decorators": [],
                "name": "required2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 991,
              "end": 998,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1017,
            "end": 1044,
            "test": {
              "type": "LogicalExpression",
              "start": 1021,
              "end": 1035,
              "left": {
                "type": "Identifier",
                "start": 1021,
                "end": 1030,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "start": 1034,
                "end": 1035,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1037,
              "end": 1044,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1063,
            "end": 1098,
            "test": {
              "type": "LogicalExpression",
              "start": 1067,
              "end": 1089,
              "left": {
                "type": "Identifier",
                "start": 1067,
                "end": 1076,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "start": 1080,
                "end": 1089,
                "decorators": [],
                "name": "required2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1091,
              "end": 1098,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1117,
            "end": 1148,
            "test": {
              "type": "LogicalExpression",
              "start": 1123,
              "end": 1137,
              "left": {
                "type": "Identifier",
                "start": 1123,
                "end": 1132,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "start": 1136,
                "end": 1137,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1141,
              "end": 1148,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1164,
            "end": 1212,
            "test": {
              "type": "LogicalExpression",
              "start": 1168,
              "end": 1182,
              "left": {
                "type": "Identifier",
                "start": 1168,
                "end": 1177,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "start": 1181,
                "end": 1182,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1184,
              "end": 1212,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1194,
                  "end": 1206,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1194,
                    "end": 1205,
                    "callee": {
                      "type": "Identifier",
                      "start": 1194,
                      "end": 1203,
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1228,
            "end": 1276,
            "test": {
              "type": "LogicalExpression",
              "start": 1232,
              "end": 1246,
              "left": {
                "type": "Identifier",
                "start": 1232,
                "end": 1241,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "start": 1245,
                "end": 1246,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1248,
              "end": 1276,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1258,
                  "end": 1270,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1258,
                    "end": 1269,
                    "callee": {
                      "type": "Identifier",
                      "start": 1258,
                      "end": 1267,
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1292,
            "end": 1340,
            "test": {
              "type": "LogicalExpression",
              "start": 1296,
              "end": 1310,
              "left": {
                "type": "Identifier",
                "start": 1296,
                "end": 1305,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "start": 1309,
                "end": 1310,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1312,
              "end": 1340,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1322,
                  "end": 1334,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1322,
                    "end": 1333,
                    "callee": {
                      "type": "Identifier",
                      "start": 1322,
                      "end": 1331,
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1356,
            "end": 1404,
            "test": {
              "type": "LogicalExpression",
              "start": 1360,
              "end": 1374,
              "left": {
                "type": "Identifier",
                "start": 1360,
                "end": 1361,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "start": 1365,
                "end": 1374,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1376,
              "end": 1404,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1386,
                  "end": 1398,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1386,
                    "end": 1397,
                    "callee": {
                      "type": "Identifier",
                      "start": 1386,
                      "end": 1395,
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1420,
            "end": 1472,
            "test": {
              "type": "LogicalExpression",
              "start": 1426,
              "end": 1440,
              "left": {
                "type": "Identifier",
                "start": 1426,
                "end": 1435,
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "start": 1439,
                "end": 1440,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1444,
              "end": 1472,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1454,
                  "end": 1466,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1454,
                    "end": 1465,
                    "callee": {
                      "type": "Identifier",
                      "start": 1454,
                      "end": 1463,
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1525,
            "end": 1549,
            "test": {
              "type": "Identifier",
              "start": 1530,
              "end": 1539,
              "decorators": [],
              "name": "required1",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1542,
              "end": 1549,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1568,
            "end": 1610,
            "test": {
              "type": "LogicalExpression",
              "start": 1572,
              "end": 1601,
              "left": {
                "type": "Identifier",
                "start": 1572,
                "end": 1573,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "start": 1578,
                "end": 1600,
                "left": {
                  "type": "Identifier",
                  "start": 1578,
                  "end": 1587,
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "start": 1591,
                  "end": 1600,
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1603,
              "end": 1610,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1629,
            "end": 1671,
            "test": {
              "type": "LogicalExpression",
              "start": 1633,
              "end": 1662,
              "left": {
                "type": "LogicalExpression",
                "start": 1634,
                "end": 1656,
                "left": {
                  "type": "Identifier",
                  "start": 1634,
                  "end": 1643,
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "start": 1647,
                  "end": 1656,
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "start": 1661,
                "end": 1662,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1664,
              "end": 1671,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1690,
            "end": 1732,
            "test": {
              "type": "LogicalExpression",
              "start": 1694,
              "end": 1723,
              "left": {
                "type": "Identifier",
                "start": 1694,
                "end": 1695,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "start": 1700,
                "end": 1722,
                "left": {
                  "type": "Identifier",
                  "start": 1700,
                  "end": 1709,
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "??",
                "right": {
                  "type": "Identifier",
                  "start": 1713,
                  "end": 1722,
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1725,
              "end": 1732,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1751,
            "end": 1793,
            "test": {
              "type": "LogicalExpression",
              "start": 1755,
              "end": 1784,
              "left": {
                "type": "LogicalExpression",
                "start": 1756,
                "end": 1778,
                "left": {
                  "type": "Identifier",
                  "start": 1756,
                  "end": 1765,
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "??",
                "right": {
                  "type": "Identifier",
                  "start": 1769,
                  "end": 1778,
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "start": 1783,
                "end": 1784,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1786,
              "end": 1793,
              "body": []
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1797,
      "end": 1986,
      "id": {
        "type": "Identifier",
        "start": 1806,
        "end": 1819,
        "decorators": [],
        "name": "checksConsole",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1822,
        "end": 1986,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1841,
            "end": 1984,
            "expression": {
              "type": "LogicalExpression",
              "start": 1841,
              "end": 1983,
              "left": {
                "type": "LogicalExpression",
                "start": 1841,
                "end": 1888,
                "left": {
                  "type": "BinaryExpression",
                  "start": 1841,
                  "end": 1870,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1841,
                    "end": 1854,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 1848,
                      "end": 1854,
                      "decorators": [],
                      "name": "window",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "start": 1859,
                    "end": 1870,
                    "value": "undefined",
                    "raw": "'undefined'"
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "start": 1874,
                  "end": 1888,
                  "object": {
                    "type": "Identifier",
                    "start": 1874,
                    "end": 1880,
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1881,
                    "end": 1888,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "start": 1901,
                "end": 1982,
                "left": {
                  "type": "MemberExpression",
                  "start": 1901,
                  "end": 1932,
                  "object": {
                    "type": "TSAsExpression",
                    "start": 1902,
                    "end": 1923,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1902,
                      "end": 1916,
                      "object": {
                        "type": "Identifier",
                        "start": 1902,
                        "end": 1908,
                        "decorators": [],
                        "name": "window",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1909,
                        "end": 1916,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1920,
                      "end": 1923
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1925,
                    "end": 1932,
                    "decorators": [],
                    "name": "firebug",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "||",
                "right": {
                  "type": "LogicalExpression",
                  "start": 1937,
                  "end": 1981,
                  "left": {
                    "type": "MemberExpression",
                    "start": 1937,
                    "end": 1957,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1937,
                      "end": 1951,
                      "object": {
                        "type": "Identifier",
                        "start": 1937,
                        "end": 1943,
                        "decorators": [],
                        "name": "window",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1944,
                        "end": 1951,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1952,
                      "end": 1957,
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "start": 1961,
                    "end": 1981,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1961,
                      "end": 1975,
                      "object": {
                        "type": "Identifier",
                        "start": 1961,
                        "end": 1967,
                        "decorators": [],
                        "name": "window",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1968,
                        "end": 1975,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1976,
                      "end": 1981,
                      "decorators": [],
                      "name": "table",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1988,
      "end": 2870,
      "id": {
        "type": "Identifier",
        "start": 1997,
        "end": 2017,
        "decorators": [],
        "name": "checksPropertyAccess",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2020,
        "end": 2870,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2026,
            "end": 2103,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2032,
                "end": 2103,
                "id": {
                  "type": "Identifier",
                  "start": 2032,
                  "end": 2033,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 2036,
                  "end": 2103,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2046,
                      "end": 2097,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2046,
                        "end": 2049,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 2051,
                        "end": 2097,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2065,
                            "end": 2087,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2065,
                              "end": 2068,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 2068,
                              "end": 2087,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 2071,
                                "end": 2087,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 2073,
                                    "end": 2085,
                                    "argument": {
                                      "type": "Literal",
                                      "start": 2080,
                                      "end": 2084,
                                      "value": true,
                                      "raw": "true"
                                    }
                                  }
                                ]
                              },
                              "expression": false
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
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
            "type": "ExpressionStatement",
            "start": 2122,
            "end": 2160,
            "expression": {
              "type": "LogicalExpression",
              "start": 2122,
              "end": 2159,
              "left": {
                "type": "MemberExpression",
                "start": 2122,
                "end": 2131,
                "object": {
                  "type": "MemberExpression",
                  "start": 2122,
                  "end": 2127,
                  "object": {
                    "type": "Identifier",
                    "start": 2122,
                    "end": 2123,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2124,
                    "end": 2127,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2128,
                  "end": 2131,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 2135,
                "end": 2159,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2135,
                  "end": 2146,
                  "object": {
                    "type": "Identifier",
                    "start": 2135,
                    "end": 2142,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2143,
                    "end": 2146,
                    "decorators": [],
                    "name": "log",
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
                    "start": 2147,
                    "end": 2158,
                    "value": "x.foo.bar",
                    "raw": "'x.foo.bar'"
                  }
                ],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2179,
            "end": 2222,
            "expression": {
              "type": "LogicalExpression",
              "start": 2179,
              "end": 2221,
              "left": {
                "type": "LogicalExpression",
                "start": 2179,
                "end": 2193,
                "left": {
                  "type": "Literal",
                  "start": 2179,
                  "end": 2180,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "start": 2184,
                  "end": 2193,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2184,
                    "end": 2189,
                    "object": {
                      "type": "Identifier",
                      "start": 2184,
                      "end": 2185,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2186,
                      "end": 2189,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2190,
                    "end": 2193,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 2197,
                "end": 2221,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2197,
                  "end": 2208,
                  "object": {
                    "type": "Identifier",
                    "start": 2197,
                    "end": 2204,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2205,
                    "end": 2208,
                    "decorators": [],
                    "name": "log",
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
                    "start": 2209,
                    "end": 2220,
                    "value": "x.foo.bar",
                    "raw": "'x.foo.bar'"
                  }
                ],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2238,
            "end": 2263,
            "expression": {
              "type": "LogicalExpression",
              "start": 2238,
              "end": 2262,
              "left": {
                "type": "MemberExpression",
                "start": 2238,
                "end": 2247,
                "object": {
                  "type": "MemberExpression",
                  "start": 2238,
                  "end": 2243,
                  "object": {
                    "type": "Identifier",
                    "start": 2238,
                    "end": 2239,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2240,
                    "end": 2243,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2244,
                  "end": 2247,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 2251,
                "end": 2262,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2251,
                  "end": 2260,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2251,
                    "end": 2256,
                    "object": {
                      "type": "Identifier",
                      "start": 2251,
                      "end": 2252,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2253,
                      "end": 2256,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2257,
                    "end": 2260,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2279,
            "end": 2309,
            "expression": {
              "type": "LogicalExpression",
              "start": 2279,
              "end": 2308,
              "left": {
                "type": "LogicalExpression",
                "start": 2279,
                "end": 2293,
                "left": {
                  "type": "MemberExpression",
                  "start": 2279,
                  "end": 2288,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2279,
                    "end": 2284,
                    "object": {
                      "type": "Identifier",
                      "start": 2279,
                      "end": 2280,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2281,
                      "end": 2284,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2285,
                    "end": 2288,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "&&",
                "right": {
                  "type": "Literal",
                  "start": 2292,
                  "end": 2293,
                  "value": 1,
                  "raw": "1"
                }
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 2297,
                "end": 2308,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2297,
                  "end": 2306,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2297,
                    "end": 2302,
                    "object": {
                      "type": "Identifier",
                      "start": 2297,
                      "end": 2298,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2299,
                      "end": 2302,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2303,
                    "end": 2306,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 2325,
            "end": 2392,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2331,
                "end": 2391,
                "id": {
                  "type": "Identifier",
                  "start": 2331,
                  "end": 2332,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2335,
                  "end": 2391,
                  "test": {
                    "type": "LogicalExpression",
                    "start": 2335,
                    "end": 2376,
                    "left": {
                      "type": "MemberExpression",
                      "start": 2335,
                      "end": 2341,
                      "object": {
                        "type": "Identifier",
                        "start": 2335,
                        "end": 2336,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2337,
                        "end": 2341,
                        "decorators": [],
                        "name": "from",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "start": 2345,
                      "end": 2376,
                      "left": {
                        "type": "TSAsExpression",
                        "start": 2346,
                        "end": 2364,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 2346,
                          "end": 2352,
                          "object": {
                            "type": "Identifier",
                            "start": 2346,
                            "end": 2347,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2348,
                            "end": 2352,
                            "decorators": [],
                            "name": "from",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2356,
                          "end": 2364,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2356,
                            "end": 2364,
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "operator": "!==",
                      "right": {
                        "type": "MemberExpression",
                        "start": 2370,
                        "end": 2376,
                        "object": {
                          "type": "Identifier",
                          "start": 2370,
                          "end": 2371,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2372,
                          "end": 2376,
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 2379,
                    "end": 2383,
                    "value": true,
                    "raw": "true"
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 2386,
                    "end": 2391,
                    "value": false,
                    "raw": "false"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2397,
            "end": 2399,
            "expression": {
              "type": "Identifier",
              "start": 2397,
              "end": 2398,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 2405,
            "end": 2457,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2411,
                "end": 2457,
                "id": {
                  "type": "Identifier",
                  "start": 2411,
                  "end": 2413,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 2416,
                  "end": 2457,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2426,
                      "end": 2451,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2426,
                        "end": 2427,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 2429,
                        "end": 2451,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2431,
                            "end": 2449,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2431,
                              "end": 2432,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 2434,
                              "end": 2449,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 2436,
                                  "end": 2447,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 2436,
                                    "end": 2437,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "ArrowFunctionExpression",
                                    "start": 2439,
                                    "end": 2447,
                                    "expression": false,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 2445,
                                      "end": 2447,
                                      "body": []
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
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
            "type": "VariableDeclaration",
            "start": 2462,
            "end": 2514,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2468,
                "end": 2514,
                "id": {
                  "type": "Identifier",
                  "start": 2468,
                  "end": 2470,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 2473,
                  "end": 2514,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2483,
                      "end": 2508,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2483,
                        "end": 2484,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 2486,
                        "end": 2508,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2488,
                            "end": 2506,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2488,
                              "end": 2489,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 2491,
                              "end": 2506,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 2493,
                                  "end": 2504,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 2493,
                                    "end": 2494,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "ArrowFunctionExpression",
                                    "start": 2496,
                                    "end": 2504,
                                    "expression": false,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 2502,
                                      "end": 2504,
                                      "body": []
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
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
            "type": "ExpressionStatement",
            "start": 2533,
            "end": 2556,
            "expression": {
              "type": "LogicalExpression",
              "start": 2533,
              "end": 2555,
              "left": {
                "type": "MemberExpression",
                "start": 2533,
                "end": 2541,
                "object": {
                  "type": "MemberExpression",
                  "start": 2533,
                  "end": 2539,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2533,
                    "end": 2537,
                    "object": {
                      "type": "Identifier",
                      "start": 2533,
                      "end": 2535,
                      "decorators": [],
                      "name": "x1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2536,
                      "end": 2537,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2538,
                    "end": 2539,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2540,
                  "end": 2541,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 2545,
                "end": 2555,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2545,
                  "end": 2553,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2545,
                    "end": 2551,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2545,
                      "end": 2549,
                      "object": {
                        "type": "Identifier",
                        "start": 2545,
                        "end": 2547,
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2548,
                        "end": 2549,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2550,
                      "end": 2551,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2552,
                    "end": 2553,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 2609,
            "end": 2632,
            "test": {
              "type": "MemberExpression",
              "start": 2614,
              "end": 2622,
              "object": {
                "type": "MemberExpression",
                "start": 2614,
                "end": 2620,
                "object": {
                  "type": "MemberExpression",
                  "start": 2614,
                  "end": 2618,
                  "object": {
                    "type": "Identifier",
                    "start": 2614,
                    "end": 2616,
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2617,
                    "end": 2618,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2619,
                  "end": 2620,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 2621,
                "end": 2622,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2625,
              "end": 2632,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2651,
            "end": 2691,
            "test": {
              "type": "LogicalExpression",
              "start": 2655,
              "end": 2682,
              "left": {
                "type": "Literal",
                "start": 2655,
                "end": 2656,
                "value": 1,
                "raw": "1"
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "start": 2661,
                "end": 2681,
                "left": {
                  "type": "MemberExpression",
                  "start": 2661,
                  "end": 2669,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2661,
                    "end": 2667,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2661,
                      "end": 2665,
                      "object": {
                        "type": "Identifier",
                        "start": 2661,
                        "end": 2663,
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2664,
                        "end": 2665,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2666,
                      "end": 2667,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2668,
                    "end": 2669,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "start": 2673,
                  "end": 2681,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2673,
                    "end": 2679,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2673,
                      "end": 2677,
                      "object": {
                        "type": "Identifier",
                        "start": 2673,
                        "end": 2675,
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2676,
                        "end": 2677,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2678,
                      "end": 2679,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2680,
                    "end": 2681,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2684,
              "end": 2691,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2710,
            "end": 2750,
            "test": {
              "type": "LogicalExpression",
              "start": 2714,
              "end": 2741,
              "left": {
                "type": "LogicalExpression",
                "start": 2715,
                "end": 2735,
                "left": {
                  "type": "MemberExpression",
                  "start": 2715,
                  "end": 2723,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2715,
                    "end": 2721,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2715,
                      "end": 2719,
                      "object": {
                        "type": "Identifier",
                        "start": 2715,
                        "end": 2717,
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2718,
                        "end": 2719,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2720,
                      "end": 2721,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2722,
                    "end": 2723,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "start": 2727,
                  "end": 2735,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2727,
                    "end": 2733,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2727,
                      "end": 2731,
                      "object": {
                        "type": "Identifier",
                        "start": 2727,
                        "end": 2729,
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2730,
                        "end": 2731,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2732,
                      "end": 2733,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2734,
                    "end": 2735,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "operator": "&&",
              "right": {
                "type": "Literal",
                "start": 2740,
                "end": 2741,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2743,
              "end": 2750,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2769,
            "end": 2809,
            "test": {
              "type": "LogicalExpression",
              "start": 2773,
              "end": 2800,
              "left": {
                "type": "Literal",
                "start": 2773,
                "end": 2774,
                "value": 1,
                "raw": "1"
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "start": 2779,
                "end": 2799,
                "left": {
                  "type": "MemberExpression",
                  "start": 2779,
                  "end": 2787,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2779,
                    "end": 2785,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2779,
                      "end": 2783,
                      "object": {
                        "type": "Identifier",
                        "start": 2779,
                        "end": 2781,
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2782,
                        "end": 2783,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2784,
                      "end": 2785,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2786,
                    "end": 2787,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "start": 2791,
                  "end": 2799,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2791,
                    "end": 2797,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2791,
                      "end": 2795,
                      "object": {
                        "type": "Identifier",
                        "start": 2791,
                        "end": 2793,
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2794,
                        "end": 2795,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2796,
                      "end": 2797,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2798,
                    "end": 2799,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2802,
              "end": 2809,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2828,
            "end": 2868,
            "test": {
              "type": "LogicalExpression",
              "start": 2832,
              "end": 2859,
              "left": {
                "type": "LogicalExpression",
                "start": 2833,
                "end": 2853,
                "left": {
                  "type": "MemberExpression",
                  "start": 2833,
                  "end": 2841,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2833,
                    "end": 2839,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2833,
                      "end": 2837,
                      "object": {
                        "type": "Identifier",
                        "start": 2833,
                        "end": 2835,
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2836,
                        "end": 2837,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2838,
                      "end": 2839,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2840,
                    "end": 2841,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "start": 2845,
                  "end": 2853,
                  "object": {
                    "type": "MemberExpression",
                    "start": 2845,
                    "end": 2851,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2845,
                      "end": 2849,
                      "object": {
                        "type": "Identifier",
                        "start": 2845,
                        "end": 2847,
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2848,
                        "end": 2849,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2850,
                      "end": 2851,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2852,
                    "end": 2853,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "operator": "&&",
              "right": {
                "type": "Literal",
                "start": 2858,
                "end": 2859,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2861,
              "end": 2868,
              "body": []
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2872,
      "end": 3307,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2878,
        "end": 2881,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2882,
        "end": 3307,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2888,
            "end": 2913,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2888,
              "end": 2896,
              "decorators": [],
              "name": "optional",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2897,
              "end": 2912,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2899,
                "end": 2912,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2902,
                  "end": 2912,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2905,
                    "end": 2912
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2918,
            "end": 2957,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2918,
              "end": 2926,
              "decorators": [],
              "name": "required",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2926,
              "end": 2957,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2929,
                "end": 2957,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2939,
                    "end": 2951,
                    "argument": {
                      "type": "Literal",
                      "start": 2946,
                      "end": 2950,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2962,
            "end": 3305,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2962,
              "end": 2966,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2966,
              "end": 3305,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2969,
                "end": 3305,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2996,
                    "end": 3037,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 2996,
                      "end": 3036,
                      "left": {
                        "type": "MemberExpression",
                        "start": 2996,
                        "end": 3009,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2996,
                          "end": 3000
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3001,
                          "end": 3009,
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 3013,
                        "end": 3036,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3013,
                          "end": 3024,
                          "object": {
                            "type": "Identifier",
                            "start": 3013,
                            "end": 3020,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3021,
                            "end": 3024,
                            "decorators": [],
                            "name": "log",
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
                            "start": 3025,
                            "end": 3035,
                            "value": "required",
                            "raw": "'required'"
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3064,
                    "end": 3110,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 3064,
                      "end": 3109,
                      "left": {
                        "type": "LogicalExpression",
                        "start": 3064,
                        "end": 3082,
                        "left": {
                          "type": "Literal",
                          "start": 3064,
                          "end": 3065,
                          "value": 1,
                          "raw": "1"
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 3069,
                          "end": 3082,
                          "object": {
                            "type": "ThisExpression",
                            "start": 3069,
                            "end": 3073
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3074,
                            "end": 3082,
                            "decorators": [],
                            "name": "required",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 3086,
                        "end": 3109,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3086,
                          "end": 3097,
                          "object": {
                            "type": "Identifier",
                            "start": 3086,
                            "end": 3093,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3094,
                            "end": 3097,
                            "decorators": [],
                            "name": "log",
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
                            "start": 3098,
                            "end": 3108,
                            "value": "required",
                            "raw": "'required'"
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3134,
                    "end": 3167,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 3134,
                      "end": 3166,
                      "left": {
                        "type": "MemberExpression",
                        "start": 3134,
                        "end": 3147,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3134,
                          "end": 3138
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3139,
                          "end": 3147,
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 3151,
                        "end": 3166,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3151,
                          "end": 3164,
                          "object": {
                            "type": "ThisExpression",
                            "start": 3151,
                            "end": 3155
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3156,
                            "end": 3164,
                            "decorators": [],
                            "name": "required",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3191,
                    "end": 3229,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 3191,
                      "end": 3228,
                      "left": {
                        "type": "LogicalExpression",
                        "start": 3191,
                        "end": 3209,
                        "left": {
                          "type": "MemberExpression",
                          "start": 3191,
                          "end": 3204,
                          "object": {
                            "type": "ThisExpression",
                            "start": 3191,
                            "end": 3195
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3196,
                            "end": 3204,
                            "decorators": [],
                            "name": "required",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "&&",
                        "right": {
                          "type": "Literal",
                          "start": 3208,
                          "end": 3209,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 3213,
                        "end": 3228,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3213,
                          "end": 3226,
                          "object": {
                            "type": "ThisExpression",
                            "start": 3213,
                            "end": 3217
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3218,
                            "end": 3226,
                            "decorators": [],
                            "name": "required",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3253,
                    "end": 3299,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 3253,
                      "end": 3298,
                      "left": {
                        "type": "LogicalExpression",
                        "start": 3253,
                        "end": 3271,
                        "left": {
                          "type": "Literal",
                          "start": 3253,
                          "end": 3254,
                          "value": 1,
                          "raw": "1"
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 3258,
                          "end": 3271,
                          "object": {
                            "type": "ThisExpression",
                            "start": 3258,
                            "end": 3262
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3263,
                            "end": 3271,
                            "decorators": [],
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 3275,
                        "end": 3298,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3275,
                          "end": 3286,
                          "object": {
                            "type": "Identifier",
                            "start": 3275,
                            "end": 3282,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3283,
                            "end": 3286,
                            "decorators": [],
                            "name": "log",
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
                            "start": 3287,
                            "end": 3297,
                            "value": "optional",
                            "raw": "'optional'"
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
