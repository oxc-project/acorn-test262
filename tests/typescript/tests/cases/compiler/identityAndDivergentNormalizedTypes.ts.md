__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 632,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 35,
        "decorators": [],
        "name": "ApiPost",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 42,
        "end": 163,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 44,
            "end": 93,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 54,
                "end": 69,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 58,
                  "decorators": [],
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 60,
                    "end": 68,
                    "literal": {
                      "type": "Literal",
                      "start": 60,
                      "end": 68,
                      "value": "/login",
                      "raw": "\"/login\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 78,
                "end": 87,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 82,
                  "decorators": [],
                  "name": "body",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 82,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 84,
                    "end": 86,
                    "members": []
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 100,
            "end": 163,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 110,
                "end": 124,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 114,
                  "decorators": [],
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 114,
                  "end": 123,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 116,
                    "end": 123,
                    "literal": {
                      "type": "Literal",
                      "start": 116,
                      "end": 123,
                      "value": "/user",
                      "raw": "\"/user\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 133,
                "end": 157,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 137,
                  "decorators": [],
                  "name": "body",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 137,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 139,
                    "end": 156,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 141,
                        "end": 154,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 145,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 145,
                          "end": 153,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 147,
                            "end": 153
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
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 165,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 178,
        "decorators": [],
        "name": "PostPath",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 181,
        "end": 196,
        "objectType": {
          "type": "TSTypeReference",
          "start": 181,
          "end": 188,
          "typeName": {
            "type": "Identifier",
            "start": 181,
            "end": 188,
            "decorators": [],
            "name": "ApiPost",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 189,
          "end": 195,
          "literal": {
            "type": "Literal",
            "start": 189,
            "end": 195,
            "value": "path",
            "raw": "\"path\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 199,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 212,
        "decorators": [],
        "name": "PostBody",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 212,
        "end": 235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 213,
            "end": 234,
            "name": {
              "type": "Identifier",
              "start": 213,
              "end": 217,
              "decorators": [],
              "name": "PATH",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 226,
              "end": 234,
              "typeName": {
                "type": "Identifier",
                "start": 226,
                "end": 234,
                "decorators": [],
                "name": "PostPath",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 238,
        "end": 278,
        "objectType": {
          "type": "TSTypeReference",
          "start": 238,
          "end": 270,
          "typeName": {
            "type": "Identifier",
            "start": 238,
            "end": 245,
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 245,
            "end": 270,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 246,
                "end": 253,
                "typeName": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 253,
                  "decorators": [],
                  "name": "ApiPost",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeLiteral",
                "start": 255,
                "end": 269,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 257,
                    "end": 267,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 261,
                      "decorators": [],
                      "name": "path",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 261,
                      "end": 267,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 263,
                        "end": 267,
                        "typeName": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 267,
                          "decorators": [],
                          "name": "PATH",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            ]
          }
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 271,
          "end": 277,
          "literal": {
            "type": "Literal",
            "start": 271,
            "end": 277,
            "value": "body",
            "raw": "\"body\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 418,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 418,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 291,
            "decorators": [],
            "name": "post",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 294,
            "end": 418,
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 294,
              "end": 317,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 295,
                  "end": 316,
                  "name": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 299,
                    "decorators": [],
                    "name": "PATH",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 308,
                    "end": 316,
                    "typeName": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 316,
                      "decorators": [],
                      "name": "PostPath",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "start": 323,
                "end": 333,
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 327,
                  "end": 333,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 329,
                    "end": 333,
                    "typeName": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 333,
                      "decorators": [],
                      "name": "PATH",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "ObjectPattern",
                "start": 339,
                "end": 409,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 340,
                    "end": 344,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 344,
                      "decorators": [],
                      "name": "body",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 344,
                      "decorators": [],
                      "name": "body",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 346,
                    "end": 356,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 356,
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 357,
                  "end": 409,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 359,
                    "end": 409,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 359,
                        "end": 384,
                        "typeName": {
                          "type": "Identifier",
                          "start": 359,
                          "end": 363,
                          "decorators": [],
                          "name": "Omit",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 363,
                          "end": 384,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 364,
                              "end": 375,
                              "typeName": {
                                "type": "Identifier",
                                "start": 364,
                                "end": 375,
                                "decorators": [],
                                "name": "RequestInit",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 377,
                              "end": 383,
                              "literal": {
                                "type": "Literal",
                                "start": 377,
                                "end": 383,
                                "value": "body",
                                "raw": "'body'"
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 387,
                        "end": 409,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 388,
                            "end": 408,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 388,
                              "end": 392,
                              "decorators": [],
                              "name": "body",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 392,
                              "end": 408,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 394,
                                "end": 408,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 394,
                                  "end": 402,
                                  "decorators": [],
                                  "name": "PostBody",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 402,
                                  "end": 408,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 403,
                                      "end": 407,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 403,
                                        "end": 407,
                                        "decorators": [],
                                        "name": "PATH",
                                        "optional": false,
                                        "typeAnnotation": null
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
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 415,
              "end": 418,
              "body": []
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
      "start": 420,
      "end": 531,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 429,
            "decorators": [],
            "name": "tmp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 432,
            "end": 531,
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 432,
              "end": 455,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 433,
                  "end": 454,
                  "name": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 437,
                    "decorators": [],
                    "name": "PATH",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 446,
                    "end": 454,
                    "typeName": {
                      "type": "Identifier",
                      "start": 446,
                      "end": 454,
                      "decorators": [],
                      "name": "PostPath",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "start": 459,
                "end": 469,
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 463,
                  "end": 469,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 465,
                    "end": 469,
                    "typeName": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 469,
                      "decorators": [],
                      "name": "PATH",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 473,
                "end": 493,
                "decorators": [],
                "name": "body",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 477,
                  "end": 493,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 479,
                    "end": 493,
                    "typeName": {
                      "type": "Identifier",
                      "start": 479,
                      "end": 487,
                      "decorators": [],
                      "name": "PostBody",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 487,
                      "end": 493,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 488,
                          "end": 492,
                          "typeName": {
                            "type": "Identifier",
                            "start": 488,
                            "end": 492,
                            "decorators": [],
                            "name": "PATH",
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
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 499,
              "end": 531,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 503,
                  "end": 529,
                  "expression": {
                    "type": "CallExpression",
                    "start": 503,
                    "end": 529,
                    "callee": {
                      "type": "Identifier",
                      "start": 503,
                      "end": 507,
                      "decorators": [],
                      "name": "post",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 507,
                      "end": 513,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 508,
                          "end": 512,
                          "typeName": {
                            "type": "Identifier",
                            "start": 508,
                            "end": 512,
                            "decorators": [],
                            "name": "PATH",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 514,
                        "end": 518,
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "ObjectExpression",
                        "start": 520,
                        "end": 528,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 522,
                            "end": 526,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 522,
                              "end": 526,
                              "decorators": [],
                              "name": "body",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 522,
                              "end": 526,
                              "decorators": [],
                              "name": "body",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
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
      "type": "FunctionDeclaration",
      "start": 533,
      "end": 632,
      "id": {
        "type": "Identifier",
        "start": 542,
        "end": 545,
        "decorators": [],
        "name": "fx1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 545,
        "end": 565,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 546,
            "end": 564,
            "name": {
              "type": "Identifier",
              "start": 546,
              "end": 547,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 556,
              "end": 564,
              "typeName": {
                "type": "Identifier",
                "start": 556,
                "end": 564,
                "decorators": [],
                "name": "PostPath",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
          "start": 566,
          "end": 590,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 567,
            "end": 590,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 569,
              "end": 590,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 571,
                  "end": 588,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 575,
                    "decorators": [],
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 575,
                    "end": 588,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 577,
                      "end": 588,
                      "typeName": {
                        "type": "Identifier",
                        "start": 577,
                        "end": 585,
                        "decorators": [],
                        "name": "PostBody",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 585,
                        "end": 588,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 586,
                            "end": 587,
                            "typeName": {
                              "type": "Identifier",
                              "start": 586,
                              "end": 587,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
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
          }
        },
        {
          "type": "Identifier",
          "start": 592,
          "end": 616,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 593,
            "end": 616,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 595,
              "end": 616,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 597,
                  "end": 614,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 597,
                    "end": 601,
                    "decorators": [],
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 601,
                    "end": 614,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 603,
                      "end": 614,
                      "typeName": {
                        "type": "Identifier",
                        "start": 603,
                        "end": 611,
                        "decorators": [],
                        "name": "PostBody",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 611,
                        "end": 614,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 612,
                            "end": 613,
                            "typeName": {
                              "type": "Identifier",
                              "start": 612,
                              "end": 613,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 618,
        "end": 632,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 624,
            "end": 630,
            "expression": {
              "type": "AssignmentExpression",
              "start": 624,
              "end": 629,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 624,
                "end": 625,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 628,
                "end": 629,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
