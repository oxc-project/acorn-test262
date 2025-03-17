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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 77,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 23,
              "name": "iObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "name": "iNum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 59,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 54,
              "name": "iAny",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 58,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 55,
                "end": 58
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 64,
            "end": 75,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "name": "iFn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 79,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 91,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 92,
        "end": 126,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 95,
            "end": 124,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 98,
              "name": "iFn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 99,
                "end": 107,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 100,
                  "end": 107,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 101,
                    "end": 107
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 109,
                "end": 117,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 110,
                  "end": 117,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 111,
                    "end": 117
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 128,
      "end": 284,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 136,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 154,
        "end": 284,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 160,
            "end": 174,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "name": "iFn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 171,
              "end": 174,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 176,
            "end": 213,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 187,
              "name": "iFn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 187,
              "end": 213,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 188,
                  "end": 197,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 191,
                      "end": 197
                    }
                  },
                  "decorators": [],
                  "optional": true
                },
                {
                  "type": "Identifier",
                  "start": 199,
                  "end": 208,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 208,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 202,
                      "end": 208
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 210,
                "end": 213,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 218,
            "end": 235,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 230,
              "name": "iAny",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 240,
            "end": 260,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 252,
              "name": "iNum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 265,
            "end": 282,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 277,
              "name": "iObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 148,
          "end": 150,
          "expression": {
            "type": "Identifier",
            "start": 148,
            "end": 150,
            "name": "I1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "I2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 286,
      "end": 317,
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 298,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 299,
        "end": 317,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 305,
            "end": 315,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 314,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 308,
                "end": 314
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
      "start": 319,
      "end": 387,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 331,
        "name": "I4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 332,
        "end": 387,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 338,
            "end": 344,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 343,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 343,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 343,
                  "name": "I3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 349,
            "end": 359,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 356,
                "end": 358,
                "typeName": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 358,
                  "name": "I3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 364,
            "end": 385,
            "parameters": [
              {
                "type": "Identifier",
                "start": 365,
                "end": 376,
                "name": "call",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 369,
                  "end": 376,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 370,
                    "end": 376
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 384,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 378,
                "end": 384
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 389,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 397,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 412,
        "end": 433,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 418,
            "end": 431,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 429,
              "end": 430,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 409,
          "end": 411,
          "expression": {
            "type": "Identifier",
            "start": 409,
            "end": 411,
            "name": "I3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 439,
            "end": 443,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 440,
              "end": 443,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 441,
                "end": 443,
                "typeName": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 443,
                  "name": "I4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 446,
            "end": 481,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 474,
                      "end": 476,
                      "name": "C2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 482,
      "end": 490,
      "expression": {
        "type": "NewExpression",
        "start": 482,
        "end": 489,
        "callee": {
          "type": "Identifier",
          "start": 486,
          "end": 487,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 526,
            "end": 530,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 527,
              "end": 530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 528,
                "end": 530,
                "typeName": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 530,
                  "name": "I4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 532,
      "end": 537,
      "expression": {
        "type": "MemberExpression",
        "start": 532,
        "end": 536,
        "object": {
          "type": "Identifier",
          "start": 532,
          "end": 533,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 534,
          "end": 535,
          "value": 5,
          "raw": "5"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 538,
      "end": 547,
      "expression": {
        "type": "MemberExpression",
        "start": 538,
        "end": 546,
        "object": {
          "type": "Identifier",
          "start": 538,
          "end": 539,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 540,
          "end": 545,
          "value": "foo",
          "raw": "\"foo\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
