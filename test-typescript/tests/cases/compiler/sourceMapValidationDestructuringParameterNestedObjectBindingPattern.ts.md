__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 862,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 52,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 52,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 50,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 42,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 163,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 163,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 88,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 93,
            "end": 161,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 99,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 101,
                "end": 160,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 111,
                    "end": 127,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 118,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 118,
                      "end": 126,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 120,
                        "end": 126
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 136,
                    "end": 154,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 145,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 68,
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 181,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 181,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 181,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 184,
            "end": 251,
            "properties": [
              {
                "type": "Property",
                "start": 186,
                "end": 199,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 190,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 192,
                  "end": 199,
                  "raw": "\"mower\"",
                  "value": "mower"
                }
              },
              {
                "type": "Property",
                "start": 201,
                "end": 249,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 207,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 209,
                  "end": 249,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 211,
                      "end": 228,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 218,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 220,
                        "end": 228,
                        "raw": "\"mowing\"",
                        "value": "mowing"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 230,
                      "end": 247,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 239,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 241,
                        "end": 247,
                        "raw": "\"none\"",
                        "value": "none"
                      }
                    }
                  ]
                }
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
      "start": 254,
      "end": 363,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 333,
        "end": 363,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 339,
            "end": 361,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 339,
              "end": 360,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 351,
                  "end": 359,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 339,
                "end": 350,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 346,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 350,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 267,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 268,
          "end": 331,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 270,
              "end": 322,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 270,
                "end": 276,
                "decorators": [],
                "name": "skills",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectPattern",
                "start": 278,
                "end": 322,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 280,
                    "end": 297,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 287,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 297,
                      "decorators": [],
                      "name": "primaryA",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 299,
                    "end": 320,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 308,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 320,
                      "decorators": [],
                      "name": "secondaryA",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 324,
            "end": 331,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 326,
              "end": 331,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 326,
                "end": 331,
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 364,
      "end": 488,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 456,
        "end": 488,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 462,
            "end": 486,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 462,
              "end": 485,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 474,
                  "end": 484,
                  "decorators": [],
                  "name": "secondaryB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 462,
                "end": 473,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 469,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 473,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 377,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 378,
          "end": 454,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 380,
              "end": 391,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 380,
                "end": 384,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 386,
                "end": 391,
                "decorators": [],
                "name": "nameC",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 393,
              "end": 445,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 393,
                "end": 399,
                "decorators": [],
                "name": "skills",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectPattern",
                "start": 401,
                "end": 445,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 403,
                    "end": 420,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 410,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 420,
                      "decorators": [],
                      "name": "primaryB",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 422,
                    "end": 443,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 422,
                      "end": 431,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 443,
                      "decorators": [],
                      "name": "secondaryB",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 447,
            "end": 454,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 449,
              "end": 454,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 449,
                "end": 454,
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 489,
      "end": 558,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 522,
        "end": 558,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 528,
            "end": 556,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 528,
              "end": 555,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 540,
                  "end": 554,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 540,
                    "end": 546,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 554,
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 528,
                "end": 539,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 535,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 536,
                  "end": 539,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 498,
        "end": 502,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 503,
          "end": 520,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 505,
              "end": 511,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 505,
                "end": 511,
                "decorators": [],
                "name": "skills",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 505,
                "end": 511,
                "decorators": [],
                "name": "skills",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 513,
            "end": 520,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 515,
              "end": 520,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 515,
                "end": 520,
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 560,
      "end": 573,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 560,
        "end": 572,
        "arguments": [
          {
            "type": "Identifier",
            "start": 565,
            "end": 571,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 560,
          "end": 564,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 574,
      "end": 659,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 574,
        "end": 658,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 579,
            "end": 657,
            "properties": [
              {
                "type": "Property",
                "start": 581,
                "end": 594,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 585,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 587,
                  "end": 594,
                  "raw": "\"Edger\"",
                  "value": "Edger"
                }
              },
              {
                "type": "Property",
                "start": 596,
                "end": 655,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 602,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 604,
                  "end": 655,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 606,
                      "end": 623,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 606,
                        "end": 613,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 615,
                        "end": 623,
                        "raw": "\"edging\"",
                        "value": "edging"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 625,
                      "end": 653,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 625,
                        "end": 634,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 636,
                        "end": 653,
                        "raw": "\"branch trimming\"",
                        "value": "branch trimming"
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 574,
          "end": 578,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 661,
      "end": 674,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 661,
        "end": 673,
        "arguments": [
          {
            "type": "Identifier",
            "start": 666,
            "end": 672,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 661,
          "end": 665,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 675,
      "end": 760,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 675,
        "end": 759,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 680,
            "end": 758,
            "properties": [
              {
                "type": "Property",
                "start": 682,
                "end": 695,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 686,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 688,
                  "end": 695,
                  "raw": "\"Edger\"",
                  "value": "Edger"
                }
              },
              {
                "type": "Property",
                "start": 697,
                "end": 756,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 697,
                  "end": 703,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 705,
                  "end": 756,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 707,
                      "end": 724,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 707,
                        "end": 714,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 716,
                        "end": 724,
                        "raw": "\"edging\"",
                        "value": "edging"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 726,
                      "end": 754,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 726,
                        "end": 735,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 737,
                        "end": 754,
                        "raw": "\"branch trimming\"",
                        "value": "branch trimming"
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 675,
          "end": 679,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 762,
      "end": 775,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 762,
        "end": 774,
        "arguments": [
          {
            "type": "Identifier",
            "start": 767,
            "end": 773,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 762,
          "end": 766,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 776,
      "end": 861,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 776,
        "end": 860,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 781,
            "end": 859,
            "properties": [
              {
                "type": "Property",
                "start": 783,
                "end": 796,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 783,
                  "end": 787,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 789,
                  "end": 796,
                  "raw": "\"Edger\"",
                  "value": "Edger"
                }
              },
              {
                "type": "Property",
                "start": 798,
                "end": 857,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 804,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 806,
                  "end": 857,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 808,
                      "end": 825,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 808,
                        "end": 815,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 817,
                        "end": 825,
                        "raw": "\"edging\"",
                        "value": "edging"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 827,
                      "end": 855,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 836,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 838,
                        "end": 855,
                        "raw": "\"branch trimming\"",
                        "value": "branch trimming"
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 776,
          "end": 780,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
