__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 842,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 98,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 12,
            "end": 98,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 19,
              "end": 97,
              "properties": [
                {
                  "type": "Property",
                  "start": 25,
                  "end": 68,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 29,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 31,
                    "end": 68,
                    "expression": true,
                    "async": false,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 47,
                        "end": 55,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "body": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 68,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 74,
                  "end": 94,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 84,
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 86,
                    "end": 94,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 92,
                      "end": 94,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 218,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 114,
            "decorators": [],
            "name": "fn1async",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 117,
            "end": 218,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 124,
              "end": 217,
              "properties": [
                {
                  "type": "Property",
                  "start": 130,
                  "end": 188,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 134,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 136,
                    "end": 188,
                    "expression": true,
                    "async": true,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 158,
                        "end": 166,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
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
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "body": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 188,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 194,
                  "end": 214,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 204,
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 206,
                    "end": 214,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 212,
                      "end": 214,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 306,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 306,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 229,
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 232,
            "end": 306,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 239,
              "end": 305,
              "properties": [
                {
                  "type": "Property",
                  "start": 245,
                  "end": 276,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 249,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 251,
                    "end": 276,
                    "expression": true,
                    "async": false,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 255,
                        "end": 263,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 267,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "body": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 276,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 282,
                  "end": 302,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 292,
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 294,
                    "end": 302,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 300,
                      "end": 302,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 414,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 322,
            "decorators": [],
            "name": "fn2async",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 325,
            "end": 414,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 332,
              "end": 413,
              "properties": [
                {
                  "type": "Property",
                  "start": 338,
                  "end": 384,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 342,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 344,
                    "end": 384,
                    "expression": true,
                    "async": true,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 354,
                        "end": 362,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
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
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "body": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 384,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 390,
                  "end": 410,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 400,
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 402,
                    "end": 410,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 408,
                      "end": 410,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 416,
      "end": 514,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 514,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 425,
            "decorators": [],
            "name": "fn3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 428,
            "end": 514,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 435,
              "end": 513,
              "properties": [
                {
                  "type": "Property",
                  "start": 441,
                  "end": 461,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 451,
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 453,
                    "end": 461,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 459,
                      "end": 461,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 467,
                  "end": 510,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 471,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 473,
                    "end": 510,
                    "expression": true,
                    "async": false,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 489,
                        "end": 497,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "body": {
                      "type": "Identifier",
                      "start": 505,
                      "end": 510,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 516,
      "end": 634,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 634,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 530,
            "decorators": [],
            "name": "fn3async",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 533,
            "end": 634,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 540,
              "end": 633,
              "properties": [
                {
                  "type": "Property",
                  "start": 546,
                  "end": 566,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 546,
                    "end": 556,
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 558,
                    "end": 566,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 564,
                      "end": 566,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 572,
                  "end": 630,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 576,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 578,
                    "end": 630,
                    "expression": true,
                    "async": true,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 600,
                        "end": 608,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
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
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "body": {
                      "type": "Identifier",
                      "start": 625,
                      "end": 630,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 636,
      "end": 728,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 642,
          "end": 728,
          "id": {
            "type": "Identifier",
            "start": 642,
            "end": 645,
            "decorators": [],
            "name": "fn4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 648,
            "end": 728,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 655,
              "end": 727,
              "properties": [
                {
                  "type": "Property",
                  "start": 661,
                  "end": 675,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 661,
                    "end": 671,
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 673,
                    "end": 675,
                    "value": "",
                    "raw": "''"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 681,
                  "end": 724,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 681,
                    "end": 685,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 687,
                    "end": 724,
                    "expression": true,
                    "async": false,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 703,
                        "end": 711,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "body": {
                      "type": "Identifier",
                      "start": 719,
                      "end": 724,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 730,
      "end": 842,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 736,
          "end": 842,
          "id": {
            "type": "Identifier",
            "start": 736,
            "end": 744,
            "decorators": [],
            "name": "fn4async",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 747,
            "end": 842,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 754,
              "end": 841,
              "properties": [
                {
                  "type": "Property",
                  "start": 760,
                  "end": 774,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 760,
                    "end": 770,
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 772,
                    "end": 774,
                    "value": "",
                    "raw": "''"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 780,
                  "end": 838,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 780,
                    "end": 784,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 786,
                    "end": 838,
                    "expression": true,
                    "async": true,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 808,
                        "end": 816,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
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
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "body": {
                      "type": "Identifier",
                      "start": 833,
                      "end": 838,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
