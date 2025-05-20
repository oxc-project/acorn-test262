__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 994,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 180,
      "body": {
        "type": "TSInterfaceBody",
        "start": 103,
        "end": 180,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 107,
            "end": 143,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 120,
              "decorators": [],
              "name": "val1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 142,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 122,
                "end": 142,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 122,
                    "end": 123,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 126,
                    "end": 142,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 139,
                      "end": 142,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 140,
                          "end": 141,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 141,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 139,
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 146,
            "end": 178,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 159,
              "decorators": [],
              "name": "val2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 161,
                "end": 177,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 174,
                  "end": 177,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 175,
                      "end": 176,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 176,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 174,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 75,
        "decorators": [],
        "name": "TestCase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 101,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 86,
              "end": 101,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 86,
                  "end": 92
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 95,
                  "end": 101
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 182,
      "end": 229,
      "body": {
        "type": "TSInterfaceBody",
        "start": 212,
        "end": 229,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 216,
            "end": 227,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 221,
              "decorators": [],
              "name": "cases",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 226,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 223,
                "end": 226,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 223,
                  "end": 224,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 224,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 208,
        "decorators": [],
        "name": "MultiCaseFixture",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 208,
        "end": 211,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 209,
            "end": 210,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 231,
      "end": 481,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 283,
        "end": 481,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 287,
            "end": 479,
            "argument": {
              "type": "ArrayExpression",
              "start": 294,
              "end": 478,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 302,
                  "end": 338,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 304,
                      "end": 313,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 308,
                        "decorators": [],
                        "name": "val1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 310,
                        "end": 313,
                        "raw": "\"a\"",
                        "value": "a"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 315,
                      "end": 336,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 319,
                        "decorators": [],
                        "name": "val2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 321,
                        "end": 336,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 322,
                            "end": 325,
                            "raw": "\"a\"",
                            "value": "a"
                          },
                          {
                            "type": "Literal",
                            "start": 327,
                            "end": 330,
                            "raw": "\"b\"",
                            "value": "b"
                          },
                          {
                            "type": "Literal",
                            "start": 332,
                            "end": 335,
                            "raw": "\"c\"",
                            "value": "c"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 346,
                  "end": 374,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 348,
                      "end": 355,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 348,
                        "end": 352,
                        "decorators": [],
                        "name": "val1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 354,
                        "end": 355,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    {
                      "type": "Property",
                      "start": 357,
                      "end": 372,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 361,
                        "decorators": [],
                        "name": "val2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 363,
                        "end": 372,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 364,
                            "end": 365,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "Literal",
                            "start": 367,
                            "end": 368,
                            "raw": "2",
                            "value": 2
                          },
                          {
                            "type": "Literal",
                            "start": 370,
                            "end": 371,
                            "raw": "3",
                            "value": 3
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 382,
                  "end": 425,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 384,
                      "end": 400,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 384,
                        "end": 388,
                        "decorators": [],
                        "name": "val1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 390,
                        "end": 400,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 391,
                            "end": 394,
                            "raw": "\"a\"",
                            "value": "a"
                          },
                          {
                            "type": "Literal",
                            "start": 396,
                            "end": 399,
                            "raw": "\"z\"",
                            "value": "z"
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 402,
                      "end": 423,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 402,
                        "end": 406,
                        "decorators": [],
                        "name": "val2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 408,
                        "end": 423,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 409,
                            "end": 412,
                            "raw": "\"x\"",
                            "value": "x"
                          },
                          {
                            "type": "Literal",
                            "start": 414,
                            "end": 417,
                            "raw": "\"y\"",
                            "value": "y"
                          },
                          {
                            "type": "Literal",
                            "start": 419,
                            "end": 422,
                            "raw": "\"z\"",
                            "value": "z"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 433,
                  "end": 473,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 435,
                      "end": 448,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 439,
                        "decorators": [],
                        "name": "val1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 441,
                        "end": 448,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 442,
                            "end": 443,
                            "raw": "5",
                            "value": 5
                          },
                          {
                            "type": "Literal",
                            "start": 445,
                            "end": 447,
                            "raw": "10",
                            "value": 10
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 450,
                      "end": 471,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 454,
                        "decorators": [],
                        "name": "val2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 456,
                        "end": 471,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 457,
                            "end": 459,
                            "raw": "10",
                            "value": 10
                          },
                          {
                            "type": "Literal",
                            "start": 461,
                            "end": 464,
                            "raw": "100",
                            "value": 100
                          },
                          {
                            "type": "Literal",
                            "start": 466,
                            "end": 470,
                            "raw": "1000",
                            "value": 1000
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 251,
        "decorators": [],
        "name": "subDataFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 253,
        "end": 282,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 255,
          "end": 282,
          "elementType": {
            "type": "TSTypeReference",
            "start": 255,
            "end": 280,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 263,
              "end": 280,
              "params": [
                {
                  "type": "TSUnionType",
                  "start": 264,
                  "end": 279,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 264,
                      "end": 270
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 273,
                      "end": 279
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 255,
              "end": 263,
              "decorators": [],
              "name": "TestCase",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 483,
      "end": 579,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 545,
        "end": 579,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 549,
            "end": 577,
            "argument": {
              "type": "ObjectExpression",
              "start": 556,
              "end": 576,
              "properties": [
                {
                  "type": "Property",
                  "start": 558,
                  "end": 574,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 558,
                    "end": 563,
                    "decorators": [],
                    "name": "cases",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "CallExpression",
                    "start": 565,
                    "end": 574,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 565,
                      "end": 572,
                      "decorators": [],
                      "name": "subFunc",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 492,
        "end": 500,
        "decorators": [],
        "name": "dataFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 504,
          "end": 522,
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 511,
            "end": 522,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 513,
              "end": 522,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 516,
                "end": 522,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 519,
                  "end": 522,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 519,
                    "end": 520,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 519,
                      "end": 520,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 523,
        "end": 544,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 525,
          "end": 544,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 541,
            "end": 544,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 542,
                "end": 543,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 543,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 525,
            "end": 541,
            "decorators": [],
            "name": "MultiCaseFixture",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 500,
        "end": 503,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 501,
            "end": 502,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 501,
              "end": 502,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 581,
      "end": 981,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 601,
        "end": 981,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 605,
            "end": 670,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 611,
                "end": 669,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 611,
                  "end": 618,
                  "decorators": [],
                  "name": "fixture",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 621,
                  "end": 669,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 657,
                      "end": 668,
                      "decorators": [],
                      "name": "subDataFunc",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 621,
                    "end": 629,
                    "decorators": [],
                    "name": "dataFunc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 629,
                    "end": 656,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 630,
                        "end": 655,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 638,
                          "end": 655,
                          "params": [
                            {
                              "type": "TSUnionType",
                              "start": 639,
                              "end": 654,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 639,
                                  "end": 645
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 648,
                                  "end": 654
                                }
                              ]
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 630,
                          "end": 638,
                          "decorators": [],
                          "name": "TestCase",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 673,
            "end": 979,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 673,
              "end": 978,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 695,
                  "end": 977,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 715,
                    "end": 977,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 723,
                        "end": 948,
                        "alternate": {
                          "type": "BlockStatement",
                          "start": 910,
                          "end": 948,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 922,
                              "end": 940,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 922,
                                "end": 939,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 934,
                                    "end": 938,
                                    "decorators": [],
                                    "name": "val1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 922,
                                  "end": 933,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 922,
                                    "end": 929,
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 930,
                                    "end": 933,
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
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 748,
                          "end": 904,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 815,
                              "end": 859,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 821,
                                  "end": 858,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 821,
                                    "end": 833,
                                    "decorators": [],
                                    "name": "reversedVal1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "start": 836,
                                    "end": 858,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 836,
                                      "end": 856,
                                      "computed": false,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 836,
                                        "end": 848,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 836,
                                          "end": 846,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 836,
                                            "end": 840,
                                            "decorators": [],
                                            "name": "val1",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 841,
                                            "end": 846,
                                            "decorators": [],
                                            "name": "slice",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 849,
                                        "end": 856,
                                        "decorators": [],
                                        "name": "reverse",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 870,
                              "end": 896,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 870,
                                "end": 895,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 882,
                                    "end": 894,
                                    "decorators": [],
                                    "name": "reversedVal1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 870,
                                  "end": 881,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 870,
                                    "end": 877,
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 878,
                                    "end": 881,
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
                        "test": {
                          "type": "CallExpression",
                          "start": 727,
                          "end": 746,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 741,
                              "end": 745,
                              "decorators": [],
                              "name": "val1",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 727,
                            "end": 740,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 727,
                              "end": 732,
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 733,
                              "end": 740,
                              "decorators": [],
                              "name": "isArray",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 955,
                        "end": 973,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 955,
                          "end": 972,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 967,
                              "end": 971,
                              "decorators": [],
                              "name": "val2",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 955,
                            "end": 966,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 955,
                              "end": 962,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 963,
                              "end": 966,
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
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 696,
                      "end": 710,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 698,
                          "end": 702,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 698,
                            "end": 702,
                            "decorators": [],
                            "name": "val1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 698,
                            "end": 702,
                            "decorators": [],
                            "name": "val1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 704,
                          "end": 708,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 704,
                            "end": 708,
                            "decorators": [],
                            "name": "val2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 704,
                            "end": 708,
                            "decorators": [],
                            "name": "val2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 673,
                "end": 694,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 673,
                  "end": 686,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 673,
                    "end": 680,
                    "decorators": [],
                    "name": "fixture",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 681,
                    "end": 686,
                    "decorators": [],
                    "name": "cases",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 694,
                  "decorators": [],
                  "name": "forEach",
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
        "start": 590,
        "end": 598,
        "decorators": [],
        "name": "testFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 983,
      "end": 994,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 983,
        "end": 993,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 983,
          "end": 991,
          "decorators": [],
          "name": "testFunc",
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
