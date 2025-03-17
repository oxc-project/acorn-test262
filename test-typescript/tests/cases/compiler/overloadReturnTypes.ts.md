__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 505,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 17,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "name": "Accessor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 17,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 19,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 32,
        "name": "attr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 33,
          "end": 45,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 45,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 39,
              "end": 45
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 46,
        "end": 54,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 48,
          "end": 54
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 56,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 69,
        "name": "attr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 70,
          "end": 82,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 74,
            "end": 82,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 76,
              "end": 82
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 84,
          "end": 97,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 97,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 91,
              "end": 97
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 98,
        "end": 108,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 100,
          "end": 108,
          "typeName": {
            "type": "Identifier",
            "start": 100,
            "end": 108,
            "name": "Accessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 110,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 123,
        "name": "attr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 124,
          "end": 132,
          "name": "map",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 132,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 129,
              "end": 132
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 133,
        "end": 143,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 135,
          "end": 143,
          "typeName": {
            "type": "Identifier",
            "start": 135,
            "end": 143,
            "name": "Accessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 145,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 158,
        "name": "attr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 159,
          "end": 173,
          "name": "nameOrMap",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 168,
            "end": 173,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 170,
              "end": 173
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 175,
          "end": 189,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 189,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 183,
              "end": 189
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 196,
        "end": 382,
        "body": [
          {
            "type": "IfStatement",
            "start": 202,
            "end": 380,
            "test": {
              "type": "LogicalExpression",
              "start": 206,
              "end": 248,
              "left": {
                "type": "Identifier",
                "start": 206,
                "end": 215,
                "name": "nameOrMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 219,
                "end": 248,
                "left": {
                  "type": "UnaryExpression",
                  "start": 219,
                  "end": 235,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 235,
                    "name": "nameOrMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 240,
                  "end": 248,
                  "value": "object",
                  "raw": "\"object\""
                }
              }
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
                    "callee": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 306,
                      "name": "Accessor",
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
                    "value": "s",
                    "raw": "\"s\""
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 190,
        "end": 195,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 192,
          "end": 195
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 385,
      "end": 504,
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 400,
        "name": "IFace",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 401,
        "end": 504,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 404,
            "end": 429,
            "key": {
              "type": "Identifier",
              "start": 404,
              "end": 408,
              "name": "attr",
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
                "start": 409,
                "end": 420,
                "name": "name",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 413,
                  "end": 420,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 414,
                    "end": 420
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 431,
            "end": 475,
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 435,
              "name": "attr",
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
                "start": 436,
                "end": 448,
                "name": "name",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 440,
                  "end": 448,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 442,
                    "end": 448
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 450,
                "end": 463,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 455,
                  "end": 463,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 457,
                    "end": 463
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 464,
              "end": 474,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 466,
                "end": 474,
                "typeName": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 474,
                  "name": "Accessor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 477,
            "end": 502,
            "key": {
              "type": "Identifier",
              "start": 477,
              "end": 481,
              "name": "attr",
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
                "start": 482,
                "end": 490,
                "name": "map",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 485,
                  "end": 490,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 487,
                    "end": 490
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 501,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 501,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 501,
                  "name": "Accessor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
