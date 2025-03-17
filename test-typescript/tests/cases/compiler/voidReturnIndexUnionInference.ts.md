__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 67,
  "end": 597,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 271,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 74,
        "end": 271,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 180,
          "end": 271,
          "body": [
            {
              "type": "IfStatement",
              "start": 186,
              "end": 269,
              "alternate": {
                "type": "BlockStatement",
                "start": 236,
                "end": 269,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 246,
                    "end": 263,
                    "argument": {
                      "type": "Identifier",
                      "start": 253,
                      "end": 262,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 196,
                "end": 230,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 206,
                    "end": 224,
                    "argument": {
                      "type": "CallExpression",
                      "start": 213,
                      "end": 223,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 218,
                          "end": 222,
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 217,
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 190,
                "end": 194,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 83,
          "end": 93,
          "decorators": [],
          "name": "safeInvoke",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 106,
            "end": 148,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 148,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 112,
                "end": 148,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 113,
                    "end": 128,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 114,
                        "end": 122,
                        "decorators": [],
                        "name": "arg1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 118,
                          "end": 122,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 120,
                            "end": 122,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 120,
                              "end": 122,
                              "decorators": [],
                              "name": "A1",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 124,
                      "end": 128,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 127,
                        "end": 128,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 128,
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 132,
                    "end": 136
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 139,
                    "end": 148
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 154,
            "end": 162,
            "decorators": [],
            "name": "arg1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 160,
                "end": 162,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 162,
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 164,
          "end": 179,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 166,
            "end": 179,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 166,
                "end": 167,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 170,
                "end": 179
              }
            ]
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 93,
          "end": 100,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 94,
              "end": 96,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 94,
                "end": 96,
                "decorators": [],
                "name": "A1",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 98,
              "end": 99,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 273,
      "end": 361,
      "body": {
        "type": "TSInterfaceBody",
        "start": 289,
        "end": 361,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 295,
            "end": 326,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 300,
              "decorators": [],
              "name": "onFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "start": 302,
                "end": 315,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 307,
                  "end": 315,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 309,
                    "end": 315
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 316,
              "end": 325,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 318,
                "end": 325
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 331,
            "end": 359,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 331,
              "end": 336,
              "decorators": [],
              "name": "onBar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "start": 338,
                "end": 351,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 343,
                  "end": 351,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 345,
                    "end": 351
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 358,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 354,
                "end": 358
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 288,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 363,
      "end": 596,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 413,
        "end": 596,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 419,
            "end": 451,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 419,
              "end": 450,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 430,
                  "end": 441,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 435,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 441,
                    "decorators": [],
                    "name": "onFoo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Literal",
                  "start": 443,
                  "end": 449,
                  "raw": "\"blah\"",
                  "value": "blah"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 419,
                "end": 429,
                "decorators": [],
                "name": "safeInvoke",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 562,
            "end": 594,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 562,
              "end": 593,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 573,
                  "end": 584,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 578,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 579,
                    "end": 584,
                    "decorators": [],
                    "name": "onBar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Literal",
                  "start": 586,
                  "end": 592,
                  "raw": "\"blah\"",
                  "value": "blah"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 562,
                "end": 572,
                "decorators": [],
                "name": "safeInvoke",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 375,
        "decorators": [],
        "name": "bad",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 393,
          "end": 411,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 398,
            "end": 411,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 400,
              "end": 411,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 408,
                "end": 411,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 409,
                    "end": 410,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 409,
                      "end": 410,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 400,
                "end": 408,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 375,
        "end": 392,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 376,
            "end": 391,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 386,
              "end": 391,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 386,
                "end": 391,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
