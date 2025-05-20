__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 502,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 42,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 42,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 29,
              "decorators": [],
              "name": "comment",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Entry",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 46,
      "end": 104,
      "body": {
        "type": "TSInterfaceBody",
        "start": 63,
        "end": 104,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 101,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 76,
              "decorators": [],
              "name": "fields",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 78,
                "end": 100,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 79,
                    "end": 99,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 80,
                        "end": 91,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 83,
                          "end": 91,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 85,
                            "end": 91
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 99,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 94,
                        "end": 99,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 99,
                          "decorators": [],
                          "name": "Entry",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 62,
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 108,
      "end": 191,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 119,
        "decorators": [],
        "name": "Fields",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 140,
        "end": 190,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 153,
          "end": 170,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 159,
            "end": 170,
            "indexType": {
              "type": "TSLiteralType",
              "start": 161,
              "end": 169,
              "literal": {
                "type": "Literal",
                "start": 161,
                "end": 169,
                "raw": "\"fields\"",
                "value": "fields"
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 159,
              "end": 160,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 148,
          "end": 149,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 173,
          "end": 187,
          "indexType": {
            "type": "TSTypeReference",
            "start": 185,
            "end": 186,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSIndexedAccessType",
            "start": 173,
            "end": 184,
            "indexType": {
              "type": "TSLiteralType",
              "start": 175,
              "end": 183,
              "literal": {
                "type": "Literal",
                "start": 175,
                "end": 183,
                "raw": "\"fields\"",
                "value": "fields"
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 173,
              "end": 174,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 173,
                "end": 174,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 119,
        "end": 137,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 120,
            "end": 136,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 130,
              "end": 136,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 130,
                "end": 136,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 195,
      "end": 303,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 205,
        "decorators": [],
        "name": "Nodes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 217,
        "end": 302,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 230,
          "end": 237,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 236,
            "end": 237,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 225,
          "end": 226,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 240,
          "end": 299,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 240,
            "end": 244,
            "indexType": {
              "type": "TSTypeReference",
              "start": 242,
              "end": 243,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 240,
              "end": 241,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 253,
            "end": 259,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 253,
              "end": 259,
              "decorators": [],
              "name": "Entity",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 295,
            "end": 299,
            "indexType": {
              "type": "TSTypeReference",
              "start": 297,
              "end": 298,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 297,
                "end": 298,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 295,
              "end": 296,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 295,
                "end": 296,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 271,
            "end": 283,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 277,
              "end": 283,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 278,
                  "end": 282,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 280,
                    "end": 281,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 281,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
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
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 271,
              "end": 277,
              "decorators": [],
              "name": "Fields",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 205,
        "end": 214,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 206,
            "end": 213,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 210,
              "end": 213
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
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
      "type": "FunctionDeclaration",
      "start": 307,
      "end": 418,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 387,
        "end": 418,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 394,
            "end": 415,
            "argument": {
              "type": "TSAsExpression",
              "start": 401,
              "end": 415,
              "expression": {
                "type": "ObjectExpression",
                "start": 401,
                "end": 403,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 407,
                "end": 415,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 412,
                  "end": 415,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 413,
                      "end": 414,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 413,
                        "end": 414,
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
                  "start": 407,
                  "end": 412,
                  "decorators": [],
                  "name": "Nodes",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 316,
        "end": 331,
        "decorators": [],
        "name": "makeEntityStore",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 366,
          "end": 375,
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 372,
            "end": 375,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 374,
              "end": 375,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 374,
                "end": 375,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 376,
        "end": 386,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 378,
          "end": 386,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 383,
            "end": 386,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 384,
                "end": 385,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 385,
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
            "start": 378,
            "end": 383,
            "decorators": [],
            "name": "Nodes",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 331,
        "end": 365,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 364,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 342,
              "end": 364,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 348,
                "end": 364,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 349,
                    "end": 355
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 357,
                    "end": 363,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 363,
                      "decorators": [],
                      "name": "Entity",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 342,
                "end": 348,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
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
      "type": "VariableDeclaration",
      "start": 422,
      "end": 487,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 428,
          "end": 486,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 428,
            "end": 434,
            "decorators": [],
            "name": "myTest",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 437,
            "end": 486,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 453,
                "end": 485,
                "properties": [
                  {
                    "type": "Property",
                    "start": 455,
                    "end": 483,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 459,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 461,
                      "end": 483,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 463,
                          "end": 481,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 463,
                            "end": 469,
                            "decorators": [],
                            "name": "fields",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 471,
                            "end": 481,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 473,
                                "end": 479,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 473,
                                  "end": 475,
                                  "decorators": [],
                                  "name": "id",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ObjectExpression",
                                  "start": 477,
                                  "end": 479,
                                  "properties": []
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 437,
              "end": 452,
              "decorators": [],
              "name": "makeEntityStore",
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
      "start": 489,
      "end": 500,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 489,
        "end": 500,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 489,
          "end": 495,
          "decorators": [],
          "name": "myTest",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 496,
          "end": 500,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
