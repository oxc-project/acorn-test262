__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 611,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 103,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 51,
          "end": 55,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 55,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 54,
              "end": 55,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
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
          "start": 59,
          "end": 93,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 60,
            "end": 93,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 62,
              "end": 93,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 62,
                  "end": 72,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 69,
                    "end": 72,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 70,
                        "end": 71,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 69,
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 76,
                  "end": 92,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 82,
                      "end": 92,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 89,
                        "end": 92,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 90,
                            "end": 91,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 90,
                              "end": 91,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 89,
                        "decorators": [],
                        "name": "NoInfer",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 96,
        "end": 102,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 98,
          "end": 102
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 46,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 33,
              "end": 46,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 35,
                  "end": 44,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
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
                    "start": 36,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
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
      "type": "ExpressionStatement",
      "start": 105,
      "end": 139,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 105,
        "end": 138,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 111,
            "end": 123,
            "properties": [
              {
                "type": "Property",
                "start": 113,
                "end": 121,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 116,
                  "end": 121,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 125,
            "end": 137,
            "properties": [
              {
                "type": "Property",
                "start": 127,
                "end": 135,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 128,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 130,
                  "end": 135,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 105,
          "end": 110,
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 193,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 152,
        "end": 192,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 158,
            "end": 170,
            "properties": [
              {
                "type": "Property",
                "start": 160,
                "end": 168,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 163,
                  "end": 168,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 172,
            "end": 191,
            "properties": [
              {
                "type": "Property",
                "start": 174,
                "end": 182,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 177,
                  "end": 182,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              },
              {
                "type": "Property",
                "start": 184,
                "end": 189,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 185,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 187,
                  "end": 189,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 152,
          "end": 157,
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 208,
      "end": 309,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 230,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 259,
          "end": 263,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 260,
            "end": 263,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 262,
              "end": 263,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 262,
                "end": 263,
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
          "start": 267,
          "end": 299,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 268,
            "end": 299,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 270,
              "end": 299,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 270,
                  "end": 280,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 277,
                    "end": 280,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 278,
                        "end": 279,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 278,
                          "end": 279,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 277,
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 283,
                  "end": 299,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 290,
                    "end": 299,
                    "params": [
                      {
                        "type": "TSFunctionType",
                        "start": 291,
                        "end": 298,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 294,
                          "end": 298,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 297,
                            "end": 298,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 297,
                              "end": 298,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 290,
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 302,
        "end": 308,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 304,
          "end": 308
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 230,
        "end": 255,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 231,
            "end": 254,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 241,
              "end": 254,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 243,
                  "end": 252,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
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
                    "start": 244,
                    "end": 252,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 246,
                      "end": 252
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
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
      "type": "ExpressionStatement",
      "start": 311,
      "end": 345,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 311,
        "end": 344,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 317,
            "end": 329,
            "properties": [
              {
                "type": "Property",
                "start": 319,
                "end": 327,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 320,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 322,
                  "end": 327,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 331,
            "end": 343,
            "properties": [
              {
                "type": "Property",
                "start": 333,
                "end": 341,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 334,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 336,
                  "end": 341,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 311,
          "end": 316,
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 358,
      "end": 399,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 358,
        "end": 398,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 364,
            "end": 376,
            "properties": [
              {
                "type": "Property",
                "start": 366,
                "end": 374,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 369,
                  "end": 374,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 378,
            "end": 397,
            "properties": [
              {
                "type": "Property",
                "start": 380,
                "end": 388,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 381,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 383,
                  "end": 388,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              },
              {
                "type": "Property",
                "start": 390,
                "end": 395,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 391,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 393,
                  "end": 395,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 358,
          "end": 363,
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 414,
      "end": 508,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 436,
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 465,
          "end": 469,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 466,
            "end": 469,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 468,
              "end": 469,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
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
          "start": 473,
          "end": 498,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 474,
            "end": 498,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 476,
              "end": 498,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 483,
                "end": 498,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 484,
                    "end": 497,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 484,
                        "end": 485,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 484,
                          "end": 485,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSFunctionType",
                        "start": 489,
                        "end": 496,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 492,
                          "end": 496,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 495,
                            "end": 496,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 495,
                              "end": 496,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 476,
                "end": 483,
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
        "start": 501,
        "end": 507,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 503,
          "end": 507
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 436,
        "end": 461,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 437,
            "end": 460,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 447,
              "end": 460,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 449,
                  "end": 458,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 449,
                    "end": 450,
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
                    "start": 450,
                    "end": 458,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 452,
                      "end": 458
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 437,
              "end": 438,
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
      "type": "ExpressionStatement",
      "start": 510,
      "end": 544,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 510,
        "end": 543,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 516,
            "end": 528,
            "properties": [
              {
                "type": "Property",
                "start": 518,
                "end": 526,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 519,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 521,
                  "end": 526,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 530,
            "end": 542,
            "properties": [
              {
                "type": "Property",
                "start": 532,
                "end": 540,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 533,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 535,
                  "end": 540,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 510,
          "end": 515,
          "decorators": [],
          "name": "test3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 557,
      "end": 598,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 557,
        "end": 597,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 563,
            "end": 575,
            "properties": [
              {
                "type": "Property",
                "start": 565,
                "end": 573,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 565,
                  "end": 566,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 568,
                  "end": 573,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 577,
            "end": 596,
            "properties": [
              {
                "type": "Property",
                "start": 579,
                "end": 587,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 580,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 582,
                  "end": 587,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              },
              {
                "type": "Property",
                "start": 589,
                "end": 594,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 589,
                  "end": 590,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 592,
                  "end": 594,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 557,
          "end": 562,
          "decorators": [],
          "name": "test3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
