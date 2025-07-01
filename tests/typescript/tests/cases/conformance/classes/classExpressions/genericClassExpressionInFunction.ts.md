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
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
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
              "name": "genericVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 27
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
                  "start": 29,
                  "end": 30
                },
                "typeArguments": null,
                "start": 29,
                "end": 30
              },
              "start": 27,
              "end": 30
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
            "start": 17,
            "end": 30
          }
        ],
        "start": 11,
        "end": 32
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 44
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 45,
            "end": 46
          }
        ],
        "start": 44,
        "end": 47
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 112
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 114
                    },
                    "typeArguments": null,
                    "start": 113,
                    "end": 114
                  }
                ],
                "start": 112,
                "end": 115
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 116,
                "end": 119
              },
              "abstract": false,
              "declare": false,
              "start": 97,
              "end": 119
            },
            "start": 90,
            "end": 119
          }
        ],
        "start": 50,
        "end": 121
      },
      "expression": false,
      "start": 33,
      "end": 121
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 130
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 131,
            "end": 132
          }
        ],
        "start": 130,
        "end": 133
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
              "name": "anon",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 144
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 162
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 164
                    },
                    "typeArguments": null,
                    "start": 163,
                    "end": 164
                  }
                ],
                "start": 162,
                "end": 165
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 166,
                "end": 169
              },
              "abstract": false,
              "declare": false,
              "start": 147,
              "end": 169
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 140,
            "end": 169
          }
        ],
        "start": 134,
        "end": 171
      },
      "abstract": false,
      "declare": false,
      "start": 122,
      "end": 171
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 183
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
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 185
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 184,
            "end": 185
          }
        ],
        "start": 183,
        "end": 186
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 213
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TInner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 220
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 214,
                    "end": 220
                  }
                ],
                "start": 213,
                "end": 221
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 231
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "W",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 233
                    },
                    "typeArguments": null,
                    "start": 232,
                    "end": 233
                  }
                ],
                "start": 231,
                "end": 234
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 235,
                "end": 238
              },
              "abstract": false,
              "declare": false,
              "start": 202,
              "end": 238
            },
            "start": 195,
            "end": 238
          }
        ],
        "start": 189,
        "end": 240
      },
      "expression": false,
      "start": 172,
      "end": 240
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 270
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B1",
          "optional": false,
          "typeAnnotation": null,
          "start": 279,
          "end": 281
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 282,
              "end": 288
            }
          ],
          "start": 281,
          "end": 289
        },
        "arguments": [],
        "optional": false,
        "start": 279,
        "end": 291
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
              "name": "namae",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 303
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 305,
                "end": 311
              },
              "start": 303,
              "end": 311
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
            "start": 298,
            "end": 312
          }
        ],
        "start": 292,
        "end": 314
      },
      "abstract": false,
      "declare": false,
      "start": 263,
      "end": 314
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
        "start": 321,
        "end": 322
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "B2",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 338
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 339,
                "end": 345
              }
            ],
            "start": 338,
            "end": 346
          },
          "arguments": [],
          "start": 332,
          "end": 348
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "anon",
          "optional": false,
          "typeAnnotation": null,
          "start": 349,
          "end": 353
        },
        "optional": false,
        "computed": false,
        "start": 332,
        "end": 353
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 365
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 367,
                "end": 373
              },
              "start": 365,
              "end": 373
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
            "start": 361,
            "end": 374
          }
        ],
        "start": 355,
        "end": 376
      },
      "abstract": false,
      "declare": false,
      "start": 315,
      "end": 376
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b3Number",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 389
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 394
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 395,
                  "end": 401
                }
              ],
              "start": 394,
              "end": 402
            },
            "arguments": [],
            "optional": false,
            "start": 392,
            "end": 404
          },
          "definite": false,
          "start": 381,
          "end": 404
        }
      ],
      "declare": false,
      "start": 377,
      "end": 405
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 412,
        "end": 413
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "b3Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 422,
        "end": 430
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 431,
            "end": 437
          }
        ],
        "start": 430,
        "end": 438
      },
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
              "name": "nom",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 448
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 450,
                "end": 456
              },
              "start": 448,
              "end": 456
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
            "start": 445,
            "end": 457
          }
        ],
        "start": 439,
        "end": 459
      },
      "abstract": false,
      "declare": false,
      "start": 406,
      "end": 459
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 465
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 473
            },
            "typeArguments": null,
            "arguments": [],
            "start": 468,
            "end": 475
          },
          "definite": false,
          "start": 464,
          "end": 475
        }
      ],
      "declare": false,
      "start": 460,
      "end": 476
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 482
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 490
            },
            "typeArguments": null,
            "arguments": [],
            "start": 485,
            "end": 492
          },
          "definite": false,
          "start": 481,
          "end": 492
        }
      ],
      "declare": false,
      "start": 477,
      "end": 493
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
            "start": 498,
            "end": 499
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 507
            },
            "typeArguments": null,
            "arguments": [],
            "start": 502,
            "end": 509
          },
          "definite": false,
          "start": 498,
          "end": 509
        }
      ],
      "declare": false,
      "start": 494,
      "end": 510
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 511,
            "end": 512
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "genericVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 523
          },
          "optional": false,
          "computed": false,
          "start": 511,
          "end": 523
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 526,
          "end": 528
        },
        "start": 511,
        "end": 528
      },
      "directive": null,
      "start": 511,
      "end": 529
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 531
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "genericVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 542
          },
          "optional": false,
          "computed": false,
          "start": 530,
          "end": 542
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 545,
          "end": 547
        },
        "start": 530,
        "end": 547
      },
      "directive": null,
      "start": 530,
      "end": 548
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 550
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "genericVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 561
          },
          "optional": false,
          "computed": false,
          "start": 549,
          "end": 561
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 564,
          "end": 566
        },
        "start": 549,
        "end": 566
      },
      "directive": null,
      "start": 549,
      "end": 567
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 567
}
```
