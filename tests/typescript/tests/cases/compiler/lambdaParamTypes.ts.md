__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1129,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "decorators": [],
        "name": "MyArrayWrapper",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 28,
        "end": 126,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 34,
            "end": 66,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 71,
            "end": 124,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 82,
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                    "typeParameters": null,
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
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
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
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 128,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 151,
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 154,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          "typeName": {
            "type": "Identifier",
            "start": 177,
            "end": 191,
            "decorators": [],
            "name": "MyArrayWrapper",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 269,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 268,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 206,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 209,
            "end": 268,
            "callee": {
              "type": "Identifier",
              "start": 209,
              "end": 215,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 223,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 225,
                          "end": 230,
                          "value": "bob",
                          "raw": "\"bob\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 232,
                        "end": 238,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 234,
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 236,
                          "end": 238,
                          "value": 24,
                          "raw": "24"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 248,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 250,
                          "end": 256,
                          "value": "doug",
                          "raw": "\"doug\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 258,
                        "end": 264,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 258,
                          "end": 260,
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 262,
                          "end": 264,
                          "value": 32,
                          "raw": "32"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 297,
      "end": 343,
      "expression": {
        "type": "CallExpression",
        "start": 297,
        "end": 342,
        "callee": {
          "type": "MemberExpression",
          "start": 297,
          "end": 314,
          "object": {
            "type": "Identifier",
            "start": 297,
            "end": 302,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 303,
            "end": 314,
            "decorators": [],
            "name": "doSomething",
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
            "start": 315,
            "end": 341,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 316,
                "end": 317,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 319,
                "end": 320,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 325,
              "end": 341,
              "callee": {
                "type": "MemberExpression",
                "start": 325,
                "end": 338,
                "object": {
                  "type": "MemberExpression",
                  "start": 325,
                  "end": 331,
                  "object": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 326,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 331,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 338,
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
                  "start": 339,
                  "end": 340,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
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
      "start": 393,
      "end": 444,
      "expression": {
        "type": "CallExpression",
        "start": 393,
        "end": 443,
        "callee": {
          "type": "MemberExpression",
          "start": 393,
          "end": 410,
          "object": {
            "type": "Identifier",
            "start": 393,
            "end": 398,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 399,
            "end": 410,
            "decorators": [],
            "name": "doSomething",
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
            "start": 411,
            "end": 442,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 412,
                "end": 413,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 415,
                "end": 416,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 421,
              "end": 442,
              "callee": {
                "type": "MemberExpression",
                "start": 421,
                "end": 439,
                "object": {
                  "type": "MemberExpression",
                  "start": 421,
                  "end": 425,
                  "object": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 422,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 425,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 439,
                  "decorators": [],
                  "name": "toExponential",
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
                  "start": 440,
                  "end": 441,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
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
      "start": 487,
      "end": 533,
      "expression": {
        "type": "CallExpression",
        "start": 487,
        "end": 532,
        "callee": {
          "type": "MemberExpression",
          "start": 487,
          "end": 504,
          "object": {
            "type": "Identifier",
            "start": 487,
            "end": 492,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 493,
            "end": 504,
            "decorators": [],
            "name": "doSomething",
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
            "start": 505,
            "end": 531,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 506,
                "end": 507,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 509,
                "end": 510,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 515,
              "end": 531,
              "callee": {
                "type": "MemberExpression",
                "start": 515,
                "end": 528,
                "object": {
                  "type": "MemberExpression",
                  "start": 515,
                  "end": 521,
                  "object": {
                    "type": "Identifier",
                    "start": 515,
                    "end": 516,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 517,
                    "end": 521,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 528,
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
                  "start": 529,
                  "end": 530,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
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
      "start": 583,
      "end": 634,
      "expression": {
        "type": "CallExpression",
        "start": 583,
        "end": 633,
        "callee": {
          "type": "MemberExpression",
          "start": 583,
          "end": 600,
          "object": {
            "type": "Identifier",
            "start": 583,
            "end": 588,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 589,
            "end": 600,
            "decorators": [],
            "name": "doSomething",
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
            "start": 601,
            "end": 632,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 602,
                "end": 603,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 605,
                "end": 606,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 611,
              "end": 632,
              "callee": {
                "type": "MemberExpression",
                "start": 611,
                "end": 629,
                "object": {
                  "type": "MemberExpression",
                  "start": 611,
                  "end": 615,
                  "object": {
                    "type": "Identifier",
                    "start": 611,
                    "end": 612,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 613,
                    "end": 615,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 629,
                  "decorators": [],
                  "name": "toExponential",
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
                  "start": 630,
                  "end": 631,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
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
      "start": 710,
      "end": 745,
      "expression": {
        "type": "CallExpression",
        "start": 710,
        "end": 744,
        "callee": {
          "type": "MemberExpression",
          "start": 710,
          "end": 727,
          "object": {
            "type": "Identifier",
            "start": 710,
            "end": 715,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 716,
            "end": 727,
            "decorators": [],
            "name": "doSomething",
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
            "end": 743,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 729,
                "end": 730,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 732,
                "end": 733,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "start": 738,
              "end": 743,
              "object": {
                "type": "Identifier",
                "start": 738,
                "end": 739,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 740,
                "end": 743,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "start": 771,
      "end": 806,
      "expression": {
        "type": "CallExpression",
        "start": 771,
        "end": 805,
        "callee": {
          "type": "MemberExpression",
          "start": 771,
          "end": 788,
          "object": {
            "type": "Identifier",
            "start": 771,
            "end": 776,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 777,
            "end": 788,
            "decorators": [],
            "name": "doSomething",
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
            "start": 789,
            "end": 804,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 790,
                "end": 791,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 793,
                "end": 794,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "start": 799,
              "end": 804,
              "object": {
                "type": "Identifier",
                "start": 799,
                "end": 800,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 801,
                "end": 804,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "start": 832,
      "end": 876,
      "expression": {
        "type": "CallExpression",
        "start": 832,
        "end": 875,
        "callee": {
          "type": "MemberExpression",
          "start": 832,
          "end": 849,
          "object": {
            "type": "Identifier",
            "start": 832,
            "end": 837,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 838,
            "end": 849,
            "decorators": [],
            "name": "doSomething",
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
            "start": 850,
            "end": 874,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 851,
                "end": 852,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 854,
                "end": 855,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 860,
              "end": 874,
              "callee": {
                "type": "MemberExpression",
                "start": 860,
                "end": 871,
                "object": {
                  "type": "MemberExpression",
                  "start": 860,
                  "end": 864,
                  "object": {
                    "type": "Identifier",
                    "start": 860,
                    "end": 861,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 862,
                    "end": 864,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 871,
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
                  "start": 872,
                  "end": 873,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
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
      "start": 925,
      "end": 978,
      "expression": {
        "type": "CallExpression",
        "start": 925,
        "end": 977,
        "callee": {
          "type": "MemberExpression",
          "start": 925,
          "end": 942,
          "object": {
            "type": "Identifier",
            "start": 925,
            "end": 930,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 931,
            "end": 942,
            "decorators": [],
            "name": "doSomething",
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
            "start": 943,
            "end": 976,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 944,
                "end": 945,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 947,
                "end": 948,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 953,
              "end": 976,
              "callee": {
                "type": "MemberExpression",
                "start": 953,
                "end": 973,
                "object": {
                  "type": "MemberExpression",
                  "start": 953,
                  "end": 959,
                  "object": {
                    "type": "Identifier",
                    "start": 953,
                    "end": 954,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 955,
                    "end": 959,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 960,
                  "end": 973,
                  "decorators": [],
                  "name": "toExponential",
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
                  "start": 974,
                  "end": 975,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
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
      "start": 1031,
      "end": 1075,
      "expression": {
        "type": "CallExpression",
        "start": 1031,
        "end": 1074,
        "callee": {
          "type": "MemberExpression",
          "start": 1031,
          "end": 1048,
          "object": {
            "type": "Identifier",
            "start": 1031,
            "end": 1036,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1037,
            "end": 1048,
            "decorators": [],
            "name": "doSomething",
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
            "start": 1049,
            "end": 1073,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1050,
                "end": 1051,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1053,
                "end": 1054,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 1059,
              "end": 1073,
              "callee": {
                "type": "MemberExpression",
                "start": 1059,
                "end": 1070,
                "object": {
                  "type": "MemberExpression",
                  "start": 1059,
                  "end": 1063,
                  "object": {
                    "type": "Identifier",
                    "start": 1059,
                    "end": 1060,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1063,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1064,
                  "end": 1070,
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
                  "start": 1071,
                  "end": 1072,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
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
      "start": 1076,
      "end": 1129,
      "expression": {
        "type": "CallExpression",
        "start": 1076,
        "end": 1128,
        "callee": {
          "type": "MemberExpression",
          "start": 1076,
          "end": 1093,
          "object": {
            "type": "Identifier",
            "start": 1076,
            "end": 1081,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1082,
            "end": 1093,
            "decorators": [],
            "name": "doSomething",
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
            "start": 1094,
            "end": 1127,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1095,
                "end": 1096,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1098,
                "end": 1099,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 1104,
              "end": 1127,
              "callee": {
                "type": "MemberExpression",
                "start": 1104,
                "end": 1124,
                "object": {
                  "type": "MemberExpression",
                  "start": 1104,
                  "end": 1110,
                  "object": {
                    "type": "Identifier",
                    "start": 1104,
                    "end": 1105,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1106,
                    "end": 1110,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1111,
                  "end": 1124,
                  "decorators": [],
                  "name": "toExponential",
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
                  "start": 1125,
                  "end": 1126,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
