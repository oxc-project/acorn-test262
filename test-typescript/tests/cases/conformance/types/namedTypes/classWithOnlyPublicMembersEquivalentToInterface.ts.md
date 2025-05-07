__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 400,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 227,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 227,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 54,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 59,
            "end": 103,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 67,
              "end": 103,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 103,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 89,
                    "end": 101,
                    "argument": {
                      "type": "Literal",
                      "start": 96,
                      "end": 100,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 77,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 78,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 80,
                  "end": 86
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 136,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 136,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 136,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 125,
                    "end": 134,
                    "argument": {
                      "type": "Literal",
                      "start": 132,
                      "end": 133,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 141,
            "end": 160,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 153,
              "end": 160,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 160,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 165,
            "end": 185,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 166,
                "end": 175,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 167,
                  "end": 175,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 169,
                    "end": 175
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 184,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 184,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 190,
            "end": 210,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 191,
                "end": 200,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 192,
                  "end": 200,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 194,
                    "end": 200
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 209,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 209,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 225,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 215,
              "end": 216,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 224,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 218,
                "end": 224
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
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 229,
      "end": 365,
      "body": {
        "type": "TSInterfaceBody",
        "start": 241,
        "end": 365,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 247,
            "end": 257,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
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
              "start": 248,
              "end": 256,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 262,
            "end": 283,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 264,
                "end": 273,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 265,
                  "end": 273,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 267,
                    "end": 273
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 282,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 276,
                "end": 282
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 288,
            "end": 298,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 297,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 291,
                "end": 297
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 303,
            "end": 323,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 304,
                "end": 313,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 305,
                  "end": 313,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 307,
                    "end": 313
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 322,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 316,
                "end": 322,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 322,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 328,
            "end": 348,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 329,
                "end": 338,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 330,
                  "end": 338,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 332,
                    "end": 338
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 347,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 347,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 347,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 353,
            "end": 363,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 353,
              "end": 354,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 354,
              "end": 362,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 356,
                "end": 362
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 240,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 367,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 375,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 375,
            "decorators": [],
            "name": "c",
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
                  "name": "C",
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
      "type": "VariableDeclaration",
      "start": 377,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 385,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 385,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 382,
              "end": 385,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 384,
                "end": 385,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 385,
                  "decorators": [],
                  "name": "I",
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
      "start": 387,
      "end": 393,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 387,
        "end": 392,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 387,
          "end": 388,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 391,
          "end": 392,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 394,
      "end": 400,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 394,
        "end": 399,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 394,
          "end": 395,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 398,
          "end": 399,
          "decorators": [],
          "name": "c",
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
