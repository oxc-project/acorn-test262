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
        "name": "GenericObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 76
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
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 81,
              "end": 87
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 87
          }
        ],
        "start": 76,
        "end": 88
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 98
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
                  "name": "x",
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
                        "start": 102,
                        "end": 103
                      },
                      "typeArguments": null,
                      "start": 102,
                      "end": 103
                    },
                    "start": 100,
                    "end": 103
                  },
                  "start": 99,
                  "end": 103
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 105,
                "end": 107
              },
              "expression": false,
              "start": 98,
              "end": 107
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 93,
            "end": 107
          }
        ],
        "start": 89,
        "end": 109
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 109
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 119
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 139
              },
              "typeArguments": null,
              "arguments": [],
              "start": 122,
              "end": 141
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GenericObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 158
                  },
                  "typeArguments": null,
                  "start": 145,
                  "end": 158
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
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 166,
                            "end": 167
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 170,
                              "end": 176
                            },
                            "start": 168,
                            "end": 176
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 166,
                          "end": 176
                        }
                      ],
                      "start": 164,
                      "end": 178
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 183,
                            "end": 184
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 187,
                              "end": 193
                            },
                            "start": 185,
                            "end": 193
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 183,
                          "end": 193
                        }
                      ],
                      "start": 181,
                      "end": 195
                    }
                  ],
                  "start": 164,
                  "end": 195
                }
              ],
              "start": 145,
              "end": 196
            },
            "start": 122,
            "end": 196
          },
          "definite": false,
          "start": 117,
          "end": 196
        }
      ],
      "declare": false,
      "start": 111,
      "end": 197
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 200
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 202
          },
          "optional": false,
          "computed": false,
          "start": 198,
          "end": 202
        },
        "right": {
          "type": "Literal",
          "value": 432,
          "raw": "432",
          "start": 205,
          "end": 208
        },
        "start": 198,
        "end": 208
      },
      "directive": null,
      "start": 198,
      "end": 209
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericObjectWithoutSetter",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 248,
              "end": 254
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 244,
            "end": 254
          }
        ],
        "start": 243,
        "end": 255
      },
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
              "start": 268,
              "end": 269
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
                  "start": 271,
                  "end": 272
                },
                "typeArguments": null,
                "start": 271,
                "end": 272
              },
              "start": 269,
              "end": 272
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 260,
            "end": 273
          }
        ],
        "start": 256,
        "end": 275
      },
      "abstract": false,
      "declare": false,
      "start": 211,
      "end": 275
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 285
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericObjectWithoutSetter",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 318
              },
              "typeArguments": null,
              "arguments": [],
              "start": 288,
              "end": 320
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GenericObjectWithoutSetter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 350
                  },
                  "typeArguments": null,
                  "start": 324,
                  "end": 350
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
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 358,
                            "end": 359
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 362,
                              "end": 368
                            },
                            "start": 360,
                            "end": 368
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 358,
                          "end": 368
                        }
                      ],
                      "start": 356,
                      "end": 370
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 375,
                            "end": 376
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 379,
                              "end": 385
                            },
                            "start": 377,
                            "end": 385
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 375,
                          "end": 385
                        }
                      ],
                      "start": 373,
                      "end": 387
                    }
                  ],
                  "start": 356,
                  "end": 387
                }
              ],
              "start": 324,
              "end": 388
            },
            "start": 288,
            "end": 388
          },
          "definite": false,
          "start": 283,
          "end": 388
        }
      ],
      "declare": false,
      "start": 277,
      "end": 389
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 392
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 394
          },
          "optional": false,
          "computed": false,
          "start": 390,
          "end": 394
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 397,
          "end": 399
        },
        "start": 390,
        "end": 399
      },
      "directive": null,
      "start": 390,
      "end": 400
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NormalObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 408,
        "end": 420
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 430
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 434,
                      "end": 440
                    },
                    "start": 432,
                    "end": 440
                  },
                  "start": 431,
                  "end": 440
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 442,
                "end": 444
              },
              "expression": false,
              "start": 430,
              "end": 444
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 425,
            "end": 444
          }
        ],
        "start": 421,
        "end": 446
      },
      "abstract": false,
      "declare": false,
      "start": 402,
      "end": 446
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 456
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "NormalObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 475
              },
              "typeArguments": null,
              "arguments": [],
              "start": 459,
              "end": 477
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NormalObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 481,
                    "end": 493
                  },
                  "typeArguments": null,
                  "start": 481,
                  "end": 493
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
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 501,
                            "end": 502
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 505,
                              "end": 511
                            },
                            "start": 503,
                            "end": 511
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 501,
                          "end": 511
                        }
                      ],
                      "start": 499,
                      "end": 513
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 518,
                            "end": 519
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 522,
                              "end": 528
                            },
                            "start": 520,
                            "end": 528
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 518,
                          "end": 528
                        }
                      ],
                      "start": 516,
                      "end": 530
                    }
                  ],
                  "start": 499,
                  "end": 530
                }
              ],
              "start": 481,
              "end": 531
            },
            "start": 459,
            "end": 531
          },
          "definite": false,
          "start": 454,
          "end": 531
        }
      ],
      "declare": false,
      "start": 448,
      "end": 532
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": null,
            "start": 533,
            "end": 535
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 537
          },
          "optional": false,
          "computed": false,
          "start": 533,
          "end": 537
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 540,
          "end": 542
        },
        "start": 533,
        "end": 542
      },
      "directive": null,
      "start": 533,
      "end": 543
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 543
}
```
