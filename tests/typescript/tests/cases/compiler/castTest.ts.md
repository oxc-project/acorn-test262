__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
              },
              "start": 6,
              "end": 11
            },
            "start": 4,
            "end": 11
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 14,
            "end": 15
          },
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "start": 25,
            "end": 35
          },
          "definite": false,
          "start": 21,
          "end": 35
        }
      ],
      "declare": false,
      "start": 17,
      "end": 36
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 50
            },
            "start": 45,
            "end": 50
          },
          "definite": false,
          "start": 41,
          "end": 50
        }
      ],
      "declare": false,
      "start": 37,
      "end": 51
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 62,
              "end": 65
            },
            "expression": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 66,
              "end": 67
            },
            "start": 61,
            "end": 67
          },
          "definite": false,
          "start": 57,
          "end": 67
        }
      ],
      "declare": false,
      "start": 53,
      "end": 68
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 74
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 78,
              "end": 85
            },
            "expression": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 86,
              "end": 90
            },
            "start": 77,
            "end": 90
          },
          "definite": false,
          "start": 73,
          "end": 90
        }
      ],
      "declare": false,
      "start": 69,
      "end": 91
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 101,
              "end": 107
            },
            "expression": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 108,
              "end": 110
            },
            "start": 100,
            "end": 110
          },
          "definite": false,
          "start": 96,
          "end": 110
        }
      ],
      "declare": false,
      "start": 92,
      "end": 111
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
            "name": "ar",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 119
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 123,
                "end": 126
              },
              "start": 123,
              "end": 128
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 129,
              "end": 133
            },
            "start": 122,
            "end": 133
          },
          "definite": false,
          "start": 117,
          "end": 133
        }
      ],
      "declare": false,
      "start": 113,
      "end": 134
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 141
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "res",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 152,
                      "end": 158
                    },
                    "start": 150,
                    "end": 158
                  },
                  "start": 146,
                  "end": 158
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 163,
                  "end": 167
                },
                "start": 160,
                "end": 167
              },
              "start": 145,
              "end": 167
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 168,
              "end": 172
            },
            "start": 144,
            "end": 172
          },
          "definite": false,
          "start": 140,
          "end": 172
        }
      ],
      "declare": false,
      "start": 136,
      "end": 173
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 194
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 202
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 204,
                "end": 210
              },
              "start": 202,
              "end": 210
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
            "start": 201,
            "end": 211
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 219,
                "end": 225
              },
              "start": 217,
              "end": 225
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
            "start": 216,
            "end": 226
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 234
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 239,
                      "end": 245
                    },
                    "start": 237,
                    "end": 245
                  },
                  "start": 235,
                  "end": 245
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dy",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 251,
                      "end": 257
                    },
                    "start": 249,
                    "end": 257
                  },
                  "start": 247,
                  "end": 257
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 265
                  },
                  "typeArguments": null,
                  "start": 260,
                  "end": 265
                },
                "start": 258,
                "end": 265
              },
              "body": null,
              "expression": false,
              "start": 234,
              "end": 266
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 231,
            "end": 266
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mult",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 275
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 279,
                        "end": 284
                      },
                      "typeArguments": null,
                      "start": 279,
                      "end": 284
                    },
                    "start": 277,
                    "end": 284
                  },
                  "start": 276,
                  "end": 284
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 287,
                    "end": 292
                  },
                  "typeArguments": null,
                  "start": 287,
                  "end": 292
                },
                "start": 285,
                "end": 292
              },
              "body": null,
              "expression": false,
              "start": 275,
              "end": 293
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 271,
            "end": 293
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 309
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 313,
                      "end": 319
                    },
                    "start": 311,
                    "end": 319
                  },
                  "start": 310,
                  "end": 319
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 324,
                      "end": 330
                    },
                    "start": 322,
                    "end": 330
                  },
                  "start": 321,
                  "end": 330
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 309,
              "end": 332
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 298,
            "end": 332
          }
        ],
        "start": 195,
        "end": 334
      },
      "abstract": false,
      "declare": true,
      "start": 175,
      "end": 334
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
            "name": "p_cast",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 346
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 355
              },
              "typeArguments": null,
              "start": 350,
              "end": 355
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 365
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 367,
                    "end": 368
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 364,
                  "end": 368
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
                    "start": 374,
                    "end": 375
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 377,
                    "end": 378
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 374,
                  "end": 378
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 384,
                    "end": 387
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dx",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 398,
                        "end": 400
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 402,
                        "end": 404
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 427,
                              "end": 432
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 433,
                                    "end": 437
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 438,
                                    "end": 439
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 433,
                                  "end": 439
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dx",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 442,
                                  "end": 444
                                },
                                "start": 433,
                                "end": 444
                              },
                              {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 446,
                                    "end": 450
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 451,
                                    "end": 452
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 446,
                                  "end": 452
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dy",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 455,
                                  "end": 457
                                },
                                "start": 446,
                                "end": 457
                              }
                            ],
                            "start": 423,
                            "end": 458
                          },
                          "start": 416,
                          "end": 459
                        }
                      ],
                      "start": 406,
                      "end": 465
                    },
                    "expression": false,
                    "start": 389,
                    "end": 465
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 384,
                  "end": 465
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 471,
                    "end": 475
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 486,
                        "end": 487
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 498,
                            "end": 499
                          },
                          "start": 491,
                          "end": 500
                        }
                      ],
                      "start": 489,
                      "end": 502
                    },
                    "expression": false,
                    "start": 477,
                    "end": 502
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 471,
                  "end": 502
                }
              ],
              "start": 358,
              "end": 504
            },
            "start": 349,
            "end": 505
          },
          "definite": false,
          "start": 340,
          "end": 505
        }
      ],
      "declare": false,
      "start": 336,
      "end": 505
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 506
}
```
