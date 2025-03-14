__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1535,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 41,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "StringMap",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 17,
        "end": 40,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 19,
            "end": 38,
            "parameters": [
              {
                "type": "Identifier",
                "start": 20,
                "end": 29,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 21,
                  "end": 29,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 23,
                    "end": 29
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 55,
            "decorators": [],
            "name": "empty1",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 58,
            "end": 60,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 76,
            "decorators": [],
            "name": "empty2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 74,
                "end": 76,
                "members": []
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 90,
            "decorators": [],
            "name": "names1",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 93,
            "end": 115,
            "properties": [
              {
                "type": "Property",
                "start": 95,
                "end": 103,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 98,
                  "end": 103,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              },
              {
                "type": "Property",
                "start": 105,
                "end": 113,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 108,
                  "end": 113,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 153,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 153,
            "decorators": [],
            "name": "names2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 153,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 129,
                "end": 153,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 131,
                    "end": 141,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 132,
                      "end": 140,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 134,
                        "end": 140
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 142,
                    "end": 151,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 145,
                        "end": 151
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 173,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 173,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 173,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 173,
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 173,
                  "decorators": [],
                  "name": "StringMap",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 204,
      "expression": {
        "type": "AssignmentExpression",
        "start": 175,
        "end": 203,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 175,
          "end": 178,
          "decorators": [],
          "name": "map",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 181,
          "end": 203,
          "properties": [
            {
              "type": "Property",
              "start": 183,
              "end": 191,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 186,
                "end": 191,
                "raw": "\"xxx\"",
                "value": "xxx"
              }
            },
            {
              "type": "Property",
              "start": 193,
              "end": 201,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 196,
                "end": 201,
                "raw": "\"yyy\"",
                "value": "yyy"
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 218,
      "expression": {
        "type": "AssignmentExpression",
        "start": 205,
        "end": 217,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 205,
          "end": 208,
          "decorators": [],
          "name": "map",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 211,
          "end": 217,
          "decorators": [],
          "name": "empty1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 232,
      "expression": {
        "type": "AssignmentExpression",
        "start": 219,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 219,
          "end": 222,
          "decorators": [],
          "name": "map",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 225,
          "end": 231,
          "decorators": [],
          "name": "empty2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 246,
      "expression": {
        "type": "AssignmentExpression",
        "start": 233,
        "end": 245,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 233,
          "end": 236,
          "decorators": [],
          "name": "map",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 239,
          "end": 245,
          "decorators": [],
          "name": "names1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 247,
      "end": 260,
      "expression": {
        "type": "AssignmentExpression",
        "start": 247,
        "end": 259,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 247,
          "end": 250,
          "decorators": [],
          "name": "map",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 253,
          "end": 259,
          "decorators": [],
          "name": "names2",
          "optional": false
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 262,
      "end": 330,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 298,
        "decorators": [],
        "name": "getStringIndexValue",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 302,
          "end": 325,
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 305,
            "end": 325,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 307,
              "end": 325,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 309,
                  "end": 323,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 310,
                      "end": 319,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 311,
                        "end": 319,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 313,
                          "end": 319
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 320,
                    "end": 323,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 322,
                      "end": 323,
                      "typeName": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 323,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
        "start": 326,
        "end": 329,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 328,
          "end": 329,
          "typeName": {
            "type": "Identifier",
            "start": 328,
            "end": 329,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 298,
        "end": 301,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 299,
            "end": 300,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
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
      "start": 331,
      "end": 399,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 367,
        "decorators": [],
        "name": "getNumberIndexValue",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 371,
          "end": 394,
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 374,
            "end": 394,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 376,
              "end": 394,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 378,
                  "end": 392,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 379,
                      "end": 388,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 380,
                        "end": 388,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 382,
                          "end": 388
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 389,
                    "end": 392,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 391,
                      "end": 392,
                      "typeName": {
                        "type": "Identifier",
                        "start": 391,
                        "end": 392,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
        "start": 395,
        "end": 398,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 397,
          "end": 398,
          "typeName": {
            "type": "Identifier",
            "start": 397,
            "end": 398,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 367,
        "end": 370,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 368,
            "end": 369,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
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
      "start": 401,
      "end": 567,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 415,
        "end": 567,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 421,
            "end": 447,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 427,
                "end": 446,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 429,
                  "decorators": [],
                  "name": "o1",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 432,
                  "end": 446,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 434,
                      "end": 438,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 434,
                        "end": 435,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 437,
                        "end": 438,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 440,
                      "end": 444,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 440,
                        "end": 441,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 443,
                        "end": 444,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 452,
            "end": 485,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 456,
                "end": 484,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 484,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 458,
                    "end": 484,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 460,
                      "end": 484,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 462,
                          "end": 472,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 462,
                            "end": 463,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 463,
                            "end": 471,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 465,
                              "end": 471
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 473,
                          "end": 482,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 473,
                            "end": 474,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 474,
                            "end": 482,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 476,
                              "end": 482
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 490,
            "end": 525,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 496,
                "end": 524,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 498,
                  "decorators": [],
                  "name": "v1",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 501,
                  "end": 524,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 521,
                      "end": 523,
                      "decorators": [],
                      "name": "o1",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 501,
                    "end": 520,
                    "decorators": [],
                    "name": "getStringIndexValue",
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
            "type": "VariableDeclaration",
            "start": 530,
            "end": 565,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 536,
                "end": 564,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 536,
                  "end": 538,
                  "decorators": [],
                  "name": "v2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 541,
                  "end": 564,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 561,
                      "end": 563,
                      "decorators": [],
                      "name": "o2",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 541,
                    "end": 560,
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 412,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 569,
      "end": 739,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 583,
        "end": 739,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 589,
            "end": 619,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 595,
                "end": 618,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 595,
                  "end": 597,
                  "decorators": [],
                  "name": "o1",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 600,
                  "end": 618,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 602,
                      "end": 608,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 602,
                        "end": 603,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 605,
                        "end": 608,
                        "raw": "\"1\"",
                        "value": "1"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 610,
                      "end": 616,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 611,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 613,
                        "end": 616,
                        "raw": "\"2\"",
                        "value": "2"
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 624,
            "end": 657,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 628,
                "end": 656,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 656,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 630,
                    "end": 656,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 632,
                      "end": 656,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 634,
                          "end": 644,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 634,
                            "end": 635,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 635,
                            "end": 643,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 637,
                              "end": 643
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 645,
                          "end": 654,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 645,
                            "end": 646,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 646,
                            "end": 654,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 648,
                              "end": 654
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 662,
            "end": 697,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 668,
                "end": 696,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 670,
                  "decorators": [],
                  "name": "v1",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 673,
                  "end": 696,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 693,
                      "end": 695,
                      "decorators": [],
                      "name": "o1",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 673,
                    "end": 692,
                    "decorators": [],
                    "name": "getStringIndexValue",
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
            "type": "VariableDeclaration",
            "start": 702,
            "end": 737,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 708,
                "end": 736,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 708,
                  "end": 710,
                  "decorators": [],
                  "name": "v2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 713,
                  "end": 736,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 733,
                      "end": 735,
                      "decorators": [],
                      "name": "o2",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 732,
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 580,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 741,
      "end": 909,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 755,
        "end": 909,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 761,
            "end": 789,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 767,
                "end": 788,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 769,
                  "decorators": [],
                  "name": "o1",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 772,
                  "end": 788,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 774,
                      "end": 778,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 774,
                        "end": 775,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 777,
                        "end": 778,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 780,
                      "end": 786,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 780,
                        "end": 781,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 783,
                        "end": 786,
                        "raw": "\"2\"",
                        "value": "2"
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 794,
            "end": 827,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 798,
                "end": 826,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 826,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 800,
                    "end": 826,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 802,
                      "end": 826,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 804,
                          "end": 814,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 804,
                            "end": 805,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 805,
                            "end": 813,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 807,
                              "end": 813
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 815,
                          "end": 824,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 815,
                            "end": 816,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 816,
                            "end": 824,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 818,
                              "end": 824
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 832,
            "end": 867,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 838,
                "end": 866,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 838,
                  "end": 840,
                  "decorators": [],
                  "name": "v1",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 843,
                  "end": 866,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 863,
                      "end": 865,
                      "decorators": [],
                      "name": "o1",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 843,
                    "end": 862,
                    "decorators": [],
                    "name": "getStringIndexValue",
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
            "type": "VariableDeclaration",
            "start": 872,
            "end": 907,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 878,
                "end": 906,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 878,
                  "end": 880,
                  "decorators": [],
                  "name": "v2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 883,
                  "end": 906,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 903,
                      "end": 905,
                      "decorators": [],
                      "name": "o2",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 902,
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 752,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 911,
      "end": 1190,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 925,
        "end": 1190,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 931,
            "end": 971,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 937,
                "end": 970,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 937,
                  "end": 939,
                  "decorators": [],
                  "name": "o1",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 942,
                  "end": 970,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 944,
                      "end": 950,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 944,
                        "end": 945,
                        "raw": "0",
                        "value": 0
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 947,
                        "end": 950,
                        "raw": "\"0\"",
                        "value": "0"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 952,
                      "end": 958,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 952,
                        "end": 953,
                        "raw": "1",
                        "value": 1
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 955,
                        "end": 958,
                        "raw": "\"1\"",
                        "value": "1"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 960,
                      "end": 968,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 960,
                        "end": 965,
                        "decorators": [],
                        "name": "count",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 967,
                        "end": 968,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 976,
            "end": 1024,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 980,
                "end": 1023,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 980,
                  "end": 1023,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 982,
                    "end": 1023,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 984,
                      "end": 1023,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 986,
                          "end": 996,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 986,
                            "end": 987,
                            "raw": "0",
                            "value": 0
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 987,
                            "end": 995,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 989,
                              "end": 995
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 997,
                          "end": 1007,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 997,
                            "end": 998,
                            "raw": "1",
                            "value": 1
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 998,
                            "end": 1006,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1000,
                              "end": 1006
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1008,
                          "end": 1021,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1008,
                            "end": 1013,
                            "decorators": [],
                            "name": "count",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1013,
                            "end": 1021,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1015,
                              "end": 1021
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1033,
            "end": 1068,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1039,
                "end": 1067,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1041,
                  "decorators": [],
                  "name": "v1",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1044,
                  "end": 1067,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1064,
                      "end": 1066,
                      "decorators": [],
                      "name": "o1",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1044,
                    "end": 1063,
                    "decorators": [],
                    "name": "getStringIndexValue",
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
            "type": "VariableDeclaration",
            "start": 1073,
            "end": 1108,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1079,
                "end": 1107,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1079,
                  "end": 1081,
                  "decorators": [],
                  "name": "v2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1084,
                  "end": 1107,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1104,
                      "end": 1106,
                      "decorators": [],
                      "name": "o2",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1084,
                    "end": 1103,
                    "decorators": [],
                    "name": "getStringIndexValue",
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
            "type": "VariableDeclaration",
            "start": 1113,
            "end": 1148,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1119,
                "end": 1147,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1119,
                  "end": 1121,
                  "decorators": [],
                  "name": "v3",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1124,
                  "end": 1147,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1144,
                      "end": 1146,
                      "decorators": [],
                      "name": "o1",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1124,
                    "end": 1143,
                    "decorators": [],
                    "name": "getNumberIndexValue",
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
            "type": "VariableDeclaration",
            "start": 1153,
            "end": 1188,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1159,
                "end": 1187,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1159,
                  "end": 1161,
                  "decorators": [],
                  "name": "v4",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1164,
                  "end": 1187,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1184,
                      "end": 1186,
                      "decorators": [],
                      "name": "o2",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1164,
                    "end": 1183,
                    "decorators": [],
                    "name": "getNumberIndexValue",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 920,
        "end": 922,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1192,
      "end": 1534,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1206,
        "end": 1534,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 1212,
            "end": 1228,
            "body": {
              "type": "TSEnumBody",
              "start": 1220,
              "end": 1228,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 1222,
                  "end": 1223,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1222,
                    "end": 1223,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSEnumMember",
                  "start": 1225,
                  "end": 1226,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1225,
                    "end": 1226,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1217,
              "end": 1219,
              "decorators": [],
              "name": "E1",
              "optional": false
            }
          },
          {
            "type": "TSEnumDeclaration",
            "start": 1233,
            "end": 1261,
            "body": {
              "type": "TSEnumBody",
              "start": 1241,
              "end": 1261,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 1243,
                  "end": 1250,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1243,
                    "end": 1244,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 1247,
                    "end": 1250,
                    "raw": "\"A\"",
                    "value": "A"
                  }
                },
                {
                  "type": "TSEnumMember",
                  "start": 1252,
                  "end": 1259,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1252,
                    "end": 1253,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 1256,
                    "end": 1259,
                    "raw": "\"B\"",
                    "value": "B"
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1238,
              "end": 1240,
              "decorators": [],
              "name": "E2",
              "optional": false
            }
          },
          {
            "type": "TSEnumDeclaration",
            "start": 1266,
            "end": 1292,
            "body": {
              "type": "TSEnumBody",
              "start": 1274,
              "end": 1292,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 1276,
                  "end": 1281,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1276,
                    "end": 1277,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 1280,
                    "end": 1281,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "TSEnumMember",
                  "start": 1283,
                  "end": 1290,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1283,
                    "end": 1284,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 1287,
                    "end": 1290,
                    "raw": "\"B\"",
                    "value": "B"
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1271,
              "end": 1273,
              "decorators": [],
              "name": "E3",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1297,
            "end": 1332,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1303,
                "end": 1331,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1303,
                  "end": 1305,
                  "decorators": [],
                  "name": "v1",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1308,
                  "end": 1331,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1328,
                      "end": 1330,
                      "decorators": [],
                      "name": "E1",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1308,
                    "end": 1327,
                    "decorators": [],
                    "name": "getStringIndexValue",
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
            "type": "VariableDeclaration",
            "start": 1337,
            "end": 1372,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1343,
                "end": 1371,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1343,
                  "end": 1345,
                  "decorators": [],
                  "name": "v2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1348,
                  "end": 1371,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1368,
                      "end": 1370,
                      "decorators": [],
                      "name": "E2",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1348,
                    "end": 1367,
                    "decorators": [],
                    "name": "getStringIndexValue",
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
            "type": "VariableDeclaration",
            "start": 1377,
            "end": 1412,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1383,
                "end": 1411,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1383,
                  "end": 1385,
                  "decorators": [],
                  "name": "v3",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1388,
                  "end": 1411,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1408,
                      "end": 1410,
                      "decorators": [],
                      "name": "E3",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1388,
                    "end": 1407,
                    "decorators": [],
                    "name": "getStringIndexValue",
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
            "type": "VariableDeclaration",
            "start": 1417,
            "end": 1452,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1423,
                "end": 1451,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1423,
                  "end": 1425,
                  "decorators": [],
                  "name": "v4",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1428,
                  "end": 1451,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1448,
                      "end": 1450,
                      "decorators": [],
                      "name": "E1",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1428,
                    "end": 1447,
                    "decorators": [],
                    "name": "getNumberIndexValue",
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
            "type": "VariableDeclaration",
            "start": 1457,
            "end": 1492,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1463,
                "end": 1491,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1463,
                  "end": 1465,
                  "decorators": [],
                  "name": "v5",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1468,
                  "end": 1491,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1488,
                      "end": 1490,
                      "decorators": [],
                      "name": "E2",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1468,
                    "end": 1487,
                    "decorators": [],
                    "name": "getNumberIndexValue",
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
            "type": "VariableDeclaration",
            "start": 1497,
            "end": 1532,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1503,
                "end": 1531,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1503,
                  "end": 1505,
                  "decorators": [],
                  "name": "v6",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1508,
                  "end": 1531,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1528,
                      "end": 1530,
                      "decorators": [],
                      "name": "E3",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1508,
                    "end": 1527,
                    "decorators": [],
                    "name": "getNumberIndexValue",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1201,
        "end": 1203,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
