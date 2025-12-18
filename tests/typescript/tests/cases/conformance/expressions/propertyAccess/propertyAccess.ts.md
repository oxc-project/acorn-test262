__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 24
          }
        ],
        "start": 8,
        "end": 26
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 34
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 44
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 54,
                "end": 60
              },
              "start": 52,
              "end": 60
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 51,
            "end": 61
          }
        ],
        "start": 45,
        "end": 63
      },
      "abstract": false,
      "declare": false,
      "start": 27,
      "end": 63
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Compass",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 76
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "North",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 88
            },
            "initializer": null,
            "computed": false,
            "start": 83,
            "end": 88
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "South",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 95
            },
            "initializer": null,
            "computed": false,
            "start": 90,
            "end": 95
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "East",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 101
            },
            "initializer": null,
            "computed": false,
            "start": 97,
            "end": 101
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "West",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 107
            },
            "initializer": null,
            "computed": false,
            "start": 103,
            "end": 107
          }
        ],
        "start": 77,
        "end": 109
      },
      "const": false,
      "declare": false,
      "start": 64,
      "end": 109
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 131,
                            "end": 137
                          },
                          "start": 129,
                          "end": 137
                        },
                        "start": 128,
                        "end": 137
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 140,
                        "end": 146
                      },
                      "start": 138,
                      "end": 146
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 127,
                    "end": 146
                  }
                ],
                "start": 125,
                "end": 148
              },
              "start": 123,
              "end": 148
            },
            "start": 115,
            "end": 148
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 153,
                  "end": 154
                },
                "value": {
                  "type": "Literal",
                  "value": "three",
                  "raw": "'three'",
                  "start": 156,
                  "end": 163
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 153,
                "end": 163
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "three",
                  "raw": "'three'",
                  "start": 165,
                  "end": 172
                },
                "value": {
                  "type": "Literal",
                  "value": "three",
                  "raw": "'three'",
                  "start": 174,
                  "end": 181
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 165,
                "end": 181
              }
            ],
            "start": 151,
            "end": 183
          },
          "definite": false,
          "start": 115,
          "end": 183
        }
      ],
      "declare": false,
      "start": 111,
      "end": 184
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 205,
                            "end": 211
                          },
                          "start": 203,
                          "end": 211
                        },
                        "start": 202,
                        "end": 211
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Compass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 214,
                          "end": 221
                        },
                        "typeArguments": null,
                        "start": 214,
                        "end": 221
                      },
                      "start": 212,
                      "end": 221
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 201,
                    "end": 221
                  }
                ],
                "start": 199,
                "end": 223
              },
              "start": 197,
              "end": 223
            },
            "start": 189,
            "end": 223
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "N",
                  "raw": "'N'",
                  "start": 228,
                  "end": 231
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Compass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 240
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "North",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 246
                  },
                  "optional": false,
                  "computed": false,
                  "start": 233,
                  "end": 246
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 228,
                "end": 246
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "E",
                  "raw": "'E'",
                  "start": 248,
                  "end": 251
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Compass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 260
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "East",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 261,
                    "end": 265
                  },
                  "optional": false,
                  "computed": false,
                  "start": 253,
                  "end": 265
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 248,
                "end": 265
              }
            ],
            "start": 226,
            "end": 267
          },
          "definite": false,
          "start": 189,
          "end": 267
        }
      ],
      "declare": false,
      "start": 185,
      "end": 268
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bothIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 302,
                            "end": 308
                          },
                          "start": 300,
                          "end": 308
                        },
                        "start": 299,
                        "end": 308
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 311,
                          "end": 312
                        },
                        "typeArguments": null,
                        "start": 311,
                        "end": 312
                      },
                      "start": 309,
                      "end": 312
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 298,
                    "end": 313
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 326,
                            "end": 332
                          },
                          "start": 324,
                          "end": 332
                        },
                        "start": 323,
                        "end": 332
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 335,
                          "end": 336
                        },
                        "typeArguments": null,
                        "start": 335,
                        "end": 336
                      },
                      "start": 333,
                      "end": 336
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 322,
                    "end": 337
                  }
                ],
                "start": 288,
                "end": 343
              },
              "start": 282,
              "end": 343
            },
            "start": 273,
            "end": 343
          },
          "init": null,
          "definite": false,
          "start": 273,
          "end": 343
        }
      ],
      "declare": false,
      "start": 269,
      "end": 344
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noIndex",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 362
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 365,
        "end": 368
      },
      "expression": false,
      "start": 346,
      "end": 368
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 377
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 386,
                  "end": 388
                },
                "value": {
                  "type": "Literal",
                  "value": "ten",
                  "raw": "'ten'",
                  "start": 390,
                  "end": 395
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 386,
                "end": 395
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 402
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 404,
                  "end": 411
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 401,
                "end": 411
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 418
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 420,
                  "end": 422
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 417,
                "end": 422
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 428,
                  "end": 429
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 433,
                        "end": 434
                      },
                      "value": {
                        "type": "Literal",
                        "value": "world",
                        "raw": "'world'",
                        "start": 436,
                        "end": 443
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 433,
                      "end": 443
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 445,
                        "end": 446
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 448,
                        "end": 450
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 445,
                      "end": 450
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 452,
                        "end": 453
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 461,
                          "end": 466
                        },
                        "id": null,
                        "generator": false,
                        "start": 455,
                        "end": 466
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 452,
                      "end": 466
                    }
                  ],
                  "start": 431,
                  "end": 468
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 428,
                "end": 468
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "literal property",
                  "raw": "'literal property'",
                  "start": 474,
                  "end": 492
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 494,
                  "end": 497
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 474,
                "end": 497
              }
            ],
            "start": 380,
            "end": 499
          },
          "definite": false,
          "start": 374,
          "end": 499
        }
      ],
      "declare": false,
      "start": 370,
      "end": 500
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 513,
                "end": 516
              },
              "start": 511,
              "end": 516
            },
            "start": 505,
            "end": 516
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 519,
            "end": 521
          },
          "definite": false,
          "start": 505,
          "end": 521
        }
      ],
      "declare": false,
      "start": 501,
      "end": 522
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 543,
                    "end": 549
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 552,
                    "end": 558
                  }
                ],
                "start": 543,
                "end": 558
              },
              "start": 541,
              "end": 558
            },
            "start": 527,
            "end": 558
          },
          "init": null,
          "definite": false,
          "start": 527,
          "end": 558
        }
      ],
      "declare": false,
      "start": 523,
      "end": 559
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 578,
                      "end": 582
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 584,
                        "end": 590
                      },
                      "start": 582,
                      "end": 590
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 578,
                    "end": 590
                  }
                ],
                "start": 576,
                "end": 592
              },
              "start": 574,
              "end": 592
            },
            "start": 564,
            "end": 592
          },
          "init": null,
          "definite": false,
          "start": 564,
          "end": 592
        }
      ],
      "declare": false,
      "start": 560,
      "end": 593
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 626,
            "end": 629
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 631
          },
          "optional": false,
          "computed": false,
          "start": 626,
          "end": 631
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 634,
          "end": 635
        },
        "start": 626,
        "end": 635
      },
      "directive": null,
      "start": 626,
      "end": 636
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 680,
            "end": 686
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 687,
            "end": 688
          },
          "optional": false,
          "computed": false,
          "start": 680,
          "end": 688
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "anyVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 691,
              "end": 697
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 698,
              "end": 699
            },
            "optional": false,
            "computed": false,
            "start": 691,
            "end": 699
          },
          "right": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 705
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 707
              },
              "optional": false,
              "computed": false,
              "start": 702,
              "end": 707
            },
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "anyVar",
                "optional": false,
                "typeAnnotation": null,
                "start": 710,
                "end": 716
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 717,
                "end": 718
              },
              "optional": false,
              "computed": false,
              "start": 710,
              "end": 718
            },
            "start": 702,
            "end": 718
          },
          "start": 691,
          "end": 718
        },
        "start": 680,
        "end": 718
      },
      "directive": null,
      "start": 680,
      "end": 719
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": null,
            "start": 775,
            "end": 777
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 783
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 785
            },
            "optional": false,
            "computed": false,
            "start": 780,
            "end": 785
          },
          "definite": false,
          "start": 775,
          "end": 785
        }
      ],
      "declare": false,
      "start": 771,
      "end": 786
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bb",
            "optional": false,
            "typeAnnotation": null,
            "start": 867,
            "end": 869
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 872,
              "end": 875
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasOwnProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 876,
              "end": 890
            },
            "optional": false,
            "computed": false,
            "start": 872,
            "end": 890
          },
          "definite": false,
          "start": 867,
          "end": 890
        }
      ],
      "declare": false,
      "start": 863,
      "end": 891
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cc",
            "optional": false,
            "typeAnnotation": null,
            "start": 979,
            "end": 981
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 987
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "qqq",
              "optional": false,
              "typeAnnotation": null,
              "start": 988,
              "end": 991
            },
            "optional": false,
            "computed": false,
            "start": 984,
            "end": 991
          },
          "definite": false,
          "start": 979,
          "end": 991
        }
      ],
      "declare": false,
      "start": 975,
      "end": 992
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dd",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1115
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1118,
              "end": 1121
            },
            "property": {
              "type": "Literal",
              "value": "literal property",
              "raw": "'literal property'",
              "start": 1122,
              "end": 1140
            },
            "optional": false,
            "computed": true,
            "start": 1118,
            "end": 1141
          },
          "definite": false,
          "start": 1113,
          "end": 1141
        }
      ],
      "declare": false,
      "start": 1109,
      "end": 1142
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dd",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1151,
                "end": 1157
              },
              "start": 1149,
              "end": 1157
            },
            "start": 1147,
            "end": 1157
          },
          "init": null,
          "definite": false,
          "start": 1147,
          "end": 1157
        }
      ],
      "declare": false,
      "start": 1143,
      "end": 1158
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ee",
            "optional": false,
            "typeAnnotation": null,
            "start": 1273,
            "end": 1275
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1278,
              "end": 1281
            },
            "property": {
              "type": "Literal",
              "value": "wa wa wa wa wa",
              "raw": "'wa wa wa wa wa'",
              "start": 1282,
              "end": 1298
            },
            "optional": false,
            "computed": true,
            "start": 1278,
            "end": 1299
          },
          "definite": false,
          "start": 1273,
          "end": 1299
        }
      ],
      "declare": false,
      "start": 1269,
      "end": 1300
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ee",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1309,
                "end": 1312
              },
              "start": 1307,
              "end": 1312
            },
            "start": 1305,
            "end": 1312
          },
          "init": null,
          "definite": false,
          "start": 1305,
          "end": 1312
        }
      ],
      "declare": false,
      "start": 1301,
      "end": 1313
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ff",
            "optional": false,
            "typeAnnotation": null,
            "start": 1433,
            "end": 1435
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1438,
              "end": 1441
            },
            "property": {
              "type": "Literal",
              "value": "10",
              "raw": "'10'",
              "start": 1442,
              "end": 1446
            },
            "optional": false,
            "computed": true,
            "start": 1438,
            "end": 1447
          },
          "definite": false,
          "start": 1433,
          "end": 1447
        }
      ],
      "declare": false,
      "start": 1429,
      "end": 1448
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ff",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1457,
                "end": 1463
              },
              "start": 1455,
              "end": 1463
            },
            "start": 1453,
            "end": 1463
          },
          "init": null,
          "definite": false,
          "start": 1453,
          "end": 1463
        }
      ],
      "declare": false,
      "start": 1449,
      "end": 1464
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "gg",
            "optional": false,
            "typeAnnotation": null,
            "start": 1587,
            "end": 1589
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1592,
              "end": 1595
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 1596,
              "end": 1599
            },
            "optional": false,
            "computed": true,
            "start": 1592,
            "end": 1600
          },
          "definite": false,
          "start": 1587,
          "end": 1600
        }
      ],
      "declare": false,
      "start": 1583,
      "end": 1601
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "gg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1610,
                "end": 1613
              },
              "start": 1608,
              "end": 1613
            },
            "start": 1606,
            "end": 1613
          },
          "init": null,
          "definite": false,
          "start": 1606,
          "end": 1613
        }
      ],
      "declare": false,
      "start": 1602,
      "end": 1614
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "hh",
            "optional": false,
            "typeAnnotation": null,
            "start": 1713,
            "end": 1715
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 1718,
              "end": 1726
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3.0",
              "start": 1727,
              "end": 1730
            },
            "optional": false,
            "computed": true,
            "start": 1718,
            "end": 1731
          },
          "definite": false,
          "start": 1713,
          "end": 1731
        }
      ],
      "declare": false,
      "start": 1709,
      "end": 1732
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "hh",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1741,
                "end": 1747
              },
              "start": 1739,
              "end": 1747
            },
            "start": 1737,
            "end": 1747
          },
          "init": null,
          "definite": false,
          "start": 1737,
          "end": 1747
        }
      ],
      "declare": false,
      "start": 1733,
      "end": 1748
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ii",
            "optional": false,
            "typeAnnotation": null,
            "start": 1844,
            "end": 1846
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 1849,
              "end": 1857
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Compass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1858,
                "end": 1865
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "South",
                "optional": false,
                "typeAnnotation": null,
                "start": 1866,
                "end": 1871
              },
              "optional": false,
              "computed": false,
              "start": 1858,
              "end": 1871
            },
            "optional": false,
            "computed": true,
            "start": 1849,
            "end": 1872
          },
          "definite": false,
          "start": 1844,
          "end": 1872
        }
      ],
      "declare": false,
      "start": 1840,
      "end": 1873
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ii",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1882,
                "end": 1888
              },
              "start": 1880,
              "end": 1888
            },
            "start": 1878,
            "end": 1888
          },
          "init": null,
          "definite": false,
          "start": 1878,
          "end": 1888
        }
      ],
      "declare": false,
      "start": 1874,
      "end": 1889
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "jj",
            "optional": false,
            "typeAnnotation": null,
            "start": 1994,
            "end": 1996
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 1999,
              "end": 2007
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "anyVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2008,
              "end": 2014
            },
            "optional": false,
            "computed": true,
            "start": 1999,
            "end": 2015
          },
          "definite": false,
          "start": 1994,
          "end": 2015
        }
      ],
      "declare": false,
      "start": 1990,
      "end": 2016
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "jj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2025,
                "end": 2031
              },
              "start": 2023,
              "end": 2031
            },
            "start": 2021,
            "end": 2031
          },
          "init": null,
          "definite": false,
          "start": 2021,
          "end": 2031
        }
      ],
      "declare": false,
      "start": 2017,
      "end": 2032
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "kk",
            "optional": false,
            "typeAnnotation": null,
            "start": 2130,
            "end": 2132
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2135,
              "end": 2143
            },
            "property": {
              "type": "Literal",
              "value": "what",
              "raw": "'what'",
              "start": 2144,
              "end": 2150
            },
            "optional": false,
            "computed": true,
            "start": 2135,
            "end": 2151
          },
          "definite": false,
          "start": 2130,
          "end": 2151
        }
      ],
      "declare": false,
      "start": 2126,
      "end": 2152
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "kk",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2161,
                "end": 2164
              },
              "start": 2159,
              "end": 2164
            },
            "start": 2157,
            "end": 2164
          },
          "init": null,
          "definite": false,
          "start": 2157,
          "end": 2164
        }
      ],
      "declare": false,
      "start": 2153,
      "end": 2165
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ll",
            "optional": false,
            "typeAnnotation": null,
            "start": 2300,
            "end": 2302
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2305,
              "end": 2313
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "someObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 2314,
              "end": 2324
            },
            "optional": false,
            "computed": true,
            "start": 2305,
            "end": 2325
          },
          "definite": false,
          "start": 2300,
          "end": 2325
        }
      ],
      "declare": false,
      "start": 2296,
      "end": 2326
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mm",
            "optional": false,
            "typeAnnotation": null,
            "start": 2463,
            "end": 2465
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2468,
              "end": 2476
            },
            "property": {
              "type": "Literal",
              "value": "N",
              "raw": "'N'",
              "start": 2477,
              "end": 2480
            },
            "optional": false,
            "computed": true,
            "start": 2468,
            "end": 2481
          },
          "definite": false,
          "start": 2463,
          "end": 2481
        }
      ],
      "declare": false,
      "start": 2459,
      "end": 2482
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mm",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Compass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2491,
                  "end": 2498
                },
                "typeArguments": null,
                "start": 2491,
                "end": 2498
              },
              "start": 2489,
              "end": 2498
            },
            "start": 2487,
            "end": 2498
          },
          "init": null,
          "definite": false,
          "start": 2487,
          "end": 2498
        }
      ],
      "declare": false,
      "start": 2483,
      "end": 2499
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mm2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2504,
            "end": 2507
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2510,
              "end": 2518
            },
            "property": {
              "type": "Literal",
              "value": "zzz",
              "raw": "'zzz'",
              "start": 2519,
              "end": 2524
            },
            "optional": false,
            "computed": true,
            "start": 2510,
            "end": 2525
          },
          "definite": false,
          "start": 2504,
          "end": 2525
        }
      ],
      "declare": false,
      "start": 2500,
      "end": 2526
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mm2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Compass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2536,
                  "end": 2543
                },
                "typeArguments": null,
                "start": 2536,
                "end": 2543
              },
              "start": 2534,
              "end": 2543
            },
            "start": 2531,
            "end": 2543
          },
          "init": null,
          "definite": false,
          "start": 2531,
          "end": 2543
        }
      ],
      "declare": false,
      "start": 2527,
      "end": 2544
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nn",
            "optional": false,
            "typeAnnotation": null,
            "start": 2673,
            "end": 2675
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2678,
              "end": 2686
            },
            "property": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 2687,
              "end": 2689
            },
            "optional": false,
            "computed": true,
            "start": 2678,
            "end": 2690
          },
          "definite": false,
          "start": 2673,
          "end": 2690
        }
      ],
      "declare": false,
      "start": 2669,
      "end": 2691
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Compass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2700,
                  "end": 2707
                },
                "typeArguments": null,
                "start": 2700,
                "end": 2707
              },
              "start": 2698,
              "end": 2707
            },
            "start": 2696,
            "end": 2707
          },
          "init": null,
          "definite": false,
          "start": 2696,
          "end": 2707
        }
      ],
      "declare": false,
      "start": 2692,
      "end": 2708
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "oo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2834,
            "end": 2836
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2839,
              "end": 2847
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Compass",
                "optional": false,
                "typeAnnotation": null,
                "start": 2848,
                "end": 2855
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "East",
                "optional": false,
                "typeAnnotation": null,
                "start": 2856,
                "end": 2860
              },
              "optional": false,
              "computed": false,
              "start": 2848,
              "end": 2860
            },
            "optional": false,
            "computed": true,
            "start": 2839,
            "end": 2861
          },
          "definite": false,
          "start": 2834,
          "end": 2861
        }
      ],
      "declare": false,
      "start": 2830,
      "end": 2862
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "oo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Compass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2871,
                  "end": 2878
                },
                "typeArguments": null,
                "start": 2871,
                "end": 2878
              },
              "start": 2869,
              "end": 2878
            },
            "start": 2867,
            "end": 2878
          },
          "init": null,
          "definite": false,
          "start": 2867,
          "end": 2878
        }
      ],
      "declare": false,
      "start": 2863,
      "end": 2879
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pp",
            "optional": false,
            "typeAnnotation": null,
            "start": 3014,
            "end": 3016
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3019,
              "end": 3027
            },
            "property": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3029,
                "end": 3032
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3033,
                "end": 3037
              },
              "start": 3028,
              "end": 3037
            },
            "optional": false,
            "computed": true,
            "start": 3019,
            "end": 3038
          },
          "definite": false,
          "start": 3014,
          "end": 3038
        }
      ],
      "declare": false,
      "start": 3010,
      "end": 3039
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Compass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3048,
                  "end": 3055
                },
                "typeArguments": null,
                "start": 3048,
                "end": 3055
              },
              "start": 3046,
              "end": 3055
            },
            "start": 3044,
            "end": 3055
          },
          "init": null,
          "definite": false,
          "start": 3044,
          "end": 3055
        }
      ],
      "declare": false,
      "start": 3040,
      "end": 3056
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "qq",
            "optional": false,
            "typeAnnotation": null,
            "start": 3151,
            "end": 3153
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "noIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3156,
              "end": 3163
            },
            "property": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 3164,
              "end": 3167
            },
            "optional": false,
            "computed": true,
            "start": 3156,
            "end": 3168
          },
          "definite": false,
          "start": 3151,
          "end": 3168
        }
      ],
      "declare": false,
      "start": 3147,
      "end": 3169
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "qq",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3178,
                "end": 3181
              },
              "start": 3176,
              "end": 3181
            },
            "start": 3174,
            "end": 3181
          },
          "init": null,
          "definite": false,
          "start": 3174,
          "end": 3181
        }
      ],
      "declare": false,
      "start": 3170,
      "end": 3182
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rr",
            "optional": false,
            "typeAnnotation": null,
            "start": 3276,
            "end": 3278
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "noIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3281,
              "end": 3288
            },
            "property": {
              "type": "Literal",
              "value": "zzzz",
              "raw": "'zzzz'",
              "start": 3289,
              "end": 3295
            },
            "optional": false,
            "computed": true,
            "start": 3281,
            "end": 3296
          },
          "definite": false,
          "start": 3276,
          "end": 3296
        }
      ],
      "declare": false,
      "start": 3272,
      "end": 3297
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3306,
                "end": 3309
              },
              "start": 3304,
              "end": 3309
            },
            "start": 3302,
            "end": 3309
          },
          "init": null,
          "definite": false,
          "start": 3302,
          "end": 3309
        }
      ],
      "declare": false,
      "start": 3298,
      "end": 3310
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ss",
            "optional": false,
            "typeAnnotation": null,
            "start": 3402,
            "end": 3404
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "noIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3407,
              "end": 3414
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Compass",
                "optional": false,
                "typeAnnotation": null,
                "start": 3415,
                "end": 3422
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "South",
                "optional": false,
                "typeAnnotation": null,
                "start": 3423,
                "end": 3428
              },
              "optional": false,
              "computed": false,
              "start": 3415,
              "end": 3428
            },
            "optional": false,
            "computed": true,
            "start": 3407,
            "end": 3429
          },
          "definite": false,
          "start": 3402,
          "end": 3429
        }
      ],
      "declare": false,
      "start": 3398,
      "end": 3430
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ss",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3439,
                "end": 3442
              },
              "start": 3437,
              "end": 3442
            },
            "start": 3435,
            "end": 3442
          },
          "init": null,
          "definite": false,
          "start": 3435,
          "end": 3442
        }
      ],
      "declare": false,
      "start": 3431,
      "end": 3443
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tt",
            "optional": false,
            "typeAnnotation": null,
            "start": 3544,
            "end": 3546
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "noIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3549,
              "end": 3556
            },
            "property": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3558,
                "end": 3561
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3562,
                "end": 3566
              },
              "start": 3557,
              "end": 3566
            },
            "optional": false,
            "computed": true,
            "start": 3549,
            "end": 3567
          },
          "definite": false,
          "start": 3544,
          "end": 3567
        }
      ],
      "declare": false,
      "start": 3540,
      "end": 3568
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3577,
                "end": 3580
              },
              "start": 3575,
              "end": 3580
            },
            "start": 3573,
            "end": 3580
          },
          "init": null,
          "definite": false,
          "start": 3573,
          "end": 3580
        }
      ],
      "declare": false,
      "start": 3569,
      "end": 3581
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "uu",
            "optional": false,
            "typeAnnotation": null,
            "start": 3684,
            "end": 3686
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "noIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3689,
              "end": 3696
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "someObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 3697,
              "end": 3707
            },
            "optional": false,
            "computed": true,
            "start": 3689,
            "end": 3708
          },
          "definite": false,
          "start": 3684,
          "end": 3708
        }
      ],
      "declare": false,
      "start": 3680,
      "end": 3709
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "vv",
            "optional": false,
            "typeAnnotation": null,
            "start": 3844,
            "end": 3846
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "noIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3849,
              "end": 3856
            },
            "property": {
              "type": "Literal",
              "value": 32,
              "raw": "32",
              "start": 3857,
              "end": 3859
            },
            "optional": false,
            "computed": true,
            "start": 3849,
            "end": 3860
          },
          "definite": false,
          "start": 3844,
          "end": 3860
        }
      ],
      "declare": false,
      "start": 3840,
      "end": 3861
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "vv",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3870,
                "end": 3873
              },
              "start": 3868,
              "end": 3873
            },
            "start": 3866,
            "end": 3873
          },
          "init": null,
          "definite": false,
          "start": 3866,
          "end": 3873
        }
      ],
      "declare": false,
      "start": 3862,
      "end": 3874
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ww",
            "optional": false,
            "typeAnnotation": null,
            "start": 3997,
            "end": 3999
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4002,
              "end": 4011
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Compass",
                "optional": false,
                "typeAnnotation": null,
                "start": 4012,
                "end": 4019
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "East",
                "optional": false,
                "typeAnnotation": null,
                "start": 4020,
                "end": 4024
              },
              "optional": false,
              "computed": false,
              "start": 4012,
              "end": 4024
            },
            "optional": false,
            "computed": true,
            "start": 4002,
            "end": 4025
          },
          "definite": false,
          "start": 3997,
          "end": 4025
        }
      ],
      "declare": false,
      "start": 3993,
      "end": 4026
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ww",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4035,
                  "end": 4036
                },
                "typeArguments": null,
                "start": 4035,
                "end": 4036
              },
              "start": 4033,
              "end": 4036
            },
            "start": 4031,
            "end": 4036
          },
          "init": null,
          "definite": false,
          "start": 4031,
          "end": 4036
        }
      ],
      "declare": false,
      "start": 4027,
      "end": 4037
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": null,
            "start": 4169,
            "end": 4171
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4174,
              "end": 4183
            },
            "property": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4185,
                "end": 4188
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4189,
                "end": 4193
              },
              "start": 4184,
              "end": 4193
            },
            "optional": false,
            "computed": true,
            "start": 4174,
            "end": 4194
          },
          "definite": false,
          "start": 4169,
          "end": 4194
        }
      ],
      "declare": false,
      "start": 4165,
      "end": 4195
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4204,
                  "end": 4205
                },
                "typeArguments": null,
                "start": 4204,
                "end": 4205
              },
              "start": 4202,
              "end": 4205
            },
            "start": 4200,
            "end": 4205
          },
          "init": null,
          "definite": false,
          "start": 4200,
          "end": 4205
        }
      ],
      "declare": false,
      "start": 4196,
      "end": 4206
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": null,
            "start": 4331,
            "end": 4333
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4336,
              "end": 4345
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 4346,
              "end": 4351
            },
            "optional": false,
            "computed": true,
            "start": 4336,
            "end": 4352
          },
          "definite": false,
          "start": 4331,
          "end": 4352
        }
      ],
      "declare": false,
      "start": 4327,
      "end": 4353
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4362,
                  "end": 4363
                },
                "typeArguments": null,
                "start": 4362,
                "end": 4363
              },
              "start": 4360,
              "end": 4363
            },
            "start": 4358,
            "end": 4363
          },
          "init": null,
          "definite": false,
          "start": 4358,
          "end": 4363
        }
      ],
      "declare": false,
      "start": 4354,
      "end": 4364
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zz",
            "optional": false,
            "typeAnnotation": null,
            "start": 4497,
            "end": 4499
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4502,
              "end": 4511
            },
            "property": {
              "type": "Literal",
              "value": "1.0",
              "raw": "'1.0'",
              "start": 4512,
              "end": 4517
            },
            "optional": false,
            "computed": true,
            "start": 4502,
            "end": 4518
          },
          "definite": false,
          "start": 4497,
          "end": 4518
        }
      ],
      "declare": false,
      "start": 4493,
      "end": 4519
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4528,
                  "end": 4529
                },
                "typeArguments": null,
                "start": 4528,
                "end": 4529
              },
              "start": 4526,
              "end": 4529
            },
            "start": 4524,
            "end": 4529
          },
          "init": null,
          "definite": false,
          "start": 4524,
          "end": 4529
        }
      ],
      "declare": false,
      "start": 4520,
      "end": 4530
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zzzz",
            "optional": false,
            "typeAnnotation": null,
            "start": 4692,
            "end": 4696
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4699,
              "end": 4708
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "someObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 4709,
              "end": 4719
            },
            "optional": false,
            "computed": true,
            "start": 4699,
            "end": 4720
          },
          "definite": false,
          "start": 4692,
          "end": 4720
        }
      ],
      "declare": false,
      "start": 4688,
      "end": 4721
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4736,
            "end": 4738
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4741,
              "end": 4749
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 4750,
              "end": 4764
            },
            "optional": false,
            "computed": true,
            "start": 4741,
            "end": 4765
          },
          "definite": false,
          "start": 4736,
          "end": 4765
        }
      ],
      "declare": false,
      "start": 4732,
      "end": 4766
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4775,
                "end": 4778
              },
              "start": 4773,
              "end": 4778
            },
            "start": 4771,
            "end": 4778
          },
          "init": null,
          "definite": false,
          "start": 4771,
          "end": 4778
        }
      ],
      "declare": false,
      "start": 4767,
      "end": 4779
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4785,
            "end": 4787
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4790,
              "end": 4798
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 4799,
              "end": 4813
            },
            "optional": false,
            "computed": true,
            "start": 4790,
            "end": 4814
          },
          "definite": false,
          "start": 4785,
          "end": 4814
        }
      ],
      "declare": false,
      "start": 4781,
      "end": 4815
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Compass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4824,
                  "end": 4831
                },
                "typeArguments": null,
                "start": 4824,
                "end": 4831
              },
              "start": 4822,
              "end": 4831
            },
            "start": 4820,
            "end": 4831
          },
          "init": null,
          "definite": false,
          "start": 4820,
          "end": 4831
        }
      ],
      "declare": false,
      "start": 4816,
      "end": 4832
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4838,
            "end": 4840
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4843,
              "end": 4852
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 4853,
              "end": 4867
            },
            "optional": false,
            "computed": true,
            "start": 4843,
            "end": 4868
          },
          "definite": false,
          "start": 4838,
          "end": 4868
        }
      ],
      "declare": false,
      "start": 4834,
      "end": 4869
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4878,
                  "end": 4879
                },
                "typeArguments": null,
                "start": 4878,
                "end": 4879
              },
              "start": 4876,
              "end": 4879
            },
            "start": 4874,
            "end": 4879
          },
          "init": null,
          "definite": false,
          "start": 4874,
          "end": 4879
        }
      ],
      "declare": false,
      "start": 4870,
      "end": 4880
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4880
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 17,
    "end": 23,
    "range": [
      17,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 27,
    "end": 32,
    "range": [
      27,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 35,
    "end": 42,
    "range": [
      35,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 64,
    "end": 68,
    "range": [
      64,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 69,
    "end": 76,
    "range": [
      69,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "North",
    "start": 83,
    "end": 88,
    "range": [
      83,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "South",
    "start": 90,
    "end": 95,
    "range": [
      90,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "East",
    "start": 97,
    "end": 101,
    "range": [
      97,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "West",
    "start": 103,
    "end": 107,
    "range": [
      103,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 111,
    "end": 114,
    "range": [
      111,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 115,
    "end": 123,
    "range": [
      115,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 131,
    "end": 137,
    "range": [
      131,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 140,
    "end": 146,
    "range": [
      140,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "String",
    "value": "'three'",
    "start": 156,
    "end": 163,
    "range": [
      156,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "String",
    "value": "'three'",
    "start": 165,
    "end": 172,
    "range": [
      165,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "String",
    "value": "'three'",
    "start": 174,
    "end": 181,
    "range": [
      174,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 185,
    "end": 188,
    "range": [
      185,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 189,
    "end": 197,
    "range": [
      189,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 205,
    "end": 211,
    "range": [
      205,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 214,
    "end": 221,
    "range": [
      214,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "String",
    "value": "'N'",
    "start": 228,
    "end": 231,
    "range": [
      228,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 233,
    "end": 240,
    "range": [
      233,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "North",
    "start": 241,
    "end": 246,
    "range": [
      241,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "String",
    "value": "'E'",
    "start": 248,
    "end": 251,
    "range": [
      248,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 253,
    "end": 260,
    "range": [
      253,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "East",
    "start": 261,
    "end": 265,
    "range": [
      261,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 269,
    "end": 272,
    "range": [
      269,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 273,
    "end": 282,
    "range": [
      273,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 302,
    "end": 308,
    "range": [
      302,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 326,
    "end": 332,
    "range": [
      326,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 346,
    "end": 354,
    "range": [
      346,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 355,
    "end": 362,
    "range": [
      355,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 370,
    "end": 373,
    "range": [
      370,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 374,
    "end": 377,
    "range": [
      374,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 386,
    "end": 388,
    "range": [
      386,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "String",
    "value": "'ten'",
    "start": 390,
    "end": 395,
    "range": [
      390,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 404,
    "end": 411,
    "range": [
      404,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 420,
    "end": 422,
    "range": [
      420,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "String",
    "value": "'world'",
    "start": 436,
    "end": 443,
    "range": [
      436,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 448,
    "end": 450,
    "range": [
      448,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 458,
    "end": 460,
    "range": [
      458,
      460
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 461,
    "end": 466,
    "range": [
      461,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "String",
    "value": "'literal property'",
    "start": 474,
    "end": 492,
    "range": [
      474,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 494,
    "end": 497,
    "range": [
      494,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 501,
    "end": 504,
    "range": [
      501,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 505,
    "end": 511,
    "range": [
      505,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 513,
    "end": 516,
    "range": [
      513,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 523,
    "end": 526,
    "range": [
      523,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 527,
    "end": 541,
    "range": [
      527,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 543,
    "end": 549,
    "range": [
      543,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 552,
    "end": 558,
    "range": [
      552,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 560,
    "end": 563,
    "range": [
      560,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "someObject",
    "start": 564,
    "end": 574,
    "range": [
      564,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 578,
    "end": 582,
    "range": [
      578,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 584,
    "end": 590,
    "range": [
      584,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 626,
    "end": 629,
    "range": [
      626,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 680,
    "end": 686,
    "range": [
      680,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 691,
    "end": 697,
    "range": [
      691,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 702,
    "end": 705,
    "range": [
      702,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 710,
    "end": 716,
    "range": [
      710,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 771,
    "end": 774,
    "range": [
      771,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 775,
    "end": 777,
    "range": [
      775,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 780,
    "end": 783,
    "range": [
      780,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 863,
    "end": 866,
    "range": [
      863,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 867,
    "end": 869,
    "range": [
      867,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 872,
    "end": 875,
    "range": [
      872,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 876,
    "end": 890,
    "range": [
      876,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 975,
    "end": 978,
    "range": [
      975,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "cc",
    "start": 979,
    "end": 981,
    "range": [
      979,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 984,
    "end": 987,
    "range": [
      984,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "qqq",
    "start": 988,
    "end": 991,
    "range": [
      988,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1109,
    "end": 1112,
    "range": [
      1109,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "dd",
    "start": 1113,
    "end": 1115,
    "range": [
      1113,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1118,
    "end": 1121,
    "range": [
      1118,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "String",
    "value": "'literal property'",
    "start": 1122,
    "end": 1140,
    "range": [
      1122,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1143,
    "end": 1146,
    "range": [
      1143,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "dd",
    "start": 1147,
    "end": 1149,
    "range": [
      1147,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1151,
    "end": 1157,
    "range": [
      1151,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1269,
    "end": 1272,
    "range": [
      1269,
      1272
    ]
  },
  {
    "type": "Identifier",
    "value": "ee",
    "start": 1273,
    "end": 1275,
    "range": [
      1273,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1278,
    "end": 1281,
    "range": [
      1278,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "String",
    "value": "'wa wa wa wa wa'",
    "start": 1282,
    "end": 1298,
    "range": [
      1282,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1301,
    "end": 1304,
    "range": [
      1301,
      1304
    ]
  },
  {
    "type": "Identifier",
    "value": "ee",
    "start": 1305,
    "end": 1307,
    "range": [
      1305,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1309,
    "end": 1312,
    "range": [
      1309,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1429,
    "end": 1432,
    "range": [
      1429,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "ff",
    "start": 1433,
    "end": 1435,
    "range": [
      1433,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1438,
    "end": 1441,
    "range": [
      1438,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "String",
    "value": "'10'",
    "start": 1442,
    "end": 1446,
    "range": [
      1442,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1449,
    "end": 1452,
    "range": [
      1449,
      1452
    ]
  },
  {
    "type": "Identifier",
    "value": "ff",
    "start": 1453,
    "end": 1455,
    "range": [
      1453,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1457,
    "end": 1463,
    "range": [
      1457,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1583,
    "end": 1586,
    "range": [
      1583,
      1586
    ]
  },
  {
    "type": "Identifier",
    "value": "gg",
    "start": 1587,
    "end": 1589,
    "range": [
      1587,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1592,
    "end": 1595,
    "range": [
      1592,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1596,
    "end": 1599,
    "range": [
      1596,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1602,
    "end": 1605,
    "range": [
      1602,
      1605
    ]
  },
  {
    "type": "Identifier",
    "value": "gg",
    "start": 1606,
    "end": 1608,
    "range": [
      1606,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1610,
    "end": 1613,
    "range": [
      1610,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1709,
    "end": 1712,
    "range": [
      1709,
      1712
    ]
  },
  {
    "type": "Identifier",
    "value": "hh",
    "start": 1713,
    "end": 1715,
    "range": [
      1713,
      1715
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 1718,
    "end": 1726,
    "range": [
      1718,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Numeric",
    "value": "3.0",
    "start": 1727,
    "end": 1730,
    "range": [
      1727,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1733,
    "end": 1736,
    "range": [
      1733,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "hh",
    "start": 1737,
    "end": 1739,
    "range": [
      1737,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1741,
    "end": 1747,
    "range": [
      1741,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1840,
    "end": 1843,
    "range": [
      1840,
      1843
    ]
  },
  {
    "type": "Identifier",
    "value": "ii",
    "start": 1844,
    "end": 1846,
    "range": [
      1844,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 1849,
    "end": 1857,
    "range": [
      1849,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 1858,
    "end": 1865,
    "range": [
      1858,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "South",
    "start": 1866,
    "end": 1871,
    "range": [
      1866,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1874,
    "end": 1877,
    "range": [
      1874,
      1877
    ]
  },
  {
    "type": "Identifier",
    "value": "ii",
    "start": 1878,
    "end": 1880,
    "range": [
      1878,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1882,
    "end": 1888,
    "range": [
      1882,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1990,
    "end": 1993,
    "range": [
      1990,
      1993
    ]
  },
  {
    "type": "Identifier",
    "value": "jj",
    "start": 1994,
    "end": 1996,
    "range": [
      1994,
      1996
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 1999,
    "end": 2007,
    "range": [
      1999,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 2008,
    "end": 2014,
    "range": [
      2008,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2017,
    "end": 2020,
    "range": [
      2017,
      2020
    ]
  },
  {
    "type": "Identifier",
    "value": "jj",
    "start": 2021,
    "end": 2023,
    "range": [
      2021,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2025,
    "end": 2031,
    "range": [
      2025,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2126,
    "end": 2129,
    "range": [
      2126,
      2129
    ]
  },
  {
    "type": "Identifier",
    "value": "kk",
    "start": 2130,
    "end": 2132,
    "range": [
      2130,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 2135,
    "end": 2143,
    "range": [
      2135,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "String",
    "value": "'what'",
    "start": 2144,
    "end": 2150,
    "range": [
      2144,
      2150
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2153,
    "end": 2156,
    "range": [
      2153,
      2156
    ]
  },
  {
    "type": "Identifier",
    "value": "kk",
    "start": 2157,
    "end": 2159,
    "range": [
      2157,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2161,
    "end": 2164,
    "range": [
      2161,
      2164
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2296,
    "end": 2299,
    "range": [
      2296,
      2299
    ]
  },
  {
    "type": "Identifier",
    "value": "ll",
    "start": 2300,
    "end": 2302,
    "range": [
      2300,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 2305,
    "end": 2313,
    "range": [
      2305,
      2313
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2313,
    "end": 2314,
    "range": [
      2313,
      2314
    ]
  },
  {
    "type": "Identifier",
    "value": "someObject",
    "start": 2314,
    "end": 2324,
    "range": [
      2314,
      2324
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2324,
    "end": 2325,
    "range": [
      2324,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2459,
    "end": 2462,
    "range": [
      2459,
      2462
    ]
  },
  {
    "type": "Identifier",
    "value": "mm",
    "start": 2463,
    "end": 2465,
    "range": [
      2463,
      2465
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2466,
    "end": 2467,
    "range": [
      2466,
      2467
    ]
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 2468,
    "end": 2476,
    "range": [
      2468,
      2476
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2476,
    "end": 2477,
    "range": [
      2476,
      2477
    ]
  },
  {
    "type": "String",
    "value": "'N'",
    "start": 2477,
    "end": 2480,
    "range": [
      2477,
      2480
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2480,
    "end": 2481,
    "range": [
      2480,
      2481
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2481,
    "end": 2482,
    "range": [
      2481,
      2482
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2483,
    "end": 2486,
    "range": [
      2483,
      2486
    ]
  },
  {
    "type": "Identifier",
    "value": "mm",
    "start": 2487,
    "end": 2489,
    "range": [
      2487,
      2489
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2489,
    "end": 2490,
    "range": [
      2489,
      2490
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 2491,
    "end": 2498,
    "range": [
      2491,
      2498
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2500,
    "end": 2503,
    "range": [
      2500,
      2503
    ]
  },
  {
    "type": "Identifier",
    "value": "mm2",
    "start": 2504,
    "end": 2507,
    "range": [
      2504,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2508,
    "end": 2509,
    "range": [
      2508,
      2509
    ]
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 2510,
    "end": 2518,
    "range": [
      2510,
      2518
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2518,
    "end": 2519,
    "range": [
      2518,
      2519
    ]
  },
  {
    "type": "String",
    "value": "'zzz'",
    "start": 2519,
    "end": 2524,
    "range": [
      2519,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2525,
    "end": 2526,
    "range": [
      2525,
      2526
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2527,
    "end": 2530,
    "range": [
      2527,
      2530
    ]
  },
  {
    "type": "Identifier",
    "value": "mm2",
    "start": 2531,
    "end": 2534,
    "range": [
      2531,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 2536,
    "end": 2543,
    "range": [
      2536,
      2543
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2543,
    "end": 2544,
    "range": [
      2543,
      2544
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2669,
    "end": 2672,
    "range": [
      2669,
      2672
    ]
  },
  {
    "type": "Identifier",
    "value": "nn",
    "start": 2673,
    "end": 2675,
    "range": [
      2673,
      2675
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2676,
    "end": 2677,
    "range": [
      2676,
      2677
    ]
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 2678,
    "end": 2686,
    "range": [
      2678,
      2686
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2686,
    "end": 2687,
    "range": [
      2686,
      2687
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2687,
    "end": 2689,
    "range": [
      2687,
      2689
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2689,
    "end": 2690,
    "range": [
      2689,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2692,
    "end": 2695,
    "range": [
      2692,
      2695
    ]
  },
  {
    "type": "Identifier",
    "value": "nn",
    "start": 2696,
    "end": 2698,
    "range": [
      2696,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 2700,
    "end": 2707,
    "range": [
      2700,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2830,
    "end": 2833,
    "range": [
      2830,
      2833
    ]
  },
  {
    "type": "Identifier",
    "value": "oo",
    "start": 2834,
    "end": 2836,
    "range": [
      2834,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 2839,
    "end": 2847,
    "range": [
      2839,
      2847
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2847,
    "end": 2848,
    "range": [
      2847,
      2848
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 2848,
    "end": 2855,
    "range": [
      2848,
      2855
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Identifier",
    "value": "East",
    "start": 2856,
    "end": 2860,
    "range": [
      2856,
      2860
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2863,
    "end": 2866,
    "range": [
      2863,
      2866
    ]
  },
  {
    "type": "Identifier",
    "value": "oo",
    "start": 2867,
    "end": 2869,
    "range": [
      2867,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 2871,
    "end": 2878,
    "range": [
      2871,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3010,
    "end": 3013,
    "range": [
      3010,
      3013
    ]
  },
  {
    "type": "Identifier",
    "value": "pp",
    "start": 3014,
    "end": 3016,
    "range": [
      3014,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3017,
    "end": 3018,
    "range": [
      3017,
      3018
    ]
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 3019,
    "end": 3027,
    "range": [
      3019,
      3027
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3027,
    "end": 3028,
    "range": [
      3027,
      3028
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3028,
    "end": 3029,
    "range": [
      3028,
      3029
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3029,
    "end": 3032,
    "range": [
      3029,
      3032
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3032,
    "end": 3033,
    "range": [
      3032,
      3033
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3033,
    "end": 3037,
    "range": [
      3033,
      3037
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3037,
    "end": 3038,
    "range": [
      3037,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3040,
    "end": 3043,
    "range": [
      3040,
      3043
    ]
  },
  {
    "type": "Identifier",
    "value": "pp",
    "start": 3044,
    "end": 3046,
    "range": [
      3044,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 3048,
    "end": 3055,
    "range": [
      3048,
      3055
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3055,
    "end": 3056,
    "range": [
      3055,
      3056
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3147,
    "end": 3150,
    "range": [
      3147,
      3150
    ]
  },
  {
    "type": "Identifier",
    "value": "qq",
    "start": 3151,
    "end": 3153,
    "range": [
      3151,
      3153
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3154,
    "end": 3155,
    "range": [
      3154,
      3155
    ]
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 3156,
    "end": 3163,
    "range": [
      3156,
      3163
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3163,
    "end": 3164,
    "range": [
      3163,
      3164
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3164,
    "end": 3167,
    "range": [
      3164,
      3167
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3168,
    "end": 3169,
    "range": [
      3168,
      3169
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3170,
    "end": 3173,
    "range": [
      3170,
      3173
    ]
  },
  {
    "type": "Identifier",
    "value": "qq",
    "start": 3174,
    "end": 3176,
    "range": [
      3174,
      3176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3176,
    "end": 3177,
    "range": [
      3176,
      3177
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3178,
    "end": 3181,
    "range": [
      3178,
      3181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3181,
    "end": 3182,
    "range": [
      3181,
      3182
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3272,
    "end": 3275,
    "range": [
      3272,
      3275
    ]
  },
  {
    "type": "Identifier",
    "value": "rr",
    "start": 3276,
    "end": 3278,
    "range": [
      3276,
      3278
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3279,
    "end": 3280,
    "range": [
      3279,
      3280
    ]
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 3281,
    "end": 3288,
    "range": [
      3281,
      3288
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3288,
    "end": 3289,
    "range": [
      3288,
      3289
    ]
  },
  {
    "type": "String",
    "value": "'zzzz'",
    "start": 3289,
    "end": 3295,
    "range": [
      3289,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3295,
    "end": 3296,
    "range": [
      3295,
      3296
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3296,
    "end": 3297,
    "range": [
      3296,
      3297
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3298,
    "end": 3301,
    "range": [
      3298,
      3301
    ]
  },
  {
    "type": "Identifier",
    "value": "rr",
    "start": 3302,
    "end": 3304,
    "range": [
      3302,
      3304
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3304,
    "end": 3305,
    "range": [
      3304,
      3305
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3306,
    "end": 3309,
    "range": [
      3306,
      3309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3309,
    "end": 3310,
    "range": [
      3309,
      3310
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3398,
    "end": 3401,
    "range": [
      3398,
      3401
    ]
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 3402,
    "end": 3404,
    "range": [
      3402,
      3404
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3405,
    "end": 3406,
    "range": [
      3405,
      3406
    ]
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 3407,
    "end": 3414,
    "range": [
      3407,
      3414
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3414,
    "end": 3415,
    "range": [
      3414,
      3415
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 3415,
    "end": 3422,
    "range": [
      3415,
      3422
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3422,
    "end": 3423,
    "range": [
      3422,
      3423
    ]
  },
  {
    "type": "Identifier",
    "value": "South",
    "start": 3423,
    "end": 3428,
    "range": [
      3423,
      3428
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3428,
    "end": 3429,
    "range": [
      3428,
      3429
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3429,
    "end": 3430,
    "range": [
      3429,
      3430
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3431,
    "end": 3434,
    "range": [
      3431,
      3434
    ]
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 3435,
    "end": 3437,
    "range": [
      3435,
      3437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3437,
    "end": 3438,
    "range": [
      3437,
      3438
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3439,
    "end": 3442,
    "range": [
      3439,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3540,
    "end": 3543,
    "range": [
      3540,
      3543
    ]
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 3544,
    "end": 3546,
    "range": [
      3544,
      3546
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3547,
    "end": 3548,
    "range": [
      3547,
      3548
    ]
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 3549,
    "end": 3556,
    "range": [
      3549,
      3556
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3556,
    "end": 3557,
    "range": [
      3556,
      3557
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3557,
    "end": 3558,
    "range": [
      3557,
      3558
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3558,
    "end": 3561,
    "range": [
      3558,
      3561
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3561,
    "end": 3562,
    "range": [
      3561,
      3562
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3562,
    "end": 3566,
    "range": [
      3562,
      3566
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3566,
    "end": 3567,
    "range": [
      3566,
      3567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3567,
    "end": 3568,
    "range": [
      3567,
      3568
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3569,
    "end": 3572,
    "range": [
      3569,
      3572
    ]
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 3573,
    "end": 3575,
    "range": [
      3573,
      3575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3577,
    "end": 3580,
    "range": [
      3577,
      3580
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3580,
    "end": 3581,
    "range": [
      3580,
      3581
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3680,
    "end": 3683,
    "range": [
      3680,
      3683
    ]
  },
  {
    "type": "Identifier",
    "value": "uu",
    "start": 3684,
    "end": 3686,
    "range": [
      3684,
      3686
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3687,
    "end": 3688,
    "range": [
      3687,
      3688
    ]
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 3689,
    "end": 3696,
    "range": [
      3689,
      3696
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3696,
    "end": 3697,
    "range": [
      3696,
      3697
    ]
  },
  {
    "type": "Identifier",
    "value": "someObject",
    "start": 3697,
    "end": 3707,
    "range": [
      3697,
      3707
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3707,
    "end": 3708,
    "range": [
      3707,
      3708
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3708,
    "end": 3709,
    "range": [
      3708,
      3709
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3840,
    "end": 3843,
    "range": [
      3840,
      3843
    ]
  },
  {
    "type": "Identifier",
    "value": "vv",
    "start": 3844,
    "end": 3846,
    "range": [
      3844,
      3846
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3847,
    "end": 3848,
    "range": [
      3847,
      3848
    ]
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 3849,
    "end": 3856,
    "range": [
      3849,
      3856
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3856,
    "end": 3857,
    "range": [
      3856,
      3857
    ]
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 3857,
    "end": 3859,
    "range": [
      3857,
      3859
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3859,
    "end": 3860,
    "range": [
      3859,
      3860
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3860,
    "end": 3861,
    "range": [
      3860,
      3861
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3862,
    "end": 3865,
    "range": [
      3862,
      3865
    ]
  },
  {
    "type": "Identifier",
    "value": "vv",
    "start": 3866,
    "end": 3868,
    "range": [
      3866,
      3868
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3868,
    "end": 3869,
    "range": [
      3868,
      3869
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3870,
    "end": 3873,
    "range": [
      3870,
      3873
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3873,
    "end": 3874,
    "range": [
      3873,
      3874
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3993,
    "end": 3996,
    "range": [
      3993,
      3996
    ]
  },
  {
    "type": "Identifier",
    "value": "ww",
    "start": 3997,
    "end": 3999,
    "range": [
      3997,
      3999
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4000,
    "end": 4001,
    "range": [
      4000,
      4001
    ]
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 4002,
    "end": 4011,
    "range": [
      4002,
      4011
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4011,
    "end": 4012,
    "range": [
      4011,
      4012
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 4012,
    "end": 4019,
    "range": [
      4012,
      4019
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4019,
    "end": 4020,
    "range": [
      4019,
      4020
    ]
  },
  {
    "type": "Identifier",
    "value": "East",
    "start": 4020,
    "end": 4024,
    "range": [
      4020,
      4024
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4024,
    "end": 4025,
    "range": [
      4024,
      4025
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4025,
    "end": 4026,
    "range": [
      4025,
      4026
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4027,
    "end": 4030,
    "range": [
      4027,
      4030
    ]
  },
  {
    "type": "Identifier",
    "value": "ww",
    "start": 4031,
    "end": 4033,
    "range": [
      4031,
      4033
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4033,
    "end": 4034,
    "range": [
      4033,
      4034
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4035,
    "end": 4036,
    "range": [
      4035,
      4036
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4036,
    "end": 4037,
    "range": [
      4036,
      4037
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4165,
    "end": 4168,
    "range": [
      4165,
      4168
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 4169,
    "end": 4171,
    "range": [
      4169,
      4171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4172,
    "end": 4173,
    "range": [
      4172,
      4173
    ]
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 4174,
    "end": 4183,
    "range": [
      4174,
      4183
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4183,
    "end": 4184,
    "range": [
      4183,
      4184
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4184,
    "end": 4185,
    "range": [
      4184,
      4185
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4185,
    "end": 4188,
    "range": [
      4185,
      4188
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4188,
    "end": 4189,
    "range": [
      4188,
      4189
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4189,
    "end": 4193,
    "range": [
      4189,
      4193
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4193,
    "end": 4194,
    "range": [
      4193,
      4194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4194,
    "end": 4195,
    "range": [
      4194,
      4195
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4196,
    "end": 4199,
    "range": [
      4196,
      4199
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 4200,
    "end": 4202,
    "range": [
      4200,
      4202
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4202,
    "end": 4203,
    "range": [
      4202,
      4203
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4204,
    "end": 4205,
    "range": [
      4204,
      4205
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4205,
    "end": 4206,
    "range": [
      4205,
      4206
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4327,
    "end": 4330,
    "range": [
      4327,
      4330
    ]
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 4331,
    "end": 4333,
    "range": [
      4331,
      4333
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4334,
    "end": 4335,
    "range": [
      4334,
      4335
    ]
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 4336,
    "end": 4345,
    "range": [
      4336,
      4345
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4345,
    "end": 4346,
    "range": [
      4345,
      4346
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4346,
    "end": 4351,
    "range": [
      4346,
      4351
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4351,
    "end": 4352,
    "range": [
      4351,
      4352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4352,
    "end": 4353,
    "range": [
      4352,
      4353
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4354,
    "end": 4357,
    "range": [
      4354,
      4357
    ]
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 4358,
    "end": 4360,
    "range": [
      4358,
      4360
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4360,
    "end": 4361,
    "range": [
      4360,
      4361
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4362,
    "end": 4363,
    "range": [
      4362,
      4363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4363,
    "end": 4364,
    "range": [
      4363,
      4364
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4493,
    "end": 4496,
    "range": [
      4493,
      4496
    ]
  },
  {
    "type": "Identifier",
    "value": "zz",
    "start": 4497,
    "end": 4499,
    "range": [
      4497,
      4499
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4500,
    "end": 4501,
    "range": [
      4500,
      4501
    ]
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 4502,
    "end": 4511,
    "range": [
      4502,
      4511
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4511,
    "end": 4512,
    "range": [
      4511,
      4512
    ]
  },
  {
    "type": "String",
    "value": "'1.0'",
    "start": 4512,
    "end": 4517,
    "range": [
      4512,
      4517
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4517,
    "end": 4518,
    "range": [
      4517,
      4518
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4518,
    "end": 4519,
    "range": [
      4518,
      4519
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4520,
    "end": 4523,
    "range": [
      4520,
      4523
    ]
  },
  {
    "type": "Identifier",
    "value": "zz",
    "start": 4524,
    "end": 4526,
    "range": [
      4524,
      4526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4526,
    "end": 4527,
    "range": [
      4526,
      4527
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4528,
    "end": 4529,
    "range": [
      4528,
      4529
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4529,
    "end": 4530,
    "range": [
      4529,
      4530
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4688,
    "end": 4691,
    "range": [
      4688,
      4691
    ]
  },
  {
    "type": "Identifier",
    "value": "zzzz",
    "start": 4692,
    "end": 4696,
    "range": [
      4692,
      4696
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4697,
    "end": 4698,
    "range": [
      4697,
      4698
    ]
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 4699,
    "end": 4708,
    "range": [
      4699,
      4708
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4708,
    "end": 4709,
    "range": [
      4708,
      4709
    ]
  },
  {
    "type": "Identifier",
    "value": "someObject",
    "start": 4709,
    "end": 4719,
    "range": [
      4709,
      4719
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4719,
    "end": 4720,
    "range": [
      4719,
      4720
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4720,
    "end": 4721,
    "range": [
      4720,
      4721
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4732,
    "end": 4735,
    "range": [
      4732,
      4735
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 4736,
    "end": 4738,
    "range": [
      4736,
      4738
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4739,
    "end": 4740,
    "range": [
      4739,
      4740
    ]
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 4741,
    "end": 4749,
    "range": [
      4741,
      4749
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4749,
    "end": 4750,
    "range": [
      4749,
      4750
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 4750,
    "end": 4764,
    "range": [
      4750,
      4764
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4764,
    "end": 4765,
    "range": [
      4764,
      4765
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4765,
    "end": 4766,
    "range": [
      4765,
      4766
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4767,
    "end": 4770,
    "range": [
      4767,
      4770
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 4771,
    "end": 4773,
    "range": [
      4771,
      4773
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4773,
    "end": 4774,
    "range": [
      4773,
      4774
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4775,
    "end": 4778,
    "range": [
      4775,
      4778
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4778,
    "end": 4779,
    "range": [
      4778,
      4779
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4781,
    "end": 4784,
    "range": [
      4781,
      4784
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 4785,
    "end": 4787,
    "range": [
      4785,
      4787
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4788,
    "end": 4789,
    "range": [
      4788,
      4789
    ]
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 4790,
    "end": 4798,
    "range": [
      4790,
      4798
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4798,
    "end": 4799,
    "range": [
      4798,
      4799
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 4799,
    "end": 4813,
    "range": [
      4799,
      4813
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4813,
    "end": 4814,
    "range": [
      4813,
      4814
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4814,
    "end": 4815,
    "range": [
      4814,
      4815
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4816,
    "end": 4819,
    "range": [
      4816,
      4819
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 4820,
    "end": 4822,
    "range": [
      4820,
      4822
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4822,
    "end": 4823,
    "range": [
      4822,
      4823
    ]
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 4824,
    "end": 4831,
    "range": [
      4824,
      4831
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4831,
    "end": 4832,
    "range": [
      4831,
      4832
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4834,
    "end": 4837,
    "range": [
      4834,
      4837
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 4838,
    "end": 4840,
    "range": [
      4838,
      4840
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4841,
    "end": 4842,
    "range": [
      4841,
      4842
    ]
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 4843,
    "end": 4852,
    "range": [
      4843,
      4852
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4852,
    "end": 4853,
    "range": [
      4852,
      4853
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 4853,
    "end": 4867,
    "range": [
      4853,
      4867
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4867,
    "end": 4868,
    "range": [
      4867,
      4868
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4868,
    "end": 4869,
    "range": [
      4868,
      4869
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4870,
    "end": 4873,
    "range": [
      4870,
      4873
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 4874,
    "end": 4876,
    "range": [
      4874,
      4876
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4876,
    "end": 4877,
    "range": [
      4876,
      4877
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4878,
    "end": 4879,
    "range": [
      4878,
      4879
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4879,
    "end": 4880,
    "range": [
      4879,
      4880
    ]
  }
]
```
