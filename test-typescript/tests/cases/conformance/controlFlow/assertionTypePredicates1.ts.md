__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5454,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "name": "isString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 26,
          "end": 40,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 40,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 33,
              "end": 40
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 41,
        "end": 58,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 43,
          "end": 58,
          "parameterName": {
            "type": "Identifier",
            "start": 43,
            "end": 48,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 58,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 52,
              "end": 58
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 60,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 93,
        "name": "isArrayOfStrings",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 94,
          "end": 108,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 99,
            "end": 108,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 101,
              "end": 108
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 109,
        "end": 128,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 111,
          "end": 128,
          "parameterName": {
            "type": "Identifier",
            "start": 111,
            "end": 116,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 120,
            "end": 128,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 120,
              "end": 128,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
              }
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 178,
            "name": "assert",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 178,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 145,
                "end": 178,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 146,
                    "end": 160,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 151,
                      "end": 160,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 153,
                        "end": 160
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 162,
                  "end": 178,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 165,
                    "end": 178,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 178,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": true,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 181,
            "end": 192,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 181,
                "end": 186,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 190,
              "end": 192,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 194,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 225,
        "name": "assertIsString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 226,
          "end": 240,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 240,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 233,
              "end": 240
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 241,
        "end": 266,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 243,
          "end": 266,
          "parameterName": {
            "type": "Identifier",
            "start": 251,
            "end": 256,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 260,
            "end": 266,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 260,
              "end": 266
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 268,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 307,
        "name": "assertIsArrayOfStrings",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 308,
          "end": 322,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 313,
            "end": 322,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 315,
              "end": 322
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 323,
        "end": 350,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 325,
          "end": 350,
          "parameterName": {
            "type": "Identifier",
            "start": 333,
            "end": 338,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 342,
            "end": 350,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 342,
              "end": 350,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              }
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 352,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 382,
        "name": "assertDefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 386,
          "end": 394,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 391,
            "end": 394,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 393,
              "end": 394,
              "typeName": {
                "type": "Identifier",
                "start": 393,
                "end": 394,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 382,
        "end": 385,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 383,
            "end": 384,
            "name": {
              "type": "Identifier",
              "start": 383,
              "end": 384,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 395,
        "end": 428,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 397,
          "end": 428,
          "parameterName": {
            "type": "Identifier",
            "start": 405,
            "end": 410,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 414,
            "end": 428,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 414,
              "end": 428,
              "typeName": {
                "type": "Identifier",
                "start": 414,
                "end": 425,
                "name": "NonNullable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 425,
                "end": 428,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 426,
                    "end": 427,
                    "typeName": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 427,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 431,
      "end": 1301,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 443,
        "name": "f01",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 444,
          "end": 454,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 445,
            "end": 454,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 447,
              "end": 454
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 456,
        "end": 1301,
        "body": [
          {
            "type": "IfStatement",
            "start": 462,
            "end": 538,
            "test": {
              "type": "UnaryExpression",
              "start": 466,
              "end": 472,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 467,
                "end": 472,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 468,
                  "end": 472,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 474,
              "end": 538,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 484,
                  "end": 514,
                  "expression": {
                    "type": "CallExpression",
                    "start": 484,
                    "end": 513,
                    "callee": {
                      "type": "Identifier",
                      "start": 484,
                      "end": 490,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 491,
                        "end": 512,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 491,
                          "end": 499,
                          "operator": "typeof",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 498,
                            "end": 499,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 504,
                          "end": 512,
                          "value": "string",
                          "raw": "\"string\""
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 523,
                  "end": 532,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 523,
                    "end": 531,
                    "object": {
                      "type": "Identifier",
                      "start": 523,
                      "end": 524,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 531,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
            "start": 543,
            "end": 617,
            "test": {
              "type": "UnaryExpression",
              "start": 547,
              "end": 553,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 548,
                "end": 553,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 549,
                  "end": 553,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 555,
              "end": 617,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 565,
                  "end": 592,
                  "expression": {
                    "type": "CallExpression",
                    "start": 565,
                    "end": 591,
                    "callee": {
                      "type": "Identifier",
                      "start": 565,
                      "end": 571,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 572,
                        "end": 590,
                        "left": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 573,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "instanceof",
                        "right": {
                          "type": "Identifier",
                          "start": 585,
                          "end": 590,
                          "name": "Error",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 601,
                  "end": 611,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 601,
                    "end": 610,
                    "object": {
                      "type": "Identifier",
                      "start": 601,
                      "end": 602,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 603,
                      "end": 610,
                      "name": "message",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
            "start": 622,
            "end": 732,
            "test": {
              "type": "UnaryExpression",
              "start": 626,
              "end": 632,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 627,
                "end": 632,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 628,
                  "end": 632,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 634,
              "end": 732,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 644,
                  "end": 700,
                  "expression": {
                    "type": "CallExpression",
                    "start": 644,
                    "end": 699,
                    "callee": {
                      "type": "Identifier",
                      "start": 644,
                      "end": 650,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "LogicalExpression",
                        "start": 651,
                        "end": 698,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 651,
                          "end": 673,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 651,
                            "end": 659,
                            "operator": "typeof",
                            "prefix": true,
                            "argument": {
                              "type": "Identifier",
                              "start": 658,
                              "end": 659,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 664,
                            "end": 673,
                            "value": "boolean",
                            "raw": "\"boolean\""
                          }
                        },
                        "operator": "||",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 677,
                          "end": 698,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 677,
                            "end": 685,
                            "operator": "typeof",
                            "prefix": true,
                            "argument": {
                              "type": "Identifier",
                              "start": 684,
                              "end": 685,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 690,
                            "end": 698,
                            "value": "number",
                            "raw": "\"number\""
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 709,
                  "end": 726,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 709,
                    "end": 725,
                    "object": {
                      "type": "Identifier",
                      "start": 709,
                      "end": 710,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 711,
                      "end": 725,
                      "name": "toLocaleString",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
            "start": 737,
            "end": 814,
            "test": {
              "type": "UnaryExpression",
              "start": 741,
              "end": 747,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 742,
                "end": 747,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 743,
                  "end": 747,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 749,
              "end": 814,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 759,
                  "end": 787,
                  "expression": {
                    "type": "CallExpression",
                    "start": 759,
                    "end": 786,
                    "callee": {
                      "type": "Identifier",
                      "start": 759,
                      "end": 765,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "start": 766,
                        "end": 785,
                        "callee": {
                          "type": "Identifier",
                          "start": 766,
                          "end": 782,
                          "name": "isArrayOfStrings",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 783,
                            "end": 784,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 796,
                  "end": 808,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 796,
                    "end": 807,
                    "object": {
                      "type": "MemberExpression",
                      "start": 796,
                      "end": 800,
                      "object": {
                        "type": "Identifier",
                        "start": 796,
                        "end": 797,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 798,
                        "end": 799,
                        "value": 0,
                        "raw": "0"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 801,
                      "end": 807,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
            "start": 819,
            "end": 894,
            "test": {
              "type": "UnaryExpression",
              "start": 823,
              "end": 829,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 824,
                "end": 829,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 825,
                  "end": 829,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 831,
              "end": 894,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 841,
                  "end": 867,
                  "expression": {
                    "type": "CallExpression",
                    "start": 841,
                    "end": 866,
                    "callee": {
                      "type": "Identifier",
                      "start": 841,
                      "end": 863,
                      "name": "assertIsArrayOfStrings",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 864,
                        "end": 865,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 876,
                  "end": 888,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 876,
                    "end": 887,
                    "object": {
                      "type": "MemberExpression",
                      "start": 876,
                      "end": 880,
                      "object": {
                        "type": "Identifier",
                        "start": 876,
                        "end": 877,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 878,
                        "end": 879,
                        "value": 0,
                        "raw": "0"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 881,
                      "end": 887,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
            "start": 899,
            "end": 968,
            "test": {
              "type": "UnaryExpression",
              "start": 903,
              "end": 909,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 904,
                "end": 909,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 905,
                  "end": 909,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 911,
              "end": 968,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 921,
                  "end": 951,
                  "expression": {
                    "type": "CallExpression",
                    "start": 921,
                    "end": 950,
                    "callee": {
                      "type": "Identifier",
                      "start": 921,
                      "end": 943,
                      "name": "assertIsArrayOfStrings",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 944,
                        "end": 949,
                        "value": false,
                        "raw": "false"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 960,
                  "end": 962,
                  "expression": {
                    "type": "Identifier",
                    "start": 960,
                    "end": 961,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "start": 973,
            "end": 1132,
            "test": {
              "type": "UnaryExpression",
              "start": 977,
              "end": 983,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 978,
                "end": 983,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 979,
                  "end": 983,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 985,
              "end": 1132,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 995,
                  "end": 1044,
                  "expression": {
                    "type": "CallExpression",
                    "start": 995,
                    "end": 1043,
                    "callee": {
                      "type": "Identifier",
                      "start": 995,
                      "end": 1001,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "LogicalExpression",
                        "start": 1002,
                        "end": 1042,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1002,
                          "end": 1017,
                          "left": {
                            "type": "Identifier",
                            "start": 1002,
                            "end": 1003,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 1008,
                            "end": 1017,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "||",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 1021,
                          "end": 1042,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1021,
                            "end": 1029,
                            "operator": "typeof",
                            "prefix": true,
                            "argument": {
                              "type": "Identifier",
                              "start": 1028,
                              "end": 1029,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 1034,
                            "end": 1042,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1053,
                  "end": 1055,
                  "expression": {
                    "type": "Identifier",
                    "start": 1053,
                    "end": 1054,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1087,
                  "end": 1104,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1087,
                    "end": 1103,
                    "callee": {
                      "type": "Identifier",
                      "start": 1087,
                      "end": 1100,
                      "name": "assertDefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1101,
                        "end": 1102,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1113,
                  "end": 1115,
                  "expression": {
                    "type": "Identifier",
                    "start": 1113,
                    "end": 1114,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "start": 1137,
            "end": 1206,
            "test": {
              "type": "UnaryExpression",
              "start": 1141,
              "end": 1147,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 1142,
                "end": 1147,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1143,
                  "end": 1147,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1149,
              "end": 1206,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1159,
                  "end": 1173,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1159,
                    "end": 1172,
                    "callee": {
                      "type": "Identifier",
                      "start": 1159,
                      "end": 1165,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1166,
                        "end": 1171,
                        "value": false,
                        "raw": "false"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1182,
                  "end": 1184,
                  "expression": {
                    "type": "Identifier",
                    "start": 1182,
                    "end": 1183,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "start": 1211,
            "end": 1299,
            "test": {
              "type": "UnaryExpression",
              "start": 1215,
              "end": 1221,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 1216,
                "end": 1221,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1217,
                  "end": 1221,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1223,
              "end": 1299,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1233,
                  "end": 1266,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1233,
                    "end": 1265,
                    "callee": {
                      "type": "Identifier",
                      "start": 1233,
                      "end": 1239,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "LogicalExpression",
                        "start": 1240,
                        "end": 1264,
                        "left": {
                          "type": "Literal",
                          "start": 1240,
                          "end": 1245,
                          "value": false,
                          "raw": "false"
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 1249,
                          "end": 1264,
                          "left": {
                            "type": "Identifier",
                            "start": 1249,
                            "end": 1250,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 1255,
                            "end": 1264,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1275,
                  "end": 1277,
                  "expression": {
                    "type": "Identifier",
                    "start": 1275,
                    "end": 1276,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1303,
      "end": 1546,
      "id": {
        "type": "Identifier",
        "start": 1312,
        "end": 1315,
        "name": "f02",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1316,
          "end": 1337,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1317,
            "end": 1337,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1319,
              "end": 1337,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1319,
                  "end": 1325
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1328,
                  "end": 1337
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1339,
        "end": 1546,
        "body": [
          {
            "type": "IfStatement",
            "start": 1345,
            "end": 1401,
            "test": {
              "type": "UnaryExpression",
              "start": 1349,
              "end": 1355,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 1350,
                "end": 1355,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1351,
                  "end": 1355,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1357,
              "end": 1401,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1367,
                  "end": 1377,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1367,
                    "end": 1376,
                    "callee": {
                      "type": "Identifier",
                      "start": 1367,
                      "end": 1373,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1374,
                        "end": 1375,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1386,
                  "end": 1395,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1386,
                    "end": 1394,
                    "object": {
                      "type": "Identifier",
                      "start": 1386,
                      "end": 1387,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1388,
                      "end": 1394,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
            "start": 1406,
            "end": 1476,
            "test": {
              "type": "UnaryExpression",
              "start": 1410,
              "end": 1416,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 1411,
                "end": 1416,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1412,
                  "end": 1416,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1418,
              "end": 1476,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1428,
                  "end": 1452,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1428,
                    "end": 1451,
                    "callee": {
                      "type": "Identifier",
                      "start": 1428,
                      "end": 1434,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 1435,
                        "end": 1450,
                        "left": {
                          "type": "Identifier",
                          "start": 1435,
                          "end": 1436,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "start": 1441,
                          "end": 1450,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1461,
                  "end": 1470,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1461,
                    "end": 1469,
                    "object": {
                      "type": "Identifier",
                      "start": 1461,
                      "end": 1462,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1463,
                      "end": 1469,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
            "start": 1481,
            "end": 1544,
            "test": {
              "type": "UnaryExpression",
              "start": 1485,
              "end": 1491,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 1486,
                "end": 1491,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1487,
                  "end": 1491,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1493,
              "end": 1544,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1503,
                  "end": 1520,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1503,
                    "end": 1519,
                    "callee": {
                      "type": "Identifier",
                      "start": 1503,
                      "end": 1516,
                      "name": "assertDefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1517,
                        "end": 1518,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1529,
                  "end": 1538,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1529,
                    "end": 1537,
                    "object": {
                      "type": "Identifier",
                      "start": 1529,
                      "end": 1530,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1531,
                      "end": 1537,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1548,
      "end": 1659,
      "id": {
        "type": "Identifier",
        "start": 1557,
        "end": 1560,
        "name": "f03",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1561,
          "end": 1582,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1562,
            "end": 1582,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1564,
              "end": 1582,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1564,
                  "end": 1570
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1573,
                  "end": 1582
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1584,
          "end": 1625,
          "name": "assert",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1590,
            "end": 1625,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1592,
              "end": 1625,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1593,
                  "end": 1607,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1598,
                    "end": 1607,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1600,
                      "end": 1607
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1609,
                "end": 1625,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1612,
                  "end": 1625,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1620,
                    "end": 1625,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": true,
                  "typeAnnotation": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1627,
        "end": 1659,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1633,
            "end": 1643,
            "expression": {
              "type": "CallExpression",
              "start": 1633,
              "end": 1642,
              "callee": {
                "type": "Identifier",
                "start": 1633,
                "end": 1639,
                "name": "assert",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1640,
                  "end": 1641,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1648,
            "end": 1657,
            "expression": {
              "type": "MemberExpression",
              "start": 1648,
              "end": 1656,
              "object": {
                "type": "Identifier",
                "start": 1648,
                "end": 1649,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1650,
                "end": 1656,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1661,
      "end": 1854,
      "id": {
        "type": "Identifier",
        "start": 1671,
        "end": 1676,
        "name": "Debug",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1677,
        "end": 1854,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1683,
            "end": 1763,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 1690,
              "end": 1763,
              "id": {
                "type": "Identifier",
                "start": 1707,
                "end": 1713,
                "name": "assert",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1714,
                  "end": 1728,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1719,
                    "end": 1728,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1721,
                      "end": 1728
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1730,
                  "end": 1746,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1738,
                    "end": 1746,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1740,
                      "end": 1746
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": true,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1747,
                "end": 1762,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1749,
                  "end": 1762,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1757,
                    "end": 1762,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": true,
                  "typeAnnotation": null
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1768,
            "end": 1852,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 1775,
              "end": 1852,
              "id": {
                "type": "Identifier",
                "start": 1792,
                "end": 1805,
                "name": "assertDefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1809,
                  "end": 1817,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1814,
                    "end": 1817,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1816,
                      "end": 1817,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1816,
                        "end": 1817,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": true,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1805,
                "end": 1808,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1806,
                    "end": 1807,
                    "name": {
                      "type": "Identifier",
                      "start": 1806,
                      "end": 1807,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1818,
                "end": 1851,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1820,
                  "end": 1851,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1828,
                    "end": 1833,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1837,
                    "end": 1851,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1837,
                      "end": 1851,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1837,
                        "end": 1848,
                        "name": "NonNullable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1848,
                        "end": 1851,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1849,
                            "end": 1850,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1849,
                              "end": 1850,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1856,
      "end": 2197,
      "id": {
        "type": "Identifier",
        "start": 1865,
        "end": 1868,
        "name": "f10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1869,
          "end": 1890,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1870,
            "end": 1890,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1872,
              "end": 1890,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1872,
                  "end": 1878
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1881,
                  "end": 1890
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1892,
        "end": 2197,
        "body": [
          {
            "type": "IfStatement",
            "start": 1898,
            "end": 1960,
            "test": {
              "type": "UnaryExpression",
              "start": 1902,
              "end": 1908,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 1903,
                "end": 1908,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1904,
                  "end": 1908,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1910,
              "end": 1960,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1920,
                  "end": 1936,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1920,
                    "end": 1935,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1920,
                      "end": 1932,
                      "object": {
                        "type": "Identifier",
                        "start": 1920,
                        "end": 1925,
                        "name": "Debug",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1926,
                        "end": 1932,
                        "name": "assert",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1933,
                        "end": 1934,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1945,
                  "end": 1954,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1945,
                    "end": 1953,
                    "object": {
                      "type": "Identifier",
                      "start": 1945,
                      "end": 1946,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1947,
                      "end": 1953,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
            "start": 1965,
            "end": 2041,
            "test": {
              "type": "UnaryExpression",
              "start": 1969,
              "end": 1975,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 1970,
                "end": 1975,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1971,
                  "end": 1975,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1977,
              "end": 2041,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1987,
                  "end": 2017,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1987,
                    "end": 2016,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1987,
                      "end": 1999,
                      "object": {
                        "type": "Identifier",
                        "start": 1987,
                        "end": 1992,
                        "name": "Debug",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1993,
                        "end": 1999,
                        "name": "assert",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 2000,
                        "end": 2015,
                        "left": {
                          "type": "Identifier",
                          "start": 2000,
                          "end": 2001,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "start": 2006,
                          "end": 2015,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2026,
                  "end": 2035,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2026,
                    "end": 2034,
                    "object": {
                      "type": "Identifier",
                      "start": 2026,
                      "end": 2027,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2028,
                      "end": 2034,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
            "start": 2046,
            "end": 2115,
            "test": {
              "type": "UnaryExpression",
              "start": 2050,
              "end": 2056,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 2051,
                "end": 2056,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 2052,
                  "end": 2056,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2058,
              "end": 2115,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2068,
                  "end": 2091,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2068,
                    "end": 2090,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2068,
                      "end": 2087,
                      "object": {
                        "type": "Identifier",
                        "start": 2068,
                        "end": 2073,
                        "name": "Debug",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2074,
                        "end": 2087,
                        "name": "assertDefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2088,
                        "end": 2089,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2100,
                  "end": 2109,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2100,
                    "end": 2108,
                    "object": {
                      "type": "Identifier",
                      "start": 2100,
                      "end": 2101,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2102,
                      "end": 2108,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
            "start": 2120,
            "end": 2195,
            "test": {
              "type": "UnaryExpression",
              "start": 2124,
              "end": 2130,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 2125,
                "end": 2130,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 2126,
                  "end": 2130,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2132,
              "end": 2195,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2142,
                  "end": 2162,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2142,
                    "end": 2161,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2142,
                      "end": 2154,
                      "object": {
                        "type": "Identifier",
                        "start": 2142,
                        "end": 2147,
                        "name": "Debug",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2148,
                        "end": 2154,
                        "name": "assert",
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
                        "start": 2155,
                        "end": 2160,
                        "value": false,
                        "raw": "false"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2171,
                  "end": 2173,
                  "expression": {
                    "type": "Identifier",
                    "start": 2171,
                    "end": 2172,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2199,
      "end": 2943,
      "id": {
        "type": "Identifier",
        "start": 2205,
        "end": 2209,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2210,
        "end": 2943,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2216,
            "end": 2315,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2216,
              "end": 2222,
              "name": "assert",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2222,
              "end": 2315,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2223,
                  "end": 2237,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2228,
                    "end": 2237,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 2230,
                      "end": 2237
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2254,
                "end": 2315,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 2264,
                    "end": 2282,
                    "test": {
                      "type": "Identifier",
                      "start": 2268,
                      "end": 2273,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "start": 2275,
                      "end": 2282,
                      "argument": null
                    },
                    "alternate": null
                  },
                  {
                    "type": "ThrowStatement",
                    "start": 2291,
                    "end": 2309,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2297,
                      "end": 2308,
                      "callee": {
                        "type": "Identifier",
                        "start": 2301,
                        "end": 2306,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2238,
                "end": 2253,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 2240,
                  "end": 2253,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 2248,
                    "end": 2253,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": true,
                  "typeAnnotation": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2320,
            "end": 2390,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2320,
              "end": 2327,
              "name": "isTest2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2327,
              "end": 2390,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2345,
                "end": 2390,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2355,
                    "end": 2384,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 2362,
                      "end": 2383,
                      "left": {
                        "type": "ThisExpression",
                        "start": 2362,
                        "end": 2366
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 2378,
                        "end": 2383,
                        "name": "Test2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2329,
                "end": 2344,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 2331,
                  "end": 2344,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 2331,
                    "end": 2335
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2339,
                    "end": 2344,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2339,
                      "end": 2344,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2339,
                        "end": 2344,
                        "name": "Test2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2395,
            "end": 2511,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2395,
              "end": 2408,
              "name": "assertIsTest2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2408,
              "end": 2511,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2434,
                "end": 2511,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 2444,
                    "end": 2478,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 2448,
                      "end": 2469,
                      "left": {
                        "type": "ThisExpression",
                        "start": 2448,
                        "end": 2452
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 2464,
                        "end": 2469,
                        "name": "Test2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "start": 2471,
                      "end": 2478,
                      "argument": null
                    },
                    "alternate": null
                  },
                  {
                    "type": "ThrowStatement",
                    "start": 2487,
                    "end": 2505,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2493,
                      "end": 2504,
                      "callee": {
                        "type": "Identifier",
                        "start": 2497,
                        "end": 2502,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2410,
                "end": 2433,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 2412,
                  "end": 2433,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 2420,
                    "end": 2424
                  },
                  "asserts": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2428,
                    "end": 2433,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2428,
                      "end": 2433,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2428,
                        "end": 2433,
                        "name": "Test2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2516,
            "end": 2604,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2516,
              "end": 2526,
              "name": "assertThis",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2526,
              "end": 2604,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2543,
                "end": 2604,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 2553,
                    "end": 2571,
                    "test": {
                      "type": "UnaryExpression",
                      "start": 2557,
                      "end": 2562,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 2558,
                        "end": 2562
                      }
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "start": 2564,
                      "end": 2571,
                      "argument": null
                    },
                    "alternate": null
                  },
                  {
                    "type": "ThrowStatement",
                    "start": 2580,
                    "end": 2598,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2586,
                      "end": 2597,
                      "callee": {
                        "type": "Identifier",
                        "start": 2590,
                        "end": 2595,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2528,
                "end": 2542,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 2530,
                  "end": 2542,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 2538,
                    "end": 2542
                  },
                  "asserts": true,
                  "typeAnnotation": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2609,
            "end": 2663,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2609,
              "end": 2612,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2612,
              "end": 2663,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2615,
                "end": 2663,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2625,
                    "end": 2643,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2625,
                      "end": 2642,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2625,
                        "end": 2640,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2625,
                          "end": 2629
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2630,
                          "end": 2640,
                          "name": "assertThis",
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2652,
                    "end": 2657,
                    "expression": {
                      "type": "ThisExpression",
                      "start": 2652,
                      "end": 2656
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 2668,
            "end": 2859,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2668,
              "end": 2671,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2671,
              "end": 2859,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2672,
                  "end": 2682,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2673,
                    "end": 2682,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 2675,
                      "end": 2682
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2684,
                "end": 2859,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2694,
                    "end": 2729,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2694,
                      "end": 2728,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2694,
                        "end": 2705,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2694,
                          "end": 2698
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2699,
                          "end": 2705,
                          "name": "assert",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 2706,
                          "end": 2727,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2706,
                            "end": 2714,
                            "operator": "typeof",
                            "prefix": true,
                            "argument": {
                              "type": "Identifier",
                              "start": 2713,
                              "end": 2714,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 2719,
                            "end": 2727,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2738,
                    "end": 2747,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 2738,
                      "end": 2746,
                      "object": {
                        "type": "Identifier",
                        "start": 2738,
                        "end": 2739,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2740,
                        "end": 2746,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 2756,
                    "end": 2807,
                    "test": {
                      "type": "CallExpression",
                      "start": 2760,
                      "end": 2774,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2760,
                        "end": 2772,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2760,
                          "end": 2764
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2765,
                          "end": 2772,
                          "name": "isTest2",
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
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 2776,
                      "end": 2807,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2790,
                          "end": 2797,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 2790,
                            "end": 2796,
                            "object": {
                              "type": "ThisExpression",
                              "start": 2790,
                              "end": 2794
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2795,
                              "end": 2796,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2816,
                    "end": 2837,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2816,
                      "end": 2836,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2816,
                        "end": 2834,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2816,
                          "end": 2820
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2821,
                          "end": 2834,
                          "name": "assertIsTest2",
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2846,
                    "end": 2853,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 2846,
                      "end": 2852,
                      "object": {
                        "type": "ThisExpression",
                        "start": 2846,
                        "end": 2850
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2851,
                        "end": 2852,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 2864,
            "end": 2941,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2864,
              "end": 2867,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2867,
              "end": 2941,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2868,
                  "end": 2877,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2869,
                    "end": 2877,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2871,
                      "end": 2877
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2879,
                "end": 2941,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2889,
                    "end": 2908,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2889,
                      "end": 2907,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2889,
                        "end": 2900,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2889,
                          "end": 2893
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2894,
                          "end": 2900,
                          "name": "assert",
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
                          "start": 2901,
                          "end": 2906,
                          "value": false,
                          "raw": "false"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2917,
                    "end": 2919,
                    "expression": {
                      "type": "Identifier",
                      "start": 2917,
                      "end": 2918,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 2945,
      "end": 2984,
      "id": {
        "type": "Identifier",
        "start": 2951,
        "end": 2956,
        "name": "Test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 2965,
        "end": 2969,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 2970,
        "end": 2984,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2976,
            "end": 2982,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2976,
              "end": 2977,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 2980,
              "end": 2981,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "ClassDeclaration",
      "start": 2986,
      "end": 3190,
      "id": {
        "type": "Identifier",
        "start": 2992,
        "end": 2999,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 3008,
        "end": 3012,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 3013,
        "end": 3190,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3019,
            "end": 3105,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3019,
              "end": 3022,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3022,
              "end": 3105,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3023,
                  "end": 3033,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3024,
                    "end": 3033,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3026,
                      "end": 3033
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3035,
                "end": 3105,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3045,
                    "end": 3081,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3045,
                      "end": 3080,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3045,
                        "end": 3057,
                        "object": {
                          "type": "Super",
                          "start": 3045,
                          "end": 3050
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3051,
                          "end": 3057,
                          "name": "assert",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 3058,
                          "end": 3079,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 3058,
                            "end": 3066,
                            "operator": "typeof",
                            "prefix": true,
                            "argument": {
                              "type": "Identifier",
                              "start": 3065,
                              "end": 3066,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 3071,
                            "end": 3079,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3090,
                    "end": 3099,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3090,
                      "end": 3098,
                      "object": {
                        "type": "Identifier",
                        "start": 3090,
                        "end": 3091,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3092,
                        "end": 3098,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 3110,
            "end": 3188,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3110,
              "end": 3113,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3113,
              "end": 3188,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3114,
                  "end": 3123,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3115,
                    "end": 3123,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3117,
                      "end": 3123
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3125,
                "end": 3188,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3135,
                    "end": 3155,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3135,
                      "end": 3154,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3135,
                        "end": 3147,
                        "object": {
                          "type": "Super",
                          "start": 3135,
                          "end": 3140
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3141,
                          "end": 3147,
                          "name": "assert",
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
                          "start": 3148,
                          "end": 3153,
                          "value": false,
                          "raw": "false"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3164,
                    "end": 3166,
                    "expression": {
                      "type": "Identifier",
                      "start": 3164,
                      "end": 3165,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
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
      "type": "FunctionDeclaration",
      "start": 3192,
      "end": 3365,
      "id": {
        "type": "Identifier",
        "start": 3201,
        "end": 3204,
        "name": "f11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3205,
          "end": 3218,
          "name": "items",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3210,
            "end": 3218,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 3212,
              "end": 3218,
              "elementType": {
                "type": "TSTypeReference",
                "start": 3212,
                "end": 3216,
                "typeName": {
                  "type": "Identifier",
                  "start": 3212,
                  "end": 3216,
                  "name": "Test",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3220,
        "end": 3365,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 3226,
            "end": 3363,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 3231,
              "end": 3239,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3235,
                  "end": 3239,
                  "id": {
                    "type": "Identifier",
                    "start": 3235,
                    "end": 3239,
                    "name": "item",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 3243,
              "end": 3248,
              "name": "items",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 3250,
              "end": 3363,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 3260,
                  "end": 3311,
                  "test": {
                    "type": "CallExpression",
                    "start": 3264,
                    "end": 3278,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3264,
                      "end": 3276,
                      "object": {
                        "type": "Identifier",
                        "start": 3264,
                        "end": 3268,
                        "name": "item",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3269,
                        "end": 3276,
                        "name": "isTest2",
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
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 3280,
                    "end": 3311,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 3294,
                        "end": 3301,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 3294,
                          "end": 3300,
                          "object": {
                            "type": "Identifier",
                            "start": 3294,
                            "end": 3298,
                            "name": "item",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3299,
                            "end": 3300,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3320,
                  "end": 3341,
                  "expression": {
                    "type": "CallExpression",
                    "start": 3320,
                    "end": 3340,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3320,
                      "end": 3338,
                      "object": {
                        "type": "Identifier",
                        "start": 3320,
                        "end": 3324,
                        "name": "item",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3325,
                        "end": 3338,
                        "name": "assertIsTest2",
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
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3350,
                  "end": 3357,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3350,
                    "end": 3356,
                    "object": {
                      "type": "Identifier",
                      "start": 3350,
                      "end": 3354,
                      "name": "item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3355,
                      "end": 3356,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3390,
      "end": 3438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3402,
          "end": 3437,
          "id": {
            "type": "Identifier",
            "start": 3402,
            "end": 3437,
            "name": "Q1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3404,
              "end": 3437,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3406,
                "end": 3437,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3411,
                    "end": 3421,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3412,
                      "end": 3421,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 3414,
                        "end": 3421
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3423,
                  "end": 3437,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 3426,
                    "end": 3437,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 3426,
                      "end": 3427,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3431,
                      "end": 3437,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3431,
                        "end": 3437
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3439,
      "end": 3485,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3451,
          "end": 3484,
          "id": {
            "type": "Identifier",
            "start": 3451,
            "end": 3484,
            "name": "Q2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3453,
              "end": 3484,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3455,
                "end": 3484,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3460,
                    "end": 3470,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3461,
                      "end": 3470,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3463,
                        "end": 3470
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3472,
                  "end": 3484,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 3475,
                    "end": 3484,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 3483,
                      "end": 3484,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": true,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3486,
      "end": 3542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3498,
          "end": 3541,
          "id": {
            "type": "Identifier",
            "start": 3498,
            "end": 3541,
            "name": "Q3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3500,
              "end": 3541,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3502,
                "end": 3541,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3507,
                    "end": 3517,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3508,
                      "end": 3517,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 3510,
                        "end": 3517
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3519,
                  "end": 3541,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 3522,
                    "end": 3541,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 3530,
                      "end": 3531,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3535,
                      "end": 3541,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3535,
                        "end": 3541
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 3544,
      "end": 3703,
      "id": {
        "type": "Identifier",
        "start": 3558,
        "end": 3561,
        "name": "Wat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 3562,
        "end": 3703,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3568,
            "end": 3593,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3572,
              "end": 3574,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3574,
              "end": 3593,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3576,
                "end": 3592,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 3578,
                  "end": 3592,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 3578,
                    "end": 3582
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3586,
                    "end": 3592,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3586,
                      "end": 3592
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3598,
            "end": 3624,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3602,
              "end": 3604,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3604,
              "end": 3624,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3605,
                  "end": 3622,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3606,
                    "end": 3622,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 3608,
                      "end": 3622,
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 3608,
                        "end": 3612
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3616,
                        "end": 3622,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3616,
                          "end": 3622
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3629,
            "end": 3662,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3633,
              "end": 3635,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3635,
              "end": 3662,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3637,
                "end": 3661,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 3639,
                  "end": 3661,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 3647,
                    "end": 3651
                  },
                  "asserts": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3655,
                    "end": 3661,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3655,
                      "end": 3661
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3667,
            "end": 3701,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3671,
              "end": 3673,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3673,
              "end": 3701,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3674,
                  "end": 3699,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3675,
                    "end": 3699,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 3677,
                      "end": 3699,
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 3685,
                        "end": 3689
                      },
                      "asserts": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3693,
                        "end": 3699,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3693,
                          "end": 3699
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3705,
      "end": 4048,
      "id": {
        "type": "Identifier",
        "start": 3714,
        "end": 3717,
        "name": "f20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3718,
          "end": 3728,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3719,
            "end": 3728,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 3721,
              "end": 3728
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3730,
        "end": 4048,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3736,
            "end": 3788,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3742,
                "end": 3788,
                "id": {
                  "type": "Identifier",
                  "start": 3742,
                  "end": 3748,
                  "name": "assert",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3751,
                  "end": 3788,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3752,
                      "end": 3766,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3757,
                        "end": 3766,
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 3759,
                          "end": 3766
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 3786,
                    "end": 3788,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3767,
                    "end": 3782,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 3769,
                      "end": 3782,
                      "parameterName": {
                        "type": "Identifier",
                        "start": 3777,
                        "end": 3782,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "asserts": true,
                      "typeAnnotation": null
                    }
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 3793,
            "end": 3823,
            "expression": {
              "type": "CallExpression",
              "start": 3793,
              "end": 3822,
              "callee": {
                "type": "Identifier",
                "start": 3793,
                "end": 3799,
                "name": "assert",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 3800,
                  "end": 3821,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 3800,
                    "end": 3808,
                    "operator": "typeof",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 3807,
                      "end": 3808,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 3813,
                    "end": 3821,
                    "value": "string",
                    "raw": "\"string\""
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 3838,
            "end": 3857,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3844,
                "end": 3856,
                "id": {
                  "type": "Identifier",
                  "start": 3844,
                  "end": 3845,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3848,
                  "end": 3856,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3849,
                      "end": 3855,
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 3862,
            "end": 3890,
            "expression": {
              "type": "CallExpression",
              "start": 3862,
              "end": 3889,
              "callee": {
                "type": "MemberExpression",
                "start": 3862,
                "end": 3866,
                "object": {
                  "type": "Identifier",
                  "start": 3862,
                  "end": 3863,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 3864,
                  "end": 3865,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 3867,
                  "end": 3888,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 3867,
                    "end": 3875,
                    "operator": "typeof",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 3874,
                      "end": 3875,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 3880,
                    "end": 3888,
                    "value": "string",
                    "raw": "\"string\""
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 3905,
            "end": 3927,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3911,
                "end": 3926,
                "id": {
                  "type": "Identifier",
                  "start": 3911,
                  "end": 3913,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 3916,
                  "end": 3926,
                  "callee": {
                    "type": "Identifier",
                    "start": 3920,
                    "end": 3924,
                    "name": "Test",
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
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 3932,
            "end": 3965,
            "expression": {
              "type": "CallExpression",
              "start": 3932,
              "end": 3964,
              "callee": {
                "type": "MemberExpression",
                "start": 3932,
                "end": 3941,
                "object": {
                  "type": "Identifier",
                  "start": 3932,
                  "end": 3934,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3935,
                  "end": 3941,
                  "name": "assert",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 3942,
                  "end": 3963,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 3942,
                    "end": 3950,
                    "operator": "typeof",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 3949,
                      "end": 3950,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 3955,
                    "end": 3963,
                    "value": "string",
                    "raw": "\"string\""
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 3980,
            "end": 4008,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3986,
                "end": 4007,
                "id": {
                  "type": "Identifier",
                  "start": 3986,
                  "end": 3994,
                  "name": "t2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3988,
                    "end": 3994,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3990,
                      "end": 3994,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3990,
                        "end": 3994,
                        "name": "Test",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 3997,
                  "end": 4007,
                  "callee": {
                    "type": "Identifier",
                    "start": 4001,
                    "end": 4005,
                    "name": "Test",
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
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 4013,
            "end": 4046,
            "expression": {
              "type": "CallExpression",
              "start": 4013,
              "end": 4045,
              "callee": {
                "type": "MemberExpression",
                "start": 4013,
                "end": 4022,
                "object": {
                  "type": "Identifier",
                  "start": 4013,
                  "end": 4015,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 4016,
                  "end": 4022,
                  "name": "assert",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 4023,
                  "end": 4044,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 4023,
                    "end": 4031,
                    "operator": "typeof",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 4030,
                      "end": 4031,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 4036,
                    "end": 4044,
                    "value": "string",
                    "raw": "\"string\""
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4072,
      "end": 4151,
      "id": {
        "type": "Identifier",
        "start": 4082,
        "end": 4087,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4088,
        "end": 4151,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 4094,
            "end": 4108,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4094,
              "end": 4098,
              "name": "good",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4098,
              "end": 4107,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4100,
                "end": 4107
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 4113,
            "end": 4149,
            "key": {
              "type": "Identifier",
              "start": 4113,
              "end": 4119,
              "name": "isGood",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4121,
              "end": 4148,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 4123,
                "end": 4148,
                "parameterName": {
                  "type": "TSThisType",
                  "start": 4131,
                  "end": 4135
                },
                "asserts": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4139,
                  "end": 4148,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4139,
                    "end": 4148,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4139,
                      "end": 4148,
                      "name": "GoodThing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 4153,
      "end": 4192,
      "id": {
        "type": "Identifier",
        "start": 4163,
        "end": 4172,
        "name": "GoodThing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4173,
        "end": 4192,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 4179,
            "end": 4190,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4179,
              "end": 4183,
              "name": "good",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4183,
              "end": 4189,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 4185,
                "end": 4189,
                "literal": {
                  "type": "Literal",
                  "start": 4185,
                  "end": 4189,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4194,
      "end": 4314,
      "id": {
        "type": "Identifier",
        "start": 4203,
        "end": 4211,
        "name": "example1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 4212,
          "end": 4227,
          "name": "things",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4218,
            "end": 4227,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 4220,
              "end": 4227,
              "elementType": {
                "type": "TSTypeReference",
                "start": 4220,
                "end": 4225,
                "typeName": {
                  "type": "Identifier",
                  "start": 4220,
                  "end": 4225,
                  "name": "Thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4229,
        "end": 4314,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 4235,
            "end": 4312,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 4240,
              "end": 4249,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4244,
                  "end": 4249,
                  "id": {
                    "type": "Identifier",
                    "start": 4244,
                    "end": 4249,
                    "name": "thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 4253,
              "end": 4259,
              "name": "things",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 4261,
              "end": 4312,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4271,
                  "end": 4286,
                  "expression": {
                    "type": "CallExpression",
                    "start": 4271,
                    "end": 4285,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4271,
                      "end": 4283,
                      "object": {
                        "type": "Identifier",
                        "start": 4271,
                        "end": 4276,
                        "name": "thing",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4277,
                        "end": 4283,
                        "name": "isGood",
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
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4295,
                  "end": 4306,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4295,
                    "end": 4305,
                    "object": {
                      "type": "Identifier",
                      "start": 4295,
                      "end": 4300,
                      "name": "thing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4301,
                      "end": 4305,
                      "name": "good",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 4316,
      "end": 4462,
      "id": {
        "type": "Identifier",
        "start": 4322,
        "end": 4346,
        "name": "TestPropertyDeclaration1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 4347,
        "end": 4462,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4351,
            "end": 4398,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4351,
              "end": 4357,
              "name": "assert",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 4360,
              "end": 4397,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4361,
                  "end": 4375,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4366,
                    "end": 4375,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4368,
                      "end": 4375
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4395,
                "end": 4397,
                "body": []
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4376,
                "end": 4391,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 4378,
                  "end": 4391,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 4386,
                    "end": 4391,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": true,
                  "typeAnnotation": null
                }
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4401,
            "end": 4460,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4401,
              "end": 4406,
              "name": "other",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4406,
              "end": 4460,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4407,
                  "end": 4417,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4408,
                    "end": 4417,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4410,
                      "end": 4417
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4419,
                "end": 4460,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4425,
                    "end": 4440,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4425,
                      "end": 4439,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4425,
                        "end": 4436,
                        "object": {
                          "type": "ThisExpression",
                          "start": 4425,
                          "end": 4429
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4430,
                          "end": 4436,
                          "name": "assert",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 4437,
                          "end": 4438,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4454,
                    "end": 4456,
                    "expression": {
                      "type": "Identifier",
                      "start": 4454,
                      "end": 4455,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 4464,
      "end": 4610,
      "id": {
        "type": "Identifier",
        "start": 4470,
        "end": 4494,
        "name": "TestPropertyDeclaration2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 4495,
        "end": 4610,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4499,
            "end": 4549,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4499,
              "end": 4505,
              "name": "assert",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 4535,
              "end": 4548,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4536,
                  "end": 4541,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4546,
                "end": 4548,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4505,
              "end": 4532,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4507,
                "end": 4532,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4508,
                    "end": 4518,
                    "name": "v",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4509,
                      "end": 4518,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 4511,
                        "end": 4518
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4520,
                  "end": 4532,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 4523,
                    "end": 4532,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 4531,
                      "end": 4532,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": true,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4552,
            "end": 4608,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4552,
              "end": 4557,
              "name": "other",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4557,
              "end": 4608,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4558,
                  "end": 4568,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4559,
                    "end": 4568,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4561,
                      "end": 4568
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4570,
                "end": 4608,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4576,
                    "end": 4591,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4576,
                      "end": 4590,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4576,
                        "end": 4587,
                        "object": {
                          "type": "ThisExpression",
                          "start": 4576,
                          "end": 4580
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4581,
                          "end": 4587,
                          "name": "assert",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 4588,
                          "end": 4589,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4602,
                    "end": 4604,
                    "expression": {
                      "type": "Identifier",
                      "start": 4602,
                      "end": 4603,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 4612,
      "end": 4709,
      "id": {
        "type": "Identifier",
        "start": 4626,
        "end": 4660,
        "name": "ParentInheritedPropertyDeclaration",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 4661,
        "end": 4709,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4665,
            "end": 4707,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4665,
              "end": 4671,
              "name": "assert",
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
              "start": 4671,
              "end": 4706,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4673,
                "end": 4706,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4674,
                    "end": 4688,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4679,
                      "end": 4688,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 4681,
                        "end": 4688
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4690,
                  "end": 4706,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 4693,
                    "end": 4706,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 4701,
                      "end": 4706,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": true,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 4710,
      "end": 4855,
      "id": {
        "type": "Identifier",
        "start": 4716,
        "end": 4749,
        "name": "ChildInheritedPropertyDeclaration",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 4758,
        "end": 4792,
        "name": "ParentInheritedPropertyDeclaration",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 4793,
        "end": 4855,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4797,
            "end": 4853,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4797,
              "end": 4802,
              "name": "other",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4802,
              "end": 4853,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4803,
                  "end": 4813,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4804,
                    "end": 4813,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4806,
                      "end": 4813
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4815,
                "end": 4853,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4821,
                    "end": 4836,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4821,
                      "end": 4835,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4821,
                        "end": 4832,
                        "object": {
                          "type": "ThisExpression",
                          "start": 4821,
                          "end": 4825
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4826,
                          "end": 4832,
                          "name": "assert",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 4833,
                          "end": 4834,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4847,
                    "end": 4849,
                    "expression": {
                      "type": "Identifier",
                      "start": 4847,
                      "end": 4848,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
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
      "type": "TSInterfaceDeclaration",
      "start": 4857,
      "end": 4937,
      "id": {
        "type": "Identifier",
        "start": 4867,
        "end": 4888,
        "name": "TestPropertySignature",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4889,
        "end": 4937,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 4893,
            "end": 4935,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4893,
              "end": 4899,
              "name": "assert",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4899,
              "end": 4934,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4901,
                "end": 4934,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4902,
                    "end": 4916,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4907,
                      "end": 4916,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 4909,
                        "end": 4916
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4918,
                  "end": 4934,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 4921,
                    "end": 4934,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 4929,
                      "end": 4934,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": true,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4938,
      "end": 5043,
      "id": {
        "type": "Identifier",
        "start": 4947,
        "end": 4968,
        "name": "testPropertySignature",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 4972,
          "end": 4996,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4973,
            "end": 4996,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4975,
              "end": 4996,
              "typeName": {
                "type": "Identifier",
                "start": 4975,
                "end": 4996,
                "name": "TestPropertySignature",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 5000,
          "end": 5010,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5001,
            "end": 5010,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5003,
              "end": 5010
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5014,
        "end": 5043,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5018,
            "end": 5030,
            "expression": {
              "type": "CallExpression",
              "start": 5018,
              "end": 5029,
              "callee": {
                "type": "MemberExpression",
                "start": 5018,
                "end": 5026,
                "object": {
                  "type": "Identifier",
                  "start": 5018,
                  "end": 5019,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 5020,
                  "end": 5026,
                  "name": "assert",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 5027,
                  "end": 5028,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 5039,
            "end": 5041,
            "expression": {
              "type": "Identifier",
              "start": 5039,
              "end": 5040,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5044,
      "end": 5160,
      "id": {
        "type": "Identifier",
        "start": 5053,
        "end": 5079,
        "name": "testFunctionThisParameter1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 5083,
          "end": 5110,
          "name": "this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5087,
            "end": 5110,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5089,
              "end": 5110,
              "typeName": {
                "type": "Identifier",
                "start": 5089,
                "end": 5110,
                "name": "TestPropertySignature",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 5114,
          "end": 5124,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5115,
            "end": 5124,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5117,
              "end": 5124
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5128,
        "end": 5160,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5132,
            "end": 5147,
            "expression": {
              "type": "CallExpression",
              "start": 5132,
              "end": 5146,
              "callee": {
                "type": "MemberExpression",
                "start": 5132,
                "end": 5143,
                "object": {
                  "type": "ThisExpression",
                  "start": 5132,
                  "end": 5136
                },
                "property": {
                  "type": "Identifier",
                  "start": 5137,
                  "end": 5143,
                  "name": "assert",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 5144,
                  "end": 5145,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 5156,
            "end": 5158,
            "expression": {
              "type": "Identifier",
              "start": 5156,
              "end": 5157,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 5162,
      "end": 5236,
      "id": {
        "type": "Identifier",
        "start": 5172,
        "end": 5191,
        "name": "TestMethodSignature",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 5192,
        "end": 5236,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 5196,
            "end": 5234,
            "key": {
              "type": "Identifier",
              "start": 5196,
              "end": 5202,
              "name": "assert",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 5203,
                "end": 5217,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5208,
                  "end": 5217,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 5210,
                    "end": 5217
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 5218,
              "end": 5233,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 5220,
                "end": 5233,
                "parameterName": {
                  "type": "Identifier",
                  "start": 5228,
                  "end": 5233,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "asserts": true,
                "typeAnnotation": null
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
      "type": "FunctionDeclaration",
      "start": 5237,
      "end": 5338,
      "id": {
        "type": "Identifier",
        "start": 5246,
        "end": 5265,
        "name": "testMethodSignature",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 5269,
          "end": 5291,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5270,
            "end": 5291,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5272,
              "end": 5291,
              "typeName": {
                "type": "Identifier",
                "start": 5272,
                "end": 5291,
                "name": "TestMethodSignature",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 5295,
          "end": 5305,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5296,
            "end": 5305,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5298,
              "end": 5305
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5309,
        "end": 5338,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5313,
            "end": 5325,
            "expression": {
              "type": "CallExpression",
              "start": 5313,
              "end": 5324,
              "callee": {
                "type": "MemberExpression",
                "start": 5313,
                "end": 5321,
                "object": {
                  "type": "Identifier",
                  "start": 5313,
                  "end": 5314,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 5315,
                  "end": 5321,
                  "name": "assert",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 5322,
                  "end": 5323,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 5334,
            "end": 5336,
            "expression": {
              "type": "Identifier",
              "start": 5334,
              "end": 5335,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5339,
      "end": 5453,
      "id": {
        "type": "Identifier",
        "start": 5348,
        "end": 5374,
        "name": "testFunctionThisParameter2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 5378,
          "end": 5403,
          "name": "this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5382,
            "end": 5403,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5384,
              "end": 5403,
              "typeName": {
                "type": "Identifier",
                "start": 5384,
                "end": 5403,
                "name": "TestMethodSignature",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 5407,
          "end": 5417,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5408,
            "end": 5417,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5410,
              "end": 5417
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5421,
        "end": 5453,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5425,
            "end": 5440,
            "expression": {
              "type": "CallExpression",
              "start": 5425,
              "end": 5439,
              "callee": {
                "type": "MemberExpression",
                "start": 5425,
                "end": 5436,
                "object": {
                  "type": "ThisExpression",
                  "start": 5425,
                  "end": 5429
                },
                "property": {
                  "type": "Identifier",
                  "start": 5430,
                  "end": 5436,
                  "name": "assert",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 5437,
                  "end": 5438,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 5449,
            "end": 5451,
            "expression": {
              "type": "Identifier",
              "start": 5449,
              "end": 5450,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
