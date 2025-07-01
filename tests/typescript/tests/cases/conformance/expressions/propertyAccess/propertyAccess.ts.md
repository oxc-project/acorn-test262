__ESTREE_TEST__:PASS:
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
