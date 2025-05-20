__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 551,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 47,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 42,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 42,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 29,
              "end": 42,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 35,
                      "end": 36,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 36,
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
                "start": 38,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 41,
                  "end": 42,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 43,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 45,
          "end": 46,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
      "start": 49,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 86,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 59,
            "decorators": [],
            "name": "res1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 62,
            "end": 86,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 67,
                "end": 85,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 84,
                  "end": 85,
                  "raw": "1",
                  "value": 1
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 68,
                    "end": 71,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 72,
                  "end": 80,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 74,
                    "end": 80
                  }
                },
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 62,
              "end": 66,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 104,
            "decorators": [],
            "name": "res2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 107,
            "end": 135,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 112,
                "end": 134,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 129,
                  "end": 134,
                  "raw": "'foo'",
                  "value": "foo"
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 113,
                    "end": 116,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 117,
                  "end": 125,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 119,
                    "end": 125
                  }
                },
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 107,
              "end": 111,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 147,
      "end": 268,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 154,
        "end": 268,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 171,
          "end": 183,
          "decorators": [],
          "name": "linkedSignal",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 190,
            "end": 263,
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 263,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 199,
                "end": 263,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 203,
                    "end": 219,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 209,
                      "decorators": [],
                      "name": "source",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 209,
                      "end": 218,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 211,
                        "end": 218,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 214,
                          "end": 218,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 217,
                            "end": 218,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 217,
                              "end": 218,
                              "decorators": [],
                              "name": "S",
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
                    "type": "TSPropertySignature",
                    "start": 222,
                    "end": 261,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 233,
                      "decorators": [],
                      "name": "computation",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 233,
                      "end": 260,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 235,
                        "end": 260,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 236,
                            "end": 254,
                            "decorators": [],
                            "name": "source",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 242,
                              "end": 254,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 244,
                                "end": 254,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 251,
                                  "end": 254,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 252,
                                      "end": 253,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 252,
                                        "end": 253,
                                        "decorators": [],
                                        "name": "D",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 244,
                                  "end": 251,
                                  "decorators": [],
                                  "name": "NoInfer",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 256,
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
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
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
          "start": 264,
          "end": 267,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 266,
            "end": 267,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 183,
          "end": 189,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 184,
              "end": 185,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 187,
              "end": 188,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 282,
            "decorators": [],
            "name": "signal",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 285,
            "end": 354,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 298,
                "end": 353,
                "properties": [
                  {
                    "type": "Property",
                    "start": 302,
                    "end": 317,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 308,
                      "decorators": [],
                      "name": "source",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 310,
                      "end": 317,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 316,
                        "end": 317,
                        "raw": "3",
                        "value": 3
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 321,
                    "end": 350,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 321,
                      "end": 332,
                      "decorators": [],
                      "name": "computation",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 334,
                      "end": 350,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 349,
                        "end": 350,
                        "raw": "3",
                        "value": 3
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 335,
                          "end": 336,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 337,
                        "end": 345,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 339,
                          "end": 345
                        }
                      },
                      "typeParameters": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 297,
              "decorators": [],
              "name": "linkedSignal",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 357,
      "end": 456,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 373,
        "end": 456,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 377,
            "end": 454,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 377,
              "end": 388,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 454,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 452,
                "end": 454,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 389,
                  "end": 450,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 450,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 400,
                      "end": 450,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 402,
                        "end": 450,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 403,
                            "end": 407,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 404,
                              "end": 407,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 406,
                                "end": 407,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 406,
                                  "end": 407,
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
                            "start": 409,
                            "end": 444,
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 410,
                              "end": 444,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 412,
                                "end": 444,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 414,
                                    "end": 424,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 414,
                                      "end": 415,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 415,
                                      "end": 423,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 417,
                                        "end": 423
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 425,
                                    "end": 442,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 425,
                                      "end": 430,
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 430,
                                      "end": 442,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 432,
                                        "end": 442,
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 439,
                                          "end": 442,
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "start": 440,
                                              "end": 441,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 440,
                                                "end": 441,
                                                "decorators": [],
                                                "name": "R",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          ]
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 432,
                                          "end": 439,
                                          "decorators": [],
                                          "name": "NoInfer",
                                          "optional": false,
                                          "typeAnnotation": null
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
                          "start": 446,
                          "end": 450,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 449,
                            "end": 450,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 449,
                              "end": 450,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
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
        "start": 363,
        "end": 366,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 366,
        "end": 372,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 367,
            "end": 368,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 370,
            "end": 371,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 370,
              "end": 371,
              "decorators": [],
              "name": "R",
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
      "start": 458,
      "end": 551,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 464,
          "end": 550,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 466,
            "decorators": [],
            "name": "_1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 469,
            "end": 550,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 477,
                "end": 549,
                "async": false,
                "body": {
                  "type": "ObjectExpression",
                  "start": 532,
                  "end": 548,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 536,
                      "end": 540,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 540,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 540,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 544,
                      "end": 545,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 545,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 545,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 478,
                    "end": 490,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 482,
                      "end": 490,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 484,
                        "end": 490
                      }
                    }
                  },
                  {
                    "type": "ObjectPattern",
                    "start": 492,
                    "end": 497,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 494,
                        "end": 495,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 495,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 495,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 498,
                  "end": 527,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 500,
                    "end": 527,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 502,
                        "end": 515,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 502,
                          "end": 506,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 506,
                          "end": 514,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 508,
                            "end": 514
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 516,
                        "end": 525,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 516,
                          "end": 517,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 517,
                          "end": 525,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 519,
                            "end": 525
                          }
                        }
                      }
                    ]
                  }
                },
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 473,
              "end": 476,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
