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
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "A",
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
      "extends": [],
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 63,
                          "decorators": [],
                          "name": "A",
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
        "decorators": [],
        "name": "canYouInferThis",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "A",
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
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
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
          "typeName": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 216,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 216,
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
            "callee": {
              "type": "Identifier",
              "start": 151,
              "end": 166,
              "decorators": [],
              "name": "canYouInferThis",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 167,
                "end": 215,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ObjectExpression",
                  "start": 174,
                  "end": 214,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 180,
                      "end": 195,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 181,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 185,
                              "end": 189,
                              "decorators": [],
                              "name": "BLAH",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 191,
                              "end": 193,
                              "value": 33,
                              "raw": "33"
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
                      "start": 201,
                      "end": 212,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 202,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 204,
                        "end": 212,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
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
                        "body": {
                          "type": "BlockStatement",
                          "start": 209,
                          "end": 212,
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
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 225,
          "end": 229,
          "decorators": [],
          "name": "BLAH",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
        "decorators": [],
        "name": "goofus",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "ARGS",
              "optional": false,
              "typeAnnotation": null
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
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 296,
                  "end": 309,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 303,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "decorators": [],
                        "name": "ARGS",
                        "optional": false,
                        "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 320,
        "end": 322,
        "body": []
      },
      "expression": false
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
          "decorators": [],
          "name": "goofus",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 331,
            "end": 371,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "ObjectExpression",
              "start": 347,
              "end": 370,
              "properties": [
                {
                  "type": "Property",
                  "start": 349,
                  "end": 368,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 352,
                    "decorators": [],
                    "name": "dog",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 352,
                    "end": 368,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                    "expression": false
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "goofus",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 381,
            "end": 431,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "ObjectExpression",
              "start": 397,
              "end": 430,
              "properties": [
                {
                  "type": "Property",
                  "start": 399,
                  "end": 428,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 402,
                    "decorators": [],
                    "name": "dog",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 404,
                    "end": 428,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                    "expression": false
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
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
