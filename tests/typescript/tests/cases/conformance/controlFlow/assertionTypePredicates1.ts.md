__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5453,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "decorators": [],
        "name": "isString",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 26,
          "end": 40,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 40,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 33,
              "end": 40
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 60,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 93,
        "decorators": [],
        "name": "isArrayOfStrings",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 94,
          "end": 108,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 99,
            "end": 108,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 101,
              "end": 108
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 192,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 178,
            "decorators": [],
            "name": "assert",
            "optional": false,
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
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 151,
                      "end": 160,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 153,
                        "end": 160
                      }
                    }
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
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "asserts": true,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 181,
            "end": 192,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 181,
                "end": 186,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 190,
              "end": 192,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "assertIsString",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 226,
          "end": 240,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 240,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 233,
              "end": 240
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 268,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 307,
        "decorators": [],
        "name": "assertIsArrayOfStrings",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 308,
          "end": 322,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 313,
            "end": 322,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 315,
              "end": 322
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 352,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 382,
        "decorators": [],
        "name": "assertDefined",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
          "start": 386,
          "end": 394,
          "decorators": [],
          "name": "value",
          "optional": false,
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
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "NonNullable",
                "optional": false,
                "typeAnnotation": null
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
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 431,
      "end": 1301,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 443,
        "decorators": [],
        "name": "f01",
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
          "start": 444,
          "end": 454,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 445,
            "end": 454,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 447,
              "end": 454
            }
          }
        }
      ],
      "returnType": null,
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
              "argument": {
                "type": "UnaryExpression",
                "start": 467,
                "end": 472,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 468,
                  "end": 472,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
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
                          "argument": {
                            "type": "Identifier",
                            "start": 498,
                            "end": 499,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "prefix": true
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
                    "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 531,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              "argument": {
                "type": "UnaryExpression",
                "start": 548,
                "end": 553,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 549,
                  "end": 553,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 572,
                        "end": 590,
                        "left": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 573,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "instanceof",
                        "right": {
                          "type": "Identifier",
                          "start": 585,
                          "end": 590,
                          "decorators": [],
                          "name": "Error",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 603,
                      "end": 610,
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              "argument": {
                "type": "UnaryExpression",
                "start": 627,
                "end": 632,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 628,
                  "end": 632,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
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
                            "argument": {
                              "type": "Identifier",
                              "start": 658,
                              "end": 659,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "prefix": true
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
                            "argument": {
                              "type": "Identifier",
                              "start": 684,
                              "end": 685,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "prefix": true
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
                    "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 711,
                      "end": 725,
                      "decorators": [],
                      "name": "toLocaleString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              "argument": {
                "type": "UnaryExpression",
                "start": 742,
                "end": 747,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 743,
                  "end": 747,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "start": 766,
                        "end": 785,
                        "callee": {
                          "type": "Identifier",
                          "start": 766,
                          "end": 782,
                          "decorators": [],
                          "name": "isArrayOfStrings",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 783,
                            "end": 784,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    ],
                    "optional": false
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 798,
                        "end": 799,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 801,
                      "end": 807,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              "argument": {
                "type": "UnaryExpression",
                "start": 824,
                "end": 829,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 825,
                  "end": 829,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                      "decorators": [],
                      "name": "assertIsArrayOfStrings",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 864,
                        "end": 865,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 878,
                        "end": 879,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 881,
                      "end": 887,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              "argument": {
                "type": "UnaryExpression",
                "start": 904,
                "end": 909,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 905,
                  "end": 909,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                      "decorators": [],
                      "name": "assertIsArrayOfStrings",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 944,
                        "end": 949,
                        "value": false,
                        "raw": "false"
                      }
                    ],
                    "optional": false
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
              "argument": {
                "type": "UnaryExpression",
                "start": 978,
                "end": 983,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 979,
                  "end": 983,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
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
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 1008,
                            "end": 1017,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
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
                            "argument": {
                              "type": "Identifier",
                              "start": 1028,
                              "end": 1029,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "prefix": true
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
                    "optional": false
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
                      "decorators": [],
                      "name": "assertDefined",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1101,
                        "end": 1102,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
              "argument": {
                "type": "UnaryExpression",
                "start": 1142,
                "end": 1147,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 1143,
                  "end": 1147,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1166,
                        "end": 1171,
                        "value": false,
                        "raw": "false"
                      }
                    ],
                    "optional": false
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
              "argument": {
                "type": "UnaryExpression",
                "start": 1216,
                "end": 1221,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 1217,
                  "end": 1221,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
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
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 1255,
                            "end": 1264,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "optional": false
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1303,
      "end": 1546,
      "id": {
        "type": "Identifier",
        "start": 1312,
        "end": 1315,
        "decorators": [],
        "name": "f02",
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
          "start": 1316,
          "end": 1337,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
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
              "argument": {
                "type": "UnaryExpression",
                "start": 1350,
                "end": 1355,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 1351,
                  "end": 1355,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1374,
                        "end": 1375,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1388,
                      "end": 1394,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              "argument": {
                "type": "UnaryExpression",
                "start": 1411,
                "end": 1416,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 1412,
                  "end": 1416,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 1435,
                        "end": 1450,
                        "left": {
                          "type": "Identifier",
                          "start": 1435,
                          "end": 1436,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "start": 1441,
                          "end": 1450,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1463,
                      "end": 1469,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              "argument": {
                "type": "UnaryExpression",
                "start": 1486,
                "end": 1491,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 1487,
                  "end": 1491,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                      "decorators": [],
                      "name": "assertDefined",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1517,
                        "end": 1518,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1531,
                      "end": 1537,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1548,
      "end": 1659,
      "id": {
        "type": "Identifier",
        "start": 1557,
        "end": 1560,
        "decorators": [],
        "name": "f03",
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
          "start": 1561,
          "end": 1582,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        },
        {
          "type": "Identifier",
          "start": 1584,
          "end": 1625,
          "decorators": [],
          "name": "assert",
          "optional": false,
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
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1598,
                    "end": 1607,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1600,
                      "end": 1607
                    }
                  }
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
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": true,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "assert",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1640,
                  "end": 1641,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1650,
                "end": 1656,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1661,
      "end": 1854,
      "id": {
        "type": "Identifier",
        "start": 1671,
        "end": 1676,
        "decorators": [],
        "name": "Debug",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "assert",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1714,
                  "end": 1728,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1719,
                    "end": 1728,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1721,
                      "end": 1728
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1730,
                  "end": 1746,
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1738,
                    "end": 1746,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1740,
                      "end": 1746
                    }
                  }
                }
              ],
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
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": true,
                  "typeAnnotation": null
                }
              },
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "assertDefined",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
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
                  "start": 1809,
                  "end": 1817,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "NonNullable",
                        "optional": false,
                        "typeAnnotation": null
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
                  }
                }
              },
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
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
        "decorators": [],
        "name": "f10",
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
          "start": 1869,
          "end": 1890,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
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
              "argument": {
                "type": "UnaryExpression",
                "start": 1903,
                "end": 1908,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 1904,
                  "end": 1908,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                        "decorators": [],
                        "name": "Debug",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1926,
                        "end": 1932,
                        "decorators": [],
                        "name": "assert",
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
                        "start": 1933,
                        "end": 1934,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1947,
                      "end": 1953,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              "argument": {
                "type": "UnaryExpression",
                "start": 1970,
                "end": 1975,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 1971,
                  "end": 1975,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                        "decorators": [],
                        "name": "Debug",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1993,
                        "end": 1999,
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 2000,
                        "end": 2015,
                        "left": {
                          "type": "Identifier",
                          "start": 2000,
                          "end": 2001,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "start": 2006,
                          "end": 2015,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2028,
                      "end": 2034,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              "argument": {
                "type": "UnaryExpression",
                "start": 2051,
                "end": 2056,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 2052,
                  "end": 2056,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                        "decorators": [],
                        "name": "Debug",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2074,
                        "end": 2087,
                        "decorators": [],
                        "name": "assertDefined",
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
                        "start": 2088,
                        "end": 2089,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2102,
                      "end": 2108,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              "argument": {
                "type": "UnaryExpression",
                "start": 2125,
                "end": 2130,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 2126,
                  "end": 2130,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
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
                        "decorators": [],
                        "name": "Debug",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2148,
                        "end": 2154,
                        "decorators": [],
                        "name": "assert",
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
                        "start": 2155,
                        "end": 2160,
                        "value": false,
                        "raw": "false"
                      }
                    ],
                    "optional": false
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2199,
      "end": 2943,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2205,
        "end": 2209,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2210,
        "end": 2943,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2216,
            "end": 2315,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2216,
              "end": 2222,
              "decorators": [],
              "name": "assert",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2222,
              "end": 2315,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2223,
                  "end": 2237,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2228,
                    "end": 2237,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 2230,
                      "end": 2237
                    }
                  }
                }
              ],
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
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": true,
                  "typeAnnotation": null
                }
              },
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
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
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
            "start": 2320,
            "end": 2390,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2320,
              "end": 2327,
              "decorators": [],
              "name": "isTest2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2327,
              "end": 2390,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                        "decorators": [],
                        "name": "Test2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
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
                        "decorators": [],
                        "name": "Test2",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
            "start": 2395,
            "end": 2511,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2395,
              "end": 2408,
              "decorators": [],
              "name": "assertIsTest2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2408,
              "end": 2511,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                        "decorators": [],
                        "name": "Test2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
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
                        "decorators": [],
                        "name": "Test2",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
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
            "start": 2516,
            "end": 2604,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2516,
              "end": 2526,
              "decorators": [],
              "name": "assertThis",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2526,
              "end": 2604,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
              },
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
                      "argument": {
                        "type": "ThisExpression",
                        "start": 2558,
                        "end": 2562
                      },
                      "prefix": true
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
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
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
            "start": 2609,
            "end": 2663,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2609,
              "end": 2612,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2612,
              "end": 2663,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "assertThis",
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
            "start": 2668,
            "end": 2859,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2668,
              "end": 2671,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2671,
              "end": 2859,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2672,
                  "end": 2682,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2673,
                    "end": 2682,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 2675,
                      "end": 2682
                    }
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                            "argument": {
                              "type": "Identifier",
                              "start": 2713,
                              "end": 2714,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "prefix": true
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
                      "optional": false
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2740,
                        "end": 2746,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
                          "decorators": [],
                          "name": "isTest2",
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
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
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
                          "decorators": [],
                          "name": "assertIsTest2",
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
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
          },
          {
            "type": "MethodDefinition",
            "start": 2864,
            "end": 2941,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2864,
              "end": 2867,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2867,
              "end": 2941,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2868,
                  "end": 2877,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2869,
                    "end": 2877,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2871,
                      "end": 2877
                    }
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "assert",
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
                          "start": 2901,
                          "end": 2906,
                          "value": false,
                          "raw": "false"
                        }
                      ],
                      "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
    },
    {
      "type": "ClassDeclaration",
      "start": 2945,
      "end": 2984,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2951,
        "end": 2956,
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2965,
        "end": 2969,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2970,
        "end": 2984,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2976,
            "end": 2982,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2976,
              "end": 2977,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 2980,
              "end": 2981,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2986,
      "end": 3190,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2992,
        "end": 2999,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 3008,
        "end": 3012,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 3013,
        "end": 3190,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3019,
            "end": 3105,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3019,
              "end": 3022,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3022,
              "end": 3105,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3023,
                  "end": 3033,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3024,
                    "end": 3033,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3026,
                      "end": 3033
                    }
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                            "argument": {
                              "type": "Identifier",
                              "start": 3065,
                              "end": 3066,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "prefix": true
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
                      "optional": false
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3092,
                        "end": 3098,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
          },
          {
            "type": "MethodDefinition",
            "start": 3110,
            "end": 3188,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3110,
              "end": 3113,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3113,
              "end": 3188,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3114,
                  "end": 3123,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3115,
                    "end": 3123,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3117,
                      "end": 3123
                    }
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "assert",
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
                          "start": 3148,
                          "end": 3153,
                          "value": false,
                          "raw": "false"
                        }
                      ],
                      "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 3192,
      "end": 3365,
      "id": {
        "type": "Identifier",
        "start": 3201,
        "end": 3204,
        "decorators": [],
        "name": "f11",
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
          "start": 3205,
          "end": 3218,
          "decorators": [],
          "name": "items",
          "optional": false,
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
                  "decorators": [],
                  "name": "Test",
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
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3235,
                  "end": 3239,
                  "id": {
                    "type": "Identifier",
                    "start": 3235,
                    "end": 3239,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 3243,
              "end": 3248,
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null
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
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3269,
                        "end": 3276,
                        "decorators": [],
                        "name": "isTest2",
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
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3299,
                            "end": 3300,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3325,
                        "end": 3338,
                        "decorators": [],
                        "name": "assertIsTest2",
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
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3355,
                      "end": 3356,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3390,
      "end": 3438,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3402,
          "end": 3437,
          "id": {
            "type": "Identifier",
            "start": 3402,
            "end": 3437,
            "decorators": [],
            "name": "Q1",
            "optional": false,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3412,
                      "end": 3421,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 3414,
                        "end": 3421
                      }
                    }
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3439,
      "end": 3485,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3451,
          "end": 3484,
          "id": {
            "type": "Identifier",
            "start": 3451,
            "end": 3484,
            "decorators": [],
            "name": "Q2",
            "optional": false,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3461,
                      "end": 3470,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3463,
                        "end": 3470
                      }
                    }
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "asserts": true,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3486,
      "end": 3542,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3498,
          "end": 3541,
          "id": {
            "type": "Identifier",
            "start": 3498,
            "end": 3541,
            "decorators": [],
            "name": "Q3",
            "optional": false,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3508,
                      "end": 3517,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 3510,
                        "end": 3517
                      }
                    }
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 3544,
      "end": 3703,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3558,
        "end": 3561,
        "decorators": [],
        "name": "Wat",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 3562,
        "end": 3703,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3568,
            "end": 3593,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3572,
              "end": 3574,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3574,
              "end": 3593,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
              },
              "body": null,
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3598,
            "end": 3624,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3602,
              "end": 3604,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3604,
              "end": 3624,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3605,
                  "end": 3622,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3629,
            "end": 3662,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3633,
              "end": 3635,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3635,
              "end": 3662,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
              },
              "body": null,
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3667,
            "end": 3701,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3671,
              "end": 3673,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3673,
              "end": 3701,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3674,
                  "end": 3699,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
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
      "start": 3705,
      "end": 4048,
      "id": {
        "type": "Identifier",
        "start": 3714,
        "end": 3717,
        "decorators": [],
        "name": "f20",
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
          "start": 3718,
          "end": 3728,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3719,
            "end": 3728,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 3721,
              "end": 3728
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3730,
        "end": 4048,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3736,
            "end": 3788,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3742,
                "end": 3788,
                "id": {
                  "type": "Identifier",
                  "start": 3742,
                  "end": 3748,
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 3751,
                  "end": 3788,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3752,
                      "end": 3766,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3757,
                        "end": 3766,
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 3759,
                          "end": 3766
                        }
                      }
                    }
                  ],
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
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "asserts": true,
                      "typeAnnotation": null
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 3786,
                    "end": 3788,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
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
                "decorators": [],
                "name": "assert",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
                    "argument": {
                      "type": "Identifier",
                      "start": 3807,
                      "end": 3808,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
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
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 3838,
            "end": 3857,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3844,
                "end": 3856,
                "id": {
                  "type": "Identifier",
                  "start": 3844,
                  "end": 3845,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 3864,
                  "end": 3865,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "typeArguments": null,
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
                    "argument": {
                      "type": "Identifier",
                      "start": 3874,
                      "end": 3875,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
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
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 3905,
            "end": 3927,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3911,
                "end": 3926,
                "id": {
                  "type": "Identifier",
                  "start": 3911,
                  "end": 3913,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 3916,
                  "end": 3926,
                  "callee": {
                    "type": "Identifier",
                    "start": 3920,
                    "end": 3924,
                    "decorators": [],
                    "name": "Test",
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
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3935,
                  "end": 3941,
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
                    "argument": {
                      "type": "Identifier",
                      "start": 3949,
                      "end": 3950,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
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
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 3980,
            "end": 4008,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3986,
                "end": 4007,
                "id": {
                  "type": "Identifier",
                  "start": 3986,
                  "end": 3994,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
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
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "start": 3997,
                  "end": 4007,
                  "callee": {
                    "type": "Identifier",
                    "start": 4001,
                    "end": 4005,
                    "decorators": [],
                    "name": "Test",
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
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4016,
                  "end": 4022,
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
                    "argument": {
                      "type": "Identifier",
                      "start": 4030,
                      "end": 4031,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
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
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4072,
      "end": 4151,
      "id": {
        "type": "Identifier",
        "start": 4082,
        "end": 4087,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "good",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isGood",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "GoodThing",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "GoodThing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "good",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "example1",
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
          "start": 4212,
          "end": 4227,
          "decorators": [],
          "name": "things",
          "optional": false,
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
                  "decorators": [],
                  "name": "Thing",
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
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4244,
                  "end": 4249,
                  "id": {
                    "type": "Identifier",
                    "start": 4244,
                    "end": 4249,
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 4253,
              "end": 4259,
              "decorators": [],
              "name": "things",
              "optional": false,
              "typeAnnotation": null
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
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4277,
                        "end": 4283,
                        "decorators": [],
                        "name": "isGood",
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
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4301,
                      "end": 4305,
                      "decorators": [],
                      "name": "good",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 4316,
      "end": 4462,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4322,
        "end": 4346,
        "decorators": [],
        "name": "TestPropertyDeclaration1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 4347,
        "end": 4462,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4351,
            "end": 4398,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4351,
              "end": 4357,
              "decorators": [],
              "name": "assert",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 4360,
              "end": 4397,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4361,
                  "end": 4375,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4366,
                    "end": 4375,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4368,
                      "end": 4375
                    }
                  }
                }
              ],
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
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": true,
                  "typeAnnotation": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 4395,
                "end": 4397,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4401,
            "end": 4460,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4401,
              "end": 4406,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 4406,
              "end": 4460,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4407,
                  "end": 4417,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4408,
                    "end": 4417,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4410,
                      "end": 4417
                    }
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "assert",
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
                          "start": 4437,
                          "end": 4438,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
    },
    {
      "type": "ClassDeclaration",
      "start": 4464,
      "end": 4610,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4470,
        "end": 4494,
        "decorators": [],
        "name": "TestPropertyDeclaration2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 4495,
        "end": 4610,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4499,
            "end": 4549,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4499,
              "end": 4505,
              "decorators": [],
              "name": "assert",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4509,
                      "end": 4518,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 4511,
                        "end": 4518
                      }
                    }
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
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "asserts": true,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 4535,
              "end": 4548,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4536,
                  "end": 4541,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 4546,
                "end": 4548,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4552,
            "end": 4608,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4552,
              "end": 4557,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 4557,
              "end": 4608,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4558,
                  "end": 4568,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4559,
                    "end": 4568,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4561,
                      "end": 4568
                    }
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "assert",
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
                          "start": 4588,
                          "end": 4589,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
    },
    {
      "type": "ClassDeclaration",
      "start": 4612,
      "end": 4709,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4626,
        "end": 4660,
        "decorators": [],
        "name": "ParentInheritedPropertyDeclaration",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 4661,
        "end": 4709,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4665,
            "end": 4707,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4665,
              "end": 4671,
              "decorators": [],
              "name": "assert",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4679,
                      "end": 4688,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 4681,
                        "end": 4688
                      }
                    }
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
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "asserts": true,
                    "typeAnnotation": null
                  }
                }
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 4710,
      "end": 4855,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4716,
        "end": 4749,
        "decorators": [],
        "name": "ChildInheritedPropertyDeclaration",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 4758,
        "end": 4792,
        "decorators": [],
        "name": "ParentInheritedPropertyDeclaration",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 4793,
        "end": 4855,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4797,
            "end": 4853,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4797,
              "end": 4802,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 4802,
              "end": 4853,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4803,
                  "end": 4813,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4804,
                    "end": 4813,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4806,
                      "end": 4813
                    }
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "assert",
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
                          "start": 4833,
                          "end": 4834,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4857,
      "end": 4937,
      "id": {
        "type": "Identifier",
        "start": 4867,
        "end": 4888,
        "decorators": [],
        "name": "TestPropertySignature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "assert",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4907,
                      "end": 4916,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 4909,
                        "end": 4916
                      }
                    }
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
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "testPropertySignature",
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
          "start": 4972,
          "end": 4996,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "TestPropertySignature",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 5000,
          "end": 5010,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5001,
            "end": 5010,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5003,
              "end": 5010
            }
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 5020,
                  "end": 5026,
                  "decorators": [],
                  "name": "assert",
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
                  "start": 5027,
                  "end": 5028,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 5044,
      "end": 5160,
      "id": {
        "type": "Identifier",
        "start": 5053,
        "end": 5079,
        "decorators": [],
        "name": "testFunctionThisParameter1",
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
          "start": 5083,
          "end": 5110,
          "decorators": [],
          "name": "this",
          "optional": false,
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
                "decorators": [],
                "name": "TestPropertySignature",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 5114,
          "end": 5124,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5115,
            "end": 5124,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5117,
              "end": 5124
            }
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "assert",
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
                  "start": 5144,
                  "end": 5145,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 5162,
      "end": 5236,
      "id": {
        "type": "Identifier",
        "start": 5172,
        "end": 5191,
        "decorators": [],
        "name": "TestMethodSignature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "assert",
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
                "start": 5203,
                "end": 5217,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5208,
                  "end": 5217,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 5210,
                    "end": 5217
                  }
                }
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
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
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
        "decorators": [],
        "name": "testMethodSignature",
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
          "start": 5269,
          "end": 5291,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "TestMethodSignature",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 5295,
          "end": 5305,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5296,
            "end": 5305,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5298,
              "end": 5305
            }
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 5315,
                  "end": 5321,
                  "decorators": [],
                  "name": "assert",
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
                  "start": 5322,
                  "end": 5323,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 5339,
      "end": 5453,
      "id": {
        "type": "Identifier",
        "start": 5348,
        "end": 5374,
        "decorators": [],
        "name": "testFunctionThisParameter2",
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
          "start": 5378,
          "end": 5403,
          "decorators": [],
          "name": "this",
          "optional": false,
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
                "decorators": [],
                "name": "TestMethodSignature",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 5407,
          "end": 5417,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5408,
            "end": 5417,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5410,
              "end": 5417
            }
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "assert",
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
                  "start": 5437,
                  "end": 5438,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
