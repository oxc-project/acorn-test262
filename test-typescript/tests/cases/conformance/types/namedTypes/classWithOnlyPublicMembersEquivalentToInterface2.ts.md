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
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 289,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 54,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "x",
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
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 59,
            "end": 103,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 67,
              "end": 103,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 77,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 78,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 80,
                  "end": 86
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 136,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 136,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 141,
            "end": 160,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 153,
              "end": 160,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 160,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 167,
                  "end": 175,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 169,
                    "end": 175
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "Object",
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 192,
                  "end": 200,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 194,
                    "end": 200
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "Object",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 225,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 215,
              "end": 216,
              "value": 0,
              "raw": "0"
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
              "start": 216,
              "end": 224,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 218,
                "end": 224
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 231,
            "end": 257,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 248,
              "name": "foo",
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
              "start": 248,
              "end": 256,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
              }
            },
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 291,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 302,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "y",
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
                "start": 326,
                "end": 335,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 327,
                  "end": 335,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 329,
                    "end": 335
                  }
                },
                "decorators": [],
                "optional": false
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
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 367,
                  "end": 375,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 369,
                    "end": 375
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "Object",
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 392,
                  "end": 400,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 394,
                    "end": 400
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "Object",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 437,
            "name": "c",
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
                  "name": "C",
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
      "type": "VariableDeclaration",
      "start": 439,
      "end": 448,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 443,
          "end": 447,
          "id": {
            "type": "Identifier",
            "start": 443,
            "end": 447,
            "name": "i",
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
                  "name": "I",
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
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 453,
          "end": 454,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 460,
          "end": 461,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
