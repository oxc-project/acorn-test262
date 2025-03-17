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
      "end": 612,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 270,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 313,
                  "name": "it0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 318,
                  "name": "io",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "await using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 339,
                  "name": "it1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 343,
                  "name": "g",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "await using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 364,
                  "name": "it2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 367,
                  "end": 383,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 367,
                    "end": 380,
                    "object": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 375,
                      "name": "Iterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 380,
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
                      "start": 381,
                      "end": 382,
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
            "kind": "await using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 403,
                  "name": "it3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 406,
                  "end": 422,
                  "callee": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 420,
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
            "kind": "await using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 443,
                  "name": "it4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 446,
                  "end": 457,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 446,
                    "end": 455,
                    "object": {
                      "type": "ArrayExpression",
                      "start": 446,
                      "end": 448,
                      "elements": []
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 455,
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
            "kind": "await using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 478,
                  "name": "it5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 481,
                  "end": 516,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 481,
                    "end": 514,
                    "object": {
                      "type": "NewExpression",
                      "start": 481,
                      "end": 506,
                      "callee": {
                        "type": "Identifier",
                        "start": 485,
                        "end": 488,
                        "name": "Map",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
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
                    "property": {
                      "type": "Identifier",
                      "start": 507,
                      "end": 514,
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
            "kind": "await using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 537,
                  "name": "it6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 540,
                  "end": 564,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 540,
                    "end": 562,
                    "object": {
                      "type": "NewExpression",
                      "start": 540,
                      "end": 557,
                      "callee": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 547,
                        "name": "Set",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
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
                    "property": {
                      "type": "Identifier",
                      "start": 558,
                      "end": 562,
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
            "kind": "await using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 605,
                  "name": "it7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 608,
                  "end": 609,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "await using",
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
