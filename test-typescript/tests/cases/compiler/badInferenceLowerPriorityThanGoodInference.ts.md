__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 434,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "A",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 75,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 50,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 49,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 73,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 72,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 58,
                "end": 72,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 59,
                    "end": 63,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 60,
                      "end": 63,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 62,
                        "end": 63,
                        "typeName": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 63,
                          "name": "A",
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
                  "start": 65,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 68,
                    "end": 72
                  }
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
      "type": "TSDeclareFunction",
      "start": 77,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 109,
        "name": "canYouInferThis",
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
          "start": 113,
          "end": 129,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 115,
            "end": 129,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 117,
              "end": 129,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 120,
                "end": 129,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 123,
                  "end": 129,
                  "typeName": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 126,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 126,
                    "end": 129,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 127,
                        "end": 128,
                        "typeName": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 128,
                          "name": "A",
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
        "start": 109,
        "end": 112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 111,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "A",
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
        "start": 130,
        "end": 133,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 132,
          "end": 133,
          "typeName": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "name": "A",
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
      "start": 136,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 148,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 151,
            "end": 216,
            "callee": {
              "type": "Identifier",
              "start": 151,
              "end": 166,
              "name": "canYouInferThis",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 167,
                "end": 215,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "ObjectExpression",
                  "start": 174,
                  "end": 214,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 180,
                      "end": 195,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 181,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 183,
                        "end": 195,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 185,
                            "end": 193,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 185,
                              "end": 189,
                              "name": "BLAH",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 191,
                              "end": 193,
                              "value": 33,
                              "raw": "33"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 201,
                      "end": 212,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 202,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 204,
                        "end": 212,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 204,
                            "end": 205,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 209,
                          "end": 212,
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
      "type": "ExpressionStatement",
      "start": 218,
      "end": 230,
      "expression": {
        "type": "MemberExpression",
        "start": 218,
        "end": 229,
        "object": {
          "type": "Identifier",
          "start": 218,
          "end": 224,
          "name": "result",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 225,
          "end": 229,
          "name": "BLAH",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 254,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 269,
        "name": "goofus",
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
          "start": 292,
          "end": 317,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 293,
            "end": 317,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 295,
              "end": 317,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 296,
                  "end": 309,
                  "argument": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 303,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 309,
                        "name": "ARGS",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 320,
        "end": 322,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 270,
        "end": 290,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 271,
            "end": 289,
            "name": {
              "type": "Identifier",
              "start": 271,
              "end": 275,
              "name": "ARGS",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 373,
      "expression": {
        "type": "CallExpression",
        "start": 324,
        "end": 372,
        "callee": {
          "type": "Identifier",
          "start": 324,
          "end": 330,
          "name": "goofus",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 331,
            "end": 371,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 332,
                "end": 341,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 333,
                  "end": 341,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 335,
                    "end": 341
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ObjectExpression",
              "start": 347,
              "end": 370,
              "properties": [
                {
                  "type": "Property",
                  "start": 349,
                  "end": 368,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 352,
                    "name": "dog",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 352,
                    "end": 368,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "a",
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
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 374,
      "end": 433,
      "expression": {
        "type": "CallExpression",
        "start": 374,
        "end": 432,
        "callee": {
          "type": "Identifier",
          "start": 374,
          "end": 380,
          "name": "goofus",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 381,
            "end": 431,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 382,
                "end": 391,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 383,
                  "end": 391,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 385,
                    "end": 391
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ObjectExpression",
              "start": 397,
              "end": 430,
              "properties": [
                {
                  "type": "Property",
                  "start": 399,
                  "end": 428,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 402,
                    "name": "dog",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 404,
                    "end": 428,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "a",
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
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
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
