__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 504,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 17,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 17,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "decorators": [],
        "name": "Accessor",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 19,
      "end": 55,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 32,
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 33,
          "end": 45,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 45,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 39,
              "end": 45
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 46,
        "end": 54,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 48,
          "end": 54
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 56,
      "end": 109,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 69,
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 70,
          "end": 82,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 74,
            "end": 82,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 76,
              "end": 82
            }
          }
        },
        {
          "type": "Identifier",
          "start": 84,
          "end": 97,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 97,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 91,
              "end": 97
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 98,
        "end": 108,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 100,
          "end": 108,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 100,
            "end": 108,
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 110,
      "end": 144,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 123,
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 124,
          "end": 132,
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 132,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 129,
              "end": 132
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 133,
        "end": 143,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 135,
          "end": 143,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 135,
            "end": 143,
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 145,
      "end": 382,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 196,
        "end": 382,
        "body": [
          {
            "type": "IfStatement",
            "start": 202,
            "end": 380,
            "alternate": {
              "type": "BlockStatement",
              "start": 323,
              "end": 380,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 363,
                  "end": 374,
                  "argument": {
                    "type": "Literal",
                    "start": 370,
                    "end": 373,
                    "raw": "\"s\"",
                    "value": "s"
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 250,
              "end": 313,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 287,
                  "end": 307,
                  "argument": {
                    "type": "NewExpression",
                    "start": 294,
                    "end": 306,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 306,
                      "decorators": [],
                      "name": "Accessor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 206,
              "end": 248,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 206,
                "end": 215,
                "decorators": [],
                "name": "nameOrMap",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 219,
                "end": 248,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 219,
                  "end": 235,
                  "argument": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 235,
                    "decorators": [],
                    "name": "nameOrMap",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 240,
                  "end": 248,
                  "raw": "\"object\"",
                  "value": "object"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 158,
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 159,
          "end": 173,
          "decorators": [],
          "name": "nameOrMap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 168,
            "end": 173,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 170,
              "end": 173
            }
          }
        },
        {
          "type": "Identifier",
          "start": 175,
          "end": 189,
          "decorators": [],
          "name": "value",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 189,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 183,
              "end": 189
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 190,
        "end": 195,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 192,
          "end": 195
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 385,
      "end": 504,
      "body": {
        "type": "TSInterfaceBody",
        "start": 401,
        "end": 504,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 404,
            "end": 429,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 404,
              "end": 408,
              "decorators": [],
              "name": "attr",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 409,
                "end": 420,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 413,
                  "end": 420,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 414,
                    "end": 420
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 421,
              "end": 428,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 422,
                "end": 428
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 431,
            "end": 475,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 435,
              "decorators": [],
              "name": "attr",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 436,
                "end": 448,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 440,
                  "end": 448,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 442,
                    "end": 448
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 450,
                "end": 463,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 455,
                  "end": 463,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 457,
                    "end": 463
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 464,
              "end": 474,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 466,
                "end": 474,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 474,
                  "decorators": [],
                  "name": "Accessor",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 477,
            "end": 502,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 477,
              "end": 481,
              "decorators": [],
              "name": "attr",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 482,
                "end": 490,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 485,
                  "end": 490,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 487,
                    "end": 490
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 501,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 501,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 501,
                  "decorators": [],
                  "name": "Accessor",
                  "optional": false,
                  "typeAnnotation": null
                }
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
        "start": 395,
        "end": 400,
        "decorators": [],
        "name": "IFace",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
