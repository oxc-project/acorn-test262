__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 29,
            "end": 39
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 43,
                "end": 50
              },
              "start": 41,
              "end": 50
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 50
          }
        ],
        "start": 16,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 68
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ObjType1",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 80
            },
            "typeArguments": null,
            "start": 72,
            "end": 80
          },
          {
            "type": "TSNumberKeyword",
            "start": 82,
            "end": 88
          },
          {
            "type": "TSStringKeyword",
            "start": 90,
            "end": 96
          }
        ],
        "start": 71,
        "end": 97
      },
      "declare": false,
      "start": 53,
      "end": 97
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 107
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 125
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 136,
                              "end": 138
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 136,
                              "end": 138
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 136,
                            "end": 138
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 140,
                              "end": 142
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 140,
                              "end": 142
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 140,
                            "end": 142
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 144,
                              "end": 146
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 144,
                              "end": 146
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 144,
                            "end": 146
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 148
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 151
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 154
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TupleType1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 157,
                          "end": 167
                        },
                        "typeArguments": null,
                        "start": 157,
                        "end": 167
                      },
                      "start": 155,
                      "end": 167
                    },
                    "start": 133,
                    "end": 167
                  },
                  "readonly": false,
                  "static": false,
                  "start": 126,
                  "end": 167
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 188,
                              "end": 191
                            },
                            "start": 186,
                            "end": 191
                          },
                          "start": 183,
                          "end": 191
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 194,
                                  "end": 196
                                },
                                "operator": "||",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 200,
                                  "end": 202
                                },
                                "start": 194,
                                "end": 202
                              },
                              "operator": "||",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 206,
                                "end": 208
                              },
                              "start": 194,
                              "end": 208
                            },
                            "operator": "||",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 212,
                              "end": 213
                            },
                            "start": 194,
                            "end": 213
                          },
                          "operator": "||",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 217,
                            "end": 218
                          },
                          "start": 194,
                          "end": 218
                        },
                        "definite": false,
                        "start": 183,
                        "end": 218
                      }
                    ],
                    "declare": false,
                    "start": 179,
                    "end": 219
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
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 237,
                              "end": 240
                            },
                            "start": 235,
                            "end": 240
                          },
                          "start": 232,
                          "end": 240
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 243,
                                    "end": 247
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 248,
                                    "end": 250
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 243,
                                  "end": 250
                                },
                                "operator": "||",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 254,
                                    "end": 258
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 259,
                                    "end": 261
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 254,
                                  "end": 261
                                },
                                "start": 243,
                                "end": 261
                              },
                              "operator": "||",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 265,
                                  "end": 269
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 270,
                                  "end": 272
                                },
                                "optional": false,
                                "computed": false,
                                "start": 265,
                                "end": 272
                              },
                              "start": 243,
                              "end": 272
                            },
                            "operator": "||",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 276,
                                "end": 280
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 281,
                                "end": 282
                              },
                              "optional": false,
                              "computed": false,
                              "start": 276,
                              "end": 282
                            },
                            "start": 243,
                            "end": 282
                          },
                          "operator": "||",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 286,
                              "end": 290
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 291,
                              "end": 292
                            },
                            "optional": false,
                            "computed": false,
                            "start": 286,
                            "end": 292
                          },
                          "start": 243,
                          "end": 292
                        },
                        "definite": false,
                        "start": 232,
                        "end": 292
                      }
                    ],
                    "declare": false,
                    "start": 228,
                    "end": 293
                  }
                ],
                "start": 169,
                "end": 299
              },
              "expression": false,
              "start": 125,
              "end": 299
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 114,
            "end": 299
          }
        ],
        "start": 108,
        "end": 301
      },
      "abstract": false,
      "declare": false,
      "start": 99,
      "end": 301
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
            "start": 307,
            "end": 308
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 317
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 321,
                          "end": 323
                        },
                        "value": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 325,
                          "end": 327
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 321,
                        "end": 327
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 329,
                          "end": 331
                        },
                        "value": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 333,
                          "end": 335
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 329,
                        "end": 335
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 337,
                          "end": 339
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 341,
                          "end": 345
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 337,
                        "end": 345
                      }
                    ],
                    "start": 319,
                    "end": 347
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 349,
                    "end": 351
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 353,
                    "end": 358
                  }
                ],
                "start": 318,
                "end": 359
              }
            ],
            "start": 311,
            "end": 360
          },
          "definite": false,
          "start": 307,
          "end": 360
        }
      ],
      "declare": false,
      "start": 303,
      "end": 361
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a_x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 371
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a_x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 377
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a_x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 383
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a_y",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 388
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a_z",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 393
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 366,
            "end": 394
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 399
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 400,
                  "end": 402
                },
                "optional": false,
                "computed": false,
                "start": 398,
                "end": 402
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 405
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 408
                },
                "optional": false,
                "computed": false,
                "start": 404,
                "end": 408
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 411
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 414
                },
                "optional": false,
                "computed": false,
                "start": 410,
                "end": 414
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 417
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 419
                },
                "optional": false,
                "computed": false,
                "start": 416,
                "end": 419
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 422
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 424
                },
                "optional": false,
                "computed": false,
                "start": 421,
                "end": 424
              }
            ],
            "start": 397,
            "end": 425
          },
          "definite": false,
          "start": 366,
          "end": 425
        }
      ],
      "declare": false,
      "start": 362,
      "end": 426
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 426
}
```
