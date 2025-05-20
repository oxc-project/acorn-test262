__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 126,
  "end": 660,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 257,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 209,
        "end": 257,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 215,
            "end": 239,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 215,
              "end": 238,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 227,
                  "end": 237,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 230,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 237,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 215,
                "end": 226,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 222,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 226,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 244,
            "end": 255,
            "argument": {
              "type": "Identifier",
              "start": 251,
              "end": 254,
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 144,
        "decorators": [],
        "name": "logLength",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 181,
          "end": 204,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 184,
            "end": 204,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 186,
              "end": 204,
              "indexType": {
                "type": "TSTypeReference",
                "start": 202,
                "end": 203,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSMappedType",
                "start": 186,
                "end": 201,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 194,
                  "end": 195,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": false,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 198,
                  "end": 199,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 199,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 205,
        "end": 208,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 207,
          "end": 208,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 207,
            "end": 208,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 144,
        "end": 180,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 145,
            "end": 161,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 155,
              "end": 161
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 179,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 173,
              "end": 179
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
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
      "type": "ExpressionStatement",
      "start": 258,
      "end": 272,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 258,
        "end": 271,
        "arguments": [
          {
            "type": "Literal",
            "start": 268,
            "end": 270,
            "raw": "42",
            "value": 42
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 258,
          "end": 267,
          "decorators": [],
          "name": "logLength",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 283,
      "end": 289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 288,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 288,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 290,
      "end": 308,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 290,
        "end": 307,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 290,
          "end": 291,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 294,
          "end": 307,
          "arguments": [
            {
              "type": "Literal",
              "start": 304,
              "end": 306,
              "raw": "42",
              "value": 42
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 294,
            "end": 303,
            "decorators": [],
            "name": "logLength",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 347,
      "end": 488,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 437,
        "end": 488,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 443,
            "end": 470,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 443,
              "end": 469,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 455,
                  "end": 468,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 455,
                    "end": 461,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 458,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 459,
                      "end": 460,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 468,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 443,
                "end": 454,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 450,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 454,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 475,
            "end": 486,
            "argument": {
              "type": "Identifier",
              "start": 482,
              "end": 485,
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 370,
        "decorators": [],
        "name": "logFirstLength",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 409,
          "end": 432,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 412,
            "end": 432,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 414,
              "end": 432,
              "indexType": {
                "type": "TSTypeReference",
                "start": 430,
                "end": 431,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 430,
                  "end": 431,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSMappedType",
                "start": 414,
                "end": 429,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 422,
                  "end": 423,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 423,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": false,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 426,
                  "end": 427,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 427,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 433,
        "end": 436,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 435,
          "end": 436,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 435,
            "end": 436,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 370,
        "end": 408,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 371,
            "end": 389,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 381,
              "end": 389,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 381,
                "end": 387
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 391,
            "end": 407,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 401,
              "end": 407
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
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
      "type": "ExpressionStatement",
      "start": 489,
      "end": 510,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 489,
        "end": 509,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 504,
            "end": 508,
            "elements": [
              {
                "type": "Literal",
                "start": 505,
                "end": 507,
                "raw": "42",
                "value": 42
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 489,
          "end": 503,
          "decorators": [],
          "name": "logFirstLength",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 521,
      "end": 533,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 525,
          "end": 532,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 525,
            "end": 527,
            "decorators": [],
            "name": "zz",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 530,
            "end": 532,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 534,
      "end": 557,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 534,
        "end": 556,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 542,
            "end": 555,
            "arguments": [
              {
                "type": "Literal",
                "start": 552,
                "end": 554,
                "raw": "42",
                "value": 42
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 542,
              "end": 551,
              "decorators": [],
              "name": "logLength",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 534,
          "end": 541,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 534,
            "end": 536,
            "decorators": [],
            "name": "zz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 537,
            "end": 541,
            "decorators": [],
            "name": "push",
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
      "start": 595,
      "end": 621,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 595,
        "end": 620,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 595,
          "end": 597,
          "decorators": [],
          "name": "zz",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 600,
          "end": 620,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 615,
              "end": 619,
              "elements": [
                {
                  "type": "Literal",
                  "start": 616,
                  "end": 618,
                  "raw": "42",
                  "value": 42
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 600,
            "end": 614,
            "decorators": [],
            "name": "logFirstLength",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
