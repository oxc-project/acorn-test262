__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2073,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 19,
        "end": 43,
        "key": {
          "type": "Identifier",
          "start": 22,
          "end": 23,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 27,
          "end": 34,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 33,
            "end": 34,
            "typeName": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 37,
          "end": 41,
          "objectType": {
            "type": "TSTypeReference",
            "start": 37,
            "end": 38,
            "typeName": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 39,
            "end": 40,
            "typeName": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 46,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 53,
        "decorators": [],
        "name": "M0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 56,
        "end": 70,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 63,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 62,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 61,
                "end": 62,
                "literal": {
                  "type": "Literal",
                  "start": 61,
                  "end": 62,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 68,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 68,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 67,
                "end": 68,
                "literal": {
                  "type": "Literal",
                  "start": 67,
                  "end": 68,
                  "value": 2,
                  "raw": "2"
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
      "start": 73,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 80,
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 83,
        "end": 118,
        "key": {
          "type": "Identifier",
          "start": 86,
          "end": 87,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 91,
          "end": 108,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 97,
            "end": 108,
            "typeName": {
              "type": "Identifier",
              "start": 97,
              "end": 104,
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 104,
              "end": 108,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 105,
                  "end": 107,
                  "typeName": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 107,
                    "decorators": [],
                    "name": "M0",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 111,
          "end": 116,
          "objectType": {
            "type": "TSTypeReference",
            "start": 111,
            "end": 113,
            "typeName": {
              "type": "Identifier",
              "start": 111,
              "end": 113,
              "decorators": [],
              "name": "M0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 114,
            "end": 115,
            "typeName": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 121,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 128,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 131,
        "end": 167,
        "key": {
          "type": "Identifier",
          "start": 134,
          "end": 135,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 139,
          "end": 157,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 145,
            "end": 157,
            "typeName": {
              "type": "Identifier",
              "start": 145,
              "end": 153,
              "decorators": [],
              "name": "Required",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 153,
              "end": 157,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 154,
                  "end": 156,
                  "typeName": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 156,
                    "decorators": [],
                    "name": "M1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 160,
          "end": 165,
          "objectType": {
            "type": "TSTypeReference",
            "start": 160,
            "end": 162,
            "typeName": {
              "type": "Identifier",
              "start": 160,
              "end": 162,
              "decorators": [],
              "name": "M1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 163,
            "end": 164,
            "typeName": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 170,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 177,
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 180,
        "end": 225,
        "key": {
          "type": "Identifier",
          "start": 183,
          "end": 184,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 188,
          "end": 215,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 194,
            "end": 215,
            "typeName": {
              "type": "Identifier",
              "start": 194,
              "end": 202,
              "decorators": [],
              "name": "Identity",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 202,
              "end": 215,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 203,
                  "end": 214,
                  "typeName": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 210,
                    "decorators": [],
                    "name": "Partial",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 210,
                    "end": 214,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 211,
                        "end": 213,
                        "typeName": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 213,
                          "decorators": [],
                          "name": "M0",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 218,
          "end": 223,
          "objectType": {
            "type": "TSTypeReference",
            "start": 218,
            "end": 220,
            "typeName": {
              "type": "Identifier",
              "start": 218,
              "end": 220,
              "decorators": [],
              "name": "M0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 221,
            "end": 222,
            "typeName": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 228,
      "end": 444,
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 240,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 240,
        "end": 260,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 241,
            "end": 259,
            "name": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 251,
              "end": 259,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 259,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 259,
                  "decorators": [],
                  "name": "M0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          "start": 261,
          "end": 270,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 263,
            "end": 270,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 265,
              "end": 270,
              "objectType": {
                "type": "TSTypeReference",
                "start": 265,
                "end": 267,
                "typeName": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 267,
                  "decorators": [],
                  "name": "M1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 269,
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 269,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 272,
          "end": 281,
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 274,
            "end": 281,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 276,
              "end": 281,
              "objectType": {
                "type": "TSTypeReference",
                "start": 276,
                "end": 278,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 278,
                  "decorators": [],
                  "name": "M2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 279,
                "end": 280,
                "typeName": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 280,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 283,
          "end": 292,
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 285,
            "end": 292,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 287,
              "end": 292,
              "objectType": {
                "type": "TSTypeReference",
                "start": 287,
                "end": 289,
                "typeName": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 289,
                  "decorators": [],
                  "name": "M3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 290,
                "end": 291,
                "typeName": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 294,
        "end": 444,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 300,
            "end": 314,
            "expression": {
              "type": "CallExpression",
              "start": 300,
              "end": 313,
              "callee": {
                "type": "MemberExpression",
                "start": 300,
                "end": 311,
                "object": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 302,
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 311,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 329,
            "end": 344,
            "expression": {
              "type": "ChainExpression",
              "start": 329,
              "end": 343,
              "expression": {
                "type": "CallExpression",
                "start": 329,
                "end": 343,
                "callee": {
                  "type": "MemberExpression",
                  "start": 329,
                  "end": 341,
                  "object": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 331,
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 341,
                    "decorators": [],
                    "name": "toString",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 349,
            "end": 363,
            "expression": {
              "type": "CallExpression",
              "start": 349,
              "end": 362,
              "callee": {
                "type": "MemberExpression",
                "start": 349,
                "end": 360,
                "object": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 351,
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 360,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 378,
            "end": 393,
            "expression": {
              "type": "ChainExpression",
              "start": 378,
              "end": 392,
              "expression": {
                "type": "CallExpression",
                "start": 378,
                "end": 392,
                "callee": {
                  "type": "MemberExpression",
                  "start": 378,
                  "end": 390,
                  "object": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 380,
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 382,
                    "end": 390,
                    "decorators": [],
                    "name": "toString",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 398,
            "end": 412,
            "expression": {
              "type": "CallExpression",
              "start": 398,
              "end": 411,
              "callee": {
                "type": "MemberExpression",
                "start": 398,
                "end": 409,
                "object": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 400,
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 409,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 427,
            "end": 442,
            "expression": {
              "type": "ChainExpression",
              "start": 427,
              "end": 441,
              "expression": {
                "type": "CallExpression",
                "start": 427,
                "end": 441,
                "callee": {
                  "type": "MemberExpression",
                  "start": 427,
                  "end": 439,
                  "object": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 429,
                    "decorators": [],
                    "name": "m3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 431,
                    "end": 439,
                    "decorators": [],
                    "name": "toString",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 468,
      "end": 502,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 476,
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 479,
        "end": 501,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 485,
            "end": 490,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 486,
              "end": 489,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 488,
                "end": 489,
                "literal": {
                  "type": "Literal",
                  "start": 488,
                  "end": 489,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 495,
            "end": 499,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 496,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 499,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 498,
                "end": 499,
                "literal": {
                  "type": "Literal",
                  "start": 498,
                  "end": 499,
                  "value": 2,
                  "raw": "2"
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
      "type": "VariableDeclaration",
      "start": 504,
      "end": 561,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 560,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 555,
            "decorators": [],
            "name": "mapped",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 516,
              "end": 555,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 518,
                "end": 555,
                "key": {
                  "type": "Identifier",
                  "start": 521,
                  "end": 522,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 526,
                  "end": 544,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 532,
                    "end": 544,
                    "typeName": {
                      "type": "Identifier",
                      "start": 532,
                      "end": 539,
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 539,
                      "end": 544,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 540,
                          "end": 543,
                          "typeName": {
                            "type": "Identifier",
                            "start": 540,
                            "end": 543,
                            "decorators": [],
                            "name": "Obj",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 547,
                  "end": 553,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 547,
                    "end": 550,
                    "typeName": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 550,
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 551,
                    "end": 552,
                    "typeName": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 552,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "optional": false,
                "readonly": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 558,
            "end": 560,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 563,
      "end": 651,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 650,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 582,
            "decorators": [],
            "name": "resolveMapped",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 585,
            "end": 650,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 585,
              "end": 616,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 586,
                  "end": 615,
                  "name": {
                    "type": "Identifier",
                    "start": 586,
                    "end": 587,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 596,
                    "end": 615,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 602,
                      "end": 615,
                      "exprName": {
                        "type": "Identifier",
                        "start": 609,
                        "end": 615,
                        "decorators": [],
                        "name": "mapped",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                "start": 617,
                "end": 623,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 620,
                  "end": 623,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 622,
                    "end": 623,
                    "typeName": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 623,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 628,
              "end": 650,
              "callee": {
                "type": "MemberExpression",
                "start": 628,
                "end": 648,
                "object": {
                  "type": "MemberExpression",
                  "start": 628,
                  "end": 639,
                  "object": {
                    "type": "Identifier",
                    "start": 628,
                    "end": 634,
                    "decorators": [],
                    "name": "mapped",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 635,
                    "end": 638,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 648,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
      "start": 696,
      "end": 735,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 702,
          "end": 734,
          "id": {
            "type": "Identifier",
            "start": 702,
            "end": 705,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 708,
            "end": 734,
            "expression": {
              "type": "ArrayExpression",
              "start": 708,
              "end": 725,
              "elements": [
                {
                  "type": "Literal",
                  "start": 709,
                  "end": 714,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                {
                  "type": "Literal",
                  "start": 716,
                  "end": 720,
                  "value": "12",
                  "raw": "\"12\""
                },
                {
                  "type": "Literal",
                  "start": 722,
                  "end": 724,
                  "value": 42,
                  "raw": "42"
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 729,
              "end": 734,
              "typeName": {
                "type": "Identifier",
                "start": 729,
                "end": 734,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 737,
      "end": 796,
      "id": {
        "type": "Identifier",
        "start": 742,
        "end": 750,
        "decorators": [],
        "name": "Mappings",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 753,
        "end": 795,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 755,
            "end": 768,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 755,
              "end": 758,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 758,
              "end": 767,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 760,
                "end": 767
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 769,
            "end": 782,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 769,
              "end": 773,
              "value": "12",
              "raw": "\"12\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 773,
              "end": 781,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 775,
                "end": 781
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 783,
            "end": 793,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 783,
              "end": 785,
              "value": 42,
              "raw": "42"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 785,
              "end": 793,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 787,
                "end": 793
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
      "start": 798,
      "end": 876,
      "id": {
        "type": "Identifier",
        "start": 803,
        "end": 813,
        "decorators": [],
        "name": "MapperArgs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 813,
        "end": 845,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 814,
            "end": 844,
            "name": {
              "type": "Identifier",
              "start": 814,
              "end": 815,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSIndexedAccessType",
              "start": 824,
              "end": 844,
              "objectType": {
                "type": "TSTypeQuery",
                "start": 825,
                "end": 835,
                "exprName": {
                  "type": "Identifier",
                  "start": 832,
                  "end": 835,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSNumberKeyword",
                "start": 837,
                "end": 843
              }
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
        "start": 848,
        "end": 875,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 854,
            "end": 859,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 854,
              "end": 855,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 855,
              "end": 858,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 857,
                "end": 858,
                "typeName": {
                  "type": "Identifier",
                  "start": 857,
                  "end": 858,
                  "decorators": [],
                  "name": "K",
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
            "start": 864,
            "end": 873,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 864,
              "end": 865,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 865,
              "end": 873,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 867,
                "end": 873
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
      "start": 878,
      "end": 952,
      "id": {
        "type": "Identifier",
        "start": 883,
        "end": 894,
        "decorators": [],
        "name": "SetOptional",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 894,
        "end": 916,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 895,
            "end": 896,
            "name": {
              "type": "Identifier",
              "start": 895,
              "end": 896,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 898,
            "end": 915,
            "name": {
              "type": "Identifier",
              "start": 898,
              "end": 899,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 908,
              "end": 915,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 914,
                "end": 915,
                "typeName": {
                  "type": "Identifier",
                  "start": 914,
                  "end": 915,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 919,
        "end": 951,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 919,
            "end": 929,
            "typeName": {
              "type": "Identifier",
              "start": 919,
              "end": 923,
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 923,
              "end": 929,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 924,
                  "end": 925,
                  "typeName": {
                    "type": "Identifier",
                    "start": 924,
                    "end": 925,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 927,
                  "end": 928,
                  "typeName": {
                    "type": "Identifier",
                    "start": 927,
                    "end": 928,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 932,
            "end": 951,
            "typeName": {
              "type": "Identifier",
              "start": 932,
              "end": 939,
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 939,
              "end": 951,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 940,
                  "end": 950,
                  "typeName": {
                    "type": "Identifier",
                    "start": 940,
                    "end": 944,
                    "decorators": [],
                    "name": "Pick",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 944,
                    "end": 950,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 945,
                        "end": 946,
                        "typeName": {
                          "type": "Identifier",
                          "start": 945,
                          "end": 946,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 948,
                        "end": 949,
                        "typeName": {
                          "type": "Identifier",
                          "start": 948,
                          "end": 949,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 954,
      "end": 1003,
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 971,
        "decorators": [],
        "name": "PartMappings",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 974,
        "end": 1002,
        "typeName": {
          "type": "Identifier",
          "start": 974,
          "end": 985,
          "decorators": [],
          "name": "SetOptional",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 985,
          "end": 1002,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 986,
              "end": 994,
              "typeName": {
                "type": "Identifier",
                "start": 986,
                "end": 994,
                "decorators": [],
                "name": "Mappings",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSLiteralType",
              "start": 996,
              "end": 1001,
              "literal": {
                "type": "Literal",
                "start": 996,
                "end": 1001,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1005,
      "end": 1207,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1011,
          "end": 1207,
          "id": {
            "type": "Identifier",
            "start": 1011,
            "end": 1087,
            "decorators": [],
            "name": "mapper",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1017,
              "end": 1087,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 1019,
                "end": 1087,
                "key": {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1023,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 1027,
                  "end": 1045,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1033,
                    "end": 1045,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1033,
                      "end": 1045,
                      "decorators": [],
                      "name": "PartMappings",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 1048,
                  "end": 1085,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1049,
                      "end": 1065,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1050,
                        "end": 1065,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1052,
                          "end": 1065,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1052,
                            "end": 1062,
                            "decorators": [],
                            "name": "MapperArgs",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1062,
                            "end": 1065,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1063,
                                "end": 1064,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1063,
                                  "end": 1064,
                                  "decorators": [],
                                  "name": "K",
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
                    "start": 1067,
                    "end": 1085,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 1070,
                      "end": 1085,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 1070,
                        "end": 1082,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1070,
                          "end": 1082,
                          "decorators": [],
                          "name": "PartMappings",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 1083,
                        "end": 1084,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1083,
                          "end": 1084,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "optional": false,
                "readonly": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1090,
            "end": 1207,
            "properties": [
              {
                "type": "Property",
                "start": 1096,
                "end": 1131,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1096,
                  "end": 1099,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1101,
                  "end": 1131,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 1102,
                      "end": 1110,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1104,
                          "end": 1105,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1104,
                            "end": 1105,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1104,
                            "end": 1105,
                            "decorators": [],
                            "name": "v",
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
                          "start": 1107,
                          "end": 1108,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1107,
                            "end": 1108,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1107,
                            "end": 1108,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 1115,
                    "end": 1131,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 1115,
                      "end": 1127,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1115,
                        "end": 1123,
                        "object": {
                          "type": "Identifier",
                          "start": 1115,
                          "end": 1116,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1117,
                          "end": 1123,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1126,
                        "end": 1127,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "start": 1130,
                      "end": 1131,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1137,
                "end": 1170,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 1137,
                  "end": 1141,
                  "value": "12",
                  "raw": "\"12\""
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1143,
                  "end": 1170,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 1144,
                      "end": 1152,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1146,
                          "end": 1147,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1146,
                            "end": 1147,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1146,
                            "end": 1147,
                            "decorators": [],
                            "name": "v",
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
                          "start": 1149,
                          "end": 1150,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1149,
                            "end": 1150,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1149,
                            "end": 1150,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 1157,
                    "end": 1170,
                    "left": {
                      "type": "CallExpression",
                      "start": 1157,
                      "end": 1166,
                      "callee": {
                        "type": "Identifier",
                        "start": 1157,
                        "end": 1163,
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1164,
                          "end": 1165,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 1169,
                      "end": 1170,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1176,
                "end": 1204,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 1176,
                  "end": 1178,
                  "value": 42,
                  "raw": "42"
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1180,
                  "end": 1204,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 1181,
                      "end": 1189,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1183,
                          "end": 1184,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1183,
                            "end": 1184,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1183,
                            "end": 1184,
                            "decorators": [],
                            "name": "v",
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
                          "start": 1186,
                          "end": 1187,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1186,
                            "end": 1187,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1186,
                            "end": 1187,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TemplateLiteral",
                    "start": 1194,
                    "end": 1204,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 1194,
                        "end": 1197,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1198,
                        "end": 1201,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1202,
                        "end": 1204,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 1197,
                        "end": 1198,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1201,
                        "end": 1202,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1209,
      "end": 1313,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1215,
          "end": 1312,
          "id": {
            "type": "Identifier",
            "start": 1215,
            "end": 1229,
            "decorators": [],
            "name": "resolveMapper1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1232,
            "end": 1312,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1232,
              "end": 1263,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1233,
                  "end": 1262,
                  "name": {
                    "type": "Identifier",
                    "start": 1233,
                    "end": 1234,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 1243,
                    "end": 1262,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1249,
                      "end": 1262,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1256,
                        "end": 1262,
                        "decorators": [],
                        "name": "mapper",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                "start": 1269,
                "end": 1275,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1272,
                  "end": 1275,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1274,
                    "end": 1275,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1274,
                      "end": 1275,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1277,
                "end": 1293,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1278,
                  "end": 1293,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1280,
                    "end": 1293,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1280,
                      "end": 1290,
                      "decorators": [],
                      "name": "MapperArgs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1290,
                      "end": 1293,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1291,
                          "end": 1292,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1291,
                            "end": 1292,
                            "decorators": [],
                            "name": "K",
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
              "type": "CallExpression",
              "start": 1298,
              "end": 1312,
              "callee": {
                "type": "MemberExpression",
                "start": 1298,
                "end": 1309,
                "object": {
                  "type": "Identifier",
                  "start": 1298,
                  "end": 1304,
                  "decorators": [],
                  "name": "mapper",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1305,
                  "end": 1308,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1310,
                  "end": 1311,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
      "start": 1325,
      "end": 1430,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1331,
          "end": 1430,
          "id": {
            "type": "Identifier",
            "start": 1331,
            "end": 1345,
            "decorators": [],
            "name": "resolveMapper2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1348,
            "end": 1430,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1348,
              "end": 1379,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1349,
                  "end": 1378,
                  "name": {
                    "type": "Identifier",
                    "start": 1349,
                    "end": 1350,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 1359,
                    "end": 1378,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1365,
                      "end": 1378,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1372,
                        "end": 1378,
                        "decorators": [],
                        "name": "mapper",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                "start": 1385,
                "end": 1391,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1388,
                  "end": 1391,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1390,
                    "end": 1391,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1390,
                      "end": 1391,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1393,
                "end": 1409,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1394,
                  "end": 1409,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1396,
                    "end": 1409,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1396,
                      "end": 1406,
                      "decorators": [],
                      "name": "MapperArgs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1406,
                      "end": 1409,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1407,
                          "end": 1408,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1407,
                            "end": 1408,
                            "decorators": [],
                            "name": "K",
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
              "type": "ChainExpression",
              "start": 1414,
              "end": 1430,
              "expression": {
                "type": "CallExpression",
                "start": 1414,
                "end": 1430,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1414,
                  "end": 1425,
                  "object": {
                    "type": "Identifier",
                    "start": 1414,
                    "end": 1420,
                    "decorators": [],
                    "name": "mapper",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1421,
                    "end": 1424,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1428,
                    "end": 1429,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": true
              }
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
      "type": "TSTypeAliasDeclaration",
      "start": 1454,
      "end": 1500,
      "id": {
        "type": "Identifier",
        "start": 1459,
        "end": 1463,
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1466,
        "end": 1499,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1472,
            "end": 1482,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1472,
              "end": 1473,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1473,
              "end": 1481,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1475,
                "end": 1481
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1487,
            "end": 1497,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1487,
              "end": 1488,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1488,
              "end": 1496,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1490,
                "end": 1496
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
      "start": 1502,
      "end": 1549,
      "id": {
        "type": "Identifier",
        "start": 1507,
        "end": 1511,
        "decorators": [],
        "name": "Obj2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1514,
        "end": 1548,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1520,
            "end": 1530,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1520,
              "end": 1521,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1521,
              "end": 1529,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1523,
                "end": 1529
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1535,
            "end": 1546,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1535,
              "end": 1536,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1536,
              "end": 1545,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1538,
                "end": 1545
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
      "type": "VariableDeclaration",
      "start": 1551,
      "end": 1645,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1565,
          "end": 1644,
          "id": {
            "type": "Identifier",
            "start": 1565,
            "end": 1644,
            "decorators": [],
            "name": "mapIntersection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1580,
              "end": 1644,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 1582,
                "end": 1644,
                "key": {
                  "type": "Identifier",
                  "start": 1589,
                  "end": 1590,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 1594,
                  "end": 1632,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 1601,
                    "end": 1631,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1601,
                        "end": 1614,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1601,
                          "end": 1608,
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1608,
                          "end": 1614,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1609,
                              "end": 1613,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1609,
                                "end": 1613,
                                "decorators": [],
                                "name": "Obj1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1617,
                        "end": 1631,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1617,
                          "end": 1625,
                          "decorators": [],
                          "name": "Required",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1625,
                          "end": 1631,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1626,
                              "end": 1630,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1626,
                                "end": 1630,
                                "decorators": [],
                                "name": "Obj2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1635,
                  "end": 1641
                },
                "optional": false,
                "readonly": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1647,
      "end": 1734,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1653,
          "end": 1733,
          "id": {
            "type": "Identifier",
            "start": 1653,
            "end": 1665,
            "decorators": [],
            "name": "accessMapped",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1668,
            "end": 1733,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1668,
              "end": 1690,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1669,
                  "end": 1689,
                  "name": {
                    "type": "Identifier",
                    "start": 1669,
                    "end": 1670,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 1679,
                    "end": 1689,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1685,
                      "end": 1689,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1685,
                        "end": 1689,
                        "decorators": [],
                        "name": "Obj2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                "start": 1691,
                "end": 1697,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1694,
                  "end": 1697,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1696,
                    "end": 1697,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1696,
                      "end": 1697,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 1702,
              "end": 1733,
              "callee": {
                "type": "MemberExpression",
                "start": 1702,
                "end": 1731,
                "object": {
                  "type": "MemberExpression",
                  "start": 1702,
                  "end": 1722,
                  "object": {
                    "type": "Identifier",
                    "start": 1702,
                    "end": 1717,
                    "decorators": [],
                    "name": "mapIntersection",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1718,
                    "end": 1721,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 1723,
                  "end": 1731,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
      "start": 1736,
      "end": 1809,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1750,
          "end": 1808,
          "id": {
            "type": "Identifier",
            "start": 1750,
            "end": 1808,
            "decorators": [],
            "name": "resolved",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1758,
              "end": 1808,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1760,
                "end": 1808,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1762,
                    "end": 1785,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1762,
                      "end": 1763,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1764,
                      "end": 1784,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1766,
                        "end": 1784,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1766,
                            "end": 1772
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1775,
                            "end": 1784
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1786,
                    "end": 1796,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1786,
                      "end": 1787,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1787,
                      "end": 1795,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1789,
                        "end": 1795
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1797,
                    "end": 1806,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1797,
                      "end": 1798,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1798,
                      "end": 1806,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1800,
                        "end": 1806
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1811,
      "end": 1893,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1817,
          "end": 1892,
          "id": {
            "type": "Identifier",
            "start": 1817,
            "end": 1831,
            "decorators": [],
            "name": "accessResolved",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1834,
            "end": 1892,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1834,
              "end": 1856,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1835,
                  "end": 1855,
                  "name": {
                    "type": "Identifier",
                    "start": 1835,
                    "end": 1836,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 1845,
                    "end": 1855,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1851,
                      "end": 1855,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1851,
                        "end": 1855,
                        "decorators": [],
                        "name": "Obj2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                "start": 1857,
                "end": 1863,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1860,
                  "end": 1863,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1862,
                    "end": 1863,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1862,
                      "end": 1863,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 1868,
              "end": 1892,
              "callee": {
                "type": "MemberExpression",
                "start": 1868,
                "end": 1890,
                "object": {
                  "type": "MemberExpression",
                  "start": 1868,
                  "end": 1881,
                  "object": {
                    "type": "Identifier",
                    "start": 1868,
                    "end": 1876,
                    "decorators": [],
                    "name": "resolved",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1877,
                    "end": 1880,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 1882,
                  "end": 1890,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
      "type": "TSTypeAliasDeclaration",
      "start": 1928,
      "end": 1960,
      "id": {
        "type": "Identifier",
        "start": 1933,
        "end": 1936,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1939,
        "end": 1960,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1945,
            "end": 1958,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1945,
              "end": 1949,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1949,
              "end": 1957,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1951,
                "end": 1957
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
      "start": 1962,
      "end": 2073,
      "id": {
        "type": "Identifier",
        "start": 1971,
        "end": 1975,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1975,
        "end": 1996,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1976,
            "end": 1995,
            "name": {
              "type": "Identifier",
              "start": 1976,
              "end": 1977,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1986,
              "end": 1995,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1992,
                "end": 1995,
                "typeName": {
                  "type": "Identifier",
                  "start": 1992,
                  "end": 1995,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          "start": 1997,
          "end": 2039,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2000,
            "end": 2039,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2002,
              "end": 2039,
              "typeName": {
                "type": "Identifier",
                "start": 2002,
                "end": 2006,
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2006,
                "end": 2039,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 2007,
                    "end": 2035,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 2007,
                        "end": 2020,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2007,
                          "end": 2015,
                          "decorators": [],
                          "name": "Required",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2015,
                          "end": 2020,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2016,
                              "end": 2019,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2016,
                                "end": 2019,
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2023,
                        "end": 2035,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2023,
                          "end": 2030,
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2030,
                          "end": 2035,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2031,
                              "end": 2034,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2031,
                                "end": 2034,
                                "decorators": [],
                                "name": "Foo",
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
                  {
                    "type": "TSTypeReference",
                    "start": 2037,
                    "end": 2038,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2037,
                      "end": 2038,
                      "decorators": [],
                      "name": "K",
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
          "start": 2041,
          "end": 2047,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2044,
            "end": 2047,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2046,
              "end": 2047,
              "typeName": {
                "type": "Identifier",
                "start": 2046,
                "end": 2047,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2049,
        "end": 2073,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2055,
            "end": 2071,
            "expression": {
              "type": "MemberExpression",
              "start": 2055,
              "end": 2070,
              "object": {
                "type": "MemberExpression",
                "start": 2055,
                "end": 2063,
                "object": {
                  "type": "Identifier",
                  "start": 2055,
                  "end": 2058,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2059,
                  "end": 2062,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 2064,
                "end": 2070,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
