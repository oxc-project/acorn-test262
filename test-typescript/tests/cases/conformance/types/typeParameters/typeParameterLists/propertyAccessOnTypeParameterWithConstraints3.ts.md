__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 84,
  "end": 1362,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 84,
      "end": 128,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 128,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 126,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 101,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 126,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 126,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 114,
                    "end": 124,
                    "argument": {
                      "type": "Literal",
                      "start": 121,
                      "end": 123,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 103,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 196,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 194,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 194,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 194,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 178,
                    "end": 188,
                    "argument": {
                      "type": "Literal",
                      "start": 185,
                      "end": 187,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 159,
                "end": 167,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 161,
                  "end": 167
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 198,
      "end": 486,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 232,
        "end": 486,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 238,
            "end": 365,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 239,
              "end": 365,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 365,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 252,
                    "end": 261,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 256,
                        "end": 260,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 260,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 257,
                            "end": 260,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 259,
                              "end": 260,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 259,
                                "end": 260,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 292,
                    "end": 311,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 296,
                        "end": 310,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 296,
                          "end": 297,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 300,
                          "end": 310,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 300,
                            "end": 308,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 300,
                              "end": 301,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "start": 302,
                              "end": 307,
                              "raw": "'foo'",
                              "value": "foo",
                              "regex": null,
                              "bigint": null
                            }
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
                    "type": "ReturnStatement",
                    "start": 340,
                    "end": 359,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 347,
                      "end": 358,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 348,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 351,
                        "end": 358,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 351,
                          "end": 356,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 351,
                            "end": 352,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 353,
                            "end": 356,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 371,
            "end": 484,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 372,
              "end": 484,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 379,
                "end": 484,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 411,
                    "end": 430,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 415,
                        "end": 429,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 416,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 419,
                          "end": 429,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 419,
                            "end": 427,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 419,
                              "end": 420,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "start": 421,
                              "end": 426,
                              "raw": "'foo'",
                              "value": "foo",
                              "regex": null,
                              "bigint": null
                            }
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
                    "type": "ReturnStatement",
                    "start": 459,
                    "end": 478,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 466,
                      "end": 477,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 466,
                        "end": 467,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 470,
                        "end": 477,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 470,
                          "end": 475,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 470,
                            "end": 471,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 472,
                            "end": 475,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
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
                  "start": 373,
                  "end": 377,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 374,
                    "end": 377,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 376,
                      "end": 377,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 376,
                        "end": 377,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 205,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 205,
        "end": 231,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 206,
            "end": 217,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 216,
              "end": 217,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 219,
            "end": 230,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 230,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
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
      "start": 488,
      "end": 518,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 517,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 495,
            "decorators": [],
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 498,
            "end": 517,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 498,
              "end": 515,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 499,
                "end": 512,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 504,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 504,
                  "end": 510,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 505,
                      "end": 506,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 506,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 508,
                      "end": 509,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 508,
                        "end": 509,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 514,
                "end": 515,
                "decorators": [],
                "name": "f",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 519,
      "end": 556,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 555,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 526,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 529,
            "end": 555,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 547,
                "end": 554,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 552,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 529,
              "end": 546,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 530,
                "end": 543,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 535,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 535,
                  "end": 541,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 536,
                      "end": 537,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 537,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 539,
                      "end": 540,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 539,
                        "end": 540,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "g",
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
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 558,
      "end": 611,
      "body": {
        "type": "TSInterfaceBody",
        "start": 596,
        "end": 611,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 602,
            "end": 609,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 602,
              "end": 605,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 605,
              "end": 608,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 607,
                "end": 608,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 607,
                  "end": 608,
                  "decorators": [],
                  "name": "T",
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
        "start": 568,
        "end": 569,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 569,
        "end": 595,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 570,
            "end": 581,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 580,
              "end": 581,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 580,
                "end": 581,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 570,
              "end": 571,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 583,
            "end": 594,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 593,
              "end": 594,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 593,
                "end": 594,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
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
      "start": 612,
      "end": 627,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 616,
          "end": 626,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 626,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 617,
              "end": 626,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 619,
                "end": 626,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 620,
                  "end": 626,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 621,
                      "end": 622,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 621,
                        "end": 622,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 624,
                      "end": 625,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 625,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 620,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 628,
      "end": 649,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 648,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 632,
            "end": 634,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 637,
            "end": 648,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 637,
              "end": 646,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 637,
                "end": 642,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 638,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 642,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 643,
                "end": 646,
                "decorators": [],
                "name": "foo",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 650,
      "end": 675,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 674,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 657,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 660,
            "end": 674,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 660,
              "end": 672,
              "computed": true,
              "object": {
                "type": "MemberExpression",
                "start": 660,
                "end": 665,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 661,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 662,
                  "end": 665,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 666,
                "end": 671,
                "raw": "'foo'",
                "value": "foo",
                "regex": null,
                "bigint": null
              }
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
      "start": 677,
      "end": 765,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 681,
          "end": 765,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 681,
            "end": 765,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 682,
              "end": 765,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 684,
                "end": 765,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 690,
                    "end": 722,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 718,
                      "end": 721,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 720,
                        "end": 721,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 720,
                          "end": 721,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 690,
                      "end": 716,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 691,
                          "end": 702,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 701,
                            "end": 702,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 701,
                              "end": 702,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 691,
                            "end": 692,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 704,
                          "end": 715,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 714,
                            "end": 715,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 714,
                              "end": 715,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 704,
                            "end": 705,
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
                    "type": "TSCallSignatureDeclaration",
                    "start": 727,
                    "end": 763,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 754,
                        "end": 758,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 755,
                          "end": 758,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 757,
                            "end": 758,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 757,
                              "end": 758,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 759,
                      "end": 762,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 761,
                        "end": 762,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 761,
                          "end": 762,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 727,
                      "end": 753,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 728,
                          "end": 739,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 738,
                            "end": 739,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 738,
                              "end": 739,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 728,
                            "end": 729,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 741,
                          "end": 752,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 751,
                            "end": 752,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 751,
                              "end": 752,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 741,
                            "end": 742,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 766,
      "end": 785,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 770,
          "end": 784,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 770,
            "end": 772,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 775,
            "end": 784,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 775,
              "end": 782,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 775,
                "end": 778,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 776,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 779,
                "end": 782,
                "decorators": [],
                "name": "foo",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 849,
      "end": 872,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 853,
          "end": 871,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 853,
            "end": 856,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 859,
            "end": 871,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 859,
              "end": 869,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 859,
                "end": 862,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 860,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 863,
                "end": 868,
                "raw": "'foo'",
                "value": "foo",
                "regex": null,
                "bigint": null
              }
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
      "start": 929,
      "end": 956,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 933,
          "end": 955,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 933,
            "end": 936,
            "decorators": [],
            "name": "r3c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 939,
            "end": 955,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 939,
              "end": 953,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 939,
                "end": 949,
                "arguments": [
                  {
                    "type": "NewExpression",
                    "start": 941,
                    "end": 948,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 945,
                      "end": 946,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 939,
                  "end": 940,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 950,
                "end": 953,
                "decorators": [],
                "name": "foo",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1031,
      "end": 1061,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1035,
          "end": 1060,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1035,
            "end": 1038,
            "decorators": [],
            "name": "r3d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1041,
            "end": 1060,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1041,
              "end": 1058,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 1041,
                "end": 1051,
                "arguments": [
                  {
                    "type": "NewExpression",
                    "start": 1043,
                    "end": 1050,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1047,
                      "end": 1048,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1042,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 1052,
                "end": 1057,
                "raw": "'foo'",
                "value": "foo",
                "regex": null,
                "bigint": null
              }
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
      "start": 1137,
      "end": 1299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1141,
          "end": 1299,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1141,
            "end": 1142,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1145,
            "end": 1299,
            "properties": [
              {
                "type": "Property",
                "start": 1151,
                "end": 1297,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1151,
                  "end": 1154,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1156,
                  "end": 1297,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1192,
                    "end": 1297,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1224,
                        "end": 1243,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1228,
                            "end": 1242,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1228,
                              "end": 1229,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 1232,
                              "end": 1242,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1232,
                                "end": 1240,
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1232,
                                  "end": 1233,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Literal",
                                  "start": 1234,
                                  "end": 1239,
                                  "raw": "'foo'",
                                  "value": "foo",
                                  "regex": null,
                                  "bigint": null
                                }
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
                        "type": "ReturnStatement",
                        "start": 1272,
                        "end": 1291,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 1279,
                          "end": 1290,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 1279,
                            "end": 1280,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 1283,
                            "end": 1290,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1283,
                              "end": 1288,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 1283,
                                "end": 1284,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1285,
                                "end": 1288,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
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
                      "start": 1183,
                      "end": 1187,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1184,
                        "end": 1187,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1186,
                          "end": 1187,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1186,
                            "end": 1187,
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
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1156,
                    "end": 1182,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1157,
                        "end": 1168,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1167,
                          "end": 1168,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1167,
                            "end": 1168,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1157,
                          "end": 1158,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1170,
                        "end": 1181,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1180,
                          "end": 1181,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1180,
                            "end": 1181,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1170,
                          "end": 1171,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1301,
      "end": 1325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1305,
          "end": 1324,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1305,
            "end": 1307,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1310,
            "end": 1324,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 1316,
                "end": 1323,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 1320,
                  "end": 1321,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1310,
              "end": 1315,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1310,
                "end": 1311,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1312,
                "end": 1315,
                "decorators": [],
                "name": "foo",
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
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
