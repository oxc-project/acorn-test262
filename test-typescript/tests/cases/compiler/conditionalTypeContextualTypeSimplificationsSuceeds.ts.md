__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 67,
  "end": 524,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 67,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 82,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 83,
        "end": 124,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 122,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 93,
              "name": "when",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 121,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 95,
                "end": 121,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 96,
                    "end": 109,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 101,
                      "end": 109,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 103,
                        "end": 109
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 121,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 114,
                    "end": 121
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
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 138,
        "name": "bad",
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
          "start": 161,
          "end": 244,
          "name": "attrs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 244,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 168,
              "end": 244,
              "checkType": {
                "type": "TSStringKeyword",
                "start": 168,
                "end": 174
              },
              "extendsType": {
                "type": "TSTypeOperator",
                "start": 183,
                "end": 190,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 189,
                  "end": 190,
                  "typeName": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "trueType": {
                "type": "TSMappedType",
                "start": 193,
                "end": 217,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 196,
                  "end": 208,
                  "name": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 197,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 201,
                    "end": 208,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 207,
                      "end": 208,
                      "typeName": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
                        "name": "P",
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
                  "type": "TSIndexedAccessType",
                  "start": 211,
                  "end": 215,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 211,
                    "end": 212,
                    "typeName": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 212,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 213,
                    "end": 214,
                    "typeName": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "name": "K",
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
                  "start": 201,
                  "end": 208,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 207,
                    "end": 208,
                    "typeName": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 208,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "falseType": {
                "type": "TSMappedType",
                "start": 220,
                "end": 244,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 223,
                  "end": 235,
                  "name": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 224,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 228,
                    "end": 235,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 234,
                      "end": 235,
                      "typeName": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 235,
                        "name": "P",
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
                  "type": "TSIndexedAccessType",
                  "start": 238,
                  "end": 242,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 238,
                    "end": 239,
                    "typeName": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 240,
                    "end": 241,
                    "typeName": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 241,
                      "name": "K",
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
                  "start": 228,
                  "end": 235,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 234,
                    "end": 235,
                    "typeName": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "start": 246,
        "end": 249,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 138,
        "end": 155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 139,
            "end": 154,
            "name": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 149,
              "end": 154,
              "typeName": {
                "type": "Identifier",
                "start": 149,
                "end": 154,
                "name": "Props",
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 250,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 264,
        "name": "good1",
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
          "start": 287,
          "end": 347,
          "name": "attrs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 292,
            "end": 347,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 294,
              "end": 347,
              "checkType": {
                "type": "TSStringKeyword",
                "start": 294,
                "end": 300
              },
              "extendsType": {
                "type": "TSTypeOperator",
                "start": 309,
                "end": 316,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 315,
                  "end": 316,
                  "typeName": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 316,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 319,
                "end": 320,
                "typeName": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 320,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSMappedType",
                "start": 323,
                "end": 347,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 326,
                  "end": 338,
                  "name": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 331,
                    "end": 338,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 337,
                      "end": 338,
                      "typeName": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
                        "name": "P",
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
                  "type": "TSIndexedAccessType",
                  "start": 341,
                  "end": 345,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 341,
                    "end": 342,
                    "typeName": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 342,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 343,
                    "end": 344,
                    "typeName": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 344,
                      "name": "K",
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
                  "start": 331,
                  "end": 338,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 337,
                    "end": 338,
                    "typeName": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 338,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "start": 349,
        "end": 352,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 264,
        "end": 281,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 265,
            "end": 280,
            "name": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 275,
              "end": 280,
              "typeName": {
                "type": "Identifier",
                "start": 275,
                "end": 280,
                "name": "Props",
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 353,
      "end": 426,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 367,
        "name": "good2",
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
          "start": 390,
          "end": 421,
          "name": "attrs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 395,
            "end": 421,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 397,
              "end": 421,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 400,
                "end": 412,
                "name": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 401,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 405,
                  "end": 412,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 411,
                    "end": 412,
                    "typeName": {
                      "type": "Identifier",
                      "start": 411,
                      "end": 412,
                      "name": "P",
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
                "type": "TSIndexedAccessType",
                "start": 415,
                "end": 419,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 415,
                  "end": 416,
                  "typeName": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 417,
                  "end": 418,
                  "typeName": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "name": "K",
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
                "start": 405,
                "end": 412,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 411,
                  "end": 412,
                  "typeName": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 412,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 400,
                "end": 401,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 423,
        "end": 426,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 367,
        "end": 384,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 368,
            "end": 383,
            "name": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 378,
              "end": 383,
              "typeName": {
                "type": "Identifier",
                "start": 378,
                "end": 383,
                "name": "Props",
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
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 428,
      "end": 458,
      "expression": {
        "type": "CallExpression",
        "start": 428,
        "end": 457,
        "callee": {
          "type": "Identifier",
          "start": 428,
          "end": 431,
          "name": "bad",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 432,
            "end": 456,
            "properties": [
              {
                "type": "Property",
                "start": 434,
                "end": 454,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 438,
                  "name": "when",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 440,
                  "end": 454,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 440,
                      "end": 445,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 449,
                    "end": 454,
                    "value": false,
                    "raw": "false"
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 459,
      "end": 491,
      "expression": {
        "type": "CallExpression",
        "start": 459,
        "end": 490,
        "callee": {
          "type": "Identifier",
          "start": 459,
          "end": 464,
          "name": "good1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 465,
            "end": 489,
            "properties": [
              {
                "type": "Property",
                "start": 467,
                "end": 487,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 471,
                  "name": "when",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 473,
                  "end": 487,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 473,
                      "end": 478,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 482,
                    "end": 487,
                    "value": false,
                    "raw": "false"
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 492,
      "end": 524,
      "expression": {
        "type": "CallExpression",
        "start": 492,
        "end": 523,
        "callee": {
          "type": "Identifier",
          "start": 492,
          "end": 497,
          "name": "good2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 498,
            "end": 522,
            "properties": [
              {
                "type": "Property",
                "start": 500,
                "end": 520,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 504,
                  "name": "when",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 506,
                  "end": 520,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 506,
                      "end": 511,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 515,
                    "end": 520,
                    "value": false,
                    "raw": "false"
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
