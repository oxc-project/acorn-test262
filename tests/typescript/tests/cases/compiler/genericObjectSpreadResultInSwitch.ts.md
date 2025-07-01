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
        "name": "Params",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 23
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  },
                  "start": 23,
                  "end": 31
                },
                "accessibility": null,
                "static": false,
                "start": 20,
                "end": 32
              }
            ],
            "start": 14,
            "end": 34
          },
          {
            "type": "TSUnionType",
            "types": [
              {
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
                      "name": "tag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 43
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "'a'",
                          "start": 45,
                          "end": 48
                        },
                        "start": 45,
                        "end": 48
                      },
                      "start": 43,
                      "end": 48
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 40,
                    "end": 49
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 54
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 56,
                        "end": 62
                      },
                      "start": 54,
                      "end": 62
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 50,
                    "end": 62
                  }
                ],
                "start": 38,
                "end": 64
              },
              {
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
                      "name": "tag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 72
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "'b'",
                          "start": 74,
                          "end": 77
                        },
                        "start": 74,
                        "end": 77
                      },
                      "start": 72,
                      "end": 77
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 69,
                    "end": 78
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 79,
                      "end": 83
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 85,
                        "end": 91
                      },
                      "start": 83,
                      "end": 91
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 79,
                    "end": 91
                  }
                ],
                "start": 67,
                "end": 93
              }
            ],
            "start": 38,
            "end": 93
          }
        ],
        "start": 14,
        "end": 94
      },
      "declare": false,
      "start": 0,
      "end": 95
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
            "name": "getType",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 110
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Params",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 130
                    },
                    "typeArguments": null,
                    "start": 124,
                    "end": 130
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 114,
                  "end": 130
                }
              ],
              "start": 113,
              "end": 131
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 141
                    },
                    "typeArguments": null,
                    "start": 140,
                    "end": 141
                  },
                  "start": 138,
                  "end": 141
                },
                "start": 132,
                "end": 141
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 184,
                              "end": 187
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 184,
                              "end": 187
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 184,
                            "end": 187
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rest",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 201,
                              "end": 205
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 198,
                            "end": 205
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 211
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "params",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 214,
                        "end": 220
                      },
                      "definite": false,
                      "start": 158,
                      "end": 220
                    }
                  ],
                  "declare": false,
                  "start": 152,
                  "end": 221
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 238
                  },
                  "start": 227,
                  "end": 239
                }
              ],
              "start": 146,
              "end": 241
            },
            "id": null,
            "generator": false,
            "start": 113,
            "end": 241
          },
          "definite": false,
          "start": 103,
          "end": 241
        }
      ],
      "declare": false,
      "start": 97,
      "end": 242
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
            "name": "params",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 272
                },
                "typeArguments": null,
                "start": 266,
                "end": 272
              },
              "start": 264,
              "end": 272
            },
            "start": 258,
            "end": 272
          },
          "init": null,
          "definite": false,
          "start": 258,
          "end": 272
        }
      ],
      "declare": true,
      "start": 244,
      "end": 273
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "params",
          "optional": false,
          "typeAnnotation": null,
          "start": 283,
          "end": 289
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "tag",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 293
        },
        "optional": false,
        "computed": false,
        "start": 283,
        "end": 293
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 306,
            "end": 309
          },
          "consequent": [
            {
              "type": "BlockStatement",
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 394
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "getType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 397,
                            "end": 404
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 405,
                              "end": 411
                            }
                          ],
                          "optional": false,
                          "start": 397,
                          "end": 412
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 413,
                          "end": 417
                        },
                        "optional": false,
                        "computed": false,
                        "start": 397,
                        "end": 417
                      },
                      "definite": false,
                      "start": 388,
                      "end": 417
                    }
                  ],
                  "declare": false,
                  "start": 382,
                  "end": 418
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 428,
                  "end": 434
                }
              ],
              "start": 311,
              "end": 440
            }
          ],
          "start": 301,
          "end": 440
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 450,
            "end": 453
          },
          "consequent": [
            {
              "type": "BlockStatement",
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 532,
                        "end": 538
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "getType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 541,
                            "end": 548
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 549,
                              "end": 555
                            }
                          ],
                          "optional": false,
                          "start": 541,
                          "end": 556
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 557,
                          "end": 561
                        },
                        "optional": false,
                        "computed": false,
                        "start": 541,
                        "end": 561
                      },
                      "definite": false,
                      "start": 532,
                      "end": 561
                    }
                  ],
                  "declare": false,
                  "start": 526,
                  "end": 562
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 572,
                  "end": 578
                }
              ],
              "start": 455,
              "end": 584
            }
          ],
          "start": 445,
          "end": 584
        }
      ],
      "start": 275,
      "end": 586
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 586
}
```
