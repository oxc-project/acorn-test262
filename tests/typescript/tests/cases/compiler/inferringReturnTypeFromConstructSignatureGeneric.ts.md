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
        "start": 6,
        "end": 19
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
              "start": 20,
              "end": 21
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 30,
              "end": 32
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 35,
              "end": 37
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 37
          }
        ],
        "start": 19,
        "end": 38
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
              "name": "give",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 47
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
                  "name": "value",
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
                        "start": 55,
                        "end": 56
                      },
                      "typeArguments": null,
                      "start": 55,
                      "end": 56
                    },
                    "start": 53,
                    "end": 56
                  },
                  "start": 48,
                  "end": 56
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 76
                    },
                    "start": 64,
                    "end": 77
                  }
                ],
                "start": 58,
                "end": 81
              },
              "expression": false,
              "start": 47,
              "end": 81
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 43,
            "end": 81
          }
        ],
        "start": 39,
        "end": 83
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 83
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 103
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
              "start": 104,
              "end": 105
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 114,
              "end": 120
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 104,
            "end": 120
          }
        ],
        "start": 103,
        "end": 121
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
              "name": "give",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 130
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
                  "name": "value",
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
                        "start": 138,
                        "end": 139
                      },
                      "typeArguments": null,
                      "start": 138,
                      "end": 139
                    },
                    "start": 136,
                    "end": 139
                  },
                  "start": 131,
                  "end": 139
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 159
                    },
                    "start": 147,
                    "end": 160
                  }
                ],
                "start": 141,
                "end": 164
              },
              "expression": false,
              "start": 130,
              "end": 164
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 126,
            "end": 164
          }
        ],
        "start": 122,
        "end": 166
      },
      "abstract": false,
      "declare": false,
      "start": 84,
      "end": 166
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericNumberOrString",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 194
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
              "start": 195,
              "end": 196
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 205,
                  "end": 211
                },
                {
                  "type": "TSStringKeyword",
                  "start": 214,
                  "end": 220
                }
              ],
              "start": 205,
              "end": 220
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 195,
            "end": 220
          }
        ],
        "start": 194,
        "end": 221
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
              "name": "give",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 230
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
                  "name": "value",
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
                        "start": 238,
                        "end": 239
                      },
                      "typeArguments": null,
                      "start": 238,
                      "end": 239
                    },
                    "start": 236,
                    "end": 239
                  },
                  "start": 231,
                  "end": 239
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 259
                    },
                    "start": 247,
                    "end": 260
                  }
                ],
                "start": 241,
                "end": 264
              },
              "expression": false,
              "start": 230,
              "end": 264
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 226,
            "end": 264
          }
        ],
        "start": 222,
        "end": 266
      },
      "abstract": false,
      "declare": false,
      "start": 167,
      "end": 266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 278
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 279,
              "end": 280
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 279,
            "end": 280
          }
        ],
        "start": 278,
        "end": 281
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 299
                  },
                  "typeArguments": null,
                  "start": 298,
                  "end": 299
                },
                "start": 295,
                "end": 299
              },
              "start": 288,
              "end": 299
            },
            "start": 286,
            "end": 299
          },
          "start": 282,
          "end": 299
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 303
          },
          "typeArguments": null,
          "start": 302,
          "end": 303
        },
        "start": 300,
        "end": 303
      },
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 325
              },
              "typeArguments": null,
              "arguments": [],
              "start": 317,
              "end": 327
            },
            "start": 310,
            "end": 328
          }
        ],
        "start": 304,
        "end": 330
      },
      "expression": false,
      "start": 268,
      "end": 330
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
            "name": "g1",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 340
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 358
              }
            ],
            "optional": false,
            "start": 343,
            "end": 359
          },
          "definite": false,
          "start": 338,
          "end": 359
        }
      ],
      "declare": false,
      "start": 332,
      "end": 360
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g1",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 363
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "give",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 368
          },
          "optional": false,
          "computed": false,
          "start": 361,
          "end": 368
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 369,
            "end": 371
          }
        ],
        "optional": false,
        "start": 361,
        "end": 372
      },
      "directive": null,
      "start": 361,
      "end": 373
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
            "name": "g2",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 383
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 387
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 401
              }
            ],
            "optional": false,
            "start": 386,
            "end": 402
          },
          "definite": false,
          "start": 381,
          "end": 402
        }
      ],
      "declare": false,
      "start": 375,
      "end": 403
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 406
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "give",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 411
          },
          "optional": false,
          "computed": false,
          "start": 404,
          "end": 411
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 412,
            "end": 413
          }
        ],
        "optional": false,
        "start": 404,
        "end": 414
      },
      "directive": null,
      "start": 404,
      "end": 415
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
            "name": "g3",
            "optional": false,
            "typeAnnotation": null,
            "start": 423,
            "end": 425
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 429
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericNumberOrString",
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 451
              }
            ],
            "optional": false,
            "start": 428,
            "end": 452
          },
          "definite": false,
          "start": 423,
          "end": 452
        }
      ],
      "declare": false,
      "start": 417,
      "end": 453
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g3",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 456
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "give",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 461
          },
          "optional": false,
          "computed": false,
          "start": 454,
          "end": 461
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 462,
            "end": 463
          }
        ],
        "optional": false,
        "start": 454,
        "end": 464
      },
      "directive": null,
      "start": 454,
      "end": 465
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g3",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 468
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "give",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 473
          },
          "optional": false,
          "computed": false,
          "start": 466,
          "end": 473
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1",
            "raw": "'1'",
            "start": 474,
            "end": 477
          }
        ],
        "optional": false,
        "start": 466,
        "end": 478
      },
      "directive": null,
      "start": 466,
      "end": 479
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
        "start": 508,
        "end": 509
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
              "start": 510,
              "end": 511
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 510,
            "end": 511
          }
        ],
        "start": 509,
        "end": 512
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 513,
        "end": 515
      },
      "abstract": false,
      "declare": false,
      "start": 502,
      "end": 515
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
            "name": "g4",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 524
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 528
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 530
              }
            ],
            "optional": false,
            "start": 527,
            "end": 531
          },
          "definite": false,
          "start": 522,
          "end": 531
        }
      ],
      "declare": false,
      "start": 516,
      "end": 532
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 532
}
```
