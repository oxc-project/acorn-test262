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
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 167,
        "name": "foo",
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
          "start": 171,
          "end": 185,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 172,
            "end": 185,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 174,
              "end": 185,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 175,
                  "end": 179,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 178,
                      "end": 179,
                      "typeName": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 181,
                "end": 185,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 184,
                  "end": 185,
                  "typeName": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 185,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
              "callee": {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 202,
                  "end": 206,
                  "value": null,
                  "raw": "null"
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 167,
        "end": 170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 168,
            "end": 169,
            "name": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
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
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 220,
            "end": 240,
            "callee": {
              "type": "Identifier",
              "start": 220,
              "end": 223,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 224,
                "end": 239,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 228,
                    "end": 232,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 229,
                      "end": 232,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 231,
                        "end": 232,
                        "typeName": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "name": "U",
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
                "body": {
                  "type": "Literal",
                  "start": 237,
                  "end": 239,
                  "value": "",
                  "raw": "''"
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 224,
                  "end": 227,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 225,
                      "end": 226,
                      "name": {
                        "type": "Identifier",
                        "start": 225,
                        "end": 226,
                        "name": "U",
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
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 254,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 257,
            "end": 285,
            "callee": {
              "type": "Identifier",
              "start": 257,
              "end": 260,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 269,
                "end": 284,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 273,
                    "end": 277,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 274,
                      "end": 277,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 276,
                        "end": 277,
                        "typeName": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 277,
                          "name": "U",
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
                "body": {
                  "type": "Literal",
                  "start": 282,
                  "end": 284,
                  "value": "",
                  "raw": "''"
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 269,
                  "end": 272,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 270,
                      "end": 271,
                      "name": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 271,
                        "name": "U",
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
                "returnType": null
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 304,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 307,
            "end": 319,
            "callee": {
              "type": "Identifier",
              "start": 307,
              "end": 310,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 311,
                "end": 318,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 316,
                  "end": 318,
                  "value": "",
                  "raw": "''"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 328,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 341,
        "name": "foo2",
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
          "start": 348,
          "end": 352,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 349,
            "end": 352,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 351,
              "end": 352,
              "typeName": {
                "type": "Identifier",
                "start": 351,
                "end": 352,
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
        },
        {
          "type": "Identifier",
          "start": 354,
          "end": 369,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 356,
            "end": 369,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 358,
              "end": 369,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 359,
                  "end": 363,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 360,
                    "end": 363,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 362,
                      "end": 363,
                      "typeName": {
                        "type": "Identifier",
                        "start": 362,
                        "end": 363,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 365,
                "end": 369,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 368,
                  "end": 369,
                  "typeName": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
              "callee": {
                "type": "Identifier",
                "start": 384,
                "end": 386,
                "name": "cb",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 341,
        "end": 347,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 342,
            "end": 343,
            "name": {
              "type": "Identifier",
              "start": 342,
              "end": 343,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 345,
            "end": 346,
            "name": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "name": "U",
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
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 400,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 403,
            "end": 444,
            "callee": {
              "type": "Identifier",
              "start": 403,
              "end": 407,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 408,
                "end": 409,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "FunctionExpression",
                "start": 411,
                "end": 443,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 424,
                    "end": 428,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 425,
                      "end": 428,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 427,
                        "end": 428,
                        "typeName": {
                          "type": "Identifier",
                          "start": 427,
                          "end": 428,
                          "name": "Z",
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
                        "value": "",
                        "raw": "''"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 420,
                  "end": 423,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 421,
                      "end": 422,
                      "name": {
                        "type": "Identifier",
                        "start": 421,
                        "end": 422,
                        "name": "Z",
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
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 528,
            "end": 530,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 533,
            "end": 551,
            "callee": {
              "type": "Identifier",
              "start": 533,
              "end": 537,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 538,
                "end": 539,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 541,
                "end": 550,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 542,
                    "end": 543,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 548,
                  "end": 550,
                  "value": "",
                  "raw": "''"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 567,
            "end": 569,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 572,
            "end": 612,
            "callee": {
              "type": "Identifier",
              "start": 572,
              "end": 576,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 593,
                "end": 595,
                "value": "",
                "raw": "''"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 597,
                "end": 611,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 601,
                    "end": 605,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 602,
                      "end": 605,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 604,
                        "end": 605,
                        "typeName": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 605,
                          "name": "Z",
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
                "body": {
                  "type": "Literal",
                  "start": 610,
                  "end": 611,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 597,
                  "end": 600,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 598,
                      "end": 599,
                      "name": {
                        "type": "Identifier",
                        "start": 598,
                        "end": 599,
                        "name": "Z",
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
                "returnType": null
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 615,
      "end": 685,
      "id": {
        "type": "Identifier",
        "start": 624,
        "end": 628,
        "name": "foo3",
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
          "start": 635,
          "end": 639,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 636,
            "end": 639,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 638,
              "end": 639,
              "typeName": {
                "type": "Identifier",
                "start": 638,
                "end": 639,
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
        },
        {
          "type": "Identifier",
          "start": 641,
          "end": 656,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 643,
            "end": 656,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 645,
              "end": 656,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 646,
                  "end": 650,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 647,
                    "end": 650,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 649,
                      "end": 650,
                      "typeName": {
                        "type": "Identifier",
                        "start": 649,
                        "end": 650,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 652,
                "end": 656,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 655,
                  "end": 656,
                  "typeName": {
                    "type": "Identifier",
                    "start": 655,
                    "end": 656,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 658,
          "end": 662,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 659,
            "end": 662,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 661,
              "end": 662,
              "typeName": {
                "type": "Identifier",
                "start": 661,
                "end": 662,
                "name": "U",
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
              "callee": {
                "type": "Identifier",
                "start": 677,
                "end": 679,
                "name": "cb",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 680,
                  "end": 681,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 628,
        "end": 634,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 629,
            "end": 630,
            "name": {
              "type": "Identifier",
              "start": 629,
              "end": 630,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 632,
            "end": 633,
            "name": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "name": "U",
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
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 691,
            "end": 693,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 696,
            "end": 724,
            "callee": {
              "type": "Identifier",
              "start": 696,
              "end": 700,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 701,
                "end": 702,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 704,
                "end": 719,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 708,
                    "end": 712,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 709,
                      "end": 712,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 711,
                        "end": 712,
                        "typeName": {
                          "type": "Identifier",
                          "start": 711,
                          "end": 712,
                          "name": "Z",
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
                "body": {
                  "type": "Literal",
                  "start": 717,
                  "end": 719,
                  "value": "",
                  "raw": "''"
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 704,
                  "end": 707,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 705,
                      "end": 706,
                      "name": {
                        "type": "Identifier",
                        "start": 705,
                        "end": 706,
                        "name": "Z",
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
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 721,
                "end": 723,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 741,
            "end": 743,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 746,
            "end": 784,
            "callee": {
              "type": "Identifier",
              "start": 746,
              "end": 750,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 751,
                "end": 752,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "FunctionExpression",
                "start": 754,
                "end": 780,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 764,
                    "end": 765,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "value": "",
                        "raw": "''"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 782,
                "end": 783,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 799,
            "end": 801,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 804,
            "end": 842,
            "callee": {
              "type": "Identifier",
              "start": 804,
              "end": 808,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 825,
                "end": 826,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 828,
                "end": 837,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 829,
                    "end": 830,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 835,
                  "end": 837,
                  "value": "",
                  "raw": "''"
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 839,
                "end": 841,
                "value": "",
                "raw": "''"
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 855,
      "end": 1145,
      "id": {
        "type": "Identifier",
        "start": 864,
        "end": 869,
        "name": "other",
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
          "start": 876,
          "end": 880,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 877,
            "end": 880,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 879,
              "end": 880,
              "typeName": {
                "type": "Identifier",
                "start": 879,
                "end": 880,
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
        },
        {
          "type": "Identifier",
          "start": 882,
          "end": 886,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 883,
            "end": 886,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 885,
              "end": 886,
              "typeName": {
                "type": "Identifier",
                "start": 885,
                "end": 886,
                "name": "U",
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
                "id": {
                  "type": "Identifier",
                  "start": 898,
                  "end": 901,
                  "name": "r10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 904,
                  "end": 925,
                  "callee": {
                    "type": "Identifier",
                    "start": 904,
                    "end": 908,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 909,
                      "end": 910,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 912,
                      "end": 924,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 913,
                          "end": 917,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 914,
                            "end": 917,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 916,
                              "end": 917,
                              "typeName": {
                                "type": "Identifier",
                                "start": 916,
                                "end": 917,
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
                      "body": {
                        "type": "Literal",
                        "start": 922,
                        "end": 924,
                        "value": "",
                        "raw": "''"
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 944,
                  "end": 947,
                  "name": "r10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 950,
                  "end": 968,
                  "callee": {
                    "type": "Identifier",
                    "start": 950,
                    "end": 954,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 955,
                      "end": 956,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 958,
                      "end": 967,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 959,
                          "end": 960,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 965,
                        "end": 967,
                        "value": "",
                        "raw": "''"
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 989,
                  "end": 992,
                  "name": "r11",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 995,
                  "end": 1020,
                  "callee": {
                    "type": "Identifier",
                    "start": 995,
                    "end": 999,
                    "name": "foo3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1000,
                      "end": 1001,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1003,
                      "end": 1015,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1004,
                          "end": 1008,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1005,
                            "end": 1008,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1007,
                              "end": 1008,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1007,
                                "end": 1008,
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
                      "body": {
                        "type": "Literal",
                        "start": 1013,
                        "end": 1015,
                        "value": "",
                        "raw": "''"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "Literal",
                      "start": 1017,
                      "end": 1019,
                      "value": "",
                      "raw": "''"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1043,
                  "name": "r11b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1046,
                  "end": 1070,
                  "callee": {
                    "type": "Identifier",
                    "start": 1046,
                    "end": 1050,
                    "name": "foo3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1051,
                      "end": 1052,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1054,
                      "end": 1066,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1055,
                          "end": 1059,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1056,
                            "end": 1059,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1058,
                              "end": 1059,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1058,
                                "end": 1059,
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
                      "body": {
                        "type": "Literal",
                        "start": 1064,
                        "end": 1066,
                        "value": "",
                        "raw": "''"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "Literal",
                      "start": 1068,
                      "end": 1069,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1092,
                  "name": "r12",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1095,
                  "end": 1133,
                  "callee": {
                    "type": "Identifier",
                    "start": 1095,
                    "end": 1099,
                    "name": "foo3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1100,
                      "end": 1101,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "FunctionExpression",
                      "start": 1103,
                      "end": 1129,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1113,
                          "end": 1114,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "value": "",
                              "raw": "''"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "Literal",
                      "start": 1131,
                      "end": 1132,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 869,
        "end": 875,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 870,
            "end": 871,
            "name": {
              "type": "Identifier",
              "start": 870,
              "end": 871,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 873,
            "end": 874,
            "name": {
              "type": "Identifier",
              "start": 873,
              "end": 874,
              "name": "U",
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
