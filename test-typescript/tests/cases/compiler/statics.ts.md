__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 656,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 645,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 645,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 427,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 427,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 427,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 40,
                    "end": 50,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "name": "x",
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
                      "start": 41,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 43,
                        "end": 49
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 59,
                    "end": 253,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 70,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 70,
                      "end": 253,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 71,
                          "end": 88,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 78,
                            "end": 88,
                            "name": "c1",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 80,
                              "end": 88,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 82,
                                "end": 88
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 90,
                          "end": 107,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 107,
                            "name": "c2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 99,
                              "end": 107,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 101,
                                "end": 107
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "Identifier",
                          "start": 109,
                          "end": 119,
                          "name": "c3",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 111,
                            "end": 119,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 113,
                              "end": 119
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 121,
                        "end": 253,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 135,
                            "end": 167,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 135,
                              "end": 166,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 135,
                                "end": 141,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 135,
                                  "end": 139
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 140,
                                  "end": 141,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "start": 144,
                                "end": 166,
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 144,
                                  "end": 163,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 144,
                                    "end": 155,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 144,
                                      "end": 147,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 144,
                                        "end": 145,
                                        "name": "C",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 146,
                                        "end": 147,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 148,
                                      "end": 155,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 148,
                                        "end": 152
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 153,
                                        "end": 155,
                                        "name": "c1",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    }
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 156,
                                    "end": 163,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 156,
                                      "end": 160
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 161,
                                      "end": 163,
                                      "name": "c2",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  }
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "start": 164,
                                  "end": 166,
                                  "name": "c3",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 180,
                            "end": 243,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 180,
                              "end": 242,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 180,
                                "end": 186,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 180,
                                  "end": 184
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 185,
                                  "end": 186,
                                  "name": "g",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "ArrowFunctionExpression",
                                "start": 189,
                                "end": 242,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 190,
                                    "end": 198,
                                    "name": "v",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 191,
                                      "end": 198,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 192,
                                        "end": 198
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "CallExpression",
                                  "start": 203,
                                  "end": 242,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 203,
                                    "end": 206,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 203,
                                      "end": 204,
                                      "name": "C",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 205,
                                      "end": 206,
                                      "name": "f",
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
                                      "start": 207,
                                      "end": 241,
                                      "left": {
                                        "type": "BinaryExpression",
                                        "start": 207,
                                        "end": 235,
                                        "left": {
                                          "type": "BinaryExpression",
                                          "start": 207,
                                          "end": 227,
                                          "left": {
                                            "type": "BinaryExpression",
                                            "start": 207,
                                            "end": 219,
                                            "left": {
                                              "type": "BinaryExpression",
                                              "start": 207,
                                              "end": 217,
                                              "left": {
                                                "type": "MemberExpression",
                                                "start": 207,
                                                "end": 213,
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 207,
                                                  "end": 211
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 212,
                                                  "end": 213,
                                                  "name": "x",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "computed": false,
                                                "optional": false
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "MemberExpression",
                                                "start": 214,
                                                "end": 217,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 214,
                                                  "end": 215,
                                                  "name": "C",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 216,
                                                  "end": 217,
                                                  "name": "y",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "computed": false,
                                                "optional": false
                                              }
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Identifier",
                                              "start": 218,
                                              "end": 219,
                                              "name": "v",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            }
                                          },
                                          "operator": "+",
                                          "right": {
                                            "type": "MemberExpression",
                                            "start": 220,
                                            "end": 227,
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 220,
                                              "end": 224
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 225,
                                              "end": 227,
                                              "name": "c1",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "computed": false,
                                            "optional": false
                                          }
                                        },
                                        "operator": "+",
                                        "right": {
                                          "type": "MemberExpression",
                                          "start": 228,
                                          "end": 235,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 228,
                                            "end": 232
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 233,
                                            "end": 235,
                                            "name": "c2",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        }
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 236,
                                        "end": 241,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 236,
                                          "end": 237,
                                          "name": "C",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 238,
                                          "end": 241,
                                          "name": "pub",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      }
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "typeParameters": null,
                                "returnType": null
                              }
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
                    "type": "PropertyDefinition",
                    "start": 263,
                    "end": 277,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 274,
                      "name": "priv",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 275,
                      "end": 276,
                      "value": 2,
                      "raw": "2"
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
                    "type": "PropertyDefinition",
                    "start": 286,
                    "end": 299,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 296,
                      "name": "pub",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 297,
                      "end": 298,
                      "value": 3,
                      "raw": "3"
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
                    "type": "PropertyDefinition",
                    "start": 308,
                    "end": 324,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 316,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "MemberExpression",
                      "start": 317,
                      "end": 323,
                      "object": {
                        "type": "Identifier",
                        "start": 317,
                        "end": 318,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 319,
                        "end": 323,
                        "name": "priv",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                    "start": 333,
                    "end": 413,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 341,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 341,
                      "end": 413,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 342,
                          "end": 350,
                          "name": "n",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 343,
                            "end": 350,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 344,
                              "end": 350
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 352,
                        "end": 413,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 366,
                            "end": 402,
                            "argument": {
                              "type": "BinaryExpression",
                              "start": 373,
                              "end": 401,
                              "left": {
                                "type": "Literal",
                                "start": 373,
                                "end": 380,
                                "value": "wow: ",
                                "raw": "\"wow: \""
                              },
                              "operator": "+",
                              "right": {
                                "type": "BinaryExpression",
                                "start": 382,
                                "end": 400,
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 382,
                                  "end": 393,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 382,
                                    "end": 387,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 382,
                                      "end": 383,
                                      "name": "n",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 384,
                                      "end": 387,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 384,
                                        "end": 385,
                                        "name": "C",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 386,
                                        "end": 387,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    }
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 388,
                                    "end": 393,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 388,
                                      "end": 389,
                                      "name": "C",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 390,
                                      "end": 393,
                                      "name": "pub",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  }
                                },
                                "operator": "+",
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 394,
                                  "end": 400,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 394,
                                    "end": 395,
                                    "name": "C",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 396,
                                    "end": 400,
                                    "name": "priv",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              }
                            }
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 432,
            "end": 442,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 436,
                "end": 441,
                "id": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 437,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 438,
                  "end": 441,
                  "object": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 439,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 441,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 447,
            "end": 643,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 454,
              "end": 643,
              "id": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 467,
                "end": 643,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 477,
                    "end": 491,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 481,
                        "end": 490,
                        "id": {
                          "type": "Identifier",
                          "start": 481,
                          "end": 487,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 488,
                          "end": 490,
                          "value": "",
                          "raw": "\"\""
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 500,
                    "end": 512,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 500,
                      "end": 511,
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 506,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 509,
                        "end": 510,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 521,
                    "end": 546,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 521,
                      "end": 545,
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "start": 521,
                        "end": 527,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 530,
                        "end": 544,
                        "object": {
                          "type": "NewExpression",
                          "start": 530,
                          "end": 542,
                          "callee": {
                            "type": "Identifier",
                            "start": 534,
                            "end": 535,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 536,
                              "end": 537,
                              "value": 0,
                              "raw": "0"
                            },
                            {
                              "type": "Literal",
                              "start": 538,
                              "end": 539,
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 540,
                              "end": 541,
                              "value": 2,
                              "raw": "2"
                            }
                          ],
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 543,
                          "end": 544,
                          "name": "x",
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
                    "type": "ExpressionStatement",
                    "start": 555,
                    "end": 573,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 555,
                      "end": 572,
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 561,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 564,
                        "end": 571,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 564,
                          "end": 567,
                          "object": {
                            "type": "Identifier",
                            "start": 564,
                            "end": 565,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 566,
                            "end": 567,
                            "name": "f",
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
                            "start": 568,
                            "end": 570,
                            "value": 10,
                            "raw": "10"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 582,
                    "end": 614,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 582,
                      "end": 613,
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 588,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 591,
                        "end": 612,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 591,
                          "end": 607,
                          "object": {
                            "type": "NewExpression",
                            "start": 591,
                            "end": 605,
                            "callee": {
                              "type": "Identifier",
                              "start": 595,
                              "end": 596,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 597,
                                "end": 598,
                                "value": 5,
                                "raw": "5"
                              },
                              {
                                "type": "Literal",
                                "start": 599,
                                "end": 601,
                                "value": 10,
                                "raw": "10"
                              },
                              {
                                "type": "Literal",
                                "start": 602,
                                "end": 604,
                                "value": 20,
                                "raw": "20"
                              }
                            ],
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 606,
                            "end": 607,
                            "name": "g",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 608,
                            "end": 611,
                            "object": {
                              "type": "Identifier",
                              "start": 608,
                              "end": 609,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 610,
                              "end": 611,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 623,
                    "end": 637,
                    "argument": {
                      "type": "Identifier",
                      "start": 630,
                      "end": 636,
                      "name": "result",
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 647,
      "end": 653,
      "expression": {
        "type": "CallExpression",
        "start": 647,
        "end": 652,
        "callee": {
          "type": "MemberExpression",
          "start": 647,
          "end": 650,
          "object": {
            "type": "Identifier",
            "start": 647,
            "end": 648,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 649,
            "end": 650,
            "name": "f",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
