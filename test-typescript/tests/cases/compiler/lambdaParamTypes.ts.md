lambdaParamTypes.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1130,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 126,
      "body": {
        "type": "TSInterfaceBody",
        "start": 28,
        "end": 126,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 34,
            "end": 66,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 46,
                "end": 64,
                "decorators": [],
                "name": "initialItems",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 59,
                  "end": 64,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 61,
                    "end": 64,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 61,
                      "end": 62,
                      "typeName": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 71,
            "end": 124,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 82,
              "decorators": [],
              "name": "doSomething",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 83,
                "end": 116,
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 92,
                  "end": 116,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 94,
                    "end": 116,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 95,
                        "end": 99,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 96,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 98,
                            "end": 99,
                            "typeName": {
                              "type": "Identifier",
                              "start": 98,
                              "end": 99,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 101,
                        "end": 105,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 102,
                          "end": 105,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 104,
                            "end": 105,
                            "typeName": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 105,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 107,
                      "end": 116,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 110,
                        "end": 116
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 123,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 119,
                "end": 123
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "decorators": [],
        "name": "MyArrayWrapper",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 24,
        "end": 27,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 26,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 128,
      "end": 195,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 151,
        "decorators": [],
        "name": "create",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 155,
          "end": 174,
          "decorators": [],
          "name": "initialValues",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 174,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 171,
              "end": 174,
              "elementType": {
                "type": "TSTypeReference",
                "start": 171,
                "end": 172,
                "typeName": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 194,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 177,
          "end": 194,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 191,
            "end": 194,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 192,
                "end": 193,
                "typeName": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 177,
            "end": 191,
            "decorators": [],
            "name": "MyArrayWrapper",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 154,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 268,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 206,
            "decorators": [],
            "name": "thing",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 209,
            "end": 268,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 216,
                "end": 267,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 217,
                    "end": 240,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 219,
                        "end": 230,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 223,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 225,
                          "end": 230,
                          "raw": "\"bob\"",
                          "value": "bob"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 232,
                        "end": 238,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 234,
                          "decorators": [],
                          "name": "id",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 236,
                          "end": 238,
                          "raw": "24",
                          "value": 24
                        }
                      }
                    ]
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 242,
                    "end": 266,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 244,
                        "end": 256,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 248,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 250,
                          "end": 256,
                          "raw": "\"doug\"",
                          "value": "doug"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 258,
                        "end": 264,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 258,
                          "end": 260,
                          "decorators": [],
                          "name": "id",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 262,
                          "end": 264,
                          "raw": "32",
                          "value": 32
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 209,
              "end": 215,
              "decorators": [],
              "name": "create",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 297,
      "end": 343,
      "expression": {
        "type": "CallExpression",
        "start": 297,
        "end": 342,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 315,
            "end": 341,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 325,
              "end": 341,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 339,
                  "end": 340,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 325,
                "end": 338,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 325,
                  "end": 331,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 326,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 331,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 338,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 316,
                "end": 317,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 319,
                "end": 320,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 297,
          "end": 314,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 297,
            "end": 302,
            "decorators": [],
            "name": "thing",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 303,
            "end": 314,
            "decorators": [],
            "name": "doSomething",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 393,
      "end": 444,
      "expression": {
        "type": "CallExpression",
        "start": 393,
        "end": 443,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 411,
            "end": 442,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 421,
              "end": 442,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 440,
                  "end": 441,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 421,
                "end": 439,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 421,
                  "end": 425,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 422,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 425,
                    "decorators": [],
                    "name": "id",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 439,
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 412,
                "end": 413,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 415,
                "end": 416,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 393,
          "end": 410,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 393,
            "end": 398,
            "decorators": [],
            "name": "thing",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 399,
            "end": 410,
            "decorators": [],
            "name": "doSomething",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 487,
      "end": 533,
      "expression": {
        "type": "CallExpression",
        "start": 487,
        "end": 532,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 505,
            "end": 531,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 515,
              "end": 531,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 529,
                  "end": 530,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 515,
                "end": 528,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 515,
                  "end": 521,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 515,
                    "end": 516,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 517,
                    "end": 521,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 528,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 506,
                "end": 507,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 509,
                "end": 510,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 487,
          "end": 504,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 487,
            "end": 492,
            "decorators": [],
            "name": "thing",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 493,
            "end": 504,
            "decorators": [],
            "name": "doSomething",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 583,
      "end": 634,
      "expression": {
        "type": "CallExpression",
        "start": 583,
        "end": 633,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 601,
            "end": 632,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 611,
              "end": 632,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 630,
                  "end": 631,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 611,
                "end": 629,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 611,
                  "end": 615,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 611,
                    "end": 612,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 613,
                    "end": 615,
                    "decorators": [],
                    "name": "id",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 629,
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 602,
                "end": 603,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 605,
                "end": 606,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 583,
          "end": 600,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 583,
            "end": 588,
            "decorators": [],
            "name": "thing",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 589,
            "end": 600,
            "decorators": [],
            "name": "doSomething",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 710,
      "end": 745,
      "expression": {
        "type": "CallExpression",
        "start": 710,
        "end": 744,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 728,
            "end": 743,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 738,
              "end": 743,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 738,
                "end": 739,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 740,
                "end": 743,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 729,
                "end": 730,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 732,
                "end": 733,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 710,
          "end": 727,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 710,
            "end": 715,
            "decorators": [],
            "name": "thing",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 716,
            "end": 727,
            "decorators": [],
            "name": "doSomething",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 771,
      "end": 806,
      "expression": {
        "type": "CallExpression",
        "start": 771,
        "end": 805,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 789,
            "end": 804,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 799,
              "end": 804,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 799,
                "end": 800,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 801,
                "end": 804,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 790,
                "end": 791,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 793,
                "end": 794,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 771,
          "end": 788,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 771,
            "end": 776,
            "decorators": [],
            "name": "thing",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 777,
            "end": 788,
            "decorators": [],
            "name": "doSomething",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 832,
      "end": 876,
      "expression": {
        "type": "CallExpression",
        "start": 832,
        "end": 875,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 850,
            "end": 874,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 860,
              "end": 874,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 872,
                  "end": 873,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 860,
                "end": 871,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 860,
                  "end": 864,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 860,
                    "end": 861,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 862,
                    "end": 864,
                    "decorators": [],
                    "name": "id",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 871,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 851,
                "end": 852,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 854,
                "end": 855,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 832,
          "end": 849,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 832,
            "end": 837,
            "decorators": [],
            "name": "thing",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 838,
            "end": 849,
            "decorators": [],
            "name": "doSomething",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 925,
      "end": 978,
      "expression": {
        "type": "CallExpression",
        "start": 925,
        "end": 977,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 943,
            "end": 976,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 953,
              "end": 976,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 974,
                  "end": 975,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 953,
                "end": 973,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 953,
                  "end": 959,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 953,
                    "end": 954,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 955,
                    "end": 959,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 960,
                  "end": 973,
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 944,
                "end": 945,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 947,
                "end": 948,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 925,
          "end": 942,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 925,
            "end": 930,
            "decorators": [],
            "name": "thing",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 931,
            "end": 942,
            "decorators": [],
            "name": "doSomething",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1031,
      "end": 1075,
      "expression": {
        "type": "CallExpression",
        "start": 1031,
        "end": 1074,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1049,
            "end": 1073,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 1059,
              "end": 1073,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1071,
                  "end": 1072,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1059,
                "end": 1070,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1059,
                  "end": 1063,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1059,
                    "end": 1060,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1063,
                    "decorators": [],
                    "name": "id",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1064,
                  "end": 1070,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1050,
                "end": 1051,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1053,
                "end": 1054,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1031,
          "end": 1048,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1031,
            "end": 1036,
            "decorators": [],
            "name": "thing",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1037,
            "end": 1048,
            "decorators": [],
            "name": "doSomething",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1076,
      "end": 1129,
      "expression": {
        "type": "CallExpression",
        "start": 1076,
        "end": 1128,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1094,
            "end": 1127,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 1104,
              "end": 1127,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1125,
                  "end": 1126,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1104,
                "end": 1124,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1104,
                  "end": 1110,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1104,
                    "end": 1105,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1106,
                    "end": 1110,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1111,
                  "end": 1124,
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1095,
                "end": 1096,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1098,
                "end": 1099,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1076,
          "end": 1093,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1076,
            "end": 1081,
            "decorators": [],
            "name": "thing",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1082,
            "end": 1093,
            "decorators": [],
            "name": "doSomething",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
