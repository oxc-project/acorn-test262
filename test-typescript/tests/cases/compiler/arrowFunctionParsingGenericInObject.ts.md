__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 843,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "fn1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 12,
            "end": 98,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ObjectExpression",
              "start": 19,
              "end": 97,
              "properties": [
                {
                  "type": "Property",
                  "start": 25,
                  "end": 68,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 29,
                    "name": "test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 31,
                    "end": 68,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 47,
                        "end": 55,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 52,
                          "end": 55,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 54,
                            "end": 55,
                            "typeName": {
                              "type": "Identifier",
                              "start": 54,
                              "end": 55,
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
                      "type": "Identifier",
                      "start": 63,
                      "end": 68,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 31,
                      "end": 46,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 32,
                          "end": 45,
                          "name": {
                            "type": "Identifier",
                            "start": 32,
                            "end": 33,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSUndefinedKeyword",
                            "start": 36,
                            "end": 45
                          },
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 56,
                      "end": 59,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 58,
                        "end": 59,
                        "typeName": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 59,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 74,
                  "end": 94,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 84,
                    "name": "extraValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 86,
                    "end": 94,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 92,
                      "end": 94,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 114,
            "name": "fn1async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 117,
            "end": 218,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ObjectExpression",
              "start": 124,
              "end": 217,
              "properties": [
                {
                  "type": "Property",
                  "start": 130,
                  "end": 188,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 134,
                    "name": "test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 136,
                    "end": 188,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 158,
                        "end": 166,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 163,
                          "end": 166,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 165,
                            "end": 166,
                            "typeName": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 166,
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
                      "type": "Identifier",
                      "start": 183,
                      "end": 188,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 142,
                      "end": 157,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 143,
                          "end": 156,
                          "name": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 144,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSUndefinedKeyword",
                            "start": 147,
                            "end": 156
                          },
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 167,
                      "end": 179,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 169,
                        "end": 179,
                        "typeName": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 176,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 176,
                          "end": 179,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 177,
                              "end": 178,
                              "typeName": {
                                "type": "Identifier",
                                "start": 177,
                                "end": 178,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 194,
                  "end": 214,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 204,
                    "name": "extraValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 206,
                    "end": 214,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 212,
                      "end": 214,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 306,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 229,
            "name": "fn2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 232,
            "end": 306,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ObjectExpression",
              "start": 239,
              "end": 305,
              "properties": [
                {
                  "type": "Property",
                  "start": 245,
                  "end": 276,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 249,
                    "name": "test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 251,
                    "end": 276,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 255,
                        "end": 263,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 260,
                          "end": 263,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 262,
                            "end": 263,
                            "typeName": {
                              "type": "Identifier",
                              "start": 262,
                              "end": 263,
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
                      "type": "Identifier",
                      "start": 271,
                      "end": 276,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 251,
                      "end": 254,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 252,
                          "end": 253,
                          "name": {
                            "type": "Identifier",
                            "start": 252,
                            "end": 253,
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 282,
                  "end": 302,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 292,
                    "name": "extraValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 294,
                    "end": 302,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 300,
                      "end": 302,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 322,
            "name": "fn2async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 325,
            "end": 414,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ObjectExpression",
              "start": 332,
              "end": 413,
              "properties": [
                {
                  "type": "Property",
                  "start": 338,
                  "end": 384,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 342,
                    "name": "test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 344,
                    "end": 384,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 354,
                        "end": 362,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 359,
                          "end": 362,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 361,
                            "end": 362,
                            "typeName": {
                              "type": "Identifier",
                              "start": 361,
                              "end": 362,
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
                      "type": "Identifier",
                      "start": 379,
                      "end": 384,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 350,
                      "end": 353,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 351,
                          "end": 352,
                          "name": {
                            "type": "Identifier",
                            "start": 351,
                            "end": 352,
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
                      "start": 363,
                      "end": 375,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 365,
                        "end": 375,
                        "typeName": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 372,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 372,
                          "end": 375,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 373,
                              "end": 374,
                              "typeName": {
                                "type": "Identifier",
                                "start": 373,
                                "end": 374,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 390,
                  "end": 410,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 400,
                    "name": "extraValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 402,
                    "end": 410,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 408,
                      "end": 410,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 416,
      "end": 514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 514,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 425,
            "name": "fn3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 428,
            "end": 514,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ObjectExpression",
              "start": 435,
              "end": 513,
              "properties": [
                {
                  "type": "Property",
                  "start": 441,
                  "end": 461,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 451,
                    "name": "extraValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 453,
                    "end": 461,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 459,
                      "end": 461,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 467,
                  "end": 510,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 471,
                    "name": "test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 473,
                    "end": 510,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 489,
                        "end": 497,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 494,
                          "end": 497,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 496,
                            "end": 497,
                            "typeName": {
                              "type": "Identifier",
                              "start": 496,
                              "end": 497,
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
                      "type": "Identifier",
                      "start": 505,
                      "end": 510,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 473,
                      "end": 488,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 474,
                          "end": 487,
                          "name": {
                            "type": "Identifier",
                            "start": 474,
                            "end": 475,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSUndefinedKeyword",
                            "start": 478,
                            "end": 487
                          },
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 498,
                      "end": 501,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 500,
                        "end": 501,
                        "typeName": {
                          "type": "Identifier",
                          "start": 500,
                          "end": 501,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 516,
      "end": 634,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 634,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 530,
            "name": "fn3async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 533,
            "end": 634,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ObjectExpression",
              "start": 540,
              "end": 633,
              "properties": [
                {
                  "type": "Property",
                  "start": 546,
                  "end": 566,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 546,
                    "end": 556,
                    "name": "extraValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 558,
                    "end": 566,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 564,
                      "end": 566,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 572,
                  "end": 630,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 576,
                    "name": "test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 578,
                    "end": 630,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 600,
                        "end": 608,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 605,
                          "end": 608,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 607,
                            "end": 608,
                            "typeName": {
                              "type": "Identifier",
                              "start": 607,
                              "end": 608,
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
                      "type": "Identifier",
                      "start": 625,
                      "end": 630,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 584,
                      "end": 599,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 585,
                          "end": 598,
                          "name": {
                            "type": "Identifier",
                            "start": 585,
                            "end": 586,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSUndefinedKeyword",
                            "start": 589,
                            "end": 598
                          },
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 609,
                      "end": 621,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 611,
                        "end": 621,
                        "typeName": {
                          "type": "Identifier",
                          "start": 611,
                          "end": 618,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 618,
                          "end": 621,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 619,
                              "end": 620,
                              "typeName": {
                                "type": "Identifier",
                                "start": 619,
                                "end": 620,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 636,
      "end": 728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 642,
          "end": 728,
          "id": {
            "type": "Identifier",
            "start": 642,
            "end": 645,
            "name": "fn4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 648,
            "end": 728,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ObjectExpression",
              "start": 655,
              "end": 727,
              "properties": [
                {
                  "type": "Property",
                  "start": 661,
                  "end": 675,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 661,
                    "end": 671,
                    "name": "extraValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 673,
                    "end": 675,
                    "value": "",
                    "raw": "''"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 681,
                  "end": 724,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 681,
                    "end": 685,
                    "name": "test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 687,
                    "end": 724,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 703,
                        "end": 711,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 708,
                          "end": 711,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 710,
                            "end": 711,
                            "typeName": {
                              "type": "Identifier",
                              "start": 710,
                              "end": 711,
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
                      "type": "Identifier",
                      "start": 719,
                      "end": 724,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 687,
                      "end": 702,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 688,
                          "end": 701,
                          "name": {
                            "type": "Identifier",
                            "start": 688,
                            "end": 689,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSUndefinedKeyword",
                            "start": 692,
                            "end": 701
                          },
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 712,
                      "end": 715,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 714,
                        "end": 715,
                        "typeName": {
                          "type": "Identifier",
                          "start": 714,
                          "end": 715,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 730,
      "end": 842,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 736,
          "end": 842,
          "id": {
            "type": "Identifier",
            "start": 736,
            "end": 744,
            "name": "fn4async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 747,
            "end": 842,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ObjectExpression",
              "start": 754,
              "end": 841,
              "properties": [
                {
                  "type": "Property",
                  "start": 760,
                  "end": 774,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 760,
                    "end": 770,
                    "name": "extraValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 772,
                    "end": 774,
                    "value": "",
                    "raw": "''"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 780,
                  "end": 838,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 780,
                    "end": 784,
                    "name": "test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 786,
                    "end": 838,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 808,
                        "end": 816,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 813,
                          "end": 816,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 815,
                            "end": 816,
                            "typeName": {
                              "type": "Identifier",
                              "start": 815,
                              "end": 816,
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
                      "type": "Identifier",
                      "start": 833,
                      "end": 838,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 792,
                      "end": 807,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 793,
                          "end": 806,
                          "name": {
                            "type": "Identifier",
                            "start": 793,
                            "end": 794,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSUndefinedKeyword",
                            "start": 797,
                            "end": 806
                          },
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 817,
                      "end": 829,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 819,
                        "end": 829,
                        "typeName": {
                          "type": "Identifier",
                          "start": 819,
                          "end": 826,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 826,
                          "end": 829,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 827,
                              "end": 828,
                              "typeName": {
                                "type": "Identifier",
                                "start": 827,
                                "end": 828,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
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
