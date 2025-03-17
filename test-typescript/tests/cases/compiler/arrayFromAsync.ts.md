__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1320,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 11,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 37,
        "name": "asyncGen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 98,
        "body": [
          {
            "type": "ForStatement",
            "start": 48,
            "end": 94,
            "init": {
              "type": "VariableDeclaration",
              "start": 53,
              "end": 62,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 57,
                  "end": 62,
                  "id": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 61,
                    "end": 62,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 64,
              "end": 69,
              "left": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 71,
              "end": 74,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "ExpressionStatement",
              "start": 82,
              "end": 94,
              "expression": {
                "type": "YieldExpression",
                "start": 82,
                "end": 93,
                "delegate": false,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 88,
                  "end": 93,
                  "left": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "start": 92,
                    "end": 93,
                    "value": 2,
                    "raw": "2"
                  }
                }
              },
              "directive": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 122,
        "name": "genPromises",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 124,
          "end": 125,
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 208,
        "body": [
          {
            "type": "ForStatement",
            "start": 133,
            "end": 206,
            "init": {
              "type": "VariableDeclaration",
              "start": 138,
              "end": 147,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 142,
                  "end": 147,
                  "id": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 146,
                    "end": 147,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 149,
              "end": 154,
              "left": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 153,
                "end": 154,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 156,
              "end": 159,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 161,
              "end": 206,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 171,
                  "end": 200,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 171,
                    "end": 199,
                    "delegate": false,
                    "argument": {
                      "type": "CallExpression",
                      "start": 177,
                      "end": 199,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 177,
                        "end": 192,
                        "object": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 184,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 192,
                          "name": "resolve",
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
                          "start": 193,
                          "end": 198,
                          "left": {
                            "type": "Identifier",
                            "start": 193,
                            "end": 194,
                            "name": "i",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "*",
                          "right": {
                            "type": "Literal",
                            "start": 197,
                            "end": 198,
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
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
      "start": 210,
      "end": 352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 223,
            "name": "arrLike",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 226,
            "end": 352,
            "properties": [
              {
                "type": "Property",
                "start": 232,
                "end": 253,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 232,
                  "end": 233,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "CallExpression",
                  "start": 235,
                  "end": 253,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 235,
                    "end": 250,
                    "object": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 242,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 250,
                      "name": "resolve",
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
                      "start": 251,
                      "end": 252,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 259,
                "end": 280,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 259,
                  "end": 260,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "CallExpression",
                  "start": 262,
                  "end": 280,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 262,
                    "end": 277,
                    "object": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 269,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 277,
                      "name": "resolve",
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
                      "start": 278,
                      "end": 279,
                      "value": 2,
                      "raw": "2"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 286,
                "end": 307,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 286,
                  "end": 287,
                  "value": 2,
                  "raw": "2"
                },
                "value": {
                  "type": "CallExpression",
                  "start": 289,
                  "end": 307,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 289,
                    "end": 304,
                    "object": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 296,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 304,
                      "name": "resolve",
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
                      "start": 305,
                      "end": 306,
                      "value": 4,
                      "raw": "4"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 313,
                "end": 334,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 313,
                  "end": 314,
                  "value": 3,
                  "raw": "3"
                },
                "value": {
                  "type": "CallExpression",
                  "start": 316,
                  "end": 334,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 316,
                    "end": 331,
                    "object": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 323,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 324,
                      "end": 331,
                      "name": "resolve",
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
                      "start": 332,
                      "end": 333,
                      "value": 6,
                      "raw": "6"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 340,
                "end": 349,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 346,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 348,
                  "end": 349,
                  "value": 4,
                  "raw": "4"
                },
                "kind": "init",
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
      "type": "VariableDeclaration",
      "start": 354,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 374,
            "name": "arr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 374,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 366,
                "end": 374,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 366,
                  "end": 372
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 377,
            "end": 379,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 381,
      "end": 434,
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "start": 392,
        "end": 399,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 398,
            "end": 399,
            "id": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 403,
        "end": 414,
        "callee": {
          "type": "Identifier",
          "start": 403,
          "end": 411,
          "name": "asyncGen",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 412,
            "end": 413,
            "value": 4,
            "raw": "4"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 416,
        "end": 434,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 420,
            "end": 432,
            "expression": {
              "type": "CallExpression",
              "start": 420,
              "end": 431,
              "callee": {
                "type": "MemberExpression",
                "start": 420,
                "end": 428,
                "object": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 423,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 428,
                  "name": "push",
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
                  "start": 429,
                  "end": 430,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 436,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 483,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 450,
            "name": "sameArr1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 453,
            "end": 483,
            "argument": {
              "type": "CallExpression",
              "start": 459,
              "end": 483,
              "callee": {
                "type": "MemberExpression",
                "start": 459,
                "end": 474,
                "object": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 464,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 474,
                  "name": "fromAsync",
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
                  "start": 475,
                  "end": 482,
                  "name": "arrLike",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 485,
      "end": 606,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 491,
          "end": 605,
          "id": {
            "type": "Identifier",
            "start": 491,
            "end": 499,
            "name": "sameArr2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 502,
            "end": 605,
            "argument": {
              "type": "CallExpression",
              "start": 508,
              "end": 605,
              "callee": {
                "type": "MemberExpression",
                "start": 508,
                "end": 523,
                "object": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 513,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 523,
                  "name": "fromAsync",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 524,
                  "end": 604,
                  "elements": [
                    {
                      "type": "CallExpression",
                      "start": 525,
                      "end": 543,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 525,
                        "end": 540,
                        "object": {
                          "type": "Identifier",
                          "start": 525,
                          "end": 532,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 533,
                          "end": 540,
                          "name": "resolve",
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
                          "start": 541,
                          "end": 542,
                          "value": 0,
                          "raw": "0"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    {
                      "type": "CallExpression",
                      "start": 545,
                      "end": 563,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 545,
                        "end": 560,
                        "object": {
                          "type": "Identifier",
                          "start": 545,
                          "end": 552,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 560,
                          "name": "resolve",
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
                          "start": 561,
                          "end": 562,
                          "value": 2,
                          "raw": "2"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    {
                      "type": "CallExpression",
                      "start": 565,
                      "end": 583,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 565,
                        "end": 580,
                        "object": {
                          "type": "Identifier",
                          "start": 565,
                          "end": 572,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 573,
                          "end": 580,
                          "name": "resolve",
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
                          "start": 581,
                          "end": 582,
                          "value": 4,
                          "raw": "4"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    {
                      "type": "CallExpression",
                      "start": 585,
                      "end": 603,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 585,
                        "end": 600,
                        "object": {
                          "type": "Identifier",
                          "start": 585,
                          "end": 592,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 593,
                          "end": 600,
                          "name": "resolve",
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
                          "start": 601,
                          "end": 602,
                          "value": 6,
                          "raw": "6"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 607,
      "end": 662,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 661,
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 621,
            "name": "sameArr3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 624,
            "end": 661,
            "argument": {
              "type": "CallExpression",
              "start": 630,
              "end": 661,
              "callee": {
                "type": "MemberExpression",
                "start": 630,
                "end": 645,
                "object": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 635,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 645,
                  "name": "fromAsync",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 646,
                  "end": 660,
                  "callee": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 657,
                    "name": "genPromises",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 658,
                      "end": 659,
                      "value": 4,
                      "raw": "4"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 663,
      "end": 715,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 669,
          "end": 714,
          "id": {
            "type": "Identifier",
            "start": 669,
            "end": 677,
            "name": "sameArr4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 680,
            "end": 714,
            "argument": {
              "type": "CallExpression",
              "start": 686,
              "end": 714,
              "callee": {
                "type": "MemberExpression",
                "start": 686,
                "end": 701,
                "object": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 691,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 701,
                  "name": "fromAsync",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 702,
                  "end": 713,
                  "callee": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 710,
                    "name": "asyncGen",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 711,
                      "end": 712,
                      "value": 4,
                      "raw": "4"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 717,
      "end": 737,
      "id": {
        "type": "Identifier",
        "start": 726,
        "end": 730,
        "name": "Data",
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
          "start": 732,
          "end": 733,
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 735,
        "end": 737,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 738,
      "end": 771,
      "expression": {
        "type": "AssignmentExpression",
        "start": 738,
        "end": 770,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 738,
          "end": 752,
          "object": {
            "type": "Identifier",
            "start": 738,
            "end": 742,
            "name": "Data",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 743,
            "end": 752,
            "name": "fromAsync",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 755,
          "end": 770,
          "object": {
            "type": "Identifier",
            "start": 755,
            "end": 760,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 761,
            "end": 770,
            "name": "fromAsync",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 772,
      "end": 823,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 778,
          "end": 822,
          "id": {
            "type": "Identifier",
            "start": 778,
            "end": 786,
            "name": "sameArr5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 789,
            "end": 822,
            "argument": {
              "type": "CallExpression",
              "start": 795,
              "end": 822,
              "callee": {
                "type": "MemberExpression",
                "start": 795,
                "end": 809,
                "object": {
                  "type": "Identifier",
                  "start": 795,
                  "end": 799,
                  "name": "Data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 800,
                  "end": 809,
                  "name": "fromAsync",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 810,
                  "end": 821,
                  "callee": {
                    "type": "Identifier",
                    "start": 810,
                    "end": 818,
                    "name": "asyncGen",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 819,
                      "end": 820,
                      "value": 4,
                      "raw": "4"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 825,
      "end": 889,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 831,
          "end": 888,
          "id": {
            "type": "Identifier",
            "start": 831,
            "end": 838,
            "name": "mapArr1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 841,
            "end": 888,
            "argument": {
              "type": "CallExpression",
              "start": 847,
              "end": 888,
              "callee": {
                "type": "MemberExpression",
                "start": 847,
                "end": 862,
                "object": {
                  "type": "Identifier",
                  "start": 847,
                  "end": 852,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 853,
                  "end": 862,
                  "name": "fromAsync",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 863,
                  "end": 874,
                  "callee": {
                    "type": "Identifier",
                    "start": 863,
                    "end": 871,
                    "name": "asyncGen",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 872,
                      "end": 873,
                      "value": 4,
                      "raw": "4"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 876,
                  "end": 887,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 876,
                      "end": 877,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 881,
                    "end": 887,
                    "left": {
                      "type": "Identifier",
                      "start": 881,
                      "end": 882,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "start": 886,
                      "end": 887,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 890,
      "end": 969,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 896,
          "end": 968,
          "id": {
            "type": "Identifier",
            "start": 896,
            "end": 903,
            "name": "mapArr2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 906,
            "end": 968,
            "argument": {
              "type": "CallExpression",
              "start": 912,
              "end": 968,
              "callee": {
                "type": "MemberExpression",
                "start": 912,
                "end": 927,
                "object": {
                  "type": "Identifier",
                  "start": 912,
                  "end": 917,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 927,
                  "name": "fromAsync",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 928,
                  "end": 937,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 929,
                      "end": 930,
                      "value": 0,
                      "raw": "0"
                    },
                    {
                      "type": "Literal",
                      "start": 931,
                      "end": 932,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 933,
                      "end": 934,
                      "value": 4,
                      "raw": "4"
                    },
                    {
                      "type": "Literal",
                      "start": 935,
                      "end": 936,
                      "value": 6,
                      "raw": "6"
                    }
                  ]
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 939,
                  "end": 967,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 939,
                      "end": 940,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "start": 944,
                    "end": 967,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 944,
                      "end": 959,
                      "object": {
                        "type": "Identifier",
                        "start": 944,
                        "end": 951,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 952,
                        "end": 959,
                        "name": "resolve",
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
                        "start": 960,
                        "end": 966,
                        "left": {
                          "type": "Identifier",
                          "start": 960,
                          "end": 961,
                          "name": "v",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "**",
                        "right": {
                          "type": "Literal",
                          "start": 965,
                          "end": 966,
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 970,
      "end": 1032,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 976,
          "end": 1031,
          "id": {
            "type": "Identifier",
            "start": 976,
            "end": 983,
            "name": "mapArr3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 986,
            "end": 1031,
            "argument": {
              "type": "CallExpression",
              "start": 992,
              "end": 1031,
              "callee": {
                "type": "MemberExpression",
                "start": 992,
                "end": 1007,
                "object": {
                  "type": "Identifier",
                  "start": 992,
                  "end": 997,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 998,
                  "end": 1007,
                  "name": "fromAsync",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 1008,
                  "end": 1017,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1009,
                      "end": 1010,
                      "value": 0,
                      "raw": "0"
                    },
                    {
                      "type": "Literal",
                      "start": 1011,
                      "end": 1012,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 1013,
                      "end": 1014,
                      "value": 4,
                      "raw": "4"
                    },
                    {
                      "type": "Literal",
                      "start": 1015,
                      "end": 1016,
                      "value": 6,
                      "raw": "6"
                    }
                  ]
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1019,
                  "end": 1030,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1019,
                      "end": 1020,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 1024,
                    "end": 1030,
                    "left": {
                      "type": "Identifier",
                      "start": 1024,
                      "end": 1025,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "start": 1029,
                      "end": 1030,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1034,
      "end": 1056,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1040,
          "end": 1055,
          "id": {
            "type": "Identifier",
            "start": 1040,
            "end": 1043,
            "name": "err",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1046,
            "end": 1055,
            "callee": {
              "type": "Identifier",
              "start": 1050,
              "end": 1055,
              "name": "Error",
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
      "type": "VariableDeclaration",
      "start": 1057,
      "end": 1117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1063,
          "end": 1116,
          "id": {
            "type": "Identifier",
            "start": 1063,
            "end": 1074,
            "name": "badIterable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1077,
            "end": 1116,
            "properties": [
              {
                "type": "Property",
                "start": 1079,
                "end": 1114,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 1080,
                  "end": 1095,
                  "object": {
                    "type": "Identifier",
                    "start": 1080,
                    "end": 1086,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1087,
                    "end": 1095,
                    "name": "iterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1097,
                  "end": 1114,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1100,
                    "end": 1114,
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "start": 1102,
                        "end": 1112,
                        "argument": {
                          "type": "Identifier",
                          "start": 1108,
                          "end": 1111,
                          "name": "err",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
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
      "type": "VariableDeclaration",
      "start": 1173,
      "end": 1225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1179,
          "end": 1224,
          "id": {
            "type": "Identifier",
            "start": 1179,
            "end": 1187,
            "name": "badArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 1190,
            "end": 1224,
            "argument": {
              "type": "CallExpression",
              "start": 1196,
              "end": 1224,
              "callee": {
                "type": "MemberExpression",
                "start": 1196,
                "end": 1211,
                "object": {
                  "type": "Identifier",
                  "start": 1196,
                  "end": 1201,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1202,
                  "end": 1211,
                  "name": "fromAsync",
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
                  "start": 1212,
                  "end": 1223,
                  "name": "badIterable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1227,
      "end": 1319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1233,
          "end": 1318,
          "id": {
            "type": "Identifier",
            "start": 1233,
            "end": 1248,
            "name": "withIndexResult",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 1251,
            "end": 1318,
            "argument": {
              "type": "CallExpression",
              "start": 1257,
              "end": 1318,
              "callee": {
                "type": "MemberExpression",
                "start": 1257,
                "end": 1272,
                "object": {
                  "type": "Identifier",
                  "start": 1257,
                  "end": 1262,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1272,
                  "name": "fromAsync",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 1273,
                  "end": 1283,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1274,
                      "end": 1277,
                      "value": "a",
                      "raw": "\"a\""
                    },
                    {
                      "type": "Literal",
                      "start": 1279,
                      "end": 1282,
                      "value": "b",
                      "raw": "\"b\""
                    }
                  ]
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1285,
                  "end": 1317,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1286,
                      "end": 1289,
                      "name": "str",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1291,
                      "end": 1296,
                      "name": "index",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "ObjectExpression",
                    "start": 1302,
                    "end": 1316,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1304,
                        "end": 1309,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1304,
                          "end": 1309,
                          "name": "index",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1304,
                          "end": 1309,
                          "name": "index",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 1311,
                        "end": 1314,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1311,
                          "end": 1314,
                          "name": "str",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1311,
                          "end": 1314,
                          "name": "str",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
