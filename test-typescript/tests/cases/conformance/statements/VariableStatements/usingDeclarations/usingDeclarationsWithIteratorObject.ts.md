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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 44,
            "name": "i",
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
                  "name": "Iterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 106,
            "name": "io",
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
                  "name": "IteratorObject",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 148,
            "name": "g",
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
                  "name": "Generator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 151,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 167,
        "name": "MyIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 184,
        "name": "Iterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 193,
        "end": 252,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 199,
            "end": 250,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 203,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 203,
              "end": 250,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 217,
                            "end": 221,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 223,
                            "end": 227,
                            "value": true,
                            "raw": "true"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 229,
                          "end": 245,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 234,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 236,
                            "end": 245,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 254,
      "end": 558,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 301,
                  "name": "it0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "name": "io",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 321,
                  "name": "it1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 325,
                  "name": "g",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 340,
                  "name": "it2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "Iterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 352,
                      "end": 356,
                      "name": "from",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 357,
                      "end": 358,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 373,
                  "name": "it3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 376,
                  "end": 392,
                  "callee": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 390,
                    "name": "MyIterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 407,
                  "name": "it4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "values",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 436,
                  "name": "it5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Map",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
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
                    "property": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 472,
                      "name": "entries",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 489,
                  "name": "it6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Set",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
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
                    "property": {
                      "type": "Identifier",
                      "start": 510,
                      "end": 514,
                      "name": "keys",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 551,
                  "name": "it7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 555,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "using",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
