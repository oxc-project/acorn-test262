__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 558,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 45,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 44,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 25,
                  "decorators": [],
                  "name": "Iterator",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 107,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 106,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 78,
                  "decorators": [],
                  "name": "IteratorObject",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 149,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 148,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 134,
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 151,
      "end": 252,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 193,
        "end": 252,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 199,
            "end": 250,
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
            "value": {
              "type": "FunctionExpression",
              "start": 203,
              "end": 250,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 217,
                            "end": 221,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 223,
                            "end": 227,
                            "value": true,
                            "raw": "true"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 229,
                          "end": 245,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 234,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 236,
                            "end": 245,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 254,
      "end": 558,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 267,
        "end": 558,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 292,
            "end": 307,
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 298,
                "end": 306,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 312,
            "end": 326,
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 318,
                "end": 325,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 331,
            "end": 359,
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 337,
                "end": 359,
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
                  "callee": {
                    "type": "MemberExpression",
                    "start": 343,
                    "end": 356,
                    "object": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 351,
                      "decorators": [],
                      "name": "Iterator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 352,
                      "end": 356,
                      "decorators": [],
                      "name": "from",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
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
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 364,
            "end": 393,
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 370,
                "end": 392,
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
                  "callee": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 390,
                    "decorators": [],
                    "name": "MyIterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 398,
            "end": 422,
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 404,
                "end": 421,
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
                  "callee": {
                    "type": "MemberExpression",
                    "start": 410,
                    "end": 419,
                    "object": {
                      "type": "ArrayExpression",
                      "start": 410,
                      "end": 412,
                      "elements": []
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 419,
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 427,
            "end": 475,
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 433,
                "end": 474,
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
                  "callee": {
                    "type": "MemberExpression",
                    "start": 439,
                    "end": 472,
                    "object": {
                      "type": "NewExpression",
                      "start": 439,
                      "end": 464,
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
                      },
                      "arguments": []
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 472,
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 480,
            "end": 517,
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 486,
                "end": 516,
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
                  "callee": {
                    "type": "MemberExpression",
                    "start": 492,
                    "end": 514,
                    "object": {
                      "type": "NewExpression",
                      "start": 492,
                      "end": 509,
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
                      },
                      "arguments": []
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 510,
                      "end": 514,
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 542,
            "end": 556,
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 548,
                "end": 555,
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
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
