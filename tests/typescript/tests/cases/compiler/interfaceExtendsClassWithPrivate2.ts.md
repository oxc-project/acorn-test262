__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 434,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 67,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
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
        "start": 8,
        "end": 67,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 46,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 46,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 25,
                  "end": 31,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 28,
                      "end": 31
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 46,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 35,
                    "end": 44,
                    "argument": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
            "type": "PropertyDefinition",
            "start": 51,
            "end": 65,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 63,
              "end": 64,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 69,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 89,
          "end": 90,
          "expression": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 118,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 97,
            "end": 116,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 102,
              "decorators": [],
              "name": "other",
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
                "start": 103,
                "end": 109,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 104,
                  "end": 109,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 106,
                    "end": 109
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 115,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 112,
                "end": 115
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
      "start": 120,
      "end": 283,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 149,
          "end": 150,
          "expression": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 283,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 166,
            "end": 198,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 198,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 183,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 178,
                    "end": 183,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 180,
                      "end": 183
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 185,
                "end": 198,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 187,
                    "end": 196,
                    "argument": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
            "type": "PropertyDefinition",
            "start": 203,
            "end": 217,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 215,
              "end": 216,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 222,
            "end": 236,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 234,
              "end": 235,
              "value": 3,
              "raw": "3"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 241,
            "end": 268,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 246,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 246,
              "end": 268,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 247,
                  "end": 253,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 253,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 250,
                      "end": 253
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 255,
                "end": 268,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 257,
                    "end": 266,
                    "argument": {
                      "type": "Identifier",
                      "start": 264,
                      "end": 265,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 273,
            "end": 281,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 276,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 276,
              "end": 281,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 279,
                "end": 281,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 286,
      "end": 433,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 294,
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 303,
        "end": 304,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 316,
          "end": 317,
          "expression": {
            "type": "Identifier",
            "start": 316,
            "end": 317,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 318,
        "end": 433,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 333,
            "end": 365,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 340,
              "end": 343,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 343,
              "end": 365,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 344,
                  "end": 350,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 345,
                    "end": 350,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 347,
                      "end": 350
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 352,
                "end": 365,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 354,
                    "end": 363,
                    "argument": {
                      "type": "Identifier",
                      "start": 361,
                      "end": 362,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
            "type": "PropertyDefinition",
            "start": 370,
            "end": 385,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 382,
              "end": 384,
              "value": "",
              "raw": "\"\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 390,
            "end": 417,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 390,
              "end": 395,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 395,
              "end": 417,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 396,
                  "end": 402,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 397,
                    "end": 402,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 399,
                      "end": 402
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 404,
                "end": 417,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 406,
                    "end": 415,
                    "argument": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 414,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 422,
            "end": 431,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 422,
              "end": 425,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 425,
              "end": 431,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 428,
                "end": 431,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
