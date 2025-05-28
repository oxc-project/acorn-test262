__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 524,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 82,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 45,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 45,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 9,
                "end": 45,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 9,
                    "end": 29,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 11,
                        "end": 27,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 11,
                          "end": 12,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12,
                          "end": 27,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 14,
                            "end": 27,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 16,
                                "end": 25,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 16,
                                  "end": 17,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 17,
                                  "end": 25,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 19,
                                    "end": 25
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 32,
                    "end": 45,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 34,
                        "end": 43,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 35,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 35,
                          "end": 43,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 37,
                            "end": 43
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 48,
            "end": 81,
            "properties": [
              {
                "type": "Property",
                "start": 50,
                "end": 73,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 53,
                  "end": 73,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 55,
                      "end": 65,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 56,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 58,
                        "end": 65,
                        "value": "hello",
                        "raw": "'hello'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 67,
                      "end": 71,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 70,
                        "end": 71,
                        "value": 2,
                        "raw": "2"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 75,
                "end": 79,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 78,
                  "end": 79,
                  "value": 5,
                  "raw": "5"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 151,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 150,
            "decorators": [],
            "name": "wrong",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 130,
                "end": 150,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 132,
                    "end": 148,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 133,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 133,
                      "end": 148,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 135,
                        "end": 148,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 137,
                            "end": 146,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 138,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 138,
                              "end": 146,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 140,
                                "end": 146
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 210,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 209,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 201,
            "decorators": [],
            "name": "weak",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 201,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 162,
                "end": 201,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 162,
                    "end": 184,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 164,
                        "end": 182,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 165,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 166,
                          "end": 182,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 168,
                            "end": 182,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 170,
                                "end": 180,
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 170,
                                  "end": 171,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 172,
                                  "end": 180,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 174,
                                    "end": 180
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 187,
                    "end": 201,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 189,
                        "end": 199,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 189,
                          "end": 190,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 191,
                          "end": 199,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 193,
                            "end": 199
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 204,
            "end": 209,
            "decorators": [],
            "name": "wrong",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 240,
      "end": 372,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 252,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 252,
        "end": 270,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 253,
            "end": 269,
            "name": {
              "type": "Identifier",
              "start": 253,
              "end": 254,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 263,
              "end": 269
            },
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
          "start": 271,
          "end": 288,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 272,
            "end": 288,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 274,
              "end": 288,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 276,
                  "end": 286,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 278,
                    "end": 286,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 280,
                      "end": 286
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 290,
          "end": 311,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 291,
            "end": 311,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 293,
              "end": 311,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 293,
                  "end": 294,
                  "typeName": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 297,
                  "end": 311,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 299,
                      "end": 309,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 300,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 300,
                        "end": 309,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 302,
                          "end": 309
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 313,
        "end": 372,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 317,
            "end": 323,
            "expression": {
              "type": "AssignmentExpression",
              "start": 317,
              "end": 322,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 321,
                "end": 322,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 396,
      "end": 439,
      "id": {
        "type": "Identifier",
        "start": 406,
        "end": 410,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 411,
        "end": 439,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 415,
            "end": 437,
            "computed": false,
            "optional": true,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 424,
              "end": 426,
              "decorators": [],
              "name": "hi",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 427,
              "end": 437,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 429,
                "end": 437,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 429,
                  "end": 435
                }
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
      "type": "FunctionDeclaration",
      "start": 441,
      "end": 524,
      "id": {
        "type": "Identifier",
        "start": 450,
        "end": 454,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 454,
        "end": 472,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 455,
            "end": 471,
            "name": {
              "type": "Identifier",
              "start": 455,
              "end": 456,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 465,
              "end": 471
            },
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
          "start": 473,
          "end": 481,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 478,
            "end": 481,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 480,
              "end": 481,
              "typeName": {
                "type": "Identifier",
                "start": 480,
                "end": 481,
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
        "start": 482,
        "end": 488,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 484,
          "end": 488,
          "typeName": {
            "type": "Identifier",
            "start": 484,
            "end": 488,
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 489,
        "end": 524,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 493,
            "end": 522,
            "argument": {
              "type": "ObjectExpression",
              "start": 500,
              "end": 522,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 502,
                  "end": 510,
                  "argument": {
                    "type": "Identifier",
                    "start": 505,
                    "end": 510,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 512,
                  "end": 520,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 512,
                    "end": 514,
                    "decorators": [],
                    "name": "hi",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 516,
                    "end": 520,
                    "value": true,
                    "raw": "true"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
