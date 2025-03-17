__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 552,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "name": "test",
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
          "start": 25,
          "end": 42,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 42,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 29,
              "end": 42,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "name": "arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 35,
                      "end": 36,
                      "typeName": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 36,
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
                "start": 38,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 41,
                  "end": 42,
                  "typeName": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
        "start": 43,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 45,
          "end": 46,
          "typeName": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 59,
            "name": "res1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 62,
            "end": 86,
            "callee": {
              "type": "Identifier",
              "start": 62,
              "end": 66,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 67,
                "end": 85,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 68,
                    "end": 71,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 84,
                  "end": 85,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": {
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
            "optional": false,
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
      "start": 94,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 104,
            "name": "res2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 107,
            "end": 135,
            "callee": {
              "type": "Identifier",
              "start": 107,
              "end": 111,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 112,
                "end": 134,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 113,
                    "end": 116,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 129,
                  "end": 134,
                  "value": "foo",
                  "raw": "'foo'"
                },
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 117,
                  "end": 125,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 119,
                    "end": 125
                  }
                }
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 147,
      "end": 268,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 154,
        "end": 268,
        "id": {
          "type": "Identifier",
          "start": 171,
          "end": 183,
          "name": "linkedSignal",
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
            "start": 190,
            "end": 263,
            "name": "options",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 209,
                      "name": "source",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 209,
                      "end": 218,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 211,
                        "end": 218,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 214,
                          "end": 218,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 217,
                            "end": 218,
                            "typeName": {
                              "type": "Identifier",
                              "start": 217,
                              "end": 218,
                              "name": "S",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 222,
                    "end": 261,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 233,
                      "name": "computation",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 233,
                      "end": 260,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 235,
                        "end": 260,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 236,
                            "end": 254,
                            "name": "source",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 242,
                              "end": 254,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 244,
                                "end": 254,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 244,
                                  "end": 251,
                                  "name": "NoInfer",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 251,
                                  "end": 254,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 252,
                                      "end": 253,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 252,
                                        "end": 253,
                                        "name": "D",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 259,
                              "end": 260,
                              "name": "D",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 183,
          "end": 189,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 184,
              "end": 185,
              "name": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "name": "S",
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
              "start": 187,
              "end": 188,
              "name": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "name": "D",
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
          "start": 264,
          "end": 267,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 266,
            "end": 267,
            "typeName": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 282,
            "name": "signal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 285,
            "end": 354,
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 297,
              "name": "linkedSignal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 308,
                      "name": "source",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 310,
                      "end": 317,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Literal",
                        "start": 316,
                        "end": 317,
                        "value": 3,
                        "raw": "3"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 321,
                    "end": 350,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 321,
                      "end": 332,
                      "name": "computation",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 334,
                      "end": 350,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 335,
                          "end": 336,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 349,
                        "end": 350,
                        "value": 3,
                        "raw": "3"
                      },
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 337,
                        "end": 345,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 339,
                          "end": 345
                        }
                      }
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 357,
      "end": 456,
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 366,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 373,
        "end": 456,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 377,
            "end": 454,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 377,
              "end": 388,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 454,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "cb",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 400,
                      "end": 450,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 402,
                        "end": 450,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 403,
                            "end": 407,
                            "name": "t",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 404,
                              "end": 407,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 406,
                                "end": 407,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 406,
                                  "end": 407,
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
                            "start": 409,
                            "end": 444,
                            "name": "_",
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
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 414,
                                      "end": 415,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 415,
                                      "end": 423,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 417,
                                        "end": 423
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 425,
                                    "end": 442,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 425,
                                      "end": 430,
                                      "name": "other",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 430,
                                      "end": 442,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 432,
                                        "end": 442,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 432,
                                          "end": 439,
                                          "name": "NoInfer",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 439,
                                          "end": 442,
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "start": 440,
                                              "end": 441,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 440,
                                                "end": 441,
                                                "name": "R",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "typeArguments": null
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 449,
                              "end": 450,
                              "name": "R",
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
                  "readonly": true,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 452,
                "end": 454,
                "body": []
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 366,
        "end": 372,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 367,
            "end": 368,
            "name": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
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
            "start": 370,
            "end": 371,
            "name": {
              "type": "Identifier",
              "start": 370,
              "end": 371,
              "name": "R",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 466,
            "name": "_1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 469,
            "end": 550,
            "callee": {
              "type": "Identifier",
              "start": 473,
              "end": 476,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 477,
                "end": 549,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 478,
                    "end": 490,
                    "name": "name",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 482,
                      "end": 490,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 484,
                        "end": 490
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "ObjectPattern",
                    "start": 492,
                    "end": 497,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 494,
                        "end": 495,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 495,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 495,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "body": {
                  "type": "ObjectExpression",
                  "start": 532,
                  "end": 548,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 536,
                      "end": 540,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 540,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 540,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 544,
                      "end": 545,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 545,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 545,
                        "name": "x",
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 502,
                          "end": 506,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 506,
                          "end": 514,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 508,
                            "end": 514
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 516,
                        "end": 525,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 516,
                          "end": 517,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 517,
                          "end": 525,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 519,
                            "end": 525
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            ],
            "typeArguments": null
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
