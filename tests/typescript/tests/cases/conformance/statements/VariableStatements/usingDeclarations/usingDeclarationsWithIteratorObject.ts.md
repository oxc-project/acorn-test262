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
        "start": 263,
        "end": 264
      },
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
            "type": "VariableDeclaration",
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 301
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "io",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 306
                },
                "definite": false,
                "start": 298,
                "end": 306
              }
            ],
            "declare": false,
            "start": 292,
            "end": 307
          },
          {
            "type": "VariableDeclaration",
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 321
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 325
                },
                "definite": false,
                "start": 318,
                "end": 325
              }
            ],
            "declare": false,
            "start": 312,
            "end": 326
          },
          {
            "type": "VariableDeclaration",
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 340
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
                      "start": 343,
                      "end": 351
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "from",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 352,
                      "end": 356
                    },
                    "optional": false,
                    "computed": false,
                    "start": 343,
                    "end": 356
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 358
                    }
                  ],
                  "optional": false,
                  "start": 343,
                  "end": 359
                },
                "definite": false,
                "start": 337,
                "end": 359
              }
            ],
            "declare": false,
            "start": 331,
            "end": 359
          },
          {
            "type": "VariableDeclaration",
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 373
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 380,
                    "end": 390
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 376,
                  "end": 392
                },
                "definite": false,
                "start": 370,
                "end": 392
              }
            ],
            "declare": false,
            "start": 364,
            "end": 393
          },
          {
            "type": "VariableDeclaration",
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 407
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 410,
                      "end": 412
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 413,
                      "end": 419
                    },
                    "optional": false,
                    "computed": false,
                    "start": 410,
                    "end": 419
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 410,
                  "end": 421
                },
                "definite": false,
                "start": 404,
                "end": 421
              }
            ],
            "declare": false,
            "start": 398,
            "end": 422
          },
          {
            "type": "VariableDeclaration",
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 436
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
                        "start": 443,
                        "end": 446
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
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
                        ],
                        "start": 446,
                        "end": 462
                      },
                      "arguments": [],
                      "start": 439,
                      "end": 464
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 472
                    },
                    "optional": false,
                    "computed": false,
                    "start": 439,
                    "end": 472
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 439,
                  "end": 474
                },
                "definite": false,
                "start": 433,
                "end": 474
              }
            ],
            "declare": false,
            "start": 427,
            "end": 475
          },
          {
            "type": "VariableDeclaration",
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 486,
                  "end": 489
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
                        "start": 496,
                        "end": 499
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 500,
                            "end": 506
                          }
                        ],
                        "start": 499,
                        "end": 507
                      },
                      "arguments": [],
                      "start": 492,
                      "end": 509
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 510,
                      "end": 514
                    },
                    "optional": false,
                    "computed": false,
                    "start": 492,
                    "end": 514
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 492,
                  "end": 516
                },
                "definite": false,
                "start": 486,
                "end": 516
              }
            ],
            "declare": false,
            "start": 480,
            "end": 517
          },
          {
            "type": "VariableDeclaration",
            "kind": "using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 548,
                  "end": 551
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 555
                },
                "definite": false,
                "start": 548,
                "end": 555
              }
            ],
            "declare": false,
            "start": 542,
            "end": 556
          }
        ],
        "start": 267,
        "end": 558
      },
      "expression": false,
      "start": 254,
      "end": 558
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 558
}
```
