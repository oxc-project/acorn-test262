__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 433,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 75,
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 75,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 50,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 49,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 72,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 58,
                "end": 72,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 59,
                    "end": 63,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 60,
                      "end": 63,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 62,
                        "end": 63,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 63,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 65,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 68,
                    "end": 72
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 77,
      "end": 134,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 109,
        "decorators": [],
        "name": "canYouInferThis",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 129,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 115,
            "end": 129,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 117,
              "end": 129,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 120,
                "end": 129,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 123,
                  "end": 129,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 126,
                    "end": 129,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 127,
                        "end": 128,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 128,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 126,
                    "decorators": [],
                    "name": "Foo",
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
        "start": 130,
        "end": 133,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 132,
          "end": 133,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 109,
        "end": 112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 111,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "A",
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
      "start": 136,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 216,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 148,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 151,
            "end": 216,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 167,
                "end": 215,
                "async": false,
                "body": {
                  "type": "ObjectExpression",
                  "start": 174,
                  "end": 214,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 180,
                      "end": 195,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 181,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 183,
                        "end": 195,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 185,
                            "end": 193,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 185,
                              "end": 189,
                              "decorators": [],
                              "name": "BLAH",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 191,
                              "end": 193,
                              "raw": "33",
                              "value": 33
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 201,
                      "end": 212,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 202,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 204,
                        "end": 212,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 209,
                          "end": 212,
                          "body": []
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 204,
                            "end": 205,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ]
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 151,
              "end": 166,
              "decorators": [],
              "name": "canYouInferThis",
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
      "type": "ExpressionStatement",
      "start": 218,
      "end": 230,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 218,
        "end": 229,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 218,
          "end": 224,
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 225,
          "end": 229,
          "decorators": [],
          "name": "BLAH",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 254,
      "end": 322,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 320,
        "end": 322,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 269,
        "decorators": [],
        "name": "goofus",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 292,
          "end": 317,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 293,
            "end": 317,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 295,
              "end": 317,
              "params": [
                {
                  "type": "RestElement",
                  "start": 296,
                  "end": 309,
                  "argument": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 303,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 303,
                    "end": 309,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 305,
                      "end": 309,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 309,
                        "decorators": [],
                        "name": "ARGS",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 311,
                "end": 317,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 314,
                  "end": 317
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 270,
        "end": 290,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 271,
            "end": 289,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 284,
              "end": 289,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 284,
                "end": 287
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 271,
              "end": 275,
              "decorators": [],
              "name": "ARGS",
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
      "start": 324,
      "end": 373,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 324,
        "end": 372,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 331,
            "end": 371,
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "start": 347,
              "end": 370,
              "properties": [
                {
                  "type": "Property",
                  "start": 349,
                  "end": 368,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 352,
                    "decorators": [],
                    "name": "dog",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 352,
                    "end": 368,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 355,
                      "end": 368,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 357,
                          "end": 366,
                          "argument": {
                            "type": "Identifier",
                            "start": 364,
                            "end": 365,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
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
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 332,
                "end": 341,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 333,
                  "end": 341,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 335,
                    "end": 341
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 324,
          "end": 330,
          "decorators": [],
          "name": "goofus",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 374,
      "end": 433,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 374,
        "end": 432,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 381,
            "end": 431,
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "start": 397,
              "end": 430,
              "properties": [
                {
                  "type": "Property",
                  "start": 399,
                  "end": 428,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 402,
                    "decorators": [],
                    "name": "dog",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 404,
                    "end": 428,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 415,
                      "end": 428,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 417,
                          "end": 426,
                          "argument": {
                            "type": "Identifier",
                            "start": 424,
                            "end": 425,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
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
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 382,
                "end": 391,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 383,
                  "end": 391,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 385,
                    "end": 391
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 374,
          "end": 380,
          "decorators": [],
          "name": "goofus",
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
