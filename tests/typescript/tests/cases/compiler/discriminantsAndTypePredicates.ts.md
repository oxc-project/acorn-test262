__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 560,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 34,
        "end": 47,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 40,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 45,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 42,
                "end": 45,
                "literal": {
                  "type": "Literal",
                  "start": 42,
                  "end": 45,
                  "value": "A",
                  "raw": "'A'"
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
      "type": "TSInterfaceDeclaration",
      "start": 48,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 60,
        "end": 73,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 62,
            "end": 71,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 66,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 71,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 68,
                "end": 71,
                "literal": {
                  "type": "Literal",
                  "start": 68,
                  "end": 71,
                  "value": "B",
                  "raw": "'B'"
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
      "start": 75,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "decorators": [],
        "name": "isA",
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
          "start": 88,
          "end": 96,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 96,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 91,
              "end": 96,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 91,
                  "end": 92,
                  "typeName": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 95,
                  "end": 96,
                  "typeName": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 97,
        "end": 105,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 99,
          "end": 105,
          "parameterName": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 104,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 106,
        "end": 132,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 108,
            "end": 130,
            "argument": {
              "type": "BinaryExpression",
              "start": 115,
              "end": 129,
              "left": {
                "type": "MemberExpression",
                "start": 115,
                "end": 121,
                "object": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 121,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 126,
                "end": 129,
                "value": "A",
                "raw": "'A'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 133,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 145,
        "decorators": [],
        "name": "isB",
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
          "start": 146,
          "end": 154,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 147,
            "end": 154,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 149,
              "end": 154,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 149,
                  "end": 150,
                  "typeName": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 153,
                  "end": 154,
                  "typeName": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 155,
        "end": 163,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 157,
          "end": 163,
          "parameterName": {
            "type": "Identifier",
            "start": 157,
            "end": 158,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 163,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 162,
              "end": 163,
              "typeName": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 164,
        "end": 190,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 166,
            "end": 188,
            "argument": {
              "type": "BinaryExpression",
              "start": 173,
              "end": 187,
              "left": {
                "type": "MemberExpression",
                "start": 173,
                "end": 179,
                "object": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 174,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 179,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 184,
                "end": 187,
                "value": "B",
                "raw": "'B'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 192,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 205,
        "decorators": [],
        "name": "foo1",
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
          "start": 206,
          "end": 214,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 207,
            "end": 214,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 209,
              "end": 214,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 209,
                  "end": 210,
                  "typeName": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 210,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 213,
                  "end": 214,
                  "typeName": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 214,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 215,
        "end": 220,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 217,
          "end": 220
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 221,
        "end": 367,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 227,
            "end": 229,
            "expression": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 244,
            "end": 287,
            "test": {
              "type": "CallExpression",
              "start": 248,
              "end": 254,
              "callee": {
                "type": "Identifier",
                "start": 248,
                "end": 251,
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 252,
                  "end": 253,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 256,
              "end": 287,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 266,
                  "end": 275,
                  "argument": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 292,
            "end": 294,
            "expression": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 305,
            "end": 348,
            "test": {
              "type": "CallExpression",
              "start": 309,
              "end": 315,
              "callee": {
                "type": "Identifier",
                "start": 309,
                "end": 312,
                "decorators": [],
                "name": "isB",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 317,
              "end": 348,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 327,
                  "end": 336,
                  "argument": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 335,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 353,
            "end": 355,
            "expression": {
              "type": "Identifier",
              "start": 353,
              "end": 354,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 369,
      "end": 560,
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 382,
        "decorators": [],
        "name": "foo2",
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
          "start": 383,
          "end": 391,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 384,
            "end": 391,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 386,
              "end": 391,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 386,
                  "end": 387,
                  "typeName": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 387,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 390,
                  "end": 391,
                  "typeName": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 391,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 392,
        "end": 397,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 394,
          "end": 397
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 398,
        "end": 560,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 404,
            "end": 406,
            "expression": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 421,
            "end": 472,
            "test": {
              "type": "BinaryExpression",
              "start": 425,
              "end": 439,
              "left": {
                "type": "MemberExpression",
                "start": 425,
                "end": 431,
                "object": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 426,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 431,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 436,
                "end": 439,
                "value": "A",
                "raw": "'A'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 441,
              "end": 472,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 451,
                  "end": 460,
                  "argument": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 459,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 477,
            "end": 479,
            "expression": {
              "type": "Identifier",
              "start": 477,
              "end": 478,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 490,
            "end": 541,
            "test": {
              "type": "BinaryExpression",
              "start": 494,
              "end": 508,
              "left": {
                "type": "MemberExpression",
                "start": 494,
                "end": 500,
                "object": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 495,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 500,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 505,
                "end": 508,
                "value": "B",
                "raw": "'B'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 510,
              "end": 541,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 520,
                  "end": 529,
                  "argument": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 528,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 546,
            "end": 548,
            "expression": {
              "type": "Identifier",
              "start": 546,
              "end": 547,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
