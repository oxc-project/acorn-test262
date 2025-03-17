__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 650,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 38,
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 37,
        "callee": {
          "type": "Identifier",
          "start": 22,
          "end": 33,
          "name": "getResults1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 34,
            "end": 36,
            "elements": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 63,
      "expression": {
        "type": "CallExpression",
        "start": 39,
        "end": 62,
        "callee": {
          "type": "Identifier",
          "start": 39,
          "end": 50,
          "name": "getResults1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 51,
            "end": 61,
            "properties": [
              {
                "type": "Property",
                "start": 52,
                "end": 60,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 56,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 58,
                  "end": 60,
                  "elements": []
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 81,
      "expression": {
        "type": "CallExpression",
        "start": 65,
        "end": 80,
        "callee": {
          "type": "Identifier",
          "start": 65,
          "end": 76,
          "name": "getResults2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 77,
            "end": 79,
            "elements": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 106,
      "expression": {
        "type": "CallExpression",
        "start": 82,
        "end": 105,
        "callee": {
          "type": "Identifier",
          "start": 82,
          "end": 93,
          "name": "getResults2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 94,
            "end": 104,
            "properties": [
              {
                "type": "Property",
                "start": 95,
                "end": 103,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 99,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 101,
                  "end": 103,
                  "elements": []
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 108,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 119,
        "name": "Result",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 122,
        "end": 139,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 124,
            "end": 137,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 129,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 137,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 131,
                "end": 137
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
      "type": "TSTypeAliasDeclaration",
      "start": 141,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 153,
        "name": "Results",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 156,
        "end": 164,
        "elementType": {
          "type": "TSTypeReference",
          "start": 156,
          "end": 162,
          "typeName": {
            "type": "Identifier",
            "start": 156,
            "end": 162,
            "name": "Result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 167,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 192,
        "name": "isResponseInData",
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
          "start": 196,
          "end": 217,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 217,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 203,
              "end": 217,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 203,
                  "end": 204,
                  "typeName": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 207,
                  "end": 217,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 209,
                      "end": 216,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 213,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 213,
                        "end": 216,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 215,
                          "end": 216,
                          "typeName": {
                            "type": "Identifier",
                            "start": 215,
                            "end": 216,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
        "start": 241,
        "end": 285,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 247,
            "end": 283,
            "argument": {
              "type": "CallExpression",
              "start": 254,
              "end": 282,
              "callee": {
                "type": "MemberExpression",
                "start": 254,
                "end": 274,
                "object": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 259,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 274,
                  "name": "hasOwnProperty",
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
                  "start": 275,
                  "end": 281,
                  "value": "data",
                  "raw": "'data'"
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
        "start": 192,
        "end": 195,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 193,
            "end": 194,
            "name": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
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
        "start": 218,
        "end": 240,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 220,
          "end": 240,
          "parameterName": {
            "type": "Identifier",
            "start": 220,
            "end": 225,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 229,
            "end": 240,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 229,
              "end": 240,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 231,
                  "end": 238,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 235,
                    "name": "data",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 238,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 287,
      "end": 413,
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 307,
        "name": "getResults1",
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
          "end": 342,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 313,
            "end": 342,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 315,
              "end": 342,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 315,
                  "end": 322,
                  "typeName": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 322,
                    "name": "Results",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 325,
                  "end": 342,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 327,
                      "end": 340,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 327,
                        "end": 331,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 331,
                        "end": 340,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 333,
                          "end": 340,
                          "typeName": {
                            "type": "Identifier",
                            "start": 333,
                            "end": 340,
                            "name": "Results",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
        "start": 353,
        "end": 413,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 359,
            "end": 411,
            "argument": {
              "type": "ConditionalExpression",
              "start": 366,
              "end": 410,
              "test": {
                "type": "CallExpression",
                "start": 366,
                "end": 389,
                "callee": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 382,
                  "name": "isResponseInData",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 383,
                    "end": 388,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 392,
                "end": 402,
                "object": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 397,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 402,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 405,
                "end": 410,
                "name": "value",
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
        "start": 343,
        "end": 352,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 345,
          "end": 352,
          "typeName": {
            "type": "Identifier",
            "start": 345,
            "end": 352,
            "name": "Results",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 415,
      "end": 523,
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 439,
        "name": "isPlainResponse",
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
          "start": 443,
          "end": 464,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 448,
            "end": 464,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 450,
              "end": 464,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 450,
                  "end": 451,
                  "typeName": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 454,
                  "end": 464,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 456,
                      "end": 463,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 456,
                        "end": 460,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 460,
                        "end": 463,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 462,
                          "end": 463,
                          "typeName": {
                            "type": "Identifier",
                            "start": 462,
                            "end": 463,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
        "start": 478,
        "end": 523,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 484,
            "end": 521,
            "argument": {
              "type": "UnaryExpression",
              "start": 491,
              "end": 520,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "CallExpression",
                "start": 492,
                "end": 520,
                "callee": {
                  "type": "MemberExpression",
                  "start": 492,
                  "end": 512,
                  "object": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 497,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 512,
                    "name": "hasOwnProperty",
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
                    "start": 513,
                    "end": 519,
                    "value": "data",
                    "raw": "'data'"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 439,
        "end": 442,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 440,
            "end": 441,
            "name": {
              "type": "Identifier",
              "start": 440,
              "end": 441,
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
        "start": 465,
        "end": 477,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 467,
          "end": 477,
          "parameterName": {
            "type": "Identifier",
            "start": 467,
            "end": 472,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 476,
            "end": 477,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 476,
              "end": 477,
              "typeName": {
                "type": "Identifier",
                "start": 476,
                "end": 477,
                "name": "T",
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
    {
      "type": "FunctionDeclaration",
      "start": 525,
      "end": 650,
      "id": {
        "type": "Identifier",
        "start": 534,
        "end": 545,
        "name": "getResults2",
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
          "start": 546,
          "end": 580,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 551,
            "end": 580,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 553,
              "end": 580,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 553,
                  "end": 560,
                  "typeName": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 560,
                    "name": "Results",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 563,
                  "end": 580,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 565,
                      "end": 578,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 569,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 569,
                        "end": 578,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 571,
                          "end": 578,
                          "typeName": {
                            "type": "Identifier",
                            "start": 571,
                            "end": 578,
                            "name": "Results",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
        "start": 591,
        "end": 650,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 597,
            "end": 648,
            "argument": {
              "type": "ConditionalExpression",
              "start": 604,
              "end": 647,
              "test": {
                "type": "CallExpression",
                "start": 604,
                "end": 626,
                "callee": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 619,
                  "name": "isPlainResponse",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 620,
                    "end": 625,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "Identifier",
                "start": 629,
                "end": 634,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "MemberExpression",
                "start": 637,
                "end": 647,
                "object": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 642,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 647,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
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
        "start": 581,
        "end": 590,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 583,
          "end": 590,
          "typeName": {
            "type": "Identifier",
            "start": 583,
            "end": 590,
            "name": "Results",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
