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
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 35
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 36,
            "end": 37
          }
        ],
        "start": 35,
        "end": 38
      },
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 48
                },
                "typeArguments": null,
                "start": 47,
                "end": 48
              },
              "start": 45,
              "end": 48
            },
            "accessibility": null,
            "static": false,
            "start": 41,
            "end": 48
          }
        ],
        "start": 39,
        "end": 50
      },
      "declare": false,
      "start": 22,
      "end": 50
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 64
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 70
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 73,
                        "end": 74
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 76,
                          "end": 82
                        },
                        "start": 74,
                        "end": 82
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 73,
                      "end": 82
                    }
                  ],
                  "start": 71,
                  "end": 84
                }
              ],
              "start": 70,
              "end": 85
            },
            "start": 67,
            "end": 85
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 91
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 95
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 97,
                          "end": 103
                        },
                        "start": 95,
                        "end": 103
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 94,
                      "end": 103
                    }
                  ],
                  "start": 92,
                  "end": 105
                }
              ],
              "start": 91,
              "end": 106
            },
            "start": 88,
            "end": 106
          }
        ],
        "start": 67,
        "end": 106
      },
      "declare": false,
      "start": 51,
      "end": 107
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxFactoryFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 131
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBox",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 136
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 132,
            "end": 136
          }
        ],
        "start": 131,
        "end": 137
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TBox",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 144
          },
          "typeArguments": null,
          "start": 140,
          "end": 144
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 156
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 164
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 163,
                  "end": 164
                },
                "start": 157,
                "end": 164
              }
            ],
            "start": 156,
            "end": 165
          },
          "start": 153,
          "end": 165
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 179
                      },
                      "typeArguments": null,
                      "start": 178,
                      "end": 179
                    },
                    "start": 176,
                    "end": 179
                  },
                  "start": 173,
                  "end": 179
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BoxFactory",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 192
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TBox",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 193,
                              "end": 197
                            },
                            "typeArguments": null,
                            "start": 193,
                            "end": 197
                          }
                        ],
                        "start": 192,
                        "end": 198
                      },
                      "start": 182,
                      "end": 198
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 201,
                      "end": 210
                    }
                  ],
                  "start": 182,
                  "end": 210
                },
                "start": 180,
                "end": 210
              },
              "start": 172,
              "end": 210
            }
          ],
          "start": 168,
          "end": 212
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 215,
          "end": 220
        },
        "start": 140,
        "end": 220
      },
      "declare": false,
      "start": 109,
      "end": 221
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 243
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 244,
            "end": 245
          }
        ],
        "start": 243,
        "end": 246
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBox",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 257
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 262
                },
                "typeArguments": null,
                "start": 261,
                "end": 262
              },
              "start": 259,
              "end": 262
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 251,
            "end": 263
          }
        ],
        "start": 247,
        "end": 265
      },
      "declare": false,
      "start": 223,
      "end": 265
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BoxFactoryFactory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 301
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BoxTypes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 310
                      },
                      "typeArguments": null,
                      "start": 302,
                      "end": 310
                    }
                  ],
                  "start": 301,
                  "end": 311
                },
                "start": 284,
                "end": 311
              },
              "start": 282,
              "end": 311
            },
            "start": 281,
            "end": 311
          },
          "init": null,
          "definite": false,
          "start": 281,
          "end": 311
        }
      ],
      "declare": true,
      "start": 267,
      "end": 312
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 320
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 323,
                    "end": 324
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
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
                            "start": 327,
                            "end": 328
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 330,
                            "end": 332
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 327,
                          "end": 332
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
                            "start": 334,
                            "end": 335
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 337,
                            "end": 339
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 334,
                          "end": 339
                        }
                      ],
                      "start": 325,
                      "end": 341
                    }
                  ],
                  "optional": false,
                  "start": 323,
                  "end": 342
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getBox",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 350
                },
                "optional": true,
                "computed": false,
                "start": 323,
                "end": 350
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 323,
              "end": 352
            },
            "start": 323,
            "end": 352
          },
          "definite": false,
          "start": 319,
          "end": 352
        }
      ],
      "declare": false,
      "start": 313,
      "end": 353
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 359
      },
      "consequent": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 372
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 376
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 381
                  },
                  "optional": false,
                  "computed": false,
                  "start": 375,
                  "end": 381
                },
                "definite": false,
                "start": 371,
                "end": 381
              }
            ],
            "declare": false,
            "start": 365,
            "end": 382
          }
        ],
        "start": 361,
        "end": 384
      },
      "alternate": null,
      "start": 354,
      "end": 384
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 384
}
```
