__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 416,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 137,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 137,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 135,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 135,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 135,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 117,
                    "end": 129,
                    "argument": {
                      "type": "Literal",
                      "start": 124,
                      "end": 128,
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
                  "start": 27,
                  "end": 31,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 30,
                      "end": 31,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 32,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 34,
                  "end": 35,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 23,
                "end": 26,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 24,
                    "end": 25,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 24,
                      "end": 25,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 139,
      "end": 234,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 234,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 185,
            "end": 232,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 188,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 232,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 216,
                "end": 232,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 218,
                    "end": 230,
                    "argument": {
                      "type": "Literal",
                      "start": 225,
                      "end": 229,
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
                  "start": 197,
                  "end": 206,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 200,
                      "end": 206
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 207,
                "end": 215,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 209,
                  "end": 215
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 188,
                "end": 196,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 189,
                    "end": 195,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 195,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 154,
        "decorators": [],
        "name": "IntFooBad",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 166,
          "end": 178,
          "expression": {
            "type": "Identifier",
            "start": 166,
            "end": 170,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 170,
            "end": 178,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 171,
                "end": 177
              }
            ]
          }
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 236,
      "end": 332,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 277,
        "end": 332,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 283,
            "end": 330,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 286,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 286,
              "end": 330,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 314,
                "end": 330,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 316,
                    "end": 328,
                    "argument": {
                      "type": "Literal",
                      "start": 323,
                      "end": 327,
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
                  "start": 295,
                  "end": 304,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 296,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 298,
                      "end": 304
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 305,
                "end": 313,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 307,
                  "end": 313
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 286,
                "end": 294,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 287,
                    "end": 293,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 293,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 252,
        "decorators": [],
        "name": "StringFoo2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 264,
          "end": 276,
          "expression": {
            "type": "Identifier",
            "start": 264,
            "end": 268,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 268,
            "end": 276,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 269,
                "end": 275
              }
            ]
          }
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 334,
      "end": 415,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 375,
        "end": 415,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 381,
            "end": 413,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 381,
              "end": 384,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 384,
              "end": 413,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 397,
                "end": 413,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 399,
                    "end": 411,
                    "argument": {
                      "type": "Literal",
                      "start": 406,
                      "end": 410,
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
                  "start": 388,
                  "end": 392,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 389,
                    "end": 392,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 391,
                      "end": 392,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 391,
                        "end": 392,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 393,
                "end": 396,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 395,
                  "end": 396,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 396,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 384,
                "end": 387,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 385,
                    "end": 386,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 386,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 350,
        "decorators": [],
        "name": "StringFoo3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 362,
          "end": 374,
          "expression": {
            "type": "Identifier",
            "start": 362,
            "end": 366,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 366,
            "end": 374,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 367,
                "end": 373
              }
            ]
          }
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
