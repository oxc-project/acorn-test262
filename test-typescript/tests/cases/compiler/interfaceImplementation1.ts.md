__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 548,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 77,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 77,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 23,
              "decorators": [],
              "name": "iObj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 24,
                "end": 27,
                "members": []
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "decorators": [],
              "name": "iNum",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 59,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 54,
              "decorators": [],
              "name": "iAny",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 58,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 55,
                "end": 58
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 64,
            "end": 75,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "decorators": [],
              "name": "iFn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 74,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
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
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 79,
      "end": 126,
      "body": {
        "type": "TSInterfaceBody",
        "start": 92,
        "end": 126,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 95,
            "end": 124,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 98,
              "decorators": [],
              "name": "iFn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 99,
                "end": 107,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 100,
                  "end": 107,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 101,
                    "end": 107
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 109,
                "end": 117,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 110,
                  "end": 117,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 111,
                    "end": 117
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 123,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 119,
                "end": 123
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
        "start": 89,
        "end": 91,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 128,
      "end": 284,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 154,
        "end": 284,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 160,
            "end": 174,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "decorators": [],
              "name": "iFn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 171,
              "end": 174,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 176,
            "end": 213,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 187,
              "decorators": [],
              "name": "iFn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 187,
              "end": 213,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 210,
                "end": 213,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 188,
                  "end": 197,
                  "decorators": [],
                  "name": "n",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 191,
                      "end": 197
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 199,
                  "end": 208,
                  "decorators": [],
                  "name": "s",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 208,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 202,
                      "end": 208
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 218,
            "end": 235,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 230,
              "decorators": [],
              "name": "iAny",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 234,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 231,
                "end": 234
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 240,
            "end": 260,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 252,
              "decorators": [],
              "name": "iNum",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 259,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 253,
                "end": 259
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 265,
            "end": 282,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 277,
              "decorators": [],
              "name": "iObj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 278,
                "end": 281,
                "members": []
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 136,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 148,
          "end": 150,
          "expression": {
            "type": "Identifier",
            "start": 148,
            "end": 150,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSClassImplements",
          "start": 151,
          "end": 153,
          "expression": {
            "type": "Identifier",
            "start": 151,
            "end": 153,
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 286,
      "end": 317,
      "body": {
        "type": "TSInterfaceBody",
        "start": 299,
        "end": 317,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 305,
            "end": 315,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 314,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 308,
                "end": 314
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 298,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 319,
      "end": 387,
      "body": {
        "type": "TSInterfaceBody",
        "start": 332,
        "end": 387,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 338,
            "end": 344,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 343,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 343,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 343,
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 349,
            "end": 359,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 356,
                "end": 358,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 358,
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSIndexSignature",
            "start": 364,
            "end": 385,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 365,
                "end": 376,
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 369,
                  "end": 376,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 370,
                    "end": 376
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 384,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 378,
                "end": 384
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 331,
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 389,
      "end": 433,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 412,
        "end": 433,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 418,
            "end": 431,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 429,
              "end": 430,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 397,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 409,
          "end": 411,
          "expression": {
            "type": "Identifier",
            "start": 409,
            "end": 411,
            "decorators": [],
            "name": "I3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 435,
      "end": 481,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 439,
          "end": 481,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 439,
            "end": 443,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 440,
              "end": 443,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 441,
                "end": 443,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 443,
                  "decorators": [],
                  "name": "I4",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 446,
            "end": 481,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 456,
              "end": 481,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 463,
                  "end": 479,
                  "argument": {
                    "type": "NewExpression",
                    "start": 470,
                    "end": 478,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 474,
                      "end": 476,
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 482,
      "end": 490,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 482,
        "end": 489,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 486,
          "end": 487,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 522,
      "end": 531,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 526,
          "end": 530,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 526,
            "end": 530,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 527,
              "end": 530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 528,
                "end": 530,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 530,
                  "decorators": [],
                  "name": "I4",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 532,
      "end": 537,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 532,
        "end": 536,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 532,
          "end": 533,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 534,
          "end": 535,
          "raw": "5",
          "value": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 538,
      "end": 547,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 538,
        "end": 546,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 538,
          "end": 539,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 540,
          "end": 545,
          "raw": "\"foo\"",
          "value": "foo"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
