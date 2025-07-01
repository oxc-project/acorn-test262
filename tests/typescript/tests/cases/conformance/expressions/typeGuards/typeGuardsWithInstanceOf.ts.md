__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 29
          }
        ],
        "start": 12,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 46
                },
                "typeArguments": null,
                "start": 45,
                "end": 46
              },
              "start": 43,
              "end": 46
            },
            "start": 36,
            "end": 46
          },
          "init": null,
          "definite": true,
          "start": 36,
          "end": 46
        }
      ],
      "declare": false,
      "start": 32,
      "end": 47
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 63
                },
                "typeArguments": null,
                "start": 62,
                "end": 63
              },
              "start": 60,
              "end": 63
            },
            "start": 52,
            "end": 63
          },
          "init": null,
          "definite": true,
          "start": 52,
          "end": 63
        }
      ],
      "declare": false,
      "start": 48,
      "end": 64
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 78
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "RegExp",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 96
          },
          "start": 72,
          "end": 96
        },
        "prefix": true,
        "start": 70,
        "end": 97
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 111
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "result2",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 121
              },
              "start": 105,
              "end": 121
            },
            "directive": null,
            "start": 105,
            "end": 122
          }
        ],
        "start": 99,
        "end": 124
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 141
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 148
            },
            "optional": false,
            "computed": false,
            "start": 135,
            "end": 148
          },
          "prefix": true,
          "start": 134,
          "end": 148
        },
        "consequent": {
          "type": "BlockStatement",
          "body": [],
          "start": 150,
          "end": 153
        },
        "alternate": null,
        "start": 130,
        "end": 153
      },
      "start": 66,
      "end": 153
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OnChanges",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 196
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onChanges",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 212
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "changes",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 228
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 229,
                          "end": 235
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 237,
                          "end": 244
                        }
                      ],
                      "start": 228,
                      "end": 245
                    },
                    "start": 222,
                    "end": 245
                  },
                  "start": 220,
                  "end": 245
                },
                "start": 213,
                "end": 245
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 248,
                "end": 252
              },
              "start": 246,
              "end": 252
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 203,
            "end": 252
          }
        ],
        "start": 197,
        "end": 254
      },
      "declare": false,
      "start": 177,
      "end": 254
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validator",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 274
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "validate",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 289
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 293,
                    "end": 297
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 306
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 307,
                          "end": 313
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 315,
                          "end": 322
                        }
                      ],
                      "start": 306,
                      "end": 323
                    },
                    "start": 300,
                    "end": 323
                  }
                ],
                "start": 293,
                "end": 323
              },
              "start": 291,
              "end": 323
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 281,
            "end": 324
          }
        ],
        "start": 275,
        "end": 326
      },
      "declare": false,
      "start": 255,
      "end": 326
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 335
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
              "name": "validate",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 350
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
                      "properties": [],
                      "start": 370,
                      "end": 372
                    },
                    "start": 363,
                    "end": 372
                  }
                ],
                "start": 353,
                "end": 378
              },
              "expression": false,
              "start": 350,
              "end": 378
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 342,
            "end": 378
          }
        ],
        "start": 336,
        "end": 380
      },
      "abstract": false,
      "declare": false,
      "start": 328,
      "end": 380
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 394
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Validator",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 410,
                            "end": 419
                          },
                          "typeArguments": null,
                          "start": 410,
                          "end": 419
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Partial",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 422,
                            "end": 429
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OnChanges",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 430,
                                  "end": 439
                                },
                                "typeArguments": null,
                                "start": 430,
                                "end": 439
                              }
                            ],
                            "start": 429,
                            "end": 440
                          },
                          "start": 422,
                          "end": 440
                        }
                      ],
                      "start": 410,
                      "end": 440
                    },
                    "start": 408,
                    "end": 440
                  },
                  "start": 407,
                  "end": 440
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 443,
                    "end": 447
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 451,
                    "end": 454
                  },
                  "start": 443,
                  "end": 454
                },
                "definite": false,
                "start": 407,
                "end": 454
              }
            ],
            "declare": false,
            "start": 403,
            "end": 455
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 465
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 478
              },
              "start": 464,
              "end": 478
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 491
                  },
                  "directive": null,
                  "start": 490,
                  "end": 491
                }
              ],
              "start": 480,
              "end": 535
            },
            "alternate": null,
            "start": 460,
            "end": 535
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 541
            },
            "directive": null,
            "start": 540,
            "end": 541
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 827
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "onChanges",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 837
              },
              "optional": false,
              "computed": false,
              "start": 826,
              "end": 837
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 849,
                        "end": 850
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onChanges",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 851,
                        "end": 860
                      },
                      "optional": false,
                      "computed": false,
                      "start": 849,
                      "end": 860
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 861,
                        "end": 863
                      }
                    ],
                    "optional": false,
                    "start": 849,
                    "end": 864
                  },
                  "directive": null,
                  "start": 849,
                  "end": 865
                }
              ],
              "start": 839,
              "end": 871
            },
            "alternate": null,
            "start": 822,
            "end": 871
          }
        ],
        "start": 397,
        "end": 873
      },
      "expression": false,
      "start": 382,
      "end": 873
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 874
}
```
