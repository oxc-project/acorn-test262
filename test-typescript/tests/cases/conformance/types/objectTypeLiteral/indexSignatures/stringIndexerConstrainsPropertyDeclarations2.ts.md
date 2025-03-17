__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 65,
  "end": 574,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 109,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 107,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 82,
              "end": 107,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 107,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 95,
                    "end": 105,
                    "argument": {
                      "type": "Literal",
                      "start": 102,
                      "end": 104,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 84,
                "end": 92,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 86,
                  "end": 92
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
      "type": "ClassDeclaration",
      "start": 111,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 165,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 135,
            "end": 163,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 138,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 163,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 163,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 151,
                    "end": 161,
                    "argument": {
                      "type": "Literal",
                      "start": 158,
                      "end": 160,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 140,
                "end": 148,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 142,
                  "end": 148
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
      "type": "ClassDeclaration",
      "start": 167,
      "end": 280,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 176,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 177,
        "end": 280,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 183,
            "end": 198,
            "parameters": [
              {
                "type": "Identifier",
                "start": 184,
                "end": 193,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 185,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 187,
                    "end": 193
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 197,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "name": "A",
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
            "start": 203,
            "end": 208,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "name": "a",
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
              "start": 204,
              "end": 207,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 207,
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 219,
            "end": 224,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "name": "b",
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
              "start": 220,
              "end": 223,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 223,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 235,
            "end": 245,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "name": "c",
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
              "start": 236,
              "end": 244,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 238,
                "end": 244
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 259,
            "end": 269,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
              "name": "d",
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
              "start": 260,
              "end": 268,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              }
            },
            "accessibility": null
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
      "start": 282,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 296,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 297,
        "end": 400,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 303,
            "end": 318,
            "parameters": [
              {
                "type": "Identifier",
                "start": 304,
                "end": 313,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 305,
                  "end": 313,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 307,
                    "end": 313
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 317,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 316,
                "end": 317,
                "typeName": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 317,
                  "name": "A",
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
            "start": 323,
            "end": 328,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 327,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 326,
                "end": 327,
                "typeName": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 339,
            "end": 344,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 343,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 342,
                "end": 343,
                "typeName": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 343,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 355,
            "end": 365,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 355,
              "end": 356,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 356,
              "end": 364,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 358,
                "end": 364
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 379,
            "end": 389,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 380,
              "end": 388,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 382,
                "end": 388
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
      "start": 402,
      "end": 513,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 512,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 512,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 512,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 409,
                "end": 512,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 415,
                    "end": 430,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 416,
                        "end": 425,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 417,
                          "end": 425,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 419,
                            "end": 425
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 426,
                      "end": 429,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 428,
                        "end": 429,
                        "typeName": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 429,
                          "name": "A",
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
                    "start": 435,
                    "end": 440,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 435,
                      "end": 436,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 436,
                      "end": 439,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 438,
                        "end": 439,
                        "typeName": {
                          "type": "Identifier",
                          "start": 438,
                          "end": 439,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 451,
                    "end": 456,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 451,
                      "end": 452,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 452,
                      "end": 455,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 454,
                        "end": 455,
                        "typeName": {
                          "type": "Identifier",
                          "start": 454,
                          "end": 455,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 467,
                    "end": 477,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 468,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 468,
                      "end": 476,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 470,
                        "end": 476
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 491,
                    "end": 501,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 491,
                      "end": 492,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 492,
                      "end": 500,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 494,
                        "end": 500
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 524,
      "end": 574,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 528,
          "end": 574,
          "id": {
            "type": "Identifier",
            "start": 528,
            "end": 549,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 529,
              "end": 549,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 531,
                "end": 549,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 533,
                    "end": 547,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 534,
                        "end": 543,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 535,
                          "end": 543,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 537,
                            "end": 543
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 544,
                      "end": 547,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 546,
                        "end": 547,
                        "typeName": {
                          "type": "Identifier",
                          "start": 546,
                          "end": 547,
                          "name": "A",
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
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 552,
            "end": 574,
            "properties": [
              {
                "type": "Property",
                "start": 558,
                "end": 562,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 558,
                  "end": 559,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 561,
                  "end": 562,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 568,
                "end": 572,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 569,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 572,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
