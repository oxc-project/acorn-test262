__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 155,
  "end": 1145,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 155,
      "end": 210,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 187,
        "end": 210,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 193,
            "end": 208,
            "argument": {
              "type": "CallExpression",
              "start": 200,
              "end": 207,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 202,
                  "end": 206,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
        "start": 164,
        "end": 167,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 171,
          "end": 185,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 172,
            "end": 185,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 174,
              "end": 185,
              "params": [
                {
                  "type": "Identifier",
                  "start": 175,
                  "end": 179,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 178,
                      "end": 179,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 181,
                "end": 185,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 184,
                  "end": 185,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 185,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 167,
        "end": 170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 168,
            "end": 169,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
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
      "type": "VariableDeclaration",
      "start": 212,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 240,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 220,
            "end": 240,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 224,
                "end": 239,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 237,
                  "end": 239,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 228,
                    "end": 232,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 229,
                      "end": 232,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 231,
                        "end": 232,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 224,
                  "end": 227,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 225,
                      "end": 226,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 225,
                        "end": 226,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 220,
              "end": 223,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 248,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 285,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 254,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 257,
            "end": 285,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 269,
                "end": 284,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 282,
                  "end": 284,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 273,
                    "end": 277,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 274,
                      "end": 277,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 276,
                        "end": 277,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 277,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 269,
                  "end": 272,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 270,
                      "end": 271,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 271,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 257,
              "end": 260,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 260,
              "end": 268,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 261,
                  "end": 267
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 319,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 304,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 307,
            "end": 319,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 311,
                "end": 318,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 316,
                  "end": 318,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 307,
              "end": 310,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 328,
      "end": 392,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 371,
        "end": 392,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 377,
            "end": 390,
            "argument": {
              "type": "CallExpression",
              "start": 384,
              "end": 389,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 384,
                "end": 386,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null
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
        "start": 337,
        "end": 341,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 348,
          "end": 352,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 349,
            "end": 352,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 351,
              "end": 352,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 351,
                "end": 352,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 354,
          "end": 369,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 356,
            "end": 369,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 358,
              "end": 369,
              "params": [
                {
                  "type": "Identifier",
                  "start": 359,
                  "end": 363,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 360,
                    "end": 363,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 362,
                      "end": 363,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 362,
                        "end": 363,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 365,
                "end": 369,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 368,
                  "end": 369,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 341,
        "end": 347,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 342,
            "end": 343,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 342,
              "end": 343,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 345,
            "end": 346,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 445,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 444,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 400,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 403,
            "end": 444,
            "arguments": [
              {
                "type": "Literal",
                "start": 408,
                "end": 409,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "FunctionExpression",
                "start": 411,
                "end": 443,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 430,
                  "end": 443,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 432,
                      "end": 441,
                      "argument": {
                        "type": "Literal",
                        "start": 439,
                        "end": 441,
                        "raw": "''",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 424,
                    "end": 428,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 425,
                      "end": 428,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 427,
                        "end": 428,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 427,
                          "end": 428,
                          "decorators": [],
                          "name": "Z",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 420,
                  "end": 423,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 421,
                      "end": 422,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 421,
                        "end": 422,
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 403,
              "end": 407,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 524,
      "end": 552,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 528,
          "end": 551,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 528,
            "end": 530,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 533,
            "end": 551,
            "arguments": [
              {
                "type": "Literal",
                "start": 538,
                "end": 539,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 541,
                "end": 550,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 548,
                  "end": 550,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 542,
                    "end": 543,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 533,
              "end": 537,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 563,
      "end": 613,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 567,
          "end": 612,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 567,
            "end": 569,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 572,
            "end": 612,
            "arguments": [
              {
                "type": "Literal",
                "start": 593,
                "end": 595,
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 597,
                "end": 611,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 610,
                  "end": 611,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 601,
                    "end": 605,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 602,
                      "end": 605,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 604,
                        "end": 605,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 605,
                          "decorators": [],
                          "name": "Z",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 597,
                  "end": 600,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 598,
                      "end": 599,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 598,
                        "end": 599,
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 572,
              "end": 576,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 576,
              "end": 592,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 577,
                  "end": 583
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 585,
                  "end": 591
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 615,
      "end": 685,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 664,
        "end": 685,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 670,
            "end": 683,
            "argument": {
              "type": "CallExpression",
              "start": 677,
              "end": 682,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 680,
                  "end": 681,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 677,
                "end": 679,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null
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
        "start": 624,
        "end": 628,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 635,
          "end": 639,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 636,
            "end": 639,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 638,
              "end": 639,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 638,
                "end": 639,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 641,
          "end": 656,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 643,
            "end": 656,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 645,
              "end": 656,
              "params": [
                {
                  "type": "Identifier",
                  "start": 646,
                  "end": 650,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 647,
                    "end": 650,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 649,
                      "end": 650,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 649,
                        "end": 650,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 652,
                "end": 656,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 655,
                  "end": 656,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 655,
                    "end": 656,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 658,
          "end": 662,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 659,
            "end": 662,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 661,
              "end": 662,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 661,
                "end": 662,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 628,
        "end": 634,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 629,
            "end": 630,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 629,
              "end": 630,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 632,
            "end": 633,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 687,
      "end": 725,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 691,
          "end": 724,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 691,
            "end": 693,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 696,
            "end": 724,
            "arguments": [
              {
                "type": "Literal",
                "start": 701,
                "end": 702,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 704,
                "end": 719,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 717,
                  "end": 719,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 708,
                    "end": 712,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 709,
                      "end": 712,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 711,
                        "end": 712,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 711,
                          "end": 712,
                          "decorators": [],
                          "name": "Z",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 704,
                  "end": 707,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 705,
                      "end": 706,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 705,
                        "end": 706,
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              },
              {
                "type": "Literal",
                "start": 721,
                "end": 723,
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 696,
              "end": 700,
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
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 737,
      "end": 785,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 741,
          "end": 784,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 741,
            "end": 743,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 746,
            "end": 784,
            "arguments": [
              {
                "type": "Literal",
                "start": 751,
                "end": 752,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "FunctionExpression",
                "start": 754,
                "end": 780,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 767,
                  "end": 780,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 769,
                      "end": 778,
                      "argument": {
                        "type": "Literal",
                        "start": 776,
                        "end": 778,
                        "raw": "''",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 764,
                    "end": 765,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 782,
                "end": 783,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 746,
              "end": 750,
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
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 795,
      "end": 843,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 799,
          "end": 842,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 799,
            "end": 801,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 804,
            "end": 842,
            "arguments": [
              {
                "type": "Literal",
                "start": 825,
                "end": 826,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 828,
                "end": 837,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 835,
                  "end": 837,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 829,
                    "end": 830,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 839,
                "end": 841,
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 804,
              "end": 808,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 808,
              "end": 824,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 809,
                  "end": 815
                },
                {
                  "type": "TSStringKeyword",
                  "start": 817,
                  "end": 823
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 855,
      "end": 1145,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 888,
        "end": 1145,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 894,
            "end": 926,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 898,
                "end": 925,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 898,
                  "end": 901,
                  "decorators": [],
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 904,
                  "end": 925,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 909,
                      "end": 910,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 912,
                      "end": 924,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 922,
                        "end": 924,
                        "raw": "''",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 913,
                          "end": 917,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 914,
                            "end": 917,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 916,
                              "end": 917,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 916,
                                "end": 917,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 904,
                    "end": 908,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 940,
            "end": 969,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 944,
                "end": 968,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 944,
                  "end": 947,
                  "decorators": [],
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 950,
                  "end": 968,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 955,
                      "end": 956,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 958,
                      "end": 967,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 965,
                        "end": 967,
                        "raw": "''",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 959,
                          "end": 960,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 950,
                    "end": 954,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 985,
            "end": 1021,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 989,
                "end": 1020,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 989,
                  "end": 992,
                  "decorators": [],
                  "name": "r11",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 995,
                  "end": 1020,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1000,
                      "end": 1001,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1003,
                      "end": 1015,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 1013,
                        "end": 1015,
                        "raw": "''",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1004,
                          "end": 1008,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1005,
                            "end": 1008,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1007,
                              "end": 1008,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1007,
                                "end": 1008,
                                "decorators": [],
                                "name": "T",
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
                      "type": "Literal",
                      "start": 1017,
                      "end": 1019,
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 995,
                    "end": 999,
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
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1035,
            "end": 1071,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1039,
                "end": 1070,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1043,
                  "decorators": [],
                  "name": "r11b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1046,
                  "end": 1070,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1051,
                      "end": 1052,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1054,
                      "end": 1066,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 1064,
                        "end": 1066,
                        "raw": "''",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1055,
                          "end": 1059,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1056,
                            "end": 1059,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1058,
                              "end": 1059,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1058,
                                "end": 1059,
                                "decorators": [],
                                "name": "T",
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
                      "type": "Literal",
                      "start": 1068,
                      "end": 1069,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1046,
                    "end": 1050,
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
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1085,
            "end": 1134,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1089,
                "end": 1133,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1092,
                  "decorators": [],
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1095,
                  "end": 1133,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1100,
                      "end": 1101,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "FunctionExpression",
                      "start": 1103,
                      "end": 1129,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1116,
                        "end": 1129,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1118,
                            "end": 1127,
                            "argument": {
                              "type": "Literal",
                              "start": 1125,
                              "end": 1127,
                              "raw": "''",
                              "value": "",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1113,
                          "end": 1114,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    },
                    {
                      "type": "Literal",
                      "start": 1131,
                      "end": 1132,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1095,
                    "end": 1099,
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
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 864,
        "end": 869,
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 876,
          "end": 880,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 877,
            "end": 880,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 879,
              "end": 880,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 879,
                "end": 880,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 882,
          "end": 886,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 883,
            "end": 886,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 885,
              "end": 886,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 885,
                "end": 886,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 869,
        "end": 875,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 870,
            "end": 871,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 870,
              "end": 871,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 873,
            "end": 874,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 873,
              "end": 874,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
