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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Entry",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 42,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 39,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 29,
              "name": "comment",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
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
      "type": "TSInterfaceDeclaration",
      "start": 46,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 62,
        "name": "Entity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 63,
        "end": 104,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 101,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 76,
              "name": "fields",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 80,
                        "end": 91,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 83,
                          "end": 91,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 85,
                            "end": 91
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 99,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 94,
                        "end": 99,
                        "typeName": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 99,
                          "name": "Entry",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 108,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 119,
        "name": "Fields",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 130,
              "end": 136,
              "typeName": {
                "type": "Identifier",
                "start": 130,
                "end": 136,
                "name": "Entity",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "type": "TSMappedType",
        "start": 140,
        "end": 190,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 148,
          "end": 170,
          "name": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 153,
            "end": 170,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 159,
              "end": 170,
              "objectType": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 160,
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 161,
                "end": 169,
                "literal": {
                  "type": "Literal",
                  "start": 161,
                  "end": 169,
                  "value": "fields",
                  "raw": "\"fields\""
                }
              }
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 173,
          "end": 187,
          "objectType": {
            "type": "TSIndexedAccessType",
            "start": 173,
            "end": 184,
            "objectType": {
              "type": "TSTypeReference",
              "start": 173,
              "end": 174,
              "typeName": {
                "type": "Identifier",
                "start": 173,
                "end": 174,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 175,
              "end": 183,
              "literal": {
                "type": "Literal",
                "start": 175,
                "end": 183,
                "value": "fields",
                "raw": "\"fields\""
              }
            }
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 185,
            "end": 186,
            "typeName": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 153,
          "end": 170,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 159,
            "end": 170,
            "objectType": {
              "type": "TSTypeReference",
              "start": 159,
              "end": 160,
              "typeName": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 161,
              "end": 169,
              "literal": {
                "type": "Literal",
                "start": 161,
                "end": 169,
                "value": "fields",
                "raw": "\"fields\""
              }
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 148,
          "end": 149,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 195,
      "end": 303,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 205,
        "name": "Nodes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 210,
              "end": 213
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 217,
        "end": 302,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 225,
          "end": 237,
          "name": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 230,
            "end": 237,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 236,
              "end": 237,
              "typeName": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 240,
          "end": 299,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 240,
            "end": 244,
            "objectType": {
              "type": "TSTypeReference",
              "start": 240,
              "end": 241,
              "typeName": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 242,
              "end": 243,
              "typeName": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 253,
            "end": 259,
            "typeName": {
              "type": "Identifier",
              "start": 253,
              "end": 259,
              "name": "Entity",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 271,
            "end": 283,
            "typeName": {
              "type": "Identifier",
              "start": 271,
              "end": 277,
              "name": "Fields",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 277,
              "end": 283,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 278,
                  "end": 282,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 278,
                    "end": 279,
                    "typeName": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 280,
                    "end": 281,
                    "typeName": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 281,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 295,
            "end": 299,
            "objectType": {
              "type": "TSTypeReference",
              "start": 295,
              "end": 296,
              "typeName": {
                "type": "Identifier",
                "start": 295,
                "end": 296,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 297,
              "end": 298,
              "typeName": {
                "type": "Identifier",
                "start": 297,
                "end": 298,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 230,
          "end": 237,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 236,
            "end": 237,
            "typeName": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 225,
          "end": 226,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 307,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 316,
        "end": 331,
        "name": "makeEntityStore",
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
          "start": 366,
          "end": 375,
          "name": "config",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 372,
            "end": 375,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 374,
              "end": 375,
              "typeName": {
                "type": "Identifier",
                "start": 374,
                "end": 375,
                "name": "T",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 412,
                  "name": "Nodes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 412,
                  "end": 415,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 413,
                      "end": 414,
                      "typeName": {
                        "type": "Identifier",
                        "start": 413,
                        "end": 414,
                        "name": "T",
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
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 331,
        "end": 365,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 364,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 342,
              "end": 364,
              "typeName": {
                "type": "Identifier",
                "start": 342,
                "end": 348,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 363,
                      "name": "Entity",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 376,
        "end": 386,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 378,
          "end": 386,
          "typeName": {
            "type": "Identifier",
            "start": 378,
            "end": 383,
            "name": "Nodes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 383,
            "end": 386,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 384,
                "end": 385,
                "typeName": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 385,
                  "name": "T",
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
          "id": {
            "type": "Identifier",
            "start": 428,
            "end": 434,
            "name": "myTest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 437,
            "end": 486,
            "callee": {
              "type": "Identifier",
              "start": 437,
              "end": 452,
              "name": "makeEntityStore",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 459,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 461,
                      "end": 483,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 463,
                          "end": 481,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 463,
                            "end": 469,
                            "name": "fields",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 471,
                            "end": 481,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 473,
                                "end": 479,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 473,
                                  "end": 475,
                                  "name": "id",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "ObjectExpression",
                                  "start": 477,
                                  "end": 479,
                                  "properties": []
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "start": 489,
      "end": 500,
      "expression": {
        "type": "MemberExpression",
        "start": 489,
        "end": 500,
        "object": {
          "type": "Identifier",
          "start": 489,
          "end": 495,
          "name": "myTest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 496,
          "end": 500,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
