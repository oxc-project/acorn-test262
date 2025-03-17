__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 613,
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
      "end": 612,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 273,
        "end": 612,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 298,
            "end": 319,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 310,
                "end": 318,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 313,
                  "decorators": [],
                  "name": "it0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 318,
                  "decorators": [],
                  "name": "io",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "await using"
          },
          {
            "type": "VariableDeclaration",
            "start": 324,
            "end": 344,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 336,
                "end": 343,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 339,
                  "decorators": [],
                  "name": "it1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 343,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "await using"
          },
          {
            "type": "VariableDeclaration",
            "start": 349,
            "end": 383,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 361,
                "end": 383,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 364,
                  "decorators": [],
                  "name": "it2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 367,
                  "end": 383,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 381,
                      "end": 382,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 367,
                    "end": 380,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 375,
                      "decorators": [],
                      "name": "Iterator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 380,
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
            "kind": "await using"
          },
          {
            "type": "VariableDeclaration",
            "start": 388,
            "end": 423,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 400,
                "end": 422,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 403,
                  "decorators": [],
                  "name": "it3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 406,
                  "end": 422,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 420,
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
            "kind": "await using"
          },
          {
            "type": "VariableDeclaration",
            "start": 428,
            "end": 458,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 440,
                "end": 457,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 443,
                  "decorators": [],
                  "name": "it4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 446,
                  "end": 457,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 446,
                    "end": 455,
                    "computed": false,
                    "object": {
                      "type": "ArrayExpression",
                      "start": 446,
                      "end": 448,
                      "elements": []
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 455,
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
            "kind": "await using"
          },
          {
            "type": "VariableDeclaration",
            "start": 463,
            "end": 517,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 475,
                "end": 516,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 478,
                  "decorators": [],
                  "name": "it5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 481,
                  "end": 516,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 481,
                    "end": 514,
                    "computed": false,
                    "object": {
                      "type": "NewExpression",
                      "start": 481,
                      "end": 506,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 485,
                        "end": 488,
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 488,
                        "end": 504,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 489,
                            "end": 495
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 497,
                            "end": 503
                          }
                        ]
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 507,
                      "end": 514,
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
            "kind": "await using"
          },
          {
            "type": "VariableDeclaration",
            "start": 522,
            "end": 565,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 534,
                "end": 564,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 537,
                  "decorators": [],
                  "name": "it6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 540,
                  "end": 564,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 540,
                    "end": 562,
                    "computed": false,
                    "object": {
                      "type": "NewExpression",
                      "start": 540,
                      "end": 557,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 547,
                        "decorators": [],
                        "name": "Set",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 547,
                        "end": 555,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 548,
                            "end": 554
                          }
                        ]
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 558,
                      "end": 562,
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
            "kind": "await using"
          },
          {
            "type": "VariableDeclaration",
            "start": 590,
            "end": 610,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 602,
                "end": 609,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 605,
                  "decorators": [],
                  "name": "it7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 608,
                  "end": 609,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "await using"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 270,
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
