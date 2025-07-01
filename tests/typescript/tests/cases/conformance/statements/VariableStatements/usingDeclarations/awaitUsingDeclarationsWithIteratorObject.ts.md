__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 25
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
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
                  ],
                  "start": 25,
                  "end": 44
                },
                "start": 17,
                "end": 44
              },
              "start": 15,
              "end": 44
            },
            "start": 14,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 44
        }
      ],
      "declare": true,
      "start": 0,
      "end": 45
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "io",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IteratorObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 78
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
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
                  ],
                  "start": 78,
                  "end": 106
                },
                "start": 64,
                "end": 106
              },
              "start": 62,
              "end": 106
            },
            "start": 60,
            "end": 106
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 106
        }
      ],
      "declare": true,
      "start": 46,
      "end": 107
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 134
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
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
                  ],
                  "start": 134,
                  "end": 148
                },
                "start": 125,
                "end": 148
              },
              "start": 123,
              "end": 148
            },
            "start": 122,
            "end": 148
          },
          "init": null,
          "definite": false,
          "start": 122,
          "end": 148
        }
      ],
      "declare": true,
      "start": 108,
      "end": 149
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 167
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 184
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 185,
            "end": 191
          }
        ],
        "start": 184,
        "end": 192
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 203
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 217,
                            "end": 221
                          },
                          "value": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 223,
                            "end": 227
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 217,
                          "end": 227
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 229,
                            "end": 234
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 236,
                            "end": 245
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 229,
                          "end": 245
                        }
                      ],
                      "start": 215,
                      "end": 247
                    },
                    "start": 208,
                    "end": 248
                  }
                ],
                "start": 206,
                "end": 250
              },
              "expression": false,
              "start": 203,
              "end": 250
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 199,
            "end": 250
          }
        ],
        "start": 193,
        "end": 252
      },
      "abstract": false,
      "declare": false,
      "start": 151,
      "end": 252
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 270
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 313
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "io",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 318
                },
                "definite": false,
                "start": 310,
                "end": 318
              }
            ],
            "declare": false,
            "start": 298,
            "end": 319
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 339
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 343
                },
                "definite": false,
                "start": 336,
                "end": 343
              }
            ],
            "declare": false,
            "start": 324,
            "end": 344
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 364
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 375
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "from",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 380
                    },
                    "optional": false,
                    "computed": false,
                    "start": 367,
                    "end": 380
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 382
                    }
                  ],
                  "optional": false,
                  "start": 367,
                  "end": 383
                },
                "definite": false,
                "start": 361,
                "end": 383
              }
            ],
            "declare": false,
            "start": 349,
            "end": 383
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 400,
                  "end": 403
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 420
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 406,
                  "end": 422
                },
                "definite": false,
                "start": 400,
                "end": 422
              }
            ],
            "declare": false,
            "start": 388,
            "end": 423
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 443
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 446,
                      "end": 448
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 455
                    },
                    "optional": false,
                    "computed": false,
                    "start": 446,
                    "end": 455
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 446,
                  "end": 457
                },
                "definite": false,
                "start": 440,
                "end": 457
              }
            ],
            "declare": false,
            "start": 428,
            "end": 458
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 478
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 485,
                        "end": 488
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
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
                        ],
                        "start": 488,
                        "end": 504
                      },
                      "arguments": [],
                      "start": 481,
                      "end": 506
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 507,
                      "end": 514
                    },
                    "optional": false,
                    "computed": false,
                    "start": 481,
                    "end": 514
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 481,
                  "end": 516
                },
                "definite": false,
                "start": 475,
                "end": 516
              }
            ],
            "declare": false,
            "start": 463,
            "end": 517
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 537
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Set",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 544,
                        "end": 547
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 548,
                            "end": 554
                          }
                        ],
                        "start": 547,
                        "end": 555
                      },
                      "arguments": [],
                      "start": 540,
                      "end": 557
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 558,
                      "end": 562
                    },
                    "optional": false,
                    "computed": false,
                    "start": 540,
                    "end": 562
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 540,
                  "end": 564
                },
                "definite": false,
                "start": 534,
                "end": 564
              }
            ],
            "declare": false,
            "start": 522,
            "end": 565
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 602,
                  "end": 605
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 608,
                  "end": 609
                },
                "definite": false,
                "start": 602,
                "end": 609
              }
            ],
            "declare": false,
            "start": 590,
            "end": 610
          }
        ],
        "start": 273,
        "end": 612
      },
      "expression": false,
      "start": 254,
      "end": 612
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 612
}
```
