__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 559,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 44,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 17,
                "end": 44,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 25,
                  "end": 44,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 26,
                      "end": 32
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 34,
                      "end": 43
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 25,
                  "decorators": [],
                  "name": "Iterator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 106,
            "decorators": [],
            "name": "io",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 106,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 78,
                  "end": 106,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 79,
                      "end": 85
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 87,
                      "end": 96
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 98,
                      "end": 105
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 78,
                  "decorators": [],
                  "name": "IteratorObject",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 148,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 148,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 125,
                "end": 148,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 134,
                  "end": 148,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 135,
                      "end": 141
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 143,
                      "end": 147
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 134,
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 151,
      "end": 252,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 193,
        "end": 252,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 199,
            "end": 250,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 203,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 203,
              "end": 250,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 206,
                "end": 250,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 208,
                    "end": 248,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 215,
                      "end": 247,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 217,
                          "end": 227,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 217,
                            "end": 221,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 223,
                            "end": 227,
                            "raw": "true",
                            "value": true
                          }
                        },
                        {
                          "type": "Property",
                          "start": 229,
                          "end": 245,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 234,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 236,
                            "end": 245,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 167,
        "decorators": [],
        "name": "MyIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 184,
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 184,
        "end": 192,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 185,
            "end": 191
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 254,
      "end": 558,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 267,
        "end": 558,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 292,
            "end": 307,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 298,
                "end": 306,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 301,
                  "decorators": [],
                  "name": "it0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "decorators": [],
                  "name": "io",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "using"
          },
          {
            "type": "VariableDeclaration",
            "start": 312,
            "end": 326,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 318,
                "end": 325,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 321,
                  "decorators": [],
                  "name": "it1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 325,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "using"
          },
          {
            "type": "VariableDeclaration",
            "start": 331,
            "end": 359,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 337,
                "end": 359,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 340,
                  "decorators": [],
                  "name": "it2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 343,
                  "end": 359,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 357,
                      "end": 358,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 343,
                    "end": 356,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 351,
                      "decorators": [],
                      "name": "Iterator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 352,
                      "end": 356,
                      "decorators": [],
                      "name": "from",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "using"
          },
          {
            "type": "VariableDeclaration",
            "start": 364,
            "end": 393,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 370,
                "end": 392,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 373,
                  "decorators": [],
                  "name": "it3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 376,
                  "end": 392,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 390,
                    "decorators": [],
                    "name": "MyIterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "using"
          },
          {
            "type": "VariableDeclaration",
            "start": 398,
            "end": 422,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 404,
                "end": 421,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 407,
                  "decorators": [],
                  "name": "it4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 410,
                  "end": 421,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 410,
                    "end": 419,
                    "computed": false,
                    "object": {
                      "type": "ArrayExpression",
                      "start": 410,
                      "end": 412,
                      "elements": []
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 419,
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "using"
          },
          {
            "type": "VariableDeclaration",
            "start": 427,
            "end": 475,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 433,
                "end": 474,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 436,
                  "decorators": [],
                  "name": "it5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 439,
                  "end": 474,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 439,
                    "end": 472,
                    "computed": false,
                    "object": {
                      "type": "NewExpression",
                      "start": 439,
                      "end": 464,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 443,
                        "end": 446,
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 446,
                        "end": 462,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 447,
                            "end": 453
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 455,
                            "end": 461
                          }
                        ]
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 472,
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "using"
          },
          {
            "type": "VariableDeclaration",
            "start": 480,
            "end": 517,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 486,
                "end": 516,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 489,
                  "decorators": [],
                  "name": "it6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 492,
                  "end": 516,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 492,
                    "end": 514,
                    "computed": false,
                    "object": {
                      "type": "NewExpression",
                      "start": 492,
                      "end": 509,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 496,
                        "end": 499,
                        "decorators": [],
                        "name": "Set",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 499,
                        "end": 507,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 500,
                            "end": 506
                          }
                        ]
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 510,
                      "end": 514,
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "using"
          },
          {
            "type": "VariableDeclaration",
            "start": 542,
            "end": 556,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 548,
                "end": 555,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 551,
                  "decorators": [],
                  "name": "it7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 555,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "using"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
