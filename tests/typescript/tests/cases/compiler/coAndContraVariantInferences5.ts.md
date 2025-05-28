__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 467,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 13,
        "end": 22,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 13,
            "end": 16,
            "literal": {
              "type": "Literal",
              "start": 13,
              "end": 16,
              "value": "a",
              "raw": "'a'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 19,
            "end": 22,
            "literal": {
              "type": "Literal",
              "start": 19,
              "end": 22,
              "value": "b",
              "raw": "'b'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 25,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 41,
          "end": 70,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 70,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 70,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 63,
                "decorators": [],
                "name": "SelectOptions",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 63,
                "end": 70,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 64,
                    "end": 69,
                    "typeName": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 69,
                      "decorators": [],
                      "name": "Thing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 76,
          "end": 116,
          "decorators": [],
          "name": "onChange",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 84,
            "end": 116,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 86,
              "end": 116,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 107,
                  "decorators": [],
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 107,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 95,
                      "end": 107,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 95,
                          "end": 100,
                          "typeName": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 100,
                            "decorators": [],
                            "name": "Thing",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 103,
                          "end": 107
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 109,
                "end": 116,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 112,
                  "end": 116
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 119,
        "end": 125,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 121,
          "end": 125
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 185,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 132,
            "end": 183,
            "expression": {
              "type": "CallExpression",
              "start": 132,
              "end": 182,
              "callee": {
                "type": "Identifier",
                "start": 132,
                "end": 138,
                "decorators": [],
                "name": "select",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 139,
                  "end": 181,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 149,
                      "end": 156,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 156,
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 156,
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 166,
                      "end": 174,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 174,
                        "decorators": [],
                        "name": "onChange",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 174,
                        "decorators": [],
                        "name": "onChange",
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
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 187,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 210,
        "decorators": [],
        "name": "select",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 210,
        "end": 231,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 211,
            "end": 230,
            "name": {
              "type": "Identifier",
              "start": 211,
              "end": 215,
              "decorators": [],
              "name": "KeyT",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 224,
              "end": 230
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
          "start": 232,
          "end": 256,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 237,
            "end": 256,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 239,
              "end": 256,
              "typeName": {
                "type": "Identifier",
                "start": 239,
                "end": 250,
                "decorators": [],
                "name": "SelectProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 250,
                "end": 256,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 251,
                    "end": 255,
                    "typeName": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 255,
                      "decorators": [],
                      "name": "KeyT",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 257,
        "end": 263,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 259,
          "end": 263
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 266,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 271,
        "end": 282,
        "decorators": [],
        "name": "SelectProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 282,
        "end": 303,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 283,
            "end": 302,
            "name": {
              "type": "Identifier",
              "start": 283,
              "end": 287,
              "decorators": [],
              "name": "KeyT",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 296,
              "end": 302
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 306,
        "end": 379,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 312,
            "end": 342,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 319,
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 320,
              "end": 341,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 322,
                "end": 341,
                "typeName": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 335,
                  "decorators": [],
                  "name": "SelectOptions",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 335,
                  "end": 341,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 336,
                      "end": 340,
                      "typeName": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 340,
                        "decorators": [],
                        "name": "KeyT",
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
          },
          {
            "type": "TSPropertySignature",
            "start": 347,
            "end": 377,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 355,
              "decorators": [],
              "name": "onChange",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 376,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 357,
                "end": 376,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 358,
                    "end": 367,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 361,
                      "end": 367,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 363,
                        "end": 367,
                        "typeName": {
                          "type": "Identifier",
                          "start": 363,
                          "end": 367,
                          "decorators": [],
                          "name": "KeyT",
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
                  "start": 369,
                  "end": 376,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 372,
                    "end": 376
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
      "type": "TSTypeAliasDeclaration",
      "start": 382,
      "end": 467,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 400,
        "decorators": [],
        "name": "SelectOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 400,
        "end": 421,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 401,
            "end": 420,
            "name": {
              "type": "Identifier",
              "start": 401,
              "end": 405,
              "decorators": [],
              "name": "KeyT",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 414,
              "end": 420
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 428,
        "end": 466,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 430,
            "end": 448,
            "typeName": {
              "type": "Identifier",
              "start": 430,
              "end": 435,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 435,
              "end": 448,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 436,
                  "end": 447,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 437,
                      "end": 446,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 437,
                        "end": 440,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 440,
                        "end": 446,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 442,
                          "end": 446,
                          "typeName": {
                            "type": "Identifier",
                            "start": 442,
                            "end": 446,
                            "decorators": [],
                            "name": "KeyT",
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
          {
            "type": "TSTypeReference",
            "start": 455,
            "end": 466,
            "typeName": {
              "type": "Identifier",
              "start": 455,
              "end": 460,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 460,
              "end": 466,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 461,
                  "end": 465,
                  "typeName": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 465,
                    "decorators": [],
                    "name": "KeyT",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
