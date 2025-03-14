__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 6439,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 23,
      "end": 125,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 46,
        "decorators": [],
        "name": "callIt",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 50,
          "end": 117,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 117,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 55,
              "end": 117,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 61,
                  "end": 87,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 68,
                    "decorators": [],
                    "name": "produce",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 68,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 70,
                      "end": 86,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 71,
                          "end": 80,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 72,
                            "end": 80,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 74,
                              "end": 80
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 82,
                        "end": 86,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 85,
                          "end": 86,
                          "typeName": {
                            "type": "Identifier",
                            "start": 85,
                            "end": 86,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 92,
                  "end": 115,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 99,
                    "decorators": [],
                    "name": "consume",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 101,
                      "end": 115,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 102,
                          "end": 106,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 103,
                            "end": 106,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 105,
                              "end": 106,
                              "typeName": {
                                "type": "Identifier",
                                "start": 105,
                                "end": 106,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 108,
                        "end": 115,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 111,
                          "end": 115
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 118,
        "end": 124,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 120,
          "end": 124
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 46,
        "end": 49,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 47,
            "end": 48,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 127,
      "end": 191,
      "expression": {
        "type": "CallExpression",
        "start": 127,
        "end": 190,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 134,
            "end": 189,
            "properties": [
              {
                "type": "Property",
                "start": 140,
                "end": 156,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 147,
                  "decorators": [],
                  "name": "produce",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 149,
                  "end": 156,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 155,
                    "end": 156,
                    "raw": "0",
                    "value": 0
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 162,
                "end": 187,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 169,
                  "decorators": [],
                  "name": "consume",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 171,
                  "end": 187,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 176,
                    "end": 187,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 176,
                      "end": 185,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "decorators": [],
                        "name": "n",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 185,
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 127,
          "end": 133,
          "decorators": [],
          "name": "callIt",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 258,
      "expression": {
        "type": "CallExpression",
        "start": 193,
        "end": 257,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 200,
            "end": 256,
            "properties": [
              {
                "type": "Property",
                "start": 206,
                "end": 222,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 213,
                  "decorators": [],
                  "name": "produce",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 215,
                  "end": 222,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 221,
                    "end": 222,
                    "raw": "0",
                    "value": 0
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 215,
                      "end": 217,
                      "decorators": [],
                      "name": "_a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 228,
                "end": 253,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 235,
                  "decorators": [],
                  "name": "consume",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 237,
                  "end": 253,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 242,
                    "end": 253,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 242,
                      "end": 251,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 242,
                        "end": 243,
                        "decorators": [],
                        "name": "n",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 244,
                        "end": 251,
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 237,
                      "end": 238,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 193,
          "end": 199,
          "decorators": [],
          "name": "callIt",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 343,
      "expression": {
        "type": "CallExpression",
        "start": 260,
        "end": 342,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 267,
            "end": 341,
            "properties": [
              {
                "type": "Property",
                "start": 273,
                "end": 308,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 280,
                  "decorators": [],
                  "name": "produce",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 280,
                  "end": 308,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 283,
                    "end": 308,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 293,
                        "end": 302,
                        "argument": {
                          "type": "Literal",
                          "start": 300,
                          "end": 301,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 314,
                "end": 339,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 321,
                  "decorators": [],
                  "name": "consume",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 323,
                  "end": 339,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 328,
                    "end": 339,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 328,
                      "end": 337,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 329,
                        "decorators": [],
                        "name": "n",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 337,
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 323,
                      "end": 324,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 260,
          "end": 266,
          "decorators": [],
          "name": "callIt",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 345,
      "end": 420,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 369,
        "decorators": [],
        "name": "callItT",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 373,
          "end": 412,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 412,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 378,
              "end": 412,
              "elementTypes": [
                {
                  "type": "TSFunctionType",
                  "start": 379,
                  "end": 395,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 380,
                      "end": 389,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 381,
                        "end": 389,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 383,
                          "end": 389
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 391,
                    "end": 395,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 394,
                      "end": 395,
                      "typeName": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 395,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 397,
                  "end": 411,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 398,
                      "end": 402,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 399,
                        "end": 402,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 401,
                          "end": 402,
                          "typeName": {
                            "type": "Identifier",
                            "start": 401,
                            "end": 402,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 404,
                    "end": 411,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 407,
                      "end": 411
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 413,
        "end": 419,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 415,
          "end": 419
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 369,
        "end": 372,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 370,
            "end": 371,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 370,
              "end": 371,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 422,
      "end": 459,
      "expression": {
        "type": "CallExpression",
        "start": 422,
        "end": 458,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 430,
            "end": 457,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 431,
                "end": 438,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 437,
                  "end": 438,
                  "raw": "0",
                  "value": 0
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 440,
                "end": 456,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 445,
                  "end": 456,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 445,
                    "end": 454,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 445,
                      "end": 446,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 454,
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 440,
                    "end": 441,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 422,
          "end": 429,
          "decorators": [],
          "name": "callItT",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 497,
      "expression": {
        "type": "CallExpression",
        "start": 460,
        "end": 496,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 468,
            "end": 495,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 469,
                "end": 476,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 475,
                  "end": 476,
                  "raw": "0",
                  "value": 0
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 469,
                    "end": 471,
                    "decorators": [],
                    "name": "_a",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 478,
                "end": 494,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 483,
                  "end": 494,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 483,
                    "end": 492,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 483,
                      "end": 484,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 485,
                      "end": 492,
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 478,
                    "end": 479,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 460,
          "end": 467,
          "decorators": [],
          "name": "callItT",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 521,
      "end": 643,
      "body": {
        "type": "TSInterfaceBody",
        "start": 546,
        "end": 643,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 552,
            "end": 594,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 552,
              "end": 567,
              "decorators": [],
              "name": "retrieveGeneric",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 567,
              "end": 593,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 569,
                "end": 593,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 570,
                    "end": 587,
                    "decorators": [],
                    "name": "parameter",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 579,
                      "end": 587,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 581,
                        "end": 587
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 589,
                  "end": 593,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 592,
                    "end": 593,
                    "typeName": {
                      "type": "Identifier",
                      "start": 592,
                      "end": 593,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 599,
            "end": 641,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 599,
              "end": 617,
              "decorators": [],
              "name": "operateWithGeneric",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 617,
              "end": 641,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 619,
                "end": 641,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 620,
                    "end": 630,
                    "decorators": [],
                    "name": "generic",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 627,
                      "end": 630,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 629,
                        "end": 630,
                        "typeName": {
                          "type": "Identifier",
                          "start": 629,
                          "end": 630,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 632,
                  "end": 641,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 635,
                    "end": 641
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
        "start": 531,
        "end": 542,
        "decorators": [],
        "name": "MyInterface",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 542,
        "end": 545,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 543,
            "end": 544,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 543,
              "end": 544,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 645,
      "end": 705,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 651,
          "end": 704,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 651,
            "end": 662,
            "decorators": [],
            "name": "inferTypeFn",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 665,
            "end": 704,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 697,
              "end": 704,
              "decorators": [],
              "name": "generic",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 669,
                "end": 692,
                "decorators": [],
                "name": "generic",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 676,
                  "end": 692,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 678,
                    "end": 692,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 689,
                      "end": 692,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 690,
                          "end": 691,
                          "typeName": {
                            "type": "Identifier",
                            "start": 690,
                            "end": 691,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 678,
                      "end": 689,
                      "decorators": [],
                      "name": "MyInterface",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 665,
              "end": 668,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 666,
                  "end": 667,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 666,
                    "end": 667,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
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
      "type": "VariableDeclaration",
      "start": 707,
      "end": 832,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 713,
          "end": 831,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 713,
            "end": 722,
            "decorators": [],
            "name": "myGeneric",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 725,
            "end": 831,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 737,
                "end": 830,
                "properties": [
                  {
                    "type": "Property",
                    "start": 743,
                    "end": 774,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 743,
                      "end": 758,
                      "decorators": [],
                      "name": "retrieveGeneric",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 760,
                      "end": 774,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 773,
                        "end": 774,
                        "raw": "5",
                        "value": 5
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 760,
                          "end": 769,
                          "decorators": [],
                          "name": "parameter",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 780,
                    "end": 828,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 780,
                      "end": 798,
                      "decorators": [],
                      "name": "operateWithGeneric",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 800,
                      "end": 828,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 811,
                        "end": 828,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 811,
                          "end": 826,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 811,
                            "end": 818,
                            "decorators": [],
                            "name": "generic",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 819,
                            "end": 826,
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 800,
                          "end": 807,
                          "decorators": [],
                          "name": "generic",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 725,
              "end": 736,
              "decorators": [],
              "name": "inferTypeFn",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 851,
      "end": 917,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 914,
        "end": 917,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 860,
        "end": 864,
        "decorators": [],
        "name": "make",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 868,
          "end": 912,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 869,
            "end": 912,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 871,
              "end": 912,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 873,
                  "end": 886,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 873,
                    "end": 882,
                    "decorators": [],
                    "name": "mutations",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 882,
                    "end": 885,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 884,
                      "end": 885,
                      "typeName": {
                        "type": "Identifier",
                        "start": 884,
                        "end": 885,
                        "decorators": [],
                        "name": "M",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 888,
                  "end": 910,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 888,
                    "end": 894,
                    "decorators": [],
                    "name": "action",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 894,
                    "end": 910,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 896,
                      "end": 910,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 897,
                          "end": 901,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 898,
                            "end": 901,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 900,
                              "end": 901,
                              "typeName": {
                                "type": "Identifier",
                                "start": 900,
                                "end": 901,
                                "decorators": [],
                                "name": "M",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 903,
                        "end": 910,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 906,
                          "end": 910
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 864,
        "end": 867,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 865,
            "end": 866,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 865,
              "end": 866,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 919,
      "end": 998,
      "expression": {
        "type": "CallExpression",
        "start": 919,
        "end": 997,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 924,
            "end": 996,
            "properties": [
              {
                "type": "Property",
                "start": 929,
                "end": 963,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 929,
                  "end": 938,
                  "decorators": [],
                  "name": "mutations",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 940,
                  "end": 963,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 949,
                      "end": 958,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 949,
                        "end": 952,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 952,
                        "end": 958,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 955,
                          "end": 958,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 968,
                "end": 994,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 968,
                  "end": 974,
                  "decorators": [],
                  "name": "action",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 976,
                  "end": 994,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 983,
                    "end": 994,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 985,
                        "end": 992,
                        "expression": {
                          "type": "CallExpression",
                          "start": 985,
                          "end": 992,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 985,
                            "end": 990,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 985,
                              "end": 986,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 987,
                              "end": 990,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 977,
                      "end": 978,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 919,
          "end": 923,
          "decorators": [],
          "name": "make",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1022,
      "end": 1090,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1039,
        "end": 1042,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1046,
          "end": 1082,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1053,
            "end": 1082,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1055,
              "end": 1082,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1057,
                  "end": 1062,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1057,
                    "end": 1058,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1058,
                    "end": 1061,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1060,
                      "end": 1061,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1060,
                        "end": 1061,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1063,
                  "end": 1080,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1063,
                    "end": 1064,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1064,
                    "end": 1080,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1066,
                      "end": 1080,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1067,
                          "end": 1071,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1068,
                            "end": 1071,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1070,
                              "end": 1071,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1070,
                                "end": 1071,
                                "decorators": [],
                                "name": "A",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1073,
                        "end": 1080,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1076,
                          "end": 1080
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1083,
        "end": 1089,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1085,
          "end": 1089
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1042,
        "end": 1045,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1043,
            "end": 1044,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1043,
              "end": 1044,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1092,
      "end": 1142,
      "expression": {
        "type": "CallExpression",
        "start": 1092,
        "end": 1141,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1096,
            "end": 1140,
            "properties": [
              {
                "type": "Property",
                "start": 1102,
                "end": 1124,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1102,
                  "end": 1103,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1105,
                  "end": 1124,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1111,
                    "end": 1124,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1113,
                        "end": 1122,
                        "argument": {
                          "type": "Literal",
                          "start": 1120,
                          "end": 1122,
                          "raw": "42",
                          "value": 42
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 1130,
                "end": 1137,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1130,
                  "end": 1131,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1131,
                  "end": 1137,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1135,
                    "end": 1137,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1132,
                      "end": 1133,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1092,
          "end": 1095,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1144,
      "end": 1200,
      "expression": {
        "type": "CallExpression",
        "start": 1144,
        "end": 1199,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1148,
            "end": 1198,
            "properties": [
              {
                "type": "Property",
                "start": 1154,
                "end": 1182,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1154,
                  "end": 1155,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1157,
                  "end": 1182,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1169,
                    "end": 1182,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1171,
                        "end": 1180,
                        "argument": {
                          "type": "Literal",
                          "start": 1178,
                          "end": 1180,
                          "raw": "42",
                          "value": 42
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 1188,
                "end": 1195,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1188,
                  "end": 1189,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1189,
                  "end": 1195,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1193,
                    "end": 1195,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1190,
                      "end": 1191,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1144,
          "end": 1147,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1202,
      "end": 1247,
      "expression": {
        "type": "CallExpression",
        "start": 1202,
        "end": 1246,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1206,
            "end": 1245,
            "properties": [
              {
                "type": "Property",
                "start": 1212,
                "end": 1229,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1213,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1213,
                  "end": 1229,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1216,
                    "end": 1229,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1218,
                        "end": 1227,
                        "argument": {
                          "type": "Literal",
                          "start": 1225,
                          "end": 1227,
                          "raw": "42",
                          "value": 42
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 1235,
                "end": 1242,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1235,
                  "end": 1236,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1236,
                  "end": 1242,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1240,
                    "end": 1242,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1237,
                      "end": 1238,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1202,
          "end": 1205,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1271,
      "end": 1347,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1276,
        "end": 1281,
        "decorators": [],
        "name": "Chain",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1292,
        "end": 1346,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 1298,
            "end": 1306,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1298,
              "end": 1299,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1301,
              "end": 1305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1303,
                "end": 1305,
                "typeName": {
                  "type": "Identifier",
                  "start": 1303,
                  "end": 1305,
                  "decorators": [],
                  "name": "R1",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1311,
            "end": 1324,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1311,
              "end": 1312,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1313,
                "end": 1318,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1314,
                  "end": 1318,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1316,
                    "end": 1318,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1316,
                      "end": 1318,
                      "decorators": [],
                      "name": "R1",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1319,
              "end": 1323,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1321,
                "end": 1323,
                "typeName": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1323,
                  "decorators": [],
                  "name": "R2",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1329,
            "end": 1344,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1329,
              "end": 1330,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1331,
                "end": 1336,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1332,
                  "end": 1336,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1334,
                    "end": 1336,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1334,
                      "end": 1336,
                      "decorators": [],
                      "name": "R2",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1337,
              "end": 1343,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1339,
                "end": 1343
              }
            },
            "static": false
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1281,
        "end": 1289,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1282,
            "end": 1284,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1282,
              "end": 1284,
              "decorators": [],
              "name": "R1",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1286,
            "end": 1288,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1286,
              "end": 1288,
              "decorators": [],
              "name": "R2",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1349,
      "end": 1393,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1391,
        "end": 1393,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1358,
        "end": 1362,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1371,
          "end": 1389,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1374,
            "end": 1389,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1376,
              "end": 1389,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1381,
                "end": 1389,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1382,
                    "end": 1384,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1382,
                      "end": 1384,
                      "decorators": [],
                      "name": "R1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1386,
                    "end": 1388,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1386,
                      "end": 1388,
                      "decorators": [],
                      "name": "R2",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1376,
                "end": 1381,
                "decorators": [],
                "name": "Chain",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1362,
        "end": 1370,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1363,
            "end": 1365,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1363,
              "end": 1365,
              "decorators": [],
              "name": "R1",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1367,
            "end": 1369,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1367,
              "end": 1369,
              "decorators": [],
              "name": "R2",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1395,
      "end": 1491,
      "expression": {
        "type": "CallExpression",
        "start": 1395,
        "end": 1490,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1400,
            "end": 1489,
            "properties": [
              {
                "type": "Property",
                "start": 1406,
                "end": 1416,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1406,
                  "end": 1407,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1409,
                  "end": 1416,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 1415,
                    "end": 1416,
                    "raw": "0",
                    "value": 0
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 1422,
                "end": 1435,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1422,
                  "end": 1423,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1425,
                  "end": 1435,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 1432,
                    "end": 1435,
                    "raw": "'a'",
                    "value": "a"
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1426,
                      "end": 1427,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1441,
                "end": 1487,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1441,
                  "end": 1442,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1444,
                  "end": 1487,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1451,
                    "end": 1487,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1461,
                        "end": 1481,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1467,
                            "end": 1480,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1467,
                              "end": 1476,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1468,
                                "end": 1476,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1470,
                                  "end": 1476
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 1479,
                              "end": 1480,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1445,
                      "end": 1446,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1395,
          "end": 1399,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1493,
      "end": 1587,
      "expression": {
        "type": "CallExpression",
        "start": 1493,
        "end": 1586,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1498,
            "end": 1585,
            "properties": [
              {
                "type": "Property",
                "start": 1504,
                "end": 1514,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1504,
                  "end": 1505,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1507,
                  "end": 1514,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 1513,
                    "end": 1514,
                    "raw": "0",
                    "value": 0
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 1520,
                "end": 1531,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1520,
                  "end": 1521,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1523,
                  "end": 1531,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1530,
                    "end": 1531,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1524,
                      "end": 1525,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1537,
                "end": 1583,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1537,
                  "end": 1538,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1540,
                  "end": 1583,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1547,
                    "end": 1583,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1557,
                        "end": 1577,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1563,
                            "end": 1576,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1563,
                              "end": 1572,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1564,
                                "end": 1572,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1566,
                                  "end": 1572
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 1575,
                              "end": 1576,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1541,
                      "end": 1542,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1493,
          "end": 1497,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1611,
      "end": 1659,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1634,
        "end": 1659,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1640,
            "end": 1657,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1647,
              "end": 1652,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1653,
              "end": 1656,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1655,
                "end": 1656,
                "typeName": {
                  "type": "Identifier",
                  "start": 1655,
                  "end": 1656,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1617,
        "end": 1624,
        "decorators": [],
        "name": "Wrapper",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1624,
        "end": 1633,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1625,
            "end": 1632,
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "start": 1629,
              "end": 1632
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1625,
              "end": 1626,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1661,
      "end": 1703,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1666,
        "end": 1676,
        "decorators": [],
        "name": "WrappedMap",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1679,
        "end": 1702,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1685,
          "end": 1702,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1686,
              "end": 1692
            },
            {
              "type": "TSTypeReference",
              "start": 1694,
              "end": 1701,
              "typeName": {
                "type": "Identifier",
                "start": 1694,
                "end": 1701,
                "decorators": [],
                "name": "Wrapper",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1679,
          "end": 1685,
          "decorators": [],
          "name": "Record",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1704,
      "end": 1807,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1709,
        "end": 1715,
        "decorators": [],
        "name": "Unwrap",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1740,
        "end": 1806,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1752,
          "end": 1759,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1758,
            "end": 1759,
            "typeName": {
              "type": "Identifier",
              "start": 1758,
              "end": 1759,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1747,
          "end": 1748,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1762,
          "end": 1803,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 1762,
            "end": 1766,
            "indexType": {
              "type": "TSTypeReference",
              "start": 1764,
              "end": 1765,
              "typeName": {
                "type": "Identifier",
                "start": 1764,
                "end": 1765,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1762,
              "end": 1763,
              "typeName": {
                "type": "Identifier",
                "start": 1762,
                "end": 1763,
                "decorators": [],
                "name": "D",
                "optional": false
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1775,
            "end": 1791,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1782,
              "end": 1791,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 1783,
                  "end": 1790,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1789,
                    "end": 1790,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1789,
                      "end": 1790,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1775,
              "end": 1782,
              "decorators": [],
              "name": "Wrapper",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1798,
            "end": 1803
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1794,
            "end": 1795,
            "typeName": {
              "type": "Identifier",
              "start": 1794,
              "end": 1795,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1715,
        "end": 1737,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1716,
            "end": 1736,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1726,
              "end": 1736,
              "typeName": {
                "type": "Identifier",
                "start": 1726,
                "end": 1736,
                "decorators": [],
                "name": "WrappedMap",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1716,
              "end": 1717,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1809,
      "end": 1965,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1814,
        "end": 1830,
        "decorators": [],
        "name": "MappingComponent",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1877,
        "end": 1964,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 1883,
            "end": 1918,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1883,
              "end": 1888,
              "decorators": [],
              "name": "setup",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1890,
              "end": 1917,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1892,
                "end": 1917,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1894,
                    "end": 1904,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1894,
                      "end": 1900,
                      "decorators": [],
                      "name": "inputs",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1900,
                      "end": 1903,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1902,
                        "end": 1903,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1902,
                          "end": 1903,
                          "decorators": [],
                          "name": "I",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1905,
                    "end": 1915,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1905,
                      "end": 1912,
                      "decorators": [],
                      "name": "outputs",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1912,
                      "end": 1915,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1914,
                        "end": 1915,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1914,
                          "end": 1915,
                          "decorators": [],
                          "name": "O",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1923,
            "end": 1962,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1923,
              "end": 1926,
              "decorators": [],
              "name": "map",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1927,
              "end": 1961,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1929,
                "end": 1961,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1930,
                    "end": 1947,
                    "decorators": [],
                    "name": "inputs",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1936,
                      "end": 1947,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1938,
                        "end": 1947,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1944,
                          "end": 1947,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1945,
                              "end": 1946,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1945,
                                "end": 1946,
                                "decorators": [],
                                "name": "I",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1938,
                          "end": 1944,
                          "decorators": [],
                          "name": "Unwrap",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1949,
                  "end": 1961,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1952,
                    "end": 1961,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1958,
                      "end": 1961,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1959,
                          "end": 1960,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1959,
                            "end": 1960,
                            "decorators": [],
                            "name": "O",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1952,
                      "end": 1958,
                      "decorators": [],
                      "name": "Unwrap",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1830,
        "end": 1874,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1831,
            "end": 1851,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1841,
              "end": 1851,
              "typeName": {
                "type": "Identifier",
                "start": 1841,
                "end": 1851,
                "decorators": [],
                "name": "WrappedMap",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1831,
              "end": 1832,
              "decorators": [],
              "name": "I",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1853,
            "end": 1873,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1863,
              "end": 1873,
              "typeName": {
                "type": "Identifier",
                "start": 1863,
                "end": 1873,
                "decorators": [],
                "name": "WrappedMap",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1853,
              "end": 1854,
              "decorators": [],
              "name": "O",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1967,
      "end": 2086,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1984,
        "end": 2006,
        "decorators": [],
        "name": "createMappingComponent",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2051,
          "end": 2078,
          "decorators": [],
          "name": "def",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2054,
            "end": 2078,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2056,
              "end": 2078,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2072,
                "end": 2078,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2073,
                    "end": 2074,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2073,
                      "end": 2074,
                      "decorators": [],
                      "name": "I",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2076,
                    "end": 2077,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2076,
                      "end": 2077,
                      "decorators": [],
                      "name": "O",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2056,
                "end": 2072,
                "decorators": [],
                "name": "MappingComponent",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2079,
        "end": 2085,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2081,
          "end": 2085
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2006,
        "end": 2050,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2007,
            "end": 2027,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2017,
              "end": 2027,
              "typeName": {
                "type": "Identifier",
                "start": 2017,
                "end": 2027,
                "decorators": [],
                "name": "WrappedMap",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2007,
              "end": 2008,
              "decorators": [],
              "name": "I",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2029,
            "end": 2049,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2039,
              "end": 2049,
              "typeName": {
                "type": "Identifier",
                "start": 2039,
                "end": 2049,
                "decorators": [],
                "name": "WrappedMap",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2029,
              "end": 2030,
              "decorators": [],
              "name": "O",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2088,
      "end": 2550,
      "expression": {
        "type": "CallExpression",
        "start": 2088,
        "end": 2549,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2111,
            "end": 2548,
            "properties": [
              {
                "type": "Property",
                "start": 2117,
                "end": 2410,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2117,
                  "end": 2122,
                  "decorators": [],
                  "name": "setup",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 2122,
                  "end": 2410,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2125,
                    "end": 2410,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 2135,
                        "end": 2404,
                        "argument": {
                          "type": "ObjectExpression",
                          "start": 2142,
                          "end": 2403,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 2156,
                              "end": 2266,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 2156,
                                "end": 2162,
                                "decorators": [],
                                "name": "inputs",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ObjectExpression",
                                "start": 2164,
                                "end": 2266,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 2182,
                                    "end": 2208,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2182,
                                      "end": 2185,
                                      "decorators": [],
                                      "name": "num",
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "NewExpression",
                                      "start": 2187,
                                      "end": 2208,
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 2191,
                                        "end": 2198,
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 2198,
                                        "end": 2206,
                                        "params": [
                                          {
                                            "type": "TSNumberKeyword",
                                            "start": 2199,
                                            "end": 2205
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  {
                                    "type": "Property",
                                    "start": 2226,
                                    "end": 2252,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2226,
                                      "end": 2229,
                                      "decorators": [],
                                      "name": "str",
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "NewExpression",
                                      "start": 2231,
                                      "end": 2252,
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 2235,
                                        "end": 2242,
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 2242,
                                        "end": 2250,
                                        "params": [
                                          {
                                            "type": "TSStringKeyword",
                                            "start": 2243,
                                            "end": 2249
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "Property",
                              "start": 2280,
                              "end": 2393,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 2280,
                                "end": 2287,
                                "decorators": [],
                                "name": "outputs",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ObjectExpression",
                                "start": 2289,
                                "end": 2393,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 2307,
                                    "end": 2335,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2307,
                                      "end": 2311,
                                      "decorators": [],
                                      "name": "bool",
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "NewExpression",
                                      "start": 2313,
                                      "end": 2335,
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 2317,
                                        "end": 2324,
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 2324,
                                        "end": 2333,
                                        "params": [
                                          {
                                            "type": "TSBooleanKeyword",
                                            "start": 2325,
                                            "end": 2332
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  {
                                    "type": "Property",
                                    "start": 2353,
                                    "end": 2379,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2353,
                                      "end": 2356,
                                      "decorators": [],
                                      "name": "str",
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "NewExpression",
                                      "start": 2358,
                                      "end": 2379,
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 2362,
                                        "end": 2369,
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 2369,
                                        "end": 2377,
                                        "params": [
                                          {
                                            "type": "TSStringKeyword",
                                            "start": 2370,
                                            "end": 2376
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ]
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
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 2416,
                "end": 2546,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2416,
                  "end": 2419,
                  "decorators": [],
                  "name": "map",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 2419,
                  "end": 2546,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2428,
                    "end": 2546,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 2438,
                        "end": 2540,
                        "argument": {
                          "type": "ObjectExpression",
                          "start": 2445,
                          "end": 2540,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 2459,
                              "end": 2483,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 2459,
                                "end": 2463,
                                "decorators": [],
                                "name": "bool",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "MemberExpression",
                                "start": 2465,
                                "end": 2483,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2465,
                                  "end": 2471,
                                  "decorators": [],
                                  "name": "inputs",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2472,
                                  "end": 2483,
                                  "decorators": [],
                                  "name": "nonexistent",
                                  "optional": false
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "start": 2497,
                              "end": 2512,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 2497,
                                "end": 2500,
                                "decorators": [],
                                "name": "str",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "MemberExpression",
                                "start": 2502,
                                "end": 2512,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2502,
                                  "end": 2508,
                                  "decorators": [],
                                  "name": "inputs",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2509,
                                  "end": 2512,
                                  "decorators": [],
                                  "name": "num",
                                  "optional": false
                                }
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
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2420,
                      "end": 2426,
                      "decorators": [],
                      "name": "inputs",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2088,
          "end": 2110,
          "decorators": [],
          "name": "createMappingComponent",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2574,
      "end": 2655,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2653,
        "end": 2655,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2583,
        "end": 2593,
        "decorators": [],
        "name": "simplified",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2597,
          "end": 2651,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2602,
            "end": 2651,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2604,
              "end": 2651,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2606,
                  "end": 2625,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2606,
                    "end": 2615,
                    "decorators": [],
                    "name": "generator",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2615,
                    "end": 2624,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2617,
                      "end": 2624,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2620,
                        "end": 2624,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2623,
                          "end": 2624,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2623,
                            "end": 2624,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2626,
                  "end": 2649,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2626,
                    "end": 2634,
                    "decorators": [],
                    "name": "receiver",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2634,
                    "end": 2649,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2636,
                      "end": 2649,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2637,
                          "end": 2641,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2638,
                            "end": 2641,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2640,
                              "end": 2641,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2640,
                                "end": 2641,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2643,
                        "end": 2649,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2646,
                          "end": 2649
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2593,
        "end": 2596,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2594,
            "end": 2595,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2594,
              "end": 2595,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2657,
      "end": 2745,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2743,
        "end": 2745,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2666,
        "end": 2675,
        "decorators": [],
        "name": "whatIWant",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2679,
          "end": 2741,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2684,
            "end": 2741,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2686,
              "end": 2741,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2688,
                  "end": 2715,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2688,
                    "end": 2697,
                    "decorators": [],
                    "name": "generator",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2697,
                    "end": 2714,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2699,
                      "end": 2714,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2700,
                          "end": 2708,
                          "decorators": [],
                          "name": "bob",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2703,
                            "end": 2708,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 2705,
                              "end": 2708
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2710,
                        "end": 2714,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2713,
                          "end": 2714,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2713,
                            "end": 2714,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2716,
                  "end": 2739,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2716,
                    "end": 2724,
                    "decorators": [],
                    "name": "receiver",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2724,
                    "end": 2739,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2726,
                      "end": 2739,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2727,
                          "end": 2731,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2728,
                            "end": 2731,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2730,
                              "end": 2731,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2730,
                                "end": 2731,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2733,
                        "end": 2739,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2736,
                          "end": 2739
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2675,
        "end": 2678,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2676,
            "end": 2677,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2676,
              "end": 2677,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2747,
      "end": 2824,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2822,
        "end": 2824,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2756,
        "end": 2765,
        "decorators": [],
        "name": "nonObject",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2769,
          "end": 2795,
          "decorators": [],
          "name": "generator",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2778,
            "end": 2795,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2780,
              "end": 2795,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2781,
                  "end": 2789,
                  "decorators": [],
                  "name": "bob",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2784,
                    "end": 2789,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2786,
                      "end": 2789
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2791,
                "end": 2795,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2794,
                  "end": 2795,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2794,
                    "end": 2795,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2797,
          "end": 2820,
          "decorators": [],
          "name": "receiver",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2805,
            "end": 2820,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2807,
              "end": 2820,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2808,
                  "end": 2812,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2809,
                    "end": 2812,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2811,
                      "end": 2812,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2811,
                        "end": 2812,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2814,
                "end": 2820,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2817,
                  "end": 2820
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2765,
        "end": 2768,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2766,
            "end": 2767,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2766,
              "end": 2767,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2826,
      "end": 2899,
      "expression": {
        "type": "CallExpression",
        "start": 2826,
        "end": 2899,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2837,
            "end": 2898,
            "properties": [
              {
                "type": "Property",
                "start": 2839,
                "end": 2859,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2839,
                  "end": 2848,
                  "decorators": [],
                  "name": "generator",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2850,
                  "end": 2859,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 2856,
                    "end": 2859,
                    "raw": "123",
                    "value": 123
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 2861,
                "end": 2896,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2861,
                  "end": 2869,
                  "decorators": [],
                  "name": "receiver",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2871,
                  "end": 2896,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 2878,
                    "end": 2896,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 2890,
                        "end": 2895,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 2890,
                          "end": 2891,
                          "decorators": [],
                          "name": "t",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2894,
                          "end": 2895,
                          "raw": "2",
                          "value": 2
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2878,
                      "end": 2889,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2878,
                        "end": 2885,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2886,
                        "end": 2889,
                        "decorators": [],
                        "name": "log",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2872,
                      "end": 2873,
                      "decorators": [],
                      "name": "t",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2826,
          "end": 2836,
          "decorators": [],
          "name": "simplified",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2900,
      "end": 2983,
      "expression": {
        "type": "CallExpression",
        "start": 2900,
        "end": 2983,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2910,
            "end": 2982,
            "properties": [
              {
                "type": "Property",
                "start": 2912,
                "end": 2943,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2912,
                  "end": 2921,
                  "decorators": [],
                  "name": "generator",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2923,
                  "end": 2943,
                  "async": false,
                  "body": {
                    "type": "ConditionalExpression",
                    "start": 2932,
                    "end": 2943,
                    "alternate": {
                      "type": "Literal",
                      "start": 2942,
                      "end": 2943,
                      "raw": "2",
                      "value": 2
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 2938,
                      "end": 2939,
                      "raw": "1",
                      "value": 1
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 2932,
                      "end": 2935,
                      "decorators": [],
                      "name": "bob",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2924,
                      "end": 2927,
                      "decorators": [],
                      "name": "bob",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 2945,
                "end": 2980,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2945,
                  "end": 2953,
                  "decorators": [],
                  "name": "receiver",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2955,
                  "end": 2980,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 2962,
                    "end": 2980,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 2974,
                        "end": 2979,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 2974,
                          "end": 2975,
                          "decorators": [],
                          "name": "t",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2978,
                          "end": 2979,
                          "raw": "2",
                          "value": 2
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2962,
                      "end": 2973,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2962,
                        "end": 2969,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2970,
                        "end": 2973,
                        "decorators": [],
                        "name": "log",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2956,
                      "end": 2957,
                      "decorators": [],
                      "name": "t",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2900,
          "end": 2909,
          "decorators": [],
          "name": "whatIWant",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2984,
      "end": 3042,
      "expression": {
        "type": "CallExpression",
        "start": 2984,
        "end": 3042,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 2994,
            "end": 3014,
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "start": 3003,
              "end": 3014,
              "alternate": {
                "type": "Literal",
                "start": 3013,
                "end": 3014,
                "raw": "2",
                "value": 2
              },
              "consequent": {
                "type": "Literal",
                "start": 3009,
                "end": 3010,
                "raw": "1",
                "value": 1
              },
              "test": {
                "type": "Identifier",
                "start": 3003,
                "end": 3006,
                "decorators": [],
                "name": "bob",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2995,
                "end": 2998,
                "decorators": [],
                "name": "bob",
                "optional": false
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 3016,
            "end": 3041,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 3023,
              "end": 3041,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 3035,
                  "end": 3040,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 3035,
                    "end": 3036,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 3039,
                    "end": 3040,
                    "raw": "2",
                    "value": 2
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 3023,
                "end": 3034,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 3023,
                  "end": 3030,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3031,
                  "end": 3034,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3017,
                "end": 3018,
                "decorators": [],
                "name": "t",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2984,
          "end": 2993,
          "decorators": [],
          "name": "nonObject",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3066,
      "end": 3195,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3106,
        "end": 3195,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3112,
            "end": 3159,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3112,
              "end": 3117,
              "decorators": [],
              "name": "fetch",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3117,
              "end": 3158,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3119,
                "end": 3158,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3120,
                    "end": 3135,
                    "decorators": [],
                    "name": "params",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3126,
                      "end": 3135,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3128,
                        "end": 3135,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3128,
                          "end": 3135,
                          "decorators": [],
                          "name": "TParams",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3137,
                    "end": 3148,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3140,
                      "end": 3148,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3142,
                        "end": 3148
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3150,
                  "end": 3158,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3153,
                    "end": 3158,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3153,
                      "end": 3158,
                      "decorators": [],
                      "name": "TDone",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3164,
            "end": 3193,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3164,
              "end": 3167,
              "decorators": [],
              "name": "map",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3167,
              "end": 3193,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3169,
                "end": 3193,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3170,
                    "end": 3181,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3174,
                      "end": 3181,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3176,
                        "end": 3181,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3176,
                          "end": 3181,
                          "decorators": [],
                          "name": "TDone",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3183,
                  "end": 3193,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3186,
                    "end": 3193,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3186,
                      "end": 3193,
                      "decorators": [],
                      "name": "TMapped",
                      "optional": false
                    }
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
        "start": 3076,
        "end": 3080,
        "decorators": [],
        "name": "Opts",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3080,
        "end": 3105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3081,
            "end": 3088,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3081,
              "end": 3088,
              "decorators": [],
              "name": "TParams",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3090,
            "end": 3095,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3090,
              "end": 3095,
              "decorators": [],
              "name": "TDone",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3097,
            "end": 3104,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3097,
              "end": 3104,
              "decorators": [],
              "name": "TMapped",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3197,
      "end": 3403,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3279,
        "end": 3403,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3285,
            "end": 3401,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 3292,
              "end": 3401,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3313,
                "end": 3401,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3323,
                    "end": 3362,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3329,
                        "end": 3362,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3329,
                          "end": 3333,
                          "decorators": [],
                          "name": "data",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 3336,
                          "end": 3362,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 3350,
                              "end": 3356,
                              "decorators": [],
                              "name": "params",
                              "optional": false
                            },
                            {
                              "type": "Literal",
                              "start": 3358,
                              "end": 3361,
                              "raw": "123",
                              "value": 123
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3336,
                            "end": 3349,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 3336,
                              "end": 3343,
                              "decorators": [],
                              "name": "options",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 3344,
                              "end": 3349,
                              "decorators": [],
                              "name": "fetch",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3371,
                    "end": 3395,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3378,
                      "end": 3395,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 3390,
                          "end": 3394,
                          "decorators": [],
                          "name": "data",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3378,
                        "end": 3389,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3378,
                          "end": 3385,
                          "decorators": [],
                          "name": "options",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3386,
                          "end": 3389,
                          "decorators": [],
                          "name": "map",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3293,
                  "end": 3308,
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3299,
                    "end": 3308,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3301,
                      "end": 3308,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3301,
                        "end": 3308,
                        "decorators": [],
                        "name": "TParams",
                        "optional": false
                      }
                    }
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
        "start": 3206,
        "end": 3213,
        "decorators": [],
        "name": "example",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3239,
          "end": 3277,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3246,
            "end": 3277,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3248,
              "end": 3277,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3252,
                "end": 3277,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3253,
                    "end": 3260,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3253,
                      "end": 3260,
                      "decorators": [],
                      "name": "TParams",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3262,
                    "end": 3267,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3262,
                      "end": 3267,
                      "decorators": [],
                      "name": "TDone",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3269,
                    "end": 3276,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3269,
                      "end": 3276,
                      "decorators": [],
                      "name": "TMapped",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3248,
                "end": 3252,
                "decorators": [],
                "name": "Opts",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3213,
        "end": 3238,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3214,
            "end": 3221,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3214,
              "end": 3221,
              "decorators": [],
              "name": "TParams",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3223,
            "end": 3228,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3223,
              "end": 3228,
              "decorators": [],
              "name": "TDone",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3230,
            "end": 3237,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3230,
              "end": 3237,
              "decorators": [],
              "name": "TMapped",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3405,
      "end": 3457,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3422,
        "end": 3457,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3428,
            "end": 3439,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3428,
              "end": 3431,
              "decorators": [],
              "name": "one",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3431,
              "end": 3439,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3433,
                "end": 3439
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3444,
            "end": 3455,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3444,
              "end": 3447,
              "decorators": [],
              "name": "two",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3447,
              "end": 3455,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3449,
                "end": 3455
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 3415,
        "end": 3421,
        "decorators": [],
        "name": "Params",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3459,
      "end": 3544,
      "expression": {
        "type": "CallExpression",
        "start": 3459,
        "end": 3543,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 3467,
            "end": 3542,
            "properties": [
              {
                "type": "Property",
                "start": 3473,
                "end": 3503,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3473,
                  "end": 3478,
                  "decorators": [],
                  "name": "fetch",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 3480,
                  "end": 3503,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 3500,
                    "end": 3503,
                    "raw": "123",
                    "value": 123
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3481,
                      "end": 3495,
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3487,
                        "end": 3495,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3489,
                          "end": 3495,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3489,
                            "end": 3495,
                            "decorators": [],
                            "name": "Params",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 3509,
                "end": 3540,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3509,
                  "end": 3512,
                  "decorators": [],
                  "name": "map",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 3514,
                  "end": 3540,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 3526,
                    "end": 3540,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 3533,
                        "end": 3539,
                        "decorators": [],
                        "name": "number",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 3526,
                      "end": 3532,
                      "decorators": [],
                      "name": "String",
                      "optional": false
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3515,
                      "end": 3521,
                      "decorators": [],
                      "name": "number",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3459,
          "end": 3466,
          "decorators": [],
          "name": "example",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3546,
      "end": 3644,
      "expression": {
        "type": "CallExpression",
        "start": 3546,
        "end": 3643,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 3554,
            "end": 3642,
            "properties": [
              {
                "type": "Property",
                "start": 3560,
                "end": 3603,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3560,
                  "end": 3565,
                  "decorators": [],
                  "name": "fetch",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 3567,
                  "end": 3603,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 3600,
                    "end": 3603,
                    "raw": "123",
                    "value": 123
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3568,
                      "end": 3582,
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3574,
                        "end": 3582,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3576,
                          "end": 3582,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3576,
                            "end": 3582,
                            "decorators": [],
                            "name": "Params",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 3584,
                      "end": 3595,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3587,
                        "end": 3595,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3589,
                          "end": 3595
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 3609,
                "end": 3640,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3609,
                  "end": 3612,
                  "decorators": [],
                  "name": "map",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 3614,
                  "end": 3640,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 3626,
                    "end": 3640,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 3633,
                        "end": 3639,
                        "decorators": [],
                        "name": "number",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 3626,
                      "end": 3632,
                      "decorators": [],
                      "name": "String",
                      "optional": false
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3615,
                      "end": 3621,
                      "decorators": [],
                      "name": "number",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3546,
          "end": 3553,
          "decorators": [],
          "name": "example",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3646,
      "end": 3736,
      "expression": {
        "type": "CallExpression",
        "start": 3646,
        "end": 3735,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 3654,
            "end": 3734,
            "properties": [
              {
                "type": "Property",
                "start": 3660,
                "end": 3695,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3660,
                  "end": 3665,
                  "decorators": [],
                  "name": "fetch",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 3667,
                  "end": 3695,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 3692,
                    "end": 3695,
                    "raw": "123",
                    "value": 123
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3668,
                      "end": 3682,
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3674,
                        "end": 3682,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3676,
                          "end": 3682,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3676,
                            "end": 3682,
                            "decorators": [],
                            "name": "Params",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 3684,
                      "end": 3687,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 3701,
                "end": 3732,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3701,
                  "end": 3704,
                  "decorators": [],
                  "name": "map",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 3706,
                  "end": 3732,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 3718,
                    "end": 3732,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 3725,
                        "end": 3731,
                        "decorators": [],
                        "name": "number",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 3718,
                      "end": 3724,
                      "decorators": [],
                      "name": "String",
                      "optional": false
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3707,
                      "end": 3713,
                      "decorators": [],
                      "name": "number",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3646,
          "end": 3653,
          "decorators": [],
          "name": "example",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3760,
      "end": 3868,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3774,
          "end": 3868,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3774,
            "end": 3868,
            "decorators": [],
            "name": "branch",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3780,
              "end": 3868,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3784,
                "end": 3868,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3801,
                    "end": 3859,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3802,
                      "end": 3859,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3804,
                        "end": 3859,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 3806,
                            "end": 3814,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3806,
                              "end": 3810,
                              "decorators": [],
                              "name": "test",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3810,
                              "end": 3813,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3812,
                                "end": 3813,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3812,
                                  "end": 3813,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 3815,
                            "end": 3836,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3815,
                              "end": 3817,
                              "decorators": [],
                              "name": "if",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3817,
                              "end": 3835,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 3819,
                                "end": 3835,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 3820,
                                    "end": 3824,
                                    "decorators": [],
                                    "name": "t",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 3821,
                                      "end": 3824,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 3823,
                                        "end": 3824,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3823,
                                          "end": 3824,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3826,
                                  "end": 3835,
                                  "typeAnnotation": {
                                    "type": "TSTypePredicate",
                                    "start": 3829,
                                    "end": 3835,
                                    "asserts": false,
                                    "parameterName": {
                                      "type": "Identifier",
                                      "start": 3829,
                                      "end": 3830,
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 3834,
                                      "end": 3835,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 3834,
                                        "end": 3835,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3834,
                                          "end": 3835,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 3837,
                            "end": 3857,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3837,
                              "end": 3841,
                              "decorators": [],
                              "name": "then",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3841,
                              "end": 3857,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 3843,
                                "end": 3857,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 3844,
                                    "end": 3848,
                                    "decorators": [],
                                    "name": "u",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 3845,
                                      "end": 3848,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 3847,
                                        "end": 3848,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3847,
                                          "end": 3848,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3850,
                                  "end": 3857,
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 3853,
                                    "end": 3857
                                  }
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3861,
                  "end": 3868,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 3864,
                    "end": 3868
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3784,
                  "end": 3800,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3785,
                      "end": 3786,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3785,
                        "end": 3786,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 3788,
                      "end": 3799,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 3798,
                        "end": 3799,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3798,
                          "end": 3799,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3788,
                        "end": 3789,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3870,
      "end": 3896,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3884,
          "end": 3896,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3884,
            "end": 3896,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3885,
              "end": 3896,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3887,
                "end": 3896,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 3887,
                    "end": 3890,
                    "literal": {
                      "type": "Literal",
                      "start": 3887,
                      "end": 3890,
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3893,
                    "end": 3896,
                    "literal": {
                      "type": "Literal",
                      "start": 3893,
                      "end": 3896,
                      "raw": "\"b\"",
                      "value": "b"
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 3898,
      "end": 3996,
      "expression": {
        "type": "CallExpression",
        "start": 3898,
        "end": 3996,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 3905,
            "end": 3995,
            "properties": [
              {
                "type": "Property",
                "start": 3909,
                "end": 3916,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3909,
                  "end": 3913,
                  "decorators": [],
                  "name": "test",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 3915,
                  "end": 3916,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 3920,
                "end": 3950,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3920,
                  "end": 3922,
                  "decorators": [],
                  "name": "if",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 3924,
                  "end": 3950,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 3941,
                    "end": 3950,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 3941,
                      "end": 3942,
                      "decorators": [],
                      "name": "t",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 3947,
                      "end": 3950,
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3925,
                      "end": 3926,
                      "decorators": [],
                      "name": "t",
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3927,
                    "end": 3937,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 3929,
                      "end": 3937,
                      "asserts": false,
                      "parameterName": {
                        "type": "Identifier",
                        "start": 3929,
                        "end": 3930,
                        "decorators": [],
                        "name": "t",
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3934,
                        "end": 3937,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 3934,
                          "end": 3937,
                          "literal": {
                            "type": "Literal",
                            "start": 3934,
                            "end": 3937,
                            "raw": "\"a\"",
                            "value": "a"
                          }
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 3954,
                "end": 3993,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3954,
                  "end": 3958,
                  "decorators": [],
                  "name": "then",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 3960,
                  "end": 3993,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 3965,
                    "end": 3993,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 3971,
                        "end": 3989,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 3975,
                            "end": 3989,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 3975,
                              "end": 3985,
                              "decorators": [],
                              "name": "test1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3980,
                                "end": 3985,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 3982,
                                  "end": 3985,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 3982,
                                    "end": 3985,
                                    "raw": "\"a\"",
                                    "value": "a"
                                  }
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 3988,
                              "end": 3989,
                              "decorators": [],
                              "name": "u",
                              "optional": false
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3960,
                      "end": 3961,
                      "decorators": [],
                      "name": "u",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3898,
          "end": 3904,
          "decorators": [],
          "name": "branch",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3998,
      "end": 4066,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4017,
        "end": 4066,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 4021,
            "end": 4041,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4021,
              "end": 4022,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4022,
              "end": 4040,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4024,
                "end": 4040,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4025,
                    "end": 4034,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4026,
                      "end": 4034,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4028,
                        "end": 4034
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4036,
                  "end": 4040,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4039,
                    "end": 4040,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4039,
                      "end": 4040,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 4044,
            "end": 4064,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4044,
              "end": 4045,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4045,
              "end": 4063,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4047,
                "end": 4063,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4048,
                    "end": 4054,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4051,
                      "end": 4054,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4053,
                        "end": 4054,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4053,
                          "end": 4054,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4056,
                  "end": 4063,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4059,
                    "end": 4063
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
        "start": 4008,
        "end": 4013,
        "decorators": [],
        "name": "Props",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4013,
        "end": 4016,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4014,
            "end": 4015,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4014,
              "end": 4015,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 4068,
      "end": 4115,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4085,
        "end": 4088,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4092,
          "end": 4107,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4097,
            "end": 4107,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4099,
              "end": 4107,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4104,
                "end": 4107,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4105,
                    "end": 4106,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4105,
                      "end": 4106,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4099,
                "end": 4104,
                "decorators": [],
                "name": "Props",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4108,
        "end": 4114,
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 4110,
          "end": 4114
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4088,
        "end": 4091,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4089,
            "end": 4090,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4089,
              "end": 4090,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4117,
      "end": 4203,
      "expression": {
        "type": "CallExpression",
        "start": 4117,
        "end": 4202,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 4121,
            "end": 4201,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 4125,
                "end": 4198,
                "argument": {
                  "type": "ObjectExpression",
                  "start": 4128,
                  "end": 4198,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4134,
                      "end": 4146,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4134,
                        "end": 4135,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 4137,
                        "end": 4146,
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "start": 4144,
                          "end": 4146,
                          "raw": "10",
                          "value": 10
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4138,
                            "end": 4139,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4152,
                      "end": 4193,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4152,
                        "end": 4153,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 4155,
                        "end": 4193,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 4164,
                          "end": 4193,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 4172,
                              "end": 4187,
                              "expression": {
                                "type": "CallExpression",
                                "start": 4172,
                                "end": 4186,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 4172,
                                  "end": 4184,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 4172,
                                    "end": 4175,
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4176,
                                    "end": 4184,
                                    "decorators": [],
                                    "name": "toString",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4156,
                            "end": 4159,
                            "decorators": [],
                            "name": "arg",
                            "optional": false
                          }
                        ]
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
          "start": 4117,
          "end": 4120,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 4205,
      "end": 4326,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4222,
        "end": 4228,
        "decorators": [],
        "name": "nested",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4232,
          "end": 4321,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4235,
            "end": 4321,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 4237,
              "end": 4321,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 4241,
                  "end": 4319,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4241,
                    "end": 4245,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4245,
                    "end": 4318,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 4247,
                      "end": 4318,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 4253,
                          "end": 4282,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4253,
                            "end": 4260,
                            "decorators": [],
                            "name": "produce",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4260,
                            "end": 4281,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 4262,
                              "end": 4281,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 4263,
                                  "end": 4275,
                                  "decorators": [],
                                  "name": "arg1",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4267,
                                    "end": 4275,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 4269,
                                      "end": 4275
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 4277,
                                "end": 4281,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4280,
                                  "end": 4281,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4280,
                                    "end": 4281,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 4287,
                          "end": 4314,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4287,
                            "end": 4294,
                            "decorators": [],
                            "name": "consume",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4294,
                            "end": 4313,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 4296,
                              "end": 4313,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 4297,
                                  "end": 4304,
                                  "decorators": [],
                                  "name": "arg2",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4301,
                                    "end": 4304,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4303,
                                      "end": 4304,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4303,
                                        "end": 4304,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 4306,
                                "end": 4313,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 4309,
                                  "end": 4313
                                }
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4322,
        "end": 4325,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4324,
          "end": 4325,
          "typeName": {
            "type": "Identifier",
            "start": 4324,
            "end": 4325,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4228,
        "end": 4231,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4229,
            "end": 4230,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4229,
              "end": 4230,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 4328,
      "end": 4435,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4334,
          "end": 4434,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4334,
            "end": 4343,
            "decorators": [],
            "name": "resNested",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4346,
            "end": 4434,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 4353,
                "end": 4433,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4357,
                    "end": 4430,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4357,
                      "end": 4361,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 4363,
                      "end": 4430,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4369,
                          "end": 4388,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4369,
                            "end": 4376,
                            "decorators": [],
                            "name": "produce",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 4378,
                            "end": 4388,
                            "async": false,
                            "body": {
                              "type": "ArrayExpression",
                              "start": 4385,
                              "end": 4388,
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "start": 4386,
                                  "end": 4387,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                }
                              ]
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 4379,
                                "end": 4380,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              }
                            ]
                          }
                        },
                        {
                          "type": "Property",
                          "start": 4394,
                          "end": 4425,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4394,
                            "end": 4401,
                            "decorators": [],
                            "name": "consume",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 4403,
                            "end": 4425,
                            "async": false,
                            "body": {
                              "type": "CallExpression",
                              "start": 4412,
                              "end": 4425,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 4421,
                                  "end": 4424,
                                  "raw": "\",\"",
                                  "value": ","
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 4412,
                                "end": 4420,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 4412,
                                  "end": 4415,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 4416,
                                  "end": 4420,
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false
                                }
                              },
                              "optional": false
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 4404,
                                "end": 4407,
                                "decorators": [],
                                "name": "arg",
                                "optional": false
                              }
                            ]
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
              "start": 4346,
              "end": 4352,
              "decorators": [],
              "name": "nested",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 4437,
      "end": 4570,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4454,
        "end": 4466,
        "decorators": [],
        "name": "twoConsumers",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4470,
          "end": 4565,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4473,
            "end": 4565,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 4475,
              "end": 4565,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 4479,
                  "end": 4501,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4479,
                    "end": 4480,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4480,
                    "end": 4500,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 4482,
                      "end": 4500,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4483,
                          "end": 4494,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4486,
                            "end": 4494,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 4488,
                              "end": 4494
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4496,
                        "end": 4500,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4499,
                          "end": 4500,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4499,
                            "end": 4500,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 4504,
                  "end": 4532,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4504,
                    "end": 4512,
                    "decorators": [],
                    "name": "consume1",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4512,
                    "end": 4531,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 4514,
                      "end": 4531,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4515,
                          "end": 4522,
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4519,
                            "end": 4522,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4521,
                              "end": 4522,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4521,
                                "end": 4522,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4524,
                        "end": 4531,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 4527,
                          "end": 4531
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 4535,
                  "end": 4563,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4535,
                    "end": 4543,
                    "decorators": [],
                    "name": "consume2",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4543,
                    "end": 4562,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 4545,
                      "end": 4562,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4546,
                          "end": 4553,
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4550,
                            "end": 4553,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4552,
                              "end": 4553,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4552,
                                "end": 4553,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4555,
                        "end": 4562,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 4558,
                          "end": 4562
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4566,
        "end": 4569,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4568,
          "end": 4569,
          "typeName": {
            "type": "Identifier",
            "start": 4568,
            "end": 4569,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4466,
        "end": 4469,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4467,
            "end": 4468,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4467,
              "end": 4468,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 4572,
      "end": 4687,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4578,
          "end": 4686,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4578,
            "end": 4593,
            "decorators": [],
            "name": "resTwoConsumers",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4596,
            "end": 4686,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 4609,
                "end": 4685,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4613,
                    "end": 4630,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4613,
                      "end": 4614,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 4616,
                      "end": 4630,
                      "async": false,
                      "body": {
                        "type": "ArrayExpression",
                        "start": 4625,
                        "end": 4630,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 4626,
                            "end": 4629,
                            "decorators": [],
                            "name": "arg",
                            "optional": false
                          }
                        ]
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4617,
                          "end": 4620,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 4634,
                    "end": 4656,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4634,
                      "end": 4642,
                      "decorators": [],
                      "name": "consume1",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 4644,
                      "end": 4656,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 4654,
                        "end": 4656,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4645,
                          "end": 4649,
                          "decorators": [],
                          "name": "arg1",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 4660,
                    "end": 4682,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4660,
                      "end": 4668,
                      "decorators": [],
                      "name": "consume2",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 4670,
                      "end": 4682,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 4680,
                        "end": 4682,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4671,
                          "end": 4675,
                          "decorators": [],
                          "name": "arg2",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 4596,
              "end": 4608,
              "decorators": [],
              "name": "twoConsumers",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 4689,
      "end": 4879,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4706,
        "end": 4738,
        "decorators": [],
        "name": "multipleProducersBeforeConsumers",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4746,
          "end": 4868,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4749,
            "end": 4868,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 4751,
              "end": 4868,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 4755,
                  "end": 4777,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4755,
                    "end": 4756,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4756,
                    "end": 4776,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 4758,
                      "end": 4776,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4759,
                          "end": 4770,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4762,
                            "end": 4770,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 4764,
                              "end": 4770
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4772,
                        "end": 4776,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4775,
                          "end": 4776,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4775,
                            "end": 4776,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 4780,
                  "end": 4803,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4780,
                    "end": 4781,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4781,
                    "end": 4802,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 4783,
                      "end": 4802,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4784,
                          "end": 4795,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4787,
                            "end": 4795,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 4789,
                              "end": 4795
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4797,
                        "end": 4802,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4800,
                          "end": 4802,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4800,
                            "end": 4802,
                            "decorators": [],
                            "name": "T2",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 4806,
                  "end": 4834,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4806,
                    "end": 4814,
                    "decorators": [],
                    "name": "consume1",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4814,
                    "end": 4833,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 4816,
                      "end": 4833,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4817,
                          "end": 4824,
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4821,
                            "end": 4824,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4823,
                              "end": 4824,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4823,
                                "end": 4824,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4826,
                        "end": 4833,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 4829,
                          "end": 4833
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 4837,
                  "end": 4866,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4837,
                    "end": 4845,
                    "decorators": [],
                    "name": "consume2",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4845,
                    "end": 4865,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 4847,
                      "end": 4865,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4848,
                          "end": 4856,
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4852,
                            "end": 4856,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4854,
                              "end": 4856,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4854,
                                "end": 4856,
                                "decorators": [],
                                "name": "T2",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4858,
                        "end": 4865,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 4861,
                          "end": 4865
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4869,
        "end": 4878,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 4871,
          "end": 4878,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 4872,
              "end": 4873,
              "typeName": {
                "type": "Identifier",
                "start": 4872,
                "end": 4873,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 4875,
              "end": 4877,
              "typeName": {
                "type": "Identifier",
                "start": 4875,
                "end": 4877,
                "decorators": [],
                "name": "T2",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4738,
        "end": 4745,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4739,
            "end": 4740,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4739,
              "end": 4740,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4742,
            "end": 4744,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4742,
              "end": 4744,
              "decorators": [],
              "name": "T2",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 4881,
      "end": 5063,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4887,
          "end": 5062,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4887,
            "end": 4922,
            "decorators": [],
            "name": "resMultipleProducersBeforeConsumers",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4925,
            "end": 5062,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 4958,
                "end": 5061,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4962,
                    "end": 4979,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4962,
                      "end": 4963,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 4965,
                      "end": 4979,
                      "async": false,
                      "body": {
                        "type": "ArrayExpression",
                        "start": 4974,
                        "end": 4979,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 4975,
                            "end": 4978,
                            "decorators": [],
                            "name": "arg",
                            "optional": false
                          }
                        ]
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4966,
                          "end": 4969,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 4983,
                    "end": 5006,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4983,
                      "end": 4984,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 4986,
                      "end": 5006,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 4995,
                        "end": 5006,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 5002,
                            "end": 5005,
                            "decorators": [],
                            "name": "arg",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 4995,
                          "end": 5001,
                          "decorators": [],
                          "name": "Number",
                          "optional": false
                        },
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4987,
                          "end": 4990,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 5010,
                    "end": 5032,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5010,
                      "end": 5018,
                      "decorators": [],
                      "name": "consume1",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5020,
                      "end": 5032,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 5030,
                        "end": 5032,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5021,
                          "end": 5025,
                          "decorators": [],
                          "name": "arg1",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 5036,
                    "end": 5058,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5036,
                      "end": 5044,
                      "decorators": [],
                      "name": "consume2",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5046,
                      "end": 5058,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 5056,
                        "end": 5058,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5047,
                          "end": 5051,
                          "decorators": [],
                          "name": "arg2",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 4925,
              "end": 4957,
              "decorators": [],
              "name": "multipleProducersBeforeConsumers",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 5065,
      "end": 5213,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5082,
        "end": 5107,
        "decorators": [],
        "name": "withConditionalExpression",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5119,
          "end": 5198,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5122,
            "end": 5198,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 5124,
              "end": 5198,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5128,
                  "end": 5151,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5128,
                    "end": 5129,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5129,
                    "end": 5150,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 5131,
                      "end": 5150,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5132,
                          "end": 5144,
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5136,
                            "end": 5144,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5138,
                              "end": 5144
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 5146,
                        "end": 5150,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5149,
                          "end": 5150,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5149,
                            "end": 5150,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 5154,
                  "end": 5173,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5154,
                    "end": 5155,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5155,
                    "end": 5172,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 5157,
                      "end": 5172,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5158,
                          "end": 5165,
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5162,
                            "end": 5165,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5164,
                              "end": 5165,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5164,
                                "end": 5165,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 5167,
                        "end": 5172,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5170,
                          "end": 5172,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5170,
                            "end": 5172,
                            "decorators": [],
                            "name": "T2",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 5176,
                  "end": 5196,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5176,
                    "end": 5177,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5177,
                    "end": 5195,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 5179,
                      "end": 5195,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5180,
                          "end": 5188,
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5184,
                            "end": 5188,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5186,
                              "end": 5188,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5186,
                                "end": 5188,
                                "decorators": [],
                                "name": "T2",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 5190,
                        "end": 5195,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5193,
                          "end": 5195,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5193,
                            "end": 5195,
                            "decorators": [],
                            "name": "T3",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5199,
        "end": 5212,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 5201,
          "end": 5212,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 5202,
              "end": 5203,
              "typeName": {
                "type": "Identifier",
                "start": 5202,
                "end": 5203,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 5205,
              "end": 5207,
              "typeName": {
                "type": "Identifier",
                "start": 5205,
                "end": 5207,
                "decorators": [],
                "name": "T2",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 5209,
              "end": 5211,
              "typeName": {
                "type": "Identifier",
                "start": 5209,
                "end": 5211,
                "decorators": [],
                "name": "T3",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5107,
        "end": 5118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5108,
            "end": 5109,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5108,
              "end": 5109,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5111,
            "end": 5113,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5111,
              "end": 5113,
              "decorators": [],
              "name": "T2",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5115,
            "end": 5117,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5115,
              "end": 5117,
              "decorators": [],
              "name": "T3",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 5215,
      "end": 5406,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5221,
          "end": 5405,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5221,
            "end": 5249,
            "decorators": [],
            "name": "resWithConditionalExpression",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5252,
            "end": 5405,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 5278,
                "end": 5404,
                "properties": [
                  {
                    "type": "Property",
                    "start": 5282,
                    "end": 5299,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5282,
                      "end": 5283,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5285,
                      "end": 5299,
                      "async": false,
                      "body": {
                        "type": "ArrayExpression",
                        "start": 5294,
                        "end": 5299,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 5295,
                            "end": 5298,
                            "decorators": [],
                            "name": "arg",
                            "optional": false
                          }
                        ]
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5286,
                          "end": 5289,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 5303,
                    "end": 5373,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5303,
                      "end": 5304,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ConditionalExpression",
                      "start": 5306,
                      "end": 5373,
                      "alternate": {
                        "type": "ArrowFunctionExpression",
                        "start": 5350,
                        "end": 5373,
                        "async": false,
                        "body": {
                          "type": "TSAsExpression",
                          "start": 5359,
                          "end": 5373,
                          "expression": {
                            "type": "Literal",
                            "start": 5359,
                            "end": 5364,
                            "raw": "\"two\"",
                            "value": "two"
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5368,
                            "end": 5373,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5368,
                              "end": 5373,
                              "decorators": [],
                              "name": "const",
                              "optional": false
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5351,
                            "end": 5354,
                            "decorators": [],
                            "name": "arg",
                            "optional": false
                          }
                        ]
                      },
                      "consequent": {
                        "type": "ArrowFunctionExpression",
                        "start": 5322,
                        "end": 5347,
                        "async": false,
                        "body": {
                          "type": "TSAsExpression",
                          "start": 5331,
                          "end": 5347,
                          "expression": {
                            "type": "Literal",
                            "start": 5331,
                            "end": 5338,
                            "raw": "\"first\"",
                            "value": "first"
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5342,
                            "end": 5347,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5342,
                              "end": 5347,
                              "decorators": [],
                              "name": "const",
                              "optional": false
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5323,
                            "end": 5326,
                            "decorators": [],
                            "name": "arg",
                            "optional": false
                          }
                        ]
                      },
                      "test": {
                        "type": "CallExpression",
                        "start": 5306,
                        "end": 5319,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 5306,
                          "end": 5317,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 5306,
                            "end": 5310,
                            "decorators": [],
                            "name": "Math",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 5311,
                            "end": 5317,
                            "decorators": [],
                            "name": "random",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "start": 5377,
                    "end": 5401,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5377,
                      "end": 5378,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5380,
                      "end": 5401,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 5389,
                        "end": 5401,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 5397,
                            "end": 5400,
                            "decorators": [],
                            "name": "arg",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 5389,
                          "end": 5396,
                          "decorators": [],
                          "name": "Boolean",
                          "optional": false
                        },
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5381,
                          "end": 5384,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 5252,
              "end": 5277,
              "decorators": [],
              "name": "withConditionalExpression",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 5408,
      "end": 5581,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5425,
        "end": 5430,
        "decorators": [],
        "name": "onion",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5442,
          "end": 5566,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5445,
            "end": 5566,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 5447,
              "end": 5566,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5451,
                  "end": 5474,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5451,
                    "end": 5452,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5452,
                    "end": 5473,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 5454,
                      "end": 5473,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5455,
                          "end": 5467,
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5459,
                            "end": 5467,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5461,
                              "end": 5467
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 5469,
                        "end": 5473,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5472,
                          "end": 5473,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5472,
                            "end": 5473,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 5477,
                  "end": 5564,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5477,
                    "end": 5483,
                    "decorators": [],
                    "name": "nested",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5483,
                    "end": 5563,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 5485,
                      "end": 5563,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 5491,
                          "end": 5510,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5491,
                            "end": 5492,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5492,
                            "end": 5509,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 5494,
                              "end": 5509,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 5495,
                                  "end": 5502,
                                  "decorators": [],
                                  "name": "arg2",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5499,
                                    "end": 5502,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 5501,
                                      "end": 5502,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 5501,
                                        "end": 5502,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 5504,
                                "end": 5509,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 5507,
                                  "end": 5509,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5507,
                                    "end": 5509,
                                    "decorators": [],
                                    "name": "T2",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 5515,
                          "end": 5559,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5515,
                            "end": 5522,
                            "decorators": [],
                            "name": "nested2",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5522,
                            "end": 5558,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 5524,
                              "end": 5558,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 5532,
                                  "end": 5552,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5532,
                                    "end": 5533,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5533,
                                    "end": 5551,
                                    "typeAnnotation": {
                                      "type": "TSFunctionType",
                                      "start": 5535,
                                      "end": 5551,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 5536,
                                          "end": 5544,
                                          "decorators": [],
                                          "name": "arg2",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 5540,
                                            "end": 5544,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 5542,
                                              "end": 5544,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 5542,
                                                "end": 5544,
                                                "decorators": [],
                                                "name": "T2",
                                                "optional": false
                                              }
                                            }
                                          }
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "start": 5546,
                                        "end": 5551,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 5549,
                                          "end": 5551,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 5549,
                                            "end": 5551,
                                            "decorators": [],
                                            "name": "T3",
                                            "optional": false
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5567,
        "end": 5580,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 5569,
          "end": 5580,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 5570,
              "end": 5571,
              "typeName": {
                "type": "Identifier",
                "start": 5570,
                "end": 5571,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 5573,
              "end": 5575,
              "typeName": {
                "type": "Identifier",
                "start": 5573,
                "end": 5575,
                "decorators": [],
                "name": "T2",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 5577,
              "end": 5579,
              "typeName": {
                "type": "Identifier",
                "start": 5577,
                "end": 5579,
                "decorators": [],
                "name": "T3",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5430,
        "end": 5441,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5431,
            "end": 5432,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5431,
              "end": 5432,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5434,
            "end": 5436,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5434,
              "end": 5436,
              "decorators": [],
              "name": "T2",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5438,
            "end": 5440,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5438,
              "end": 5440,
              "decorators": [],
              "name": "T3",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 5583,
      "end": 5734,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5589,
          "end": 5733,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5589,
            "end": 5597,
            "decorators": [],
            "name": "resOnion",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5600,
            "end": 5733,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 5606,
                "end": 5732,
                "properties": [
                  {
                    "type": "Property",
                    "start": 5610,
                    "end": 5627,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5610,
                      "end": 5611,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5613,
                      "end": 5627,
                      "async": false,
                      "body": {
                        "type": "ArrayExpression",
                        "start": 5622,
                        "end": 5627,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 5623,
                            "end": 5626,
                            "decorators": [],
                            "name": "arg",
                            "optional": false
                          }
                        ]
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5614,
                          "end": 5617,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 5631,
                    "end": 5729,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5631,
                      "end": 5637,
                      "decorators": [],
                      "name": "nested",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 5639,
                      "end": 5729,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 5645,
                          "end": 5670,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5645,
                            "end": 5646,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 5648,
                            "end": 5670,
                            "async": false,
                            "body": {
                              "type": "CallExpression",
                              "start": 5657,
                              "end": 5670,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 5666,
                                  "end": 5669,
                                  "raw": "\",\"",
                                  "value": ","
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 5657,
                                "end": 5665,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 5657,
                                  "end": 5660,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 5661,
                                  "end": 5665,
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false
                                }
                              },
                              "optional": false
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5649,
                                "end": 5652,
                                "decorators": [],
                                "name": "arg",
                                "optional": false
                              }
                            ]
                          }
                        },
                        {
                          "type": "Property",
                          "start": 5676,
                          "end": 5724,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5676,
                            "end": 5683,
                            "decorators": [],
                            "name": "nested2",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 5685,
                            "end": 5724,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 5693,
                                "end": 5717,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 5693,
                                  "end": 5694,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 5696,
                                  "end": 5717,
                                  "async": false,
                                  "body": {
                                    "type": "CallExpression",
                                    "start": 5705,
                                    "end": 5717,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 5713,
                                        "end": 5716,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 5705,
                                      "end": 5712,
                                      "decorators": [],
                                      "name": "Boolean",
                                      "optional": false
                                    },
                                    "optional": false
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 5697,
                                      "end": 5700,
                                      "decorators": [],
                                      "name": "arg",
                                      "optional": false
                                    }
                                  ]
                                }
                              }
                            ]
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
              "start": 5600,
              "end": 5605,
              "decorators": [],
              "name": "onion",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 5736,
      "end": 5942,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5753,
        "end": 5759,
        "decorators": [],
        "name": "onion2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5775,
          "end": 5923,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5778,
            "end": 5923,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 5780,
              "end": 5923,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5784,
                  "end": 5807,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5784,
                    "end": 5785,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5785,
                    "end": 5806,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 5787,
                      "end": 5806,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5788,
                          "end": 5800,
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5792,
                            "end": 5800,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5794,
                              "end": 5800
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 5802,
                        "end": 5806,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5805,
                          "end": 5806,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5805,
                            "end": 5806,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 5810,
                  "end": 5921,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5810,
                    "end": 5816,
                    "decorators": [],
                    "name": "nested",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5816,
                    "end": 5920,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 5818,
                      "end": 5920,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 5824,
                          "end": 5843,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5824,
                            "end": 5825,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5825,
                            "end": 5842,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 5827,
                              "end": 5842,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 5828,
                                  "end": 5835,
                                  "decorators": [],
                                  "name": "arg2",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5832,
                                    "end": 5835,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 5834,
                                      "end": 5835,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 5834,
                                        "end": 5835,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 5837,
                                "end": 5842,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 5840,
                                  "end": 5842,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5840,
                                    "end": 5842,
                                    "decorators": [],
                                    "name": "T2",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 5848,
                          "end": 5867,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5848,
                            "end": 5849,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5849,
                            "end": 5866,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 5851,
                              "end": 5866,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 5852,
                                  "end": 5859,
                                  "decorators": [],
                                  "name": "arg3",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5856,
                                    "end": 5859,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 5858,
                                      "end": 5859,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 5858,
                                        "end": 5859,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 5861,
                                "end": 5866,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 5864,
                                  "end": 5866,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5864,
                                    "end": 5866,
                                    "decorators": [],
                                    "name": "T3",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 5872,
                          "end": 5916,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5872,
                            "end": 5879,
                            "decorators": [],
                            "name": "nested2",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5879,
                            "end": 5915,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 5881,
                              "end": 5915,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 5889,
                                  "end": 5909,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5889,
                                    "end": 5890,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5890,
                                    "end": 5908,
                                    "typeAnnotation": {
                                      "type": "TSFunctionType",
                                      "start": 5892,
                                      "end": 5908,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 5893,
                                          "end": 5901,
                                          "decorators": [],
                                          "name": "arg4",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 5897,
                                            "end": 5901,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 5899,
                                              "end": 5901,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 5899,
                                                "end": 5901,
                                                "decorators": [],
                                                "name": "T3",
                                                "optional": false
                                              }
                                            }
                                          }
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "start": 5903,
                                        "end": 5908,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 5906,
                                          "end": 5908,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 5906,
                                            "end": 5908,
                                            "decorators": [],
                                            "name": "T4",
                                            "optional": false
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5924,
        "end": 5941,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 5926,
          "end": 5941,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 5927,
              "end": 5928,
              "typeName": {
                "type": "Identifier",
                "start": 5927,
                "end": 5928,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 5930,
              "end": 5932,
              "typeName": {
                "type": "Identifier",
                "start": 5930,
                "end": 5932,
                "decorators": [],
                "name": "T2",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 5934,
              "end": 5936,
              "typeName": {
                "type": "Identifier",
                "start": 5934,
                "end": 5936,
                "decorators": [],
                "name": "T3",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 5938,
              "end": 5940,
              "typeName": {
                "type": "Identifier",
                "start": 5938,
                "end": 5940,
                "decorators": [],
                "name": "T4",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5759,
        "end": 5774,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5760,
            "end": 5761,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5760,
              "end": 5761,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5763,
            "end": 5765,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5763,
              "end": 5765,
              "decorators": [],
              "name": "T2",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5767,
            "end": 5769,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5767,
              "end": 5769,
              "decorators": [],
              "name": "T3",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5771,
            "end": 5773,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5771,
              "end": 5773,
              "decorators": [],
              "name": "T4",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 5944,
      "end": 6126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5950,
          "end": 6125,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5950,
            "end": 5959,
            "decorators": [],
            "name": "resOnion2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5962,
            "end": 6125,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 5969,
                "end": 6124,
                "properties": [
                  {
                    "type": "Property",
                    "start": 5973,
                    "end": 5990,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5973,
                      "end": 5974,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5976,
                      "end": 5990,
                      "async": false,
                      "body": {
                        "type": "ArrayExpression",
                        "start": 5985,
                        "end": 5990,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 5986,
                            "end": 5989,
                            "decorators": [],
                            "name": "arg",
                            "optional": false
                          }
                        ]
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5977,
                          "end": 5980,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 5994,
                    "end": 6121,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5994,
                      "end": 6000,
                      "decorators": [],
                      "name": "nested",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 6002,
                      "end": 6121,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 6008,
                          "end": 6033,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 6008,
                            "end": 6009,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 6011,
                            "end": 6033,
                            "async": false,
                            "body": {
                              "type": "CallExpression",
                              "start": 6020,
                              "end": 6033,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 6029,
                                  "end": 6032,
                                  "raw": "\",\"",
                                  "value": ","
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 6020,
                                "end": 6028,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 6020,
                                  "end": 6023,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 6024,
                                  "end": 6028,
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false
                                }
                              },
                              "optional": false
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 6012,
                                "end": 6015,
                                "decorators": [],
                                "name": "arg",
                                "optional": false
                              }
                            ]
                          }
                        },
                        {
                          "type": "Property",
                          "start": 6039,
                          "end": 6062,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 6039,
                            "end": 6040,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 6042,
                            "end": 6062,
                            "async": false,
                            "body": {
                              "type": "CallExpression",
                              "start": 6051,
                              "end": 6062,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 6058,
                                  "end": 6061,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 6051,
                                "end": 6057,
                                "decorators": [],
                                "name": "Number",
                                "optional": false
                              },
                              "optional": false
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 6043,
                                "end": 6046,
                                "decorators": [],
                                "name": "arg",
                                "optional": false
                              }
                            ]
                          }
                        },
                        {
                          "type": "Property",
                          "start": 6068,
                          "end": 6116,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 6068,
                            "end": 6075,
                            "decorators": [],
                            "name": "nested2",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 6077,
                            "end": 6116,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 6085,
                                "end": 6109,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 6085,
                                  "end": 6086,
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 6088,
                                  "end": 6109,
                                  "async": false,
                                  "body": {
                                    "type": "CallExpression",
                                    "start": 6097,
                                    "end": 6109,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 6105,
                                        "end": 6108,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 6097,
                                      "end": 6104,
                                      "decorators": [],
                                      "name": "Boolean",
                                      "optional": false
                                    },
                                    "optional": false
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 6089,
                                      "end": 6092,
                                      "decorators": [],
                                      "name": "arg",
                                      "optional": false
                                    }
                                  ]
                                }
                              }
                            ]
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
              "start": 5962,
              "end": 5968,
              "decorators": [],
              "name": "onion2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 6128,
      "end": 6295,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 6145,
        "end": 6152,
        "decorators": [],
        "name": "distant",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 6156,
          "end": 6290,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6160,
            "end": 6290,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 6162,
              "end": 6290,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 6166,
                  "end": 6255,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6166,
                    "end": 6169,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6169,
                    "end": 6254,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 6171,
                      "end": 6254,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 6177,
                          "end": 6250,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 6177,
                            "end": 6180,
                            "decorators": [],
                            "name": "bar",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6180,
                            "end": 6249,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 6182,
                              "end": 6249,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 6190,
                                  "end": 6243,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 6190,
                                    "end": 6193,
                                    "decorators": [],
                                    "name": "baz",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 6193,
                                    "end": 6242,
                                    "typeAnnotation": {
                                      "type": "TSTypeLiteral",
                                      "start": 6195,
                                      "end": 6242,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 6205,
                                          "end": 6234,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 6205,
                                            "end": 6213,
                                            "decorators": [],
                                            "name": "producer",
                                            "optional": false
                                          },
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 6213,
                                            "end": 6233,
                                            "typeAnnotation": {
                                              "type": "TSFunctionType",
                                              "start": 6215,
                                              "end": 6233,
                                              "params": [
                                                {
                                                  "type": "Identifier",
                                                  "start": 6216,
                                                  "end": 6227,
                                                  "decorators": [],
                                                  "name": "arg",
                                                  "optional": false,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeAnnotation",
                                                    "start": 6219,
                                                    "end": 6227,
                                                    "typeAnnotation": {
                                                      "type": "TSStringKeyword",
                                                      "start": 6221,
                                                      "end": 6227
                                                    }
                                                  }
                                                }
                                              ],
                                              "returnType": {
                                                "type": "TSTypeAnnotation",
                                                "start": 6229,
                                                "end": 6233,
                                                "typeAnnotation": {
                                                  "type": "TSTypeReference",
                                                  "start": 6232,
                                                  "end": 6233,
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "start": 6232,
                                                    "end": 6233,
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 6258,
                  "end": 6288,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6258,
                    "end": 6266,
                    "decorators": [],
                    "name": "consumer",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6266,
                    "end": 6287,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 6268,
                      "end": 6287,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 6269,
                          "end": 6275,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6272,
                            "end": 6275,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6274,
                              "end": 6275,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6274,
                                "end": 6275,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 6277,
                        "end": 6287,
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 6280,
                          "end": 6287
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 6291,
        "end": 6294,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 6293,
          "end": 6294,
          "typeName": {
            "type": "Identifier",
            "start": 6293,
            "end": 6294,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6152,
        "end": 6155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6153,
            "end": 6154,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 6153,
              "end": 6154,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 6297,
      "end": 6438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6303,
          "end": 6437,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6303,
            "end": 6313,
            "decorators": [],
            "name": "distantRes",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6316,
            "end": 6437,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 6324,
                "end": 6436,
                "properties": [
                  {
                    "type": "Property",
                    "start": 6328,
                    "end": 6408,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6328,
                      "end": 6331,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 6333,
                      "end": 6408,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 6339,
                          "end": 6403,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 6339,
                            "end": 6342,
                            "decorators": [],
                            "name": "bar",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 6344,
                            "end": 6403,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 6352,
                                "end": 6396,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 6352,
                                  "end": 6355,
                                  "decorators": [],
                                  "name": "baz",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ObjectExpression",
                                  "start": 6357,
                                  "end": 6396,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 6367,
                                      "end": 6387,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 6367,
                                        "end": 6375,
                                        "decorators": [],
                                        "name": "producer",
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "ArrowFunctionExpression",
                                        "start": 6377,
                                        "end": 6387,
                                        "async": false,
                                        "body": {
                                          "type": "Literal",
                                          "start": 6386,
                                          "end": 6387,
                                          "raw": "1",
                                          "value": 1
                                        },
                                        "expression": true,
                                        "generator": false,
                                        "id": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "start": 6378,
                                            "end": 6381,
                                            "decorators": [],
                                            "name": "arg",
                                            "optional": false
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 6412,
                    "end": 6433,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6412,
                      "end": 6420,
                      "decorators": [],
                      "name": "consumer",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 6422,
                      "end": 6433,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 6431,
                        "end": 6433,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 6423,
                          "end": 6426,
                          "decorators": [],
                          "name": "val",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 6316,
              "end": 6323,
              "decorators": [],
              "name": "distant",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
