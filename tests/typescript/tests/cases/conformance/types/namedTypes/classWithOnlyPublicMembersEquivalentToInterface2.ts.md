__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 462,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 289,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 289,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 54,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 59,
            "end": 103,
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
            "value": {
              "type": "FunctionExpression",
              "start": 67,
              "end": 103,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 136,
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
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 136,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 141,
            "end": 160,
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
            "value": {
              "type": "FunctionExpression",
              "start": 153,
              "end": 160,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 160,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "TSIndexSignature",
            "start": 165,
            "end": 185,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 184,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 184,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 190,
            "end": 210,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 209,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 209,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 225,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 215,
              "end": 216,
              "value": 0,
              "raw": "0"
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 231,
            "end": 257,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 248,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 256,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 291,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 302,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 303,
        "end": 427,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 309,
            "end": 319,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 318,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 312,
                "end": 318
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 324,
            "end": 345,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 326,
                "end": 335,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 327,
                  "end": 335,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 329,
                    "end": 335
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 336,
              "end": 344,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 338,
                "end": 344
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 350,
            "end": 360,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 351,
              "end": 359,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 353,
                "end": 359
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 365,
            "end": 385,
            "parameters": [
              {
                "type": "Identifier",
                "start": 366,
                "end": 375,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 367,
                  "end": 375,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 369,
                    "end": 375
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 384,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 378,
                "end": 384,
                "typeName": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 384,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 390,
            "end": 410,
            "parameters": [
              {
                "type": "Identifier",
                "start": 391,
                "end": 400,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 392,
                  "end": 400,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 394,
                    "end": 400
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 401,
              "end": 409,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 403,
                "end": 409,
                "typeName": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 409,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 415,
            "end": 425,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 415,
              "end": 416,
              "value": 0,
              "raw": "0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 424,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 418,
                "end": 424
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
      "start": 429,
      "end": 438,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 437,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 434,
              "end": 437,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 436,
                "end": 437,
                "typeName": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 437,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 439,
      "end": 448,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 443,
          "end": 447,
          "id": {
            "type": "Identifier",
            "start": 443,
            "end": 447,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 444,
              "end": 447,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 446,
                "end": 447,
                "typeName": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 447,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 449,
      "end": 455,
      "expression": {
        "type": "AssignmentExpression",
        "start": 449,
        "end": 454,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 449,
          "end": 450,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 453,
          "end": 454,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 456,
      "end": 462,
      "expression": {
        "type": "AssignmentExpression",
        "start": 456,
        "end": 461,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 456,
          "end": 457,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 460,
          "end": 461,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
