conditionalTypeContextualTypeSimplificationsSuceeds.ts
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
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 93,
              "decorators": [],
              "name": "when",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 121,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 95,
                "end": 121,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 96,
                    "end": 109,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 101,
                      "end": 109,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 103,
                        "end": 109
                      }
                    }
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 82,
        "decorators": [],
        "name": "Props",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 249,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 246,
        "end": 249,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 138,
        "decorators": [],
        "name": "bad",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 161,
          "end": 244,
          "decorators": [],
          "name": "attrs",
          "optional": false,
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
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              },
              "falseType": {
                "type": "TSMappedType",
                "start": 220,
                "end": 244,
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
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 238,
                  "end": 242,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 240,
                    "end": 241,
                    "typeName": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 241,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 238,
                    "end": 239,
                    "typeName": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                }
              },
              "trueType": {
                "type": "TSMappedType",
                "start": 193,
                "end": 217,
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
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 211,
                  "end": 215,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 213,
                    "end": 214,
                    "typeName": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 211,
                    "end": 212,
                    "typeName": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 212,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 138,
        "end": 155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 139,
            "end": 154,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 149,
              "end": 154,
              "typeName": {
                "type": "Identifier",
                "start": 149,
                "end": 154,
                "decorators": [],
                "name": "Props",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 250,
      "end": 352,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 349,
        "end": 352,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 264,
        "decorators": [],
        "name": "good1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 287,
          "end": 347,
          "decorators": [],
          "name": "attrs",
          "optional": false,
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
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              },
              "falseType": {
                "type": "TSMappedType",
                "start": 323,
                "end": 347,
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
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 341,
                  "end": 345,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 343,
                    "end": 344,
                    "typeName": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 344,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 341,
                    "end": 342,
                    "typeName": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 342,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
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
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 264,
        "end": 281,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 265,
            "end": 280,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 275,
              "end": 280,
              "typeName": {
                "type": "Identifier",
                "start": 275,
                "end": 280,
                "decorators": [],
                "name": "Props",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 353,
      "end": 426,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 423,
        "end": 426,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 367,
        "decorators": [],
        "name": "good2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 390,
          "end": 421,
          "decorators": [],
          "name": "attrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 395,
            "end": 421,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 397,
              "end": 421,
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
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 400,
                "end": 401,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 415,
                "end": 419,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 417,
                  "end": 418,
                  "typeName": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 415,
                  "end": 416,
                  "typeName": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 367,
        "end": 384,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 368,
            "end": 383,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 378,
              "end": 383,
              "typeName": {
                "type": "Identifier",
                "start": 378,
                "end": 383,
                "decorators": [],
                "name": "Props",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 428,
      "end": 458,
      "expression": {
        "type": "CallExpression",
        "start": 428,
        "end": 457,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 438,
                  "decorators": [],
                  "name": "when",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 440,
                  "end": 454,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 449,
                    "end": 454,
                    "raw": "false",
                    "value": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 440,
                      "end": 445,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 428,
          "end": 431,
          "decorators": [],
          "name": "bad",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 459,
      "end": 491,
      "expression": {
        "type": "CallExpression",
        "start": 459,
        "end": 490,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 471,
                  "decorators": [],
                  "name": "when",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 473,
                  "end": 487,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 482,
                    "end": 487,
                    "raw": "false",
                    "value": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 473,
                      "end": 478,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 459,
          "end": 464,
          "decorators": [],
          "name": "good1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 492,
      "end": 524,
      "expression": {
        "type": "CallExpression",
        "start": 492,
        "end": 523,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 504,
                  "decorators": [],
                  "name": "when",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 506,
                  "end": 520,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 515,
                    "end": 520,
                    "raw": "false",
                    "value": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 506,
                      "end": 511,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 492,
          "end": 497,
          "decorators": [],
          "name": "good2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
