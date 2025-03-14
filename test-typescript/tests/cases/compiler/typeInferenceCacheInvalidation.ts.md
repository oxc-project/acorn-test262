__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 404,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 79,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 35,
        "decorators": [],
        "name": "Callback",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 50,
        "end": 79,
        "params": [
          {
            "type": "Identifier",
            "start": 51,
            "end": 60,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 60,
                  "decorators": [],
                  "name": "TFoo",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 62,
            "end": 71,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 71,
                  "decorators": [],
                  "name": "TBar",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 73,
          "end": 79,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 76,
            "end": 79
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 40,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 40,
              "decorators": [],
              "name": "TFoo",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 46,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "TBar",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 81,
      "end": 226,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 105,
        "decorators": [],
        "name": "example",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 163,
          "end": 172,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 172,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 168,
              "end": 172,
              "typeName": {
                "type": "Identifier",
                "start": 168,
                "end": 172,
                "decorators": [],
                "name": "TFoo",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 178,
          "end": 197,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 186,
            "end": 197,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 188,
              "end": 197,
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 197,
                "decorators": [],
                "name": "TCallback",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 203,
          "end": 212,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 206,
            "end": 212,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 208,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 208,
                "end": 212,
                "decorators": [],
                "name": "TBar",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 215,
        "end": 226,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 217,
          "end": 226,
          "typeName": {
            "type": "Identifier",
            "start": 217,
            "end": 226,
            "decorators": [],
            "name": "TCallback",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 157,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 110,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 110,
              "decorators": [],
              "name": "TFoo",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 112,
            "end": 116,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 112,
              "end": 116,
              "decorators": [],
              "name": "TBar",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 118,
            "end": 156,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 136,
              "end": 156,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 144,
                "end": 156,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 145,
                    "end": 149,
                    "typeName": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 149,
                      "decorators": [],
                      "name": "TFoo",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 151,
                    "end": 155,
                    "typeName": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 155,
                      "decorators": [],
                      "name": "TBar",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 144,
                "decorators": [],
                "name": "Callback",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 127,
              "decorators": [],
              "name": "TCallback",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 317,
      "expression": {
        "type": "CallExpression",
        "start": 228,
        "end": 316,
        "arguments": [
          {
            "type": "Literal",
            "start": 236,
            "end": 238,
            "raw": "42",
            "value": 42
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 240,
            "end": 309,
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "start": 255,
              "end": 308,
              "properties": [
                {
                  "type": "Property",
                  "start": 261,
                  "end": 306,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 262,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 264,
                    "end": 306,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 270,
                      "end": 306,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 280,
                          "end": 300,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 284,
                              "end": 299,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 284,
                                "end": 293,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 285,
                                  "end": 293,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 287,
                                    "end": 293
                                  }
                                }
                              },
                              "init": {
                                "type": "Identifier",
                                "start": 296,
                                "end": 299,
                                "decorators": [],
                                "name": "bar",
                                "optional": false
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
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
                "start": 241,
                "end": 244,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 246,
                "end": 249,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            ]
          },
          {
            "type": "Literal",
            "start": 311,
            "end": 315,
            "raw": "'42'",
            "value": "42"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 228,
          "end": 235,
          "decorators": [],
          "name": "example",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 403,
      "expression": {
        "type": "CallExpression",
        "start": 319,
        "end": 402,
        "arguments": [
          {
            "type": "Literal",
            "start": 327,
            "end": 329,
            "raw": "42",
            "value": 42
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 331,
            "end": 395,
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "start": 346,
              "end": 394,
              "properties": [
                {
                  "type": "Property",
                  "start": 352,
                  "end": 392,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 353,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 353,
                    "end": 392,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 356,
                      "end": 392,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 366,
                          "end": 386,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 370,
                              "end": 385,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 370,
                                "end": 379,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 371,
                                  "end": 379,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 373,
                                    "end": 379
                                  }
                                }
                              },
                              "init": {
                                "type": "Identifier",
                                "start": 382,
                                "end": 385,
                                "decorators": [],
                                "name": "bar",
                                "optional": false
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
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
                "end": 335,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 337,
                "end": 340,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            ]
          },
          {
            "type": "Literal",
            "start": 397,
            "end": 401,
            "raw": "'42'",
            "value": "42"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 319,
          "end": 326,
          "decorators": [],
          "name": "example",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
